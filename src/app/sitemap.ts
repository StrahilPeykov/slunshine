import type { MetadataRoute } from "next";
import { siteMetadata } from "@/content/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteMetadata.siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteMetadata.siteUrl}/collaborate`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
