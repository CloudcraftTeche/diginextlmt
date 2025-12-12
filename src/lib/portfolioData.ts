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
  industry: string;
  heroImage: string;
  featuredImage: string;
  galleryImages: {
    url: string;
    alt: string;
    title?: string;
  }[];
  projectOverview?: {
    title: string;
    description: string;
    language: string;
    timescale: string;
    launchDate: string;
    system: string;
    services: string[];
  };
  brandStats?: {
    backgroundImage: string;
    title: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
  };
  objectives?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  challenges?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  uxDesign?: {
    title: string;
    description: string;
    features: Array<{
      image: string;
      title: string;
      subtitle?: string;
      description: string;
    }>;
  };
  productCustomization?: {
    title: string;
    description: string;
  };
  loyaltyProgram?: {
    title: string;
    description: string;
  };
}

const PORTFOLIO_DETAILS: Record<string, PortfolioDetailContent> = {
  "caribou-coffee-kuwait": {
    id: 1,
    slug: "caribou-coffee-kuwait",
    title: "Caribou Coffee Kuwait",
    industry: "Food",
    heroImage:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&h=800&fit=crop",
    featuredImage:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&h=800&fit=crop",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
        alt: "Caribou Coffee mobile app interface",
        title: "Mobile App Home Screen",
      },
      {
        url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
        alt: "Coffee customization screen",
        title: "Product Customization",
      },
      {
        url: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=600&fit=crop",
        alt: "Order tracking interface",
        title: "Real-time Order Tracking",
      },
    ],
    projectOverview: {
      title:
        "Developing an Extraordinary Mobile App for Premium US-Based Coffee Brand",
      description:
        "Caribou Coffee is a US-based premium coffee brand, providing high-quality handcrafted beverages, coffee lifestyle products and food items in a welcoming coffeehouse environment for over three decades.",
      language: "PHP / Kotlin / Swift",
      timescale: "20 Weeks",
      launchDate: "January 2024",
      system: "Laravel",
      services: [
        "UI/UX Design",
        "E-commerce",
        "Web App Development",
        "Mobile App Development",
        "Digital Marketing",
        "Cloud Services",
      ],
    },
    brandStats: {
      backgroundImage:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&h=600&fit=crop",
      title: "A Premium Coffee Brand With 85+ Stores at Kuwait",
      stats: [
        { value: "15K", label: "Number of orders processed daily via app" },
        {
          value: "33%",
          label: "Orders placed via app increased from 0 to 33%",
        },
        {
          value: "60%",
          label: "Customers retained, aided by app's loyalty program",
        },
      ],
    },
    objectives: [
      {
        icon: "📱",
        title: "Online ordering system",
        description:
          "They wished to adopt a preferable combination of both offline sales and online sales to boost revenue and customer satisfaction.",
      },
      {
        icon: "🎯",
        title: "Customer engagement",
        description:
          "Increase customer engagement through a seamless digital experience and loyalty rewards program.",
      },
      {
        icon: "🔄",
        title: "Streamlined operations",
        description:
          "Integrate online orders with existing POS systems across all 85+ stores for efficient order management.",
      },
    ],
    challenges: [
      {
        icon: "👤",
        title: "Lack of personalised order experience",
        description:
          "There was no app-based solution for the customers in the region to customize and order their preferred beverages.",
      },
      {
        icon: "⚡",
        title: "Order management complexity",
        description:
          "Managing peak hour orders across 85+ stores required a robust and scalable solution.",
      },
      {
        icon: "🌐",
        title: "Multi-location coordination",
        description:
          "Ensuring real-time inventory sync and order routing to the nearest or preferred store location.",
      },
    ],
    uxDesign: {
      title: "Superior UX Design",
      description:
        "The app offers users real-time order status updates and intuitive navigation for a seamless ordering experience.",
      features: [
        {
          image:
            "https://images.unsplash.com/photo-1557683316-973673baf926?w=600&h=400&fit=crop",
          title: "ORDER PREPARING",
          subtitle: "Expected at 03:00 PM",
          description:
            "Real-time order tracking with estimated preparation time and push notifications at each stage.",
        },
        {
          image:
            "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=600&h=400&fit=crop",
          title: "BROWSE MENU",
          subtitle: "Explore our collection",
          description:
            "Beautifully designed menu with high-quality images and detailed product information.",
        },
        {
          image:
            "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=400&fit=crop",
          title: "STORE LOCATOR",
          subtitle: "Find nearby stores",
          description:
            "Interactive map showing all store locations with directions and store hours.",
        },
      ],
    },
    productCustomization: {
      title: "Customise Products as Desired",
      description:
        "The app lets users easily add their preferred features to their orders, from milk alternatives to flavor shots and toppings. Each customization option is clearly presented with images and pricing, making it simple to create the perfect beverage.",
    },
    loyaltyProgram: {
      title: "Loyalty we serve to our customers",
      description:
        "Caribou coffee app lets customers redeem points for rewards, encouraging repeat visits and building brand loyalty. Members earn points on every purchase, unlock exclusive perks, and receive personalized offers based on their preferences.",
    },
  },
  "ikea-foods-ecommerce": {
    id: 2,
    slug: "ikea-foods-ecommerce",
    title: "IKEA Foods E-commerce",
    industry: "Retail / Food",
    heroImage:
      "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=1200&h=800&fit=crop",
    featuredImage:
      "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=1200&h=800&fit=crop",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=600&fit=crop",
        alt: "IKEA Foods product catalog",
        title: "Product Showcase",
      },
      {
        url: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&h=600&fit=crop",
        alt: "Shopping cart interface",
        title: "Checkout Experience",
      },
      {
        url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop",
        alt: "Mobile responsive design",
        title: "Mobile Shopping",
      },
    ],
    projectOverview: {
      title: "Delectably Designed Branded E-commerce Store",
      description:
        "Launching a new sales channel for IKEA Foods with a modern, user-friendly e-commerce platform that brings the IKEA food experience online. From Swedish meatballs to organic jams, customers can now enjoy IKEA's beloved food products delivered to their doorstep.",
      language: "React / Node.js / TypeScript",
      timescale: "16 Weeks",
      launchDate: "March 2024",
      system: "Next.js / Shopify",
      services: [
        "UI/UX Design",
        "E-commerce Development",
        "Payment Integration",
        "Digital Marketing",
        "SEO Optimization",
        "Analytics Setup",
      ],
    },
    brandStats: {
      backgroundImage:
        "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=1200&h=600&fit=crop",
      title: "Bringing IKEA Food Experience Online",
      stats: [
        { value: "8K", label: "Monthly orders in first quarter" },
        {
          value: "45%",
          label: "Repeat customer rate within 3 months",
        },
        {
          value: "4.8",
          label: "Average customer rating out of 5",
        },
      ],
    },
    objectives: [
      {
        icon: "🛒",
        title: "New revenue channel",
        description:
          "Create a dedicated e-commerce platform to sell IKEA food products directly to consumers online.",
      },
      {
        icon: "🌍",
        title: "Market expansion",
        description:
          "Reach customers who may not have easy access to physical IKEA stores but love their food products.",
      },
      {
        icon: "📦",
        title: "Subscription model",
        description:
          "Implement a subscription service for regular deliveries of popular items like coffee, snacks, and Swedish specialties.",
      },
    ],
    challenges: [
      {
        icon: "❄️",
        title: "Cold chain logistics",
        description:
          "Ensuring frozen and refrigerated items maintain quality during shipping required careful logistics planning.",
      },
      {
        icon: "🎨",
        title: "Brand consistency",
        description:
          "Maintaining IKEA's distinctive brand identity while creating a food-focused e-commerce experience.",
      },
      {
        icon: "📱",
        title: "Mobile-first design",
        description:
          "Optimizing the shopping experience for mobile users who make up 70% of IKEA's digital traffic.",
      },
    ],
    uxDesign: {
      title: "Scandinavian Simplicity in Design",
      description:
        "The platform embodies IKEA's design philosophy with clean lines, intuitive navigation, and a focus on product discovery.",
      features: [
        {
          image:
            "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop",
          title: "PRODUCT DISCOVERY",
          subtitle: "Shop by category or cuisine",
          description:
            "Intuitive categorization with filters for dietary preferences, meal types, and Swedish specialties.",
        },
        {
          image:
            "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop",
          title: "RECIPE INSPIRATION",
          subtitle: "Cook with IKEA products",
          description:
            "Integrated recipe suggestions using IKEA food products, with one-click add to cart for ingredients.",
        },
        {
          image:
            "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop",
          title: "SUBSCRIPTION SERVICE",
          subtitle: "Never run out",
          description:
            "Flexible subscription options for regular deliveries with easy management and customization.",
        },
      ],
    },
    productCustomization: {
      title: "Tailored Shopping Experience",
      description:
        "Customers can create personalized shopping lists, save favorite products, and set up recurring orders for pantry staples. The platform learns preferences over time and suggests relevant products.",
    },
    loyaltyProgram: {
      title: "IKEA Family Benefits",
      description:
        "Integration with IKEA Family membership program provides exclusive discounts, early access to new products, and special seasonal offers on food items.",
    },
  },
  "turtlewax-website-redesign": {
    id: 3,
    slug: "turtlewax-website-redesign",
    title: "Turtlewax Website Redesign",
    industry: "Automobile",
    heroImage:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=800&fit=crop",
    featuredImage:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=800&fit=crop",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop",
        alt: "Turtlewax homepage design",
        title: "Homepage Hero Section",
      },
      {
        url: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&h=600&fit=crop",
        alt: "Product catalog page",
        title: "Product Catalog",
      },
      {
        url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
        alt: "Interactive car care guide",
        title: "Car Care Resources",
      },
    ],
    projectOverview: {
      title: "Achieving Glossy Greatness with a Smooth Redefined Website",
      description:
        "Modernizing Turtlewax's digital presence with a sleek, responsive website that reflects their premium car care products. With over 75 years of automotive care expertise, Turtlewax needed a digital platform that showcases their innovation and heritage.",
      language: "React / TypeScript",
      timescale: "12 Weeks",
      launchDate: "February 2024",
      system: "Next.js",
      services: [
        "UI/UX Design",
        "Web Development",
        "Content Strategy",
        "SEO Optimization",
        "Performance Optimization",
        "CMS Integration",
      ],
    },
    brandStats: {
      backgroundImage:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=600&fit=crop",
      title: "75+ Years of Automotive Care Excellence",
      stats: [
        { value: "125%", label: "Increase in organic traffic" },
        {
          value: "3.2s",
          label: "Average page load time improvement",
        },
        {
          value: "65%",
          label: "Increase in product page conversions",
        },
      ],
    },
    objectives: [
      {
        icon: "🚗",
        title: "Modernize brand presence",
        description:
          "Update the website to reflect Turtlewax's premium positioning and innovative product line.",
      },
      {
        icon: "🎯",
        title: "Improve product discovery",
        description:
          "Create an intuitive product finder that helps customers select the right car care products for their needs.",
      },
      {
        icon: "📚",
        title: "Educational content hub",
        description:
          "Establish Turtlewax as a thought leader in car care with comprehensive guides and tutorials.",
      },
    ],
    challenges: [
      {
        icon: "🔍",
        title: "Complex product catalog",
        description:
          "Over 200 products across multiple categories needed clear organization and easy navigation.",
      },
      {
        icon: "🌐",
        title: "Global consistency",
        description:
          "Maintaining brand consistency across multiple regional sites while allowing for local customization.",
      },
      {
        icon: "⚡",
        title: "Performance requirements",
        description:
          "Delivering a fast, responsive experience with rich media content and product visualization.",
      },
    ],
    uxDesign: {
      title: "Sleek and Performance-Driven Design",
      description:
        "The redesigned website features bold visuals, smooth animations, and an intuitive interface that guides users through the car care journey.",
      features: [
        {
          image:
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
          title: "PRODUCT FINDER",
          subtitle: "Find your perfect match",
          description:
            "Interactive quiz that recommends products based on vehicle type, condition, and desired results.",
        },
        {
          image:
            "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop",
          title: "HOW-TO GUIDES",
          subtitle: "Step-by-step instructions",
          description:
            "Video tutorials and detailed guides for achieving professional car care results at home.",
        },
        {
          image:
            "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600&h=400&fit=crop",
          title: "WHERE TO BUY",
          subtitle: "Find retailers near you",
          description:
            "Store locator with real-time inventory information and online purchasing options.",
        },
      ],
    },
    productCustomization: {
      title: "Personalized Product Recommendations",
      description:
        "Smart recommendation engine that suggests complementary products and complete car care kits based on user selections and browsing history. The system adapts to seasonal needs and vehicle-specific requirements.",
    },
    loyaltyProgram: {
      title: "Pro Detailer Rewards",
      description:
        "Exclusive program for professional detailers and enthusiasts offering early access to new products, bulk pricing, and expert-level educational content.",
    },
  },
  "lulu-hypermarket-app": {
    id: 4,
    slug: "lulu-hypermarket-app",
    title: "LuLu Hypermarket Mobile App",
    industry: "Retail",
    heroImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop",
    featuredImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
        alt: "LuLu app home screen",
        title: "App Interface",
      },
      {
        url: "https://images.unsplash.com/photo-1601598851547-4302969d0614?w=800&h=600&fit=crop",
        alt: "Shopping list feature",
        title: "Smart Shopping Lists",
      },
      {
        url: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=800&h=600&fit=crop",
        alt: "Delivery tracking",
        title: "Real-time Delivery Tracking",
      },
    ],
    projectOverview: {
      title: "Building a One-Click Path to Groceries",
      description:
        "A comprehensive mobile app with intensive CRM integration for seamless grocery shopping experience. LuLu Hypermarket, one of the largest retail chains in the Middle East with 240+ stores, needed a digital solution to serve millions of customers efficiently.",
      language: "Flutter / Kotlin / Swift",
      timescale: "24 Weeks",
      launchDate: "April 2024",
      system: "Flutter / Firebase",
      services: [
        "UI/UX Design",
        "Mobile App Development",
        "CRM Integration",
        "Payment Gateway",
        "Push Notifications",
        "Analytics Integration",
        "Cloud Infrastructure",
      ],
    },
    brandStats: {
      backgroundImage:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop",
      title: "Serving Millions Across 240+ Stores",
      stats: [
        { value: "500K+", label: "App downloads in first 3 months" },
        {
          value: "40%",
          label: "Of total online sales now through app",
        },
        {
          value: "2.5M",
          label: "Products available for instant search",
        },
      ],
    },
    objectives: [
      {
        icon: "📱",
        title: "Omnichannel experience",
        description:
          "Seamlessly integrate in-store and online shopping with click-and-collect, home delivery, and in-app exclusive deals.",
      },
      {
        icon: "🎯",
        title: "Personalization at scale",
        description:
          "Leverage customer data to provide personalized recommendations, offers, and shopping experiences for millions of users.",
      },
      {
        icon: "⚡",
        title: "Operational efficiency",
        description:
          "Streamline order fulfillment, inventory management, and customer service across the entire store network.",
      },
    ],
    challenges: [
      {
        icon: "📊",
        title: "Massive product catalog",
        description:
          "Managing and displaying 2.5 million SKUs with real-time inventory sync across 240+ locations.",
      },
      {
        icon: "🔄",
        title: "Complex CRM integration",
        description:
          "Integrating with existing legacy CRM systems while maintaining data accuracy and system performance.",
      },
      {
        icon: "🌍",
        title: "Multi-region support",
        description:
          "Supporting multiple languages, currencies, and regional preferences across different markets.",
      },
    ],
    uxDesign: {
      title: "Intuitive Shopping Made Simple",
      description:
        "The app prioritizes ease of use with smart search, personalized recommendations, and quick reordering features that make grocery shopping effortless.",
      features: [
        {
          image:
            "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?w=600&h=400&fit=crop",
          title: "SMART SEARCH",
          subtitle: "Find anything instantly",
          description:
            "AI-powered search with voice support, image recognition, and predictive suggestions.",
        },
        {
          image:
            "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop",
          title: "QUICK REORDER",
          subtitle: "Shop your favorites",
          description:
            "One-tap reordering of frequently purchased items and saved shopping lists.",
        },
        {
          image:
            "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&h=400&fit=crop",
          title: "LIVE TRACKING",
          subtitle: "Know exactly when",
          description:
            "Real-time order tracking from warehouse to doorstep with GPS-enabled delivery updates.",
        },
      ],
    },
    productCustomization: {
      title: "Personalized Shopping Assistant",
      description:
        "The app learns from shopping patterns to create personalized product recommendations, dietary preference filters, and budget-aware suggestions. Smart notifications alert users to deals on their favorite products and remind them of commonly repurchased items.",
    },
    loyaltyProgram: {
      title: "Happy Family Rewards",
      description:
        "Integrated loyalty program where customers earn points on every purchase, unlock tier-based benefits, and receive exclusive app-only offers. Members get early access to sales, birthday specials, and personalized cashback rewards.",
    },
  },
  "joyalukkas-brand-experience": {
    id: 5,
    slug: "joyalukkas-brand-experience",
    title: "Joyalukkas Brand Experience",
    industry: "Retail / Fashion",
    heroImage:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=800&fit=crop",
    featuredImage:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=800&fit=crop",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop",
        alt: "Joyalukkas jewelry showcase",
        title: "3D Jewelry Viewer",
      },
      {
        url: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&h=600&fit=crop",
        alt: "Virtual try-on feature",
        title: "AR Try-On Experience",
      },
      {
        url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=600&fit=crop",
        alt: "Collection gallery",
        title: "Premium Collections",
      },
    ],
    projectOverview: {
      title: "Interactive-First Approach to Timeless Jewelry Experience",
      description:
        "Creating an immersive digital brand experience for one of the world's leading jewelry retailers. With over 160 showrooms globally and a legacy spanning decades, Joyalukkas needed a digital presence that matches their reputation for excellence.",
      language: "React / Three.js / TypeScript",
      timescale: "18 Weeks",
      launchDate: "May 2024",
      system: "Next.js / WebGL",
      services: [
        "Brand Strategy",
        "UI/UX Design",
        "3D Visualization",
        "Web Development",
        "Digital Marketing",
        "AR/VR Integration",
        "Content Production",
      ],
    },
    brandStats: {
      backgroundImage:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=600&fit=crop",
      title: "World's Favorite Jeweler with 160+ Global Showrooms",
      stats: [
        { value: "200%", label: "Increase in online engagement" },
        {
          value: "85%",
          label: "Users interact with 3D product views",
        },
        {
          value: "4.5x",
          label: "Longer average session duration",
        },
      ],
    },
    objectives: [
      {
        icon: "💎",
        title: "Premium digital presence",
        description:
          "Create a luxurious online experience that reflects Joyalukkas's position as a premium jewelry retailer.",
      },
      {
        icon: "🎨",
        title: "Interactive product visualization",
        description:
          "Enable customers to explore jewelry in stunning detail with 3D views and AR try-on capabilities.",
      },
      {
        icon: "🌍",
        title: "Global brand consistency",
        description:
          "Maintain consistent brand experience across different markets while celebrating regional craftsmanship.",
      },
    ],
    challenges: [
      {
        icon: "⚡",
        title: "High-quality 3D rendering",
        description:
          "Rendering photorealistic jewelry with intricate details while maintaining fast load times and smooth performance.",
      },
      {
        icon: "🎭",
        title: "Heritage storytelling",
        description:
          "Balancing modern digital experiences with the rich heritage and traditional craftsmanship of the brand.",
      },
      {
        icon: "📱",
        title: "Cross-device experience",
        description:
          "Delivering immersive 3D and AR experiences across devices with varying capabilities.",
      },
    ],
    uxDesign: {
      title: "Luxury Meets Innovation",
      description:
        "The digital experience combines elegant design with cutting-edge technology, allowing customers to explore jewelry collections in unprecedented detail.",
      features: [
        {
          image:
            "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=400&fit=crop",
          title: "360° PRODUCT VIEW",
          subtitle: "Every angle, every detail",
          description:
            "Interactive 3D models allowing customers to zoom, rotate, and examine jewelry from every angle.",
        },
        {
          image:
            "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=400&fit=crop",
          title: "AR TRY-ON",
          subtitle: "See before you buy",
          description:
            "Augmented reality feature enabling virtual try-on using smartphone camera.",
        },
        {
          image:
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=400&fit=crop",
          title: "COLLECTION STORIES",
          subtitle: "Craftsmanship heritage",
          description:
            "Immersive storytelling showcasing the artistry and inspiration behind each collection.",
        },
      ],
    },
  },
};

export const getPortfolioDetailBySlug = (
  slug: string
): PortfolioDetailContent | null => {
  return PORTFOLIO_DETAILS[slug] || null;
};

export const getAllPortfolioSlugs = (): string[] => {
  return Object.keys(PORTFOLIO_DETAILS);
};

export function getAllPortfolioItems(): PortfolioDetailContent[] {
  return Object.values(PORTFOLIO_DETAILS);
}
