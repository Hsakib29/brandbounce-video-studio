## Floating Async Video Chat Widget

Add a persistent floating video bubble + action card to every page.

### Files

**New:** `src/components/AsyncVideoWidget.tsx`
- Client component using `useState` for open/close + `useIsMobile` hook for responsive sizing.
- Framer Motion for pop-up animation (already a common dep — will install `framer-motion` via `bun add` if missing).
- Uses semantic tokens only (`primary`, `border`, `background`, `foreground`, `muted-foreground`).

**Edit:** `src/routes/__root.tsx`
- Mount `<AsyncVideoWidget />` inside `RootComponent` so it appears on every route.

### Widget structure

**Bubble (always visible)**
- `fixed bottom-6 right-6 z-50`
- 84px circle (72px on mobile), `border-[3px] border-primary`, `shadow-2xl`, `backdrop-blur-md`
- `<video autoPlay muted loop playsInline>` filling the circle (`object-cover rounded-full`); placeholder src e.g. a sample MP4 (`https://cdn.coverr.co/videos/coverr-a-man-talking-to-camera-9461/1080p.mp4` or similar small loop).
- Hover: `hover:scale-105 transition-transform`
- Tooltip on hover: small pill to the left ("Ask me anything! 👋"), shown via `group-hover:opacity-100`.

**Action card (toggled)**
- Positioned `absolute bottom-[100px] right-0`, width ~280px.
- Glassmorphism: `bg-background/60 backdrop-blur-xl border border-border/50 rounded-2xl shadow-xl p-5`.
- Framer Motion `AnimatePresence` with scale+opacity+y transition for pop-up.
- Close button (X icon) top-right, ghost style.
- Title: "Let's start your project" — `font-display font-bold text-sm`.
- Buttons (full width, stacked, gap-2):
  1. WhatsApp — `variant="default"` (primary), `MessageCircle` icon, links to `https://wa.me/` placeholder.
  2. Discovery call — `variant="outline"`, `Calendar` icon, links to Calendly placeholder.
  3. Email Mehdi — `variant="ghost"`, `Mail` icon, `mailto:mehdi@brandbounce.com` placeholder.

### Style alignment with SiteHeader
- Same `rounded-md` on buttons (shadcn default).
- Same backdrop-blur/translucent background pattern as the sticky header.
- Same `font-medium` button label weight.

### Responsive
- Mobile (`<768px`): bubble shrinks to 64px, bottom/right reduced to `bottom-4 right-4`, card width clamps to `calc(100vw - 2rem)`.
- Tooltip hidden on touch devices (`hidden md:block`).

### Placeholders to confirm later
- Video URL, WhatsApp number, Calendly link, email address — will use clearly-marked placeholders the user can swap.
