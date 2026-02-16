"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/ui/HeroBanner";
import { ImageConstants } from "@/constants/ImageConstants";
import ServiceHeroSection from "@/components/sections/service-solutions/ServiceHeroSection";
import { ServicesService } from "@/services/ServicesService";
import { SubServiceSkeleton } from "@/components/LoadingSkelton/services/SubServiceSkeleton";
import { slugify } from "@/lib/utils";
import { getFullImageUrl } from "@/lib/imageUtils";
import { usePageLoading } from "@/hooks/usePageLoading";
import Link from "next/link";
import ProcessAccordionSection from "@/components/sections/service-solutions/ProcessAccordionSection";
import OfferedSection from "@/components/sections/service-solutions/OfferedSection";
import PartnerSection from "@/components/sections/service-solutions/PartnerSection";
import CTASection from "@/components/sections/service-solutions/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import { updateSeoMetadata } from "@/lib/seoUtils";

interface SubServiceData {
  id: number;
  subservice_name: string;
  subservice_description: string;
  sub_service_image: string;
}

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Unwrap params using React.use() or await in useEffect (standard for next 15 client comps is to just use it, but params is a promise in 15)
  // We'll use local state to track unwrapped slug
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    params.then((p) => setSlug(p.slug));
  }, [params]);

  const [subService, setSubService] = useState<AsyncState<SubServiceData>>({
    data: null,
    loading: true,
    error: null,
  });

  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      if (!slug) {
        setNotFound(true);
        setSubService((prev) => ({ ...prev, loading: false }));
        return;
      }

      try {
        setSubService((prev) => ({ ...prev, loading: true, error: null }));
        setNotFound(false);

        // Fetch Subservice Detail using slug
        const detailRes = await ServicesService.getSubService(slug);
        if (detailRes.data.success) {
          const data = detailRes.data.data;
          setSubService({
            data: data,
            loading: false,
            error: null,
          });

          // Update SEO
          updateSeoMetadata({
            meta_title: `${data.subservice_name} | DiginextServices`,
            meta_description: data.subservice_description.slice(0, 160),
            meta_keywords: `${data.subservice_name}, Diginext`,
          });
        } else {
          throw new Error("Failed to load subservice detail");
        }
      } catch (err) {
        console.error(err);
        setSubService((prev) => ({
          ...prev,
          loading: false,
          error: "Failed to load",
        }));
      }
    };

    fetchData();
  }, [slug]);

  usePageLoading(subService.loading);

  if (!slug || subService.loading) {
    return <SubServiceSkeleton />;
  }

  if (notFound || subService.error || !subService.data) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {notFound
                ? "Service Not Found"
                : "Something successfully Went Wrong"}
            </h1>
            <p className="text-gray-600 mb-8">
              {notFound
                ? "The service you're looking for doesn't exist."
                : "Please try again later."}
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

  const { subservice_name, subservice_description, sub_service_image } =
    subService.data;

  return (
    <>
      <Header forceTransparent={true} />

      <div className="pt-16">
        {/* Hero Banner - Using a generic banner or maybe fetch one if API provided it (it doesn't) */}
        {/* We'll use the subservice image as the banner or a default if not generic enough */}
        <HeroBanner
          backgorundImage={ImageConstants.INSIDE_BANNER_5}
          title={subservice_name}
        />

        {/* Service Hero Section */}
        <ServiceHeroSection
          title={subservice_name}
          description={subservice_description}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: subservice_name, href: `/services/${slug}` },
          ]}
          imageSrc={getFullImageUrl(sub_service_image)}
        />

        {/* Since the API does not provide Data for CTA, Offered, Process, Partner, FAQ sections, 
            we cannot render them dynamically. 
            We omit them to avoid showing static invalid data. */}

        {/*
        {serviceData.ctaSection && (
          <CTASection
            title={serviceData.ctaSection.title}
            description={serviceData.ctaSection.description}
          />
        )}

        <OfferedSection
          title={serviceData.servicesOffered.title}
          description={serviceData.servicesOffered.description}
          services={serviceData.servicesOffered.services}
        />

        <ProcessAccordionSection
          title={serviceData.process.title}
          steps={serviceData.process.steps}
          description={serviceData.process.description}
        />

        {serviceData.partnerSection && (
          <PartnerSection
            title={serviceData.partnerSection.title}
            description={serviceData.partnerSection.description}
          />
        )}

        <FAQSection faqs={serviceData.faqs.items} description="" />
        */}
      </div>

      <Footer />
    </>
  );
}
