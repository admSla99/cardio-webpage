import { csCZLocale } from "@sanity/locale-cs-cz";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { SINGLETON_TYPES, schemaTypes } from "@/sanity/schemaTypes";
import { structure } from "@/sanity/structure";

const singletonTypes = new Set<string>(SINGLETON_TYPES);

export default defineConfig({
  name: "medeph",
  title: "MEDEPH s.r.o.",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion }), csCZLocale()],
  schema: {
    types: schemaTypes,
    // Zákazník nemá vytvárať nové dokumenty, upravuje len tri existujúce.
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    // Skryje akcie, ktoré by singleton dokument mohli zmazať alebo duplikovať.
    actions: (actions, { schemaType }) =>
      singletonTypes.has(schemaType)
        ? actions.filter(({ action }) => action !== "delete" && action !== "duplicate" && action !== "unpublish")
        : actions,
  },
});
