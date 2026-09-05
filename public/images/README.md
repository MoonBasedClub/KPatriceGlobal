# Image slots

Every file here is a **generated solid-colour placeholder**. Replace each one
with the real asset, keeping the filename, and the site picks it up with no code
change. Keep the `.png` extension (or change the path in `content/site.ts` if you
save as `.jpg`).

| File | Used on | Supplied? | Suggested size |
| --- | --- | --- | --- |
| `logo.png` | Header + footer | **You sent it — needs saving here** | ~900×450, transparent background |
| `hero-professional.png` | Home hero | **You sent it** (woman with tablet) | ≥1600px wide |
| `about-team.png` | About page | **You sent it** (three people at table) | ≥1600px wide |
| `services-workforce.png` | Services + home card | **You sent it** (two people, machine shop) | ≥1600px wide |
| `services-consulting.png` | Services + home card | Reuse the meeting-room photo, or send another | ≥1600px wide |
| `partners/palm-beach-county-schools.png` | Partner carousel | **You sent it** | ~360px wide, transparent |

## Still needed

- **A favicon** — `app/icon.png` (512×512, the logo mark alone, no wordmark).
- **The rest of the partner carousel logos.** Only Palm Beach County Schools has
  been supplied. Drop each into `partners/` and add a row to the `partners`
  array in `content/site.ts`.
- **Any imagery from the lower half of the live site**, which could not be
  retrieved (the build environment cannot reach kpatriceglobal.com).

## Adding a partner logo

```ts
// content/site.ts
partners: [
  { name: "The School District of Palm Beach County",
    src: "/images/partners/palm-beach-county-schools.png", href: "" },
  { name: "Next Partner",
    src: "/images/partners/next-partner.png", href: "https://example.org" },
],
```

The carousel sizes itself from the number of logos, so no other change is needed.
