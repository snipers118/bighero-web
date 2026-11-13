import type { MetadataRoute } from "next";
import projects from "@/data/projects.json";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/portfolio`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/promo`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE_URL}/construction`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/restaurant`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/school`, changeFrequency: "monthly", priority: 0.7 },
  ].map((p) => ({ ...p, lastModified }) as MetadataRoute.Sitemap[number]);

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${SITE_URL}/portfolio/${p.id}`,
    lastModified,
    changeFrequency: "monthly",
    priority: p.featured ? 0.7 : 0.6,
  }));

  return [...staticPages, ...projectPages];
}

