# next-docs-ui

## 15.0.9

### Patch Changes

- fa5b908: Fix React 18 compatibility
  - fumadocs-core@15.0.9

## 15.0.8

### Patch Changes

- 8f5993b: Support custom nav mode and tabs mode on Notebook layout
  - fumadocs-core@15.0.8

## 15.0.7

### Patch Changes

- 5deaf40: Support icons in separators of `meta.json`
- f782c2c: Improve sidebar design
- Updated dependencies [5deaf40]
  - fumadocs-core@15.0.7

## 15.0.6

### Patch Changes

- Updated dependencies [08236e1]
- Updated dependencies [a06af26]
  - fumadocs-core@15.0.6

## 15.0.5

### Patch Changes

- 14b2f95: Improve accessibility
  - fumadocs-core@15.0.5

## 15.0.4

### Patch Changes

- c892bd9: Improve `DocsCategory` cards
- c892bd9: Always show copy button on codeblocks on touch devices
  - fumadocs-core@15.0.4

## 15.0.3

### Patch Changes

- 47171db: UI: fix ocean theme
  - fumadocs-core@15.0.3

## 15.0.2

### Patch Changes

- a8e9e1f: Bump deps
  - fumadocs-core@15.0.2

## 15.0.1

### Patch Changes

- 421166a: Fix border styles
  - fumadocs-core@15.0.1

## 15.0.0

### Major Changes

- a84f37a: **Migrate to Tailwind CSS v4**

  **migrate:**

  Follow https://tailwindcss.com/blog/tailwindcss-v4 for official migrate guide of Tailwind CSS v4.

  Fumadocs UI v15 redesigned the Tailwind CSS config to fully adhere the new config style, no JavaScript and options needed for plugins.
  Add the following to your CSS file:

  ```css
  @import 'tailwindcss';
  @import 'fumadocs-ui/css/neutral.css';
  @import 'fumadocs-ui/css/preset.css';
  /* if you have Twoslash enabled */
  @import 'fumadocs-twoslash/twoslash.css';

  @source '../node_modules/fumadocs-ui/dist/**/*.js';
  /* if you have OpenAPI enabled */
  @source '../node_modules/fumadocs-openapi/dist/**/*.js';
  ```

  The `fumadocs-ui/css/preset.css` import is required, it declares necessary plugins & styles for Fumadocs UI, and `fumadocs-ui/css/neutral.css` defines the color palette of UI.

  Like the previous `preset` option in Tailwind CSS plugin, you can import other color presets like `fumadocs-ui/css/vitepress.css`.

  You should also pay attention to `@source`, the file paths are relative to the CSS file itself. For your project, it might not be `../node_modules/fumadocs-ui/dist/**/*.js`.

### Patch Changes

- a89d6e0: Support Fumadocs v15
- f2f9c3d: Redesign sidebar
- Updated dependencies [5b8cca8]
- Updated dependencies [a763058]
- Updated dependencies [581f4a5]
  - fumadocs-core@15.0.0

## 14.7.7

### Patch Changes

- 4f2538a: Support `children` prop in custom `Folder` component
- 191012a: `DocsCategory` search based on file path when item isn't present in the tree
- fb6b168: No longer rely on search context on search dialog
  - fumadocs-core@14.7.7

## 14.7.6

### Patch Changes

- Updated dependencies [b9601fb]
  - fumadocs-core@14.7.6

## 14.7.5

### Patch Changes

- 5d41bf1: Enable system option for theme toggle on NoteBook layout
- 900eb6c: Prevent shrink on sidebar icons by default
- a959374: Support `fd-*` prefixes to Tailwind CSS utils
- Updated dependencies [777188b]
  - fumadocs-core@14.7.5

## 14.7.4

### Patch Changes

- 26d9ccb: Fix banner preview
- 036f8e1: Disable hover to open navbar menu by default, can be enabled via `nav.enableHoverToOpen`
- Updated dependencies [bb73a72]
- Updated dependencies [69bd4fe]
  - fumadocs-core@14.7.4

## 14.7.3

### Patch Changes

- 041f230: Support trailing slash
- ca1cf19: Support custom `<Banner />` height
- Updated dependencies [041f230]
  - fumadocs-core@14.7.3

## 14.7.2

### Patch Changes

- Updated dependencies [14b280c]
  - fumadocs-core@14.7.2

## 14.7.1

### Patch Changes

- 18b00c1: Fix `hideSearch` option
- Updated dependencies [72dc093]
  - fumadocs-core@14.7.1

## 14.7.0

### Patch Changes

- a557bb4: revert `contain`
- Updated dependencies [97ed36c]
  - fumadocs-core@14.7.0

## 14.6.8

### Patch Changes

- e95be52: Fix i18n toggle
- f3298ea: Add css prefix by default
  - fumadocs-core@14.6.8

## 14.6.7

### Patch Changes

- Updated dependencies [5474343]
  - fumadocs-core@14.6.7

## 14.6.6

### Patch Changes

- 9c930ea: fix runtime error
  - fumadocs-core@14.6.6

## 14.6.5

### Patch Changes

- 969da26: Improve i18n api
- Updated dependencies [969da26]
  - fumadocs-core@14.6.5

## 14.6.4

### Patch Changes

- 67124b1: Improve theme toggle on Notebook layout
- 1810868: Enable `content-visibility` CSS features
- Updated dependencies [b71064a]
  - fumadocs-core@14.6.4

## 14.6.3

### Patch Changes

- abc3677: Allow `className` to be used with `SidebarItem`
  - fumadocs-core@14.6.3

## 14.6.2

### Patch Changes

- 9908922: Add default icon styles (`transformer`) to sidebar tabs
- ece734f: Support custom children of trigger on `InlineTOC` component
- 1a2597a: Expose `--fd-tocnav-height` CSS variable
- Updated dependencies [2357d40]
  - fumadocs-core@14.6.2

## 14.6.1

### Patch Changes

- 9532855: Hide toc popover when no items
  - fumadocs-core@14.6.1

## 14.6.0

### Minor Changes

- 010da9e: Tabs: support usage without `value`
- bebb16b: Support `DynamicCodeBlock` component

### Patch Changes

- 9585561: Fix Twoslash popups focus outline
- 4766292: Support React 19
- Updated dependencies [4dfde6b]
- Updated dependencies [bebb16b]
- Updated dependencies [4766292]
- Updated dependencies [050b326]
  - fumadocs-core@14.6.0

## 14.5.6

### Patch Changes

- b7745f4: Fix references problem of sidebar tabs
- Updated dependencies [9a18c14]
  - fumadocs-core@14.5.6

## 14.5.5

### Patch Changes

- 06f66d8: improve notebook layout for transparent sidebar
- 2d0501f: Fi sidebar icon trigger
  - fumadocs-core@14.5.5

## 14.5.4

### Patch Changes

- 8e2cb31: fix trivial bugs
  - fumadocs-core@14.5.4

## 14.5.3

### Patch Changes

- c5a5ba0: fix sidebar `defaultOpenLevel`
- f34e895: Support `props` in tag items
- 4c82a3d: Hide toc when it has no items and custom banner & footer
- f8e5157: Fix custom `theme` with Typography plugin
- ad00dd3: Support folder groups on sidebar tabs
  - fumadocs-core@14.5.3

## 14.5.2

### Patch Changes

- 072e349: fix initial sidebar level to 0
  - fumadocs-core@14.5.2

## 14.5.1

### Patch Changes

- 6fd480f: Fix old browser compatibility
  - fumadocs-core@14.5.1

## 14.5.0

### Minor Changes

- 66c70ec: **Replace official Tailwind CSS typography plugin**

  - Other variants like `prose-sm` and `prose-gray` are removed, as it's supposed to only provide support for Fumadocs UI typography styles.

- 05d224c: added the updateAnchor option for the Tabs ui component

### Patch Changes

- fumadocs-core@14.5.0

## 14.4.2

### Patch Changes

- 0f1603a: Fix bugs
  - fumadocs-core@14.4.2

## 14.4.1

### Patch Changes

- 07474cb: fix codeblock paddings
- 48a2c15: Control page styles from layouts
  - fumadocs-core@14.4.1

## 14.4.0

### Minor Changes

- 5fd4e2f: Make TOC collapse to a popover on `lg` screen size instead of `md`
- 5fd4e2f: Support better table styles for Typography plugin
- 8a3f5b0: Make `neutral` the default theme of Fumadocs UI

### Patch Changes

- 5145123: Fix sidebar footer issues
- 64defe0: Support `fumadocs-ui/layouts/notebook` layout
  - fumadocs-core@14.4.0

## 14.3.1

### Patch Changes

- e7443d7: Fix development errors
  - fumadocs-core@14.3.1

## 14.3.0

### Minor Changes

- b8a12ed: Move to `tsc` (experimental)

### Patch Changes

- 80655b3: Improve padding of sidebar tabs and expose it to sidebar
  - fumadocs-core@14.3.0

## 14.2.1

### Patch Changes

- 2949da3: Show 'ctrl' for windows in search toggle
- Updated dependencies [ca94bfd]
  - fumadocs-core@14.2.1

## 14.2.0

### Minor Changes

- e248a0f: Support Orama Cloud integration
- 7a5393b: Replace `cmdk` with custom implementation

### Patch Changes

- Updated dependencies [e248a0f]
  - fumadocs-core@14.2.0

## 14.1.1

### Patch Changes

- Updated dependencies [1573d63]
  - fumadocs-core@14.1.1

## 14.1.0

### Patch Changes

- Updated dependencies [b262d99]
- Updated dependencies [d6d290c]
- Updated dependencies [4a643ff]
- Updated dependencies [b262d99]
- Updated dependencies [90725c1]
  - fumadocs-core@14.1.0

## 14.0.2

### Patch Changes

- bfc2bf2: Fix navbar issues
  - fumadocs-core@14.0.2

## 14.0.1

### Patch Changes

- 1a7d78a: Pass props to replaced layout components via Radix UI `<Slot />`
  - fumadocs-core@14.0.1

## 14.0.0

### Major Changes

- d9e908e: **Refactor import paths for layouts**

  **migrate:** Use

  ```ts
  import { DocsLayout } from 'fumadocs-ui/layouts/docs';

  import { HomeLayout } from 'fumadocs-ui/layouts/home';

  import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
  ```

  Instead of

  ```ts
  import { DocsLayout } from 'fumadocs-ui/layout';

  import { HomeLayout } from 'fumadocs-ui/home-layout';

  import { HomeLayoutProps } from 'fumadocs-ui/home-layout';
  ```

- 9a10262: **Move Twoslash UI components to `fumadocs-twoslash`**

  **why:** Isolate logic from Fumadocs UI

  **migrate:**

  Before:

  ```ts
  import 'fumadocs-ui/twoslash.css';

  import { Popup } from 'fumadocs-ui/twoslash/popup';
  ```

  After:

  ```ts
  import 'fumadocs-twoslash/twoslash.css';

  import { Popup } from 'fumadocs-twoslash/ui';
  ```

  **Tailwind CSS is now required for Twoslash integration.**

- d9e908e: **Remove `getImageMeta` from `fumadocs-ui/og`**

  **migrate:** Use Metadata API from `fumadocs-core/server`

- d9e908e: Replace `fumadocs-core/search/shared` with `fumadocs-core/server`
- be53a0e: **`DocsCategory` now accept `from` prop instead of `pages` prop.**

  **why:** This allows sharing the order of items with page tree.
  **migrate:**

  The component now takes `from` prop which is the Source API object.

  ```tsx
  import { source } from '@/lib/source';
  import { DocsCategory } from 'fumadocs-ui/page';

  const page = source.getPage(params.slug);

  <DocsCategory page={page} from={source} />;
  ```

### Minor Changes

- 34cf456: Support `disableThemeSwitch` on layouts
- d9e908e: Bundle icons into dist
- ad47fd8: Show i18n language toggle on home layout
- 87063eb: Add root toggle to sidebar automatically
- 64f0653: Introduce `--fd-nav-height` CSS variable for custom navbar
- e1ee822: Support hast nodes in `toc` variable
- 3d054a8: Support linking to a specific tab

### Patch Changes

- f949520: Support Shiki diff transformer
- 367f4c3: Improve Root Toggle component
- d9e908e: Change default URL of title on i18n mode
- d9e908e: Add center to root toggle
- e612f2a: Make compatible with Next.js 15
- 3d0369a: Improve edit on GitHub button
- be820c4: Bump deps
- Updated dependencies [e45bc67]
- Updated dependencies [d9e908e]
- Updated dependencies [d9e908e]
- Updated dependencies [f949520]
- Updated dependencies [9a0b09f]
- Updated dependencies [9a0b09f]
- Updated dependencies [367f4c3]
- Updated dependencies [e1ee822]
- Updated dependencies [e612f2a]
- Updated dependencies [9a0b09f]
- Updated dependencies [d9e908e]
- Updated dependencies [8ef00dc]
- Updated dependencies [979e301]
- Updated dependencies [d9e908e]
- Updated dependencies [979e301]
- Updated dependencies [15781f0]
- Updated dependencies [be820c4]
- Updated dependencies [d9e908e]
  - fumadocs-core@14.0.0

## 13.4.10

### Patch Changes

- 4cb74d5: Expose more props to Image Zoom
- Updated dependencies [6231ad3]
  - fumadocs-core@13.4.10

## 13.4.9

### Patch Changes

- bcf51a6: Improve banner rainbow variant
- Updated dependencies [083f04a]
  - fumadocs-core@13.4.9

## 13.4.8

### Patch Changes

- 5581733: Add center to root toggle
- 1a327cc: Fix props types of Root Toggle
- Updated dependencies [78e59e7]
  - fumadocs-core@13.4.8

## 13.4.7

### Patch Changes

- 6e1923e: Fix ocean present background repeat
- 6e1923e: Introduce `rainbow` variant on Banner component
- Updated dependencies [6e1923e]
  - fumadocs-core@13.4.7

## 13.4.6

### Patch Changes

- b33aff0: Fix typography styles
- afb697e: Fix Next.js 14.2.8 dynamic import problems
- 6bcd263: Fix Banner component z-index
- Updated dependencies [afb697e]
- Updated dependencies [daa66d2]
  - fumadocs-core@13.4.6

## 13.4.5

### Patch Changes

- d46a3f1: Improve search dialog
  - fumadocs-core@13.4.5

## 13.4.4

### Patch Changes

- Updated dependencies [729928e]
  - fumadocs-core@13.4.4

## 13.4.3

### Patch Changes

- fumadocs-core@13.4.3

## 13.4.2

### Patch Changes

- 0c251e5: Bump deps
- 0c251e5: Support Shiki inline code
- 0c251e5: Improve nested list styles
- Updated dependencies [7dabbc1]
- Updated dependencies [0c251e5]
- Updated dependencies [3b56170]
  - fumadocs-core@13.4.2

## 13.4.1

### Patch Changes

- Updated dependencies [95dbba1]
  - fumadocs-core@13.4.1

## 13.4.0

### Minor Changes

- 26f5360: Support built-in OG Image generation

### Patch Changes

- fumadocs-core@13.4.0

## 13.3.3

### Patch Changes

- Updated dependencies [f8cc167]
  - fumadocs-core@13.3.3

## 13.3.2

### Patch Changes

- 17746a6: Support built-in edit on github button
- Updated dependencies [0e0ef8c]
  - fumadocs-core@13.3.2

## 13.3.1

### Patch Changes

- 7258c4b: Fix thumb not rendered on initial render
  - fumadocs-core@13.3.1

## 13.3.0

### Minor Changes

- 8f5b19e: Introduce `DocsTitle`, `DocsDescription` and `DocsCategory` components
- 32ca37a: Support Clerk-style TOC
- 9aae448: Support multiple toc active items
- c542561: Use cookie to store active locale on `always` mode

### Patch Changes

- Updated dependencies [4916f84]
- Updated dependencies [fd46eb6]
- Updated dependencies [fd46eb6]
- Updated dependencies [fd46eb6]
- Updated dependencies [fd46eb6]
- Updated dependencies [9aae448]
- Updated dependencies [c542561]
  - fumadocs-core@13.3.0

## 13.2.2

### Patch Changes

- Updated dependencies [36b771b]
- Updated dependencies [61b91fa]
  - fumadocs-core@13.2.2

## 13.2.1

### Patch Changes

- Updated dependencies [17fa173]
  - fumadocs-core@13.2.1

## 13.2.0

### Minor Changes

- ba588a2: Support custom max width
- ec983a3: Change default value of `defaultOpenLevel` to 0

### Patch Changes

- 96c9dda: Change Heading scroll margins
- 96c9dda: Hide TOC Popover on full mode
- Updated dependencies [96c9dda]
  - fumadocs-core@13.2.0

## 13.1.0

### Minor Changes

- c8910c4: Add default 'max-height' to codeblocks

### Patch Changes

- 61ef42c: Add `vitepress` theme preset
- deae4dd: Improve theme presets
- c8910c4: Fix empty space on search dialog
- 6c42960: Improve TOC design
- Updated dependencies [f280191]
  - fumadocs-core@13.1.0

## 13.0.7

### Patch Changes

- e7c52f2: Fix code styles in headings
- Updated dependencies [37bbfff]
  - fumadocs-core@13.0.7

## 13.0.6

### Patch Changes

- 1622e36: Fix bug breaking Tailwind CSS IntelliSense VSCode Extension
  - fumadocs-core@13.0.6

## 13.0.5

### Patch Changes

- Updated dependencies [2cf65f6]
  - fumadocs-core@13.0.5

## 13.0.4

### Patch Changes

- Updated dependencies [5355391]
  - fumadocs-core@13.0.4

## 13.0.3

### Patch Changes

- Updated dependencies [978342f]
  - fumadocs-core@13.0.3

## 13.0.2

### Patch Changes

- Updated dependencies [4819820]
  - fumadocs-core@13.0.2

## 13.0.1

### Patch Changes

- fumadocs-core@13.0.1

## 13.0.0

### Major Changes

- 89190ae: **Rename `prefix` option on Tailwind CSS Plugin to `cssPrefix`**

  **why:** The previous name was misleading

  **migrate:** Rename the option.

  ```js
  import { createPreset } from 'fumadocs-ui/tailwind-plugin';

  /** @type {import('tailwindcss').Config} */
  export default {
    presets: [
      createPreset({
        cssPrefix: 'fd',
      }),
    ],
  };
  ```

- b02eebf: **Move `keepCodeBlockBackground` option to code block component**

  **why:** Easier to customise code block styles.

  **migrate:**

  Enable `keepBackground` on `<CodeBlock />`, and remove deprecated usage.

  ```tsx
  import { Pre, CodeBlock } from 'fumadocs-ui/components/codeblock';

  <MDX
    components={{
      pre: ({ ref: _ref, ...props }) => (
        <CodeBlock keepBackground {...props}>
          <Pre>{props.children}</Pre>
        </CodeBlock>
      ),
    }}
  />;
  ```

- f868018: **Replace `secondary` link items with `icon` link items**

  **why:** Link items with type `secondary` has been deprecated long time ago.

  **migrate:** Replace type `secondary` with `icon`.

- 8aebeab: **Change usage of I18nProvider**

  **why:** Make possible to load translations lazily

  **migrate:**

  ```tsx
  import { RootProvider } from 'fumadocs-ui/provider';
  import type { ReactNode } from 'react';
  import { I18nProvider } from 'fumadocs-ui/i18n';

  export default function Layout({
    params: { lang },
    children,
  }: {
    params: { lang: string };
    children: ReactNode;
  }) {
    return (
      <html lang={lang}>
        <body>
          <I18nProvider
            locale={lang}
            // options
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
            // translations
            translations={
              {
                cn: {
                  toc: '目錄',
                  search: '搜尋文檔',
                  lastUpdate: '最後更新於',
                  searchNoResult: '沒有結果',
                  previousPage: '上一頁',
                  nextPage: '下一頁',
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
  ```

- 8aebeab: **Require `locale` prop on I18nProvider**

  **why:** Fix problems related to pathname parsing

  **migrate:** Pass `locale` parameter to the provider

- 0377bb4: **Rename `id` prop on Tabs component to `groupId`**

  **why:** Conflicted with HTML `id` attribute.

  **migrate:** Rename to `groupId`.

- e8e6a17: **Make Tailwind CSS Plugin ESM-only**

  **why:** Tailwind CSS supported ESM and TypeScript configs.

  **migrate:** Use ESM syntax in your Tailwind CSS config.

- c901e6b: **Remove deprecated `fumadocs-ui/components/api` components**

  **why:** The new OpenAPI integration has its own UI implementation.

  **migrate:** Update to latest OpenAPI integration.

- 89190ae: **Add `fd-` prefix to all Fumadocs UI colors, animations and utilities**

  **why:** The added Tailwind CSS colors may conflict with the existing colors of codebases.

  **migrate:** Enable `addGlobalColors` on Tailwind CSS Plugin or add the `fd-` prefix to class names.

  ```js
  import { createPreset } from 'fumadocs-ui/tailwind-plugin';

  /** @type {import('tailwindcss').Config} */
  export default {
    presets: [
      createPreset({
        addGlobalColors: true,
      }),
    ],
  };
  ```

- b02eebf: **Change code block component usage**

  **why:** The previous usage was confusing, some props are passed directly to `pre` while some are not.

  **migrate:**

  Pass all props to `CodeBlock` component.
  This also includes class names, change your custom styles if necessary.

  ```tsx
  import { Pre, CodeBlock } from 'fumadocs-ui/components/codeblock';

  <MDX
    components={{
      // HTML `ref` attribute conflicts with `forwardRef`
      pre: ({ ref: _ref, ...props }) => (
        <CodeBlock {...props}>
          <Pre>{props.children}</Pre>
        </CodeBlock>
      ),
    }}
  />;
  ```

  You can ignore this if you didn't customise the default `pre` element.

- 4373231: **Remove `RollButton` component**

  **why:** `RollButton` was created because there were no "Table Of Contents" on mobile viewports. Now users can use the TOC Popover to switch between headings, `RollButton` is no longer a suitable design for Fumadocs UI.

  **migrate:** Remove usages, you may copy the [last implementation of `RollButton`](https://github.com/fuma-nama/fumadocs/blob/fumadocs-ui%4012.5.6/packages/ui/src/components/roll-button.tsx).

### Minor Changes

- c684c00: Support to disable container style overriding
- c8964d3: Include `Callout` as default MDX component

### Patch Changes

- daa7d3c: Fix empty folder animation problems
- Updated dependencies [09c3103]
- Updated dependencies [c714eaa]
- Updated dependencies [b02eebf]
  - fumadocs-core@13.0.0

## 12.5.6

### Patch Changes

- a332bee: Support `undefined` state of `defaultOpen` in folder nodes
  - fumadocs-core@12.5.6

## 12.5.5

### Patch Changes

- 3519e6c: Fix TOC overflow problems
  - fumadocs-core@12.5.5

## 12.5.4

### Patch Changes

- fccdfdb: Improve TOC Popover design
- Updated dependencies [fccdfdb]
- Updated dependencies [2ffd5ea]
  - fumadocs-core@12.5.4

## 12.5.3

### Patch Changes

- 5d963f4: Support to disable prefetching links on sidebar
  - fumadocs-core@12.5.3

## 12.5.2

### Patch Changes

- a5c34f0: Support specifying the url of root node when breadcrumbs have `includeRoot` enabled
- Updated dependencies [a5c34f0]
  - fumadocs-core@12.5.2

## 12.5.1

### Patch Changes

- c5d20d0: Fix wrong padding
- 3d8f6cf: Add data attributes to certain components to improve CSS targeting
  - fumadocs-core@12.5.1

## 12.5.0

### Minor Changes

- b9fa99d: Support tag filters in search dialog
- a4bcaa7: Rename `Layout` in `fumadocs-ui/layout` to `HomeLayout` in `fumadocs-ui/home-layout`

### Patch Changes

- d1c7405: Optimize performance
- Updated dependencies [b9fa99d]
- Updated dependencies [525925b]
  - fumadocs-core@12.5.0

## 12.4.2

### Patch Changes

- 503e8e9: Improve Object Collaspible
- Updated dependencies [503e8e9]
  - fumadocs-core@12.4.2

## 12.4.1

### Patch Changes

- fumadocs-core@12.4.1

## 12.4.0

### Minor Changes

- eb36761: Replace link item `secondary` type with `icon` (backward compatible)
- eb36761: Support `secondary` property in link items
- eb36761: Support `button` type link item
- eb36761: Support `on` filter in link items

### Patch Changes

- 33ffa99: Improve design details
  - fumadocs-core@12.4.0

## 12.3.6

### Patch Changes

- 4cc5782: Adding secondary custom links
  - fumadocs-core@12.3.6

## 12.3.5

### Patch Changes

- fumadocs-core@12.3.5

## 12.3.4

### Patch Changes

- fbfd050: Improve the default theme
- eefa75d: Reduce the navbar height
  - fumadocs-core@12.3.4

## 12.3.3

### Patch Changes

- 90d51cb: Fix problem with I18n middleware & language toggle
- Updated dependencies [90d51cb]
  - fumadocs-core@12.3.3

## 12.3.2

### Patch Changes

- Updated dependencies [ca7d0f4]
  - fumadocs-core@12.3.2

## 12.3.1

### Patch Changes

- Updated dependencies [cf852f6]
  - fumadocs-core@12.3.1

## 12.3.0

### Patch Changes

- Updated dependencies [ce3c8ad]
- Updated dependencies [ce3c8ad]
  - fumadocs-core@12.3.0

## 12.2.5

### Patch Changes

- 7c23f7e: No longer set a default size for SVG elements in title
  - fumadocs-core@12.2.5

## 12.2.4

### Patch Changes

- ffb9026: Fix `cmdk` upstream dependency problems
  - fumadocs-core@12.2.4

## 12.2.3

### Patch Changes

- b4824fa: Updated `<APIInfo />` component, so method name appears vertically centered.
- e120e0f: Improve `<Banner/>` component
- 3970b55: Support custom type link items
  - fumadocs-core@12.2.3

## 12.2.2

### Patch Changes

- 72c7991: Improve sidebar
  - fumadocs-core@12.2.2

## 12.2.1

### Patch Changes

- c428a60: Revert the height of docs navbar to 64px
- 018dbd9: Support `Banner` component
  - fumadocs-core@12.2.1

## 12.2.0

### Minor Changes

- 318eaf9: **Redesign TOC popover:** Make the TOC Popover trigger a part of navbar.
- ea22d04: **Improve dynamic sidebar:** Improve animation & close delay

### Patch Changes

- 2f2d9cf: **Improve footer:** Use card-style buttons to match the other buttons
- bcc9f91: Added a new colors for API info badge, so POST, PATCH requests are different from PUT.
- 2f2d9cf: Improve OpenAPI styles
- Updated dependencies [b70ff06]
  - fumadocs-core@12.2.0

## 12.1.3

### Patch Changes

- 2a5db91: Add timeout for hovering after collapsed the sidebar
- 3e98d7d: Support `full` mode on pages
- d06c92a: Support `transparentMode` on secondary (docs) navbar
- 3bdc786: Support Fumadocs OpenAPI 3.1.0
- d06c92a: Fix hot keys order
  - fumadocs-core@12.1.3

## 12.1.2

### Patch Changes

- 284a571: Support Fumadocs OpenAPI v3
- Updated dependencies [b4856d1]
  - fumadocs-core@12.1.2

## 12.1.1

### Patch Changes

- 1c3a127: Redesign Tabs component
- Updated dependencies [a39dbcb]
  - fumadocs-core@12.1.1

## 12.1.0

### Minor Changes

- 0a377a9: **Pass the `icon` prop to code blocks as HTML instead of MDX attribute.**

  **why:** Only MDX flow elements support attributes with JSX value, like:

  ```mdx
  <Pre icon={<svg />}>...</Pre>
  ```

  As Shiki outputs hast elements, we have to convert the output of Shiki to a MDX flow element so that we can pass the `icon` property.

  Now, `rehype-code` passes a HTML string instead of JSX, and render it with `dangerouslySetInnerHTML`:

  ```mdx
  <Pre icon="<svg />">...</Pre>
  ```

  **migrate:** Not needed, it should work seamlessly.

### Patch Changes

- 0a377a9: Close sidebar on collapse
- 5f86faa: Improve multi-line code blocks
- Updated dependencies [0a377a9]
- Updated dependencies [0a377a9]
  - fumadocs-core@12.1.0

## 12.0.7

### Patch Changes

- 51441d3: Fix `RollButton` component problems on Safari
  - fumadocs-core@12.0.7

## 12.0.6

### Patch Changes

- 056bad5: Improve default values
- Updated dependencies [7a29b79]
- Updated dependencies [b0c1242]
  - fumadocs-core@12.0.6

## 12.0.5

### Patch Changes

- 4455d58: Fix `bannerProps` being ignored
  - fumadocs-core@12.0.5

## 12.0.4

### Patch Changes

- 70666d8: Hide file name on breadcrumbs
- f96da27: Improve design details
- 51ca944: Support including separators in breadcrumbs
- Updated dependencies [72dbaf1]
- Updated dependencies [51ca944]
  - fumadocs-core@12.0.4

## 12.0.3

### Patch Changes

- 18928af: Improve mobile experience on Safari
- Updated dependencies [053609d]
  - fumadocs-core@12.0.3

## 12.0.2

### Patch Changes

- Show TOC on mobile devices
  - fumadocs-core@12.0.2

## 12.0.1

### Patch Changes

- 21fe244: Redesign roll button
- 547a61a: Use Menu for link items
  - fumadocs-core@12.0.1

## 12.0.0

### Major Changes

- 62b5abb: **New Layout**

  - Remove navbar from docs layout, replace it with sidebar.
  - On smaller devices, navbar is always shown.
  - Remove exports of internal components, copying components from the repository is now the preferred way.

  **migrate:** On layouts, Rename `nav.githubUrl` to `githubUrl`.
  Modify your stylesheet if necessary.

- 5741224: **Remove deprecated option `enableThemeProvider` from Root Provider**

  **migrate:** Use `theme.enabled` instead.

- 2f8b168: **Replace `<LanguageSelect />` component with `<LanguageToggle />`**

  **migrate:**

  Remove your `<LanguageSelect />` component from the layout. Enable the new language toggle with:

  ```tsx
  import { DocsLayout } from 'fumadocs-ui/layout';

  export default function Layout({ children }: { children: React.ReactNode }) {
    return <DocsLayout i18n>{children}</DocsLayout>;
  }
  ```

### Minor Changes

- d88dfa6: Support switching between page trees with `RootToggle` component

### Patch Changes

- c110040: Fix problems with twoslash codeblocks
- 13a60b9: Heading support typography styles
- 1fe0812: Support translation for theme label
- Updated dependencies [98430e9]
- Updated dependencies [d88dfa6]
- Updated dependencies [ba20694]
- Updated dependencies [57eb762]
  - fumadocs-core@12.0.0

## 11.3.2

### Patch Changes

- 1b8e12b: Use `display: grid` for codeblocks
- Updated dependencies [1b8e12b]
  - fumadocs-core@11.3.2

## 11.3.1

### Patch Changes

- 10ab3e9: Fix sidebar opened by default
  - fumadocs-core@11.3.1

## 11.3.0

### Minor Changes

- 917d87f: Rename sidebar primitive `minWidth` prop to `blockScrollingWidth`

### Patch Changes

- 2a1211e: Support customising search dialog hotkeys
- 9de31e6: Support `withArticle` for MDX Pages
- Updated dependencies [917d87f]
  - fumadocs-core@11.3.0

## 11.2.2

### Patch Changes

- dd0feb2: Support customising sidebar background with opacity
- 72096c3: Support customising theme options from root provider
  - fumadocs-core@11.2.2

## 11.2.1

### Patch Changes

- 8074920: Fix sidebar background width on dynamic sidebar
  - fumadocs-core@11.2.1

## 11.2.0

### Minor Changes

- 3292df1: Support sliding dynamic sidebar

### Patch Changes

- fumadocs-core@11.2.0

## 11.1.3

### Patch Changes

- 2b95c89: Fix codeblock select highlight problems
- cdc52ad: Improve page footer mobile responsibility
- Updated dependencies [88008b1]
- Updated dependencies [944541a]
- Updated dependencies [07a9312]
  - fumadocs-core@11.1.3

## 11.1.2

### Patch Changes

- 58adab1: Improve theme & styles
- ae88793: Improve page footer design
  - fumadocs-core@11.1.2

## 11.1.1

### Patch Changes

- 771314c: Use `sessionStorage` for non-persistent tabs
- 8ef2b68: Bump deps
- fa78241: Fix accordion text alignment
- Updated dependencies [8ef2b68]
- Updated dependencies [26f464d]
- Updated dependencies [26f464d]
  - fumadocs-core@11.1.1

## 11.1.0

### Minor Changes

- 02a014f: Support custom menu items in navbar

### Patch Changes

- fumadocs-core@11.1.0

## 11.0.8

### Patch Changes

- Updated dependencies [98258b5]
  - fumadocs-core@11.0.8

## 11.0.7

### Patch Changes

- Updated dependencies [f7c2c5c]
  - fumadocs-core@11.0.7

## 11.0.6

### Patch Changes

- 8e0ef4b: Support disable search functionality including shortcuts
- Updated dependencies [5653d5d]
- Updated dependencies [5653d5d]
  - fumadocs-core@11.0.6

## 11.0.5

### Patch Changes

- c8ea344: Support disabling search bar
  - fumadocs-core@11.0.5

## 11.0.4

### Patch Changes

- 7b61b2f: Migrate `fumadocs-ui` to fully ESM, adding support for ESM `tailwind.config` file
- Updated dependencies [7b61b2f]
  - fumadocs-core@11.0.4

## 11.0.3

### Patch Changes

- c11e6ce: New color preset: `catppuccin`
  - fumadocs-core@11.0.3

## 11.0.2

### Patch Changes

- 6470d6d: Fix collapse button on smaller viewports
  - fumadocs-core@11.0.2

## 11.0.1

### Patch Changes

- 1136e02: Support modifying css with color presets
- 1136e02: New color preset `neutral`
- f6b4797: Improve Sidebar footer
  - fumadocs-core@11.0.1

## 11.0.0

### Major Changes

- 2d8df75: Replace `nav.links` option with secondary links

  why: A more straightforward API design

  migrate:

  ```diff
  <DocsLayout
  +  links={[
  +    {
  +      type: 'secondary',
  +      text: 'Github',
  +      url: 'https://github.com',
  +      icon: <GithubIcon />,
  +      external: true,
  +    },
  +  ]}
  -  nav={{
  -    links: [
  -      {
  -        icon: <GithubIcon />,
  -        href: 'https://github.com',
  -        label: 'Github',
  -        external: true,
  -      },
  -    ],
  -  }}
  >
    {children}
  </DocsLayout>
  ```

### Patch Changes

- Updated dependencies [2d8df75]
- Updated dependencies [92cb12f]
- Updated dependencies [f75287d]
- Updated dependencies [2d8df75]
  - fumadocs-core@11.0.0

## 10.1.3

### Patch Changes

- 6ace206: Support opening Twoslash popup on mobile
- d0288d1: New theme dusk
- Updated dependencies [bbad52f]
  - fumadocs-core@10.1.3

## 10.1.2

### Patch Changes

- 0facc07: Replace navbar links with secondary links
- fd38022: Improve sidebar collapse
  - fumadocs-core@10.1.2

## 10.1.1

### Patch Changes

- 38d6f22: Improve RTL Layout experience
- Updated dependencies [779c599]
- Updated dependencies [0c01300]
- Updated dependencies [779c599]
  - fumadocs-core@10.1.1

## 10.1.0

### Minor Changes

- 566539a: Support RTL layout

### Patch Changes

- fumadocs-core@10.1.0

## 10.0.5

### Patch Changes

- Updated dependencies [e47c62f]
  - fumadocs-core@10.0.5

## 10.0.4

### Patch Changes

- fumadocs-core@10.0.4

## 10.0.3

### Patch Changes

- b27091f: Support passing search dialog `options` from root provider
- Updated dependencies [6f321e5]
  - fumadocs-core@10.0.3

## 10.0.2

### Patch Changes

- 10e099a: Add scrollbar to TOC
- Updated dependencies [10e099a]
  - fumadocs-core@10.0.2

## 10.0.1

### Patch Changes

- 0e78dc8: Support customising search API URL
- Updated dependencies [c9b7763]
- Updated dependencies [0e78dc8]
- Updated dependencies [d8483a8]
  - fumadocs-core@10.0.1

## 10.0.0

### Major Changes

- 321d1e1f: **Move Typescript integrations to `fumadocs-typescript`**

  why: It is now a stable feature

  migrate: Use `fumadocs-typescript` instead.

  ```diff
  - import { AutoTypeTable } from "fumadocs-ui/components/auto-type-table"
  + import { AutoTypeTable } from "fumadocs-typescript/ui"
  ```

### Patch Changes

- de7ed150: Hide external items from navigation footer
- Updated dependencies [b5d16938]
- Updated dependencies [321d1e1f]
  - fumadocs-core@10.0.0

## 9.1.0

### Minor Changes

- ffc76e9d: Support to override sidebar components
- 1c388ca5: Support `defaultOpen` for folder nodes

### Patch Changes

- Updated dependencies [909b0e35]
- Updated dependencies [691f12aa]
- Updated dependencies [1c388ca5]
  - fumadocs-core@9.1.0

## 9.0.0

### Major Changes

- 071898da: **Remove deprecated usage of `Files` component**

  Why: Since `8.3.0`, you should use the `Folder` component instead for folders. For simplicity, the `title` prop has been renamed to `name`.

  Migrate: Replace folders with the `Folder` component. Rename `title` prop to `name`.

  ```diff
  - <Files>
  - <File title="folder">
  - <File title="file.txt" />
  - </File>
  - </Files>

  + <Files>
  + <Folder name="folder">
  + <File name="file.txt" />
  + </Folder>
  + </Files>
  ```

- 2b355907: **Remove controlled usage for Accordion**

  Why: Components in Fumadocs UI should not be used outside of MDX.

  Migrate: Remove `value` and `onValueChange` props.

### Patch Changes

- fumadocs-core@9.0.0

## 8.3.0

### Minor Changes

- b0003d44: Add `purple` theme
- 9bdb49dd: Add `Folder` export to `fumadocs-ui/components/files`
- 99d66d2d: Rename `title` prop to `name` in `File` and `Folder` component

### Patch Changes

- 5e314eee: Deprecate `input` color and `medium` font size from Tailwind CSS preset
- 52d578d0: Set `darkMode` to `class` by default
- 84667d2f: Improve Accordions
  - fumadocs-core@8.3.0

## 8.2.0

### Minor Changes

- 5c24659: Support code block icons

### Patch Changes

- 09bdf63: Separate stylesheet with Image Zoom component
- Updated dependencies [5c24659]
  - fumadocs-core@8.2.0

## 8.1.1

### Patch Changes

- 153ceaf: Fix typo
  - fumadocs-core@8.1.1

## 8.1.0

### Minor Changes

- 0012eba: Support Typescript Twoslash
- bc936c5: Add `AutoTypeTable` server component

### Patch Changes

- 6c5a39a: Rename Git repository to `fumadocs`
- Updated dependencies [6c5a39a]
- Updated dependencies [eb028b4]
- Updated dependencies [054ec60]
  - fumadocs-core@8.1.0

## 8.0.0

### Major Changes

- a2f4819: **Improve internationalized routing**

  `I18nProvider` now handles routing for you.
  Therefore, `locale` and `onChange` is no longer required.

  ```tsx
  <I18nProvider
    translations={{
      cn: {
        name: 'Chinese', // required
        search: 'Translated Content',
      },
    }}
  ></I18nProvider>
  ```

  `LanguageSelect` detects available options from your translations, therefore, the `languages` prop is removed.

- c608ad2: **Remove deprecated `docsUiPlugins`**

  migrate: Use `createPreset` instead

  ```js
  const { createPreset } = require('fumadocs-ui/tailwind-plugin');

  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './content/**/*.mdx',
      './node_modules/fumadocs-ui/dist/**/*.js',
    ],
    presets: [createPreset()],
  };
  ```

- 2ea9437: **Change usage of Code Block component**

  The inner `pre` element is now separated from code block container, making it easier to customise.`

  Before:

  ```tsx
  import { CodeBlock, Pre } from 'fumadocs-ui/mdx/pre';

  <Pre title={title} allowCopy {...props} />;
  ```

  After:

  ```tsx
  import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';

  <CodeBlock title={title} allowCopy>
    <Pre {...props} />
  </CodeBlock>;
  ```

- ac424ec: **Update import paths of MDX components**

  why: To improve consistency, all MDX components are located in `/components/*` instead.

  migrate:

  ```diff
  - import { Card, Cards } from "fumadocs-ui/mdx/card"
  + import { Card, Cards } from "fumadocs-ui/components/card"

  - import { Heading } from "fumadocs-ui/mdx/heading"
  + import { Heading } from "fumadocs-ui/components/heading"

  - import { Codeblock, Pre } from "fumadocs-ui/mdx/pre"
  + import { Codeblock, Pre } from "fumadocs-ui/components/codeblock"
  ```

- 2b11c20: **Rename to Fumadocs**

  `next-docs-zeta` -> `fumadocs-core`

  `next-docs-ui` -> `fumadocs-ui`

  `next-docs-mdx` -> `fumadocs-mdx`

  `@fuma-docs/openapi` -> `fumadocs-openapi`

  `create-next-docs-app` -> `create-fumadocs-app`

- 60db195: **Remove Nav component export**

  why: Replaced by the DocsLayout and Layout component, it is now an internal component

  migration: Use the Layout component for sharing the navbar across pages

  ```diff
  - import { Nav } from "fumadocs-ui/nav"
  + import { Layout } from "fumadocs-ui/layout"
  ```

### Minor Changes

- 60db195: **Support transparent navbar**

### Patch Changes

- 974e00f: Collapse API example by default
- Updated dependencies [2ea9437]
- Updated dependencies [cdff313]
- Updated dependencies [1a346a1]
- Updated dependencies [2b11c20]
  - fumadocs-core@8.0.0

## 7.1.2

### Patch Changes

- 9204975: Fix search dialog overflow issues
  - next-docs-zeta@7.1.2

## 7.1.1

### Patch Changes

- next-docs-zeta@7.1.1

## 7.1.0

### Minor Changes

- 40e51a4: Support integration with @fuma-docs/openapi
- d2744a4: Remove tailwindcss-animate

### Patch Changes

- c527044: Support preloading Search Dialog
  - next-docs-zeta@7.1.0

## 7.0.0

### Major Changes

- f995ad9: **Page Footer is now a client component**

  This allows the footer component to find items within the current page tree, which fixes the problem where a item from another page tree is appeared.

  Also removed the `url` and `tree` properties from `DocsPage` since we can pass them via React Context API.

  ```diff
  export default async function Page({ params }) {
    return (
      <DocsPage
  -      url={page.url}
  -      tree={pageTree}
      >
        ...
      </DocsPage>
    );
  }
  ```

  The `footer` property in `DocsPage` has also updated, now you can specify or replace the default footer component.

  ```tsx
  <DocsPage footer={{ items: {} }}>...</DocsPage>
  ```

### Minor Changes

- b30d1cd: **Support theme presets**

  Add theme presets for the Tailwind CSS plugin, the default and ocean presets are available now.

  ```js
  const { docsUi, docsUiPlugins } = require('next-docs-ui/tailwind-plugin');

  /** @type {import('tailwindcss').Config} */
  module.exports = {
    plugins: [
      ...docsUiPlugins,
      docsUi({
        preset: 'ocean',
      }),
    ],
  };
  ```

- 9929c5b: **Support multiple page tree roots**

  You can specify a `root` property in `meta.json`, the nearest root folder will be used as the root of page tree instead.

  ```json
  {
    "title": "Hello World",
    "root": true
  }
  ```

### Patch Changes

- Updated dependencies [9929c5b]
- Updated dependencies [9929c5b]
- Updated dependencies [49201be]
- Updated dependencies [338ea98]
- Updated dependencies [4c1334e]
- Updated dependencies [9929c5b]
  - next-docs-zeta@7.0.0

## 6.1.0

### Minor Changes

- 6e0d2e1: **Support `Layout` for non-docs pages (without page tree)**

  Same as Docs Layout but doesn't include a sidebar. It can be used outside of the docs, a page tree is not required.

  ```jsx
  import { Layout } from 'next-docs-ui/layout';

  export default function HomeLayout({ children }) {
    return <Layout>{children}</Layout>;
  }
  ```

  **`nav.items` prop is deprecated**

  It is now replaced by `links`.

- 2a82e9d: **Support linking to accordions**

  You can now specify an `id` for accordion. The accordion will automatically open when the user is navigating to the page with the specified `id` in hash parameter.

  ```mdx
  <Accordions>
  <Accordion title="My Title" id="my-title">

  My Content

  </Accordion>
  </Accordions>
  ```

### Patch Changes

- 65b7f30: Improve search dialog design
- Updated dependencies [f39ae40]
  - next-docs-zeta@6.1.0

## 6.0.2

### Patch Changes

- next-docs-zeta@6.0.2

## 6.0.1

### Patch Changes

- 515a3e1: Fix inline code blocks are not highlighted
  - next-docs-zeta@6.0.1

## 6.0.0

### Major Changes

- 983ede8: **Remove `not-found` component**

  The `not-found` component was initially intended to be the default 404 page. However, we found that the Next.js default one is good enough. For advanced cases, you can always build your own 404 page.

- ebe8d9f: **Support Tailwind CSS plugin usage**

  If you are using Tailwind CSS for your docs, it's now recommended to use the official plugin instead.

  ```js
  const { docsUi, docsUiPlugins } = require('next-docs-ui/tailwind-plugin');

  /** @type {import('tailwindcss').Config} */
  module.exports = {
    darkMode: 'class',
    content: [
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './content/**/*.mdx',
      './node_modules/next-docs-ui/dist/**/*.js',
    ],
    plugins: [...docsUiPlugins, docsUi],
  };
  ```

  The `docsUi` plugin adds necessary utilities & colors, and `docsUiPlugins` are its dependency plugins which should not be missing.

- 7d89e83: **Add required property `url` to `<DocsPage />` component**

  You must pass the URL of current page to `<DocsPage />` component.

  ```diff
  export default function Page({ params }) {
    return (
      <DocsPage
  +      url={page.url}
        toc={page.data.toc}
      >
        ...
      </DocsPage>
    )
  }
  ```

  **`footer` property is now optional**

  Your `footer` property in `<DocsPage />` will be automatically generated if not specified.

  ```ts
  findNeighbour(tree, url);
  ```

- 0599d50: **Separate MDX components**

  Previously, you can only import the code block component from `next-docs-ui/mdx` (Client Component) and `next-docs-ui/mdx-server` (Server Component).

  This may lead to confusion, hence, it is now separated into multiple files. You can import these components regardless it is either a client or a server component.

  Notice that `MDXContent` is now renamed to `DocsBody`, you must import it from `next-docs-ui/page` instead.

  ```diff
  - import { MDXContent } from "next-docs-ui/mdx"
  - import { MDXContent } from "next-docs-ui/mdx-server"

  + import { DocsBody } from "next-docs-ui/page"
  ```

  ```diff
  - import { Card, Cards } from "next-docs-ui/mdx"
  + import { Card, Cards } from "next-docs-ui/mdx/card"

  - import { Pre } from "next-docs-ui/mdx"
  + import { Pre } from "next-docs-ui/mdx/pre"

  - import { Heading } from "next-docs-ui/mdx"
  + import { Heading } from "next-docs-ui/mdx/heading"

  - import defaultComponents from "next-docs-ui/mdx"
  + import defaultComponents from "next-docs-ui/mdx/default-client"

  - import defaultComponents from "next-docs-ui/mdx-server"
  + import defaultComponents from "next-docs-ui/mdx/default"
  ```

### Minor Changes

- 56a35ce: Support custom `searchOptions` in Algolia Search Dialog

### Patch Changes

- 5c98f7f: Support custom attributes to `pre` element inside code blocks
- Updated dependencies [9ef047d]
  - next-docs-zeta@6.0.0

## 5.0.0

### Minor Changes

- de44efe: Migrate to Shikiji
- de44efe: Support code highlighting options

### Patch Changes

- Updated dependencies [de44efe]
- Updated dependencies [de44efe]
  - next-docs-zeta@5.0.0

## 4.0.9

### Patch Changes

- 70545e7: Support `enableThemeProvider` option in RootProvider
- Updated dependencies [a883009]
  - next-docs-zeta@4.0.9

## 4.0.8

### Patch Changes

- e0c5c96: Make ESM only
- Updated dependencies [e0c5c96]
  - next-docs-zeta@4.0.8

## 4.0.7

### Patch Changes

- b9af5ed: Update tsup & dependencies
- Updated dependencies [b9af5ed]
  - next-docs-zeta@4.0.7

## 4.0.6

### Patch Changes

- Updated dependencies [ff38f6e]
  - next-docs-zeta@4.0.6

## 4.0.5

### Patch Changes

- f00e38f: Use `dvh` for sidebar height
  - next-docs-zeta@4.0.5

## 4.0.4

### Patch Changes

- 1b10e13: Default accordion type to "single"
  - next-docs-zeta@4.0.4

## 4.0.3

### Patch Changes

- Updated dependencies [0cc10cb]
  - next-docs-zeta@4.0.3

## 4.0.2

### Patch Changes

- next-docs-zeta@4.0.2

## 4.0.1

### Patch Changes

- 927714a: Remove dropdown from theme toggle
- d58e90a: Use await imports to import client components in Server Components
- cc1fe39: Render TOC header & footer in Server Component
- 01b23e2: Support Next.js 14
- d58e90a: Add y margins to Callout and Pre component
- Updated dependencies [2da93d8]
- Updated dependencies [01b23e2]
  - next-docs-zeta@4.0.1

## 4.0.0

### Minor Changes

- 6c4a782: Improve CommonJS/ESM compatibility

  Since this release, all server utilities will be CommonJS by default unless
  they have referenced ESM modules in the code. For instance,
  `next-docs-zeta/middleware` is now a CommonJS file. However, some modules,
  such as `next-docs-zeta/server` requires ESM-only package, hence, they remain
  a ESM file.

  Notice that the extension of client-side files is now `.js` instead of `.mjs`,
  but they're still ESM.

  **Why?**

  After migrating to `.mjs` Next.js config file, some imports stopped to work.
  The built-in Next.js bundler seems can't resolve these `next` imports in
  external packages, causing errors when modules have imported Next.js itself
  (e.g. `next/image`) in the code.

  By changing client-side files extension to `.mjs` and using CommonJS for
  server-side files, this error is solved.

- 6c4a782: Support Server Component usage for MDX default components

### Patch Changes

- b2112e8: Improve default codeblock
- 6c4a782: Fix sidebar opening issue
- Updated dependencies [6c4a782]
- Updated dependencies [6c4a782]
  - next-docs-zeta@4.0.0

## 4.0.0

### Minor Changes

- 678cd3d: Improve CommonJS/ESM compatibility

  Since this release, all server utilities will be CommonJS by default unless
  they have referenced ESM modules in the code. For instance,
  `next-docs-zeta/middleware` is now a CommonJS file. However, some modules,
  such as `next-docs-zeta/server` requires ESM-only package, hence, they remain
  a ESM file.

  Notice that the extension of client-side files is now `.js` instead of `.mjs`,
  but they're still ESM.

  **Why?**

  After migrating to `.mjs` Next.js config file, some imports stopped to work.
  The built-in Next.js bundler seems can't resolve these `next` imports in
  external packages, causing errors when modules have imported Next.js itself
  (e.g. `next/image`) in the code.

  By changing client-side files extension to `.mjs` and using CommonJS for
  server-side files, this error is solved.

- d2eb490: Support Server Component usage for MDX default components

### Patch Changes

- 0175b4f: Fix sidebar opening issue
- Updated dependencies [678cd3d]
- Updated dependencies [24245a3]
  - next-docs-zeta@4.0.0

## 3.0.0

### Minor Changes

- 522ed48: Update typography & layout styles

### Patch Changes

- a4a8120: Update search utilities import paths.

  Search Utilities in `next-docs-zeta/server` is now moved to
  `next-docs-zeta/search` and `next-docs-zeta/server-algolia`.

  Client-side Changes: `next-docs-zeta/search` -> `next-docs-zeta/search/client`
  `next-docs-zeta/search-algolia` -> `next-docs-zeta/search-algolia/client`

  If you're using Next Docs UI, make sure to import the correct path.

- Updated dependencies [1043532]
- Updated dependencies [7a0690b]
- Updated dependencies [a4a8120]
  - next-docs-zeta@3.0.0

## 2.4.1

### Patch Changes

- dc4f10d: Fix Callout component overflow
- 841a18b: Support passing extra props to Card components
- Updated dependencies [dfc8b44]
- Updated dependencies [ef4d8cc]
  - next-docs-zeta@2.4.1

## 2.4.0

### Minor Changes

- 82c4fc6: Override default typography styles
- 25e6856: Create Callout component

### Patch Changes

- 1cb6385: Improve Inline TOC component
- Updated dependencies [27ce871]
  - next-docs-zeta@2.4.0

## 2.3.3

### Patch Changes

- 634f7d3: Reduce dependencies
- 996a914: Create Inline TOC component
- eac081c: Update github urls & author name
- Updated dependencies [634f7d3]
- Updated dependencies [eac081c]
  - next-docs-zeta@2.3.3

## 2.3.2

### Patch Changes

- e0ebafa: Improve global padding
  - next-docs-zeta@2.3.2

## 2.3.1

### Patch Changes

- cd0b4a3: Support CSS classes usage for steps component
- cd0b4a3: Fix TOC marker position
  - next-docs-zeta@2.3.1

## 2.3.0

### Minor Changes

- 32a4669: Support algolia search dialog

### Patch Changes

- cef6143: Fix toc marker position
- 32a4669: Improve search API usage
- b65219c: Separate default and custom search dialog
- 9c3bc86: Improve i18n language select
- 6664178: Support custom search function for search dialog
- Updated dependencies [6664178]
- Updated dependencies [a0f9911]
- Updated dependencies [6664178]
  - next-docs-zeta@2.3.0

## 2.2.0

### Minor Changes

- 1ff7172: Remove support for importing "next-docs-ui/components", please use
  "next-docs-ui/nav" instead

### Patch Changes

- e546f4e: Hotfix sidebar collapsible not closing
  - next-docs-zeta@2.2.0

## 2.1.2

### Patch Changes

- a3f443f: Improve colors in light mode
- 2153fc8: Improve navbar transparent mode
- 4e7e0d2: Replace `next-docs-ui/components` with `next-docs-ui/nav`
- 4816737: Fix sidebar collapsible button
- Updated dependencies [dfbbc17]
- Updated dependencies [79227d8]
  - next-docs-zeta@2.1.2

## 2.1.1

### Patch Changes

- 14459cf: Fix image-zoom causes viewport overflow on IOS devices
- a015445: Improve search toggle
- 794c2c6: Remove default icon from cards
  - next-docs-zeta@2.1.1

## 2.1.0

### Minor Changes

- db050fc: Redesign default theme & layout

### Patch Changes

- b527988: Files component support custom icons
- 69a4469: Animate TOC marker
- dbe1bcf: Support transparent navbar for custom navbar
- Updated dependencies [a5a661e]
  - next-docs-zeta@2.1.0

## 2.0.3

### Patch Changes

- caa7e98: Fix sidebar animation problems
- caa7e98: Improve copy button in codeblocks
  - next-docs-zeta@2.0.3

## 2.0.2

### Patch Changes

- 74e5e85: Several UI improvements
- Support adding header to TOC component
- Updated dependencies [74e5e85]
- Updated dependencies [72e9fdf]
  - next-docs-zeta@2.0.2

## 2.0.1

### Patch Changes

- 8a05955: Improve syntax highlighting
- Updated dependencies [48c5256]
  - next-docs-zeta@2.0.1

## 2.0.0

### Major Changes

- 9bf1297: Update API usage

### Patch Changes

- e8b3e50: Use react-medium-image-zoom for zoom images
- 6c408d0: Change layout width
  - next-docs-zeta@2.0.0

## 1.6.9

### Patch Changes

- 5ee874c: Create Accordions component
- 1630f74: Add default border to TOC content
  - next-docs-zeta@1.6.9

## 1.6.8

### Patch Changes

- 4cf4552: Fix aria-controls warning & support default index
  - next-docs-zeta@1.6.8

## 1.6.7

### Patch Changes

- f72a4c1: Improve animations & layout
- 88bab2f: Support `lastUpdate` in page
- f1846e8: Support i18n search dialog placeholder
  - next-docs-zeta@1.6.7

## 1.6.6

### Patch Changes

- be8a93d: Support sidebar default open level
  - next-docs-zeta@1.6.6

## 1.6.5

### Patch Changes

- b8a76f8: Fix theme toggle wrong icon
- 7337d59: Create Zoom Image component
- 79abe84: Support collapsible sidebar
- Updated dependencies [79abe84]
  - next-docs-zeta@1.6.5

## 1.6.4

### Patch Changes

- e6ebf6a: Rename `sidebarContent` to `sidebarFooter`
- e01bf3a: Allow `true` to keep default
- e6ebf6a: Imrove sidebar banner
  - next-docs-zeta@1.6.4

## 1.6.3

### Patch Changes

- Support replacing breadcrumb
- 8d07003: Replace type of `TreeNode[]` with `PageTree`
- Updated dependencies [8d07003]
  - next-docs-zeta@1.6.3

## 1.6.2

### Patch Changes

- 5512300: Support custom navbar items
- af8720b: Improve default code block
- 2836799: Support I18n text in built-in components
  - next-docs-zeta@1.6.2

## 1.6.1

### Patch Changes

- 689c75d: Create Files component
- Updated dependencies [fc6279e]
  - next-docs-zeta@1.6.1

## 1.6.0

### Patch Changes

- 037d5e5: Export default mdx components
- Updated dependencies [cdd30d5]
- Updated dependencies [edb9930]
  - next-docs-zeta@1.6.0

## 1.5.3

### Patch Changes

- fa8d4cf: Update dependencies
- f0ab1ba: Improve typography
- Updated dependencies [fa8d4cf]
  - next-docs-zeta@1.5.3

## 1.5.2

### Patch Changes

- 1906e80: Create steps component
  - next-docs-zeta@1.5.2

## 1.5.1

### Patch Changes

- d4f718d: Support disabling TOC & Sidebar
  - next-docs-zeta@1.5.1

## 1.5.0

### Patch Changes

- Updated dependencies [fb2abb3]
  - next-docs-zeta@1.5.0

## 1.4.1

### Patch Changes

- 8883553: Support tabs component
- d084de2: Export default search dialog
- Improve Search Dialog UI
- Updated dependencies
- Updated dependencies [3d92c92]
  - next-docs-zeta@1.4.1

## 1.4.0

### Minor Changes

- 45a174a: Split roll-button into optional component

### Patch Changes

- ed385ab: Add Type Table component
- 5407360: Improve sidebar layout
- Updated dependencies [0f106d9]
  - next-docs-zeta@1.4.0

## 1.3.1

### Patch Changes

- 21725e4: Support replacing default search dialog component
- 7fb2b9e: Support custom page & folder icons
- Updated dependencies [ff05f5d]
- Updated dependencies [7fb2b9e]
  - next-docs-zeta@1.3.1

## 1.3.0

### Minor Changes

- 98226d9: Rewrite slugger and TOC utilities

### Patch Changes

- 6999268: Support custom codeblock meta in Codeblocks
- Change default typography
- Updated dependencies [98226d9]
  - next-docs-zeta@1.3.0

## 1.2.1

### Patch Changes

- 1b626c9: Redesign UI
- ce10df9: Support custom sidebar banner
- Updated dependencies [b15895f]
  - next-docs-zeta@1.2.1

## 1.2.0

### Minor Changes

- Remove `tree` prop from Docs Page, replaced by pages context.

### Patch Changes

- 5f248fb: Support Auto Scroll in TOC for headless docs
- Updated dependencies [5f248fb]
  - next-docs-zeta@1.2.0

## 1.1.4

### Patch Changes

- 496a6b0: Improve footer design
- 496a6b0: Configure eslint + prettier
- Updated dependencies [496a6b0]
  - next-docs-zeta@1.1.4

## 1.1.3

### Patch Changes

- 10d31e6: Fix sidebar scrollbars disappeared
- Updated dependencies [0998b1b]
  - next-docs-zeta@1.1.3

## 1.1.2

### Patch Changes

- Fix aria attributes
- Improve footer styles
- Updated dependencies
  - next-docs-zeta@1.1.2

## 1.1.1

### Patch Changes

- Fix codeblocks not being generated correctly
  - next-docs-zeta@1.1.1

## 1.1.0

### Minor Changes

- 524ca9a: Support page footer

### Patch Changes

- d810bbd: Improve codeblock styles
- d810bbd: Add `<RollButton />` component
- Updated dependencies [255fc92]
  - next-docs-zeta@1.1.0

## 1.0.0

### Minor Changes

- d30d57f: Support optional I18n context provider

### Patch Changes

- Improve codeblock styles
- Updated dependencies [8e4a001]
- Updated dependencies [4fa45c0]
- Updated dependencies [0983891]
  - next-docs-zeta@1.0.0

## 0.3.2

### Patch Changes

- Fix unexpected trailing slash on Contentlayer v0.3.4
- Add Auto scroll for TOC
  - next-docs-zeta@0.3.2

## 0.3.1

### Patch Changes

- Use Radix UI scroll area
- d91de39: Fix sticky position for TOC and Sidebar
  - next-docs-zeta@0.3.1

## 0.3.0

### Minor Changes

- Support next.js images in MDX files

### Patch Changes

- next-docs-zeta@0.3.0

## 0.1.2

### Patch Changes

- 67cd8ab: Remove unused files in dist
- Updated dependencies [67cd8ab]
  - next-docs-zeta@0.2.1

## 0.1.1

### Patch Changes

- Updated dependencies [5ff94af]
- Updated dependencies [5ff94af]
  - next-docs-zeta@0.2.0
