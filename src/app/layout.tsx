import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Medeph kardiologická ambulancia | Poliklinika Sabinov",
  description:
    "Kardiologická ambulancia a ambulancia vnútorného lekárstva Medeph v Poliklinike Sabinov. Informácie o službách, ordinačných hodinách a kontakte.",
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
