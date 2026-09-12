import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Administračné rozhranie nepatrí do indexu vyhľadávačov.
      disallow: ["/studio", "/api/"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
