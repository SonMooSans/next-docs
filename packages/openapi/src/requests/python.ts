import { type EndpointSample } from '@/utils/generate-sample';
import { inputToString } from '@/utils/input-to-string';

export function getSampleRequest(
  endpoint: EndpointSample,
  sampleKey: string,
): string {
  const headers = new Map<string, unknown>();
  const cookies = new Map<string, unknown>();
  const variables = new Map<string, string>();

  for (const param of endpoint.parameters) {
    if (param.in === 'header') headers.set(param.name, param.sample);
    if (param.in === 'cookie') cookies.set(param.name, param.sample);
  }

  if (endpoint.body) {
    switch (endpoint.body.mediaType) {
      case 'application/json':
        variables.set(
          'json',
          JSON.stringify(
            endpoint.body.samples[sampleKey]?.value ?? {},
            null,
            2,
          ),
        );
        break;
      case 'multipart/form-data':
        headers.set('Content-Type', endpoint.body.mediaType);
        variables.set(
          'data',
          JSON.stringify(
            endpoint.body.samples[sampleKey]?.value ?? {},
            null,
            2,
          ),
        );
        break;
      default:
        headers.set('Content-Type', endpoint.body.mediaType);

        variables.set(
          'data',
          inputToString(
            endpoint.body.samples[sampleKey]?.value ?? '',
            endpoint.body.mediaType,
            'python',
          ),
        );
    }
  }

  if (headers.size > 0) {
    variables.set(
      'headers',
      JSON.stringify(Object.fromEntries(headers.entries()), null, 2),
    );
  }

  if (cookies.size > 0) {
    variables.set(
      'cookies',
      JSON.stringify(Object.fromEntries(cookies.entries()), null, 2),
    );
  }

  return `import requests

url = ${JSON.stringify(endpoint.url)}
${Array.from(variables.entries())
  .map(([k, v]) => `${k} = ${v}`)
  .join('\n')}
response = requests.request("${endpoint.method}", url${
    variables.size > 0
      ? `, ${Array.from(variables.keys())
          .map((k) => `${k}=${k}`)
          .join(', ')}`
      : ''
  })

print(response.text)`;
}
