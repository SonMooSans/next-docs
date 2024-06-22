import type { GithubCacheFile } from '../types';
import type { GetTreeResponse } from '../get-tree';
import type { GetFileContent } from '../utils';
import { VirtualFileSystem } from '@/github/create/file-system';

export interface CompareTreeDiff {
  action: 'add' | 'remove' | 'modify';
  type: 'tree' | 'blob';
  sha: string;
  path: string;
}

export interface DiffUtils {
  /**
   * Applies a diff to the cache and returns the updated cache.
   */
  applyToCache: (
    cacheFile: GithubCacheFile,
    diffs: CompareTreeDiff[],
  ) => GithubCacheFile;
  /**
   * Compares the cache to a Git tree and returns the differences. (predecessor to `applyDiff`)
   */
  compareToGitTree: (
    cacheFile: GithubCacheFile,
    tree: GetTreeResponse,
  ) => CompareTreeDiff[];
}

function compareToGitTree(
  cacheFile: GithubCacheFile,
  tree: GetTreeResponse,
): CompareTreeDiff[] {
  const diff: CompareTreeDiff[] = [];
  if (tree.sha === cacheFile.sha) return diff;

  const coveredPaths = new Set<string>();
  const compareFiles = createCompareFiles((file) => {
    coveredPaths.add(file.path);

    const matched = tree.tree.find((t) => t.path === file.path);
    let action: CompareTreeDiff['action'] | undefined;

    if (!matched) action = 'remove';
    else if (matched.sha !== file.sha) action = 'modify';
    else return;

    return {
      type: 'blob',
      action,
      path: file.path,
      sha: matched ? matched.sha : file.sha,
    };
  });

  for (const subDir of cacheFile.subDirectories) {
    coveredPaths.add(subDir.path);
    diff.push(...compareFiles(subDir.files));
  }

  diff.push(...compareFiles(cacheFile.files));

  const newItems = tree.tree.filter((t) => !coveredPaths.has(t.path));

  for (const item of newItems) {
    diff.push({
      type: item.type,
      action: 'add',
      path: item.path,
      sha: item.sha,
    });
  }

  return diff;
}

const createCompareFiles = (
  compareFile: (
    file: GithubCacheFile['subDirectories'][0]['files'][0],
  ) => CompareTreeDiff | undefined,
) =>
  function compareFiles(files: GithubCacheFile['subDirectories'][0]['files']) {
    let diff: CompareTreeDiff[] = [];
    for (const file of files) {
      diff = diff.concat(compareFile(file) ?? []);
    }

    return diff;
  };

function applyDiffToCache(
  cacheFile: GithubCacheFile,
  diff: CompareTreeDiff[],
  fs: VirtualFileSystem,
  getFileContent: GetFileContent,
): GithubCacheFile {
  for (const change of diff) {
    switch (change.action) {
      case 'add':
        if (change.type === 'blob') {
          const content = getFileContent(change);

          fs.writeFile(change.path, content);

          cacheFile.files.push({
            path: change.path,
            sha: change.sha,
            content,
          });
        } else {
          cacheFile.subDirectories.push({
            path: change.path,
            sha: change.sha,
            files: [],
            subDirectories: [],
          });
        }
        break;
      case 'modify':
        if (change.type === 'blob') {
          const fileIndex = cacheFile.files.findIndex(
            (f) => f.path === change.path,
          );
          if (fileIndex !== -1) {
            cacheFile.files[fileIndex].sha = change.sha;

            const content = getFileContent(change);

            fs.writeFile(change.path, content);
            cacheFile.files[fileIndex].content = content;
          }
        }
        break;
      case 'remove':
        if (change.type === 'blob') {
          cacheFile.files = cacheFile.files.filter(
            (f) => f.path !== change.path,
          );
        } else {
          cacheFile.subDirectories = cacheFile.subDirectories.filter(
            (sd) => sd.path !== change.path,
          );
        }
        break;
    }
  }

  return cacheFile;
}

export function createDiff(
  fs: VirtualFileSystem,
  getFileContent: GetFileContent,
): DiffUtils {
  return {
    applyToCache(file, diffs) {
      return applyDiffToCache(file, diffs, fs, getFileContent);
    },
    compareToGitTree(file, tree) {
      return compareToGitTree(file, tree);
    },
  };
}
