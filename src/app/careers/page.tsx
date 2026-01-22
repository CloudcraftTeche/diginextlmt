// app/about/page.tsx
"use client";

import Header from "@/components/layout/Header";
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
