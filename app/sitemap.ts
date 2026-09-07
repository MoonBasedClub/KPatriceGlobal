import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now },
    { url: `${site.url}${site.booking.path}`, lastModified: now },
  ];
}
