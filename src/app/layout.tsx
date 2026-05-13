import type { Metadata } from "next";
import { siteConfig } from "@/lib/content";
import "./globals.css";

const pageTitle = "MEDEPH s.r.o. | Kardiologická a interná ambulancia | Poliklinika Sabinov";
const pageDescription =
  "Kardiologická a interná ambulancia MEDEPH s.r.o. v Poliklinike Sabinov. Informácie o službách, ordinačných hodinách a kontakte.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "/images/entry.webp",
        width: 1200,
        height: 1600,
        alt: "Vstup do ambulancie MEDEPH s.r.o. v Poliklinike Sabinov",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/entry.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>{children}</body>
    </html>
  );
}
