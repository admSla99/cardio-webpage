# MEDEPH s.r.o. website

Presentation website for the MEDEPH s.r.o. cardiology and internal medicine outpatient clinic at Poliklinika Sabinov.

![Hero section](public/images/hero-screenshot.png)

## Tech stack

- Next.js 16
- React 19
- TypeScript
- CSS
- Sanity
- ESLint

## Development

```bash
npm install
npm run dev
```

## Content management

Notices, opening hours and contact details are edited in Sanity Studio at `/studio`.
Everything else lives in `src/lib/content.ts`, which also acts as the fallback when
Sanity is unreachable or not configured.

Setup instructions are in [docs/sanity-setup.md](docs/sanity-setup.md).

Create `.env.local` with the variables listed there, then load the initial content.

```bash
npm run sanity:seed
```

## Checks

```bash
npm run test
npm run typecheck
npm run lint
npm run build
```
