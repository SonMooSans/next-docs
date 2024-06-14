import path from 'node:path';
import { createProcessor, type ProcessorOptions } from '@mdx-js/mdx';
import { type Processor } from '@mdx-js/mdx/internal-create-format-aware-processors';
import grayMatter from 'gray-matter';
import { type NormalModule, type LoaderContext } from 'webpack';
import { getGitTimestamp } from './utils/git-timestamp';
import { getMDXLoaderOptions, type ResolvePluginsInput } from './config';

type ProcessorOptionsInput = Omit<
  ProcessorOptions,
  'rehypePlugins' | 'remarkPlugins'
> & {
  rehypePlugins?: ResolvePluginsInput;
  remarkPlugins?: ResolvePluginsInput;
};

export interface MDXLoaderOptionsInput extends ProcessorOptionsInput {
  /**
   * Fetch last modified time with specified version control
   * @defaultValue 'none'
   */
  lastModifiedTime?: 'git' | 'none';
}

export interface MDXLoaderOptions extends ProcessorOptions {
  /**
   * Fetch last modified time with specified version control
   * @defaultValue 'none'
   */
  lastModifiedTime?: 'git' | 'none';
}

export interface InternalBuildInfo {
  __fumadocs?: {
    path: string;
    /**
     * `vfile.data` parsed from file
     */
    data: unknown;
  };
}

const cache = new Map<string, Processor>();

/**
 * Load MDX/markdown files
 *
 * it supports frontmatter by parsing and injecting the data in `vfile.data.frontmatter`
 */
export default async function loader(
  this: LoaderContext<MDXLoaderOptionsInput>,
  source: string,
  callback: LoaderContext<MDXLoaderOptions>['callback'],
): Promise<void> {
  this.cacheable(true);
  const context = this.context;
  const filePath = this.resourcePath;
  const { lastModifiedTime, ...userOptions } = this.getOptions();

  const options = await getMDXLoaderOptions(userOptions);
  const { content, data: frontmatter } = grayMatter(source);
  const detectedFormat = filePath.endsWith('.mdx') ? 'mdx' : 'md';
  const format = options.format ?? detectedFormat;
  let timestamp: number | undefined;
  let processor = cache.get(format);

  if (processor === undefined) {
    processor = createProcessor({
      ...options,
      development: this.mode === 'development',
      format,
    });

    cache.set(format, processor);
  }

  if (lastModifiedTime === 'git')
    timestamp = (await getGitTimestamp(filePath))?.getTime();

  processor
    .process({
      value: content,
      path: filePath,
      data: {
        lastModified: timestamp,
        frontmatter,
      },
    })
    .then(
      (file) => {
        const module =
          this._module ?? (this._module = { buildInfo: {} } as NormalModule);
        const buildInfo = module.buildInfo ?? (module.buildInfo = {});

        buildInfo.__fumadocs = {
          path: filePath,
          data: file.data,
        };

        callback(undefined, String(file.value), file.map ?? undefined);
      },
      (error: Error) => {
        const fpath = path.relative(context, filePath);
        error.message = `${fpath}:${error.name}: ${error.message}`;
        callback(error);
      },
    );
}
