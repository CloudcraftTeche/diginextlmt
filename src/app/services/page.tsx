"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/ui/HeroBanner";
import ShowcaseSection, {
  ServiceItem,
} from "@/components/sections/service-solutions/ShowcaseSection";
import { ServicesService } from "@/services/ServicesService";
import { ServicesSkeleton } from "@/components/LoadingSkelton/services/ServicesSkeleton";
import { updateSeoMetadata } from "@/lib/seoUtils";
import { getFullImageUrl } from "@/lib/imageUtils";
import { usePageLoading } from "@/hooks/usePageLoading";
import { slugify } from "@/lib/utils";

// Interfaces for API Data
interface ServiceBannerData {
  id: number;
  banner_description_title: string;
  banner_description: string;
  image: string;
}

interface SubServiceData {
  id: number;
  subservice_name: string;
  subservice_description: string;
  sub_service_image: string;
}

interface ServiceData {
  id: number;
  service_name: string;
  service_description: string;
  service_image: string;
  subservices: SubServiceData[];
}

interface AsyncState<T> {
  data: T;
  loading: boolean;
  error: string | null;
}

export default function ServicesPage() {
  // State
  const [banner, setBanner] = useState<AsyncState<ServiceBannerData[]>>({
    data: [],
    loading: true,
    error: null,
  });

  const [services, setServices] = useState<AsyncState<ServiceData[]>>({
    data: [],
    loading: true,
    error: null,
  });

  const [seo, setSeo] = useState<AsyncState<any>>({
    data: null,
    loading: true,
    error: null,
  });

  // Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      // Fetch Banner
      ServicesService.getBanner()
        .then((res) => {
          if (res.data.success) {
            setBanner({ data: res.data.data, loading: false, error: null });
          } else {
            throw new Error("Failed to load banner");
          }
        })
        .catch((err) => {
          console.error(err);
          setBanner((prev) => ({
            ...prev,
            loading: false,
            error: "Failed to load banner",
          }));
        });

      // Fetch Services
      ServicesService.getServices()
        .then((res) => {
          if (res.data.success) {
            setServices({ data: res.data.data, loading: false, error: null });
          } else {
            throw new Error("Failed to load services");
          }
        })
        .catch((err) => {
          console.error(err);
          setServices((prev) => ({
            ...prev,
            loading: false,
            error: "Failed to load services",
          }));
        });

      // Fetch SEO
      ServicesService.getSeo()
        .then((res) => {
          if (res.data.success) {
            setSeo({ data: res.data.data, loading: false, error: null });
            updateSeoMetadata(res.data.data);
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

  const isLoading = banner.loading && services.loading && seo.loading;
  usePageLoading(isLoading);

  if (isLoading) {
    return <ServicesSkeleton />;
  }

  // Transform API data to component props
  const bannerData = banner.data[0];
  const pageTitle = bannerData?.banner_description_title || "Our Services";
  const pageImage = getFullImageUrl(bannerData?.image);

  const transformedServices: ServiceItem[] = services.data.map(
    (service: any) => ({
      title: service.service_name,
      description: service.service_description,
      slug: service.slug || slugify(service.service_name),
      image: getFullImageUrl(service.service_image),
      imageAlt: service.service_name,
      services: service.subservices.map((sub: any) => ({
        name: sub.subservice_name,
        slug: sub.slug || slugify(sub.subservice_name),
      })),
    }),
  );

  return (
    <>
      <Header forceTransparent={true} />

      <div className="pt-16">
        <HeroBanner title={pageTitle} backgorundImage={pageImage} />
        <ShowcaseSection basePath="/services" services={transformedServices} />
        <Footer />
      </div>
    </>
  );
}
