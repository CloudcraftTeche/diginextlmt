"use client";

import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CaseStudyHero from "@/components/sections/ourWorks/CaseStudyHero";
import ProjectOverview from "@/components/sections/ourWorks/ProjectOverview";
import BrandStatsSection from "@/components/sections/ourWorks/BrandStatsSection";
import ObjectivesSection from "@/components/sections/ourWorks/ObjectivesSection";
import ChallengesSection from "@/components/sections/ourWorks/ChallengesSection";
import UXDesignSection from "@/components/sections/ourWorks/UXDesignSection"; // Creative Direction
import ProductCustomizationSection from "@/components/sections/ourWorks/ProductCustomizationSection"; // Mobile Section
import LoyaltyProgramSection from "@/components/sections/ourWorks/LoyaltyProgramSection"; // Section 4
import { notFound, useParams } from "next/navigation";
import { WorkService } from "@/services/WorkService";
import { Loader2 } from "lucide-react";

export default function WorkDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return;
      try {
        const response = await WorkService.getWorkDetail(slug);

        if (response.data && response.data.success) {
          setData(response.data.data);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <Loader2 className="w-10 h-10 text-white animate-spin" />
      </div>
    );
  }

  if (error || !data) {
    return notFound();
  }

  // --- Data Mapping ---
  const heroData = {
    title: data.banner_heading || data.title,
    description: data.banner_description || data.description, // Fallback
    heroImage: data.banner_image,
    projectType: data.system || "Custom Project",
    client: data.client || "Client", // Not in sample?
  };

  const overviewData = {
    title: data.title,
    description: data.description,
    industry: "Industry", // We might need to look up ID if it's just a number
    services: [data.system],
    timeline: data.time_scale,
    year: data.launch_date,
    link: "#",
    stats: [
      // Using static/placeholder stats or mapping if available
      { value: "45%", label: "Increase in Traffic" },
      { value: "2.5x", label: "Conversion Rate" },
      { value: "98%", label: "Client Satisfaction" },
    ],
  };

  const objectivesData = data.project_goals_section
    ? {
        title: data.project_goals_section.main_title,
        heading: data.project_goals_section.main_heading,
        description: data.project_goals_section.main_description,
        goals: data.project_goals_section.goals.map((g: any) => ({
          title: g.heading,
          description: g.description,
          icon: "Target", // Default icon
        })),
      }
    : null;

  const challengesData = data.challenges_section
    ? {
        title: data.challenges_section.main_title,
        heading: data.challenges_section.main_heading,
        description: data.challenges_section.main_description,
        challenges: data.challenges_section.challenges.map((c: any) => ({
          title: c.heading,
          description: c.description,
        })),
        image: data.challenges_section.banner_image,
      }
    : null;

  // Mapping Creative Direction to UXDesignSection (Visual Identity)
  const creativeData = data.creative_direction_section
    ? {
        title: data.creative_direction_section.main_title,
        heading: data.creative_direction_section.main_heading,
        description: data.creative_direction_section.main_description,
        features: data.creative_direction_section.creative_items.map(
          (item: any) => ({
            title: item.title,
            description: item.description,
            image: item.image,
          }),
        ),
      }
    : null;

  // Mapping Mobile/Interactive
  const mobileData = data.mobile_section
    ? {
        title: data.mobile_section.label,
        heading: data.mobile_section.title,
        description: data.mobile_section.description,
        // The component expects features array or specific images
        features: [
          {
            title: "Mobile Experience",
            description: "Optimized for all devices",
            image: data.mobile_section.mobile_image_1,
          },
          {
            title: "Virtual Tours",
            description: "Interactive 3D walkthroughs",
            image: data.mobile_section.mobile_image_2,
          },
        ],
      }
    : null;

  return (
    <>
      <Header forceTransparent={true} />
      <div className="pt-16">
        <CaseStudyHero data={heroData} />

        <ProjectOverview data={overviewData} />

        {/* Brand Stats - Optional or mapped if data available */}
        {/* <BrandStatsSection data={portfolioData.brandStats} /> */}

        {objectivesData && <ObjectivesSection data={objectivesData} />}

        {challengesData && <ChallengesSection data={challengesData} />}

        {creativeData && <UXDesignSection data={creativeData} />}

        {mobileData && <ProductCustomizationSection data={mobileData} />}

        {/* Section 4 Mapping */}
        {data.section4 && (
          <section className="bg-black py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                {data.section4.heading}
              </h2>
              <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-3xl">
                {data.section4.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.section4.image_1 && (
                  <img
                    src={data.section4.image_1}
                    alt="Tech 1"
                    className="rounded-lg w-full h-64 object-cover"
                  />
                )}
                {data.section4.image_2 && (
                  <img
                    src={data.section4.image_2}
                    alt="Tech 2"
                    className="rounded-lg w-full h-64 object-cover"
                  />
                )}
                {data.section4.image_3 && (
                  <img
                    src={data.section4.image_3}
                    alt="Tech 3"
                    className="rounded-lg w-full h-64 object-cover"
                  />
                )}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </>
  );
}
