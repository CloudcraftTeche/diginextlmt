import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import HeroBanner from "@/components/ui/HeroBanner";
import { ImageConstants } from "@/constants/ImageConstants";
import React from "react";

export default function page() {
  return (
    <div>
      <Header />
      <HeroBanner
        title="Projects"
        backgorundImage={ImageConstants.INSIDE_BANNER_6}
      />
      <CaseStudiesSection
        caseStudies={[
          {
            image: ImageConstants.CASE_STUDY_1,
            title: "Organic Growth",
            // percentage: "100X",
            description:
              "By providing professional IT solutions consulting, we helped businesses to achieve excellent organic growth, giving them an advantage over their competitors and a chance to reach a larger audience.",
          },
          {
            image: ImageConstants.CASE_STUDY_2,
            title: "Branding Design",
            description:
              "Partner with us to build a strong brand identity that accurately reflects our whole range of IT solutions and services.",
          },
          {
            image: ImageConstants.CASE_STUDY_3,
            title: "Design Concepts",
            description:
              "As the best IT solution company in Dubai, we transform brands by creating powerful designs that communicate our innovative IT solution services with clarity and visual appeal.",
          },
          {
            image: ImageConstants.CASE_STUDY_1,
            title: "Organic Growth",
            // percentage: "100X",
            description:
              "By providing professional IT solutions consulting, we helped businesses to achieve excellent organic growth, giving them an advantage over their competitors and a chance to reach a larger audience.",
          },
          {
            image: ImageConstants.CASE_STUDY_2,
            title: "Branding Design",
            description:
              "Partner with us to build a strong brand identity that accurately reflects our whole range of IT solutions and services.",
          },
          {
            image: ImageConstants.CASE_STUDY_3,
            title: "Design Concepts",
            description:
              "As the best IT solution company in Dubai, we transform brands by creating powerful designs that communicate our innovative IT solution services with clarity and visual appeal.",
          },
        ]}
      />
      <Footer />
    </div>
  );
}
