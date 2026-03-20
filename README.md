# SlunShine

Personal website for Alexandrina "Ally" Kushinchanova, built with Next.js App Router.

## Stack

- Next.js 15
- React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Requirements

- Node.js `22.x` (see `package.json` engines)
- npm

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

```bash
npm run dev      # local dev server
npm run lint     # eslint checks
npm run build    # production build
npm run start    # run production server
npm run format   # eslint --fix
```

## Project Structure

```txt
src/
  app/
    page.tsx
    moments/page.tsx
    layout.tsx
    globals.css
  components/
    common/          # shared UI primitives (brand, social links)
    layout/          # navigation/footer
    providers/       # theme provider
    sections/        # homepage sections
  content/
    site-content.ts  # typed, centralized site copy + links + metadata
  features/
    moments/         # route-level moments feature and subcomponents
  lib/
    musical-moments-data.ts
    utils.ts
```

## Content Model

`src/content/site-content.ts` is the single source of truth for:

- SEO metadata
- navigation items
- social/contact links
- section copy
- music releases and video items
- lessons offerings and repeated labels

## Notes

- Theme is persisted in `localStorage` and hydrated with a small pre-hydration script in `layout.tsx`.
- No environment variables are required for the current setup.
- Static assets live in `public/images` and `public/videos`.

## Documentation

Architecture details: [docs/architecture.md](docs/architecture.md)
