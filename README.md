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
| `CONTACT_TO_EMAIL` | for the contact form | Inbox that receives enquiries |
| `CONTACT_FROM_EMAIL` | for the contact form | Verified sender on your Resend domain |
| `NEXT_PUBLIC_BOOKING_URL` | for scheduling | Calendly/Acuity embed URL for `/book` |

Both features degrade gracefully: without the Resend keys the form returns a
clear "not configured yet" message instead of failing silently, and without a
booking URL the `/book` page points visitors at the contact form.

## Editing content

All copy lives in [`content/site.ts`](content/site.ts) — nav, hero, services,
about, contact details, and social links. Change values there; no component
edits needed. Lines marked `TODO` are the placeholders awaiting real content.

## Structure

```
app/
  page.tsx            home
  about/              about page
  services/           services page
  book/               scheduling page (embeds NEXT_PUBLIC_BOOKING_URL)
  contact/            contact page
  api/contact/        form handler — validates, honeypots, sends via Resend
components/           Header, Footer, ContactForm
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
