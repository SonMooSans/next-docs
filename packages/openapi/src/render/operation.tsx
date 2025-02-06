import { Fragment, type ReactElement, type ReactNode } from 'react';
import {
  generateSample,
  type EndpointSample,
  EndpointSamples,
} from '@/utils/generate-sample';
import * as CURL from '@/requests/curl';
import * as JS from '@/requests/javascript';
import * as Go from '@/requests/go';
import * as Python from '@/requests/python';
import type {
  CallbackObject,
  MethodInformation,
  OperationObject,
  RenderContext,
  SecurityRequirementObject,
} from '@/types';
import { getPreferredType, NoReference } from '@/utils/schema';
import { getTypescriptSchema } from '@/utils/get-typescript-schema';
import { getSecurities, getSecurityPrefix } from '@/utils/get-security';
import { idToTitle } from '@/utils/id-to-title';
import { type ResponseTypeProps } from '@/render/renderer';
import { Markdown } from './markdown';
import { heading } from './heading';
import { Schema } from './schema';
import { createMethod } from '@/server/create-method';
import { methodKeys } from '@/build-routes';

interface CustomProperty {
  'x-codeSamples'?: CodeSample[];
}

export interface CodeSample {
  lang: string;
  label: string;
  source:
    | string
    | ((endpoint: EndpointSample, exampleKey: string) => string | undefined)
    | false;
}

interface CodeSampleCompiled {
  lang: string;
  label: string;
  source: string;
}

export function Operation({
  type = 'operation',
  path,
  method,
  ctx,
  hasHead,
  headingLevel = 2,
  selectedSampleKey,
  exclusiveSampleKey,
}: {
  type?: 'webhook' | 'operation';
  path: string;
  method: MethodInformation;
  ctx: RenderContext;

  hasHead?: boolean;
  headingLevel?: number;
  selectedSampleKey?: string;
  exclusiveSampleKey?: string;
}): ReactElement {
  const body = method.requestBody;
  const security = method.security ?? ctx.schema.document.security;
  let headNode: ReactNode = null;
  let bodyNode: ReactNode = null;
  let responseNode: ReactNode = null;
  let callbacksNode: ReactNode = null;

  if (hasHead) {
    const title =
      method.summary ??
      (method.operationId ? idToTitle(method.operationId) : path);

    headNode = (
      <>
        {heading(headingLevel, title, ctx)}
        {method.description ? (
          <Markdown key="description" text={method.description} />
        ) : null}
      </>
    );
    headingLevel++;
  }

  if (body) {
    const type = getPreferredType(body.content);
    if (!type)
      throw new Error(`No supported media type for body content: ${path}`);

    bodyNode = (
      <>
        {heading(headingLevel, 'Request Body', ctx)}
        <div className="mb-8 flex flex-row items-center justify-between gap-2">
          <code>{type}</code>
          <span>{body.required ? 'Required' : 'Optional'}</span>
        </div>
        {body.description ? <Markdown text={body.description} /> : null}
        <Schema
          name="body"
          schema={body.content[type].schema ?? {}}
          ctx={{
            readOnly: method.method === 'GET',
            writeOnly: method.method !== 'GET',
            required: body.required ?? false,
            render: ctx,
            allowFile: type === 'multipart/form-data',
          }}
        />
      </>
    );
  }

  if (method.responses && ctx.showResponseSchema) {
    responseNode = (
      <>
        {heading(headingLevel, 'Response Body', ctx)}

        {Object.entries(method.responses).map(([status, response]) => {
          if (!response.content) return;

          const mediaType = getPreferredType(response.content);
          if (!mediaType) return null;

          const content = response.content[mediaType];
          if (!content.schema) return null;

          return (
            <Fragment key={status}>
              {heading(headingLevel + 1, status, ctx)}
              <Markdown text={response.description} />

              <Schema
                name="response"
                schema={content.schema}
                ctx={{
                  render: ctx,
                  writeOnly: false,
                  readOnly: true,
                  required: true,
                }}
              />
            </Fragment>
          );
        })}
      </>
    );
  }

  const parameterGroups = new Map<string, ReactNode[]>();
  const endpoint = generateSample(path, method, ctx);

  for (const param of method.parameters ?? []) {
    const pInfo = endpoint.parameters.find(
      (item) => item.name === param.name && item.in === param.in,
    );
    if (!pInfo) continue;

    const schema = pInfo.schema;
    const groupName =
      {
        path: 'Path Parameters',
        query: 'Query Parameters',
        header: 'Header Parameters',
        cookie: 'Cookie Parameters',
      }[param.in] ?? 'Other Parameters';

    const group = parameterGroups.get(groupName) ?? [];
    group.push(
      <Schema
        key={param.name}
        name={param.name}
        schema={{
          ...schema,
          description: param.description ?? schema.description,
          deprecated:
            (param.deprecated ?? false) || (schema.deprecated ?? false),
        }}
        ctx={{
          parseObject: false,
          readOnly: method.method === 'GET',
          writeOnly: method.method !== 'GET',
          required: param.required ?? false,
          render: ctx,
        }}
      />,
    );
    parameterGroups.set(groupName, group);
  }

  if (method.callbacks) {
    callbacksNode = (
      <>
        {heading(headingLevel, 'Webhooks', ctx)}
        {Object.entries(method.callbacks).map(([name, callback]) => (
          <WebhookCallback
            key={name}
            callback={callback}
            ctx={ctx}
            headingLevel={headingLevel}
          />
        ))}
      </>
    );
  }

  const info = (
    <ctx.renderer.APIInfo head={headNode} method={method.method} route={path}>
      {type === 'operation' ? (
        <ctx.renderer.APIPlayground path={path} method={method} ctx={ctx} />
      ) : null}
      {security && Object.keys(security).length > 0 ? (
        <>
          {heading(headingLevel, 'Authorization', ctx)}
          <AuthSection requirements={security} ctx={ctx} />
        </>
      ) : null}
      {bodyNode}
      {Array.from(parameterGroups.entries()).map(([group, params]) => {
        return (
          <Fragment key={group}>
            {heading(headingLevel, group, ctx)}
            {params}
          </Fragment>
        );
      })}
      {responseNode}
      {callbacksNode}
    </ctx.renderer.APIInfo>
  );

  if (type === 'operation') {
    return (
      <ctx.renderer.API>
        {info}
        <APIExample
          method={method}
          endpoint={endpoint}
          ctx={ctx}
          selectedSampleKey={selectedSampleKey}
          exclusiveSampleKey={exclusiveSampleKey}
        />
      </ctx.renderer.API>
    );
  } else {
    return info;
  }
}

const defaultSamples: CodeSample[] = [
  {
    label: 'cURL',
    source: CURL.getSampleRequest,
    lang: 'bash',
  },
  {
    label: 'JavaScript',
    source: JS.getSampleRequest,
    lang: 'js',
  },
  {
    label: 'Go',
    source: Go.getSampleRequest,
    lang: 'go',
  },
  {
    label: 'Python',
    source: Python.getSampleRequest,
    lang: 'python',
  },
];

async function APIExample({
  method,
  endpoint,
  ctx,
  selectedSampleKey,
  exclusiveSampleKey,
}: {
  method: MethodInformation;
  endpoint: EndpointSample;
  ctx: RenderContext;
  selectedSampleKey?: string;
  exclusiveSampleKey?: string;
}) {
  const renderer = ctx.renderer;
  const children: ReactNode[] = [];

  // fallback for methods that have no request body, we also want to show examples for
  const existingSamples: EndpointSamples = endpoint.body?.samples ?? {
    _default: {},
  };
  const samples: Record<
    string,
    { samples: CodeSampleCompiled[]; title: string; description?: string }
  > = {};
  for (const exampleKey in existingSamples) {
    samples[exampleKey] = {
      title: existingSamples[exampleKey]?.summary ?? exampleKey,
      description: existingSamples[exampleKey]?.description,
      samples: dedupe([
        ...defaultSamples,
        ...(ctx.generateCodeSamples
          ? await ctx.generateCodeSamples(endpoint)
          : []),
        ...((method as CustomProperty)['x-codeSamples'] ?? []),
      ]).flatMap<CodeSampleCompiled>((sample) => {
        if (sample.source === false) return [];

        const result =
          typeof sample.source === 'function'
            ? sample.source(endpoint, exampleKey)
            : sample.source;
        if (result === undefined) return [];

        return {
          ...sample,
          source: result,
        };
      }),
    };
  }

  if (Object.keys(samples).length > 0) {
    const sampleTabs: ReactNode[] = [];
    const titles = [];
    if (
      (samples && Object.keys(samples).length === 1 && samples['_default']) ||
      (exclusiveSampleKey && samples[exclusiveSampleKey])
    ) {
      // if exclusiveSampleKey is present, we don't use tabs
      // if only the fallback or non described openapi legacy example is present, we don't use tabs
      const sampleKey = exclusiveSampleKey ?? '_default';
      children.push(
        <renderer.Requests
          key={`requests-${sampleKey}`}
          items={samples[sampleKey].samples.map((s) => s.label)}
        >
          {samples[sampleKey].samples.map((s) => (
            <renderer.Request
              key={`requests-${sampleKey}-${s.label}`}
              name={s.label}
              code={s.source}
              language={s.lang}
            />
          ))}
        </renderer.Requests>,
      );
    } else {
      for (const sampleKey in samples) {
        const title = samples[sampleKey].title;
        titles.push(title);
        sampleTabs.push(
          <renderer.Sample key={sampleKey} value={title}>
            {samples[sampleKey].description && (
              <Markdown text={samples[sampleKey].description} />
            )}
            <renderer.Requests
              key={`requests-${sampleKey}`}
              items={samples[sampleKey].samples.map((s) => s.label)}
            >
              {samples[sampleKey].samples.map((s) => (
                <renderer.Request
                  key={`requests-${sampleKey}-${s.label}`}
                  name={s.label}
                  code={s.source}
                  language={s.lang}
                />
              ))}
            </renderer.Requests>
          </renderer.Sample>,
        );
      }
      children.push(
        <renderer.Samples
          items={titles}
          key="samples"
          defaultValue={selectedSampleKey}
        >
          {sampleTabs}
        </renderer.Samples>,
      );
    }
  }

  children.push(
    <ResponseTabs
      key="responses"
      operation={method}
      ctx={ctx}
      endpoint={endpoint}
    />,
  );

  return <renderer.APIExample>{children}</renderer.APIExample>;
}

function WebhookCallback({
  callback,
  ctx,
  headingLevel,
}: {
  callback: CallbackObject;
  ctx: RenderContext;
  headingLevel: number;
}) {
  return Object.entries(callback).map(([path, pathItem]) => {
    const pathNodes = methodKeys.map((method) => {
      const operation = pathItem[method];
      if (!operation) return null;

      return (
        <Operation
          key={method}
          type="webhook"
          hasHead
          path={path}
          headingLevel={headingLevel + 1}
          method={createMethod(
            method,
            pathItem,
            operation as NoReference<OperationObject>,
          )}
          ctx={ctx}
        />
      );
    });

    return <Fragment key={path}>{pathNodes}</Fragment>;
  });
}

/**
 * Remove duplicated labels
 */
function dedupe(samples: CodeSample[]): CodeSample[] {
  const set = new Set<string>();
  const out: CodeSample[] = [];

  for (let i = samples.length - 1; i >= 0; i--) {
    if (set.has(samples[i].label)) continue;

    set.add(samples[i].label);
    out.unshift(samples[i]);
  }
  return out;
}

function AuthSection({
  ctx: {
    schema: { document },
    renderer,
  },
  requirements,
}: {
  requirements: SecurityRequirementObject[];
  ctx: RenderContext;
}): ReactNode {
  let id = 0;
  const info: ReactNode[] = [];

  for (const requirement of requirements) {
    for (const schema of getSecurities(requirement, document)) {
      const prefix = getSecurityPrefix(schema);
      const scopeElement =
        schema.scopes.length > 0 ? (
          <p>
            Scope: <code>{schema.scopes.join(', ')}</code>
          </p>
        ) : null;

      if (schema.type === 'http' || schema.type === 'oauth2') {
        info.push(
          <renderer.Property
            key={id++}
            name="Authorization"
            type={prefix ? `${prefix} <token>` : '<token>'}
            required
          >
            {schema.description ? <Markdown text={schema.description} /> : null}
            <p>
              In: <code>header</code>
            </p>
            {scopeElement}
          </renderer.Property>,
        );
      }

      if (schema.type === 'apiKey') {
        info.push(
          <renderer.Property key={id++} name={schema.name} type="<token>">
            {schema.description ? <Markdown text={schema.description} /> : null}
            <p>
              In: <code>{schema.in}</code>
              {scopeElement}
            </p>
          </renderer.Property>,
        );
      }
      if (schema.type === 'openIdConnect') {
        info.push(
          <renderer.Property
            key={id++}
            name="OpenID Connect"
            type="<token>"
            required
          >
            {schema.description ? <Markdown text={schema.description} /> : null}
            {scopeElement}
          </renderer.Property>,
        );
      }
    }
  }

  return info;
}

async function ResponseTabs({
  endpoint,
  operation,
  ctx: { renderer, generateTypeScriptSchema, schema },
}: {
  endpoint: EndpointSample;
  operation: MethodInformation;
  ctx: RenderContext;
}): Promise<ReactElement | null> {
  const items: string[] = [];
  const children: ReactNode[] = [];

  if (!operation.responses) return null;
  for (const code of Object.keys(operation.responses)) {
    const types: ResponseTypeProps[] = [];
    let description = operation.responses[code].description;

    if (!description && code in endpoint.responses)
      description = endpoint.responses[code].schema.description ?? '';

    if (code in endpoint.responses) {
      types.push({
        lang: 'json',
        label: 'Response',
        code: JSON.stringify(endpoint.responses[code].sample, null, 2),
      });
    }

    let ts: string | undefined;
    if (generateTypeScriptSchema) {
      ts = await generateTypeScriptSchema(endpoint, code);
    } else if (generateTypeScriptSchema === undefined) {
      ts = await getTypescriptSchema(endpoint, code, schema.dereferenceMap);
    }

    if (ts) {
      types.push({
        code: ts,
        lang: 'ts',
        label: 'TypeScript',
      });
    }

    items.push(code);
    children.push(
      <renderer.Response key={code} value={code}>
        <Markdown text={description} />
        {types.length > 0 ? (
          <renderer.ResponseTypes>
            {types.map((type) => (
              <renderer.ResponseType key={type.lang} {...type} />
            ))}
          </renderer.ResponseTypes>
        ) : null}
      </renderer.Response>,
    );
  }

  if (items.length === 0) return null;

  return <renderer.Responses items={items}>{children}</renderer.Responses>;
}
