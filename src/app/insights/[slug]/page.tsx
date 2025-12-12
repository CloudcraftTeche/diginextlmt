import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React from "react";
import CaseStudyPage from "@/components/sections/insights/CaseStudySlug";
import { caseStudyData } from "@/lib/insightsData";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  const caseStudy = caseStudyData[slug];
  if (!caseStudy) {
    notFound();
  }

  return (
    <div>
      <Header />
      <CaseStudyPage slug={slug} />
      <Footer />
    </div>
  );
}
