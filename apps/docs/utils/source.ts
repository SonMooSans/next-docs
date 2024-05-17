import { createMDXSource, defaultSchemas } from 'fumadocs-mdx';
import { z } from 'zod';
import type {
  InferMetaType,
  InferPageType,
} from '@maximai/fumadocs-core/source';
import { loader } from '@maximai/fumadocs-core/source';
import { icons } from 'lucide-react';
import { map } from '@/.map';
import { create } from '@/components/ui/icon';

export const utils = loader({
  baseUrl: '/docs',
  rootDir: 'docs',
  icon(icon) {
    if (icon in icons)
      return create({ icon: icons[icon as keyof typeof icons] });
  },
  source: createMDXSource(map, {
    schema: {
      frontmatter: defaultSchemas.frontmatter.extend({
        preview: z.string().optional(),
        toc: z.boolean().default(true),
        index: z.boolean().default(false),
      }),
    },
  }),
});

export const blog = loader({
  baseUrl: '/blog',
  rootDir: 'blog',
  source: createMDXSource(map, {
    schema: {
      frontmatter: defaultSchemas.frontmatter.extend({
        author: z.string(),
        date: z.string().date().optional(),
      }),
    },
  }),
});

export type Page = InferPageType<typeof utils>;
export type Meta = InferMetaType<typeof utils>;
