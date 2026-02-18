"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ServicesService } from "@/services/ServicesService";
import { SolutionLoadingSkeleton } from "@/components/LoadingSkelton/services/SolutionLoadingSkeleton";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceHeroSection from "@/components/sections/service-solutions/ServiceHeroSection";
import SolutionsOfferedSection from "@/components/sections/service-solutions/OfferedSection";
import CTASection from "@/components/sections/service-solutions/CTASection";
import { getImageWithPlaceholder } from "@/lib/imageUtils";
import { updateSeoMetadata } from "@/lib/seoUtils";
import PartnerSection from "@/components/sections/service-solutions/PartnerSection";
import FAQSection from "@/components/sections/FAQSection";
import ProcessAccordionSection from "@/components/sections/service-solutions/ProcessAccordionSection";
import HeroBanner from "@/components/ui/HeroBanner";

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

interface SolutionData {
  id: number;
  solutions_name: string;
  solutions_description: string;
  solutions_image: string;
  latest_section1: Section1 | null;
  section2_items: Section2Item[];
}

export default function SolutionDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [data, setData] = useState<SolutionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return;

      try {
        setLoading(true);
        setError(null);

        const response = await ServicesService.getSolutionDetail(slug);

        if (response.data?.success) {
          const result = response.data.data as SolutionData;
          setData(result);

          // Update SEO
          updateSeoMetadata({
            meta_title: `${result.solutions_name} | Diginext Solutions`,
            meta_description: result.solutions_description.slice(0, 160),
            meta_keywords: `${result.solutions_name}, Diginext Solutions`,
          });
        } else {
          setError("Failed to load solution");
        }
      } catch (err) {
        console.error(err);
        setError("An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <>
        <Header />
        <SolutionLoadingSkeleton />
        <Footer />
      </>
    );
  }

  if (!data) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-xl text-gray-500">Solution not found.</p>
        </div>
        <Footer />
      </>
    );
  }

  // section2_items: first item is the section header, the rest are the individual services
  const offeredHeader = data.section2_items?.[0] ?? null;
  const offeredServices =
    data.section2_items?.slice(1).map((item) => ({
      title: item.title,
      description: item.description,
    })) ?? [];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-10">
        {/* Hero Section */}
        <HeroBanner
          title={data.solutions_name}
          // description={data.subservice_description}
          // imageSrc={getImageWithPlaceholder(data.sub_service_image)}
          // imageAlt={data.subservice_name}
        />
        <ServiceHeroSection
          title={data.solutions_name}
          description={data.solutions_description}
          imageSrc={getImageWithPlaceholder(data.solutions_image)}
          imageAlt={data.solutions_name}
        />
        {data.latest_section1 && (
          <CTASection
            title={data.latest_section1.title}
            description={data.latest_section1.description}
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
