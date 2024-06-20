import { type TableOfContents } from 'fumadocs-core/server';
import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { replaceOrDefault } from './utils/shared';
import { cn } from './utils/cn';
import type { BreadcrumbProps, FooterProps, TOCProps } from './page.client';

declare const {
  Toc,
  SubToc,
  Breadcrumb,
  Footer,
  TocProvider,
  LastUpdate,
}: typeof import('./page.client');

type TableOfContentOptions = Omit<TOCProps, 'items'> & {
  enabled: boolean;
  component: ReactNode;
};

interface BreadcrumbOptions extends BreadcrumbProps {
  enabled: boolean;
  component: ReactNode;
}

interface FooterOptions extends FooterProps {
  enabled: boolean;
  component: ReactNode;
}

export interface DocsPageProps {
  toc?: TableOfContents;

  /**
   * Extend the page to fill all available space
   *
   * @defaultValue false
   */
  full?: boolean;

  tableOfContent?: Partial<TableOfContentOptions>;

  tableOfContentPopover?: Partial<TableOfContentOptions>;

  /**
   * Replace or disable breadcrumb
   */
  breadcrumb?: Partial<BreadcrumbOptions>;

  /**
   * Footer navigation, you can disable it by passing `false`
   */
  footer?: Partial<FooterOptions>;

  lastUpdate?: Date | string | number;

  children: ReactNode;
}

export function DocsPage({
  toc = [],
  tableOfContent = {},
  breadcrumb = {},
  tableOfContentPopover = {},
  lastUpdate,
  full = false,
  footer = {},
  ...props
}: DocsPageProps): React.ReactElement {
  const tocOptions = {
    // disable TOC on full mode, you can still enable it with `enabled` option.
    enabled: tableOfContent.enabled ?? !full,
    ...tableOfContent,
  };

  return (
    <TocProvider toc={toc}>
      <article
        className={cn(
          'mx-auto flex w-0 max-w-[840px] flex-1 flex-col gap-6 px-4 pt-10 md:px-6 md:pt-12',
          !tocOptions.enabled && 'max-w-[1200px]',
        )}
      >
        {replaceOrDefault(breadcrumb, <Breadcrumb full={breadcrumb.full} />)}
        {props.children}
        <div className="mt-auto" />
        {lastUpdate ? <LastUpdate date={new Date(lastUpdate)} /> : null}
        {replaceOrDefault(
          tableOfContentPopover,
          <SubToc
            items={toc}
            header={tableOfContentPopover.header}
            footer={tableOfContentPopover.footer}
            className={cn(!full && 'lg:hidden')}
          />,
        )}
        {replaceOrDefault(footer, <Footer items={footer.items} />)}
      </article>
      {replaceOrDefault(
        tocOptions,
        <Toc
          items={toc}
          header={tocOptions.header}
          footer={tocOptions.footer}
        />,
      )}
    </TocProvider>
  );
}
/**
 * Add typography styles
 */
export const DocsBody = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('prose', className)} {...props} />
));

DocsBody.displayName = 'DocsBody';

/**
 * For separate MDX page
 */
export function withArticle({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <main className="container py-12">
      <article className="prose">{children}</article>
    </main>
  );
}
