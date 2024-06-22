import path from 'node:path';
import { createGetUrl } from 'fumadocs-core/source';
import { revalidatePath } from 'next/cache.js';
import type { CreateCacheRemoteOptions, GithubCache } from '../types';
import type { getTree } from '../get-tree';
import type { GithubCacheStore } from '../store';
import { findTreeRecursive } from './git-tree';

export const createCreateGithubWebhookAPI = ({
  cache,
  ref,
  directory,
  githubOptions,
  baseUrl,
  githubCacheStore,
  revalidationTag,
}: {
  cache: GithubCache;
  ref: NonNullable<CreateCacheRemoteOptions['branch']>;
  directory: string;
  githubOptions: Omit<Parameters<typeof getTree>[0], 'treeSha'>;
  baseUrl: string;
  githubCacheStore: GithubCacheStore;
  revalidationTag: string;
}) =>
  function createGithubWebhookAPI({
    secret,
  }: {
    secret?: string;
  } = {}) {
    const encoder = new TextEncoder();
    const getUrl = createGetUrl(baseUrl);

    const POST = async (request: Request): Promise<Response> => {
      const body = await request.text();

      if (secret) {
        const signature = request.headers.get('x-hub-signature-256');

        if (!signature || !(await verifySignature(signature, body))) {
          return new Response('Unauthorized', { status: 401 });
        }
      }

      const githubEvent = request.headers.get('x-github-event');

      if (githubEvent === 'push') {
        const data = JSON.parse(body) as {
          ref: string;
          before: string;
          after: string;
        };

        if (data.ref && data.ref === `refs/heads/${ref}`) {
          const newTree = await findTreeRecursive(directory, {
            ...githubOptions,
            treeSha: data.after,
            init: {
              ...githubOptions.init,
              // git hashes are cool so they are the same if the content is the same
              cache: 'force-cache',
            },
          });

          if (newTree) {
            // tree won't update if it's the same,
            // so we make sure to get the latest cache
            let latestCache = githubCacheStore.get(revalidationTag);
            if (!latestCache) latestCache = cache;

            const file = await latestCache.getData();
            const changes = latestCache.diff.compareToGitTree(file, newTree);

            if (changes.length > 0) {
              latestCache.diff.applyToCache(file, changes);

              latestCache.updateTree(newTree);
              githubCacheStore.set(latestCache, revalidationTag);

              // indivdual page changes
              for (const doc of changes.filter(
                (c) =>
                  c.type === 'blob' &&
                  /\.mdx?$/.test(c.path) &&
                  (c.action === 'modify' || c.action === 'remove'),
              )) {
                const url = getUrl(
                  doc.path.replace(path.extname(doc.path), '').split('/'),
                );
                revalidatePath(url, 'page');
              }
              // changes to a group of pages
              for (const meta of changes.filter(
                (c) =>
                  c.type === 'blob' &&
                  c.path.endsWith('.json') &&
                  (c.action === 'modify' || c.action === 'remove'),
              )) {
                const url = getUrl(
                  meta.path
                    .replace(path.basename(meta.path), '')
                    .split('/')
                    .filter(Boolean),
                );
                revalidatePath(url, 'layout');
              }
              // changes to a group of pages
              for (const tree of changes.filter(
                (c) =>
                  c.type === 'tree' &&
                  (c.action === 'modify' || c.action === 'remove'),
              )) {
                const url = getUrl(tree.path.split('/'));
                revalidatePath(url, 'layout');
              }
              // change to whole layout/pageTree
              if (changes.some((c) => c.action === 'add')) {
                const url = getUrl([]);
                revalidatePath(url, 'layout');
              }
            }
          }
        }
      }

      return new Response('Accepted', { status: 202 });
    };

    return {
      POST,
    };

    // from github example
    async function verifySignature(
      header: string,
      payload: string,
    ): Promise<boolean> {
      const parts = header.split('=');
      const sigHex = parts[1];

      const algorithm = { name: 'HMAC', hash: { name: 'SHA-256' } };

      const keyBytes = encoder.encode(secret);
      const extractable = false;
      const key = await crypto.subtle.importKey(
        'raw',
        keyBytes,
        algorithm,
        extractable,
        ['sign', 'verify'],
      );

      const sigBytes = hexToBytes(sigHex);
      const dataBytes = encoder.encode(payload);
      return crypto.subtle.verify(algorithm.name, key, sigBytes, dataBytes);
    }
    function hexToBytes(hex: string): Uint8Array {
      const len = hex.length / 2;
      const bytes = new Uint8Array(len);

      let index = 0;
      for (let i = 0; i < hex.length; i += 2) {
        const c = hex.slice(i, i + 2);
        const b = Number.parseInt(c, 16);
        bytes[index] = b;
        index += 1;
      }

      return bytes;
    }
  };
