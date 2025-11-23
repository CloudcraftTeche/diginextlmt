// app/about/page.tsx
"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LocationPage from "@/components/sections/location/LocationSection";

export default function AboutPage() {
  return (
    <main className="font-sans bg-background text-foreground">
      <Header />
      <LocationPage />
      <Footer />
    </main>
  );
}
