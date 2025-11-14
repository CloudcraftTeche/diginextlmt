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

// Helper for home page
export function generateHomePageMetadata(): Metadata {
  return generatePageMetadata(
    {
      title: "IT Solutions and Services Company in Dubai | Diginext",
      description: "Diginext is a trusted IT solutions and services company in Dubai offering professional and reliable IT support to help your business grow seamlessly.",
      keywords: ["IT solutions Dubai", "IT services", "IT support Dubai"],
    },
    "/"
  );
}
