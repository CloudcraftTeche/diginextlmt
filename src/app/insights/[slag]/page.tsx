// FILE 1: app/work/[slug]/page.tsx
// Remove "use client" directive and make it a server component

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import BrandingShowcase from "@/components/sections/insights/BrandingShowcase";
import InviteHero from "@/components/sections/insights/InviteHero";
import ServicesProvided from "@/components/sections/insights/ServicesProvided";
import { ImageConstants } from "@/constants/ImageConstants";
import React from "react";
import { notFound } from "next/navigation";

// Define case study data structure
interface CaseStudyData {
  slug: string;
  inviteHero: {
    title: {
      part1: string;
      part2: string;
      part3: string;
    };
    description: string;
    buttonText: string;
  };
  servicesProvided: {
    title: string;
    description: string;
    details: Array<{
      label: string;
      value: string;
    }>;
    buttonText: string;
    buttonLink: string;
  };
  brandingShowcase: {
    title: string;
    description: string;
    subDescription: string;
    images: Array<{
      id: number;
      alt: string;
      gradient: string;
      img: string;
    }>;
  };
}

// Case study database
const caseStudiesData: Record<string, CaseStudyData> = {
  "caribou-coffee-case-study": {
    slug: "caribou-coffee-case-study",
    inviteHero: {
      title: {
        part1: "Digital",
        part2: "Innovation",
        part3: "Excellence",
      },
      description:
        "Transforming a beloved coffee chain's digital presence with cutting-edge mobile technology and seamless user experience design for the Kuwait market.",
      buttonText: "Explore Project",
    },
    servicesProvided: {
      title: "Services Provided",
      description:
        "We developed a comprehensive mobile application solution for Caribou Coffee Kuwait, integrating advanced ordering systems, loyalty programs, and real-time tracking to enhance customer engagement and streamline operations.",
      details: [
        {
          label: "Technology",
          value: "React Native / Node.js / Firebase / Stripe Payment Gateway",
        },
        {
          label: "Timeline",
          value: "16 Weeks",
        },
        {
          label: "Platform",
          value: "iOS & Android Mobile Applications",
        },
        {
          label: "Industry",
          value: "Food & Beverage / Quick Service Restaurant",
        },
      ],
      buttonText: "View App Store",
      buttonLink: "#",
    },
    brandingShowcase: {
      title: "Mobile-First Coffee Experience",
      description:
        "The Caribou Coffee mobile app represents a perfect blend of functionality and user experience. We created an intuitive ordering system that allows customers to customize their favorite beverages, schedule pickups, and earn rewards seamlessly. The app features a clean, modern interface that reflects Caribou's brand identity while prioritizing ease of use. From browsing the menu to completing payments, every interaction was designed to be smooth and delightful.",
      subDescription:
        "Our solution included advanced features such as real-time order tracking, personalized recommendations based on order history, integrated loyalty rewards system, and geolocation-based store finder. The app also supports multiple payment methods and offers exclusive mobile-only promotions, driving customer engagement and increasing repeat orders by 45% within the first quarter of launch.",
      images: [
        {
          id: 1,
          alt: "Caribou App Interface",
          gradient: "from-amber-900 to-orange-800",
          img: ImageConstants.CASE_STUDY_1,
        },
        {
          id: 2,
          alt: "Mobile Ordering System",
          gradient: "from-emerald-600 to-green-700",
          img: ImageConstants.CASE_STUDY_2,
        },
        {
          id: 3,
          alt: "Loyalty Program",
          gradient: "from-teal-700 to-emerald-800",
          img: ImageConstants.CASE_STUDY_3,
        },
      ],
    },
  },
  "ikea-foods-case-study": {
    slug: "ikea-foods-case-study",
    inviteHero: {
      title: {
        part1: "E-commerce",
        part2: "Innovation",
        part3: "Success",
      },
      description:
        "Launching a new digital sales channel for IKEA Foods with a beautifully designed, high-performance e-commerce platform that brings Swedish food culture to customers worldwide.",
      buttonText: "View Live Site",
    },
    servicesProvided: {
      title: "Services Provided",
      description:
        "We designed and developed a complete e-commerce solution for IKEA Foods, featuring an elegant storefront, robust inventory management, secure payment processing, and seamless logistics integration to create a world-class online shopping experience.",
      details: [
        {
          label: "Technology",
          value: "Magento 2 / React / PHP / MySQL / AWS Cloud Infrastructure",
        },
        {
          label: "Timeline",
          value: "20 Weeks",
        },
        {
          label: "Platform",
          value: "E-commerce Website & Progressive Web App",
        },
        {
          label: "Industry",
          value: "Retail Food & Gourmet Products",
        },
      ],
      buttonText: "Visit Store",
      buttonLink: "#",
    },
    brandingShowcase: {
      title: "Swedish Flavors, Digital Excellence",
      description:
        "The IKEA Foods e-commerce platform brings the iconic Swedish food experience online with a sophisticated yet user-friendly design. We created a visually stunning storefront that showcases IKEA's curated selection of food products, from their famous Swedish meatballs to artisanal jams and chocolates. The platform features high-quality product photography, detailed descriptions with nutritional information, and recipe suggestions to inspire customers and enhance their shopping experience.",
      subDescription:
        "Our comprehensive solution includes advanced features such as intelligent product recommendations, subscription options for regular deliveries, gift box builders for special occasions, and a seamless checkout process with multiple payment and shipping options. The platform also integrates with IKEA's existing loyalty program and provides real-time inventory updates across multiple warehouses. Since launch, the platform has achieved a 60% increase in online food sales and received outstanding customer satisfaction ratings.",
      images: [
        {
          id: 1,
          alt: "IKEA Foods Storefront",
          gradient: "from-blue-900 to-indigo-800",
          img: ImageConstants.CASE_STUDY_1,
        },
        {
          id: 2,
          alt: "Product Catalog",
          gradient: "from-yellow-600 to-amber-700",
          img: ImageConstants.CASE_STUDY_2,
        },
        {
          id: 3,
          alt: "Shopping Experience",
          gradient: "from-blue-700 to-cyan-800",
          img: ImageConstants.CASE_STUDY_3,
        },
      ],
    },
  },
  "turtlewax-case-study": {
    slug: "turtlewax-case-study",
    inviteHero: {
      title: {
        part1: "Website",
        part2: "Redesign",
        part3: "Excellence",
      },
      description:
        "Revamping the digital presence of a legendary automotive care brand with a sleek, modern website that showcases products and educates car enthusiasts worldwide.",
      buttonText: "Discover More",
    },
    servicesProvided: {
      title: "Services Provided",
      description:
        "We completely redesigned and redeveloped the Turtlewax website with a focus on user experience, product education, and conversion optimization. The new platform features interactive product finders, video tutorials, and seamless e-commerce integration.",
      details: [
        {
          label: "Technology",
          value: "Next.js / React / Contentful CMS / Shopify Integration",
        },
        {
          label: "Timeline",
          value: "14 Weeks",
        },
        {
          label: "Platform",
          value: "Responsive Website & Content Management System",
        },
        {
          label: "Industry",
          value: "Automotive Care & Consumer Products",
        },
      ],
      buttonText: "View Website",
      buttonLink: "#",
    },
    brandingShowcase: {
      title: "Shine Redefined",
      description:
        "The redesigned Turtlewax website represents a perfect fusion of automotive passion and digital innovation. We created an immersive online experience that educates customers about car care while showcasing Turtlewax's extensive product lineup. The site features interactive product selectors that help users find the perfect solution for their vehicle care needs, comprehensive how-to guides with step-by-step video tutorials, and before-and-after galleries demonstrating product effectiveness.",
      subDescription:
        "Our solution includes advanced features such as a virtual car care advisor powered by smart algorithms, a community forum where enthusiasts share tips and results, integrated e-commerce functionality with dealer locators, and a mobile-optimized design that performs flawlessly across all devices. The website also features rich content including expert advice articles, seasonal care guides, and product comparison tools. Since launching the new website, Turtlewax has seen a 75% increase in online engagement, 50% growth in direct sales, and significantly improved customer education metrics.",
      images: [
        {
          id: 1,
          alt: "Turtlewax Homepage",
          gradient: "from-green-900 to-emerald-800",
          img: ImageConstants.CASE_STUDY_1,
        },
        {
          id: 2,
          alt: "Product Finder Tool",
          gradient: "from-slate-600 to-gray-700",
          img: ImageConstants.CASE_STUDY_2,
        },
        {
          id: 3,
          alt: "Tutorial Videos",
          gradient: "from-teal-700 to-green-800",
          img: ImageConstants.CASE_STUDY_3,
        },
      ],
    },
  },
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  // Await params in Next.js 15+
  const { slug } = await params;

  // Get case study data
  const caseStudy = caseStudiesData[slug];

  // If case study not found, show 404
  if (!caseStudy) {
    notFound();
  }

  return (
    <div>
      <Header />
      <InviteHero
        title={caseStudy.inviteHero.title}
        description={caseStudy.inviteHero.description}
        buttonText={caseStudy.inviteHero.buttonText}
        buttonLink="#services"
      />
      <ServicesProvided
        title={caseStudy.servicesProvided.title}
        description={caseStudy.servicesProvided.description}
        details={caseStudy.servicesProvided.details}
        buttonText={caseStudy.servicesProvided.buttonText}
        buttonLink={caseStudy.servicesProvided.buttonLink}
      />
      <BrandingShowcase
        title={caseStudy.brandingShowcase.title}
        description={caseStudy.brandingShowcase.description}
        subDescription={caseStudy.brandingShowcase.subDescription}
        images={caseStudy.brandingShowcase.images}
      />
      <Footer />
    </div>
  );
}
