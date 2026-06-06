---
name: Neon Synthwave
colors:
  surface: '#0d1515'
  surface-dim: '#0d1515'
  surface-bright: '#333b3b'
  surface-container-lowest: '#080f10'
  surface-container-low: '#151d1e'
  surface-container: '#192122'
  surface-container-high: '#232b2c'
  surface-container-highest: '#2e3637'
  on-surface: '#dce4e4'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#dce4e4'
  inverse-on-surface: '#2a3232'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dbe7'
  primary: '#e1fdff'
  on-primary: '#00363a'
  primary-container: '#00f2ff'
  on-primary-container: '#006a71'
  inverse-primary: '#00696f'
  secondary: '#ffabf3'
  on-secondary: '#5b005b'
  secondary-container: '#fe00fe'
  on-secondary-container: '#500050'
  tertiary: '#f7f7ff'
  on-tertiary: '#002e6a'
  tertiary-container: '#cddbff'
  on-tertiary-container: '#005cc5'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#74f5ff'
  primary-fixed-dim: '#00dbe7'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#ffd7f5'
  secondary-fixed-dim: '#ffabf3'
  on-secondary-fixed: '#380038'
  on-secondary-fixed-variant: '#810081'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#0d1515'
  on-background: '#dce4e4'
  surface-variant: '#2e3637'
typography:
  display-lg:
    fontFamily: sora
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: sora
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: sora
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  hud-label:
    fontFamily: jetbrainsMono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.1em
  body-sm:
    fontFamily: spaceGrotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  button-text:
    fontFamily: sora
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 12px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style
The design system embodies a high-velocity, neon-drenched aesthetic tailored for a synthwave-inspired arcade experience. The personality is electric, nocturnal, and precision-engineered. It targets a gaming audience that appreciates retro-futurism combined with modern, high-fidelity visual effects.

The visual style is a hybrid of **Glassmorphism** and **High-Contrast/Bold** design. It utilizes deep, dark backgrounds to make vibrant, glowing elements pop with maximum intensity. Every interface element should feel like a light-emitting component on a high-tech HUD, using translucency and background blurs to maintain depth without sacrificing the "Lite" compact feel of the application.

## Colors
The palette is rooted in the "Deep Space" void (#0a0a12), providing a high-contrast canvas for light-based accents. 

- **Primary (Electric Cyan):** Used for interactive rails, active HUD elements, and primary action glows.
- **Secondary (Vibrant Magenta):** Reserved for highlights, level-up states, and high-energy pulses.
- **Tertiary (Soft Blue):** Specifically designated for collectibles and non-critical informative paths.
- **Critical Red:** Strictly for blockers, hazards, and "Game Over" states.
- **Glass Surfaces:** Use 20-40% opacity versions of the background color with a heavy background blur (16px-24px) to create the glassmorphic overlay effect.

## Typography
Typography is split between expressive geometric shapes and technical precision.

- **Headlines (Sora):** Bold and futuristic. Large display sizes should utilize a subtle outer glow or "bloom" effect in the primary color.
- **HUD & Labels (JetBrains Mono):** For a technical, monospaced look that implies data-processing and high-tech instrumentation. Always use uppercase for labels to enhance the "Lite" utility feel.
- **Body (Space Grotesk):** Provides a clean, geometric balance for instructions and settings descriptions, ensuring readability against dark, vibrant backgrounds.

## Layout & Spacing
The layout follows a **Fluid Grid** model but is optimized for "tight and focused" interactions. To maintain the compact feel, the design system uses a 4px base unit.

- **Mobile:** A 4-column grid with 16px side margins. Elements are packed closely to simulate a portable gaming device or cockpit.
- **Desktop/Tablet:** An 8-column centered layout. 
- **Reflow:** Components should prioritize vertical stacking for the HUD on mobile, while expanding to horizontal panels on wider screens.
- **Gaps:** Gutters are intentionally narrow (12px) to maximize the "Lite" footprint and keep the user's focus on the central gameplay area.

## Elevation & Depth
Depth is not created through shadows, but through **light and blur**.

1.  **Base Layer:** The Deep Space solid background.
2.  **Mid Layer (Game Rails):** Floating elements with 0px blur glows (inner and outer) to simulate light tubes.
3.  **Top Layer (HUD/Overlays):** Glassmorphic containers with 1px semi-transparent borders in Electric Cyan or Magenta. 
4.  **Bloom:** Use a `box-shadow: 0 0 15px [color]` on active interactive elements to simulate the synthwave "neon glow" that bleeds into the surrounding dark space.

## Shapes
The shape language is "Soft" (0.25rem - 0.75rem radius). This prevents the UI from feeling too aggressive while maintaining a modern, machined appearance. 

- **Rails:** Use fully rounded ends (pill-shaped) for the game path to imply smooth movement.
- **UI Cards:** Use `rounded-lg` (0.5rem) for a sleek, hardware-like aesthetic.
- **Interactive Toggles:** Use sharp 0.25rem corners to differentiate functional controls from organic game elements.

## Components
- **Glowing Rails:** Vector paths with a 2px stroke and an 8px-12px outer glow (bloom). Active rails pulse slowly between 70% and 100% opacity.
- **Pulse Markers:** Circular nodes that emit a secondary (Magenta) expanding ring animation when interacted with.
- **Buttons:** Solid Electric Cyan fill for primary actions with black text. On hover, the button should gain a 10px Cyan bloom and scale up slightly (1.05x).
- **Settings Toggles:** Compact, rectangular switches. When "On," the switch handle and track should emit a Cyan glow; when "Off," they should remain a dim, desaturated grey-purple.
- **Glass Cards:** Overlays for menus and scoreboards. Use a 1px border (#ffffff20) and a backdrop-filter blur of 20px.
- **Progress Bars:** Thin, high-contrast tracks where the filled portion is a gradient from Soft Blue to Electric Cyan, capped with a bright white "lead" pixel.