import { Metadata } from "next";
import Header from "@/components/layout/Header";
import { StructuredData } from "@/components/seo/StructuredData";
import { SITE_CONFIG } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/metadata";
import { PAGES_SEO } from "@/lib/seo-data";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/ui/HeroBanner";
import { ImageConstants } from "@/constants/ImageConstants";
import ShowcaseSection, {
  ServiceItem,
} from "@/components/sections/service-solutions/ShowcaseSection"; 

// SEO Metadata Export - Use solutions metadata
export const metadata: Metadata = generatePageMetadata(
  PAGES_SEO.solutions,
  "/solutions"
);

// Services Data (Local)
const SOLUTIONS_DATA: ServiceItem[] = [
  {
    title: "Print & Signages",
    description:
      "Professional printing and signage solutions for your business branding needs",
    slug: "print-signages",
    image:
      "https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?w=800&h=600&fit=crop",
    imageAlt: "Print and Signages Services",
    services: [
      { name: "Digital Printing", slug: "digital-printing" },
      { name: "Signages", slug: "signages" },
      { name: "Exhibition Stand Builders", slug: "exhibition-stand-builders" },
      { name: "Corporate Gift", slug: "corporate-gift" },
    ],
  },
  {
    title: "Marketing",
    description:
      "Strategic marketing solutions to accelerate your business growth and enhance brand visibility",
    slug: "marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    imageAlt: "Marketing Services",
    services: [
      { name: "Performance Marketing", slug: "performance-marketing" },
      { name: "Marketing Consultant", slug: "marketing-consultant" },
      { name: "Growth Marketing", slug: "growth-marketing" },
      { name: "Content Marketing", slug: "content-marketing" },
      { name: "Influencer Marketing", slug: "influencer-marketing" },
    ],
  },
  {
    title: "IT Infrastructure",
    description:
      "Comprehensive IT infrastructure services ensuring robust and secure technology operations",
    slug: "it-infrastructure",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    imageAlt: "IT Infrastructure Services",
    services: [
      { name: "IT Services", slug: "it-services" },
      { name: "Enterprise Solutions", slug: "enterprise-solutions" },
      { name: "GIS Planning", slug: "gis-planning" },
      { name: "On Site Support", slug: "on-site-support" },
      { name: "Cyber Security", slug: "cyber-security" },
    ],
  },
  {
    title: "Custom Softwares",
    description:
      "Tailored software development solutions designed to meet your unique business requirements",
    slug: "custom-softwares",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    imageAlt: "Custom Software Services",
    services: [
      { name: "HR Software Development", slug: "hr-software-development" },
      { name: "Enterprise CRM Software", slug: "enterprise-crm-software" },
      {
        name: "ERP Development Consultation",
        slug: "erp-development-consultation",
      },
      { name: "Custom Dashboard Design", slug: "custom-dashboard-design" },
      { name: "ERP Data Migration", slug: "erp-data-migration" },
      { name: "ERP App Development", slug: "erp-app-development" },
      {
        name: "Learning Management System",
        slug: "learning-management-system",
      },
      {
        name: "DevOps",
        slug: "devops-and-cloud-solutions",
      },
    ],
  },
];

export default function SolutionsPage() {
  // const structuredData = {
  //   "@context": "https://schema.org",
  //   "@type": "CollectionPage",
  //   name: "Our Solutions",
  //   description: PAGES_SEO.solutions.description,
  //   url: `${SITE_CONFIG.url}/solutions`,
  //   provider: {
  //     "@type": "Organization",
  //     name: SITE_CONFIG.name,
  //     url: SITE_CONFIG.url,
  //   },
  // };

  return (
    <>
      {/* <StructuredData data={structuredData} /> */}

      <Header forceTransparent={true} />

      {/* Main content with top padding to account for fixed header */}
      <div className="pt-16">
        <HeroBanner
          backgorundImage={ImageConstants.INSIDE_BANNER_3}
          title="Our Solutions"
        />
        {/* FIX: Set basePath for solutions */}
        <ShowcaseSection services={SOLUTIONS_DATA} basePath="/solutions" />

        <Footer />
      </div>
    </>
  );
}
