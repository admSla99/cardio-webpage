"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

/**
 * Studio je zámerne za klientskou hranicou. Balík `sanity` sa inak dostane do
 * React Server Component grafu, kde sa nepodarí rozlíšiť `swr` a build zlyhá.
 */
export default function StudioClient() {
  return <NextStudio config={config} />;
}
