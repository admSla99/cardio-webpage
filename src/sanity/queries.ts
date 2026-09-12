import { defineQuery } from "next-sanity";

export const CONTENT_TAG = "site-content";

export const oznamyQuery = defineQuery(`
  *[_type == "oznamy"][0]{
    "polozky": coalesce(polozky, []),
    "zobrazitPopup": coalesce(zobrazitPopup, true)
  }
`);

export const ordinacneHodinyQuery = defineQuery(`
  *[_type == "ordinacneHodiny"][0]{
    "dni": coalesce(dni[]{ den, hodiny }, [])
  }
`);

export const kontaktQuery = defineQuery(`
  *[_type == "kontakt"][0]{
    mobil, telefon, email, miesto, ulica, mesto, poistovne, poskytovatel, ico, objednanie
  }
`);
