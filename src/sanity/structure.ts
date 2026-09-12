import type { StructureResolver } from "sanity/structure";

const SINGLETONS = [
  { id: "oznamy", title: "Oznamy", icon: "📢" },
  { id: "ordinacneHodiny", title: "Ordinačné hodiny", icon: "🕒" },
  { id: "kontakt", title: "Kontakt", icon: "📍" },
] as const;

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Obsah stránky")
    .items(
      SINGLETONS.map((singleton) =>
        S.listItem()
          .title(`${singleton.icon}  ${singleton.title}`)
          .id(singleton.id)
          .child(S.document().schemaType(singleton.id).documentId(singleton.id).title(singleton.title)),
      ),
    );
