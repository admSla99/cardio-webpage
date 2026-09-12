import type { Metadata, Viewport } from "next";
import { isSanityConfigured } from "@/sanity/env";
import StudioClient from "./studio-client";

export const dynamic = "force-static";

// Zhodné s `next-sanity/studio`, len bez importu, ktorý by vtiahol Studio na server.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "MEDEPH s.r.o. | Správa obsahu",
  referrer: "same-origin",
  robots: "noindex",
};

function SetupNotice() {
  return (
    <main style={{ maxWidth: "42rem", margin: "0 auto", padding: "4rem 1.5rem", lineHeight: 1.6 }}>
      <h1>Sanity Studio nie je nakonfigurované</h1>
      <p>
        Chýba premenná prostredia <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code>. Stránka sa medzitým vykresľuje
        z predvoleného obsahu v <code>src/lib/content.ts</code>.
      </p>
      <p>
        Postup nastavenia nájdete v súbore <code>docs/sanity-setup.md</code>.
      </p>
    </main>
  );
}

export default function StudioPage() {
  if (!isSanityConfigured) {
    return <SetupNotice />;
  }

  return <StudioClient />;
}
