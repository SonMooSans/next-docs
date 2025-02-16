# next-docs-zeta

## 15.0.9

## 15.0.8

## 15.0.7

### Patch Changes

- 5deaf40: Support icons in separators of `meta.json`

## 15.0.6

### Patch Changes

- 08236e1: Support custom toc settings in headings
- a06af26: Support pages without `title`

## 15.0.5

## 15.0.4

## 15.0.3

## 15.0.2

## 15.0.1

## 15.0.0

### Minor Changes

- 581f4a5: **Support code block tabs without hardcoding `<Tabs />` items**

  **migrate:** Use the `remarkCodeTab` plugin.

  **before:**

  ````mdx
  import { Tab, Tabs } from 'fumadocs-ui/components/tabs';

  <Tabs items={["Tab 1", "Tab 2"]}>

  ```ts tab
  console.log('A');
  ```

  ```ts tab
  console.log('B');
  ```

  </Tabs>
  ````

  **after:**

  ````mdx
  import { Tab, Tabs } from 'fumadocs-ui/components/tabs';

  ```ts tab="Tab 1"
  console.log('A');
  ```

  ```ts tab="Tab 2"
  console.log('B');
  ```
  ````

### Patch Changes

- 5b8cca8: Fix `remarkAdmonition` missing some types from Docusaurus
- a763058: Support reversed rest items in `meta.json`

## 14.7.7

## 14.7.6

### Patch Changes

- b9601fb: Update Shiki

## 14.7.5

### Patch Changes

- 777188b: [Page Tree Builder] Inline folders without children

## 14.7.4

### Patch Changes

- bb73a72: Fix search params being ignored in middleware redirection
- 69bd4fe: Support `source.getPageTree()` function

## 14.7.3

### Patch Changes

- 041f230: Support trailing slash

## 14.7.2

### Patch Changes

- 14b280c: Revert default i18n config

## 14.7.1

### Patch Changes

- 72dc093: Add chinese i18n configuration for Orama search if not specified

## 14.7.0

### Minor Changes

- 97ed36c: Remove defaults from `loader` and deprecate `rootDir` options

## 14.6.8

## 14.6.7

### Patch Changes

- 5474343: Export dynamic-link

## 14.6.6

## 14.6.5

### Patch Changes

- 969da26: Improve i18n api

## 14.6.4

### Patch Changes

- b71064a: Support remark plugins & vfile input on `getTableOfContents`

## 14.6.3

## 14.6.2

### Patch Changes

- 2357d40: Fix typings of `HighlightOptions`

## 14.6.1

## 14.6.0

### Minor Changes

- bebb16b: Add support for pre-rendering to `useShiki` hook
- 050b326: Support codeblock `tab` meta without value

### Patch Changes

- 4dfde6b: support additional `components` option of Orama search
- 4766292: Support React 19

## 14.5.6

### Patch Changes

- 9a18c14: Downgrade Orama to v2 to fix external tokenizers

## 14.5.5

## 14.5.4

## 14.5.3

## 14.5.2

## 14.5.1

## 14.5.0

## 14.4.2

## 14.4.1

## 14.4.0

## 14.3.1

## 14.3.0

## 14.2.1

### Patch Changes

- ca94bfd: Support sync usage of `getTableOfContents`

## 14.2.0

### Minor Changes

- e248a0f: Support Orama Cloud integration

## 14.1.1

### Patch Changes

- 1573d63: Support URL format `publicDir` in Remark Image plugin

## 14.1.0

### Minor Changes

- b262d99: bundle default Shiki transformers
- 90725c1: Support server-side `highlight` and client `useShiki` hook

### Patch Changes

- d6d290c: Upgrade Shiki
- 4a643ff: Prefer `peerDependenciesMeta` over `optionalDependencies`
- b262d99: Support JSX comment syntax on default Shiki transformers

## 14.0.2

## 14.0.1

## 14.0.0

### Major Changes

- e45bc67: **Remove deprecated `fumadocs-core/middleware` export**

  **migrate:** Use `fumadocs-core/i18n`.

- d9e908e: **Remove deprecated `languages` and `defaultLanguage` option from loader**

  **migrate:** Use I18n config API

- 9a0b09f: **Change usage of `useDocsSearch`**

  **why:** Allow static search

  **migrate:**

  Pass client option, it can be algolia, static, or fetch (default).

  ```ts
  import { useDocsSearch } from 'fumadocs-core/search/client';

  const { search, setSearch, query } = useDocsSearch({
    type: 'fetch',
    api: '/api/search', // optional
  });
  ```

- 9a0b09f: **Remove Algolia Search Client**

  **why:** Replace by the new search client

  **migrate:**

  ```ts
  import { useDocsSearch } from 'fumadocs-core/search/client';

  const { search, setSearch, query } = useDocsSearch({
    type: 'algolia',
    index,
    ...searchOptions,
  });
  ```

- 9a0b09f: **Refactor import path of `fumadocs-core/search-algolia/server` to `fumadocs-core/search/algolia`**
- d9e908e: Improved usage for `createI18nSearchAPI` (replaced `createI18nSearchAPIExperimental`)
- d9e908e: Replace `fumadocs-core/search/shared` with `fumadocs-core/server`

### Minor Changes

- d9e908e: Create search api from source (Support i18n without modifying search route handler)
- 367f4c3: Support referencing original page/meta from page tree nodes
- e1ee822: Support hast nodes in `toc` variable
- 979e301: Replace flexearch with Orama
- 979e301: Support static search (without server)
- d9e908e: Support creating metadata API from sources

### Patch Changes

- f949520: Support Shiki diff transformer
- e612f2a: Make compatible with Next.js 15
- 8ef00dc: Apply `hideLocale` to Source `getPage` APIs
- 15781f0: Fix breadcrumb empty when `includePage` isn't specified
- be820c4: Bump deps

## 13.4.10

### Patch Changes

- 6231ad3: fix(types): PageData & MetaData exactOptionalPropertyTypes compat

## 13.4.9

### Patch Changes

- 083f04a: Fix link items text

## 13.4.8

### Patch Changes

- 78e59e7: Support to add icons to link items in meta.json

## 13.4.7

### Patch Changes

- 6e1923e: Improve anchors observer

## 13.4.6

### Patch Changes

- afb697e: Fix Next.js 14.2.8 dynamic import problems
- daa66d2: Support generating static params automatically with Source API

## 13.4.5

## 13.4.4

### Patch Changes

- 729928e: Fix build error without JS engine

## 13.4.3

## 13.4.2

### Patch Changes

- 7dabbc1: Remark Image: Support relative imports
- 0c251e5: Bump deps
- 3b56170: Support to enable experiment Shiki JS engine

## 13.4.1

### Patch Changes

- 95dbba1: Scan table into search indexes by default

## 13.4.0

## 13.3.3

### Patch Changes

- f8cc167: Ignore numeric locale file name

## 13.3.2

### Patch Changes

- 0e0ef8c: Support headless search servers

## 13.3.1

## 13.3.0

### Minor Changes

- fd46eb6: Export new `createI18nSearchAPIExperimental` API for i18n config
- fd46eb6: Introduce `i18n` config for Core APIs
- fd46eb6: Deprecated `languages` and `defaultLanguage` option on Source API, replaced with `i18n` config
- fd46eb6: Move I18n middleware to `fumadocs-core/i18n`
- 9aae448: Support multiple toc active items
- c542561: Use cookie to store active locale on `always` mode

### Patch Changes

- 4916f84: Improve Source API performance

## 13.2.2

### Patch Changes

- 36b771b: Remark Image: Support relative import path
- 61b91fa: Improve Fumadocs OpenAPI support

## 13.2.1

### Patch Changes

- 17fa173: Remark Image: Support fetching image size of external urls

## 13.2.0

### Patch Changes

- 96c9dda: Change Heading scroll margins

## 13.1.0

### Patch Changes

- f280191: Page Tree Builder: Sort folders to bottom

## 13.0.7

### Patch Changes

- 37bbfff: Improve active anchor observer

## 13.0.6

## 13.0.5

### Patch Changes

- 2cf65f6: Support debounce value on algolia search client

## 13.0.4

### Patch Changes

- 5355391: Support indexing description field on documents

## 13.0.3

### Patch Changes

- 978342f: Type file system utilities (Note: This is an internal module, you're not supposed to reference it)

## 13.0.2

### Patch Changes

- 4819820: Page Tree Builder: Fallback to page icon when metadata doesn't exist

## 13.0.1

## 13.0.0

### Major Changes

- 09c3103: **Change usage of TOC component**

  **why:** Improve the flexibility of headless components

  **migrate:**

  Instead of

  ```tsx
  import * as Base from 'fumadocs-core/toc';

  return (
    <Base.TOCProvider>
      <Base.TOCItem />
    </Base.TOCProvider>
  );
  ```

  Use

  ```tsx
  import * as Base from 'fumadocs-core/toc';

  return (
    <Base.AnchorProvider>
      <Base.ScrollProvider>
        <Base.TOCItem />
        <Base.TOCItem />
      </Base.ScrollProvider>
    </Base.AnchorProvider>
  );
  ```

- b02eebf: **Remove deprecated option `defaultLang`**

  **why:** The default language feature has been supported by Shiki Rehype integration, you should use it directly.

  **migrate:** Rename to `defaultLanguage`.

### Minor Changes

- c714eaa: Support Remark Admonition plugin

## 12.5.6

## 12.5.5

## 12.5.4

### Patch Changes

- fccdfdb: Improve TOC Popover design
- 2ffd5ea: Support folder group on Page Tree Builder

## 12.5.3

## 12.5.2

### Patch Changes

- a5c34f0: Support specifying the url of root node when breadcrumbs have `includeRoot` enabled

## 12.5.1

## 12.5.0

### Minor Changes

- b9fa99d: Support `tag` facet field for Algolia Search Integration

### Patch Changes

- 525925b: Support including root folder into breadcrumbs

## 12.4.2

### Patch Changes

- 503e8e9: Support `keywords` API in advanced search

## 12.4.1

## 12.4.0

## 12.3.6

## 12.3.5

## 12.3.4

## 12.3.3

### Patch Changes

- 90d51cb: Fix problem with I18n middleware & language toggle

## 12.3.2

### Patch Changes

- ca7d0f4: Support resolving async search indexes

## 12.3.1

### Patch Changes

- cf852f6: Add configurable delayMs Parameter for Debounced Search Performance

## 12.3.0

### Minor Changes

- ce3c8ad: Page Tree Builder: Support `defaultLanguage` option
- ce3c8ad: Support hiding locale prefixes with I18n middleware

## 12.2.5

## 12.2.4

## 12.2.3

## 12.2.2

## 12.2.1

## 12.2.0

### Minor Changes

- b70ff06: Support `!name` to hide pages on `meta.json`

## 12.1.3

## 12.1.2

### Patch Changes

- b4856d1: Fix `createGetUrl` wrong locale position

## 12.1.1

### Patch Changes

- a39dbcb: Export `loadFiles` from Source API

## 12.1.0

### Minor Changes

- 0a377a9: **Support writing code blocks as a `<Tab />` element.**

  ````mdx
  import { Tabs } from 'fumadocs-ui/components/tabs';

  <Tabs items={["Tab 1", "Tab 2"]}>

  ```js tab="Tab 1"
  console.log('Hello');
  ```

  ```js tab="Tab 2"
  console.log('Hello');
  ```

  </Tabs>
  ````

  This is same as wrapping the code block in a `<Tab />` component.

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

## 12.0.7

## 12.0.6

### Patch Changes

- 7a29b79: Remove default language from `source.getLanguages`
- b0c1242: Support Next.js 15 cache behaviour in `getGithubLastEdit`

## 12.0.5

## 12.0.4

### Patch Changes

- 72dbaf1: Support `ReactNode` in page tree, table of contents and breadcrumb type definitions
- 51ca944: Support including separators in breadcrumbs

## 12.0.3

### Patch Changes

- 053609d: Rename `defaultLang` to `defaultLanguage`

## 12.0.2

## 12.0.1

## 12.0.0

### Major Changes

- 98430e9: **Remove `minWidth` deprecated option from `Sidebar` component.**

  **migrate:** Use `blockScrollingWidth` instead

### Minor Changes

- 57eb762: Support attaching custom properties during page tree builder process

### Patch Changes

- d88dfa6: Support attaching `id` property to page trees
- ba20694: Remark Headings: Support code syntax in headings

## 11.3.2

### Patch Changes

- 1b8e12b: Use `display: grid` for codeblocks

## 11.3.1

## 11.3.0

### Minor Changes

- 917d87f: Rename sidebar primitive `minWidth` prop to `blockScrollingWidth`

## 11.2.2

## 11.2.1

## 11.2.0

## 11.1.3

### Patch Changes

- 88008b1: Fix ESM compatibility problems in i18n middleware
- 944541a: Add dynamic page url according to locale
- 07a9312: Improve Search I18n utilities

## 11.1.2

## 11.1.1

### Patch Changes

- 8ef2b68: Bump deps
- 26f464d: Support relative paths in meta.json
- 26f464d: Support non-external link in meta.json

## 11.1.0

## 11.0.8

### Patch Changes

- 98258b5: Fix regex problems

## 11.0.7

### Patch Changes

- f7c2c5c: Fix custom heading ids conflicts with MDX syntax

## 11.0.6

### Patch Changes

- 5653d5d: Support customising heading id in headings
- 5653d5d: Support custom heading slugger

## 11.0.5

## 11.0.4

### Patch Changes

- 7b61b2f: Migrate `fumadocs-ui` to fully ESM, adding support for ESM `tailwind.config` file

## 11.0.3

## 11.0.2

## 11.0.1

## 11.0.0

### Major Changes

- 2d8df75: Remove `cwd` option from `remark-dynamic-content`

  why: Use `cwd` from vfile

  migrate: Pass the `cwd` option from remark instead

- 92cb12f: Simplify Source API virtual storage.

  why: Improve performance

  migrate:

  ```diff
  - storage.write('path.mdx', { type: 'page', ... })
  - storage.readPage('page')
  + storage.write('path.mdx', 'page', { ... })
  + storage.read('page', 'page')
  ```

  Transformers can now access file loader options.

  ```ts
  load({
    transformers: [
      ({ storage, options }) => {
        options.getUrl();
        options.getSlugs();
      },
    ],
  });
  ```

- f75287d: **Introduce `fumadocs-docgen` package.**

  Offer a better authoring experience for advanced use cases.

  - Move `remark-dynamic-content` and `remark-install` plugins to the new package `fumadocs-docgen`.
  - Support Typescript generator by default

  **Usage**

  Add the `remarkDocGen` plugin to your remark plugins.

  ```ts
  import { remarkDocGen, fileGenerator } from 'fumadocs-docgen';

  remark().use(remarkDocGen, { generators: [fileGenerator()] });
  ```

  Generate docs with code blocks.

  ````mdx
  ```json doc-gen:<generator>
  {
    // options
  }
  ```
  ````

  **Migrate**

  For `remarkDynamicContent`, enable `fileGenerator` and use this syntax:

  ````mdx
  ```json doc-gen:file
  {
    "file": "./path/to/my-file.txt"
  }
  ```
  ````

  For `remarkInstall`, it remains the same:

  ```ts
  import { remarkInstall } from 'fumadocs-docgen';
  ```

- 2d8df75: Remove support for `getTableOfContentsFromPortableText`

  why: Sanity integration should be provided by 3rd party integrations

  migrate: Use built-in sources, or write a custom implementation

## 10.1.3

### Patch Changes

- bbad52f: Support `bun` in `remark-install` plugin

## 10.1.2

## 10.1.1

### Patch Changes

- 779c599: Mark `getTableOfContentsFromPortableText` deprecated
- 0c01300: Fix remark-dynamic-content ignored code blocks
- 779c599: Support relative resolve path for remark-dynamic-content

## 10.1.0

## 10.0.5

### Patch Changes

- e47c62f: Improve remark plugin typings

## 10.0.4

## 10.0.3

### Patch Changes

- 6f321e5: Fix type errors of flexseach

## 10.0.2

### Patch Changes

- 10e099a: Remove deprecated options from `fumadocs-core/toc`

## 10.0.1

### Patch Changes

- c9b7763: Update to Next.js 14.1.0
- 0e78dc8: Support customising search API URL
- d8483a8: Remove undefined values from page tree

## 10.0.0

### Major Changes

- 321d1e1f: **Move Typescript integrations to `fumadocs-typescript`**

  why: It is now a stable feature

  migrate: Use `fumadocs-typescript` instead.

  ```diff
  - import { AutoTypeTable } from "fumadocs-ui/components/auto-type-table"
  + import { AutoTypeTable } from "fumadocs-typescript/ui"
  ```

### Minor Changes

- b5d16938: Support external link in `pages` property

## 9.1.0

### Minor Changes

- 909b0e35: Support duplicated names with meta and page files
- 1c388ca5: Support `defaultOpen` for folder nodes

### Patch Changes

- 691f12aa: Source API: Support relative paths as root directory

## 9.0.0

## 8.3.0

## 8.2.0

### Minor Changes

- 5c24659: Support code block icons

## 8.1.1

## 8.1.0

### Minor Changes

- eb028b4: Migrate to shiki
- 054ec60: Support generating docs for Typescript file

### Patch Changes

- 6c5a39a: Rename Git repository to `fumadocs`

## 8.0.0

### Major Changes

- 2ea9437: **Migrate to rehype-shikiji**

  - Dropped support for inline code syntax highlighting
  - Use notation-based word/line highlighting instead of meta string

  Before:

  ````md
  ```ts /config/ {1}
  const config = 'Hello';

  something.call(config);
  ```
  ````

  After:

  ````md
  ```ts
  // [!code word:config]
  const config = 'Hello'; // [!code highlight]

  something.call(config);
  ```
  ````

  Read the docs of Shikiji for more information.

- cdff313: **Separate Contentlayer integration into another package**

  why: As Fumadocs MDX is the preferred default source, Contentlayer should be optional.

  migrate:

  Install `fumadocs-contentlayer`.

  ```diff
  - import { createContentlayerSource } from "fumadocs-core/contentlayer"
  + import { createContentlayerSource } from "fumadocs-contentlayer"

  - import { createConfig } from "fumadocs-core/contentlayer/configuration"
  + import { createConfig } from "fumadocs-contentlayer/configuration"
  ```

- 2b11c20: **Rename to Fumadocs**

  `next-docs-zeta` -> `fumadocs-core`

  `next-docs-ui` -> `fumadocs-ui`

  `next-docs-mdx` -> `fumadocs-mdx`

  `@fuma-docs/openapi` -> `fumadocs-openapi`

  `create-next-docs-app` -> `create-fumadocs-app`

### Minor Changes

- 1a346a1: Add `remark-image` plugin that converts relative image urls into static image imports (Inspired by Nextra)

## 7.1.2

## 7.1.1

## 7.1.0

## 7.0.0

### Major Changes

- 9929c5b: **Migrate Contentlayer Integration to Source API**

  `createContentlayer` is now replaced by `createContentlayerSource`.

  You should configure base URL and root directory in the loader instead of Contentlayer configuration.

  It's no longer encouraged to access `allDocs` directly because they will not include `url` property anymore. Please consider `getPages` instead.

  ```ts
  import { allDocs, allMeta } from 'contentlayer/generated';
  import { createContentlayerSource } from 'next-docs-zeta/contentlayer';
  import { loader } from 'next-docs-zeta/source';

  export const { getPage, pageTree, getPages } = loader({
    baseUrl: '/docs',
    rootDir: 'docs',
    source: createContentlayerSource(allMeta, allDocs),
  });
  ```

  The interface is very similar, but you can only access Contentlayer properties from `page.data`.

  ```diff
  - <Content code={page.body.code} />
  + <Content code={page.data.body.code} />
  ```

- 9929c5b: **Source API**

  To reduce boilerplate, the Source API is now released to handle File-system based files.

  Thanks to this, you don't have to deal with the inconsistent behaviours between different content sources anymore.

  The interface is now unified, you can easily plug in a content source.

  ```ts
  import { map } from '@/.map';
  import { createMDXSource } from 'next-docs-mdx';
  import { loader } from 'next-docs-zeta/source';

  export const { getPage, getPages, pageTree } = loader({
    baseUrl: '/docs',
    rootDir: 'docs',
    source: createMDXSource(map),
  });
  ```

  **Page Tree Builder API is removed in favor of this**

- 49201be: **Change `remarkToc` to `remarkHeading`**

  The previous `remarkToc` plugin only extracts table of contents from documents, now it also adds the `id` property to all heading elements.

  ```diff
  - import { remarkToc } from "next-docs-zeta/mdx-plugins"
  + import { remarkHeading } from "next-docs-zeta/mdx-plugins"
  ```

- 4c1334e: **Improve `createI18nMiddleware` function**

  Now, you can export the middleware directly without a wrapper.

  From:

  ```ts
  export default function middleware(request: NextRequest) {
    return createI18nMiddleware(...);
  }
  ```

  To:

  ```ts
  export default createI18nMiddleware({
    defaultLanguage,
    languages,
  });
  ```

### Minor Changes

- 338ea98: **Export `create` function for Contentlayer configuration**

  If you want to include other document types, or override the output configuration, the `create` function can return the fields and document types you need.

  ```ts
  import { create } from 'next-docs-zeta/contentlayer/configuration';

  const config = create(options);

  export default {
    contentDirPath: config.contentDirPath,
    documentTypes: [config.Docs, config.Meta],
    mdx: config.mdx,
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

## 6.1.0

### Minor Changes

- f39ae40: **Forward ref to `Link` and `DynamicLink` component**

  **Legacy import name `SafeLink` is now removed**

  ```diff
  - import { SafeLink } from "next-docs-zeta/link"
  + import Link from "next-docs-zeta/link"
  ```

## 6.0.2

## 6.0.1

## 6.0.0

### Major Changes

- 9ef047d: **Pre-bundle page urls into raw pages.**

  This means you don't need `getPageUrl` anymore for built-in adapters, including `next-docs-mdx` and Contentlayer. It is now replaced by the `url` property from the pages array provided by your adapter.

  Due to this change, your old configuration might not continues to work.

  ```diff
  import { fromMap } from 'next-docs-mdx/map'

  fromMap({
  -  slugs: ...
  +  getSlugs: ...
  })
  ```

  For Contentlayer, the `getUrl` option is now moved to `createConfig`.

## 5.0.0

### Minor Changes

- de44efe: Migrate to Shikiji
- de44efe: Support code highlighting options

## 4.0.9

### Patch Changes

- a883009: Fix empty extracted paragraphs in `remark-structure`

## 4.0.8

### Patch Changes

- e0c5c96: Make ESM only

## 4.0.7

### Patch Changes

- b9af5ed: Update tsup & dependencies

## 4.0.6

### Patch Changes

- ff38f6e: Replace `getGitLastEditTime` with new `getGithubLastEdit` API

## 4.0.5

## 4.0.4

## 4.0.3

### Patch Changes

- 0cc10cb: Support custom build page tree options

## 4.0.2

## 4.0.1

### Patch Changes

- 2da93d8: Support generating package install codeblocks automatically
- 01b23e2: Support Next.js 14

## 4.0.0

### Major Changes

- 6c4a782: Create `PageTreeBuilder` API

  The old `buildPageTree` function provided by 'next-docs-zeta/contentlayer' is
  now removed. Please use new API directly, or use the built-in
  `createContentlayer` utility instead.

  ```diff
  - import { buildPageTree } from 'next-docs-zeta/contentlayer'
  + import { createPageTreeBuilder } from 'next-docs-zeta/server'
  ```

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

## 4.0.0

### Major Changes

- 24245a3: Create `PageTreeBuilder` API

  The old `buildPageTree` function provided by 'next-docs-zeta/contentlayer' is
  now removed. Please use new API directly, or use the built-in
  `createContentlayer` utility instead.

  ```diff
  - import { buildPageTree } from 'next-docs-zeta/contentlayer'
  + import { createPageTreeBuilder } from 'next-docs-zeta/server'
  ```

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

## 3.0.0

### Major Changes

- a4a8120: Update search utilities import paths.

  Search Utilities in `next-docs-zeta/server` is now moved to
  `next-docs-zeta/search` and `next-docs-zeta/server-algolia`.

  Client-side Changes: `next-docs-zeta/search` -> `next-docs-zeta/search/client`
  `next-docs-zeta/search-algolia` -> `next-docs-zeta/search-algolia/client`

  If you're using Next Docs UI, make sure to import the correct path.

### Minor Changes

- 7a0690b: Export remark-toc and remark-structure MDX plugins

### Patch Changes

- 1043532: Type MDX Plugins

## 2.4.1

### Patch Changes

- dfc8b44: Remove tree root node from breadcrumb
- ef4d8cc: Expose props from SafeLink component

## 2.4.0

### Patch Changes

- 27ce871: Add missing shiki peer deps

## 2.3.3

### Patch Changes

- 634f7d3: Reduce dependencies
- eac081c: Update github urls & author name

## 2.3.2

## 2.3.1

## 2.3.0

### Minor Changes

- 6664178: Support algolia search
- a0f9911: Support `useAlgoliaSearch`
- 6664178: Improve search document structurize algorithm

## 2.2.0

## 2.1.2

### Patch Changes

- dfbbc17: Exclude index page from "..." operator
- 79227d8: Fix breadcrumb resolve index file

## 2.1.1

## 2.1.0

### Patch Changes

- a5a661e: Remove `item` prop from TOC items

## 2.0.3

## 2.0.2

### Patch Changes

- 74e5e85: Contentlayer: Support rest item in meta.json
- 72e9fdf: Contentlayer: Support extracting folder in meta.json

## 2.0.1

### Patch Changes

- 48c5256: Contentlayer: Sort pages by default

## 2.0.0

## 1.6.9

## 1.6.8

## 1.6.7

## 1.6.6

## 1.6.5

### Patch Changes

- 79abe84: Support collapsible sidebar

## 1.6.4

## 1.6.3

### Patch Changes

- 8d07003: Replace type of `TreeNode[]` with `PageTree`

## 1.6.2

## 1.6.1

### Patch Changes

- fc6279e: Support get last git edit time

## 1.6.0

### Minor Changes

- edb9930: Redesign Contentlayer adapter API

### Patch Changes

- cdd30d5: Create remark-dynamic-content plugin

## 1.5.3

### Patch Changes

- fa8d4cf: Update dependencies

## 1.5.2

## 1.5.1

## 1.5.0

### Minor Changes

- fb2abb3: Rewrite create search API & stabilize experimental Advanced Search

## 1.4.1

### Patch Changes

- Support better document search with `experimental_initSearchAPI`
- 3d92c92: Support custom computed fields in Contentlayer

## 1.4.0

### Patch Changes

- 0f106d9: Fix default sidebar element type

## 1.3.1

### Patch Changes

- ff05f5d: Support custom fields in Contentlayer configuration generator
- 7fb2b9e: Support custom page & folder icons

## 1.3.0

### Minor Changes

- 98226d9: Rewrite slugger and TOC utilities

## 1.2.1

### Patch Changes

- b15895f: Remove url prop from page tree folders

## 1.2.0

### Patch Changes

- 5f248fb: Support Auto Scroll in TOC for headless docs

## 1.1.4

### Patch Changes

- 496a6b0: Configure eslint + prettier

## 1.1.3

### Patch Changes

- 0998b1b: Support edge runtime middlewares

## 1.1.2

### Patch Changes

- Fix aria attributes

## 1.1.1

## 1.1.0

### Patch Changes

- 255fc92: Support finding neighbours of a page & Flatten page tree

## 1.0.0

### Major Changes

- 8e4a001: Rewrite Contentlayer tree builder + Support Context API

### Minor Changes

- 4fa45c0: Add support for dynamic hrefs and relative paths to `<SafeLink />`
  component
- 0983891: Add international Docs search

## 0.3.2

## 0.3.1

## 0.3.0

## 0.2.1

### Patch Changes

- 67cd8ab: Remove unused files in dist

## 0.2.0

### Minor Changes

- 5ff94af: Replace TOC data attribute `data-active` with `aria-selected`

### Patch Changes

- 5ff94af: Fix contentlayer parser bugs

## 0.1.0

### Minor Changes

- Add get toc utils for sanity (portable text)

## 0.0.2

### Patch Changes

- d909192: Fix several contentlayer scanner bugs
- e88eec8: Add README
