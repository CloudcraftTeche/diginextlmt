// "use client";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HeroBanner from "@/components/ui/HeroBanner";
import { ImageConstants } from "@/constants/ImageConstants";
import { generatePageMetadata } from "@/lib/metadata";
import { PAGES_SEO } from "@/lib/seo-data";
import { Metadata } from "next";
import React from "react";
import CaseStudiesSection from "@/components/sections/insights/CaseStudiesSection";
import { InsightsService } from "@/services/InsightsService";

export const metadata: Metadata = generatePageMetadata(
  PAGES_SEO.insights,
  "/insights",
);

export default async function InsightsPage() {
  let bannerData = null;
  let insightsData = [];

  try {
    const [bannerResponse, listResponse] = await Promise.all([
      InsightsService.getBanner(),
      InsightsService.getInsights(),
    ]);

    if (bannerResponse.data?.success) {
      bannerData = bannerResponse.data.data?.[0];
    }

    if (listResponse.data?.success) {
      insightsData = listResponse.data.data || [];
    }
  } catch (error) {
    console.warn("Failed to fetch insights data:", error);
  }

  // Map API data to component props
  const caseStudiesArray = insightsData.map((item: any) => ({
    image: item.image,
    title: item.title,
    // Use category as percentage/timeline label or similar if needed, or hide it
    percentage: item.insight_date || "Recent",
    description: item.description
      ? item.description.split(" ").slice(0, 20).join(" ").substring(0, 110) +
        "..."
      : "",
    slug: item.id.toString(), // Use ID as slug for now
    navigationText: "Read Case Study",
    category: item.category, // Pass category if section supports it
  }));

  return (
    <div>
      <Header />
      <HeroBanner
        title={bannerData?.title || "Our Projects & Case Studies"}
        subtitle={bannerData?.subtitle}
        // Use banner image from API if valid, else fallback
        backgorundImage={
          bannerData?.banner_image
            ? bannerData.banner_image
            : ImageConstants.INSIDE_BANNER_6
        }
      />
      <CaseStudiesSection
        mainTitle={
          bannerData?.subtitle || "Client Success Stories & Our Insights"
        }
        subtitle={
          bannerData?.description ||
          "Discover how we've helped businesses across various industries achieve remarkable growth through strategic digital solutions and innovative IT services."
        }
        buttonText="View All Projects"
        caseStudies={caseStudiesArray}
      />
      <Footer />
    </div>
  );
}
