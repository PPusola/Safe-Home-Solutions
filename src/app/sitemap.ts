import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/content/blog";
import { SERVICES } from "@/lib/content/services";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/blog", "/contact", "/faq", "/gallery", "/privacy", "/process", "/service-areas", "/services", "/terms"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE.url}${route}`,
    })),
    ...SERVICES.map((service) => ({
      url: `${SITE.url}/services/${service.slug}`,
    })),
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE.url}/blog/${post.slug}`,
    })),
  ];
}
