## Problem

At the tablet viewport (768–1023px), the header tries to fit:
- A wide wordmark logo (`md:w-72` ≈ 288px)
- 6 nav links with `gap-8` (Home, Services, Work, Process, About, Contact)
- The "Send footage" CTA button

That's why everything looks bunched up. The nav switches from hidden to inline at the `md` breakpoint (768px), which is exactly where it has the least room.

## Fix

Two small, frontend-only changes in `src/components/SiteHeader.tsx` and `src/components/Logo.tsx`.

### 1. Move the inline nav to the `lg` breakpoint, add a hamburger menu for tablet

- Change the desktop nav from `hidden md:flex` to `hidden lg:flex`.
- Below `lg` (so phones AND tablets), show a hamburger icon button on the right that opens a `Sheet` (already in `src/components/ui/sheet.tsx`) sliding in from the right with the same nav links stacked vertically, plus the "Send footage" CTA at the bottom.
- Keep the CTA button visible inline only on `lg+`; on smaller screens it lives inside the sheet to free up header space.

### 2. Shrink the scroll-morph logo footprint at `md`

- In `Logo.tsx`, the `scroll-morph` container is `md:h-16 md:w-72`. Reduce to something like `md:w-56 lg:w-72` so the wordmark doesn't dominate the tablet header. The wordmark image inside stays visually prominent but the reserved width shrinks.

## Result

- Mobile (<768px): logo + hamburger (unchanged behavior, hamburger replaces nothing visible today).
- Tablet (768–1023px): logo + hamburger — no more bunching.
- Desktop (≥1024px): logo + full inline nav + CTA, same as today.

## Out of scope

No changes to footer, hero, AsyncVideoWidget, routing, or any business logic.
