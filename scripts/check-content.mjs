import { readFileSync } from "node:fs";

const content = readFileSync(new URL("../src/lib/content.ts", import.meta.url), "utf8");
const css = readFileSync(new URL("../src/app/globals.css", import.meta.url), "utf8");

const required = [
  "#0A1D37",
  "#E11D48",
  "#301700",
  "#64748B",
  "Medeph kardiologická ambulancia",
  "Poliklinika Sabinov",
  "Objednať sa",
  "MUDr. Meno Priezvisko",
  "+421 XXX XXX XXX",
  "Presná adresa bude doplnená",
];

for (const value of required) {
  if (!content.includes(value) && !css.includes(value.toLowerCase())) {
    throw new Error(`Missing required content or token: ${value}`);
  }
}

const forbidden = ["#20B2AA", "#006A65", "Ján Novák", "Anna Kováčová"];

for (const value of forbidden) {
  if (content.includes(value) || css.includes(value.toLowerCase())) {
    throw new Error(`Forbidden unsupported value found: ${value}`);
  }
}

console.log("Content safety checks passed.");
