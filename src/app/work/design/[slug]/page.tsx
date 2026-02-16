"use client";

import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CaseStudyHero from "@/components/sections/ourWorks/CaseStudyHero";
import ProjectOverview from "@/components/sections/ourWorks/ProjectOverview";
import DesignMediaGallery from "@/components/sections/ourWorks/DesignMediaGallery";
import { notFound, useParams } from "next/navigation";
import { WorkService } from "@/services/WorkService";
import { SubServiceSkeleton } from "@/components/LoadingSkelton/services/SubServiceSkeleton";

export default function DesignDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) {
        setError(true);
        setLoading(false);
        return;
      }

      try {
        const response: any = await WorkService.getDesignDetail(slug);

        if (response.data && response.data.success) {
          setData(response.data.data);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return <SubServiceSkeleton />;
  }

  if (error || !data) {
    return notFound();
  }

  // --- Data Mapping ---
  const heroData = {
    title: data.banner_heading || data.title,
    description: data.description,
    heroImage: data.banner_image,
    industry: "Design", // Could be made dynamic if available in API
  };

  // Optional: Only show ProjectOverview if we have relevant data
  const hasOverviewData =
    data.language || data.timescale || data.launchDate || data.system;

  const overviewData = hasOverviewData
    ? {
        title: data.title,
        description: data.description,
        language: data.language || "N/A",
        timescale: data.timescale || data.timeline || "N/A",
        launchDate: data.launchDate || data.year || "N/A",
        system: data.system || "Design",
        services: data.services || [],
      }
    : null;

  return (
    <>
      <Header forceTransparent={true} />
      <div className="pt-16">
        <CaseStudyHero data={heroData} />

        {overviewData && <ProjectOverview data={overviewData} />}

        <DesignMediaGallery images={data.images || []} />

        <Footer />
      </div>
    </>
  );
}
