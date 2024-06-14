import type {
  AnchorHTMLAttributes,
  HTMLAttributes,
  ReactNode,
  RefObject,
} from 'react';
import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import scrollIntoView from 'scroll-into-view-if-needed';
import type { TableOfContents } from '@/server/get-toc';
import { mergeRefs } from '@/utils/merge-refs';
import { useAnchorObserver } from './utils/use-anchor-observer';

const ActiveAnchorContext = createContext<{
  activeAnchor?: string;
  containerRef?: RefObject<HTMLElement>;
}>({});

export const useActiveAnchor = (url: string): boolean => {
  const { activeAnchor } = useContext(ActiveAnchorContext);

  return activeAnchor === url.split('#')[1];
};

export interface TOCProviderProps extends HTMLAttributes<HTMLDivElement> {
  toc: TableOfContents;
}

export interface TOCScrollProvider {
  /**
   * Scroll into the view of container when active
   */
  containerRef?: RefObject<HTMLElement>;

  toc: TableOfContents;
  children: ReactNode;
}

// todo: remove in next major
export const TOCProvider = forwardRef<HTMLDivElement, TOCProviderProps>(
  ({ toc, ...props }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const mergedRef = mergeRefs(containerRef, ref);

    return (
      <div ref={mergedRef} {...props}>
        <TOCScrollProvider toc={toc} containerRef={containerRef}>
          {props.children}
        </TOCScrollProvider>
      </div>
    );
  },
);

TOCProvider.displayName = 'TOCProvider';

export function TOCScrollProvider({
  toc,
  containerRef,
  children,
}: TOCScrollProvider): React.ReactElement {
  const headings = useMemo(() => {
    return toc.map((item) => item.url.split('#')[1]);
  }, [toc]);

  const activeAnchor = useAnchorObserver(headings);

  return (
    <ActiveAnchorContext.Provider value={{ containerRef, activeAnchor }}>
      {children}
    </ActiveAnchorContext.Provider>
  );
}

export interface TOCItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;

  /**
   * Scroll into the view of container when active
   */
  containerRef?: RefObject<HTMLElement>;
}

export const TOCItem = forwardRef<HTMLAnchorElement, TOCItemProps>(
  ({ containerRef: container, ...props }, ref) => {
    const { containerRef = container } = useContext(ActiveAnchorContext);
    const active = useActiveAnchor(props.href);
    const anchorRef = useRef<HTMLAnchorElement>(null);
    const mergedRef = mergeRefs(anchorRef, ref);

    useEffect(() => {
      const element = anchorRef.current;

      if (active && element && containerRef) {
        scrollIntoView(element, {
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
          scrollMode: 'always',
          boundary: containerRef.current,
        });
      }
    }, [active, containerRef]);

    return (
      <a ref={mergedRef} data-active={active} {...props}>
        {props.children}
      </a>
    );
  },
);

TOCItem.displayName = 'TOCItem';
