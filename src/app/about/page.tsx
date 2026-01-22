// app/about/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import { CTASection } from "@/components/sections/about/CTASection";
import { StatsScrolly } from "@/components/sections/about/StatDisplay";
import { SmoothScroller } from "@/components/sections/about/SmoothScroller";
import { JourneyValuesSection } from "@/components/sections/about/StoryCarousel";
import Footer from "@/components/layout/Footer";
import { AboutService } from "@/services/AboutService";
import { AboutSkeleton } from "@/components/LoadingSkelton/about/AboutSkeleton";
import { usePageLoading } from "@/hooks/usePageLoading";
import { updateSeoMetadata, SeoData } from "@/lib/seoUtils";

// Interfaces
interface BannerData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

interface TextData {
  id: number;
  heading: string;
  content: string;
}

interface MissionData {
  id: number;
  title: string;
  mission_text: string;
  icon: string | null;
}

interface AsyncState<T> {
  data: T;
  loading: boolean;
  error: string | null;
}

export default function AboutPage() {
  const [banners, setBanners] = useState<AsyncState<BannerData[]>>({
    data: [],
    loading: true,
    error: null,
  });

  const [text1, setText1] = useState<AsyncState<TextData[]>>({
    data: [],
    loading: true,
    error: null,
  });

  const [text2, setText2] = useState<AsyncState<TextData[]>>({
    data: [],
    loading: true,
    error: null,
  });

  const [missions, setMissions] = useState<AsyncState<MissionData[]>>({
    data: [],
    loading: true,
    error: null,
  });

  const [seo, setSeo] = useState<AsyncState<SeoData | null>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      // Fetch Banners
      AboutService.getBanners().then((res) => {
        if (res.data.success) {
          setBanners({ data: res.data.data, loading: false, error: null });
        }
      }).catch(() => {
        setBanners((prev) => ({ ...prev, loading: false, error: "Failed to load banners" }));
      });

      // Fetch Text1
      AboutService.getText1().then((res) => {
        if (res.data.success) {
          setText1({ data: res.data.data, loading: false, error: null });
        }
      }).catch(() => {
        setText1((prev) => ({ ...prev, loading: false, error: "Failed to load text1" }));
      });

      // Fetch Text2
      AboutService.getText2().then((res) => {
        if (res.data.success) {
          setText2({ data: res.data.data, loading: false, error: null });
        }
      }).catch(() => {
        setText2((prev) => ({ ...prev, loading: false, error: "Failed to load text2" }));
      });

      // Fetch Missions
      AboutService.getMissions().then((res) => {
        if (res.data.success) {
          setMissions({ data: res.data.data, loading: false, error: null });
        }
      }).catch(() => {
        setMissions((prev) => ({ ...prev, loading: false, error: "Failed to load missions" }));
      });

      // Fetch SEO
      setSeo((prev) => ({ ...prev, loading: true, error: null }));
      AboutService.getAboutSeo().then((res) => {
        if (res.data.success && res.data.data.length > 0) {
            setSeo({ data: res.data.data[0], loading: false, error: null });
            updateSeoMetadata(res.data.data[0]);
        }
      }).catch(() => {
          setSeo((prev) => ({ ...prev, loading: false, error: "Failed to load SEO" }));
      });
    };

    fetchData();
  }, []);

  const isLoading = banners.loading && text1.loading && text2.loading && missions.loading && seo.loading;
  usePageLoading(isLoading);

  return (
    <main className="font-sans bg-background text-foreground">
      <Header />
      <SmoothScroller />
      <StatsScrolly 
        data={banners.data[0]} 
        isLoading={banners.loading} 
      />
      <JourneyValuesSection 
        missions={missions.data} 
        text={text1.data[0]} 
        isLoading={missions.loading || text1.loading}
      />
      <CTASection 
        data={text2.data[0]} 
        isLoading={text2.loading} 
      />
      <Footer />
    </main>
  );
}
