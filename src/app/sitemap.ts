import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/capabilities",
    "/projects",
    "/careers",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "" ? ("monthly" as const) : ("yearly" as const),
    priority: route === "" ? 1 : route === "/privacy" || route === "/terms" ? 0.3 : 0.8,
  }));
}
