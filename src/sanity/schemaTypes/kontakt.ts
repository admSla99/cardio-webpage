import { defineField, defineType } from "sanity";

export const kontakt = defineType({
  name: "kontakt",
  title: "Kontakt",
  type: "document",
  fields: [
    defineField({
      name: "mobil",
      title: "Mobil",
      type: "string",
      description: "Napríklad 0915 148 518. Odkaz na vytáčanie sa doplní automaticky.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "telefon",
      title: "Pevná linka",
      type: "string",
      description: "Napríklad 051 773 9742.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "E-mail",
      type: "string",
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: "miesto",
      title: "Miesto prevádzkovania",
      type: "string",
      description: "Napríklad Poliklinika Sabinov. Používa sa aj ako vyhľadávací dopyt pre mapu.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "ulica",
      title: "Ulica a číslo",
      type: "string",
      description: "Napríklad SNP 501/1.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mesto",
      title: "PSČ a mesto",
      type: "string",
      description: "Napríklad 083 01 Sabinov.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "poistovne",
      title: "Zmluvné poisťovne",
      type: "string",
      description: "Napríklad VšZP, Dôvera, Union.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "poskytovatel",
      title: "Poskytovateľ",
      type: "string",
      description: "Obchodné meno, napríklad MEDEPH s.r.o.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "ico",
      title: "IČO",
      type: "string",
      description: "Zadajte aj s predponou, napríklad IČO: 52068811.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "objednanie",
      title: "Spôsob objednania",
      type: "string",
      description: "Napríklad Telefonicky aj mailom.",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { subtitle: "miesto" },
    prepare: ({ subtitle }: { subtitle?: string }) => ({ title: "Kontakt", subtitle }),
  },
});
