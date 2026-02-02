"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/ui/HeroBanner";
import ShowcaseSection, {
  ServiceItem,
} from "@/components/sections/service-solutions/ShowcaseSection";
import { ServicesService, SubSolution } from "@/services/ServicesService"; // Ensure types are exported
import { ServicesSkeleton } from "@/components/LoadingSkelton/services/ServicesSkeleton"; // Using ServicesSkeleton as it matches listing structure
import { updateSeoMetadata, SeoData } from "@/lib/seoUtils";
import { getImageWithPlaceholder } from "@/lib/imageUtils";
import { usePageLoading } from "@/hooks/usePageLoading";
import { ImageConstants } from "@/constants/ImageConstants";
import { slugify } from "@/lib/utils";

interface AsyncState<T> {
  data: T;
  loading: boolean;
  error: string | null;
}

export default function SolutionsPage() {
  const [solutions, setSolutions] = useState<AsyncState<any[]>>({
    data: [],
    loading: true,
    error: null,
  });

  const [seo, setSeo] = useState<AsyncState<any>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      // Fetch Solutions
      ServicesService.getSolutions()
        .then((res) => {
          // Handle response wrapper
          const data = res.data.data;

          if (Array.isArray(data)) {
            setSolutions({ data: data, loading: false, error: null });
          } else {
            // Fallback or error handling
            setSolutions({
              data: [],
              loading: false,
              error: "Invalid data format",
            });
          }
        })
        .catch((err) => {
          console.error(err);
          setSolutions((prev) => ({
            ...prev,
            loading: false,
            error: "Failed to load solutions",
          }));
        });

      // Fetch SEO
      ServicesService.getSolutionsSeo()
        .then((res) => {
          if (res.data.success) {
            setSeo({ data: res.data.data, loading: false, error: null });

            // Adapt API response (string | null) to SeoData (string | undefined)
            const seoData: SeoData = {
              meta_title: res.data.data.meta_title,
              meta_description: res.data.data.meta_description,
              meta_keywords: res.data.data.meta_keywords,
              banner_image: res.data.data.banner_image || undefined,
            };
            updateSeoMetadata(seoData);
          } else {
            setSeo((prev) => ({ ...prev, loading: false }));
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
    };

    fetchData();
  }, []);

  const isLoading = solutions.loading && seo.loading;
  usePageLoading(isLoading);

  if (isLoading) {
    return <ServicesSkeleton />;
  }

  // Transform Data
  const transformedServices: ServiceItem[] = solutions.data.map((cat: any) => ({
    title: cat.solutions_name,
    description: cat.solutions_description,
    slug: `${cat.id}-${slugify(cat.solutions_name)}`,
    image: getImageWithPlaceholder(cat.solutions_image),
    imageAlt: cat.solutions_name,
    services:
      cat.solutions?.map((sub: SubSolution) => ({
        name: sub.solutions_name,
        slug: `${sub.id}-${slugify(sub.solutions_name)}`,
      })) || [],
  }));

  // Determine Banner Info (Use SEO banner if available, else default)
  const bannerTitle = seo.data?.meta_title ? "Our Solutions" : "Our Solutions"; // Could customize title from SEO if available
  const bannerImage = seo.data?.banner_image
    ? getImageWithPlaceholder(seo.data.banner_image)
    : ImageConstants.INSIDE_BANNER_3;

  return (
    <>
      <Header forceTransparent={true} />

      <div className="pt-16">
        <HeroBanner title={bannerTitle} backgorundImage={bannerImage} />
        <ShowcaseSection basePath="/solutions" services={transformedServices} />
        <Footer />
      </div>
    </>
  );
}
