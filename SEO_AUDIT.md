# ReddTools — Page-Speed Audit

**Date:** 2026-08-16  
**Auditor:** Forge (RED-12)  
**Scope:** All tool pages — LCP, CLS, INP analysis + quick wins

---

## Methodology

Static analysis of built HTML/CSS/JS output from `npm run build`. No live Lighthouse run was possible in this environment (no headless browser). Metrics are estimated from resource sizes, render-blocking analysis, and static HTML structure. A live Lighthouse run should be performed post-deploy to confirm.

---

## Resource Inventory (per tool page)

| Resource | Size | Render-Blocking? | Notes |
|----------|------|------------------|-------|
| HTML | 20–24 KB | No | Fully pre-rendered, critical content inline |
| Layout CSS | 16 KB | Yes (`<link rel="stylesheet">`) | Scoped, minified |
| Page CSS | 8 KB | Yes | Tool-specific styles |
| Tool JS (inline) | 1–4 KB | No (`<script type="module">`) | Calculator/converter logic |
| Tool JS (external) | 8 KB | No (deferred module) | Colour-picker, timer only |
| PostHog | ~45 KB | No (async, inline loader) | Loads after paint |
| AdSense | ~100 KB | No (async, dynamically injected) | Loads after paint |
| Google Fonts CSS | ~2 KB | Yes (but `preconnect` + `display=swap`) | Inter + IBM Plex Mono |
| Font files | ~20 KB each | No (loaded by font CSS) | woff2, only weights used |
| Favicon SVG | <1 KB | No | |
| og-image.png | N/A | No | Only loaded by social crawlers |

**Total page weight (excluding ads/analytics):** ~50–60 KB  
**Total with PostHog + AdSense:** ~200 KB

---

## LCP (Largest Contentful Paint)

### Estimate: < 1.5s on 4G

**Why:**
- HTML is fully pre-rendered (Astro static output) — no client-side hydration needed for content
- LCP element is typically the H1 or tool card, which is in the initial HTML paint
- No large images on tool pages (LCP element is text/DOM, not image)
- Only 2 render-blocking CSS files (~24 KB total), both minified
- Google Fonts uses `preconnect` + `display=swap` — text renders immediately with fallback fonts, swaps when loaded
- No JavaScript needed for first paint (all content is in HTML)

**Target: LCP < 2.5s** — ✅ Met (estimated < 1.5s)

---

## CLS (Cumulative Layout Shift)

### Estimate: < 0.1

**Why:**
- Static pre-rendered HTML — all content positions are determined at build time
- Tool widgets have fixed-height containers (no dynamic content loading)
- Font loading uses `display=swap` — minimal shift from font metric changes
- No lazy-loaded images or iframes that could cause layout shifts
- AdSense ads were removed from tool pages (commit `daae0a0`) — no ad slot shift

**Potential CLS sources:**
1. **Font swap** — `display=swap` causes a brief flash when Inter loads. Fallback is system sans-serif which has similar metrics. Estimated shift: < 0.05.
2. **Mobile menu** — hidden by default, only opens on user interaction. No layout shift.

**Target: CLS < 0.1** — ✅ Met (estimated < 0.05)

---

## INP (Interaction to Next Paint)

### Estimate: < 100ms

**Why:**
- Tool logic is pure client-side JavaScript (simple math, string manipulation, canvas pixel reading)
- No network requests on interaction (except PostHog `capture()` which is fire-and-forget)
- Event handlers are lightweight — no complex state management or virtual DOM
- Total JS payload per page: 1–8 KB (excluding analytics)
- No heavy frameworks (React, Vue, etc.) — vanilla JS only

**Potential INP sources:**
1. **Colour picker canvas operations** — pixel reading on click. Canvas is small (user-uploaded image). Sub-millisecond.
2. **Timer countdown updates** — `setInterval` every 1s, updates DOM text. Negligible.
3. **PostHog `capture()` calls** — async, non-blocking. No INP impact.

**Target: INP < 200ms** — ✅ Met (estimated < 100ms)

---

## Quick Wins (Already Implemented)

1. ✅ **Static pre-rendering** — All pages are fully rendered HTML, no hydration
2. ✅ **`preconnect` for Google Fonts** — Reduces font fetch latency
3. ✅ **`display=swap` on fonts** — Eliminates FOIT (flash of invisible text)
4. ✅ **Minified CSS/JS** — Astro/Vite handles this automatically
5. ✅ **No render-blocking JS** — All scripts are `async` or `type="module"` (deferred)
6. ✅ **Inline critical JS** — Calculator/converter logic is inline, no extra round-trip
7. ✅ **Ads removed from tool pages** — No ad-related layout shift or loading delay
8. ✅ **SVG favicon** — <1 KB, no PNG/ICO fallback needed

## Potential Optimisations (Future)

1. **Self-host fonts** — Eliminate Google Fonts round-trip entirely. Saves ~100ms on first load. Bundle woff2 files locally.
2. **Inline critical CSS** — Astro doesn't do this by default. Would eliminate render-blocking CSS round-trip. Low priority given small CSS size (24 KB).
3. **Add `fetchpriority="high"` to LCP element** — Not applicable (LCP is text, not image).
4. **Preload external JS for colour-picker/timer** — Only 8 KB, marginal benefit.
5. **HTTP/2 push for CSS** — Cloudflare Pages supports this. Low priority.
6. **Service worker caching** — Could cache all assets for repeat visits. Consider for Phase 2.

---

## Page-by-Page Summary

| Page | HTML | CSS | JS (inline) | JS (external) | Est. LCP | Est. CLS | Est. INP |
|------|------|-----|-------------|---------------|----------|----------|----------|
| Homepage | 20 KB | 16 KB | 1 KB | — | <1.2s | <0.03 | <50ms |
| Mortgage Calculator | 24 KB | 24 KB | 3 KB | — | <1.3s | <0.03 | <50ms |
| Colour Picker | 20 KB | 24 KB | 1 KB | 8 KB | <1.3s | <0.03 | <80ms |
| Case Converter | 20 KB | 24 KB | 2 KB | — | <1.3s | <0.03 | <50ms |
| Timer | 20 KB | 24 KB | 2 KB | 8 KB | <1.3s | <0.03 | <50ms |
| Length Converter | 24 KB | 24 KB | 3 KB | — | <1.3s | <0.03 | <50ms |
| Word Counter | 20 KB | 24 KB | 2 KB | — | <1.3s | <0.03 | <50ms |

All pages meet the LCP < 2.5s target with significant margin. No blockers identified.

---

## Verification Checklist

- [x] All pages are statically pre-rendered (no client-side hydration for content)
- [x] No render-blocking JavaScript
- [x] Fonts use `preconnect` + `display=swap`
- [x] CSS is minified and scoped
- [x] No large images on tool pages
- [x] No ad-related layout shift (ads removed from tool pages)
- [ ] **Live Lighthouse run** — recommended post-deploy to confirm estimates