import "server-only";
import { sanityClient } from "@/sanity/client";
import { CONTENT_TAG } from "@/sanity/queries";

/** Ako dlho sa obsah drží v cache, ak webhook nie je nastavený. */
const REVALIDATE_SECONDS = 60;

/**
 * Vráti `null` vždy, keď sa obsah nepodarí načítať. Volajúci potom použije
 * predvolený obsah z `src/lib/content.ts`, takže stránka nikdy nespadne
 * na výpadku Sanity ani na chýbajúcej konfigurácii.
 */
export async function sanityFetch<T>(query: string): Promise<T | null> {
  if (!sanityClient) {
    return null;
  }

  try {
    return await sanityClient.fetch<T>(
      query,
      {},
      { next: { revalidate: REVALIDATE_SECONDS, tags: [CONTENT_TAG] } },
    );
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    console.warn(`[sanity] Načítanie obsahu zlyhalo, používa sa predvolený obsah. Dôvod: ${reason}`);
    return null;
  }
}
