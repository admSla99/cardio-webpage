# Medeph Kardiologická Ambulancia Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished one-page Next.js website for Medeph kardiologická ambulancia in Poliklinika Sabinov using the approved red-accent Stitch `Cardiology Design System`.

**Architecture:** Create a static App Router Next.js site with a small content layer and focused section components. Keep factual clinic values in `src/lib/content.ts` so phone, address, doctors, opening hours, and imagery can be replaced later without editing layout components.

**Tech Stack:** Next.js App Router, TypeScript, Tailwind CSS v4, Manrope via `next/font/google`, lucide-react icons, ESLint CLI, Vitest for content regression tests.

---

## Source References

- Design spec: `docs/superpowers/specs/2026-04-24-medeph-kardiologicka-ambulancia-design.md`
- Stitch screen: `projects/2658520133919190206/screens/99194728bb6e49649d48a2760681aa37`
- Stitch design system: `assets/b516725938534a8abd41083bc5c7f135`
- Official Next.js App Router installation docs: `https://nextjs.org/docs/app/getting-started/installation`
- Official Tailwind framework guide index: `https://tailwindcss.com/docs/installation/framework-guides`
- Official Next.js ESLint docs: `https://nextjs.org/docs/app/api-reference/config/eslint`

## Git Note For This Workspace

Standard `git add` currently fails in this sandbox because `.git` is mounted read-only:

```text
fatal: Unable to create '/home/adam/Projects/cardio-webpage/.git/index.lock': Read-only file system
```

First try normal git commands. If they fail with that exact error, use the existing fallback git directory:

```bash
git --git-dir=/tmp/cardio-webpage-dotgit-initial --work-tree=/home/adam/Projects/cardio-webpage status --short --branch
git --git-dir=/tmp/cardio-webpage-dotgit-initial --work-tree=/home/adam/Projects/cardio-webpage add <files>
git --git-dir=/tmp/cardio-webpage-dotgit-initial --work-tree=/home/adam/Projects/cardio-webpage commit -m "<message>"
```

Do not add `.codex/` to commits.

## File Structure

Create or modify these files:

- Create: `package.json` for scripts and dependencies.
- Create: `next.config.ts` for Next configuration.
- Create: `tsconfig.json` for TypeScript and `@/*` alias.
- Create: `eslint.config.mjs` for the ESLint CLI setup.
- Create: `postcss.config.mjs` for Tailwind CSS v4 PostCSS integration.
- Create: `vitest.config.ts` and `vitest.setup.ts` for content tests.
- Create: `src/app/layout.tsx` for metadata, Manrope font, and global shell.
- Create: `src/app/page.tsx` for section composition only.
- Create: `src/app/globals.css` for Tailwind import, design tokens, and base styles.
- Create: `src/lib/content.ts` for all visible Slovak content and editable clinic values.
- Create: `src/lib/content.test.ts` for content safety checks.
- Create: `src/lib/utils.ts` for class name merging.
- Create: `src/components/ui/button.tsx` for link-style CTAs.
- Create: `src/components/ui/card.tsx` for Stitch-style cards.
- Create: `src/components/site-header.tsx` for sticky responsive navigation.
- Create: `src/components/hero-section.tsx` for the first viewport.
- Create: `src/components/services-section.tsx` for service cards.
- Create: `src/components/team-section.tsx` for doctor value cards.
- Create: `src/components/opening-hours-section.tsx` for editable hours.
- Create: `src/components/gallery-section.tsx` for clinic imagery.
- Create: `src/components/contact-section.tsx` for location/contact/map block.
- Create: `src/components/site-footer.tsx` for footer.
- Create: `public/images/clinic-hero.svg`, `public/images/clinic-room.svg`, `public/images/diagnostics.svg`, and `public/images/reception.svg` as replaceable local visual assets.

---

### Task 1: Manual Next.js App Scaffold

**Files:**
- Create: `package.json`
- Create: `next.config.ts`
- Create: `tsconfig.json`
- Create: `eslint.config.mjs`
- Create: `postcss.config.mjs`
- Create: `vitest.config.ts`
- Create: `vitest.setup.ts`
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/app/globals.css`

- [ ] **Step 1: Check runtime**

Run:

```bash
node --version
npm --version
```

Expected: Node is `20.9.0` or newer, matching current Next.js requirements. If Node is older, stop and switch Node before continuing.

- [ ] **Step 2: Create `package.json`**

Write:

```json
{
  "name": "cardio-webpage",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "lint:fix": "eslint --fix",
    "typecheck": "tsc --noEmit",
    "test": "vitest run"
  },
  "dependencies": {
    "lucide-react": "latest",
    "next": "latest",
    "react": "latest",
    "react-dom": "latest"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "latest",
    "@testing-library/jest-dom": "latest",
    "@types/node": "latest",
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "eslint": "latest",
    "eslint-config-next": "latest",
    "jsdom": "latest",
    "tailwindcss": "latest",
    "typescript": "latest",
    "vitest": "latest"
  }
}
```

- [ ] **Step 3: Install dependencies**

Run:

```bash
npm install
```

Expected: `package-lock.json` is created and all dependencies install without peer dependency errors.

- [ ] **Step 4: Create Next, TypeScript, ESLint, PostCSS, and Vitest configs**

Write `next.config.ts`:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
```

Write `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

Write `eslint.config.mjs`:

```js
import { globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextVitals,
  ...nextTs,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
];

export default eslintConfig;
```

Write `postcss.config.mjs`:

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

Write `vitest.config.ts`:

```ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
  },
});
```

Write `vitest.setup.ts`:

```ts
import "@testing-library/jest-dom/vitest";
```

- [ ] **Step 5: Create the minimal App Router shell**

Write `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Medeph kardiologická ambulancia | Poliklinika Sabinov",
  description:
    "Kardiologická ambulancia Medeph v Poliklinike Sabinov. Informácie o službách, ordinačných hodinách a kontakte.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body className={manrope.variable}>{children}</body>
    </html>
  );
}
```

Write `src/app/page.tsx`:

```tsx
export default function Home() {
  return (
    <main>
      <h1>Medeph kardiologická ambulancia</h1>
    </main>
  );
}
```

Write `src/app/globals.css`:

```css
@import "tailwindcss";

:root {
  --background: #f8f9ff;
  --foreground: #0b1c30;
  --navy: #0a1d37;
  --red: #e11d48;
  --tertiary: #301700;
  --slate: #64748b;
  --muted: #44474d;
  --card: #ffffff;
  --border: #e2e8f0;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-manrope), system-ui, sans-serif;
  text-rendering: optimizeLegibility;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

::selection {
  background: rgba(225, 29, 72, 0.18);
}
```

- [ ] **Step 6: Verify scaffold**

Run:

```bash
npm run lint
npm run typecheck
npm run build
```

Expected: all three commands exit `0`. `next-env.d.ts` and `.next/` may be generated.

- [ ] **Step 7: Commit scaffold**

Run:

```bash
git add package.json package-lock.json next.config.ts tsconfig.json eslint.config.mjs postcss.config.mjs vitest.config.ts vitest.setup.ts src/app/layout.tsx src/app/page.tsx src/app/globals.css
git commit -m "chore: scaffold Next.js app"
```

If `.git` is still read-only, use the fallback git-dir command from the Git Note with the same file list and commit message.

---

### Task 2: Content Layer And Design Tokens

**Files:**
- Create: `src/lib/content.ts`
- Create: `src/lib/content.test.ts`
- Create: `src/lib/utils.ts`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Write the failing content safety test**

Write `src/lib/content.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import {
  contact,
  designTokens,
  doctors,
  galleryItems,
  navigationItems,
  openingHours,
  services,
  siteConfig,
} from "./content";

describe("Medeph content", () => {
  it("uses the approved Stitch color palette", () => {
    expect(designTokens.navy).toBe("#0A1D37");
    expect(designTokens.red).toBe("#E11D48");
    expect(designTokens.tertiary).toBe("#301700");
    expect(designTokens.slate).toBe("#64748B");
  });

  it("keeps unknown factual clinic details editable and neutral", () => {
    expect(contact.phone).toBe("+421 XXX XXX XXX");
    expect(contact.addressLine).toContain("bude doplnená");
    expect(doctors.every((doctor) => doctor.name === "MUDr. Meno Priezvisko")).toBe(true);
    expect(openingHours.every((row) => row.hours === "00:00 - 00:00")).toBe(true);
  });

  it("contains the approved Slovak site structure", () => {
    expect(siteConfig.name).toBe("Medeph kardiologická ambulancia");
    expect(siteConfig.location).toBe("Poliklinika Sabinov");
    expect(navigationItems.map((item) => item.label)).toEqual([
      "Služby",
      "Tím",
      "Ordinačné hodiny",
      "Galéria",
      "Kontakt",
    ]);
    expect(services).toHaveLength(4);
    expect(galleryItems).toHaveLength(3);
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```bash
npm run test -- src/lib/content.test.ts
```

Expected: FAIL because `src/lib/content.ts` does not exist.

- [ ] **Step 3: Add class name utility**

Write `src/lib/utils.ts`:

```ts
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
```

- [ ] **Step 4: Add the static content module**

Write `src/lib/content.ts`:

```ts
import {
  Activity,
  CalendarCheck,
  HeartPulse,
  MapPin,
  MonitorUp,
  Phone,
  Stethoscope,
  TimerReset,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const designTokens = {
  navy: "#0A1D37",
  red: "#E11D48",
  tertiary: "#301700",
  slate: "#64748B",
  surface: "#F8F9FF",
  card: "#FFFFFF",
  border: "#E2E8F0",
  text: "#0B1C30",
  muted: "#44474D",
} as const;

export const siteConfig = {
  name: "Medeph kardiologická ambulancia",
  shortName: "Medeph",
  location: "Poliklinika Sabinov",
  description:
    "Odborná kardiologická starostlivosť v modernom a pokojnom prostredí Polikliniky Sabinov.",
  primaryCta: "Objednať sa",
  secondaryCta: "Kde nás nájdete",
} as const;

export const navigationItems = [
  { label: "Služby", href: "#sluzby" },
  { label: "Tím", href: "#tim" },
  { label: "Ordinačné hodiny", href: "#ordinacne-hodiny" },
  { label: "Galéria", href: "#galeria" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "EKG vyšetrenie",
    description:
      "Základné neinvazívne vyšetrenie elektrickej aktivity srdca pri preventívnej aj cielenej diagnostike.",
    icon: Activity,
  },
  {
    title: "Echokardiografia",
    description:
      "Ultrazvukové vyšetrenie srdca zamerané na štruktúru, funkciu a celkový stav srdcového svalu.",
    icon: MonitorUp,
  },
  {
    title: "Preventívne kardiologické vyšetrenie",
    description:
      "Komplexné zhodnotenie rizikových faktorov a odporúčania pre dlhodobú starostlivosť o srdce.",
    icon: Stethoscope,
  },
  {
    title: "Holter EKG / tlakový Holter",
    description:
      "Dlhodobé monitorovanie rytmu srdca alebo krvného tlaku počas bežného dňa pacienta.",
    icon: TimerReset,
  },
];

export const doctors = [
  {
    name: "MUDr. Meno Priezvisko",
    role: "Kardiológia",
    image: "/images/diagnostics.svg",
  },
  {
    name: "MUDr. Meno Priezvisko",
    role: "Kardiologická starostlivosť",
    image: "/images/reception.svg",
  },
] as const;

export const openingHours = [
  { day: "Pondelok", hours: "00:00 - 00:00" },
  { day: "Utorok", hours: "00:00 - 00:00" },
  { day: "Streda", hours: "00:00 - 00:00" },
  { day: "Štvrtok", hours: "00:00 - 00:00" },
  { day: "Piatok", hours: "00:00 - 00:00" },
] as const;

export const galleryItems = [
  {
    title: "Vyšetrovacie prostredie",
    image: "/images/clinic-room.svg",
  },
  {
    title: "Diagnostické vybavenie",
    image: "/images/diagnostics.svg",
  },
  {
    title: "Recepcia a navigácia",
    image: "/images/reception.svg",
  },
] as const;

export const contact = {
  location: "Poliklinika Sabinov",
  addressLine: "Presná adresa bude doplnená",
  phone: "+421 XXX XXX XXX",
  email: "kontakt bude doplnený",
  iconLinks: [
    { label: "Telefón", value: "+421 XXX XXX XXX", icon: Phone },
    { label: "Lokalita", value: "Poliklinika Sabinov", icon: MapPin },
    { label: "Objednanie", value: "Po telefonickom dohovore", icon: CalendarCheck },
  ],
} as const;

export const heroStats = [
  { label: "EKG", value: "12", unit: "zvodov" },
  { label: "Holter", value: "24", unit: "hod." },
  { label: "Starostlivosť", value: "1:1", unit: "prístup" },
] as const;

export const footerLinks = navigationItems;
export const brandIcon = HeartPulse;
```

- [ ] **Step 5: Extend `globals.css` with reusable layout helpers**

Append these rules to `src/app/globals.css`:

```css
.section-shell {
  width: min(100% - 32px, 1280px);
  margin-inline: auto;
}

.section-padding {
  padding-block: clamp(48px, 8vw, 80px);
}

.focus-ring {
  outline: 2px solid transparent;
  outline-offset: 3px;
}

.focus-ring:focus-visible {
  outline-color: var(--red);
}
```

- [ ] **Step 6: Run the content test to verify it passes**

Run:

```bash
npm run test -- src/lib/content.test.ts
```

Expected: PASS for all three content tests.

- [ ] **Step 7: Run typecheck**

Run:

```bash
npm run typecheck
```

Expected: PASS with no TypeScript errors.

- [ ] **Step 8: Commit content layer**

Run:

```bash
git add src/lib/content.ts src/lib/content.test.ts src/lib/utils.ts src/app/globals.css
git commit -m "feat: add Medeph content model"
```

If `.git` is still read-only, use the fallback git-dir command from the Git Note with the same file list and commit message.

---

### Task 3: Local Visual Assets

**Files:**
- Create: `public/images/clinic-hero.svg`
- Create: `public/images/clinic-room.svg`
- Create: `public/images/diagnostics.svg`
- Create: `public/images/reception.svg`

- [ ] **Step 1: Create image directory**

Run:

```bash
mkdir -p public/images
```

Expected: `public/images/` exists.

- [ ] **Step 2: Create hero visual asset**

Write `public/images/clinic-hero.svg`:

```xml
<svg width="1200" height="900" viewBox="0 0 1200 900" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="900" rx="36" fill="#F8F9FF"/>
  <rect x="88" y="84" width="1024" height="732" rx="32" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="3"/>
  <rect x="158" y="158" width="884" height="224" rx="24" fill="#0A1D37"/>
  <path d="M218 270H360L400 214L468 330L526 238L574 270H688" stroke="#E11D48" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="868" cy="270" r="62" fill="#E11D48" fill-opacity=".18"/>
  <path d="M868 223C899 255 915 277 915 303C915 338 892 360 868 360C844 360 821 338 821 303C821 277 837 255 868 223Z" fill="#E11D48"/>
  <rect x="158" y="452" width="260" height="224" rx="24" fill="#F1F5F9"/>
  <rect x="470" y="452" width="260" height="224" rx="24" fill="#F1F5F9"/>
  <rect x="782" y="452" width="260" height="224" rx="24" fill="#F1F5F9"/>
  <circle cx="288" cy="540" r="48" fill="#0A1D37" fill-opacity=".12"/>
  <circle cx="600" cy="540" r="48" fill="#E11D48" fill-opacity=".14"/>
  <circle cx="912" cy="540" r="48" fill="#0A1D37" fill-opacity=".12"/>
  <rect x="224" y="620" width="128" height="14" rx="7" fill="#64748B" fill-opacity=".55"/>
  <rect x="536" y="620" width="128" height="14" rx="7" fill="#64748B" fill-opacity=".55"/>
  <rect x="848" y="620" width="128" height="14" rx="7" fill="#64748B" fill-opacity=".55"/>
</svg>
```

- [ ] **Step 3: Create gallery assets**

Write `public/images/clinic-room.svg`:

```xml
<svg width="900" height="650" viewBox="0 0 900 650" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="900" height="650" rx="28" fill="#FFFFFF"/>
  <rect x="60" y="70" width="780" height="500" rx="28" fill="#F8F9FF" stroke="#E2E8F0" stroke-width="3"/>
  <rect x="116" y="132" width="324" height="250" rx="22" fill="#E2E8F0"/>
  <rect x="488" y="132" width="250" height="156" rx="18" fill="#0A1D37"/>
  <path d="M526 212H586L608 178L638 246L666 194L690 212H724" stroke="#E11D48" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="116" y="430" width="622" height="28" rx="14" fill="#64748B" fill-opacity=".28"/>
  <rect x="116" y="482" width="426" height="22" rx="11" fill="#64748B" fill-opacity=".2"/>
</svg>
```

Write `public/images/diagnostics.svg`:

```xml
<svg width="900" height="650" viewBox="0 0 900 650" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="900" height="650" rx="28" fill="#F8F9FF"/>
  <rect x="80" y="82" width="740" height="486" rx="30" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="3"/>
  <rect x="140" y="142" width="620" height="210" rx="20" fill="#0A1D37"/>
  <path d="M184 248H292L324 196L370 304L418 224L452 248H552L582 216L616 280L650 248H716" stroke="#E11D48" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="140" y="410" width="168" height="84" rx="18" fill="#E11D48" fill-opacity=".14"/>
  <rect x="366" y="410" width="168" height="84" rx="18" fill="#0A1D37" fill-opacity=".1"/>
  <rect x="592" y="410" width="168" height="84" rx="18" fill="#0A1D37" fill-opacity=".1"/>
</svg>
```

Write `public/images/reception.svg`:

```xml
<svg width="900" height="650" viewBox="0 0 900 650" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="900" height="650" rx="28" fill="#FFFFFF"/>
  <rect x="74" y="78" width="752" height="494" rx="30" fill="#F8F9FF" stroke="#E2E8F0" stroke-width="3"/>
  <rect x="142" y="156" width="616" height="92" rx="20" fill="#0A1D37"/>
  <circle cx="220" cy="202" r="28" fill="#E11D48"/>
  <path d="M220 181V223M199 202H241" stroke="#FFFFFF" stroke-width="9" stroke-linecap="round"/>
  <rect x="142" y="326" width="616" height="118" rx="22" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="3"/>
  <rect x="184" y="372" width="196" height="18" rx="9" fill="#64748B" fill-opacity=".35"/>
  <rect x="184" y="410" width="112" height="14" rx="7" fill="#64748B" fill-opacity=".24"/>
  <rect x="586" y="358" width="118" height="54" rx="12" fill="#E11D48"/>
</svg>
```

- [ ] **Step 4: Verify assets are present**

Run:

```bash
ls public/images
```

Expected output includes:

```text
clinic-hero.svg
clinic-room.svg
diagnostics.svg
reception.svg
```

- [ ] **Step 5: Commit visual assets**

Run:

```bash
git add public/images/clinic-hero.svg public/images/clinic-room.svg public/images/diagnostics.svg public/images/reception.svg
git commit -m "feat: add local clinic visuals"
```

If `.git` is still read-only, use the fallback git-dir command from the Git Note with the same file list and commit message.

---

### Task 4: UI Primitives, Header, And Footer

**Files:**
- Create: `src/components/ui/button.tsx`
- Create: `src/components/ui/card.tsx`
- Create: `src/components/site-header.tsx`
- Create: `src/components/site-footer.tsx`

- [ ] **Step 1: Create button primitive**

Write `src/components/ui/button.tsx`:

```tsx
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "accent" | "ghost";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">;

const base =
  "focus-ring inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-3 text-sm font-extrabold transition duration-200";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-[#0A1D37] text-white shadow-[0_10px_30px_rgba(10,29,55,0.16)] hover:bg-[#132B4D]",
  secondary:
    "border border-[#0A1D37] bg-transparent text-[#0A1D37] hover:bg-[#0A1D37]/5",
  accent: "bg-[#E11D48] text-white shadow-[0_10px_30px_rgba(225,29,72,0.16)] hover:bg-[#BE123C]",
  ghost: "text-[#0A1D37] hover:bg-[#0A1D37]/6",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Link>
  );
}
```

- [ ] **Step 2: Create card primitive**

Write `src/components/ui/card.tsx`:

```tsx
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "rounded-lg border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_34px_rgba(10,29,55,0.07)]",
        className,
      )}
      {...props}
    />
  );
}
```

- [ ] **Step 3: Create sticky site header**

Write `src/components/site-header.tsx`:

```tsx
"use client";

import { HeartPulse, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navigationItems, siteConfig } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E2E8F0]/80 bg-white/92 backdrop-blur-xl">
      <div className="section-shell flex min-h-20 items-center justify-between gap-6">
        <Link href="#uvod" className="focus-ring flex items-center gap-3 rounded-lg">
          <span className="flex size-11 items-center justify-center rounded-lg bg-[#0A1D37] text-white">
            <HeartPulse aria-hidden="true" className="size-6" strokeWidth={2} />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold text-[#0A1D37]">{siteConfig.shortName}</span>
            <span className="hidden text-xs font-bold uppercase tracking-[0.08em] text-[#64748B] sm:block">
              Kardiologická ambulancia
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hlavná navigácia">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-lg px-3 py-2 text-sm font-bold text-[#0B1C30] hover:bg-[#0A1D37]/5"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <ButtonLink href="#kontakt" className="min-h-10 px-4 py-2">
            {siteConfig.primaryCta}
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Zatvoriť menu" : "Otvoriť menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="focus-ring inline-flex size-11 items-center justify-center rounded-lg border border-[#E2E8F0] text-[#0A1D37] lg:hidden"
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div className={cn("border-t border-[#E2E8F0] bg-white lg:hidden", isOpen ? "block" : "hidden")}>
        <nav className="section-shell flex flex-col gap-2 py-4" aria-label="Mobilná navigácia">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="focus-ring rounded-lg px-3 py-3 text-base font-bold text-[#0B1C30] hover:bg-[#0A1D37]/5"
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="#kontakt" onClick={() => setIsOpen(false)} className="mt-2">
            {siteConfig.primaryCta}
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
```

- [ ] **Step 4: Create footer**

Write `src/components/site-footer.tsx`:

```tsx
import { HeartPulse } from "lucide-react";
import Link from "next/link";
import { contact, footerLinks, siteConfig } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1D37] text-white">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-lg bg-white text-[#0A1D37]">
              <HeartPulse aria-hidden="true" className="size-6" />
            </span>
            <span className="text-xl font-extrabold">{siteConfig.name}</span>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-white/76">{siteConfig.description}</p>
        </div>

        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.08em] text-white/70">Navigácia</h2>
          <nav className="mt-4 grid gap-3" aria-label="Navigácia v pätičke">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="focus-ring rounded text-sm text-white/86 hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.08em] text-white/70">Kontakt</h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-white/86">
            <p>{contact.location}</p>
            <p>{contact.addressLine}</p>
            <p>{contact.phone}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/12">
        <div className="section-shell py-5 text-sm text-white/64">
          © {year} Medeph. Všetky práva vyhradené.
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 5: Verify UI primitive types**

Run:

```bash
npm run typecheck
```

Expected: PASS with no TypeScript errors.

- [ ] **Step 6: Commit UI shell**

Run:

```bash
git add src/components/ui/button.tsx src/components/ui/card.tsx src/components/site-header.tsx src/components/site-footer.tsx
git commit -m "feat: add site navigation and UI primitives"
```

If `.git` is still read-only, use the fallback git-dir command from the Git Note with the same file list and commit message.

---

### Task 5: Hero And Services Sections

**Files:**
- Create: `src/components/hero-section.tsx`
- Create: `src/components/services-section.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create hero section**

Write `src/components/hero-section.tsx`:

```tsx
import Image from "next/image";
import { Activity, ArrowRight, MapPin } from "lucide-react";
import { heroStats, siteConfig } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="uvod" className="overflow-hidden bg-[#F8F9FF]">
      <div className="section-shell grid min-h-[calc(100vh-80px)] items-center gap-12 py-12 lg:grid-cols-[1fr_0.92fr] lg:py-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-extrabold text-[#0A1D37] shadow-[0_10px_30px_rgba(10,29,55,0.06)]">
            <Activity aria-hidden="true" className="size-4 text-[#E11D48]" />
            Poliklinika Sabinov
          </div>

          <h1 className="mt-8 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0A1D37] sm:text-5xl lg:text-[64px]">
            Medeph kardiologická ambulancia
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#44474D] sm:text-xl">
            Odborná starostlivosť o vaše srdce v modernom a pokojnom prostredí Polikliniky Sabinov.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#kontakt" className="gap-2">
              {siteConfig.primaryCta}
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
            <ButtonLink href="#kontakt" variant="secondary" className="gap-2">
              <MapPin aria-hidden="true" className="size-4" />
              {siteConfig.secondaryCta}
            </ButtonLink>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-[#E2E8F0] bg-white p-4">
                <div className="text-3xl font-extralight tracking-[-0.04em] text-[#0A1D37]">{stat.value}</div>
                <div className="mt-1 text-xs font-extrabold uppercase tracking-[0.08em] text-[#64748B]">
                  {stat.label} · {stat.unit}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-10 -top-10 hidden h-48 w-48 rounded-full border border-[#E11D48]/20 lg:block" />
          <div className="relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-3 shadow-[0_22px_60px_rgba(10,29,55,0.12)]">
            <Image
              src="/images/clinic-hero.svg"
              alt="Ilustračný vizuál modernej kardiologickej ambulancie"
              width={1200}
              height={900}
              priority
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create services section**

Write `src/components/services-section.tsx`:

```tsx
import { services } from "@/lib/content";
import { Card } from "@/components/ui/card";

export function ServicesSection() {
  return (
    <section id="sluzby" className="section-padding bg-white">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.08em] text-[#E11D48]">Služby</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.01em] text-[#0A1D37] sm:text-4xl">
            Kardiologická diagnostika v prehľadnej forme
          </h2>
          <p className="mt-4 text-base leading-7 text-[#44474D]">
            Základné vyšetrenia a monitorovanie sú pripravené tak, aby bol postup pre pacienta zrozumiteľný a pokojný.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card key={service.title} className="relative overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-1 bg-[#E11D48]" />
                <div className="flex size-12 items-center justify-center rounded-lg bg-[#E11D48]/10 text-[#E11D48]">
                  <Icon aria-hidden="true" className="size-6" strokeWidth={2} />
                </div>
                <h3 className="mt-6 text-xl font-extrabold leading-7 text-[#0A1D37]">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#44474D]">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Compose sections temporarily**

Write `src/app/page.tsx`:

```tsx
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
      </main>
      <SiteFooter />
    </>
  );
}
```

- [ ] **Step 4: Verify hero and services compile**

Run:

```bash
npm run lint
npm run typecheck
```

Expected: both commands exit `0`.

- [ ] **Step 5: Commit hero and services**

Run:

```bash
git add src/components/hero-section.tsx src/components/services-section.tsx src/app/page.tsx
git commit -m "feat: add hero and services sections"
```

If `.git` is still read-only, use the fallback git-dir command from the Git Note with the same file list and commit message.

---

### Task 6: Team, Hours, Gallery, And Contact Sections

**Files:**
- Create: `src/components/team-section.tsx`
- Create: `src/components/opening-hours-section.tsx`
- Create: `src/components/gallery-section.tsx`
- Create: `src/components/contact-section.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create team section**

Write `src/components/team-section.tsx`:

```tsx
import Image from "next/image";
import { doctors } from "@/lib/content";
import { Card } from "@/components/ui/card";

export function TeamSection() {
  return (
    <section id="tim" className="section-padding bg-[#F8F9FF]">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.08em] text-[#E11D48]">Tím</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.01em] text-[#0A1D37] sm:text-4xl">
            Odborný tím s pokojnou komunikáciou
          </h2>
          <p className="mt-4 text-base leading-7 text-[#44474D]">
            Mená lekárov sú pripravené ako editovateľné hodnoty a budú doplnené podľa finálnych podkladov ambulancie.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {doctors.map((doctor, index) => (
            <Card key={`${doctor.name}-${index}`} className="p-4">
              <Image
                src={doctor.image}
                alt=""
                width={900}
                height={650}
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <div className="p-2 pt-5">
                <h3 className="text-xl font-extrabold text-[#0A1D37]">{doctor.name}</h3>
                <p className="mt-2 text-sm font-bold text-[#64748B]">{doctor.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create opening hours section**

Write `src/components/opening-hours-section.tsx`:

```tsx
import { Clock3 } from "lucide-react";
import { openingHours } from "@/lib/content";

export function OpeningHoursSection() {
  return (
    <section id="ordinacne-hodiny" className="section-padding bg-white">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.08em] text-[#E11D48]">Ordinačné hodiny</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.01em] text-[#0A1D37] sm:text-4xl">
            Prehľadný rozvrh pripravený na doplnenie
          </h2>
          <p className="mt-4 text-base leading-7 text-[#44474D]">
            Časy sú neutrálne editovateľné hodnoty, aby sa nezverejnil neoverený rozvrh ambulancie.
          </p>
        </div>

        <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8F9FF] p-4 shadow-[0_12px_34px_rgba(10,29,55,0.06)]">
          {openingHours.map((row) => (
            <div
              key={row.day}
              className="flex flex-col gap-2 border-b border-[#E2E8F0] py-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-white text-[#E11D48]">
                  <Clock3 aria-hidden="true" className="size-5" />
                </span>
                <span className="font-extrabold text-[#0A1D37]">{row.day}</span>
              </div>
              <span className="text-base font-extrabold text-[#64748B]">{row.hours}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create gallery section**

Write `src/components/gallery-section.tsx`:

```tsx
import Image from "next/image";
import { galleryItems } from "@/lib/content";

export function GallerySection() {
  return (
    <section id="galeria" className="section-padding bg-[#F8F9FF]">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.08em] text-[#E11D48]">Galéria</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.01em] text-[#0A1D37] sm:text-4xl">
              Čisté a pokojné medicínske prostredie
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#44474D]">
            Vizuály sú pripravené ako lokálne nahraditeľné assety pre finálne fotografie ambulancie.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {galleryItems.map((item) => (
            <figure key={item.title} className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_12px_34px_rgba(10,29,55,0.06)]">
              <Image
                src={item.image}
                alt={item.title}
                width={900}
                height={650}
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="p-5 text-sm font-extrabold text-[#0A1D37]">{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Create contact section**

Write `src/components/contact-section.tsx`:

```tsx
import { MapPin } from "lucide-react";
import { contact, siteConfig } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ContactSection() {
  return (
    <section id="kontakt" className="section-padding bg-white">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.08em] text-[#E11D48]">Kontakt</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.01em] text-[#0A1D37] sm:text-4xl">
            Nájdete nás v Poliklinike Sabinov
          </h2>
          <p className="mt-4 text-base leading-7 text-[#44474D]">
            Kontaktné údaje sú pripravené na doplnenie finálnym telefónnym číslom, presnou adresou a mapovým odkazom.
          </p>

          <div className="mt-8 grid gap-4">
            {contact.iconLinks.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex gap-4 rounded-lg border border-[#E2E8F0] bg-[#F8F9FF] p-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-white text-[#E11D48]">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <div>
                    <div className="text-xs font-extrabold uppercase tracking-[0.08em] text-[#64748B]">{item.label}</div>
                    <div className="mt-1 font-extrabold text-[#0A1D37]">{item.value}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <ButtonLink href={`tel:${contact.phone.replaceAll(" ", "")}`}>{siteConfig.primaryCta}</ButtonLink>
          </div>
        </div>

        <Card className="min-h-[420px] overflow-hidden p-0">
          <div className="flex h-full min-h-[420px] flex-col justify-between bg-[#0A1D37] p-8 text-white">
            <div>
              <div className="flex size-14 items-center justify-center rounded-xl bg-[#E11D48]">
                <MapPin aria-hidden="true" className="size-7" />
              </div>
              <h3 className="mt-8 text-2xl font-extrabold">{contact.location}</h3>
              <p className="mt-3 text-base leading-7 text-white/76">{contact.addressLine}</p>
            </div>

            <div className="mt-10 rounded-2xl border border-white/12 bg-white/8 p-5">
              <div className="text-xs font-extrabold uppercase tracking-[0.08em] text-white/60">Mapový blok</div>
              <p className="mt-3 text-sm leading-6 text-white/78">
                Sem sa doplní finálna mapa alebo odkaz na navigáciu po potvrdení presnej adresy.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Compose all sections**

Write `src/app/page.tsx`:

```tsx
import { ContactSection } from "@/components/contact-section";
import { GallerySection } from "@/components/gallery-section";
import { HeroSection } from "@/components/hero-section";
import { OpeningHoursSection } from "@/components/opening-hours-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TeamSection } from "@/components/team-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <TeamSection />
        <OpeningHoursSection />
        <GallerySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
```

- [ ] **Step 6: Verify sections compile**

Run:

```bash
npm run lint
npm run typecheck
```

Expected: both commands exit `0`.

- [ ] **Step 7: Commit remaining sections**

Run:

```bash
git add src/components/team-section.tsx src/components/opening-hours-section.tsx src/components/gallery-section.tsx src/components/contact-section.tsx src/app/page.tsx
git commit -m "feat: add clinic detail sections"
```

If `.git` is still read-only, use the fallback git-dir command from the Git Note with the same file list and commit message.

---

### Task 7: Final Styling Pass And Verification

**Files:**
- Modify: `src/app/globals.css`
- Test: full app verification

- [ ] **Step 1: Add reduced-motion and anchor offset styles**

Append to `src/app/globals.css`:

```css
section[id] {
  scroll-margin-top: 96px;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

- [ ] **Step 2: Check for rejected teal palette**

Run:

```bash
rg -n "20B2AA|006A65|76F3EA|teal|tyrkys" src package.json docs/superpowers/specs docs/superpowers/plans
```

Expected: no matches in `src/` or implementation files. It is acceptable if the design spec mentions teal only as the rejected design.

- [ ] **Step 3: Check for invented factual details**

Run:

```bash
rg -n "Ján|Anna|Novák|Kováčová|0800|090[0-9]|091[0-9]|094[0-9]" src
```

Expected: no matches.

- [ ] **Step 4: Run full verification**

Run:

```bash
npm run test
npm run lint
npm run typecheck
npm run build
```

Expected: all commands exit `0`.

- [ ] **Step 5: Start local dev server**

Run:

```bash
npm run dev
```

Expected: Next.js starts on `http://localhost:3000` or another available port. Keep the server running for visual inspection.

- [ ] **Step 6: Visual inspection checklist**

Open the running site and verify:

- Header is sticky and does not shift layout.
- Hero uses navy and red, not teal.
- Primary CTA text fits on mobile and desktop.
- Services show four cards.
- Doctor names remain `MUDr. Meno Priezvisko`.
- Opening hours remain neutral editable values.
- Contact phone remains `+421 XXX XXX XXX`.
- Desktop width around `1280px` keeps airy spacing.
- Mobile width stacks content without overlap.
- Footer is readable and uses navy background.

- [ ] **Step 7: Stop dev server**

Stop the `npm run dev` process with `Ctrl+C`.

Expected: no long-running dev server remains unless the user explicitly wants it running.

- [ ] **Step 8: Commit final polish**

Run:

```bash
git add src/app/globals.css
git commit -m "chore: polish responsive styling"
```

If `.git` is still read-only, use the fallback git-dir command from the Git Note with the same file list and commit message.

---

### Task 8: Completion Summary

**Files:**
- Review: all created files
- Test: final command outputs

- [ ] **Step 1: Review changed files**

Run:

```bash
git status --short
```

Expected: clean working tree, except `.codex/` may remain untracked and should not be committed.

If `.git` is still read-only, run:

```bash
git --git-dir=/tmp/cardio-webpage-dotgit-initial --work-tree=/home/adam/Projects/cardio-webpage status --short
```

Expected: clean working tree, except `.codex/` may remain untracked.

- [ ] **Step 2: Capture verification evidence**

Run:

```bash
npm run test
npm run lint
npm run typecheck
npm run build
```

Expected: all commands exit `0`.

- [ ] **Step 3: Prepare final implementation note**

Report these facts:

- The site uses the approved Stitch `Cardiology Design System`.
- The visible palette is `#0A1D37`, `#E11D48`, `#301700`, `#64748B`.
- Unknown clinic details remain neutral editable values.
- The app was verified with `npm run test`, `npm run lint`, `npm run typecheck`, and `npm run build`.
- The local URL if the dev server is left running.
