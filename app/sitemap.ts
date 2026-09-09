import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * Dated from the last content change rather than `new Date()`: a lastModified
 * that moves on every deploy trains crawlers to distrust the field, since the
 * pages it claims changed usually have not. Bump this when the copy in
 * content/site.ts actually changes.
 */
const LAST_CONTENT_CHANGE = new Date("2026-09-09");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: LAST_CONTENT_CHANGE,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}${site.booking.path}`,
      lastModified: LAST_CONTENT_CHANGE,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
