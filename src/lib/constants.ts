export const SITE_CONFIG = {
  name: "YourCompany",
  description:
    "Professional web development services using modern technologies",
  url: "https://yourwebsite.com",
  author: "Your Name",
  twitter: "@yourtwitter",
  email: "contact@yourwebsite.com",
  phone: "+1-234-567-8900",
  address: "Your Business Address",
} as const;

export const SEO_DEFAULTS = {
  titleTemplate: "%s | YourCompany",
  defaultTitle: "YourCompany - Professional Web Development",
  description:
    "Expert web development services using Next.js, React, and TypeScript",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    handle: SITE_CONFIG.twitter,
    site: SITE_CONFIG.twitter,
    cardType: "summary_large_image",
  },
} as const;
