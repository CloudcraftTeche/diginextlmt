// app/sitemap.ts
import { SITE_CONFIG } from "@/lib/constants";

export default function sitemap() {
  const baseUrl = SITE_CONFIG.url;

  // Main pages
  const mainPages = [
    "",
    "/about",
    "/services",
    "/solutions",
    "/work",
    "/insights",
    "/contact",
    "/quote",
    "/blog",
  ];

  // Service pages
  const servicePages = [
    "/services/branding-graphics-design",
    "/services/product-packaging-design",
    "/services/ui-ux-design",
    // '/services/design',
    "/services/website-design",
    "/services/ecommerce-development",
    "/services/app-development",
    "/services/native-hybrid-development",
    // '/services/react-native-development',
    "/services/android-development",
    "/services/ios-development",
    "/services/custom-web-application",
    // '/services/development',
    // '/services/social-media-marketing',
    "/services/linkedin-marketing",
    "/services/instagram-marketing",
    "/services/facebook-marketing",
    "/services/twitter-marketing",
    "/services/social-media-optimization",
    "/services/search-engine-optimization",
    "/services/email-marketing",
    "/services/ppc-advertising",
    // '/services/digital-marketing',
    "/services/shared-hosting",
    "/services/dedicated-hosting",
    "/services/cloud-hosting",
    "/services/email-hosting",
    "/services/g-suite",
    // '/services/web-hosting',
    "/services/photography",
    "/services/videography",
    // '/services/production',
    "/services/event-management",
    "/services/concerts-and-shows",
    "/services/corporate-events",
    "/services/media-coverage",
    // '/services/entertainment-events',
    // '/services/print-signages',
    // '/services/marketing',
    // '/services/it-infrastructure',
    // '/services/custom-softwares',
  ];

  // Solution pages
  const solutionPages = [
    "/solutions/digital-printing",
    "/solutions/signages",
    "/solutions/exhibition-stand-builders",
    "/solutions/corporate-gift",
    "/solutions/performance-marketing",
    "/solutions/marketing-consultant",
    "/solutions/growth-marketing",
    "/solutions/content-marketing",
    "/solutions/influencer-marketing",
    "/solutions/it-services",
    "/solutions/enterprise-solutions",
    "/solutions/gis-planning",
    "/solutions/on-site-support",
    "/solutions/cyber-security",
    "/solutions/hr-software-development",
    "/solutions/enterprise-crm-software",
    "/solutions/erp-development-consultation",
    "/solutions/custom-dashboard-design",
    "/solutions/erp-data-migration",
    "/solutions/erp-app-development",
    "/solutions/learning-management-system",
    "/solutions/devops-and-cloud-solutions",
  ];

  // Work pages
  const workPages = ["/work/photography", "/work/retouch"];

  // Blog pages
  const blogPages = [
    "/blog/ai-in-mobile-app-development",
    "/blog/customer-journey-understanding",
    "/blog/top-automated-functional-testing-tools-2026",
    "/blog/top-software-development-trends-2026",
    "/blog/how-to-start-app-development-for-startups",
    "/blog/digital-marketing-strategy-2026",
    "/blog/ultimate-guide-to-b2b-saas",
    "/blog/top-pay-per-click-tools",
    "/blog/best-python-web-framework",
    "/blog/guide-to-winning-with-ppc",
    "/blog/how-to-speed-up-woocommerce-site",
    "/blog/building-restful-apis-with-laravel",
    "/blog/top-20-advantages-disadvantages-social-media",
    "/blog/top-20-advantages-disadvantages-technology",
    "/blog/how-to-increase-views-instagram-reels-2025",
    "/blog/top-11-backend-programming-languages-2025",
  ];
  const locationPage = [
    "/location/abu-dhabi",
    "/location/dubai",
    "/location/ajman",
    "/location/al-ain",
    "/location/ras-al-khaimah",
  ];

  const allPages = [
    ...mainPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1.0 : 0.8,
    })),
    ...servicePages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.64,
    })),
    ...solutionPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.64,
    })),
    ...workPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.64,
    })),
    ...blogPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.64,
    })),
    ...locationPage.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.64,
    })),
  ];

  return allPages;
}
