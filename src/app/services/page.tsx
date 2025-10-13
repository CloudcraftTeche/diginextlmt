import { Metadata } from "next";
import Header from "@/components/layout/Header";
import { StructuredData } from "@/components/seo/StructuredData";
import { SITE_CONFIG } from "@/lib/constants";
import { generateHomePageMetadata } from "@/lib/metadata";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/ui/HeroBanner";
import ShowcaseSection from "@/components/sections/service/ShowcaseSection";
import { ImageConstants } from "@/constants/ImageConstants";

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

      <Header forceTransparent={true} />

      {/* Main content with top padding to account for fixed header */}
      <div className="pt-16">
        {/* <HeroSection /> */}
        <HeroBanner backgorundImage={ImageConstants.INSIDE_BANNER_1} />
        <ShowcaseSection />

        <Footer />
      </div>
    </>
  );
}
