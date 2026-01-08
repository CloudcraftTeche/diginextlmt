// app/about/page.tsx
"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LocationPage from "@/components/sections/location/LocationSection";
import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { PAGES_SEO } from "@/lib/seo-data";
export const metadata: Metadata = generatePageMetadata(
  PAGES_SEO.location,
  "/location"
);
export default function AboutPage() {
  return (
    <main className="font-sans bg-background text-foreground">
      <Header />
      <LocationPage />
      <Footer />
    </main>
  );
}
