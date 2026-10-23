import { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.seo.siteUrl;

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-10-22"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date("2026-10-22"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
