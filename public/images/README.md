# Images

All assets here were downloaded from the live site at kpatriceglobal.com and are
the real ones, not placeholders.

| File | Used in |
| --- | --- |
| `logo.jpg` | Header, footer, favicon |
| `hero.jpg` | Hero section |
| `who-we-work-with.jpg` | "Who We Work Best With" |
| `our-approach.webp` | "Our Approach" |
| `service-strategic-planning.jpg` | Services — Strategic Planning |
| `service-operational-efficiency.webp` | Services — Operational Efficiency |
| `service-business-diagnostics.webp` | Services — Business Diagnostics |
| `about.jpg` | About Us |
| `partners/*` | The logo marquee (5 logos) |

Extensions reflect the actual encoding: the live site serves several of these
WebP-converted through its CDN regardless of the original filename.

## Nice to have

A transparent-background version of the logo. The current `logo.jpg` has a baked-in
white rectangle, which is invisible against the white header but would show if a
section behind it ever became coloured. A PNG or SVG with transparency would drop in
as `logo.png` / `logo.svg` with a one-line change in `content/site.ts`.
