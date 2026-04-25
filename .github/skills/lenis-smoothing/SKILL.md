---
name: lenis-smoothing
description: "Use when tuning smooth scrolling with Lenis, integrating route/hash scroll behavior, or fixing 'Lenis changes not applying' issues in Nuxt apps. Covers plugin placement, CSS loading, and anti-glitch navbar/hash patterns."
---

# Lenis Smoothing Skill

## Use This Skill When

- You need to tune how heavy/light smooth scrolling feels.
- Hash anchors (#section links) should scroll smoothly with Lenis.
- Scroll settings appear to have no effect.
- You need stable smooth scrolling across route changes in Nuxt.

## Nuxt Placement Rules (Critical)

- With app-directory structure, place plugin at `app/plugins/lenis.client.ts`.
- Do not keep duplicate Lenis plugins in both `plugins/` and `app/plugins/`.
- Provide `$lenis` through `defineNuxtPlugin` once.

## CSS Rules

- Avoid broken CSS imports in `nuxt.config.ts` that resolve to 404s.
- Prefer one source of truth for Lenis classes in global CSS (`app/assets/css/main.css`) unless package CSS path is verified.

## Tuning Guide

- Heavier scroll (requires more wheel movement): lower `wheelMultiplier` and `touchMultiplier`.
- Lighter/faster scroll: raise `wheelMultiplier` and `touchMultiplier`.
- Smoother glide: increase `duration`, reduce `lerp` moderately.
- Respect accessibility: support `prefers-reduced-motion`.

## Integration Checklist

1. One RAF loop only. Avoid double-RAF integrations.
2. If GSAP ScrollTrigger is used, sync updates via `lenis.on("scroll", ScrollTrigger.update)`.
3. Route/hash links should call `$lenis.scrollTo(...)` instead of native `scrollIntoView({ behavior: "smooth" })`.
4. Keep sticky headers/nav components reusable to avoid duplicated style drift.

## Known Mistakes To Avoid

- Lenis plugin placed in wrong Nuxt directory, causing no runtime effect.
- Invalid Lenis stylesheet path in `nuxt.config.ts` causing 404.
- Multiple RAF loops fighting each other and creating inconsistent motion.
- Duplicated per-page navbar implementations introducing visual mismatch/glitches.
