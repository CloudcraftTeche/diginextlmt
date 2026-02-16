"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/ui/HeroBanner";
import { ImageConstants } from "@/constants/ImageConstants";
import PortfolioShowcase from "@/components/sections/ourWorks/PortfolioShowcase";
import { useEffect, useState } from "react";
import { WorkService } from "@/services/WorkService";

interface AsyncState<T> {
  data: T;
  loading: boolean;
  error: string | null;
}

interface ServiceBannerData {
  id: number;
  banner_description_title: string;
  banner_description: string;
  image: string;
}

import { WorksSkeleton } from "@/components/LoadingSkelton/works/WorksSkeleton";
import { updateSeoMetadata } from "@/lib/seoUtils";
import { usePageLoading } from "@/hooks/usePageLoading";

export default function WorksClient() {
  const [works, setWorks] = useState<AsyncState<any[]>>({
    data: [],
    loading: true,
    error: null,
  });

  const [seo, setSeo] = useState<AsyncState<any>>({
    data: null,
    loading: true,
    error: null,
  });

  const [currentFilter, setCurrentFilter] = useState<string>("works");

  const fetchWorksData = async (filter?: {
    expertise?: number;
    industry?: number;
  }) => {
    setWorks((prev) => ({ ...prev, loading: true })); // Set loading true on re-fetch
    try {
      const res = await WorkService.getWorks(filter);
      const worksData = Array.isArray(res.data)
        ? res.data
        : res.data?.data || [];
      setWorks({ data: worksData, loading: false, error: null });
    } catch (err) {
      console.error(err);
      setWorks((prev) => ({
        ...prev,
        loading: false,
        error: "Failed to load works",
      }));
    }
  };

  const fetchDesignsData = async () => {
    setWorks((prev) => ({ ...prev, loading: true })); // Set loading true on fetch
    try {
      const res = await WorkService.getDesigns();
      const designsData = Array.isArray(res.data)
        ? res.data
        : res.data?.data || [];
      setWorks({ data: designsData, loading: false, error: null });
    } catch (err) {
      console.error(err);
      setWorks((prev) => ({
        ...prev,
        loading: false,
        error: "Failed to load designs",
      }));
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchWorksData();

    // Fetch SEO
    WorkService.getSeo()
      .then((res) => {
        if (res.data) {
          setSeo({ data: res.data, loading: false, error: null });
          if (res.data.data) {
            updateSeoMetadata(res.data.data);
          }
        }
      })
      .catch((err) => {
        console.error(err);
        setSeo((prev) => ({
          ...prev,
          loading: false,
          error: "Failed to load SEO",
        }));
      });
  }, []);

  const handleFilter = (
    type: "expertise" | "industry" | "designs",
    id?: number,
  ) => {
    // Handle designs filter separately
    if (type === "designs") {
      setCurrentFilter("designs");
      fetchDesignsData();
      return;
    }

    // Fetch works with filters
    setCurrentFilter("works");
    const filter = type === "expertise" ? { expertise: id } : { industry: id };
    fetchWorksData(filter);
  };

  const isLoading = works.loading && seo.loading && !works.data.length; // Only show full Skeleton on initial load
  usePageLoading(isLoading);

  if (isLoading) {
    return <WorksSkeleton />;
  }

  return (
    <>
      <Header forceTransparent={true} />
      <div className="pt-16">
        <HeroBanner
          backgorundImage={ImageConstants.INSIDE_BANNER_3}
          title="Our Works"
        />
        <PortfolioShowcase
          works={works.data}
          onFilter={handleFilter}
          currentFilter={currentFilter}
        />
        <Footer />
      </div>
    </>
  );
}
