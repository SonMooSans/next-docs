import {
  rehypeCode,
  type RehypeCodeOptions,
  remarkGfm,
  remarkHeading,
  type RemarkHeadingOptions,
} from 'fumadocs-core/mdx-plugins';
import type { CompileOptions } from '@mdx-js/mdx';
import rehypeImgSize, {
  type Options as RehypeImgSizeOptions,
} from 'rehype-img-size';
import type { MDXComponents } from 'mdx/types';
import { compileMDX, type CompileMDXResult } from '@/serialize';
import { pluginOption, type ResolvePlugins } from './utils';

export type CompileMDXOptions = Omit<
  CompileOptions,
  'remarkPlugins' | 'rehypePlugins'
> & {
  remarkPlugins?: ResolvePlugins;
  rehypePlugins?: ResolvePlugins;

  remarkHeadingOptions?: RemarkHeadingOptions;
  rehypeCodeOptions?: RehypeCodeOptions | false;

  /**
   * The directory to find image sizes
   *
   * @defaultValue './public'
   */
  imageDir?: string;
};

export interface Options {
  source: string;
  mdxOptions?: CompileMDXOptions;
  components?: MDXComponents;
  scope?: object;
}

export type { CompileMDXResult };

export async function compile<Frontmatter extends Record<string, unknown>>(
  options: Options,
): Promise<CompileMDXResult<Frontmatter>> {
  const { mdxOptions = {} } = options;

  return compileMDX<Frontmatter>(
    options.source,
    {
      ...mdxOptions,
      remarkPlugins: pluginOption(
        (v) => [
          remarkGfm,
          [remarkHeading, mdxOptions.remarkHeadingOptions],
          ...v,
        ],
        mdxOptions.remarkPlugins,
      ),
      rehypePlugins: pluginOption(
        (v) => [
          mdxOptions.rehypeCodeOptions !== false && [
            rehypeCode,
            mdxOptions.rehypeCodeOptions,
          ],
          [
            rehypeImgSize,
            {
              dir: mdxOptions.imageDir ?? './public',
            } satisfies RehypeImgSizeOptions,
            ...v,
          ],
        ],
        mdxOptions.rehypePlugins,
      ),
    },
    options.scope,
    options.components,
  );
}
