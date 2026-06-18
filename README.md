# Tracker Tech Limited — Company Portfolio

A production-ready, animated single-page company portfolio for **Tracker Tech Limited**, a technology company working in AI, Blockchain, Computer Vision, and Industrial Automation.

Visual language is dark, glassmorphic, and motion-forward — inspired by recyclex.org but adapted to an "intelligent industrial tech" brand (electric cyan + emerald accents).

## Tech Stack

- **Next.js 14 (App Router, TypeScript)**
- **Tailwind CSS** with CSS-variable theme tokens
- **Framer Motion** — component reveals, hover states, mobile menu, theme-toggle morph
- **GSAP + ScrollTrigger** — hero parallax, process-timeline draw-in line, animated stat counters (client-only, respects `prefers-reduced-motion`)
- **next-themes** — system-aware light/dark mode with manual toggle, no flash-of-wrong-theme
- **lucide-react** — icons
- **react-hook-form + zod** — contact form
- **next/font** + **next/image**

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Project Structure

```
app/            layout (ThemeProvider, fonts, metadata), page, globals.css tokens
components/     navbar, hero, sections, footer, theme toggle/provider
  ui/           button, card, badge, section-heading, orb, count-up
lib/            content.ts (single source of truth), utils.ts, use-reduced-motion.ts
```

## Editing Content

All copy and repeatable data (pillars, process steps, solutions, roadmap, team, stats) live in `lib/content.ts` as typed arrays. Edit there — no need to touch components.

## Placeholders to Replace Before Launch

- **Roadmap** (`ROADMAP` in `lib/content.ts`) — phase names/dates are placeholders.
- **Team** (`TEAM`) — placeholder members; populate with real bios/photos or remove the `<Team />` section from `app/page.tsx`.
- **Stats** (`STATS`) — target numbers are illustrative.
- **Contact details** (`SITE.email`, `SITE.phone`, `SITE.social`) — update with real values.
- **Contact form submit** — `components/contact-cta.tsx` currently logs to console; wire to a real email/endpoint.
- The **Why Tracker Tech** donut chart is labeled illustrative only.

## Accessibility & Motion

- Semantic landmarks, keyboard-navigable controls, visible focus rings.
- All animation respects `prefers-reduced-motion` (GSAP hooks short-circuit; CSS transitions reduced globally).
- Theme-token-driven colors — no hardcoded `bg-black`/`bg-white`.
