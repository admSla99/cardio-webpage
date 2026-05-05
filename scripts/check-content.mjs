import { existsSync, readFileSync } from "node:fs";

const content = readFileSync(new URL("../src/lib/content.ts", import.meta.url), "utf8");
const css = readFileSync(new URL("../src/app/globals.css", import.meta.url), "utf8");
const cssLower = css.toLowerCase();
const header = readFileSync(new URL("../src/components/site-header.tsx", import.meta.url), "utf8");
const hero = readFileSync(new URL("../src/components/hero-section.tsx", import.meta.url), "utf8");
const openingHours = readFileSync(new URL("../src/components/opening-hours-section.tsx", import.meta.url), "utf8");
const servicesSection = readFileSync(new URL("../src/components/services-section.tsx", import.meta.url), "utf8");
const teamSection = readFileSync(new URL("../src/components/team-section.tsx", import.meta.url), "utf8");
const contactSection = readFileSync(new URL("../src/components/contact-section.tsx", import.meta.url), "utf8");
const cookieConsent = readFileSync(new URL("../src/components/cookie-consent.tsx", import.meta.url), "utf8");
const page = readFileSync(new URL("../src/app/page.tsx", import.meta.url), "utf8");
const footer = readFileSync(new URL("../src/components/site-footer.tsx", import.meta.url), "utf8");
const layout = readFileSync(new URL("../src/app/layout.tsx", import.meta.url), "utf8");
const appIconUrl = new URL("../src/app/icon.svg", import.meta.url);
const appIcon = existsSync(appIconUrl) ? readFileSync(appIconUrl, "utf8") : "";

const required = [
  "#0A1D37",
  "#E11D48",
  "#301700",
  "#64748B",
  "MEDEPH s.r.o.",
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
  "IČO: 52068811",
  "0915 148 518",
  "051 773 9742",
  "kardiosb@gmail.com",
  "vnútorného lekárstva",
  "pexels-karola-g-5207102.webp",
  "Kardiológia a vnútorné lekárstvo",
  "Základné vyšetrenia a monitorovanie sú vedené tak, aby bol postup pre pacienta zrozumiteľný a pokojný.",
  "Ambulancia pôsobí v Poliklinike Sabinov na adrese SNP 501/1. Objednanie prebieha telefonicky aj mailom.",
  "mapEmbedUrl",
  "https://www.google.com/maps",
  "output=embed",
  "<iframe",
  "Mapa: Poliklinika Sabinov, SNP 501/1",
  "Telefonicky aj mailom",
  "Oznamy",
  "Momentálne nie sú zverejnené žiadne mimoriadne oznamy.",
  "opening-hours-layout",
  "opening-hours-main",
  "notice-card-wide",
  "CookieConsent",
  "cookie-consent",
  "medephCookieConsent",
  "Rozumiem",
  "MEDEPH s.r.o. - Odborná kardiologická a interná ambulancia",
  "favicon-pulse",
  "viewBox=\"0 0 32 32\"",
  ".brand-mark svg path:last-child",
  "stroke: var(--red)",
];

for (const value of required) {
  if (
    !content.includes(value) &&
    !hero.includes(value) &&
    !servicesSection.includes(value) &&
    !teamSection.includes(value) &&
    !contactSection.includes(value) &&
    !cookieConsent.includes(value) &&
    !footer.includes(value) &&
    !layout.includes(value) &&
    !appIcon.includes(value) &&
    !openingHours.includes(value) &&
    !page.includes(value) &&
    !cssLower.includes(value.toLowerCase())
  ) {
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
  "Medeph kardiologická ambulancia",
  "Medeph.",
  "Medeph v Poliklinike",
  "ambulanciu Medeph",
  "pexels-karola-g-5207102.jpg",
  "Kardiologická diagnostika a vnútorné lekárstvo",
  "Základné vyšetrenia, monitorovanie a ambulancia vnútorného lekárstva sú vedené tak, aby bol postup pre pacienta zrozumiteľný a pokojný.",
  "Ambulanciu vedie MUDr. Eva Hrbatá spolu so sestrou Andreou Slaninkovou.",
  "Objednanie prebieha telefonicky.",
  "Po telefonickom dohovore",
];

for (const value of forbidden) {
  if (
    content.includes(value) ||
    hero.includes(value) ||
    servicesSection.includes(value) ||
    teamSection.includes(value) ||
    contactSection.includes(value) ||
    cookieConsent.includes(value) ||
    footer.includes(value) ||
    layout.includes(value) ||
    openingHours.includes(value) ||
    page.includes(value) ||
    cssLower.includes(value.toLowerCase())
  ) {
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

const openingHoursVisualRequirements = [
  "hours-row-closed",
  "row.hours === \"neordinuje\"",
  "rgba(225, 29, 72, 0.08)",
  ".hours-row-closed + .hours-row-closed",
];

for (const value of openingHoursVisualRequirements) {
  if (!css.includes(value) && !content.includes(value) && !openingHours.includes(value)) {
    throw new Error(`Missing closed opening-hours visual behavior: ${value}`);
  }
}

console.log("Content safety checks passed.");
