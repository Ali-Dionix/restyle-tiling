import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.restyletiling.com";

  // Service slugs defined in the dynamic route
  const services = [
    "wall-tiling",
    "floor-tiling",
    "bathroom-tiling",
    "kitchen-tiling",
    "tile-repairs",
    "grouting-finishing",
  ];

  const serviceUrls = services.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    ...serviceUrls,
  ];
}
