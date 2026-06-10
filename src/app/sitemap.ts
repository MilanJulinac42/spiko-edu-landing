import type { MetadataRoute } from "next";

const SITE_URL = "https://spikoedu.rs";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/politika-privatnosti`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/uslovi-koriscenja`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
