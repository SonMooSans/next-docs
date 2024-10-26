import 'fumadocs-ui/style.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { I18nProvider } from 'fumadocs-ui/i18n';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({
  params: { lang },
  children,
}: {
  params: { lang: string };
  children: ReactNode;
}) {
  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <I18nProvider
          locale={lang}
          locales={[
            {
              name: 'English',
              locale: 'en',
            },
            {
              name: 'Chinese',
              locale: 'cn',
            },
          ]}
          translations={
            {
              cn: {
                toc: '目錄',
                search: '搜尋文檔',
                lastUpdate: '最後更新於',
                searchNoResult: '沒有結果',
                previousPage: '上一頁',
                nextPage: '下一頁',
                chooseLanguage: '選擇語言',
              },
            }[lang]
          }
        >
          <RootProvider>{children}</RootProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
