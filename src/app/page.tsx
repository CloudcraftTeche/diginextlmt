// app/page.tsx
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/hero/HeroSection";
import { StructuredData } from "@/components/seo/StructuredData";
import { SITE_CONFIG } from "@/lib/constants";
import { PAGES_SEO } from "@/lib/seo-data";
import { generatePageMetadata } from "@/lib/metadata";
import TrustSection from "@/components/sections/hero/TrustSection";
import EthosSection from "@/components/sections/hero/EthosSection";
import ServicesSection from "@/components/sections/hero/ServicesSection";
import BrandingMarketingSection from "@/components/sections/hero/BrandingMarketingSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/layout/Footer";
import ITSolutionsHero from "@/components/sections/hero/ITSolutionsHero";
import { caseStudyData } from "@/lib/insightsData";
import CaseStudiesSection from "@/components/sections/insights/CaseStudiesSection";

export const metadata: Metadata = generatePageMetadata(PAGES_SEO.home, "/");

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    description: PAGES_SEO.home.description,
    url: SITE_CONFIG.url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
  // ✅ FIXED: Truncate description to fit line-clamp-3 (max ~120 chars)
  const caseStudiesArray = Object.entries(caseStudyData)
    .slice(0, 3) // Limit to 9 for grid layout (3x3)
    .map(([slug, data]) => ({
      image: data.heroImage,
      title: data.client,
      percentage: data.timeline,
      // ✅ Truncate to first 110 chars + "..." to fit line-clamp-3 perfectly
      description: data.overview.description
        .split(" ")
        .slice(0, 20)
        .join(" ")
        .substring(0, 110) + "...",
      slug: slug,
      navigationText: "Read Case Study",
    }));
  return (
    <>
      <StructuredData data={structuredData} />
      <Header isTransparent={true} forceTransparent={true} />
      <div className="pt-16">
        <HeroSection />
        <TrustSection />
        <ITSolutionsHero />
        <CaseStudiesSection caseStudies={caseStudiesArray}/>
        <EthosSection />
        <ServicesSection />
        <BrandingMarketingSection />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
}
