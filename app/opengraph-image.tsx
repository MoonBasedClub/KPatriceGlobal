import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { site } from "@/content/site";

/**
 * The card shown when the homepage is shared to LinkedIn, Facebook, iMessage
 * or Slack. Without one, those unfurls fall back to a bare link with no image,
 * which is the single most visible SEO gap on a site that gets shared by hand.
 *
 * Generated at build time rather than committed as a PNG so it stays in step
 * with the brand copy in content/site.ts.
 */
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  // Read from disk rather than fetching the deployed URL: this runs during the
  // build, when nothing is serving the site yet.
  const logo = readFileSync(join(process.cwd(), "public/images/logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#ffffff",
          padding: "80px",
          // The brand blue as a left rule, so the card reads as this site's
          // even at the thumbnail sizes feeds render it at.
          borderLeft: "24px solid #188bf6",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="" width={340} height={177} />
        <div
          style={{
            marginTop: 48,
            fontSize: 62,
            fontWeight: 600,
            color: "#2c3345",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          {site.tagline}
        </div>
        <div style={{ marginTop: 28, fontSize: 30, color: "#5b6672", lineHeight: 1.4 }}>
          {site.hero.heading}
        </div>
      </div>
    ),
    size,
  );
}
