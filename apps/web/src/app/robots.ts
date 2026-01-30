import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard/private/", "/api/auth/"],
    },
    sitemap: "https://puente.lat/sitemap.xml",
  };
}
