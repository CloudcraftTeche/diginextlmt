import React from "react";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/hero/HeroSection";
import TrustSection from "@/components/sections/hero/TrustSection";
import CaseStudiesSection from "@/components/sections/hero/CaseStudiesSection";
import EthosSection from "@/components/sections/hero/EthosSection";
import ServicesSection from "@/components/sections/hero/ServicesSection";
import BrandingMarketingSection from "@/components/sections/hero/BrandingMarketingSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/layout/Footer";
export default function Home() {
  return (
    <>
      <Header />

      <div className="pt-16">
        <HeroSection />
        <TrustSection />
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
