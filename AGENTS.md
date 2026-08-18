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

## Browser Automation (Chrome CDP)

Some tasks require driving a real Chrome browser (e.g., Indie Hackers posting, social media interactions). Use the dedicated Chrome profile for ReddTools:

### Launch Chrome Instance

```bash
# Terminal command — run this first before any browser automation
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --user-data-dir="/Users/sharan/Library/Application Support/Google/Chrome-reddtools" \
  --remote-debugging-port=9222 \
  --no-first-run \
  --no-default-browser-check \
  --remote-allow-origins="*"
```

Or use the helper script:
```bash
~/Documents/Code/reddtools/scripts/launch-chrome.sh
```

### Drive the Browser via `browser_exec`

Once Chrome is running, use the `browser_exec` tool to drive it. The Browser Use CLI connects to the CDP endpoint automatically.

**NEVER type URLs into the address bar.** Use the pre-imported helpers:

| Helper | Purpose |
|--------|---------|
| `new_tab(url)` | Navigate to a URL (opens new tab) |
| `goto_url(url)` | Navigate current tab to URL |
| `wait_for_load()` | Wait for page load |
| `page_info()` | Get page state (URL, title, text summary) |
| `js(expr)` | Evaluate JavaScript in page |
| `fill_input(selector, text)` | Type into an input field |
| `click_at_xy(x, y)` | Click at viewport coordinates |

Example:
```python
new_tab("https://www.indiehackers.com")
wait_for_load()
page_info()
js("document.querySelector('h1').textContent")
```

### Accounts Logged In

- **Indie Hackers:** ReddTools account is logged in (colour picker added to profile)
- **Reddit:** u/reddtools (warm-up until ~Sep 12, 2026 — do NOT post before then)

### Key Files

| File | Purpose |
|------|---------|
| `scripts/launch-chrome.sh` | Launch dedicated Chrome profile for ReddTools |
| `scripts/indie-hackers-post.sh` | Example: post a comment on Indie Hackers |
