import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React from "react";
import CaseStudyPage from "@/components/sections/insights/CaseStudySlug";
import { InsightsService } from "@/services/InsightsService";
import { notFound } from "next/navigation";
import BrandingShowcase from "@/components/sections/insights/BrandingShowcase";
import CaseStudiesSection from "@/components/sections/hero/CaseStudiesSection";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;

  let caseStudy = null;

  try {
    const response = await InsightsService.getInsightById(slug);
    console.log("response", response);
    if (response.data.success && response.data.data) {
      caseStudy = response.data.data;

      if (Array.isArray(caseStudy)) {
        caseStudy = caseStudy[0];
      }
    }
  } catch (error) {
    console.error("Failed to fetch insight:", error);
  }

  if (!caseStudy) {
    notFound();
  }

  return (
    <div>
      <Header />
      <CaseStudyPage data={caseStudy} />
      {/* <BrandingShowcase/>
      <CaseStudiesSection/> */}

      <Footer />
    </div>
  );
}
