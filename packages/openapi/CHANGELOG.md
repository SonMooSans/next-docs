# @fuma-docs/openapi

## 6.0.10

### Patch Changes

- Updated dependencies [fa5b908]
  - fumadocs-ui@15.0.9
  - fumadocs-core@15.0.9

## 6.0.9

### Patch Changes

- Updated dependencies [8f5993b]
  - fumadocs-ui@15.0.8
  - fumadocs-core@15.0.8

## 6.0.8

### Patch Changes

- f118e24: Fix gaps of property components under parameters section
- Updated dependencies [5deaf40]
- Updated dependencies [f782c2c]
  - fumadocs-core@15.0.7
  - fumadocs-ui@15.0.7

## 6.0.7

### Patch Changes

- e7b6f0a: Support `disablePlayground` option
- Updated dependencies [08236e1]
- Updated dependencies [a06af26]
  - fumadocs-core@15.0.6
  - fumadocs-ui@15.0.6

## 6.0.6

### Patch Changes

- Updated dependencies [14b2f95]
  - fumadocs-ui@15.0.5
  - fumadocs-core@15.0.5

## 6.0.5

### Patch Changes

- c892bd9: fix(packages/openapi): hide AuthSection is security is an empty array
- cd894b1: Feat: support multiple examples in openapi operation #1370

  Adds two new options to the ApiExample renderer "Samples" and "Sample"

- 31e7e3e: Improve sample select UI
- Updated dependencies [c892bd9]
- Updated dependencies [c892bd9]
  - fumadocs-ui@15.0.4
  - fumadocs-core@15.0.4

## 6.0.4

### Patch Changes

- f3ccad2: fix: openapi - preserve <> placeholder marker for params with no example value
- ff9bf0f: Fix: Hide the server select panel, not just the select, if no or only one server is present
- Updated dependencies [47171db]
  - fumadocs-ui@15.0.3
  - fumadocs-core@15.0.3

## 6.0.3

### Patch Changes

- a8e9e1f: Bump deps
- ab44e05: Add file extensions to imports
- Updated dependencies [a8e9e1f]
  - fumadocs-ui@15.0.2
  - fumadocs-core@15.0.2

## 6.0.2

### Patch Changes

- a127dc4: Move to `tsc` for building package
- Updated dependencies [421166a]
  - fumadocs-ui@15.0.1
  - fumadocs-core@15.0.1

## 6.0.1

### Patch Changes

- 127d9df: Fix type errors

## 6.0.0

### Major Changes

- 1286a04: **Change interface for `useScalar`**

  From:

  ```tsx
  import { createOpenAPI } from 'fumadocs-openapi/server';
  import { APIPlayground } from 'fumadocs-openapi/scalar';

  export const openapi = createOpenAPI({
    useScalar: true,
  });
  ```

  To:

  ```tsx
  import { createOpenAPI } from 'fumadocs-openapi/server';
  import { APIPlayground } from 'fumadocs-openapi/scalar';

  export const openapi = createOpenAPI({
    renderer: {
      APIPlayground,
    },
  });
  ```

### Minor Changes

- 9e02460: Add built-in UI to basic auth input (username:password)

## 5.12.0

### Minor Changes

- 471478b: Support `useScalar` option

### Patch Changes

- 983b8a6: Use path of operation when id is not defined
- Updated dependencies [5b8cca8]
- Updated dependencies [a89d6e0]
- Updated dependencies [a84f37a]
- Updated dependencies [f2f9c3d]
- Updated dependencies [a763058]
- Updated dependencies [581f4a5]
  - fumadocs-core@15.0.0
  - fumadocs-ui@15.0.0

## 5.11.8

### Patch Changes

- Updated dependencies [4f2538a]
- Updated dependencies [191012a]
- Updated dependencies [fb6b168]
  - fumadocs-ui@14.7.7
  - fumadocs-core@14.7.7

## 5.11.7

### Patch Changes

- b9601fb: Update Shiki
- Updated dependencies [b9601fb]
  - fumadocs-core@14.7.6
  - fumadocs-ui@14.7.6

## 5.11.6

### Patch Changes

- Updated dependencies [5d41bf1]
- Updated dependencies [777188b]
- Updated dependencies [900eb6c]
- Updated dependencies [a959374]
  - fumadocs-ui@14.7.5
  - fumadocs-core@14.7.5

## 5.11.5

### Patch Changes

- Updated dependencies [26d9ccb]
- Updated dependencies [036f8e1]
- Updated dependencies [bb73a72]
- Updated dependencies [69bd4fe]
  - fumadocs-ui@14.7.4
  - fumadocs-core@14.7.4

## 5.11.4

### Patch Changes

- 056ab2c: Add `showResponseSchema` option to show the full response schema
- Updated dependencies [041f230]
- Updated dependencies [ca1cf19]
  - fumadocs-core@14.7.3
  - fumadocs-ui@14.7.3

## 5.11.3

### Patch Changes

- 35a12cd: Add code sample generation support for variable url

## 5.11.2

### Patch Changes

- 60fe635: Support variable server url
- Updated dependencies [14b280c]
  - fumadocs-core@14.7.2
  - fumadocs-ui@14.7.2

## 5.11.1

### Patch Changes

- Updated dependencies [72dc093]
- Updated dependencies [18b00c1]
  - fumadocs-core@14.7.1
  - fumadocs-ui@14.7.1

## 5.11.0

### Minor Changes

- 0e8be0e: Support XML request body

### Patch Changes

- 698b385: Fix switcher default value being ignored
- Updated dependencies [a557bb4]
- Updated dependencies [97ed36c]
  - fumadocs-ui@14.7.0
  - fumadocs-core@14.7.0

## 5.10.6

### Patch Changes

- Updated dependencies [e95be52]
- Updated dependencies [f3298ea]
  - fumadocs-ui@14.6.8
  - fumadocs-core@14.6.8

## 5.10.5

### Patch Changes

- Updated dependencies [5474343]
  - fumadocs-core@14.6.7
  - fumadocs-ui@14.6.7

## 5.10.4

### Patch Changes

- Updated dependencies [9c930ea]
  - fumadocs-ui@14.6.6
  - fumadocs-core@14.6.6

## 5.10.3

### Patch Changes

- Updated dependencies [969da26]
  - fumadocs-core@14.6.5
  - fumadocs-ui@14.6.5

## 5.10.2

### Patch Changes

- Updated dependencies [b71064a]
- Updated dependencies [67124b1]
- Updated dependencies [1810868]
  - fumadocs-core@14.6.4
  - fumadocs-ui@14.6.4

## 5.10.1

### Patch Changes

- Updated dependencies [abc3677]
  - fumadocs-ui@14.6.3
  - fumadocs-core@14.6.3

## 5.10.0

### Minor Changes

- 8aff7f4: Support Route Handler Proxy

### Patch Changes

- 1a2597a: Expose `--fd-tocnav-height` CSS variable
- Updated dependencies [9908922]
- Updated dependencies [2357d40]
- Updated dependencies [ece734f]
- Updated dependencies [1a2597a]
  - fumadocs-ui@14.6.2
  - fumadocs-core@14.6.2

## 5.9.0

### Minor Changes

- ec5fb2e: Replace `@apidevtools/json-schema-ref-parser` with `@scalar/openapi-parser`

### Patch Changes

- Updated dependencies [9532855]
  - fumadocs-ui@14.6.1
  - fumadocs-core@14.6.1

## 5.8.2

### Patch Changes

- 4766292: Support React 19
- Updated dependencies [010da9e]
- Updated dependencies [bebb16b]
- Updated dependencies [9585561]
- Updated dependencies [4dfde6b]
- Updated dependencies [bebb16b]
- Updated dependencies [4766292]
- Updated dependencies [050b326]
  - fumadocs-ui@14.6.0
  - fumadocs-core@14.6.0

## 5.8.1

### Patch Changes

- Updated dependencies [b7745f4]
- Updated dependencies [9a18c14]
  - fumadocs-ui@14.5.6
  - fumadocs-core@14.5.6

## 5.8.0

### Minor Changes

- 2d0501f: Support webhooks & callbacks
- 2d0501f: Support OpenAPI 3.1

### Patch Changes

- Updated dependencies [06f66d8]
- Updated dependencies [2d0501f]
  - fumadocs-ui@14.5.5
  - fumadocs-core@14.5.5

## 5.7.5

### Patch Changes

- Updated dependencies [8e2cb31]
  - fumadocs-ui@14.5.4
  - fumadocs-core@14.5.4

## 5.7.4

### Patch Changes

- Updated dependencies [c5a5ba0]
- Updated dependencies [f34e895]
- Updated dependencies [4c82a3d]
- Updated dependencies [f8e5157]
- Updated dependencies [ad00dd3]
  - fumadocs-ui@14.5.3
  - fumadocs-core@14.5.3

## 5.7.3

### Patch Changes

- Updated dependencies [072e349]
  - fumadocs-ui@14.5.2
  - fumadocs-core@14.5.2

## 5.7.2

### Patch Changes

- Updated dependencies [6fd480f]
  - fumadocs-ui@14.5.1
  - fumadocs-core@14.5.1

## 5.7.1

### Patch Changes

- Updated dependencies [66c70ec]
- Updated dependencies [05d224c]
  - fumadocs-ui@14.5.0
  - fumadocs-core@14.5.0

## 5.7.0

### Minor Changes

- c66df64: OpenAPI: Display the server selector only when more than one server is defined in the OpenAPI schema
  OpenAPI: Improve APIInfo position for better visibility on smaller screens

## 5.6.2

### Patch Changes

- Updated dependencies [0f1603a]
  - fumadocs-ui@14.4.2
  - fumadocs-core@14.4.2

## 5.6.1

### Patch Changes

- Updated dependencies [07474cb]
- Updated dependencies [48a2c15]
  - fumadocs-ui@14.4.1
  - fumadocs-core@14.4.1

## 5.6.0

### Minor Changes

- 196b78b: OpenAPI: Server selector to allow interacting with different API environments

## 5.5.11

### Patch Changes

- 47fc20e: Fix custom name in `apiKey` type authorization being ignored

## 5.5.10

### Patch Changes

- Updated dependencies [5fd4e2f]
- Updated dependencies [5fd4e2f]
- Updated dependencies [5145123]
- Updated dependencies [64defe0]
- Updated dependencies [8a3f5b0]
  - fumadocs-ui@14.4.0
  - fumadocs-core@14.4.0

## 5.5.9

### Patch Changes

- Updated dependencies [e7443d7]
  - fumadocs-ui@14.3.1
  - fumadocs-core@14.3.1

## 5.5.8

### Patch Changes

- 4e76165: Fix rendering of OpenAPI nullable defined with `allOf`.
- Updated dependencies [80655b3]
- Updated dependencies [b8a12ed]
  - fumadocs-ui@14.3.0
  - fumadocs-core@14.3.0

## 5.5.7

### Patch Changes

- Updated dependencies [ca94bfd]
- Updated dependencies [2949da3]
  - fumadocs-core@14.2.1
  - fumadocs-ui@14.2.1

## 5.5.6

### Patch Changes

- Updated dependencies [e248a0f]
- Updated dependencies [7a5393b]
  - fumadocs-core@14.2.0
  - fumadocs-ui@14.2.0

## 5.5.5

### Patch Changes

- Updated dependencies [1573d63]
  - fumadocs-core@14.1.1
  - fumadocs-ui@14.1.1

## 5.5.4

### Patch Changes

- d6d290c: Upgrade Shiki
- d50750b: Improved UI design
- Updated dependencies [b262d99]
- Updated dependencies [d6d290c]
- Updated dependencies [4a643ff]
- Updated dependencies [b262d99]
- Updated dependencies [90725c1]
  - fumadocs-core@14.1.0
  - fumadocs-ui@14.1.0

## 5.5.3

### Patch Changes

- 35695be: Support multiple tags in OpenAPI `groupBy: tag` file generation

## 5.5.2

### Patch Changes

- Updated dependencies [bfc2bf2]
  - fumadocs-ui@14.0.2
  - fumadocs-core@14.0.2

## 5.5.1

### Patch Changes

- Updated dependencies [1a7d78a]
  - fumadocs-ui@14.0.1
  - fumadocs-core@14.0.1

## 5.5.0

### Minor Changes

- 129923e: Support custom `shiki` options
- 160e52e: Support `disableCache` prop on APIPage

### Patch Changes

- 61a3d14: Support `x-displayName` on tags
- e612f2a: Make compatible with Next.js 15
- 8a32f79: Fix header name in code samples
- be820c4: Bump deps
- 42c9701: Fix TypeScript schema generation
- Updated dependencies [e45bc67]
- Updated dependencies [34cf456]
- Updated dependencies [d9e908e]
- Updated dependencies [d9e908e]
- Updated dependencies [d9e908e]
- Updated dependencies [f949520]
- Updated dependencies [ad47fd8]
- Updated dependencies [9a0b09f]
- Updated dependencies [9a0b09f]
- Updated dependencies [d9e908e]
- Updated dependencies [367f4c3]
- Updated dependencies [87063eb]
- Updated dependencies [367f4c3]
- Updated dependencies [64f0653]
- Updated dependencies [e1ee822]
- Updated dependencies [d9e908e]
- Updated dependencies [d9e908e]
- Updated dependencies [e612f2a]
- Updated dependencies [3d0369a]
- Updated dependencies [9a0b09f]
- Updated dependencies [d9e908e]
- Updated dependencies [9a10262]
- Updated dependencies [d9e908e]
- Updated dependencies [3d054a8]
- Updated dependencies [8ef00dc]
- Updated dependencies [979e301]
- Updated dependencies [d9e908e]
- Updated dependencies [979e301]
- Updated dependencies [15781f0]
- Updated dependencies [be820c4]
- Updated dependencies [be53a0e]
- Updated dependencies [d9e908e]
  - fumadocs-core@14.0.0
  - fumadocs-ui@14.0.0

## 5.4.14

### Patch Changes

- Updated dependencies [6231ad3]
- Updated dependencies [4cb74d5]
  - fumadocs-core@13.4.10
  - fumadocs-ui@13.4.10

## 5.4.13

### Patch Changes

- Updated dependencies [083f04a]
- Updated dependencies [bcf51a6]
  - fumadocs-core@13.4.9
  - fumadocs-ui@13.4.9

## 5.4.12

### Patch Changes

- Updated dependencies [5581733]
- Updated dependencies [78e59e7]
- Updated dependencies [1a327cc]
  - fumadocs-ui@13.4.8
  - fumadocs-core@13.4.8

## 5.4.11

### Patch Changes

- Updated dependencies [6e1923e]
- Updated dependencies [6e1923e]
- Updated dependencies [6e1923e]
  - fumadocs-core@13.4.7
  - fumadocs-ui@13.4.7

## 5.4.10

### Patch Changes

- Updated dependencies [b33aff0]
- Updated dependencies [afb697e]
- Updated dependencies [6bcd263]
- Updated dependencies [daa66d2]
  - fumadocs-ui@13.4.6
  - fumadocs-core@13.4.6

## 5.4.9

### Patch Changes

- 5bca46f: Support removing all code samples
- Updated dependencies [d46a3f1]
  - fumadocs-ui@13.4.5
  - fumadocs-core@13.4.5

## 5.4.8

### Patch Changes

- Updated dependencies [729928e]
  - fumadocs-core@13.4.4
  - fumadocs-ui@13.4.4

## 5.4.7

### Patch Changes

- fumadocs-core@13.4.3
- fumadocs-ui@13.4.3

## 5.4.6

### Patch Changes

- 0cff470: Enable group id on tabs by default
- 0c251e5: Bump deps
- Updated dependencies [7dabbc1]
- Updated dependencies [0c251e5]
- Updated dependencies [3b56170]
- Updated dependencies [0c251e5]
- Updated dependencies [0c251e5]
  - fumadocs-core@13.4.2
  - fumadocs-ui@13.4.2

## 5.4.5

### Patch Changes

- Updated dependencies [95dbba1]
  - fumadocs-core@13.4.1
  - fumadocs-ui@13.4.1

## 5.4.4

### Patch Changes

- Updated dependencies [26f5360]
  - fumadocs-ui@13.4.0
  - fumadocs-core@13.4.0

## 5.4.3

### Patch Changes

- Updated dependencies [f8cc167]
  - fumadocs-core@13.3.3
  - fumadocs-ui@13.3.3

## 5.4.2

### Patch Changes

- 3d1ec96: Improve schema fields margins

## 5.4.1

### Patch Changes

- 029a156: Fix `display` on property components
- eb922e1: Support adding `description` to generated document body

## 5.4.0

### Minor Changes

- 6cf5535: Persist `authorization` field

## 5.3.2

### Patch Changes

- 0b93a31: Support `required` in `allOf` schemas

## 5.3.1

### Patch Changes

- 5660e1e: Fix `allOf` schema display problem
- 28bb673: Fix fields styles

## 5.3.0

### Minor Changes

- 3fa2436: Support Python code sample

### Patch Changes

- 3e4627a: Show required label on body parameters
- 10f6f39: Fix common parameters
- Updated dependencies [17746a6]
- Updated dependencies [0e0ef8c]
  - fumadocs-ui@13.3.2
  - fumadocs-core@13.3.2

## 5.2.2

### Patch Changes

- Updated dependencies [7258c4b]
  - fumadocs-ui@13.3.1
  - fumadocs-core@13.3.1

## 5.2.1

### Patch Changes

- 81d0887: Support disabling code sample with undefined source
- Updated dependencies [8f5b19e]
- Updated dependencies [4916f84]
- Updated dependencies [fd46eb6]
- Updated dependencies [fd46eb6]
- Updated dependencies [fd46eb6]
- Updated dependencies [fd46eb6]
- Updated dependencies [32ca37a]
- Updated dependencies [9aae448]
- Updated dependencies [c542561]
  - fumadocs-ui@13.3.0
  - fumadocs-core@13.3.0

## 5.2.0

### Minor Changes

- 70172f1: Change default value of `per` to `operation`

### Patch Changes

- 61b91fa: Improve Fumadocs OpenAPI support
- Updated dependencies [36b771b]
- Updated dependencies [61b91fa]
  - fumadocs-core@13.2.2
  - fumadocs-ui@13.2.2

## 5.1.0

### Minor Changes

- c7aa090: Generate `document` field on output MDX files

### Patch Changes

- Updated dependencies [17fa173]
  - fumadocs-core@13.2.1
  - fumadocs-ui@13.2.1

## 5.0.3

### Patch Changes

- 96c9dda: Change Heading scroll margins
- c094fef: Fix compatibility issues on other content sources
- Updated dependencies [96c9dda]
- Updated dependencies [ba588a2]
- Updated dependencies [96c9dda]
- Updated dependencies [ec983a3]
  - fumadocs-core@13.2.0
  - fumadocs-ui@13.2.0

## 5.0.2

### Patch Changes

- 22549cd: Add authorization properties to examples

## 5.0.1

### Patch Changes

- 444af27: Fix self-referencing schema types
- 90af678: Reduce initial loaded bundle size

## 5.0.0

### Major Changes

- 971817c: **Migrate to React Server Component**

  The API reference page is now a server component.
  The MDX generator will only generate a small MDX file, and the rest will be handled by our `APIPage` component.

  ```mdx
  ---
  title: Delete Api
  full: true
  method: POST
  route: /v1/apis.deleteApi
  ---

  <APIPage
    operations={[{ path: '/v1/apis.deleteApi', method: 'post' }]}
    hasHead={false}
  />
  ```

  - Markdown/MDX content is still supported, but will be processed in the server component (during runtime) instead.
  - Your Remark/Rehype plugins (e.g. Rehype Code) configured in Fumadocs MDX or other source providers, will **not** be shared. Fumadocs OpenAPI uses a separate MDX processor instance.
  - `APIPage` component will fetch the OpenAPI Schema when being rendered. **On Vercel**, if it relies on the file system, ensure the page **will not** be re-rendered after build.

  Please refer to documentation for the new usage.

### Minor Changes

- 480d211: Change output path logic
- 4bf9851: Support to group pages by tags
- 3874ab5: Support Go Sample Request
- 3874ab5: Replace Response Table of Tabs

### Patch Changes

- 4bf9851: Improve Curl example generator
- Updated dependencies [f280191]
- Updated dependencies [61ef42c]
- Updated dependencies [deae4dd]
- Updated dependencies [c8910c4]
- Updated dependencies [c8910c4]
- Updated dependencies [6c42960]
  - fumadocs-core@13.1.0
  - fumadocs-ui@13.1.0

## 4.4.2

### Patch Changes

- Updated dependencies [37bbfff]
- Updated dependencies [e7c52f2]
  - fumadocs-core@13.0.7
  - fumadocs-ui@13.0.7

## 4.4.1

### Patch Changes

- Updated dependencies [1622e36]
  - fumadocs-ui@13.0.6
  - fumadocs-core@13.0.6

## 4.4.0

### Minor Changes

- b109e44: Improve generated sample requests

### Patch Changes

- Updated dependencies [2cf65f6]
  - fumadocs-core@13.0.5
  - fumadocs-ui@13.0.5

## 4.3.1

### Patch Changes

- d987912: Show current request pathname in Playground
- 0146572: Fix empty params

## 4.3.0

### Minor Changes

- 5acebdd: Support grouping output by folders (per operation)
- 744bd24: Support accessing context information on custom frontmatter
- 6bb9d2d: Support integration with Fumadocs Source API

### Patch Changes

- 744bd24: Fix generate files on `operation` mode
- Updated dependencies [5355391]
  - fumadocs-core@13.0.4
  - fumadocs-ui@13.0.4

## 4.2.2

### Patch Changes

- Updated dependencies [978342f]
  - fumadocs-core@13.0.3
  - fumadocs-ui@13.0.3

## 4.2.1

### Patch Changes

- Updated dependencies [4819820]
  - fumadocs-core@13.0.2
  - fumadocs-ui@13.0.2

## 4.2.0

### Minor Changes

- dfcc61f: Implement multipart form data

### Patch Changes

- f2b540a: Fix `fetch` problems on API Playground

## 4.1.1

### Patch Changes

- fumadocs-core@13.0.1
- fumadocs-ui@13.0.1

## 4.1.0

### Minor Changes

- abf84bb: Support to customise/disable TypeScript Response generation
- 40728a1: Support custom fields (auth, query, header, path and body)

### Patch Changes

- Updated dependencies [89190ae]
- Updated dependencies [b02eebf]
- Updated dependencies [09c3103]
- Updated dependencies [f868018]
- Updated dependencies [8aebeab]
- Updated dependencies [c684c00]
- Updated dependencies [8aebeab]
- Updated dependencies [0377bb4]
- Updated dependencies [e8e6a17]
- Updated dependencies [c8964d3]
- Updated dependencies [c901e6b]
- Updated dependencies [daa7d3c]
- Updated dependencies [c714eaa]
- Updated dependencies [89190ae]
- Updated dependencies [b02eebf]
- Updated dependencies [b02eebf]
- Updated dependencies [4373231]
  - fumadocs-ui@13.0.0
  - fumadocs-core@13.0.0

## 4.0.6

### Patch Changes

- Updated dependencies [a332bee]
  - fumadocs-ui@12.5.6
  - fumadocs-core@12.5.6

## 4.0.5

### Patch Changes

- Updated dependencies [3519e6c]
  - fumadocs-ui@12.5.5
  - fumadocs-core@12.5.5

## 4.0.4

### Patch Changes

- Updated dependencies [fccdfdb]
- Updated dependencies [2ffd5ea]
  - fumadocs-core@12.5.4
  - fumadocs-ui@12.5.4

## 4.0.3

### Patch Changes

- Updated dependencies [5d963f4]
  - fumadocs-ui@12.5.3

## 4.0.2

### Patch Changes

- 0c8eddf: Fix overlap of navbar and api info
- Updated dependencies [a5c34f0]
  - fumadocs-ui@12.5.2

## 4.0.1

### Patch Changes

- Updated dependencies [c5d20d0]
- Updated dependencies [3d8f6cf]
  - fumadocs-ui@12.5.1

## 4.0.0

### Major Changes

- ad143e1: Move UI implementation from `fumadocs-ui` to `fumadocs-openapi`.

  **why:** Allow a better organization of packages.

  **migrate:**

  This package is now Tailwind CSS only, you need to use it in conjunction with the official Tailwind CSS plugin.

  Add the package to `content` under your Tailwind CSS configuration.

  ```js
  import { createPreset, presets } from 'fumadocs-ui/tailwind-plugin';

  /** @type {import('tailwindcss').Config} */
  export default {
    content: [
      './node_modules/fumadocs-ui/dist/**/*.js',
      './node_modules/fumadocs-openapi/dist/**/*.js',
    ],
    presets: [createPreset()],
  };
  ```

  Re-generate MDX files if needed.

### Minor Changes

- ad143e1: Implement OpenAPI playground
- ad143e1: Support passing base url to Root component

### Patch Changes

- ad143e1: Combine `allOf` into one object schema
- Updated dependencies [b9fa99d]
- Updated dependencies [a4bcaa7]
- Updated dependencies [d1c7405]
  - fumadocs-ui@12.5.0

## 3.3.0

### Minor Changes

- b1b154e: Display object types mentioned in schema
- 81fde3f: Support complex types & self-referencing types

## 3.2.0

### Minor Changes

- 0e420cb: Support generating custom code examples

## 3.1.3

### Patch Changes

- 464e44c: Improve example request URL generation

## 3.1.2

### Patch Changes

- 78acd55: Use full mode on docs pages by default on OpenAPI generated pages

## 3.1.1

### Patch Changes

- 318eaf9: Support generating files per operation

## 3.1.0

### Minor Changes

- 3bdc786: Support JavaScript request example
- 3bdc786: Support generating Authorization (`security`) section

## 3.0.0

### Major Changes

- 284a571: **Renew Generate API.**

  **why:** Improve flexibility.

  **migrate:**

  Removed the `render` option from `generate`, `generateFiles` and `generateTags`, use `frontmatter` to customise frontmatter, `imports` to customise imports.

- 284a571: **Support Custom MDX Renderer.**

  **why:** Allow people to customise how the MDX file is generated.

  **migrate:**

  Changed the output of MDX files, the new structure requires components:

  - Root
  - API
  - APIInfo
  - APIExample
  - Responses
  - Response
  - ExampleResponse
  - TypeScriptResponse
  - Property
  - ObjectCollapsible
  - ResponseTypes

  ````mdx
  <API>

  <APIInfo method={"GET"} route={"/pets/{petId}"}>

  ## Info for a specific pet

  ### Path Parameters

  <Property name={"petId"} type={"string"} required={true} deprecated={false}>

  The id of the pet to retrieve

  </Property>

  | Status code | Description                          |
  | ----------- | ------------------------------------ |
  | `200`       | Expected response to a valid request |
  | `default`   | unexpected error                     |

  </APIInfo>

  <APIExample>

  ```bash title="curl"
  curl -X GET "http://petstore.swagger.io/pets/string"
  ```

  <Responses items={["200","default"]}>

  <Response value={"200"}>

  <ResponseTypes>

  <ExampleResponse>

  ```json
  {
    "id": 0,
    "name": "string",
    "tag": "string"
  }
  ```

  </ExampleResponse>

  <TypeScriptResponse>

  ```ts
  export interface Response {
    id: number;
    name: string;
    tag?: string;
  }
  ```

  </TypeScriptResponse>

  </ResponseTypes>

  </Responses>

  </APIExample>

  </API>
  ````

## 2.0.5

### Patch Changes

- bcc05d6: Fix docs typo

## 2.0.4

### Patch Changes

- 310e0ab: Fix multi-line frontmatter

## 2.0.3

### Patch Changes

- 1d3917f: Fix nullable types cannot be detected

## 2.0.2

### Patch Changes

- 9681cc3: Add put method key

## 2.0.1

### Patch Changes

- 8ef2b68: Bump deps

## 2.0.0

### Major Changes

- eacd7b0b: **Remove support for bin usages**

  why: It is more flexible and faster to write a script directly.

  migrate: Create a script named `scripts/generate-docs.mjs`:

  ```js
  import { generateFiles } from 'fumadocs-openapi';

  void generateFiles({
    input: ['./petstore.yaml'],
    output: './content/docs',
  });
  ```

  Execute it with `node ./scripts/generate-docs.mjs`.

## 1.1.0

### Minor Changes

- 8665888: Added patterns support to config Inputs.

## 1.0.1

### Patch Changes

- 6c5a39a: Rename Git repository to `fumadocs`

## 1.0.0

### Major Changes

- 2b11c20: **Rename to Fumadocs**

  `next-docs-zeta` -> `fumadocs-core`

  `next-docs-ui` -> `fumadocs-ui`

  `next-docs-mdx` -> `fumadocs-mdx`

  `@fuma-docs/openapi` -> `fumadocs-openapi`

  `create-next-docs-app` -> `create-fumadocs-app`

## 0.1.0

### Minor Changes

- 45a52ae: **Support generating docs for OpenAPI schema**

  In `openapi.config.js`:

  ```js
  /**
   * @type {import("@fuma-docs/openapi").Config}
   */
  module.exports = {
    input: ['./petstore.yaml'],
    output: './content/docs',
    per: 'tag',
    render: (title, description) => {
      return {
        frontmatter: [
          '---',
          `title: ${title}`,
          `description: ${description}`,
          'toc: false',
          '---',
        ].join('\n'),
      };
    },
  };
  ```

  Run `fuma-docs-openapi` to generate.
