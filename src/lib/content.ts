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
  name: "MEDEPH s.r.o.",
  shortName: "MEDEPH s.r.o.",
  location: "Poliklinika Sabinov",
  description:
    "Odborná kardiologická a interná ambulancia v Poliklinike Sabinov.",
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
    name: "MUDr. Eva Hrbatá",
    role: "Lekár",
    image: "/images/diagnostics.svg",
  },
  {
    name: "Andrea Slaninková",
    role: "Sestra",
    image: "/images/reception.svg",
  },
] as const;

export const openingHours = [
  { day: "Pondelok", hours: "7:00-14:00" },
  { day: "Utorok", hours: "7:00-14:00" },
  { day: "Streda", hours: "7:00-14:00" },
  { day: "Štvrtok", hours: "7:00-14:00" },
  { day: "Piatok", hours: "7:00-13:00" },
  { day: "Sobota", hours: "neordinuje" },
  { day: "Nedeľa", hours: "neordinuje" },
] as const;

export const openingNotices = [
  "Momentálne nie sú zverejnené žiadne mimoriadne oznamy.",
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
  addressLine: "SNP 501/1, 08301 Sabinov",
  addressLines: ["Poliklinika", "SNP 501/1", "08301 Sabinov"],
  mapEmbedUrl:
    "https://www.google.com/maps?q=Poliklinika%20Sabinov%2C%20SNP%20501%2F1%2C%2008301%20Sabinov&output=embed",
  provider: "MEDEPH s.r.o.",
  companyId: "IČO: 52068811",
  insurance: "VšZP, Dôvera, Union",
  phone: "0915 148 518",
  landline: "051 773 9742",
  email: "kardiosb@gmail.com",
  points: [
    { label: "Mobil", value: "0915 148 518", icon: "phone", href: "tel:0915148518" },
    { label: "Telefón", value: "051 773 9742", icon: "phone", href: "tel:0517739742" },
    { label: "Email", value: "kardiosb@gmail.com", icon: "calendar", href: "mailto:kardiosb@gmail.com" },
    { label: "Miesto prevádzkovania", value: "Poliklinika, SNP 501/1, 08301 Sabinov", icon: "pin" },
    { label: "Poisťovne", value: "VšZP, Dôvera, Union", icon: "calendar" },
    { label: "Poskytovateľ", value: "MEDEPH s.r.o., IČO: 52068811", icon: "pulse" },
    { label: "Objednanie", value: "Telefonicky aj mailom", icon: "calendar" },
  ],
} as const;

export const heroStats = [
  { label: "EKG", value: "12", unit: "zvodov" },
  { label: "Holter", value: "24", unit: "hod." },
  { label: "Starostlivosť", value: "1:1", unit: "prístup" },
] as const;

export const heroSpecialtyWords = ["kardiologická", "interná"] as const;

export const footerLinks = navigationItems;
