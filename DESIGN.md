---
name: Luminous Tech
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#464554'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#767586'
  outline-variant: '#c7c4d7'
  surface-tint: '#494bd6'
  primary: '#4648d4'
  on-primary: '#ffffff'
  primary-container: '#6063ee'
  on-primary-container: '#fffbff'
  inverse-primary: '#c0c1ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#a12e70'
  on-tertiary: '#ffffff'
  tertiary-container: '#c0488a'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffd8e7'
  tertiary-fixed-dim: '#ffafd3'
  on-tertiary-fixed: '#3d0026'
  on-tertiary-fixed-variant: '#85145a'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Hanken Grotesk
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
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

This design system is built for high-growth technology platforms and creative tools. The brand personality is professional yet innovative, prioritizing clarity, airiness, and a premium "studio" feel. It balances technical precision with human-centric warmth through the use of soft light and vibrant accents.

The aesthetic direction is **Modern Minimalism with Glassmorphic Accents**. It leverages high-key values, generous whitespace, and subtle depth to guide the user's attention toward content and action. By utilizing light-mode transparency and soft blurs, the interface feels lightweight and responsive to the user's environment.

## Colors

The palette is anchored in a high-contrast foundation for maximum legibility and professional appeal.

- **Primary (Indigo):** A vibrant #6366F1 serves as the main interactive signal. On light backgrounds, it provides a strong, accessible focal point for primary actions.
- **Secondary (Mint):** Used for success states and secondary highlights, adding a fresh, energetic counterpoint to the Indigo.
- **Neutrals:** The system uses a Slate scale. Deep Slate (#0F172A) is reserved for high-level headings, while mid-range grays handle body copy and secondary metadata to maintain a soft hierarchy.
- **Surfaces:** The base background is a cool-toned white (#F8FAFC), while active surfaces use pure white (#FFFFFF) to pop forward.

## Typography

The typography strategy focuses on precision and readability. 

- **Hanken Grotesk** is used for headlines to provide a sharp, contemporary, and engineered feel. Its tight spacing and geometric construction lend the product an air of professional "tech" sophistication.
- **Inter** handles all body copy, chosen for its exceptional legibility and neutral character, ensuring that long-form content is easy to digest.
- **JetBrains Mono** is utilized for labels, metadata, and technical indicators. This monospaced touch reinforces the "Creative Tech" heritage of the design system.

Headings should use the darkest slate color, while body text should step down to a secondary gray to reduce visual fatigue.

## Layout & Spacing

The layout follows a **Fluid Grid** model based on an 8px square rhythm. 

- **Desktop:** 12-column grid with 24px gutters and wide 64px margins to create a focused, centered content area.
- **Tablet:** 8-column grid with 24px gutters.
- **Mobile:** 4-column grid with 16px gutters and 16px side margins.

Spacing should favor the larger end of the scale (lg and xl) between major sections to preserve the "airy" feel of the brand. Components use the `md` (16px) unit as the standard internal padding.

## Elevation & Depth

This design system avoids heavy shadows and dark containers. Depth is established through:

1.  **Tonal Stacking:** The background is #F8FAFC, while primary cards and containers are pure white (#FFFFFF).
2.  **Soft Shadows:** Active elements or floating panels use an "Ambient" shadow: `0px 4px 20px rgba(15, 23, 42, 0.05)`. This is a very subtle, low-opacity slate shadow that feels like natural light.
3.  **Glassmorphism:** Navigation bars, modal backdrops, and secondary overlays use a semi-transparent white (`rgba(255, 255, 255, 0.7)`) with a `blur(12px)` backdrop filter. This maintains context while providing a premium, translucent aesthetic.

## Shapes

The design system uses a consistent **8px (0.5rem)** radius for standard UI components. This "Rounded" setting provides a friendly, approachable look while maintaining enough structural rigor to feel professional.

- **Standard (8px):** Buttons, Input fields, and Small Cards.
- **Large (16px):** Main content containers and Modals.
- **Extra Large (24px):** Marketing sections or featured hero images.

## Components

- **Buttons:** Primary buttons use a solid Indigo (#6366F1) background with white text. Secondary buttons use a subtle ghost style with an Indigo border or a soft Mint tint for positive actions.
- **Input Fields:** Pure white background with a 1px border in a very light gray. On focus, the border transitions to Indigo with a soft 2px outer glow (glow color: `rgba(99, 102, 241, 0.15)`).
- **Cards:** Use a white surface, the standard 8px radius, and a 1px light gray border (#E2E8F0) instead of a heavy shadow to maintain the clean aesthetic.
- **Chips/Badges:** Small, uppercase labels using JetBrains Mono. Use soft pastel backgrounds (e.g., light indigo or light mint) with high-contrast text.
- **Lists:** Clean rows separated by thin 1px lines (#F1F5F9). Interaction states (hover) should use a very subtle gray tint (#F8FAFC).
- **QR Previews:** Displayed on a pure white "stage" with the Ambient shadow to give the impression of a physical card or asset being generated.