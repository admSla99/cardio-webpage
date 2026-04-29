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
  "MUDr. Eva Hrbatá",
  "Andrea Slaninková",
  "7:00-14:00",
  "7:00-13:00",
  "neordinuje",
  "SNP 501/1",
  "08301 Sabinov",
  "VšZP, Dôvera, Union",
  "MEDEPH s.r.o.",
  "IČO: 52068811",
  "0915 148 518",
  "051 773 9742",
  "kardiosb@gmail.com",
  "vnútorného lekárstva",
  "pexels-karola-g-5207102.webp",
];

for (const value of required) {
  if (!content.includes(value) && !hero.includes(value) && !css.includes(value.toLowerCase())) {
    throw new Error(`Missing required content or token: ${value}`);
  }
}

const forbidden = [
  "#20B2AA",
  "#006A65",
  "Ján Novák",
  "Anna Kováčová",
  "MUDr. Meno Priezvisko",
  "+421 XXX XXX XXX",
  "Presná adresa bude doplnená",
  "kontakt bude doplnený",
  "00:00 - 00:00",
  "pripravené na doplnenie",
  "budú doplnené",
  "neoverený rozvrh",
  "Medeph kardiologická a interná",
  "pexels-karola-g-5207102.jpg",
];

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
  "heroSpecialtyWords",
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

const largeHeroLayoutRequirements = [
  "@media (min-width: 1440px)",
  ".hero-grid",
  "1560px",
  "minmax(560px, 1.1fr)",
  "72px",
];

for (const value of largeHeroLayoutRequirements) {
  if (!css.includes(value)) {
    throw new Error(`Missing large desktop hero layout behavior: ${value}`);
  }
}

console.log("Content safety checks passed.");
