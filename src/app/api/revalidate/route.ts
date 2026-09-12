import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { CONTENT_TAG } from "@/sanity/queries";

/**
 * Webhook zo Sanity. Po publikovaní zmeny vyhodí cache, takže úprava je
 * na stránke okamžite. Bez webhooku sa obsah obnoví najneskôr do minúty.
 */
export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;

  if (!secret) {
    return NextResponse.json(
      { message: "Chýba premenná prostredia SANITY_REVALIDATE_SECRET." },
      { status: 500 },
    );
  }

  const { isValidSignature, body } = await parseBody<{ _type?: string }>(request, secret);

  if (!isValidSignature) {
    return NextResponse.json({ message: "Neplatný podpis webhooku." }, { status: 401 });
  }

  if (!body?._type) {
    return NextResponse.json({ message: "Telo požiadavky neobsahuje _type." }, { status: 400 });
  }

  // Next 16 vyžaduje profil. `expire: 0` znamená okamžité vyhodenie, bez servírovania starej verzie.
  revalidateTag(CONTENT_TAG, { expire: 0 });

  return NextResponse.json({ revalidated: true, type: body._type, tag: CONTENT_TAG });
}
