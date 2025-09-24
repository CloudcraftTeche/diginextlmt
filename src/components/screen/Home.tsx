import React from "react";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import EthosSection from "@/components/sections/EthosSection";
import ServicesSection from "@/components/sections/ServicesSection";
import BrandingMarketingSection from "@/components/sections/BrandingMarketingSection";
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
