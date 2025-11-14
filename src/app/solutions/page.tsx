// app/solutions/page.tsx
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import { StructuredData } from "@/components/seo/StructuredData";
import { SITE_CONFIG } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/metadata";
import { PAGES_SEO } from "@/lib/seo-data";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/ui/HeroBanner";
import ShowcaseSection from "@/components/sections/solutions/ShowcaseSection";
import { ImageConstants } from "@/constants/ImageConstants";

// SEO Metadata Export - Use solutions metadata
export const metadata: Metadata = generatePageMetadata(
  PAGES_SEO.solutions,
  "/solutions"
);

export default function SolutionsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Our Solutions",
    description: PAGES_SEO.solutions.description,
    url: `${SITE_CONFIG.url}/solutions`,
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  };

  return (
    <>
      <StructuredData data={structuredData} />

      <Header forceTransparent={true} />

      {/* Main content with top padding to account for fixed header */}
      <div className="pt-16">
        <HeroBanner 
          backgorundImage={ImageConstants.INSIDE_BANNER_3} 
          title="Our Solutions" 
        />
        <ShowcaseSection />

        <Footer />
      </div>
    </>
  );
}
