import { cva } from 'class-variance-authority';
import { ChevronDown, ExternalLinkIcon, SidebarIcon } from 'lucide-react';
import type { PageTree } from '@maximai/fumadocs-core/server';
import * as Base from '@maximai/fumadocs-core/sidebar';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import Link from '@maximai/fumadocs-core/link';
import { cn } from '@/utils/cn';
import { useTreeContext } from '@/contexts/tree';
import { useSidebarCollapse } from '@/contexts/sidebar';
import { ScrollArea, ScrollViewport } from '@/components/ui/scroll-area';
import { hasActive, isActive } from '@/utils/shared';
import type { LinkItemType } from '@/layout';
import { buttonVariants } from '@/theme/variants';
import { LinkItem } from '@/components/link-item';
import { useSearchContext } from '@/provider';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible';
import { ThemeToggle } from './theme-toggle';
import { SearchToggle } from './nav';

export interface SidebarProps {
  items: LinkItemType[];

  /**
   * Open folders by default if their level is lower or equal to a specific level
   * (Starting from 1)
   *
   * @defaultValue 1
   */
  defaultOpenLevel?: number;
  /**
   * Show/hide search toggle
   *
   * Note: Enable/disable search from root provider instead
   */
  enableSearch?: boolean;

  collapsible?: boolean;

  components?: Partial<Components>;
  banner?: React.ReactNode;
  footer?: React.ReactNode;
}

interface SidebarContext {
  defaultOpenLevel: number;
  components: Components;
}

interface Components {
  Item: React.FC<{ item: PageTree.Item; isNestedInCollapsible?: boolean }>;
  Folder: React.FC<{ item: PageTree.Folder; level: number }>;
  Separator: React.FC<{ item: PageTree.Separator }>;
}

const itemVariants = cva(
  'flex flex-row items-center gap-2 rounded-md mx-2 px-2 py-1.5 text-muted-foreground transition-colors duration-100 [&_svg]:size-4 my-1',
  {
    variants: {
      active: {
        true: 'bg-primary/10 font-medium text-primary',
        false:
          'hover:bg-zinc-200 hover:text-accent-foreground/80 hover:transition-none',
      },
    },
  },
);

const defaultComponents: Components = {
  Folder: FolderNode,
  Separator: SeparatorNode,
  Item: PageNode,
};

const SidebarContext = createContext<SidebarContext>({
  defaultOpenLevel: 1,
  components: defaultComponents,
});

export function Sidebar({
  footer,
  components,
  defaultOpenLevel = 1,
  collapsible = true,
  enableSearch = true,
  banner,
  items,
}: SidebarProps): React.ReactElement {
  const [open, setOpen] = useSidebarCollapse();
  const search = useSearchContext();
  const alwaysShowFooter = Boolean(footer) || collapsible;
  const context = useMemo<SidebarContext>(
    () => ({
      defaultOpenLevel,
      components: { ...defaultComponents, ...components },
    }),
    [components, defaultOpenLevel],
  );

  const onCollapse = (): void => {
    setOpen(!open);
  };

  return (
    <SidebarContext.Provider value={context}>
      {collapsible && !open ? (
        <button
          type="button"
          aria-label="Trigger Sidebar"
          className={cn(
            buttonVariants({
              color: 'ghost',
              size: 'icon',
              className:
                'sticky bottom-2 left-2 mt-auto mb-4 h-fit max-md:hidden',
            }),
          )}
          onClick={onCollapse}
        >
          <SidebarIcon />
        </button>
      ) : null}
      <Base.SidebarList
        minWidth={768} // md
        className={cn(
          'flex flex-col text-[15px] md:sticky md:top-0 md:h-[calc(100vh-40px)] md:w-[240px] md:text-sm xl:w-[260px]',
          !open && 'md:hidden',
          'max-md:fixed max-md:inset-0 max-md:z-40 max-md:bg-background/80 max-md:pt-16 max-md:backdrop-blur-md max-md:data-[open=false]:hidden bg-zinc-100 border-r',
        )}
      >
        <ViewportContent>
          {enableSearch && search.enabled ? <SearchToggle /> : null}
          {banner}
          {items.length > 0 && (
            <div className="flex flex-col md:hidden">
              {items.map((item, i) => (
                <LinkItem key={i} item={item} on="menu" />
              ))}
            </div>
          )}
        </ViewportContent>
        <div
          className={cn(
            'flex flex-row items-center gap-2 border-t p-3 md:p-2',
            !alwaysShowFooter && 'md:hidden',
          )}
        >
          {footer}
          <ThemeToggle className="md:hidden" />
          {collapsible ? (
            <button
              type="button"
              aria-label="Trigger Sidebar"
              className={cn(
                buttonVariants({
                  color: 'ghost',
                  size: 'icon',
                  className: 'max-md:hidden ms-auto',
                }),
              )}
              onClick={onCollapse}
            >
              <SidebarIcon />
            </button>
          ) : null}
        </div>
      </Base.SidebarList>
    </SidebarContext.Provider>
  );
}

function ViewportContent({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const { root } = useTreeContext();

  return (
    <ScrollArea className="flex-1">
      <ScrollViewport>
        <div className="flex flex-col gap-8 pb-10 max-md:px-4">
          {children}
          <NodeList items={root.children} />
        </div>
      </ScrollViewport>
    </ScrollArea>
  );
}

interface NodeListProps extends React.HTMLAttributes<HTMLDivElement> {
  items: PageTree.Node[];
  level?: number;
  isNestedInCollapsible?: boolean;
}

function NodeList({
  items,
  level = 0,
  isNestedInCollapsible,
  ...props
}: NodeListProps): React.ReactElement {
  const { components } = useContext(SidebarContext);

  return (
    <div {...props}>
      {items.map((item) => {
        const id = `${item.type}_${item.name}`;

        switch (item.type) {
          case 'separator':
            return <components.Separator key={id} item={item} />;
          case 'folder':
            return <components.Folder key={id} item={item} level={level + 1} />;
          default:
            return (
              <components.Item
                key={item.url}
                item={item}
                isNestedInCollapsible={isNestedInCollapsible}
              />
            );
        }
      })}
    </div>
  );
}

function PageNode({
  item: { icon, external = false, url, name },
  nested = false,
  isNestedInCollapsible = false,
}: {
  item: PageTree.Item;
  nested?: boolean;
  isNestedInCollapsible?: boolean;
}): React.ReactElement {
  const pathname = usePathname();
  const active = isActive(url, pathname, nested);

  return (
    <Link
      href={url}
      external={external}
      className={cn(
        itemVariants({ active }),
        isNestedInCollapsible ? 'ml-0' : '',
      )}
    >
      {icon ?? (external ? <ExternalLinkIcon /> : null)}
      {name}
    </Link>
  );
}

function FolderNode({
  item: { name, children, index, icon, defaultOpen = false },
  level,
}: {
  item: PageTree.Folder;
  level: number;
}): React.ReactElement {
  const { defaultOpenLevel } = useContext(SidebarContext);
  const pathname = usePathname();
  const active = index !== undefined && isActive(index.url, pathname, false);
  const childActive = useMemo(
    () => hasActive(children, pathname),
    [children, pathname],
  );
  const shouldExtend =
    active || childActive || defaultOpenLevel >= level || defaultOpen;
  const [extend, setExtend] = useState(shouldExtend);

  useEffect(() => {
    if (shouldExtend) setExtend(true);
  }, [shouldExtend]);

  const onClick = React.useCallback(
    (e: React.MouseEvent) => {
      if (e.target !== e.currentTarget || active) {
        setExtend((prev) => !prev);
        e.preventDefault();
      }
    },
    [active],
  );

  return (
    <Collapsible open={extend} onOpenChange={setExtend}>
      {index ? (
        <Link
          className={cn(itemVariants({ active }))}
          href={index.url}
          onClick={onClick}
        >
          {icon}
          {name}
          <ChevronDown
            className={cn(
              'ms-auto transition-transform',
              !extend && '-rotate-90',
            )}
          />
        </Link>
      ) : (
        <CollapsibleTrigger className={cn(itemVariants({ active }))}>
          {icon}
          {name}
          <ChevronDown
            className={cn(
              'ms-auto transition-transform',
              !extend && '-rotate-90',
            )}
          />
        </CollapsibleTrigger>
      )}
      <CollapsibleContent>
        <NodeList
          className="ms-4 flex flex-col border-s py-2 ps-2"
          items={children}
          level={level}
          isNestedInCollapsible
        />
      </CollapsibleContent>
    </Collapsible>
  );
}

function SeparatorNode({
  item,
}: {
  item: PageTree.Separator;
}): React.ReactElement {
  return <p className="mb-2 mt-8 px-2 font-medium first:mt-0">{item.name}</p>;
}
