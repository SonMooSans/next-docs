'use client';
import { ApiClientModalProvider } from '@scalar/api-client-react';
import { type ReactNode, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { cn } from 'fumadocs-ui/components/api';

export default function ScalarProvider({
  spec,
  children,
}: {
  spec: object;
  children: ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={cn(mounted ? `${resolvedTheme}-mode` : '')}>
      <ApiClientModalProvider
        configuration={{
          themeId: 'moon',
          spec: {
            content: spec,
          },
        }}
      >
        {children}
      </ApiClientModalProvider>
    </div>
  );
}
