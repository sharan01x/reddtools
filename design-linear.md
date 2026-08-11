---
version: alpha
name: Linear
description: >-
  A purpose-built product development system for teams and AI agents, combining austere dark minimalism with precise,
  technical typography and surgical accent colors.
logo:
  src: https://linear.app/static/favicon.svg?v=2
colors:
  surface: '#08090a'
  surface-dim: '#050607'
  surface-bright: '#1a1b1d'
  surface-container-lowest: '#000000'
  surface-container-low: '#0f1012'
  surface-container: '#161819'
  surface-container-high: '#232528'
  surface-container-highest: '#2e3135'
  on-surface: '#f7f8f8'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#f7f8f8'
  inverse-on-surface: '#08090a'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#4354b8'
  primary: '#4354b8'
  on-primary: '#ffffff'
  primary-container: '#5a66d2'
  on-primary-container: '#f7f8f8'
  inverse-primary: '#8a92ff'
  secondary: '#e5591d'
  on-secondary: '#ffffff'
  secondary-container: '#f07a3a'
  on-secondary-container: '#08090a'
  tertiary: '#55cdff'
  on-tertiary: '#08090a'
  tertiary-container: '#7dd9ff'
  on-tertiary-container: '#000000'
  error: '#eb5757'
  on-error: '#ffffff'
  error-container: '#ff7a7a'
  on-error-container: '#08090a'
  primary-fixed: '#8a92ff'
  primary-fixed-dim: '#5a66d2'
  on-primary-fixed: '#08090a'
  on-primary-fixed-variant: '#2e3449'
  secondary-fixed: '#ff9966'
  secondary-fixed-dim: '#f07a3a'
  on-secondary-fixed: '#08090a'
  on-secondary-fixed-variant: '#3d2817'
  tertiary-fixed: '#7dd9ff'
  tertiary-fixed-dim: '#55cdff'
  on-tertiary-fixed: '#08090a'
  on-tertiary-fixed-variant: '#1a3d47'
  background: '#08090a'
  on-background: '#f7f8f8'
  surface-variant: '#2e3135'
typography:
  display:
    fontFamily: Inter Variable, SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif
    fontSize: 64px
    fontWeight: '510'
    lineHeight: 72px
    letterSpacing: '-0.02em'
  headline-lg:
    fontFamily: Inter Variable, SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif
    fontSize: 40px
    fontWeight: '510'
    lineHeight: 48px
    letterSpacing: '-0.01em'
  headline-md:
    fontFamily: Inter Variable, SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
    letterSpacing: 0em
  title-lg:
    fontFamily: Inter Variable, SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter Variable, SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter Variable, SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter Variable, SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif
    fontSize: 14px
    fontWeight: '510'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter Variable, SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif
    fontSize: 13px
    fontWeight: '510'
    lineHeight: 18px
    letterSpacing: 0.02em
rounded:
  sm: 4px
  DEFAULT: 6px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  unit: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  container-max: 1024px
elevation:
  sm: 0 1px 2px rgba(0, 0, 0, 0.06)
  md: 0 4px 12px rgba(0, 0, 0, 0.1)
  lg: 0 16px 40px rgba(0, 0, 0, 0.15)
layout:
  containerMaxWidth: 1024px
  gridColumns: 12
components:
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.full}'
    padding: 8px 16px
    height: 40px
    border: none
  button-primary-hover:
    backgroundColor: '{colors.primary-container}'
    textColor: '{colors.on-primary-container}'
    transition: background-color 200ms ease
  button-secondary:
    backgroundColor: '{colors.surface-container-high}'
    textColor: '{colors.on-surface}'
    typography: '{typography.label-md}'
    rounded: '{rounded.full}'
    padding: 8px 16px
    height: 40px
    border: 1px solid {colors.outline-variant}
  button-secondary-hover:
    backgroundColor: '{colors.surface-container-highest}'
    transition: background-color 200ms ease
  button-ghost:
    backgroundColor: rgba(255, 255, 255, 0.04)
    textColor: '{colors.on-surface-variant}'
    typography: '{typography.label-sm}'
    rounded: '{rounded.DEFAULT}'
    padding: 6px 12px
    height: 32px
    border: none
  button-ghost-hover:
    backgroundColor: rgba(255, 255, 255, 0.08)
    transition: background-color 150ms ease
  card:
    backgroundColor: '{colors.surface-container}'
    textColor: '{colors.on-surface}'
    rounded: '{rounded.lg}'
    padding: '{spacing.md}'
    border: 1px solid {colors.outline-variant}
    boxShadow: '{elevation.md}'
  card-hover:
    backgroundColor: '{colors.surface-container-high}'
    boxShadow: '{elevation.lg}'
    transition: background-color 200ms ease, box-shadow 200ms ease
  input-field:
    backgroundColor: '{colors.surface-container-low}'
    textColor: '{colors.on-surface}'
    typography: '{typography.body-md}'
    rounded: '{rounded.DEFAULT}'
    padding: '{spacing.sm}'
    border: 1px solid {colors.outline-variant}
    height: 40px
  input-field-focus:
    borderColor: '{colors.primary}'
    boxShadow: 0 0 0 2px rgba(67, 84, 184, 0.1)
    transition: border-color 200ms ease, box-shadow 200ms ease
  list-item:
    backgroundColor: transparent
    textColor: '{colors.on-surface}'
    rounded: '{rounded.md}'
    padding: '{spacing.sm}'
    transition: background-color 150ms ease
  list-item-hover:
    backgroundColor: '{colors.surface-container-high}'
    textColor: '{colors.primary}'
  badge:
    backgroundColor: '{colors.tertiary-container}'
    textColor: '{colors.on-tertiary-container}'
    typography: '{typography.label-sm}'
    rounded: '{rounded.full}'
    padding: 4px 8px
    height: 24px
    display: inline-flex
    alignItems: center
  badge-accent:
    backgroundColor: '{colors.secondary-container}'
    textColor: '{colors.on-secondary-container}'
  badge-error:
    backgroundColor: '{colors.error-container}'
    textColor: '{colors.on-error-container}'
  divider:
    backgroundColor: '{colors.outline-variant}'
    height: 1px
    margin: '{spacing.md} 0'
  modal-overlay:
    backgroundColor: rgba(0, 0, 0, 0.6)
    backdropFilter: blur(4px)
  modal-content:
    backgroundColor: '{colors.surface-container}'
    textColor: '{colors.on-surface}'
    rounded: '{rounded.xl}'
    padding: '{spacing.lg}'
    boxShadow: '{elevation.lg}'
    border: 1px solid {colors.outline-variant}
---

## Overview

Linear is a purpose-built product development system engineered for teams and AI agents, embodying a design philosophy rooted in **Austere Technical Minimalism**—a movement that strips away ornament to expose pure function, where every pixel serves operational clarity. The brand personality is precise, uncompromising, and forward-looking: the UI communicates through restraint (deep near-black surfaces #08090a, surgical accent colors #4354b8 and #e5591d), creating an environment where product builders focus entirely on execution. The emotional response is one of control and velocity—users feel they are operating a finely-tuned instrument, not navigating a decorated interface.

Voice and vocabulary reflect this ethos: Linear speaks in imperative, technical language without breathlessness or marketing flourish. Example: "Render UI before vehicle_state sync when minimum required state is present, instead of blocking on full refresh during iOS startup." The tone is direct, the sentences are active, and complexity is never hidden behind simplification. Typography uses Inter Variable at precise weights (510 for emphasis, 400 for body), maintaining optical consistency across scales from 13px labels to 64px headlines. The brand trusts its audience to understand product depth.

## Colors

Linear's color system operates on a principle of **surgical contrast**: a near-black canvas (#08090a, #050607 for surface-dim) provides the stage, while three accent colors deliver specific semantic meaning. Primary (#4354b8, a deep periwinkle) is reserved for interactive elements—buttons, links, focus states—and appears sparingly to maintain its authority. Secondary (#e5591d, a warm orange-red) signals urgency, warnings, or secondary CTAs, creating visual tension against the cool primary. Tertiary (#55cdff, a bright cyan) is used for success states, highlights, and data visualization accents. The on-surface palette (#f7f8f8 for text, #c4c7c8 for secondary text) is calibrated for WCAG AAA contrast on the dark background (contrast ratio 15.2:1 for body text). Surface containers (#161819 for

## Typography

The type system is built on Inter Variable, a font engineered for screen legibility at all scales, paired with system fallbacks (SF Pro Display, Segoe UI) for platform consistency. Display (64px, weight 510) anchors hero sections with tight leading (72px) and -0.02em letter-spacing, creating a sense of density and authority. Headline-lg (40px, weight 510) and headline-md (28px, weight 500) establish section hierarchy without decorative variation. Body text (16px, weight 400, 24px line-height) is set with 0em letter-spacing for maximum legibility; at smaller scales (label-sm at 13px), letter-spacing increases to 0.02em to maintain optical clarity. The weight progression (400 for body, 510 for labels and emphasis) is deliberate: 510 is Linear's signature weight, neither bold nor regular, cre

## Layout

Linear uses a 12-column grid with a fixed container max-width of 1024px, centered on viewport. The spacing scale (unit: 8px, increments: xs 4px, sm 12px, md 24px, lg 40px, xl 64px) is applied consistently: section separation uses lg (40px), card padding uses md (24px), and internal element spacing uses sm (12px). The gutter (24px) is applied symmetrically on desktop, collapsing to sm (12px) on mobile. White-space is treated as a structural element, not a luxury: negative space around interactive elements (buttons, inputs) is never less than sm (12px), ensuring touch targets remain at least 40px in height and 44px in width for accessibility. The layout philosophy rejects full-width sections; instead, content is constrained to 1024px to maintain reading rhythm and prevent line-length bloat.

## Elevation & Depth

Depth in Linear is achieved through a restrained shadow and border system, not through color gradation. Level 1 (base surface, #08090a) has no shadow; it is the canvas. Level 2 (standard cards, surface-container #161819) uses a 1px solid border at rgba(0,0,0,0.2) and box-shadow: 0 4px 12px rgba(0,0,0,0.1), creating subtle separation without visual noise. Level 3 (elevated modals, surface-container-high #232528) increases the shadow to box-shadow: 0 16px 40px rgba(0,0,0,0.15) and maintains the 1px border, signaling modal prominence. Interactive hover states transition shadows smoothly (200ms ea

## Shapes

Linear's shape philosophy is **Geometric Precision**: rounded corners are used functionally, not decoratively, to signal interactive affordance and reduce visual harshness without sacrificing technical clarity. Buttons use full (9999px) border-radius, creating pill-shaped CTAs that are unmistakably clickable; this is the most rounded element in the system, reserved for primary actions. Standard cards and containers use lg (12px) border-radius, a subtle curve that softens edges while maintaining architectural clarity. Input fields and secondary components use DEFAULT (6px) border-radius, a mini

## Components

### Action Elements
Buttons are the primary interaction primitive. button-primary uses {colors.primary} (#4354b8) background, {colors.on-primary} (white) text, label-md typography (14px, weight 510), full border-radius (9999px), and 8px 16px padding, resulting in a 40px height. On hover, button-primary-hover transitions to {colors.primary-container} (#5a66d2) over 200ms ease, providing clear feedback without animation excess. button-secondary uses a transparent background with a 1px border at {colors.outline-variant}, maintaining visual hierarchy while offering alternative actions. button-ghost is a minimal variant with rgba(255,255,255,0.04) background and label-sm typography (13px), used for tertiary actions; on hover, background increases to rgba(255,255,255,0.08) over 150ms ease. All b

## Do's and Don'ts

**Do**
- Do use primary (#4354b8) exclusively for primary CTAs, focus states, and key interactive elements—never for decorative accents or backgrounds.
- Do maintain the 40px minimum button height and 44px minimum touch target across all interactive elements to ensure accessibility.
- Do apply transitions over 150–200ms (e.g., background-color 200ms ease) for all interactive state changes to signal responsiveness without animation excess.
- Do use the full rounded-radius (9999px) only for buttons; use lg (12px) for cards and DEFAULT (6px) for inputs to maintain shape hierarchy.
- Do constrain content to the 1024px container max-width and use lg spacing (40px) for section separation to maintain reading rhythm.
- Do apply the 1px border at rgba(0,0,0,0.2) to all elevated surfaces (cards, modals) to define edges without relying on shadows alone.

**Don't**
- Don't use secondary (#e5591d) or tertiary (#55cdff) for primary CTAs—these are reserved for secondary actions, warnings, and status indicators.
- Don't apply rounded corners greater than lg (12px) to cards or containers; full radius is reserved for buttons only.
- Don't use box-shadow alone to create depth; always pair shadows with a 1px border to maintain architectural clarity.
- Don't animate transitions longer than 200ms or use easing functions other than ease or ease-in-out; Linear's motion is precise, not playful.
- Don't exceed the 1024px container max-width or apply asymmetrical gutters; consistency is a core brand value.
- Don't use decorative gradients, blur effects (except modal overlays), or glassmorphism on standard surfaces—these dilute the austere technical aesthetic.
