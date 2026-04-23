# Medeph Kardiologická Ambulancia Design Spec

## Context

Build a new Next.js website for **Medeph kardiologická ambulancia** located in **Poliklinika Sabinov**. The repository starts as an empty project directory with only local Codex configuration present.

The implementation must strictly follow the approved Stitch design, not an improvised visual direction.

## Approved Stitch Reference

- Stitch project: `projects/2658520133919190206`
- Project title: `Moderná Kardiologická Ambulancia`
- Approved screen: `projects/2658520133919190206/screens/99194728bb6e49649d48a2760681aa37`
- Screen title: `Medeph - Kardiologická ambulancia Sabinov`
- Approved design system: `Cardiology Design System`
- Design system asset: `assets/b516725938534a8abd41083bc5c7f135`

The earlier teal-based `Cardiology Excellence` screen is rejected for this implementation. The implementation must use the red-accent `Cardiology Design System`.

## Goal

Create a polished one-page public website for a Slovak cardiology outpatient clinic. The site should make it easy for patients to understand services, locate the clinic, and start the appointment flow while maintaining a calm, precise, premium medical feel.

## Audience

Primary users are patients and relatives looking for cardiology care in Sabinov. They need quick orientation, readable information, visible contact/location details, and a trustworthy visual impression.

Secondary users are clinic staff who may later replace placeholder contact, doctor, address, and opening-hours data.

## Visual Direction

Use the `Cardiology Design System` from Stitch:

- Clinical precision, technological advancement, and human empathy.
- Modern corporate medical minimalism.
- Significant whitespace to reduce cognitive load.
- Deep navy for trust, expertise, navigation, headings, and primary emphasis.
- Medical red used intentionally as an accent for appointment/highlight states, not as a dominant alarming color.
- Cool neutral surfaces with white raised cards.
- 12-column fluid grid with max content width around `1280px`.
- Strict 8px spacing rhythm.
- Wide gutters, around `24px`.
- Public marketing sections should use airy vertical spacing, typically `48px` to `80px`.
- No heavy shadows, no teal CTA treatment, no decorative gradient-orb backgrounds, no nested cards.

## Design Tokens

Use these implementation-level tokens:

- Deep navy: `#0A1D37`
- Medical red: `#E11D48`
- Dark tertiary: `#301700`
- Slate neutral: `#64748B`
- Page/surface background: `#F8F9FF`
- White card surface: `#FFFFFF`
- Soft card border: `#E2E8F0`
- Main text: `#0B1C30`
- Muted text: `#44474D`

Stitch internal token names include `primary: #00030a`, `primary-container: #0a1d37`, `secondary: #ba0035`, and `secondary-container: #e21e49`. For implementation clarity, use the approved override palette above.

## Typography

Use Manrope across the site to match the approved `Cardiology Design System`.

- H1: approximately `48px`, weight `800`, line height `1.2`, tight tracking where supported.
- H2: approximately `36px`, weight `700`, line height `1.2`.
- H3: approximately `24px`, weight `700`, line height `1.3`.
- Body large: approximately `18px`, weight `400`, line height `1.6`.
- Body medium: approximately `16px`, weight `400`, line height `1.6`.
- Body small: approximately `14px`, weight `400`, line height `1.5`.
- Metadata labels: approximately `12px`, weight `700`, uppercase or letter-spaced only where it matches the Stitch feel.

Responsive typography may step down on mobile, but should keep the same hierarchy and not scale directly with viewport width.

## Page Structure

Implement a single landing page with these sections in order:

1. Sticky header
2. Hero
3. Services
4. Team
5. Ordination hours
6. Gallery / clinic environment
7. Contact and location
8. Footer

The page must be implemented as reusable sections, not one unstructured page file.

## Content

Visible language should be Slovak with correct Slovak diacritics.

Use the following content direction:

- Brand/site name: `Medeph kardiologická ambulancia`
- Location: `Poliklinika Sabinov`
- Hero title: `Medeph kardiologická ambulancia`
- Hero message: calm, professional Slovak copy about precise and empathetic cardiology care in Poliklinika Sabinov.
- Primary CTA: `Objednať sa`
- Secondary CTA: `Kde nás nájdete`
- Navigation labels: `Služby`, `Tím`, `Ordinačné hodiny`, `Galéria`, `Kontakt`

Use safe placeholders for unknown factual details:

- Doctor names: `MUDr. Meno Priezvisko`
- Phone: `+421 XXX XXX XXX`
- Exact address: placeholder that clearly says the precise address will be added later.
- Opening hours: clearly marked placeholder hours such as `00:00 - 00:00` or `Doplní sa`.

Do not invent real phone numbers, real doctor names, exact address, opening hours, certifications, insurance partners, patient testimonials, or treatment claims.

## Header

The header should be sticky and visually restrained.

Requirements:

- Left side: Medeph wordmark/logo treatment.
- Desktop center/right: navigation links to page anchors.
- Right side: CTA `Objednať sa`.
- Background should remain clean and readable while sticky. Use white or a subtle translucent white with simple shadow/border if needed.
- Mobile should collapse navigation into an accessible menu or a compact header with the primary CTA preserved.
- Header height should be stable and should not cause layout shift.

## Hero

The hero is the first viewport signal for the clinic.

Requirements:

- Large H1 with clinic name.
- Supporting text naming Sabinov/Poliklinika Sabinov.
- Primary CTA in deep navy or the approved accent treatment from the red design system.
- Secondary CTA as navy outline/transparent button.
- High-quality optimistic medical/cardiology imagery or an implementation-safe placeholder visual matching the Stitch composition.
- Include subtle cardiology visual language such as ECG/pulse details only if restrained and aligned with Stitch.
- Avoid marketing-fluff claims and unsupported metrics.

## Services

Show four service cards:

- `EKG vyšetrenie`
- `Echokardiografia`
- `Preventívne kardiologické vyšetrenie`
- `Holter EKG / tlakový Holter`

Card requirements:

- White surface.
- 8px rounded corners.
- 24px internal padding.
- Soft `#E2E8F0` border or equivalent tonal separation.
- Very subtle ambient shadow, low-opacity navy.
- Simple Lucide icons or equivalent, stroke around 1.5-2px.
- Medical red may be used as small accent, icon highlight, or status stripe; it must not dominate the card.

## Team

Show a compact team section with two doctor placeholders.

Requirements:

- Use `MUDr. Meno Priezvisko` placeholders.
- Use neutral professional image placeholders or stylized medical-photo placeholders.
- Do not imply specialties, certifications, or names not provided by the user.
- Keep cards simple and consistent with the services card style.

## Ordination Hours

Show clear, scannable placeholder hours.

Requirements:

- Days listed in Slovak.
- Values marked as placeholders.
- Use table-like rows or a structured list, not a dense paragraph.
- No invented real schedule.
- Keep text legible on mobile without horizontal scrolling.

## Gallery

Show a small grid of clinic or medical imagery placeholders.

Requirements:

- Use optimistic, bright, clean medical imagery direction.
- Images should use the approved 8px/large container radius behavior from Stitch.
- Avoid dark, blurred, abstract, or stock-like hero-only visuals where patients cannot inspect the clinic feel.
- If real images are not provided, use placeholders that are easy to replace later.

## Contact And Location

Show location and contact details near the bottom.

Requirements:

- Location: `Poliklinika Sabinov`
- Exact address: placeholder text, not invented.
- Phone: `+421 XXX XXX XXX`
- Include a map placeholder or iframe-ready block, clearly replaceable later.
- CTA for appointment/contact should remain visible but not aggressive.
- The section must be accessible, readable, and mobile-friendly.

## Footer

Footer should include:

- Medeph clinic name.
- Short Slovak description.
- Navigation links.
- Contact placeholder summary.
- Current-year copyright text.

Do not add privacy/legal pages unless scaffolded as non-linked placeholders or unless requested later.

## Technical Architecture

Use a new Next.js project with:

- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- `src/app` structure if selected by the official scaffold.
- `next/font/google` for Manrope.
- Static data arrays for services, team placeholders, opening hours, gallery items, and contact info.
- Componentized sections under `src/components`.
- Utility or data files under `src/lib` if helpful.

The first version should be static and deployable without a backend, CMS, or form submission service.

## Component Boundaries

Recommended files:

- `src/app/layout.tsx`: metadata, font setup, global shell.
- `src/app/page.tsx`: section composition only.
- `src/app/globals.css`: Tailwind imports, CSS variables/tokens, base styles.
- `src/components/site-header.tsx`: sticky navigation.
- `src/components/hero-section.tsx`: first viewport content.
- `src/components/services-section.tsx`: service cards.
- `src/components/team-section.tsx`: doctor placeholders.
- `src/components/opening-hours-section.tsx`: placeholder schedule.
- `src/components/gallery-section.tsx`: clinic image grid.
- `src/components/contact-section.tsx`: location/contact/map placeholder.
- `src/components/site-footer.tsx`: footer.
- `src/components/ui/button.tsx`: reusable button styling if useful.
- `src/components/ui/card.tsx`: reusable card styling if useful.
- `src/lib/content.ts`: static Slovak content arrays.
- `src/lib/utils.ts`: class name helper if the project uses one.

Keep files focused and avoid a monolithic page component.

## Responsive Behavior

Desktop:

- Use max-width content wrappers around `1280px`.
- Use multi-column layout in hero, services, team, gallery, and contact where matching Stitch.
- Keep section spacing airy.

Tablet/mobile:

- Stack hero media and text cleanly.
- Cards should become one or two columns depending on width.
- Header navigation should remain usable without text overflow.
- Buttons should wrap or stack without clipping.
- No text should overlap images, cards, buttons, or adjacent sections.

## Accessibility

Requirements:

- Semantic landmarks: header, main, sections, footer.
- Section headings should follow a sensible hierarchy.
- Buttons and links need accessible names.
- Color contrast must remain readable for navy/red/slate combinations.
- Images need meaningful alt text or empty alt text for decorative placeholders.
- Keyboard navigation should work for header links and CTAs.
- Respect reduced motion if any animations are added.

## Testing And Verification

Implementation should be verified with:

- `npm run lint`
- `npm run build`
- Visual inspection at desktop and mobile widths.
- Check that no teal `#20B2AA` or `#006A65` styling remains in implementation.
- Check that no invented factual details appear in visible content.
- Check that header links target existing sections.
- Check that text fits in buttons and cards at mobile width.

## Out Of Scope

Do not implement these in the first version:

- Real appointment booking backend.
- CMS/admin editing.
- Multi-page service detail pages.
- Patient testimonials or ratings.
- Insurance partner lists.
- Real doctor identities, exact schedule, exact address, or phone number without user-provided data.
- Medical claims beyond general cardiology service descriptions.

## Open Replacement Points

These values are intentionally easy to update later:

- Real phone number.
- Exact address in Poliklinika Sabinov.
- Doctor names and photos.
- Opening hours.
- Real clinic/gallery images.
- Real map embed URL.
