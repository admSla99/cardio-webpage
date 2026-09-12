import "server-only";
import { cache } from "react";
import {
  activeOpeningNotices as noticeDefaults,
  contact as contactDefaults,
  openingHours as openingHoursDefaults,
} from "@/lib/content";
import { sanityFetch } from "@/sanity/fetch";
import { kontaktQuery, ordinacneHodinyQuery, oznamyQuery } from "@/sanity/queries";

export type OpeningHoursRow = { day: string; hours: string };

export type ContactPoint = {
  label: string;
  value: string;
  icon: string;
  href?: string;
};

export type SiteContact = {
  location: string;
  addressLine: string;
  addressLines: readonly string[];
  mapEmbedUrl: string;
  provider: string;
  companyId: string;
  insurance: string;
  phone: string;
  phoneHref: string;
  landline: string;
  email: string;
  points: readonly ContactPoint[];
};

export type Notices = {
  items: readonly string[];
  showPopup: boolean;
};

type OznamyDocument = { polozky?: (string | null)[]; zobrazitPopup?: boolean };
type HodinyDocument = { dni?: ({ den?: string; hodiny?: string } | null)[] };
type KontaktDocument = {
  mobil?: string;
  telefon?: string;
  email?: string;
  miesto?: string;
  ulica?: string;
  mesto?: string;
  poistovne?: string;
  poskytovatel?: string;
  ico?: string;
  objednanie?: string;
};

/** Slovenské čísla sa píšu s nulou na začiatku, odkaz na vytáčanie potrebuje predvoľbu. */
function telHref(value: string): string {
  const compact = value.replace(/[\s./-]/g, "");

  if (compact.startsWith("+")) {
    return `tel:${compact}`;
  }

  if (compact.startsWith("00")) {
    return `tel:+${compact.slice(2)}`;
  }

  if (compact.startsWith("0")) {
    return `tel:+421${compact.slice(1)}`;
  }

  return `tel:${compact}`;
}

function buildMapEmbedUrl(place: string, street: string, city: string): string {
  const query = `${place}, ${street}, ${city}`;

  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

export const getNotices = cache(async (): Promise<Notices> => {
  const document = await sanityFetch<OznamyDocument>(oznamyQuery);

  if (!document) {
    return { items: noticeDefaults, showPopup: noticeDefaults.length > 0 };
  }

  const items = (document.polozky ?? [])
    .filter((item): item is string => typeof item === "string" && item.trim().length > 0)
    .map((item) => item.trim());

  return { items, showPopup: items.length > 0 && document.zobrazitPopup !== false };
});

export const getOpeningHours = cache(async (): Promise<readonly OpeningHoursRow[]> => {
  const document = await sanityFetch<HodinyDocument>(ordinacneHodinyQuery);

  const rows = (document?.dni ?? [])
    .filter((row): row is { den: string; hodiny: string } =>
      Boolean(row?.den?.trim() && row?.hodiny?.trim()),
    )
    .map((row) => ({ day: row.den.trim(), hours: row.hodiny.trim() }));

  return rows.length > 0 ? rows : openingHoursDefaults;
});

export const getContact = cache(async (): Promise<SiteContact> => {
  const document = await sanityFetch<KontaktDocument>(kontaktQuery);

  const place = document?.miesto?.trim();
  const street = document?.ulica?.trim();
  const city = document?.mesto?.trim();
  const mobile = document?.mobil?.trim();
  const landline = document?.telefon?.trim();
  const email = document?.email?.trim();

  // Bez kompletnej adresy a kontaktov by vznikli polovičné údaje, preto radšej predvolené.
  if (!place || !street || !city || !mobile || !landline || !email) {
    return { ...contactDefaults, phoneHref: telHref(contactDefaults.phone) };
  }

  const provider = document?.poskytovatel?.trim() ?? contactDefaults.provider;
  const companyId = document?.ico?.trim() ?? contactDefaults.companyId;
  const insurance = document?.poistovne?.trim() ?? contactDefaults.insurance;
  const ordering = document?.objednanie?.trim() ?? "Telefonicky aj mailom";

  return {
    location: place,
    addressLine: `${street}, ${city}`,
    addressLines: [street, city],
    mapEmbedUrl: buildMapEmbedUrl(place, street, city),
    provider,
    companyId,
    insurance,
    phone: mobile,
    phoneHref: telHref(mobile),
    landline,
    email,
    points: [
      { label: "Mobil", value: mobile, icon: "phone", href: telHref(mobile) },
      { label: "Telefón", value: landline, icon: "phone", href: telHref(landline) },
      { label: "Email", value: email, icon: "calendar", href: `mailto:${email}` },
      { label: "Miesto prevádzkovania", value: `${place}, ${street}, ${city}`, icon: "pin" },
      { label: "Poisťovne", value: insurance, icon: "calendar" },
      { label: "Poskytovateľ", value: `${provider}, ${companyId}`, icon: "pulse" },
      { label: "Objednanie", value: ordering, icon: "calendar" },
    ],
  };
});
