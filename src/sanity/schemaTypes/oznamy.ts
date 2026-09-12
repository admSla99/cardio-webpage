import { defineField, defineType } from "sanity";

export const oznamy = defineType({
  name: "oznamy",
  title: "Oznamy",
  type: "document",
  fields: [
    defineField({
      name: "polozky",
      title: "Zoznam oznamov",
      description:
        "Každý oznam je samostatná položka. Ak zoznam necháte prázdny, na stránke sa zobrazí text „Aktuálne žiadne oznamy.“ a vyskakovacie okno sa neotvorí.",
      type: "array",
      of: [{ type: "text", rows: 3 }],
    }),
    defineField({
      name: "zobrazitPopup",
      title: "Zobraziť oznam vo vyskakovacom okne",
      description:
        "Zapnuté: oznam sa návštevníkovi zobrazí hneď po otvorení stránky. Vypnuté: oznam je iba v sekcii Ordinačné hodiny.",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: { polozky: "polozky" },
    prepare({ polozky }: { polozky?: string[] }) {
      const count = polozky?.filter((item) => item?.trim().length > 0).length ?? 0;

      return {
        title: "Oznamy",
        subtitle: count === 0 ? "Žiadne aktívne oznamy" : `Aktívnych oznamov: ${count}`,
      };
    },
  },
});
