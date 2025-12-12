// app/about/page.tsx
"use client";

import Header from "@/components/layout/Header";
import { CTASection } from "@/components/sections/about/CTASection";
import { StatsScrolly } from "@/components/sections/about/StatDisplay";
import { SmoothScroller } from "@/components/sections/about/SmoothScroller";
import { JourneyValuesSection } from "@/components/sections/about/StoryCarousel";
import Footer from "@/components/layout/Footer";
import CareersPageSection from "@/components/sections/career/CareersPageSection";

export default function AboutPage() {
  return (
    <main className="font-sans bg-background text-foreground">
      <Header />
      <CareersPageSection />
      <Footer />
    </main>
  );
}
