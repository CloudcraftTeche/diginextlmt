"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/ui/HeroBanner";
import CaseStudiesSection from "@/components/sections/insights/CaseStudiesSection";
import { ImageConstants } from "@/constants/ImageConstants";
import { InsightsService } from "@/services/InsightsService";
import { getFullImageUrl } from "@/lib/imageUtils";
import { usePageLoading } from "@/hooks/usePageLoading";
import { InsightsSkeleton } from "@/components/LoadingSkelton/insights/InsightsSkeleton";

interface AsyncState<T> {
  data: T;
  loading: boolean;
  error: string | null;
}

export default function InsightsClient() {
  const [banner, setBanner] = useState<AsyncState<any>>({
    data: null,
    loading: true,
    error: null,
  });

  const [insights, setInsights] = useState<AsyncState<any[]>>({
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      // 1. Fetch Banner
      try {
        setBanner((prev) => ({ ...prev, loading: true }));
        const bannerResponse = await InsightsService.getBanner();
        if (bannerResponse.data?.success) {
          setBanner({
            data: bannerResponse.data.data?.[0],
            loading: false,
            error: null,
          });
        } else {
          // keep loading false even if success is false to prevent infinite loading
          setBanner((prev) => ({ ...prev, loading: false }));
        }
      } catch (error) {
        setBanner({
          data: null,
          loading: false,
          error: "Failed to fetch banner",
        });
      }

      // 2. Fetch Insights List
      try {
        setInsights((prev) => ({ ...prev, loading: true }));
        const listResponse = await InsightsService.getInsights();
        if (listResponse.data?.success) {
          setInsights({
            data: listResponse.data.data || [],
            loading: false,
            error: null,
          });
        } else {
          setInsights((prev) => ({ ...prev, loading: false }));
        }
      } catch (error) {
        setInsights({
          data: [],
          loading: false,
          error: "Failed to fetch insights",
        });
      }
    };

    fetchData();
  }, []);

  const isLoading = banner.loading && insights.loading;
  usePageLoading(isLoading);

  if (isLoading && !banner.data && !insights.data.length) {
    return <InsightsSkeleton />;
  }

  // Map API data to component props
  const caseStudiesArray = insights.data.map((item: any) => ({
    image: getFullImageUrl(item.image),
    title: item.title,
    // Use category as percentage/timeline label or similar if needed, or hide it
    percentage: item.insight_date || "Recent",
    description: item.description
      ? item.description.split(" ").slice(0, 20).join(" ").substring(0, 110) +
        "..."
      : "",
    slug: item.slug || item.id.toString(), // Use slug from API if available
    navigationText: "Read Case Study",
    category: item.category, // Pass category if section supports it
  }));

  const bannerData = banner.data;

  return (
    <div>
      <Header />
      <HeroBanner
        title={bannerData?.title || "Our Projects & Case Studies"}
        subtitle={bannerData?.subtitle}
        // Use banner image from API if valid, else fallback
        backgorundImage={
          bannerData?.banner_image
            ? getFullImageUrl(bannerData.banner_image)
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
