import { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

export function generateHomePageMetadata(): Metadata {
  const title = `${SITE_CONFIG.name}`;
  const description =
    "Expert web development services using Next.js, React, and TypeScript. Fast, SEO-optimized websites that drive results for your business.";

  return {
    title,
    description,
    keywords: [
      "web development",
      "Next.js development",
      "React development",
      "TypeScript",
      "SEO optimization",
      "mobile-first design",
      "performance optimization",
      "professional websites",
    ],
    authors: [{ name: SITE_CONFIG.author }],
    creator: SITE_CONFIG.author,
    publisher: SITE_CONFIG.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: SITE_CONFIG.url,
      title,
      description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: `${SITE_CONFIG.url}/images/og-home.jpg`,
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.name} - Professional Web Development`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: SITE_CONFIG.twitter,
      images: [`${SITE_CONFIG.url}/images/twitter-home.jpg`],
    },
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
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
    },
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.url,
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_CONFIG.url}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      }),
    },
  };
}
