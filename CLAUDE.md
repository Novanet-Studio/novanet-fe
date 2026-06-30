# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # dev server at http://localhost:3000
pnpm build      # production build
pnpm generate   # static site generation
pnpm preview    # preview production build
```

No test runner is configured. No lint script is defined, but `@nuxt/eslint` is installed.

## Stack

Nuxt 4 + Vue 3 + TypeScript + Tailwind CSS + Strapi (GraphQL) + motion-v (animations).

Images are served via Cloudinary (`@nuxt/image`). Icons via `@nuxt/icon` with Iconify (fa6-brands, fa7-solid, material-symbols). PWA via `@vite-pwa/nuxt`. Analytics via `nuxt-gtag` + Meta Pixel (`plugins/metaPixel.client.ts`).

## Architecture

### Page → Section pattern

Every page (e.g. `app/pages/index.vue`) declares its content as a typed array of `CommonSectionProps` objects, then renders them in one call: `<CommonSection :content="..." />`.

`CommonSection` (`app/components/common/Section.vue`) loops the array and renders each item as a `<section>` with Tailwind color/layout props, optional animated hero images, `CompositeVisual` (multi-layer images), `EmblemBackground`, `CommonForm`, `CommonTabs`, and `CommonList` — all driven by flags in the props object, not by conditional template logic in the page.

Adding or editing page content = editing the data array in the page file. No new components needed unless a genuinely new layout type is required.

### Section animation system

`useSectionObserver` (singleton via `useState`) uses `IntersectionObserver` to track which sections have entered the viewport. `hasBeenAnimated(sectionId)` gates every `<Motion>` element inside `CommonSection`. Call `initObserver()` in `onMounted` + `nextTick` on each page that uses sections.

### Data layer (Strapi + GraphQL)

All CMS queries live in `app/schemas/blog-queries.ts` and `app/schemas/portafolio-queries.ts` as plain template-literal strings. Composables (`useBlog`, `usePortfolio`) call `useStrapiGraphQL()` from `@nuxtjs/strapi` and return `{ status, message, data }`. Strapi URL is set via `STRAPI_URL` env var.

### Types

`app/types/index.ts` defines the shared interfaces:

- `CommonSectionProps<SectionName>` — the main page-content type
- `VisualLayer` — one layer in a `CompositeVisual` stack (image or shape, with z-index and motion-v animation config)
- `EmblemAnimation` — animated brand emblem overlays
- `COLORS_MAP_KEYS` — the design-system palette tokens

### Tailwind design tokens

Custom palette defined in `tailwind.config.ts` and also exposed as CSS vars on `:root`:

| Token          | Hex       |
| -------------- | --------- |
| `oxfordBlue`   | `#001933` |
| `azure`        | `#007FFF` |
| `columbiaBlue` | `#CCE5FF` |
| `raspberry`    | `#DF1F5B` |
| `chartreuse`   | `#D6F630` |
| `eerieBlack`   | `#212529` |
| `cadetGray`    | `#959CA4` |

Custom breakpoints extend Tailwind's defaults: `3xs` (375px), `2xs` (390px), `xs` (430px), plus `portrait`, `landscape`, and `portrait-lg` media query variants.

### Env vars

| Variable        | Purpose                |
| --------------- | ---------------------- |
| `STRAPI_URL`    | Strapi CMS base URL    |
| `META_PIXEL_ID` | Facebook/Meta Pixel ID |
