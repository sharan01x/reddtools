# ReddTools

Free online tools suite — designed properly, monetised through ads.

## Tech Stack

- **Framework:** Astro (static site generation)
- **Styling:** Tailwind CSS v4
- **Analytics:** PostHog
- **Monetisation:** Google AdSense
- **Deploy:** Cloudflare Pages (target), any static host works
- **Domain:** reddtools.com

## Project Structure

```
src/
├── layouts/
│   └── Layout.astro          # Shared layout: nav, ads, PostHog, footer
├── lib/
│   └── tools.ts              # Tool registry — all tool definitions
├── pages/
│   ├── index.astro           # Index page (lists all tools)
│   ├── calculator/
│   │   ├── index.astro       # Redirects to default mode
│   │   └── [mode].astro      # Calculator mode pages (one per mode)
│   └── [more tools...]
├── styles/
│   └── global.css            # Design system tokens + base styles
public/
└── favicon.svg
DESIGN_SYSTEM.md              # Design system doc (Sharan fills this out)
```

## Commands

```bash
npm run dev      # Local dev server
npm run build    # Production build → dist/
npm run preview  # Preview production build
```

## Adding a New Tool

1. Add tool definition to `src/lib/tools.ts`
2. Create page at `src/pages/[tool-slug].astro` (or `[tool-slug]/[mode].astro` for multi-mode)
3. Use `<Layout>` wrapper with `title`, `description`, `activeTool` props
4. Tool logic is client-side `<script>` — no server, no API

## Design System

See `DESIGN_SYSTEM.md` — fill it out and the values will be applied to `src/styles/global.css`.

## Keys Needed

- **PostHog:** Sign up at posthog.com, create a project, add key to `.env`
- **AdSense:** Apply after site is live, add publisher ID to `.env` and uncomment AdSense script in Layout