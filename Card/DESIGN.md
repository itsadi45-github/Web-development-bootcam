---
name: Alpine Ether
colors:
  surface: '#f9f9fc'
  surface-dim: '#dadadc'
  surface-bright: '#f9f9fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f6'
  surface-container: '#eeeef0'
  surface-container-high: '#e8e8ea'
  surface-container-highest: '#e2e2e5'
  on-surface: '#1a1c1e'
  on-surface-variant: '#41484c'
  inverse-surface: '#2f3133'
  inverse-on-surface: '#f0f0f3'
  outline: '#71787c'
  outline-variant: '#c0c7cc'
  surface-tint: '#346478'
  primary: '#0a4357'
  on-primary: '#ffffff'
  primary-container: '#2a5b6f'
  on-primary-container: '#a2d1e9'
  inverse-primary: '#9ecde5'
  secondary: '#815527'
  on-secondary: '#ffffff'
  secondary-container: '#ffc38c'
  on-secondary-container: '#7a4e21'
  tertiary: '#314140'
  on-tertiary: '#ffffff'
  tertiary-container: '#485858'
  on-tertiary-container: '#bccecd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bde9ff'
  primary-fixed-dim: '#9ecde5'
  on-primary-fixed: '#001f2a'
  on-primary-fixed-variant: '#184c60'
  secondary-fixed: '#ffdcbf'
  secondary-fixed-dim: '#f6bb84'
  on-secondary-fixed: '#2d1600'
  on-secondary-fixed-variant: '#663e12'
  tertiary-fixed: '#d4e6e5'
  tertiary-fixed-dim: '#b8cac9'
  on-tertiary-fixed: '#0e1e1e'
  on-tertiary-fixed-variant: '#3a4a49'
  background: '#f9f9fc'
  on-background: '#1a1c1e'
  surface-variant: '#e2e2e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 32px
  margin-desktop: 64px
  unit-xs: 4px
  unit-sm: 8px
  unit-md: 16px
  unit-lg: 24px
  unit-xl: 48px
---

## Brand & Style

This design system is built for high-end travel and nature exploration desktop applications. It embodies a **Modern Minimalist** aesthetic, heavily influenced by the serene, cool-toned atmosphere of alpine landscapes. The brand personality is professional yet breathy, prioritizing clarity and immersive imagery over dense UI.

Key characteristics include:
- **Serenity:** Expansive whitespace and a palette that feels cold but inviting.
- **Precision:** Clean, geometric typography and high-contrast labels.
- **Tactile Depth:** Subtle glassmorphism and soft shadows that mimic the layering of mountain mist and clear lake water.
- **Professionalism:** A balanced, systematic approach to layout that ensures trust and ease of navigation.

## Colors

The color palette is extracted from the Lago di Braies landscape, focusing on deep lake teals and warm mountain stone.

- **Primary (#2A5B6F):** A deep, glacial teal used for primary actions and brand emphasis.
- **Secondary (#D19A66):** An earthy ochre used sparingly for accents, highlights, or secondary interactive states.
- **Tertiary (#E0F2F1):** A very soft, minty-blue used for glassmorphic backgrounds and subtle container fills.
- **Neutral (#1A1C1E):** A near-black charcoal used for high-contrast text to ensure maximum readability against pale backgrounds.

The background should primarily use a "Snow" off-white (#F8FAFB) to maintain the clean, minimalist feel.

## Typography

The typography system utilizes **Inter** for its exceptional legibility and modern, neutral character. 

- **Headlines:** Feature tight letter-spacing and semi-bold weights to create a strong visual anchor.
- **Body Text:** Uses a generous line height (1.5x+) to ensure a comfortable reading experience during long-form travel narratives.
- **Labels:** Small caps or increased letter spacing should be used for metadata (e.g., categories, dates) to differentiate from body text.
- **Contrast:** Always use the Neutral color for headlines and a slightly lower opacity (80%) for body text to create hierarchy.

## Layout & Spacing

This design system employs a **Fixed Grid** philosophy for desktop to maintain a premium, editorial feel. 

- **Grid:** A 12-column grid with a 32px gutter. 
- **Margins:** Large 64px side margins are required to provide the "breathing room" essential to the minimalist aesthetic.
- **Vertical Rhythm:** Components should be separated by 48px or 64px blocks to prevent visual clutter.
- **Card Spacing:** Internal card padding is strictly 24px or 32px to ensure content does not feel cramped against the rounded edges.

## Elevation & Depth

Visual hierarchy is achieved through a combination of **Glassmorphism** and **Ambient Shadows**.

- **Surfaces:** Main content areas use a solid white background. Floating panels or navigation bars use a backdrop-blur (20px) with a semi-transparent white (80% opacity) fill.
- **Shadows:** Avoid harsh, dark shadows. Use extra-diffused, low-opacity shadows tinted with the Primary color (e.g., `rgba(42, 91, 111, 0.08)`).
- **Layers:** 
    - Level 0: Background (#F8FAFB)
    - Level 1: Standard Cards (Subtle 1px border #E2E8F0 + soft shadow)
    - Level 2: Modals and Popovers (Increased shadow blur + glassmorphism)

## Shapes

The shape language is modern and approachable.
- **Base Radius:** 16px (0.5rem) for standard components.
- **Large Radius (rounded-lg):** 32px (1rem) for main content cards and hero images.
- **Interactive Elements:** Buttons and tags should utilize the `rounded-xl` (pill) style to contrast against the more structured rectangular card containers.

## Components

### Buttons
- **Primary:** Pill-shaped, Primary color fill, white text. No shadow on idle; slight lift on hover.
- **Ghost:** Pill-shaped, Primary color border (1px), Primary color text. High-transparency teal background on hover.

### Cards
- Images must have a corner radius of 16px.
- The card container itself has a 24px radius and a very thin grey border or a soft ambient shadow.
- Content within cards must follow the 24px internal padding rule.

### Chips/Tags
- Small, pill-shaped elements with a light tertiary background (#E0F2F1) and Primary color text. 
- Used for categories like "Nature," "Hiking," or "Waterfront."

### Input Fields
- Subtle 1px border (#E2E8F0) with 8px corner radius.
- On focus, the border transitions to Primary color with a soft outer glow.

### Glassmorphic Header
- A fixed top navigation bar with a `backdrop-filter: blur(20px)` and a thin bottom border to separate it from the content while maintaining transparency.