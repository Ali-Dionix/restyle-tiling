import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.restyletiling.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/_next/",
        "/static/",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
