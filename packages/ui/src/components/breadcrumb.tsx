import { ChevronRightIcon } from 'lucide-react';
import { useBreadcrumb } from '@maximai/fumadocs-core/breadcrumb';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import { cn } from '@/utils/cn';
import { useTreeContext } from '@/contexts/tree';

export function Breadcrumb(): React.ReactElement {
  const { root } = useTreeContext();
  const pathname = usePathname();
  const items = useBreadcrumb(pathname, root);

  return (
    <div
      className={cn(
        'flex flex-row items-center gap-1 text-sm text-muted-foreground',
        items.length === 1 && 'hidden',
      )}
    >
      {items.map((item, i) => {
        const isLast = items.length === i + 1;
        const style = cn(
          'overflow-hidden whitespace-nowrap',
          isLast ? 'text-foreground' : 'text-ellipsis',
        );

        return (
          // eslint-disable-next-line react/no-array-index-key -- Won't re-render
          <Fragment key={i}>
            {i !== 0 && (
              <ChevronRightIcon className="size-4 shrink-0 rtl:rotate-180" />
            )}
            {item.url ? (
              <Link href={item.url} className={style}>
                {item.name}
              </Link>
            ) : (
              <span className={style}>{item.name}</span>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
