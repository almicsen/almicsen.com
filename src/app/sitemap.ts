import type { MetadataRoute } from "next";

import { getPublicProjects, getPublicWritingPosts } from "@/lib/cms/service";
import { siteConfig } from "@/lib/site";

const staticRoutes = [
  "",
  "/about",
  "/projects",
  "/creative-work",
  "/writing",
  "/blog",
  "/shop",
  "/friends",
  "/media/pdf",
  "/media/video",
  "/media/score-sync",
];

function route(path: string, lastModified = "2026-05-12"): MetadataRoute.Sitemap[number] {
  return {
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = getPublicProjects().map((project) =>
    route(`/projects/${project.slug}`, project.date),
  );

  const writingRoutes = getPublicWritingPosts().flatMap((post) => {
    const lastModified = post.publishedAt ?? "2026-05-12";

    return [route(`/writing/${post.slug}`, lastModified), route(`/blog/${post.slug}`, lastModified)];
  });

  return [...staticRoutes.map((path) => route(path)), ...projectRoutes, ...writingRoutes];
}
