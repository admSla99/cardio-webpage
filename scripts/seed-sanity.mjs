/**
 * Nahrá do Sanity počiatočný obsah z `src/lib/content.ts`, aby zákazník
 * nemusel nič prepisovať ručne.
 *
 *   npm run sanity:seed            vytvorí dokumenty, existujúce nechá tak
 *   npm run sanity:seed -- --force prepíše aj existujúce dokumenty
 */
import { createClient } from "@sanity/client";
import { activeOpeningNotices, contact, openingHours } from "../src/lib/content.ts";

for (const envFile of [".env.local", ".env"]) {
  try {
    process.loadEnvFile(envFile);
  } catch {
    // Súbor nemusí existovať, premenné môžu prísť aj z prostredia.
  }
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-09-01";
const token = process.env.SANITY_API_WRITE_TOKEN;
const force = process.argv.includes("--force");

if (!projectId) {
  throw new Error("Chýba NEXT_PUBLIC_SANITY_PROJECT_ID. Doplňte ho do .env.local.");
}

if (!token) {
  throw new Error(
    "Chýba SANITY_API_WRITE_TOKEN. Vytvorte token s právom Editor na https://www.sanity.io/manage a doplňte ho do .env.local.",
  );
}

const [street = "", city = ""] = contact.addressLine.split(",").map((part) => part.trim());
const ordering = contact.points.find((point) => point.label === "Objednanie")?.value ?? "Telefonicky aj mailom";

const documents = [
  {
    _id: "oznamy",
    _type: "oznamy",
    polozky: [...activeOpeningNotices],
    zobrazitPopup: true,
  },
  {
    _id: "ordinacneHodiny",
    _type: "ordinacneHodiny",
    dni: openingHours.map((row) => ({
      _key: row.day.toLowerCase().normalize("NFD").replace(/[^a-z]/g, ""),
      _type: "denRozvrhu",
      den: row.day,
      hodiny: row.hours,
    })),
  },
  {
    _id: "kontakt",
    _type: "kontakt",
    mobil: contact.phone,
    telefon: contact.landline,
    email: contact.email,
    miesto: contact.location,
    ulica: street,
    mesto: city,
    poistovne: contact.insurance,
    poskytovatel: contact.provider,
    ico: contact.companyId,
    objednanie: ordering,
  },
];

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

const transaction = client.transaction();

for (const document of documents) {
  if (force) {
    transaction.createOrReplace(document);
  } else {
    transaction.createIfNotExists(document);
  }
}

await transaction.commit();

console.log(
  force
    ? `Prepísané dokumenty: ${documents.map((document) => document._id).join(", ")}`
    : `Pripravené dokumenty: ${documents.map((document) => document._id).join(", ")} (existujúce zostali nezmenené)`,
);
console.log(`Studio: https://www.sanity.io/manage/project/${projectId}`);
