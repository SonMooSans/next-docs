import { createContext, type RefObject, useContext } from 'react';
import {
  type ReferenceSchema,
  type RequestSchema,
} from '@/render/operation/playground';

interface SchemaContextType {
  references: Record<string, RequestSchema>;
  dynamic: RefObject<Map<string, DynamicField>>;
}

export type DynamicField =
  | {
      type: 'object';
      properties: string[];
    }
  | {
      type: 'field';
      schema: RequestSchema | ReferenceSchema;
    };

export const SchemaContext = createContext<SchemaContextType | undefined>(
  undefined,
);

export function useSchemaContext(): SchemaContextType {
  const ctx = useContext(SchemaContext);
  if (!ctx) throw new Error('Missing provider');
  return ctx;
}
