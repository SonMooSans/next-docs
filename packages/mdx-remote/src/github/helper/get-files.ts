import path from 'node:path';
import fs from 'node:fs/promises';
import { type VirtualFile } from 'fumadocs-core/source';
import fg from 'fast-glob';
import matter from 'gray-matter';
import micromatch from 'micromatch';
import { type FileData } from '@/github/types';
import { fetchTree } from '@/github/api/fetch-tree';
import { fetchBlob } from '@/github/api/fetch-blob';
import { createFileMap } from '@/cache/file-map';

export interface GetFilesOptions {
  /**
   * relative path to the content directory
   *
   * @defaultValue './content'
   */
  directory?: string;

  /**
   * Which files to include
   *
   * When not specified, all files will be scanned
   */
  include?: string | string[];

  /**
   * Keep the cached content on output files
   *
   * @defaultValue false
   */
  keepContent?: boolean;
}

const fileMap = createFileMap();

export type ResolvedFile =
  | (Omit<VirtualFile, 'type'> & {
      type: 'meta';
    })
  | (Omit<VirtualFile, 'type' | 'data'> & {
      type: 'page';
      data: Record<string, unknown> & {
        data: FileData;
      };
    });

export async function getLocalFiles({
  directory = './content',
  include = '**/*',
  keepContent = false,
}: GetFilesOptions): Promise<ResolvedFile[]> {
  const files = await fg(include, {
    cwd: path.resolve(directory),
    stats: true,
  });
  const virtualFiles: ResolvedFile[] = [];

  await Promise.all(
    files.map(async (file) => {
      if (!file.stats) return;
      const hash = file.stats.mtime.getTime();
      const normalized = path.resolve(directory, file.path);
      let content: string | undefined;

      const cached = fileMap.read(normalized);
      if (cached && cached.hash === hash) {
        content = cached.content;
      } else {
        content = await fs.readFile(normalized).then((res) => res.toString());

        if (!content) return;
        fileMap.write(normalized, { hash, content });
      }

      if (path.extname(normalized) === '.json') {
        virtualFiles.push({
          path: file.path,
          type: 'meta',
          data: JSON.parse(content),
        });
      } else {
        const { data } = matter(content);
        virtualFiles.push({
          path: file.path,
          type: 'page',
          data: {
            ...data,
            data: {
              content: keepContent ? content : undefined,
              resolver: {
                type: 'local',
                file: normalized,
              },
            },
          },
        });
      }
    }),
  );

  return virtualFiles;
}

export interface GetGitHubFilesOptions extends GetFilesOptions {
  /**
   * repository owner
   */
  owner: string;

  /**
   * repository name
   */
  repo: string;

  /**
   * GitHub access token
   */
  accessToken: string;

  /**
   * Branch name or tag name
   *
   * @defaultValue 'main'
   */
  treeSha?: string;
}

export async function getGitHubFiles({
  owner,
  repo,
  accessToken,
  treeSha = 'main',
  include = '**/*',
  directory = './content',
  keepContent = false,
}: GetGitHubFilesOptions): Promise<ResolvedFile[]> {
  if (directory.startsWith('../'))
    throw new Error(`Directory path: ${directory} cannot start with '../'`);

  const filter = directory.startsWith('./')
    ? directory.slice('./'.length)
    : directory;

  const virtualFiles: ResolvedFile[] = [];
  const tree = await fetchTree({
    owner,
    repo,
    accessToken,
    treeSha,
    recursive: true,
    init: {
      cache: 'force-cache',
    },
  });

  await Promise.all(
    tree.tree.map(async (file) => {
      if (file.type === 'tree' || !file.path.startsWith(filter)) return;
      if (!micromatch.isMatch(file.path, include)) return;

      const blob = await fetchBlob({
        url: file.url,
        accessToken,
        init: {
          cache: 'force-cache',
        },
      });

      const content = blob.content;

      if (path.extname(file.path) === '.json') {
        virtualFiles.push({
          path: file.path,
          type: 'meta',
          data: JSON.parse(content),
        });
      } else {
        const { data } = matter(content);

        virtualFiles.push({
          path: file.path,
          type: 'page',
          data: {
            ...data,
            data: {
              content: keepContent ? content : undefined,
              resolver: {
                type: 'github',
                blobUrl: file.url,
                accessToken,
              },
            },
          },
        });
      }
    }),
  );

  return virtualFiles;
}
