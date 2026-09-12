import { defineArrayMember, defineField, defineType } from "sanity";

export const DAY_NAMES = [
  "Pondelok",
  "Utorok",
  "Streda",
  "Štvrtok",
  "Piatok",
  "Sobota",
  "Nedeľa",
] as const;

const HOURS_PATTERN = /^(neordinuje|([01]?\d|2[0-3]):[0-5]\d-([01]?\d|2[0-3]):[0-5]\d)$/;

export const ordinacneHodiny = defineType({
  name: "ordinacneHodiny",
  title: "Ordinačné hodiny",
  type: "document",
  fields: [
    defineField({
      name: "dni",
      title: "Rozvrh podľa dní",
      description:
        "Uveďte všetkých sedem dní. Do poľa Hodiny napíšte čas v tvare 7:00-14:00, alebo slovo neordinuje.",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "denRozvrhu",
          fields: [
            defineField({
              name: "den",
              title: "Deň",
              type: "string",
              options: { list: DAY_NAMES.map((day) => ({ title: day, value: day })) },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "hodiny",
              title: "Hodiny",
              type: "string",
              description: "Napríklad 7:00-14:00. Ak sa v tento deň neordinuje, napíšte neordinuje.",
              validation: (rule) =>
                rule
                  .required()
                  .regex(HOURS_PATTERN, {
                    name: "tvar 7:00-14:00 alebo neordinuje",
                    invert: false,
                  })
                  .error("Použite tvar 7:00-14:00 alebo napíšte neordinuje."),
            }),
          ],
          preview: {
            select: { title: "den", subtitle: "hodiny" },
          },
        }),
      ],
      validation: (rule) => rule.required().min(1).max(7),
    }),
  ],
  preview: {
    prepare: () => ({ title: "Ordinačné hodiny" }),
  },
});
