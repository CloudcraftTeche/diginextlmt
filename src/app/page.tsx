import { Metadata } from "next";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import { StructuredData } from "@/components/seo/StructuredData";
import { SITE_CONFIG } from "@/lib/constants";
import { generateHomePageMetadata } from "@/lib/metadata";
import TrustSection from "@/components/sections/TrustSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import EthosSection from "@/components/sections/EthosSection";
import ServicesSection from "@/components/sections/ServicesSection";
import BrandingMarketingSection from "@/components/sections/BrandingMarketingSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/layout/Footer";
import ITSolutionsHero from "@/components/sections/ITSolutionsHeroSection";

// SEO Metadata Export
export const metadata: Metadata = generateHomePageMetadata();

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DigiNext",
    description:
      "Think. Create. Inspire - Innovative marketing strategies and web development solutions",
    url: SITE_CONFIG.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <StructuredData data={structuredData} />

      <Header isTransparent={true} forceTransparent={true} />

      {/* Main content with top padding to account for fixed header */}
      <div className="pt-16">
        <HeroSection />
        <TrustSection />
        <ITSolutionsHero />
        <CaseStudiesSection />
        <EthosSection />
        <ServicesSection />
        <BrandingMarketingSection />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
}
