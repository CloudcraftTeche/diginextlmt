// app/about/page.tsx
"use client";

import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CareersPageSection from "@/components/sections/career/CareersPageSection";
import { CareerService } from "@/services/CareerService";
import { CareerPost } from "@/mocks/career/careerList.mock";

export default function AboutPage() {
  const [jobs, setJobs] = useState<CareerPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response: any = await CareerService.getCareers();
        if (response.data && response.data.success) {
          setJobs(response.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch careers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
  }, []);

  return (
    <main className="font-sans bg-background text-foreground">
      <Header />
      {loading ? (
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
        </div>
      ) : (
        <CareersPageSection jobs={jobs} />
      )}
      <Footer />
    </main>
  );
}
