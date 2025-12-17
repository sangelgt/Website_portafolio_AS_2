# Design System

This document outlines the design principles and guidelines for the project, ensuring a cohesive and consistent user experience across all pages.

## Animations and Micro-interactions

Animations should be purposeful and subtle, enhancing the user experience without being distracting. They are used to provide feedback, guide the user's attention, and add a layer of polish.

### General Principles

- **Duration:** Standard transitions and animations will use a duration of **0.3s**.
- **Easing:** The default easing function will be `ease-in-out` for smooth acceleration and deceleration.

### Defined Effects

- **Fade-in on Scroll:** Sections and major components will fade in gently as they enter the viewport.
  - **Effect:** `fade-in`
  - **CSS Properties:** `opacity`, `transform` (translateY)
- **Scale on Hover:** Interactive elements like buttons and cards will scale up slightly on hover to provide feedback.
  - **Effect:** `scale`
  - **CSS Properties:** `transform` (scale)

### Global Animation Logic

All animations will be defined as utility classes in a global CSS file located in `/public/css/animations.css`. This ensures they can be consistently applied across all static HTML pages (Home, Methodology, Case Study, Diagnostics).

### Specific Component Animations

- **Header/Menu Entrance:** To avoid a jarring "static block" appearance, the main header will have a smooth fade-in animation on page load.
  - **Class:** `animate-fade-in`
  - **Duration:** 0.5s
  - **Delay:** 0.2s
- **Primary CTA Button (ROI):** The "Calcula TU ROI Ahora" button will feature a subtle pulse animation to draw attention to the primary call-to-action.
  - **Class:** `animate-pulse`
  - **Effect:** A gentle, recurring change in `box-shadow` brightness or scale.
  - **Goal:** Make the button visually prominent without being aggressive.
