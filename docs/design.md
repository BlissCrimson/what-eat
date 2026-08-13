---
name: Culinara Minimal
colors:
  surface: "#fcf9f8"
  surface-dim: "#dcd9d9"
  surface-bright: "#fcf9f8"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f6f3f2"
  surface-container: "#f0eded"
  surface-container-high: "#eae7e7"
  surface-container-highest: "#e5e2e1"
  on-surface: "#1b1b1b"
  on-surface-variant: "#404943"
  inverse-surface: "#313030"
  inverse-on-surface: "#f3f0ef"
  outline: "#707973"
  outline-variant: "#bfc9c1"
  surface-tint: "#2c694e"
  primary: "#0f5238"
  on-primary: "#ffffff"
  primary-container: "#2d6a4f"
  on-primary-container: "#a8e7c5"
  inverse-primary: "#95d4b3"
  secondary: "#9b4500"
  on-secondary: "#ffffff"
  secondary-container: "#fc8a40"
  on-secondary-container: "#672c00"
  tertiary: "#474744"
  on-tertiary: "#ffffff"
  tertiary-container: "#5f5f5b"
  on-tertiary-container: "#dbd9d4"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#b1f0ce"
  primary-fixed-dim: "#95d4b3"
  on-primary-fixed: "#002114"
  on-primary-fixed-variant: "#0e5138"
  secondary-fixed: "#ffdbc9"
  secondary-fixed-dim: "#ffb68d"
  on-secondary-fixed: "#331200"
  on-secondary-fixed-variant: "#763300"
  tertiary-fixed: "#e4e2dd"
  tertiary-fixed-dim: "#c8c6c2"
  on-tertiary-fixed: "#1b1c19"
  on-tertiary-fixed-variant: "#474744"
  background: "#fcf9f8"
  on-background: "#1b1b1b"
  surface-variant: "#e5e2e1"
typography:
  headline-xl:
    fontFamily: Work Sans
    fontSize: 48px
    fontWeight: "700"
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Work Sans
    fontSize: 32px
    fontWeight: "600"
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Work Sans
    fontSize: 28px
    fontWeight: "600"
    lineHeight: 34px
  headline-md:
    fontFamily: Work Sans
    fontSize: 24px
    fontWeight: "600"
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  label-md:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: "600"
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: "500"
    lineHeight: 16px
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
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 20px
  margin-mobile: 20px
  margin-desktop: 120px
---

## Brand & Style

The design system is built on a philosophy of "Digital Gastronomy," where the UI serves as a clean, organized plate for content. It targets home cooks and food enthusiasts who appreciate efficiency and clarity.

The aesthetic is **Minimalist** with a focus on high-quality whitespace and structural rhythm. By removing imagery, the system relies on color theory and typographic hierarchy to evoke appetite and freshness. The goal is to create a calm, focused environment that reduces decision fatigue in food selection.

## Colors

The palette uses a "Garden to Table" logic. The primary green is deep and herbaceous, used for high-level branding and primary actions. The secondary orange is warm and citrus-inspired, reserved for highlights, nutritional callouts, and "appetite" accents.

The background uses a tertiary off-white to reduce eye strain and provide a more organic feel than pure white. Neutral tones are used strictly for text and subtle structural borders.

## Typography

This design system utilizes **Work Sans** across all levels to maintain a professional, utilitarian, yet friendly character.

- **Headlines:** Use tight letter spacing and heavy weights to create "visual weight" in the absence of images.
- **Labels:** Small labels use increased letter spacing and uppercase styling to denote metadata like cooking time or calorie counts.
- **Body:** Generous line-height is applied to ensure readability for ingredients and instructions.

## Layout & Spacing

The system employs a **fixed grid** model for desktop and a **fluid grid** for mobile.

- **Desktop:** A 12-column grid with a max-width of 1200px. Cards should typically span 4 columns (3-up) or 3 columns (4-up).
- **Mobile:** A single-column layout with 20px side margins.
- **Rhythm:** All vertical spacing must be a multiple of 8px. Use `lg` (48px) spacing between distinct sections and `md` (24px) for elements within a card or group.

## Elevation & Depth

Elevation is achieved through **ambient shadows** rather than hard borders. This creates a tactile, layered feel that suggests cards are "resting" on the surface.

- **Surface:** All cards use the `tertiary_color_hex` or pure white.
- **Shadows:** Use a very diffused, low-opacity shadow (e.g., `0px 10px 30px rgba(0,0,0,0.04)`).
- **Interactive Depth:** On hover or active states, the shadow should slightly deepen and the element should scale by 1-2% to provide physical feedback.

## Shapes

The shape language is consistently **Rounded**.

- **Cards & Modals:** Use `rounded-xl` (1.5rem) to evoke a friendly, approachable feel.
- **Buttons & Inputs:** Use `rounded-lg` (1rem) to maintain a cohesive look with the larger containers.
- **Small Elements:** Icons and color swatches should follow the `rounded` (0.5rem) base setting.

## Components

- **Recipe Cards:** The hero of the UI. Should feature a large `headline-md` title, a `secondary_color` accent for the "Freshness" tag, and a clear list of ingredients using `body-md`. No images; use geometric patterns or solid color fills if a placeholder is needed.
- **Primary Buttons:** Solid `primary_color_hex` fill with white text. High contrast is essential.
- **Chips:** Used for dietary filters (e.g., "Vegan," "Gluten-Free"). Use a light tint of the primary color with dark text; no borders.
- **Input Fields:** Minimalist design with a soft 1px border in a light neutral, which thickens and changes to the primary green on focus.
- **Ingredient Lists:** Use custom checkboxes that turn from a neutral outline to a solid green "check" to provide a sense of progress.
- **Progress Stepper:** A horizontal line with soft rounded nodes for multi-step food generation or cooking instructions.
