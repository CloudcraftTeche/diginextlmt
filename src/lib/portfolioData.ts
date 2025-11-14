// lib/portfolioData.ts
import { ImageConstants } from "@/constants/ImageConstants";

export interface PortfolioFAQ {
  question: string;
  answer: string;
}

export interface PortfolioStep {
  title: string;
  description: string;
}

export interface PortfolioProcess {
  title: string;
  description: string;
  steps: PortfolioStep[];
}

export interface PortfolioSection {
  title: string;
  description: string;
  items: {
    title: string;
    description: string;
  }[];
}

export interface PortfolioDetailContent {
  id: number;
  slug: string;
  title: string;
  featuredImage: string;
  galleryImages: {
    url: string;
    alt: string;
    title?: string;
  }[];
}

const PORTFOLIO_DETAILS: Record<string, PortfolioDetailContent> = {
  photography: {
    id: 1,
    slug: "photography",
    title: "Photography",
    featuredImage: ImageConstants.SOLUTION_IMAGE,
    galleryImages: [
      {
        url: "/assets/images/works/Photography/1.jpg",
        alt: "Dashboard Overview",
        title: "Main Dashboard View",
      },
      {
        url: "/assets/images/works/Photography/2.jpg",
        alt: "Analytics Charts",
        title: "Interactive Data Visualization",
      },
      {
        url: "/assets/images/works/Photography/3.jpg",
        alt: "Mobile Interface",
        title: "Mobile-Optimized UI",
      },
      {
        url: "/assets/images/works/Photography/4.jpg",
        alt: "User Settings",
        title: "Customization Options",
      },
      {
        url: "/assets/images/works/Photography/5.jpg",
        alt: "Reports Section",
        title: "Detailed Reports",
      },
      {
        url: "/assets/images/works/Photography/6.jpg",
        alt: "Real-time Updates",
        title: "Live Data Streaming",
      },
      {
        url: "/assets/images/works/Photography/7.jpg",
        alt: "Real-time Updates",
        title: "Live Data Streaming",
      },
      {
        url: "/assets/images/works/Photography/8.jpg",
        alt: "Real-time Updates",
        title: "Live Data Streaming",
      },
      {
        url: "/assets/images/works/Photography/9.jpg",
        alt: "Real-time Updates",
        title: "Live Data Streaming",
      },
      {
        url: "/assets/images/works/Photography/10.jpg",
        alt: "Real-time Updates",
        title: "Live Data Streaming",
      },
      {
        url: "/assets/images/works/Photography/11.jpg",
        alt: "Real-time Updates",
        title: "Live Data Streaming",
      },
      {
        url: "/assets/images/works/Photography/12.jpg",
        alt: "Real-time Updates",
        title: "Live Data Streaming",
      },
      {
        url: "/assets/images/works/Photography/13.jpg",
        alt: "Real-time Updates",
        title: "Live Data Streaming",
      },
      {
        url: "/assets/images/works/Photography/14.jpg",
        alt: "Real-time Updates",
        title: "Live Data Streaming",
      },
      {
        url: "/assets/images/works/Photography/15.jpg",
        alt: "Real-time Updates",
        title: "Live Data Streaming",
      },
      {
        url: "/assets/images/works/Photography/16.jpg",
        alt: "Real-time Updates",
        title: "Live Data Streaming",
      },
    ],
  },
  retouch: {
    id: 2,
    slug: "retouch",
    title: "Retouch",
    featuredImage: ImageConstants.SOLUTION_IMAGE,
    galleryImages: [
      {
        url: "/assets/images/works/Retouch/1.jpg",
        alt: "Logo Design",
        title: "Primary Logo",
      },
      {
        url: "/assets/images/works/Retouch/2.jpg",
        alt: "Brand Colors",
        title: "Color Palette",
      },
      {
        url: "/assets/images/works/Retouch/3.jpg",
        alt: "Merchandise",
        title: "Product Applications",
      },
      {
        url: "/assets/images/works/Retouch/4.jpg",
        alt: "Brand Guidelines",
        title: "Style Guide",
      },
      {
        url: "/assets/images/works/Retouch/5.jpg",
        alt: "Packaging Design",
        title: "Product Packaging",
      },
      {
        url: "/assets/images/works/Retouch/6.jpg",
        alt: "Marketing Materials",
        title: "Marketing Collateral",
      },
      {
        url: "/assets/images/works/Retouch/7.jpg",
        alt: "Typography",
        title: "Font System",
      },
      {
        url: "/assets/images/works/Retouch/8.jpg",
        alt: "Business Cards",
        title: "Corporate Stationery",
      },
      {
        url: "/assets/images/works/Retouch/9.jpg",
        alt: "Social Media",
        title: "Digital Assets",
      },
      {
        url: "/assets/images/works/Retouch/10.jpg",
        alt: "Website Design",
        title: "Web Interface",
      },
      {
        url: "/assets/images/works/Retouch/11.jpg",
        alt: "Brand Photography",
        title: "Visual Identity",
      },
      {
        url: "/assets/images/works/Retouch/12.jpg",
        alt: "Icon Set",
        title: "Graphic Elements",
      },
      {
        url: "/assets/images/works/Retouch/13.jpg",
        alt: "Presentation",
        title: "Pitch Deck",
      },
      {
        url: "/assets/images/works/Retouch/14.jpg",
        alt: "Signage",
        title: "Environmental Design",
      },
      {
        url: "/assets/images/works/Retouch/15.jpg",
        alt: "Print Ads",
        title: "Advertising Campaign",
      },
      {
        url: "/assets/images/works/Retouch/16.jpg",
        alt: "Product Labels",
        title: "Label Design",
      },
      {
        url: "/assets/images/works/Retouch/17.jpg",
        alt: "Email Templates",
        title: "Email Marketing",
      },
      {
        url: "/assets/images/works/Retouch/18.jpg",
        alt: "App Interface",
        title: "Mobile Design",
      },
      //   {
      //     url: "/assets/images/works/Retouch/19.jpg",
      //     alt: "Brochure",
      //     title: "Company Profile",
      //   },
      {
        url: "/assets/images/works/Retouch/20.jpg",
        alt: "Vehicle Branding",
        title: "Fleet Graphics",
      },
      {
        url: "/assets/images/works/Retouch/21.jpg",
        alt: "Uniforms",
        title: "Apparel Design",
      },
      {
        url: "/assets/images/works/Retouch/22.jpg",
        alt: "Infographics",
        title: "Data Visualization",
      },
      {
        url: "/assets/images/works/Retouch/23.jpg",
        alt: "Trade Show",
        title: "Event Materials",
      },
      {
        url: "/assets/images/works/Retouch/24.jpg",
        alt: "Brand Video",
        title: "Motion Graphics",
      },
    ],
  },
  "social-media": {
    id: 3,
    slug: "social-media",
    title: "Social Media",

    featuredImage: ImageConstants.SOLUTION_IMAGE,
    galleryImages: [
      {
        url: "/assets/images/works/Social Media/1.jpg",
        alt: "Homepage",
        title: "Homepage Hero",
      },
      {
        url: "/assets/images/works/Social Media/2.jpg",
        alt: "Portfolio Grid",
        title: "Project Gallery",
      },
      {
        url: "/assets/images/works/Social Media/3.jpg",
        alt: "Project Details",
        title: "Case Study Page",
      },
      {
        url: "/assets/images/works/Social Media/4.jpg",
        alt: "Services Page",
        title: "Services Overview",
      },
    ],
  },
};

// Helper function to get portfolio detail by slug - WITH DEBUGGING
export const getPortfolioDetailBySlug = (
  slug: string
): PortfolioDetailContent | null => {
 
  const result = PORTFOLIO_DETAILS[slug] || null;
  return result;
};

// Get all available portfolio slugs
export const getAllPortfolioSlugs = (): string[] => {
  const slugs = Object.keys(PORTFOLIO_DETAILS);
  return slugs;
};

// Get all portfolio items (for listing page)
export function getAllPortfolioItems(): PortfolioDetailContent[] {
  return Object.values(PORTFOLIO_DETAILS);
}

// Get related portfolio items
export function getRelatedPortfolioItems(
  currentSlug: string,
  category: string,
  limit: number = 3
): PortfolioDetailContent[] {
  return Object.values(PORTFOLIO_DETAILS)
    .filter((item) => item.slug !== currentSlug)
    .slice(0, limit);
}
