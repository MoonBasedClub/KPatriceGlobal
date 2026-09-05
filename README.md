# KPatriceGlobal

Website for K Patrice Global — Next.js (App Router) + Tailwind, deployed on Vercel.

> **Status: scaffold with placeholder copy.**
> The live site at kpatriceglobal.com could not be reached from the build
> environment (blocked by its network egress policy), so **no content here is
> transcribed from the existing site**. Everything in `content/site.ts` is a
> stand-in and needs to be replaced with the real copy.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in the values below
npm run dev                  # http://localhost:3000
```

## Environment variables

Set these locally in `.env.local` and in the Vercel project settings.

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | for the contact form | API key from [resend.com](https://resend.com) |
| `CONTACT_TO_EMAIL` | for the contact form | Inbox that receives enquiries — `keisha@kpatrice.com` |
| `CONTACT_FROM_EMAIL` | for the contact form | Sender address on a **Resend-verified domain** |
| `NEXT_PUBLIC_BOOKING_URL` | for scheduling | Calendly/Acuity embed URL for `/book` |

Both features degrade gracefully: without the Resend keys the form returns a
clear "not configured yet" message instead of failing silently, and without a
booking URL the `/book` page points visitors at the contact form.

**Before the form will send**, add your sending domain in the Resend dashboard
under **Domains → Add Domain** and publish the DNS records it gives you. Resend
refuses to send from an unverified domain, so `CONTACT_FROM_EMAIL` must sit on a
domain you have completed that step for. The recipient
(`keisha@kpatrice.com`) needs no verification.

## Editing content

All copy lives in [`content/site.ts`](content/site.ts) — nav, hero, services,
about, contact details, and social links. Change values there; no component
edits needed. Lines marked `TODO` are the placeholders awaiting real content.

## Animation

Motion (`motion/react`) drives all movement. The primitives live in
[`components/motion.tsx`](components/motion.tsx) — `FadeIn`, `Stagger` /
`StaggerItem`, `HeroReveal`, and `HoverLift` — plus `CountUp` for the stat
figures and `PageTransition` for route changes.

Every one of them checks `useReducedMotion()` and collapses to a plain fade
when the visitor has "reduce motion" enabled at the OS level. Keep that check
in anything new.

## Structure

```
app/
  page.tsx            home
  about/              about page
  services/           services page
  book/               scheduling page (embeds NEXT_PUBLIC_BOOKING_URL)
  contact/            contact page
  api/contact/        form handler — validates, honeypots, sends via Resend
components/
  motion.tsx          animation primitives (FadeIn, Stagger, HeroReveal, HoverLift)
  CountUp.tsx         stat figures that count up on scroll
  PageTransition.tsx  route-change cross-fade
  Header / Footer / ContactForm
content/site.ts       all site copy
```

## Deploying to Vercel

1. Import this repo at [vercel.com/new](https://vercel.com/new). Next.js is
   detected automatically — no build settings to change.
2. Add the environment variables above under **Settings → Environment Variables**.
3. Add `kpatriceglobal.com` under **Settings → Domains** and point the domain's
   nameservers or A/CNAME records at Vercel as instructed there.

## Scripts

```bash
npm run dev        # local dev server
npm run build      # production build
npm run typecheck  # tsc --noEmit
```
