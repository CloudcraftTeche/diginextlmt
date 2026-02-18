"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceHeroSection from "@/components/sections/service-solutions/ServiceHeroSection";
import { ServicesService } from "@/services/ServicesService";
import { SubServiceSkeleton } from "@/components/LoadingSkelton/services/SubServiceSkeleton";
import { getImageWithPlaceholder } from "@/lib/imageUtils";
import { usePageLoading } from "@/hooks/usePageLoading";
import Link from "next/link";
import ProcessAccordionSection from "@/components/sections/service-solutions/ProcessAccordionSection";
import SolutionsOfferedSection from "@/components/sections/service-solutions/OfferedSection";
import PartnerSection from "@/components/sections/service-solutions/PartnerSection";
import CTASection from "@/components/sections/service-solutions/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import { updateSeoMetadata } from "@/lib/seoUtils";

// --- Types matching the API response ---
interface Section1 {
  id: number;
  title: string;
  description: string;
}

interface Section2Item {
  id: number;
  title: string;
  description: string;
}

interface SubServiceData {
  id: number;
  subservice_name: string;
  subservice_description: string;
  sub_service_image: string;
  slug: string;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  latest_service_section1: Section1 | null;
  service_section2: Section2Item[];
}

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    params.then((p) => setSlug(p.slug));
  }, [params]);

  const [data, setData] = useState<SubServiceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setNotFound(false);

        const response = await ServicesService.getSubService(slug);

        if (response.data?.success) {
          const result = response.data.data as SubServiceData;
          setData(result);

          // Update SEO — prefer API meta fields, fall back to name/description
          updateSeoMetadata({
            meta_title:
              result.meta_title ??
              `${result.subservice_name} | Diginext Services`,
            meta_description:
              result.meta_description ??
              result.subservice_description.slice(0, 160),
            meta_keywords:
              result.meta_keywords ?? `${result.subservice_name}, Diginext`,
          });
        } else {
          setNotFound(true);
        }
      } catch (err) {
        console.error(err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  usePageLoading(loading);

  if (!slug || loading) {
    return <SubServiceSkeleton />;
  }

  if (notFound || !data) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Service Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The service you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              href="/services"
              className="inline-block px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
            >
              Back to Services
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // service_section2: first item is the section header, the rest are individual services
  const offeredHeader = data.service_section2?.[0] ?? null;
  const offeredServices =
    data.service_section2?.slice(1).map((item) => ({
      title: item.title,
      description: item.description,
    })) ?? [];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <ServiceHeroSection
          title={data.subservice_name}
          description={data.subservice_description}
          imageSrc={getImageWithPlaceholder(data.sub_service_image)}
          imageAlt={data.subservice_name}
        />

        {/* CTA Section */}
        {data.latest_service_section1 && (
          <CTASection
            title={data.latest_service_section1.title}
            description={data.latest_service_section1.description}
            buttonText="Let's Talk"
            buttonLink="/contact#contact-form"
          />
        )}

        {/* Offered Services Section */}
        {offeredHeader && offeredServices.length > 0 && (
          <SolutionsOfferedSection
            title={offeredHeader.title}
            description={offeredHeader.description}
            services={offeredServices}
          />
        )}

        <ProcessAccordionSection />
        <PartnerSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
