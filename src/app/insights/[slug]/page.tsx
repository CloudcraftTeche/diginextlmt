import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React from "react";
import CaseStudyPage from "@/components/sections/insights/CaseStudySlug";
import { InsightsService } from "@/services/InsightsService";
import { notFound } from "next/navigation";

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
    if (response.data.success && response.data.data) {
      // API might return array or object depending on implementation,
      // based on service update it returns object or null.
      // If it was returning array [insight], we need to handle that too just in case.
      // The user provided example shows "data": { ... } object.
      // But my service update `data: insight ? insight : null` returns object.
      // However, `mockInsightsList` logic in service returned `[insight]` in original code.
      // I updated logic to return `insight` (object) in fallback.
      // Let's assume consistent object return from service wrapper I wrote.
      caseStudy = response.data.data;

      // Handle case where API might wrap single item in array (common pattern check)
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
      <Footer />
    </div>
  );
}
