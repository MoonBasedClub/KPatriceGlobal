# Images

These are the real brand assets, not placeholders.

| File | Used in |
| --- | --- |
| `logo.png` | Header, footer, favicon, share card |
| `hero.jpg` | Hero section |
| `who-we-work-with.jpg` | "Who We Work Best With" |
| `our-approach.webp` | "Our Approach" |
| `service-strategic-planning.jpg` | Services — Strategic Planning |
| `service-operational-efficiency.webp` | Services — Operational Efficiency |
| `service-business-diagnostics.webp` | Services — Business Diagnostics |
| `about.jpg` | About Us |
| `partners/*` | The logo marquee (5 logos) |

Extensions reflect the actual encoding rather than the original filename —
several of these are WebP.

## Nice to have

An SVG version of the logo. `logo.png` is transparent and 815x424, which is
sharp enough everywhere it is currently used, but a vector would stay crisp at
any size and shrink the header payload. It would drop in as `logo.svg` with a
one-line change in `content/site.ts`.
