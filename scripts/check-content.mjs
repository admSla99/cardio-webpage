import { readFileSync } from "node:fs";

const content = readFileSync(new URL("../src/lib/content.ts", import.meta.url), "utf8");
const css = readFileSync(new URL("../src/app/globals.css", import.meta.url), "utf8");
const header = readFileSync(new URL("../src/components/site-header.tsx", import.meta.url), "utf8");
const hero = readFileSync(new URL("../src/components/hero-section.tsx", import.meta.url), "utf8");

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

const scrollHeaderRequirements = [
  "isScrolled",
  "window.addEventListener(\"scroll\"",
  "site-header-top",
  "site-header-scrolled",
];

for (const value of scrollHeaderRequirements) {
  if (!header.includes(value) && !css.includes(value)) {
    throw new Error(`Missing scroll-aware navbar behavior: ${value}`);
  }
}

const heroRollerRequirements = [
  "heroHeadlineWords",
  "hero-title-roller",
  "hero-title-word",
  "--hero-title-bleed",
  "--hero-title-slot",
  "@keyframes hero-title-roll",
  "prefers-reduced-motion",
];

for (const value of heroRollerRequirements) {
  if (!content.includes(value) && !hero.includes(value) && !css.includes(value)) {
    throw new Error(`Missing hero headline roller behavior: ${value}`);
  }
}

console.log("Content safety checks passed.");
