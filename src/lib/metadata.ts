// lib/metadata.ts
import { Metadata } from "next";
import { SITE_CONFIG } from "./constants";
import { PageMetadata } from "./seo-data";

export function generatePageMetadata(
  pageData: PageMetadata,
  path: string
): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;
  
  return {
    title: pageData.title,
    description: pageData.description,
    keywords: pageData.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageData.title,
      description: pageData.description,
      url: url,
      siteName: SITE_CONFIG.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: `/images/og-${path.split("/").filter(Boolean).pop() || "home"}.jpg`,
          width: 1200,
          height: 630,
          alt: pageData.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageData.title,
      description: pageData.description,
      creator: SITE_CONFIG.twitter,
    },
  };
}
