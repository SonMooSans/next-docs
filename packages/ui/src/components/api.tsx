'use client';
import { type HTMLAttributes, type ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import { Tab, Tabs } from '@/components/tabs';
import { Accordion, Accordions } from '@/components/accordion';

export function Root({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>): React.ReactElement {
  return (
    <div
      className={cn('space-y-24 text-sm text-muted-foreground', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function API({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>): React.ReactElement {
  return (
    <div
      className={cn('flex flex-col gap-x-6 gap-y-2 xl:flex-row', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export interface APIInfoProps extends HTMLAttributes<HTMLDivElement> {
  method?: string;
  route: string;
}

const badgeVariants = cva('rounded-lg border px-1 py-0.5 text-xs font-medium', {
  variants: {
    color: {
      green:
        'border-green-400/50 bg-green-400/20 text-green-600 dark:text-green-400',
      yellow:
        'border-yellow-400/50 bg-yellow-400/20 text-yellow-600 dark:text-yellow-400',
      red: 'border-red-400/50 bg-red-400/20 text-red-600 dark:text-red-400',
    },
  },
});

export function APIInfo({
  children,
  className,
  method = 'GET',
  route,
  ...props
}: APIInfoProps): React.ReactElement {
  let color: VariantProps<typeof badgeVariants>['color'] = 'green';
  if (['GET', 'HEAD'].includes(method)) color = 'green';
  if (['POST', 'PATCH', 'PUT'].includes(method)) color = 'yellow';
  if (['DELETE'].includes(method)) color = 'red';

  return (
    <div className={cn('flex-1', className)} {...props}>
      <h2 className="not-prose mb-2 inline-flex items-center gap-3 font-mono">
        <div className={cn(badgeVariants({ color }))}>{method}</div>
        <p className="text-xs">{route}</p>
      </h2>
      {children}
    </div>
  );
}

interface PropertyProps {
  name: string;
  type: string;
  required: boolean;
  deprecated: boolean;
  children: ReactNode;
}

export function Property({
  name,
  type,
  required,
  deprecated,
  children,
}: PropertyProps): React.ReactElement {
  return (
    <div className="mb-4 flex flex-col rounded-lg border bg-card p-3 prose-no-margin">
      <h4 className="inline-flex items-center gap-4">
        <code>{name}</code>
        {required ? (
          <div className={cn(badgeVariants({ color: 'red' }))}>Required</div>
        ) : null}
        {deprecated ? (
          <div className={cn(badgeVariants({ color: 'yellow' }))}>
            Deprecated
          </div>
        ) : null}
        <span className="ms-auto font-mono text-[13px] text-muted-foreground">
          {type}
        </span>
      </h4>
      {children}
    </div>
  );
}

export function APIExample({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>): React.ReactElement {
  return (
    <div
      className={cn('sticky top-6 h-fit xl:w-2/5 xl:min-w-[400px]', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export const Responses = Tabs;
export const Response = Tab;

export const Requests = Tabs;
export const Request = Tab;

export function ResponseTypes(props: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <Accordions
      type="single"
      className="!-m-4 border-none pt-2"
      defaultValue="Response"
    >
      {props.children}
    </Accordions>
  );
}

export function ExampleResponse(props: {
  children: ReactNode;
}): React.ReactElement {
  return <Accordion title="Response">{props.children}</Accordion>;
}

export function TypeScriptResponse(props: {
  children: ReactNode;
}): React.ReactElement {
  return <Accordion title="Typescript">{props.children}</Accordion>;
}

export function ObjectCollapsible(props: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <Accordions type="single">
      <Accordion title="Object Type">{props.children}</Accordion>
    </Accordions>
  );
}
