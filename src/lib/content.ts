export const designTokens = {
  navy: "#0A1D37",
  red: "#E11D48",
  tertiary: "#301700",
  slate: "#64748B",
  surface: "#F8F9FF",
  card: "#FFFFFF",
  border: "#E2E8F0",
  text: "#0B1C30",
  muted: "#44474D",
} as const;

export const siteConfig = {
  name: "Medeph kardiologická ambulancia",
  shortName: "Medeph",
  location: "Poliklinika Sabinov",
  description:
    "Odborná kardiologická starostlivosť v modernom a pokojnom prostredí Polikliniky Sabinov.",
  primaryCta: "Objednať sa",
  secondaryCta: "Kde nás nájdete",
} as const;

export const navigationItems = [
  { label: "Služby", href: "#sluzby" },
  { label: "Tím", href: "#tim" },
  { label: "Ordinačné hodiny", href: "#ordinacne-hodiny" },
  { label: "Galéria", href: "#galeria" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

export const services = [
  {
    title: "EKG vyšetrenie",
    description:
      "Základné neinvazívne vyšetrenie elektrickej aktivity srdca pri preventívnej aj cielenej diagnostike.",
    icon: "pulse",
  },
  {
    title: "Echokardiografia",
    description:
      "Ultrazvukové vyšetrenie srdca zamerané na štruktúru, funkciu a celkový stav srdcového svalu.",
    icon: "monitor",
  },
  {
    title: "Preventívne kardiologické vyšetrenie",
    description:
      "Komplexné zhodnotenie rizikových faktorov a odporúčania pre dlhodobú starostlivosť o srdce.",
    icon: "stethoscope",
  },
  {
    title: "Holter EKG / tlakový Holter",
    description:
      "Dlhodobé monitorovanie rytmu srdca alebo krvného tlaku počas bežného dňa pacienta.",
    icon: "timer",
  },
] as const;

export const doctors = [
  {
    name: "MUDr. Meno Priezvisko",
    role: "Kardiológia",
    image: "/images/diagnostics.svg",
  },
  {
    name: "MUDr. Meno Priezvisko",
    role: "Kardiologická starostlivosť",
    image: "/images/reception.svg",
  },
] as const;

export const openingHours = [
  { day: "Pondelok", hours: "00:00 - 00:00" },
  { day: "Utorok", hours: "00:00 - 00:00" },
  { day: "Streda", hours: "00:00 - 00:00" },
  { day: "Štvrtok", hours: "00:00 - 00:00" },
  { day: "Piatok", hours: "00:00 - 00:00" },
] as const;

export const galleryItems = [
  {
    title: "Vyšetrovacie prostredie",
    image: "/images/clinic-room.svg",
  },
  {
    title: "Diagnostické vybavenie",
    image: "/images/diagnostics.svg",
  },
  {
    title: "Recepcia a navigácia",
    image: "/images/reception.svg",
  },
] as const;

export const contact = {
  location: "Poliklinika Sabinov",
  addressLine: "Presná adresa bude doplnená",
  phone: "+421 XXX XXX XXX",
  email: "kontakt bude doplnený",
  points: [
    { label: "Telefón", value: "+421 XXX XXX XXX", icon: "phone" },
    { label: "Lokalita", value: "Poliklinika Sabinov", icon: "pin" },
    { label: "Objednanie", value: "Po telefonickom dohovore", icon: "calendar" },
  ],
} as const;

export const heroStats = [
  { label: "EKG", value: "12", unit: "zvodov" },
  { label: "Holter", value: "24", unit: "hod." },
  { label: "Starostlivosť", value: "1:1", unit: "prístup" },
] as const;

export const heroHeadlineWords = ["ambulancia", "diagnostika", "prevencia"] as const;

export const footerLinks = navigationItems;
