export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-09-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";

/**
 * Bez project ID sa stránka vykreslí z predvoleného obsahu v `src/lib/content.ts`.
 * Vďaka tomu prejde build aj v CI, kde Sanity premenné nastavené nie sú.
 */
export const isSanityConfigured = projectId.trim().length > 0;
