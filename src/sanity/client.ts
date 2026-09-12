import { createClient } from "next-sanity";
import { apiVersion, dataset, isSanityConfigured, projectId } from "@/sanity/env";

/**
 * `useCdn: false` zámerne. Obsah cachuje Next.js podľa značky, takže webhook
 * z Sanity vie vyhodiť cache okamžite. CDN pred tým by aktualizáciu oddialila.
 */
export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      perspective: "published",
    })
  : null;
