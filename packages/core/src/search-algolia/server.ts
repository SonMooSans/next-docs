import type { SearchClient, SearchIndex } from 'algoliasearch';
import type { StructuredData } from '@/mdx-plugins/remark-structure';

interface DocumentRecord {
  /**
   * The ID of document, must be unique
   */
  _id: string;

  title: string;
  /**
   * URL to the page
   */
  url: string;
  structured: StructuredData;

  /**
   * Tag to filter results
   */
  tag?: string;

  /**
   * Data to be added to each section index
   */
  extra_data?: object;
}

export interface SyncOptions {
  /**
   * Index Name for documents
   */
  document?: string;

  /**
   * Search indexes
   */
  documents: DocumentRecord[];
}

/**
 * Update index settings and replace all objects
 *
 * @param client - Algolia Admin Client
 * @param options - Index Options
 */
export async function sync(
  client: SearchClient,
  options: SyncOptions,
): Promise<void> {
  const { document = 'document', documents } = options;
  const index = client.initIndex(document);
  await setIndexSettings(index);
  await updateDocuments(index, documents);
}

export async function setIndexSettings(index: SearchIndex): Promise<void> {
  await index.setSettings({
    attributeForDistinct: 'page_id',
    attributesToRetrieve: ['title', 'section', 'content', 'url', 'section_id'],
    searchableAttributes: ['title', 'section', 'content'],
    attributesToSnippet: [],
    attributesForFaceting: ['tag'],
  });
}

interface Section {
  /**
   * Heading content
   */
  section?: string;

  /**
   * The anchor id
   */
  section_id?: string;
  content: string;
}

function getSections(page: DocumentRecord): Section[] {
  const scannedHeadings = new Set<string>();

  return page.structured.contents.flatMap((p) => {
    const heading = p.heading
      ? page.structured.headings.find((h) => p.heading === h.id)
      : null;

    const section = {
      section: heading?.content,
      section_id: heading?.id,
      content: p.content,
    };

    if (heading && !scannedHeadings.has(heading.id)) {
      scannedHeadings.add(heading.id);

      return [
        {
          section: heading.content,
          section_id: heading.id,
          content: heading.content,
        },
        section,
      ];
    }

    return section;
  });
}

export async function updateDocuments(
  index: SearchIndex,
  documents: DocumentRecord[],
): Promise<void> {
  const objects = documents.flatMap((page) => {
    return getSections(page).map(
      (section, idx) =>
        ({
          objectID: `${page._id}-${idx.toString()}`,
          title: page.title,
          url: page.url,
          page_id: page._id,
          tag: page.tag,
          ...section,
          ...page.extra_data,
        }) satisfies BaseIndex,
    );
  });

  await index.replaceAllObjects(objects);
}

export interface BaseIndex extends Section {
  objectID: string;
  title: string;
  url: string;
  tag?: string;

  /**
   * The id of page, used for distinct
   */
  page_id: string;
}
