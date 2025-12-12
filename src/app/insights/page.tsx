// "use client";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HeroBanner from "@/components/ui/HeroBanner";
import { ImageConstants } from "@/constants/ImageConstants";
import { generatePageMetadata } from "@/lib/metadata";
import { PAGES_SEO } from "@/lib/seo-data";
import { caseStudyData } from "@/lib/insightsData";
import { Metadata } from "next";
import React from "react";
import CaseStudiesSection from "@/components/sections/insights/CaseStudiesSection";

export const metadata: Metadata = generatePageMetadata(
  PAGES_SEO.insights,
  "/insights"
);

export default function InsightsPage() {
  // ✅ FIXED: Truncate description to fit line-clamp-3 (max ~120 chars)
  const caseStudiesArray = Object.entries(caseStudyData)
    // .slice(0, 9) // Limit to 9 for grid layout (3x3)
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
    <div>
      <Header />
      <HeroBanner
        title="Our Projects & Case Studies"
        backgorundImage={ImageConstants.INSIDE_BANNER_6}
      />
      <CaseStudiesSection
        mainTitle="Client Success Stories & Our Insights"
        subtitle="Discover how we've helped businesses across various industries achieve remarkable growth through strategic digital solutions and innovative IT services."
        buttonText="View All Projects"
        caseStudies={caseStudiesArray}
      />
      <Footer />
    </div>
  );
}
