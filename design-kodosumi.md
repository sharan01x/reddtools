---
version: alpha
name: Kodosumi
description: >-
  A distributed runtime for AI agents at enterprise scale, built on Ray. Kodosumi combines technical precision with a
  clean, minimalist interface that emphasizes clarity and performance.
logo:
  src: https://kodosumi.io/images/kodosumi-wordmark-black.webp
colors:
  surface: '#f5f5f5'
  surface-dim: '#ebebeb'
  surface-bright: '#ffffff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fafafa'
  surface-container: '#f5f5f5'
  surface-container-high: '#f0f0f0'
  surface-container-highest: '#e9ecef'
  on-surface: '#000000'
  on-surface-variant: '#5b5b5b'
  inverse-surface: '#1a1a1a'
  inverse-on-surface: '#f5f5f5'
  outline: '#999999'
  outline-variant: '#d0d0d0'
  surface-tint: '#00c2ff'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1a1a1a'
  on-primary-container: '#f5f5f5'
  inverse-primary: '#ffffff'
  secondary: '#00c2ff'
  on-secondary: '#000000'
  secondary-container: '#e0f7ff'
  on-secondary-container: '#003d52'
  tertiary: '#0afa14'
  on-tertiary: '#000000'
  tertiary-container: '#d4ffce'
  on-tertiary-container: '#002700'
  error: '#ff6400'
  on-error: '#ffffff'
  error-container: '#ffe0cc'
  on-error-container: '#331500'
  primary-fixed: '#0a0a0a'
  primary-fixed-dim: '#000000'
  on-primary-fixed: '#ffffff'
  on-primary-fixed-variant: '#f5f5f5'
  secondary-fixed: '#00c2ff'
  secondary-fixed-dim: '#0099cc'
  on-secondary-fixed: '#ffffff'
  on-secondary-fixed-variant: '#004d66'
  tertiary-fixed: '#0afa14'
  tertiary-fixed-dim: '#089c0f'
  on-tertiary-fixed: '#ffffff'
  on-tertiary-fixed-variant: '#004d00'
  background: '#f5f5f5'
  on-background: '#000000'
  surface-variant: '#e9ecef'
typography:
  display:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 74px
    letterSpacing: '-0.02em'
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: '-0.01em'
  headline-md:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: 0em
  title-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  container-max: 1440px
elevation:
  sm: 0 1px 2px rgba(0, 0, 0, 0.06)
  md: 0 3px 8px rgba(0, 0, 0, 0.15)
  lg: 0 8px 24px rgba(0, 0, 0, 0.12)
layout:
  containerMaxWidth: 1440px
  gridColumns: 12
components:
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.full}'
    padding: 10px 24px
    height: 40px
    fontWeight: '400'
    transition: background-color 200ms ease, opacity 200ms ease
  button-primary-hover:
    backgroundColor: rgba(0, 0, 0, 0.85)
    textColor: '{colors.on-primary}'
  button-secondary:
    backgroundColor: transparent
    textColor: '{colors.primary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.full}'
    padding: 10px 24px
    height: 40px
    border: 1px solid rgba(0, 0, 0, 0.1)
    transition: border-color 200ms ease, background-color 200ms ease
  button-secondary-hover:
    backgroundColor: transparent
    borderColor: rgba(0, 0, 0, 0.2)
    textColor: '{colors.primary}'
  card:
    backgroundColor: '{colors.surface-bright}'
    rounded: '{rounded.DEFAULT}'
    padding: 24px
    border: 1px solid rgba(0, 0, 0, 0.04)
    boxShadow: '{elevation.sm}'
  card-hover:
    backgroundColor: '{colors.surface-bright}'
    borderColor: rgba(0, 0, 0, 0.1)
    boxShadow: '{elevation.md}'
  input-field:
    backgroundColor: '{colors.surface-container-low}'
    textColor: '{colors.on-surface}'
    typography: '{typography.body-md}'
    rounded: '{rounded.DEFAULT}'
    padding: 12px 16px
    border: 1px solid {colors.outline-variant}
    height: 40px
  input-field-focus:
    borderColor: '{colors.secondary}'
    boxShadow: 0 0 0 3px rgba(0, 194, 255, 0.1)
  accent-badge-cyan:
    backgroundColor: transparent
    textColor: '{colors.secondary}'
    typography: '{typography.label-sm}'
    rounded: '{rounded.DEFAULT}'
    padding: 4px 8px
    fontSize: 11px
    fontFamily: monospace
    letterSpacing: 0.05em
  accent-badge-green:
    backgroundColor: transparent
    textColor: '{colors.tertiary}'
    typography: '{typography.label-sm}'
    rounded: '{rounded.DEFAULT}'
    padding: 4px 8px
    fontSize: 11px
    fontFamily: monospace
    letterSpacing: 0.05em
  accent-badge-orange:
    backgroundColor: transparent
    textColor: '{colors.error}'
    typography: '{typography.label-sm}'
    rounded: '{rounded.DEFAULT}'
    padding: 4px 8px
    fontSize: 11px
    fontFamily: monospace
    letterSpacing: 0.05em
  accent-dot:
    width: 8px
    height: 8px
    rounded: '{rounded.full}'
    opacity: '0.5'
  accent-dot-active:
    width: 8px
    height: 8px
    rounded: '{rounded.full}'
    opacity: '1'
  nav-link:
    textColor: '{colors.on-surface}'
    typography: '{typography.label-md}'
    padding: 0 15px
    height: 74px
    transition: color 200ms ease
  nav-link-hover:
    textColor: rgba(0, 0, 0, 0.6)
---

## Overview

Kodosumi is a distributed runtime platform for deploying and orchestrating AI agents at enterprise scale, built on Ray. The design system embodies "Technical Minimalism"—a philosophy that strips away decorative elements to expose the essential mechanics of distributed computing. The interface prioritizes clarity and precision: a near-white canvas (rgb(245, 245, 245)) provides breathing room, while three accent colors (cyan #00c2ff, green #0afa14, orange #ff6400) represent distinct operational states and system metrics. The brand personality is direct, confident, and engineering-focused—never verbose, always actionable. Example sentence: "Deploy locally, scale to 1,000+ nodes with Ray's distributed scheduler."

## Colors

The color system is built around a neutral-dominant foundation with three semantic accent colors that map to operational states. Primary (#000000) is the dominant text and button color, establishing authority and focus; it appears on all CTAs and navigation elements. Secondary (#00c2ff, cyan) represents scalability and real-time data flow—used for metric badges, progress indicators, and system-health visualizations. Tertiary (#0afa14, bright green) signals operational success and active monitoring—applied to status indicators and confirmation states. Error (#ff6400, orange) communicates warnings and non-critical alerts. The surface stack progresses from pure white (#ffffff, surface-bright) for elevated cards, through off-white (#f5f5f5, surface-container) for the page background, to light

## Typography

The type system uses Inter exclusively, with a deliberate weight hierarchy that avoids excessive boldness. Display and headline levels (64px, 40px, 28px) use fontWeight 400, creating an understated, technical aesthetic that contrasts with conventional SaaS design. Body text (16px–20px, fontWeight 400) maintains readability at arm's length while preserving the minimalist voice. Labels and badges (11px–14px, fontWeight 400–500) use monospace styling and 0.05em letter-spacing to evoke code and precision. Tracking is tightened at display sizes (-0.02em) to create visual density without sacrificing legibility. Apply text-shadow: 0 1px 2px rgba(0, 0, 0, 0.06) on small labels (11px) placed over light backgrounds to ensure 4.5:1 contrast compliance. Line-height is set to 1.15–1.31 for headlines (t

## Layout

The layout uses a 12-column grid with a max-width of 1440px, centered with symmetric padding (24px on mobile, 48px on desktop). The page rhythm is built on the 8px unit system: major section breaks use lg spacing (40px), card padding uses md spacing (24px), and internal element gaps use sm spacing (12px). The hero section anchors at pt-[140px] (accounting for the fixed header at 74px) and uses a centered, single-column composition for the headline and subheading, creating visual focus. The pillar cards (four-column grid on desktop, collapsing to two columns on tablet and single column on mobile) are separated by 16px gaps and use 6px padding internally. Container max-width is 1440px to accommodate large-screen displays without excessive line lengths. White-space is generous: the gap betwee

## Elevation & Depth

Depth is conveyed through subtle shadows and border treatments rather than color shifts. Level 1 (Base): the page background is flat rgb(245, 245, 245) with no shadow. Level 2 (Standard Card): white background (rgb(255, 255, 255)) with a 1px border at rgba(0, 0, 0, 0.04) and box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06), creating a barely-perceptible lift. Level 3 (Elevated/Hover): the same card on hover transitions to box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15) with border-color: rgba(0, 0, 0, 0.1), signaling interactivity. Modals and dropdowns use box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15) with a 1

## Shapes

The shape philosophy is "Functional Geometry"—rounded corners are applied sparingly and purposefully. Buttons use border-radius: 9999px (full pill shape) to signal primary actions and create a soft, approachable CTA despite the austere black color. Cards and inputs use border-radius: 4px (0.25rem, DEFAULT), a subtle rounding that feels technical and precise—not organic, but not harsh. Accent dots and badges use border-radius: 9999px to distinguish them from functional containers. The rationale: pill-shaped buttons stand out in the minimalist layout and are instantly recognizable as clickable;

## Components

### Action Elements
Buttons are the primary interaction pattern. Primary buttons (button-primary) use backgroundColor: rgb(0, 0, 0), textColor: rgb(255, 255, 255), padding: 10px 24px, height: 40px, border-radius: 9999px, and fontWeight: 400. On hover, backgroundColor transitions to rgba(0, 0, 0, 0.85) over 200ms (transition: background-color 200ms ease). Secondary buttons (button-secondary) use transparent background with a 1px border at rgba(0, 0, 0, 0.1), textColor: rgb(0, 0, 0), and the same padding and height. On hover, the border expands to rgba(0, 0, 0, 0.2) and background remains transparent. Both button variants use cursor: pointer and disable pointer-events: none when in a disabled state.

### Containers & Surfaces
Cards (card) use backgroundColor: rgb(255, 255, 255), rounded: 4px

## Do's and Don'ts

**Do**
- Do use the three accent colors (cyan #00c2ff, green #0afa14, orange #ff6400) consistently to represent system states—cyan for data flow, green for success, orange for warnings.
- Do apply subtle shadows (0 1px 2px rgba(0, 0, 0, 0.06) for cards, 0 3px 8px rgba(0, 0, 0, 0.15) for elevated surfaces) to create depth without visual clutter.
- Do use Inter fontWeight 400 for headlines and body text to maintain the minimalist, technical aesthetic—avoid bold weights except in labels and badges.
- Do maintain 24px padding on cards and 12px gaps between elements to preserve breathing room and prevent cognitive overload.
- Do use pill-shaped buttons (border-radius: 9999px) for primary CTAs to create visual distinction in the minimalist layout.

**Don't**
- Don't introduce new colors outside the defined palette—the three accents (cyan, green, orange) plus black/white are sufficient for all states.
- Don't use box-shadows with blur-radius > 24px; keep shadows restrained to maintain the technical, grounded aesthetic.
- Don't apply rounded corners > 4px to cards or inputs—sharp, precise geometry reinforces the engineering brand.
- Don't use fontWeight > 500 in body copy or headlines; the minimalist voice relies on weight restraint, not boldness.
- Don't add decorative gradients or textures to the background; the flat, neutral canvas is essential to the Technical Minimalism philosophy.
