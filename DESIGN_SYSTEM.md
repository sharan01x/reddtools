# ReddTools Design System

> **Status:** DRAFT v0.1 — 2026-11-19. Values below are extracted from the live codebase
> (`src/styles/global.css`, `src/layouts/Layout.astro`, `ArticleLayout.astro`, page components),
> not invented. Gaps and discrepancies are marked ⚠️ for review.
>
> **Purpose:** Codify the "designed properly" differentiator. This spec is the source of truth
> for new tool pages, and the seed for the planned `/templates/` free design-kit section.

## 1. Principles

1. **Typography-first.** No decorative gradients or illustration; hierarchy is carried by type, weight, and space.
2. **Monochrome.** Black, whites, and greys everywhere; colour appears only as functional accent (focus, selection, status).
3. **Quiet precision.** 4px radii, hairline borders, 1–2px shadows. Nothing shouts.
4. **Mono as voice.** IBM Plex Mono uppercase micro-labels give the "technical instrument" character.
5. **No ad clutter.** Whitespace is the differentiator against calculator.net-style competitors.

## 2. Colour

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#f5f5f5` | Page background |
| `--color-surface` | `#ffffff` | Cards, panels |
| `--color-surface-dim` | `#ebebeb` | Inset surfaces |
| `--color-text` | `#000000` | Primary text |
| `--color-text-muted` | `#5b5b5b` | Secondary text |
| `--color-text-faint` | `#999999` | Micro-labels, captions |
| `--color-border` | `#d0d0d0` | Strong borders, scrollbar |
| `rgba(0,0,0,0.08)` | — | Default card border |
| `rgba(0,0,0,0.15)` | — | Card border + shadow on hover |
| `--color-cyan` | `#00c2ff` | Focus rings, selection tint ONLY |
| `--color-green` | `#0afa14` | Status/live indicators only |
| `--color-orange` | `#ff6400` | Warnings only |

⚠️ Rule from practice: cyan/green/orange are *not* brand colours. They appear in focus
(`box-shadow: 0 0 0 3px rgba(0,194,255,0.1)`), selection (`rgba(0,194,255,0.15)`), and status dots — never in headings, buttons, or marketing copy.

## 3. Typography

**Families (Google Fonts, loaded in `Layout.astro`):**
- Body/display: **Inter** — weights 400 / 500 / 600 only
- Mono: **IBM Plex Mono** — weights 400 / 500 only

**Type ramp:**

| Role | Font | Size | Weight | Notes |
|---|---|---|---|---|
| Hero title | Inter | `clamp(2.5rem, 6vw, 4rem)` | 400 | Lowercase |
| Article H1 | Inter | `clamp(1.8rem, 4.5vw, 2.6rem)` | 400 | |
| Section H2 | Inter | 26px | 500 | |
| Subhead H3 | Inter | 20px | 500 | |
| Body | Inter | 16px | 400 | `line-height: 1.5` |
| Lede / body-lg | Inter | 17–20px | 400/500 | |
| Small | Inter | 14px | 400 | |
| Micro-label | IBM Plex Mono | 11px | 500 | **Uppercase**, letter-spaced, `#999` |

Micro-labels are the signature move: eyebrow above hero, tool-card category tags, section kickers.

## 4. Spacing

| Token | Value |
|---|---|
| `--space-xs` | 4px |
| `--space-sm` | 12px |
| `--space-md` | 24px |
| `--space-lg` | 40px |
| `--space-xl` | 64px |

Card body padding 24px; card internal gap 8px; grid gap 16px; section rhythm multiples of 8.

## 5. Radius & Shadow

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 4px | Cards, inputs — the default |
| `--radius-md` | 8px | Larger panels |
| `--radius-lg` | 16px | Modals/feature panels |
| `--radius-full` | 9999px | Pills, status dots |

Shadows: resting `0 1px 2px rgba(0,0,0,0.06)`; hover `0 3px 8px rgba(0,0,0,0.15)`. Never larger — depth comes from borders, not shadows.

## 6. Layout

- Max content width: **1440px** container; article body ~680–720px.
- Tool grid: 1 col mobile → 2 cols ≥768px → 3 cols ≥1024px, 16px gap.
- Section structure: micro-label kicker → heading → lede → content.
- `scroll-behavior: smooth`; antialiased text.

## 7. Components

- **Tool card:** white surface, 4px radius, `rgba(0,0,0,0.08)` border, 120px icon well (`#f5f5f5` bg, 48px SVG icon), 24px body: title row → description → mono micro-label footer. Hover: border darkens to 0.15 + shadow lifts + title dims to 60%.
- **Buttons:** pill or 4px rect; black on white, no fills with accent colours. Hover = opacity/border change, not colour change.
- **Inputs:** 16px Inter, focus = cyan border + 3px cyan ring at 10% alpha.
- **Links:** inherit text colour; hover `opacity: 0.6` (site-wide rule).
- **Badges:** mono uppercase 11px with pulsing green dot (e.g. "7 TOOLS · MORE COMING").

## 8. Icons

Inline SVG, 48px in card wells, 16–20px inline. Stroke-based, currentColor, no multicolour. No icon font, no emoji.

## 9. Motion

| Token | Value | Use |
|---|---|---|
| `--transition-fast` | 150ms ease | Links, small hovers |
| `--transition-base` | 200ms ease | Cards, borders, shadows |

No entrance animations, no parallax, no springs. The pulsing status dot is the only looping motion.

## 10. Mobile

- Grid collapses to single column <768px.
- Hero clamps down to 2.5rem; lede to 17px.
- Tap targets ≥44px; hover states irrelevant — ensure focus-visible equivalents.

## 11. Accessibility

- Contrast: `#000` on `#f5f5f5` = ~19:1 ✓; `#5b5b5b` on white ≈ 7:1 ✓; ⚠️ `#999` micro-labels on white ≈ 2.8:1 — fails WCAG AA for body text; acceptable only as decorative/duplicated labels (verify each case).
- Focus: visible cyan ring on inputs; ⚠️ global link focus style not defined — rely on browser default. Recommend explicit `:focus-visible` treatment.
- Selection tint `rgba(0,194,255,0.15)` keeps text readable.

## 12. Reference / inspiration

- Technical Minimalism (Kodosumi system heritage — the CSS header still says this; the site has since drifted monochrome).
- Peer reference: Linear, Vercel docs typography; the anti-reference is calculator.net / rapidtables ad-clutter.

## 13. Known drift & open questions (review list)

1. ⚠️ `global.css` header comment still claims "cyan/green/orange accents + pill buttons" — stale vs. actual monochrome practice. Update comment or codify pills.
2. ⚠️ Older session notes referenced "Barlow 900 lowercase" hero — current code uses Inter 400. Confirm which is intended; Inter is what's live.
3. ⚠️ `#999` micro-label contrast — decorative-only rule needs confirming per Sharan.
4. ⚠️ No dark mode. The palette would translate trivially (invert surfaces) — decide if it's in scope.
5. Open: does this spec become the seed of the `/templates/` design-kit section (kit #1 = "Technical Minimalism")?
