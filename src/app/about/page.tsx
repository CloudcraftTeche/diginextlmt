"use client";

import Header from "@/components/layout/Header";
import { CTASection } from "@/components/sections/about/CTASection";
import { StatsScrolly } from "@/components/sections/about/StatDisplay";
import { SmoothScroller } from "@/components/sections/about/SmoothScroller";
import { StoryCarousel } from "@/components/sections/about/StoryCarousel";

export default function AboutPage() {
  return (
    <main className="font-sans bg-background text-foreground">
      <Header />
      <SmoothScroller />
      <StatsScrolly />
      <StoryCarousel />
      {/* <StatsScrolly /> */}
      <CTASection />
    </main>
  );
}
