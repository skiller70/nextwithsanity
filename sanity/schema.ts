import { type SchemaTypeDefinition } from "sanity";
import items from "./items";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    items
  ],
};
