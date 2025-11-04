import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import BrandingShowcase from "@/components/sections/ourWorks/BrandingShowcase";
import InviteHero from "@/components/sections/ourWorks/InviteHero";
import ServicesProvided from "@/components/sections/ourWorks/ServicesProvided";
import React from "react";

export default function page() {
  return (
    <div>
      <Header />

      <InviteHero />
      <ServicesProvided />
      <BrandingShowcase />
      <CaseStudiesSection />
      <Footer />
    </div>
  );
}
