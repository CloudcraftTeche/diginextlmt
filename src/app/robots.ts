// app/robots.ts
import { SITE_CONFIG } from "@/lib/constants";

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/cgi-bin/',
    },
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
}