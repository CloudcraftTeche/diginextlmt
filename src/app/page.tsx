"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/hero/HeroSection";
import CaseStudiesSection from "@/components/sections/hero/CaseStudiesSection";
import ServicesSection from "@/components/sections/hero/ServicesSection";

import BrandingMarketingSection, {
  FeaturesData,
} from "@/components/sections/hero/BrandingMarketingSection";

import Footer from "@/components/layout/Footer";
import { HomeService } from "@/services/HomeService";
import { InsightsService } from "@/services/InsightsService";
import { usePageLoading } from "@/hooks/usePageLoading";
import { getFullImageUrl } from "@/lib/imageUtils";
import VisionSection from "@/components/sections/hero/VisionSection";
import AboutSection from "@/components/sections/hero/AboutSection";
import { updateSeoMetadata } from "@/lib/seoUtils";
import FAQSection from "@/components/sections/FAQSection";

interface BannerData {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface AboutData {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface VisionData {
  id: number;
  title: string;
  description: string;
}

interface FaqData {
  id: number;
  title: string;
  description: string;
}

interface SeoData {
  id: number;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  banner_image: string;
}

interface AsyncState<T> {
  data: T;
  loading: boolean;
  error: string | null;
}

export default function Home() {
  // --- STATE ---
  const [banner, setBanner] = useState<AsyncState<BannerData[]>>({
    data: [],
    loading: true,
    error: null,
  });

  const [about, setAbout] = useState<AsyncState<AboutData | null>>({
    data: null,
    loading: true,
    error: null,
  });

  const [vision, setVision] = useState<AsyncState<VisionData | null>>({
    data: null,
    loading: true,
    error: null,
  });

  const [faq, setFaq] = useState<AsyncState<FaqData[]>>({
    data: [],
    loading: true,
    error: null,
  });

  const [insights, setInsights] = useState<AsyncState<any[]>>({
    data: [],
    loading: true,
    error: null,
  });

  const [features, setFeatures] = useState<AsyncState<FeaturesData | null>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        setBanner((prev) => ({ ...prev, loading: true, error: null }));
        const response = await HomeService.getHomeBanners();
        if (response.data.success) {
          setBanner({
            data: response.data.data,
            loading: false,
            error: null,
          });
        } else {
          throw new Error();
        }
      } catch (error) {
        setBanner({
          data: [],
          loading: false,
          error: "Failed to load banners",
        });
      }
    };
    fetchBanners();
  }, []);

  // 2. Fetch About
  useEffect(() => {
    const fetchAbout = async () => {
      try {
        setAbout((prev) => ({ ...prev, loading: true, error: null }));
        const response = await HomeService.getAbout();
        if (response.data.success && response.data.data.length > 0) {
          setAbout({
            data: response.data.data[0],
            loading: false,
            error: null,
          });
        } else {
          throw new Error();
        }
      } catch (error) {
        setAbout({
          data: null,
          loading: false,
          error: "Failed to load about section",
        });
      }
    };
    fetchAbout();
  }, []);

  // 3. Fetch Vision (Ethos)
  useEffect(() => {
    const fetchVision = async () => {
      try {
        setVision((prev) => ({ ...prev, loading: true, error: null }));

        // Ensure this method exists in your HomeService
        const response = await HomeService.getVision();

        if (response.data.success && response.data.data.length > 0) {
          setVision({
            data: response.data.data[0],
            loading: false,
            error: null,
          });
        } else {
          throw new Error();
        }
      } catch (error) {
        setVision({
          data: null,
          loading: false,
          error: "Failed to load vision section",
        });
      }
    };
    fetchVision();
  }, []);

  // 4. Fetch FAQ
  useEffect(() => {
    const fetchFaq = async () => {
      try {
        setFaq((prev) => ({ ...prev, loading: true, error: null }));
        const response = await HomeService.getFaq();
        if (response.data.success) {
          setFaq({
            data: response.data.data,
            loading: false,
            error: null,
          });
        } else {
          throw new Error();
        }
      } catch (error) {
        setFaq({
          data: [],
          loading: false,
          error: "Failed to load FAQ section",
        });
      }
    };
    fetchFaq();
  }, []);

  // 5. Fetch Insights
  useEffect(() => {
    const fetchInsights = async () => {
      try {
        setInsights((prev) => ({ ...prev, loading: true, error: null }));
        const response = await InsightsService.getInsights();
        if (response.data.success) {
          setInsights({
            data: response.data.data || [],
            loading: false,
            error: null,
          });
        } else {
          throw new Error();
        }
      } catch (error) {
        setInsights({
          data: [],
          loading: false,
          error: "Failed to load insights",
        });
      }
    };
    fetchInsights();
  }, []);

  // 6. Fetch Features
  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        setFeatures((prev) => ({ ...prev, loading: true, error: null }));
        const response = await HomeService.getFeatures();
        if (response.data.success && response.data.data.length > 0) {
          setFeatures({
            data: response.data.data[0],
            loading: false,
            error: null,
          });
        } else {
          throw new Error();
        }
      } catch (error) {
        setFeatures({
          data: null,
          loading: false,
          error: "Failed to load features",
        });
      }
    };
    fetchFeatures();
  }, []);

  // 5. Fetch SEO
  const [seo, setSeo] = useState<AsyncState<SeoData | null>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchSeo = async () => {
      try {
        setSeo((prev) => ({ ...prev, loading: true, error: null }));
        const response = await HomeService.getHomeSeo();
        if (response.data.success && response.data.data.length > 0) {
          setSeo({
            data: response.data.data[0],
            loading: false,
            error: null,
          });

          // Update document metadata (client-side)
          updateSeoMetadata(response.data.data[0]);
        } else {
          throw new Error();
        }
      } catch (error) {
        setSeo({
          data: null,
          loading: false,
          error: "Failed to load SEO data",
        });
      }
    };
    fetchSeo();
  }, []);

  const slides = banner.data.map((item) => ({
    title: item.title,
    content: item.description,
    image: getFullImageUrl(item.image),
  }));

  const caseStudiesData = insights.data.slice(0, 4).map((item) => ({
    image: getFullImageUrl(item.image),
    title: item.title,
    percentage: item.insight_date || "Recent",
    description: item.description
      ? item.description.split(" ").slice(0, 20).join(" ").substring(0, 110) +
        "..."
      : "",
    slug: item.id.toString(),
    navigationText: "Read Case Study",
  }));

  const isPageLoading =
    banner.loading &&
    about.loading &&
    vision.loading &&
    faq.loading &&
    seo.loading;
  usePageLoading(isPageLoading);

  return (
    <>
      <Header />

      <div className="pt-16">
        <HeroSection slides={slides} isLoading={banner.loading} />

        <AboutSection data={about.data} isLoading={about.loading} />

        <CaseStudiesSection
          caseStudies={caseStudiesData.length > 0 ? caseStudiesData : undefined}
          isLoading={insights.loading}
        />

        <VisionSection data={about.data} isLoading={vision.loading} />

        <ServicesSection />
        <BrandingMarketingSection
          data={features.data}
          isLoading={features.loading}
        />
        <FAQSection
          faqs={faq.data.map((item) => ({
            question: item.title,
            answer: item.description,
          }))}
          isLoading={faq.loading}
        />
        <Footer />
      </div>
    </>
  );
}
