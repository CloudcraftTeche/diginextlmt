// app/location/[slug]/page.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LocationPage from "@/components/sections/location/LocationSection";
import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { PAGES_SEO } from "@/lib/seo-data";

// Metadata MUST be in a Server Component
export const metadata: Metadata = generatePageMetadata(
  PAGES_SEO.location,
  "/location"
);

// This is now a Server Component (no "use client")
export default function AboutPage() {
  return (
    <main className="font-sans bg-background text-foreground">
      <Header />
      <LocationPage />
      <Footer />
    </main>
  );
}
