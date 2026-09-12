import type { SchemaTypeDefinition } from "sanity";
import { kontakt } from "@/sanity/schemaTypes/kontakt";
import { ordinacneHodiny } from "@/sanity/schemaTypes/ordinacneHodiny";
import { oznamy } from "@/sanity/schemaTypes/oznamy";

/** Tri samostatné dokumenty, ktoré zákazník upravuje v Studiu. */
export const SINGLETON_TYPES = ["oznamy", "ordinacneHodiny", "kontakt"] as const;

export const schemaTypes: SchemaTypeDefinition[] = [oznamy, ordinacneHodiny, kontakt];
