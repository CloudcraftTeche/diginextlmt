import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import BrandingShowcase from "@/components/sections/ourWorks/BrandingShowcase";
import InviteHero from "@/components/sections/ourWorks/InviteHero";
import ServicesProvided from "@/components/sections/ourWorks/ServicesProvided";
import HeroBanner from "@/components/ui/HeroBanner";
import { ImageConstants } from "@/constants/ImageConstants";
import React from "react";

export default function page() {
  return (
    <div>
      <Header />
      <HeroBanner title="Our Works" />
      {/* <InviteHero />
      <ServicesProvided />
      <BrandingShowcase /> */}
      <CaseStudiesSection
        caseStudies={[
          {
            image: ImageConstants.CASE_STUDY_DETAILED_2,
            title: "Food",
            // percentage: "100X",
            description:
              "Caribou: Helping a reputed coffee chain go digital with a powerful app in their Kuwait chapter",
            slag: "caribou-coffee-case-study",
            navigationText: "Read Case Study",
          },
          {
            image: ImageConstants.CASE_STUDY_DETAILED_1,
            title: "Retail Food",
            description:
              "IKEA Foods: Delectably designed branded E-commerce store to launch a new sales channel",
            slag: "ikea-foods-case-study",
            navigationText: "Read Case Study",
          },
          {
            image: ImageConstants.CASE_STUDY_DETAILED_3,
            title: "Automobile",
            description:
              "Turtlewax: Achieving glossy greatness for cars with a smooth redefined website",
            slag: "turtlewax-case-study",
            navigationText: "Read Case Study",
          },
        ]}
        mainTitle="Case Studies"
      />
      <Footer />
    </div>
  );
}
