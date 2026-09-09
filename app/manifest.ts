import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * Makes the site installable and controls how it appears when added to a phone
 * home screen. Also what Lighthouse's PWA/best-practices audit looks for.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.tagline}`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#188bf6",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
