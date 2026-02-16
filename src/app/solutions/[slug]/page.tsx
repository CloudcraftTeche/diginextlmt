"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ServicesService } from "@/services/ServicesService";
import { SolutionLoadingSkeleton } from "@/components/LoadingSkelton/services/SolutionLoadingSkeleton";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/ui/HeroBanner";
import ServiceHeroSection from "@/components/sections/service-solutions/ServiceHeroSection";
import { ImageConstants } from "@/constants/ImageConstants";
import { getImageWithPlaceholder } from "@/lib/imageUtils";
import { usePageLoading } from "@/hooks/usePageLoading";
import { updateSeoMetadata } from "@/lib/seoUtils";
import Image from "next/image";
import {
  SECTION_PX,
  CONTENT_WRAPPER_CLASSES,
  SECTION_PY,
} from "@/constants/layoutConstants";
import { TITLE_SIZE, DESCRIPTION_SIZE } from "@/constants/typographyConstants";

interface SolutionData {
  id: number;
  solutions_name: string;
  solutions_title: string;
  solutions_description: string;
  solutions_image: string;
  solutions_heading: number;
}

export default function SolutionDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [data, setData] = useState<SolutionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return;

      if (!slug) {
        setNotFound(true);
        setLoading(false);
        setError("Invalid solution slug");
        return;
      }

      try {
        setLoading(true);
        setError(null);
        setNotFound(false);

        // Fetch Solution Detail using slug
        const response = await ServicesService.getSolutionDetail(slug);

        if (response.data?.success) {
          const data = response.data.data;
          setData(data);
          setLoading(false);
          setError(null);

          // Update SEO
          updateSeoMetadata({
            meta_title: `${data.solutions_name} | Diginext Solutions`,
            meta_description: data.solutions_description.slice(0, 160),
            meta_keywords: `${data.solutions_name}, Diginext Solutions`,
          });
        } else {
          setNotFound(true);
          setLoading(false);
          setError("Failed to load");
        }
      } catch (err) {
        console.error(err);
        setLoading(false);
        setError("An error occurred");
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

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-20">
        {/* Simple Banner / Header Area */}
        <div className="bg-gray-50 py-16 md:py-24">
          <div className={`${SECTION_PX} ${CONTENT_WRAPPER_CLASSES}`}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {data.solutions_name}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              {data.solutions_title}
            </p>
          </div>
        </div>

        {/* Content Section */}
        <section className={`${SECTION_PX} ${SECTION_PY}`}>
          <div className={CONTENT_WRAPPER_CLASSES}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Description */}
              <div className="order-2 lg:order-1">
                <h2 className={`${TITLE_SIZE} mb-6`}>{data.solutions_title}</h2>
                <div
                  className={`${DESCRIPTION_SIZE} text-gray-600 space-y-4 text-justify leading-relaxed`}
                >
                  {data.solutions_description.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="order-1 lg:order-2">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={getImageWithPlaceholder(data.solutions_image)}
                    alt={data.solutions_name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
