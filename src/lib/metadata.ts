// lib/metadata.ts
import { Metadata } from "next";
import { SITE_CONFIG } from "./constants";
import { PageMetadata } from "./seo-data";

export function generatePageMetadata(
  pageData: PageMetadata,
  path: string
): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;

  // Generate dynamic OG image path
  const ogImagePath = `/images/og-${
    path.split("/").filter(Boolean).pop() || "home"
  }.jpg`;
  const fullImageUrl = `${SITE_CONFIG.url}${ogImagePath}`;

  return {
    // Basic metadata
    title: pageData.title,
    description: pageData.description,
    keywords: pageData.keywords,

    // Author and creator information
    authors: [{ name: "Diginext Team" }],
    creator: "Diginext Team",
    publisher: "Diginext",

    // Canonical URL
    alternates: {
      canonical: url,
    },

    // Robots configuration
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    // Google site verification
    verification: {
      google: "FEEPMTuIlMk8-qSGivtt8URG6yT_vwXRN_-2v1ZQzRY",
    },

    // Open Graph metadata
    openGraph: {
      title: pageData.title,
      description: pageData.description,
      url: url,
      siteName: SITE_CONFIG.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: pageData.title,
        },
      ],
    },

    // Twitter metadata - CRITICAL FIX
    twitter: {
      card: "summary_large_image",
      title: pageData.title,
      description: pageData.description,
      creator: SITE_CONFIG.twitter,
      images: [fullImageUrl], // Use array of strings, not objects
    },
  };
}

// Helper function for 404 pages
export function generate404Metadata(): Metadata {
  return {
    title: "Page Not Found | Diginext",
    description: "The page you're looking for doesn't exist.",
    robots: {
      index: false,
      follow: false,
    },
  };
}

// Helper function for dynamic pages with custom OG images
export function generatePageMetadataWithCustomImage(
  pageData: PageMetadata,
  path: string,
  customOgImage: string
): Metadata {
  const metadata = generatePageMetadata(pageData, path);
  const fullCustomImageUrl = `${SITE_CONFIG.url}${customOgImage}`;

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph!,
      images: [
        {
          url: fullCustomImageUrl,
          width: 1200,
          height: 630,
          alt: pageData.title,
        },
      ],
    },
    twitter: {
      ...metadata.twitter!,
      images: [fullCustomImageUrl],
    },
  };
}
