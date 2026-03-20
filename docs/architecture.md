# Architecture

## Overview

The app uses Next.js App Router with a small feature-oriented structure:

- `src/app`: route entries and global app shell
- `src/components`: reusable UI and homepage section composition
- `src/features`: route-level feature modules with internal subcomponents
- `src/content`: typed content/config source
- `src/lib`: domain data helpers and utilities

## Content and Data Boundaries

- `src/content/site-content.ts` contains editable site content and metadata.
- `src/lib/musical-moments-data.ts` contains typed moment media data and filter/sort helpers.
- Components should consume typed content/data instead of hardcoding repeated strings or URLs.

## Component Boundaries

- `components/common`: cross-section primitives (`BrandWordmark`, `SocialLinks`).
- `components/layout`: navigation/footer and app-level chrome pieces.
- `components/sections`: homepage sections only.
- `features/moments`: route-specific assembly (`MomentsPage`) and focused subcomponents:
  - `moments-header.tsx`
  - `moments-filters.tsx`
  - `moments-scroll-view.tsx`
  - `moments-grid-view.tsx`

## Naming Conventions

- File names use kebab-case (`video-gallery.tsx`, `moments-header.tsx`).
- Exported component names use PascalCase (`VideoGallery`, `MomentsHeader`).
- Keep route page files thin; move route logic to `features/*` when complexity grows.

## Styling and Motion

- Global tokens and shared utilities live in `src/app/globals.css`.
- Component-specific behavior should stay close to the component instead of adding broad global CSS.
- Respect `prefers-reduced-motion` for animated interactions.

## Theme

- Theme is initialized before hydration in `src/app/layout.tsx`.
- Runtime theme state is managed by `ThemeProvider`.
- `data-theme` on `<html>` drives day/night token switching.
