# KPatriceGlobal

Recreation of [kpatriceglobal.com](https://kpatriceglobal.com) — Next.js (App
Router) + Tailwind + Motion, deployed on Vercel.

The original is a single-page GoHighLevel funnel, so this is a single page with
anchor navigation. Copy, imagery, palette and animations are taken from the live
site.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in the values below
npm run dev                  # http://localhost:3000
```

## Environment variables

The site needs none to run — the calendar ID is committed.

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_BOOKING_CALENDAR_ID` | no — has a default | Points the embed at a different GoHighLevel calendar |

## Scheduling flow

The calendar is **GoHighLevel's, not Calendly** — "Keisha Smith's Personal
Calendar", embedded from `api.leadconnectorhq.com/widget/booking/<id>` as an
iframe.

It is embedded directly in the `#contact` section at the bottom of the
homepage, and the hero CTAs scroll to it. There is no contact form: visitors
book straight from the calendar, and email and phone are listed beside it.

The same calendar is also served at `/appointment-booking-page`, the path the
previous site used, so existing links and search results keep resolving.

The widget reports its own height through GoHighLevel's `form_embed.js`, so the
iframe grows with the content instead of scrolling internally.

## Editing content

All copy lives in [`content/site.ts`](content/site.ts): nav, hero, service
descriptions, about text, contact details, and the partner logo list. Change
values there; no component edits needed.

## Animation

Motion (`motion/react`) drives all movement, mirroring the Animate.css effects
the live site uses — `fadeInLeft`, `fadeInRight`, `fadeInUp`, `zoomIn`, each
over 1s on scroll into view. The primitives are in
[`components/motion.tsx`](components/motion.tsx): `Reveal` and `HeroReveal` take
a `direction`, and `Stagger` / `StaggerItem` sequence a list.

Animate.css translates by a percentage of the element's own size, which lurches
on wide blocks, so these use a fixed 60px offset in the same direction.

The partner marquee (`components/PartnerCarousel.tsx`) runs a 30.4s cycle to
match the live site, derived from track width so it stays correct as logos are
added.

Every primitive checks `useReducedMotion()` and collapses to a plain fade. Keep
that check in anything new — and note that branching *returned markup* on it
needs the `useMounted` gate in [`lib/useMounted.ts`](lib/useMounted.ts), since
the preference is unknown during server render.

## Structure

```
app/
  page.tsx            the whole site (hero → services → mission → about → contact)
  appointment-booking-page/  the booking calendar
  icon.png            favicon, generated from the logo mark
components/
  motion.tsx          animation primitives
  PartnerCarousel.tsx logo marquee
  BookingEmbed.tsx    GoHighLevel booking calendar iframe
  Header / Footer
content/site.ts       all site copy
public/images/        assets from the live site (see its README)
```

## Deploying to Vercel

1. Import this repo at [vercel.com/new](https://vercel.com/new). Next.js is
   detected automatically — no build settings to change.
2. Add the environment variables above under **Settings → Environment Variables**.
3. Add the domain under **Settings → Domains** and point DNS at Vercel.

## Scripts

```bash
npm run dev        # local dev server
npm run build      # production build
npm run typecheck  # tsc --noEmit
```
