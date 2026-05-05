import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MEDEPH s.r.o. | Kardiologická a interná ambulancia | Poliklinika Sabinov",
  description:
    "Kardiologická a interná ambulancia MEDEPH s.r.o. v Poliklinike Sabinov. Informácie o službách, ordinačných hodinách a kontakte.",
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
