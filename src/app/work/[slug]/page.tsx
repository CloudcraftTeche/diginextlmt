// app/work/[slug]/page.tsx
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CaseStudyHero from "@/components/sections/ourWorks/CaseStudyHero";
import ProjectOverview from "@/components/sections/ourWorks/ProjectOverview";
import BrandStatsSection from "@/components/sections/ourWorks/BrandStatsSection";
import ObjectivesSection from "@/components/sections/ourWorks/ObjectivesSection";
import ChallengesSection from "@/components/sections/ourWorks/ChallengesSection";
import UXDesignSection from "@/components/sections/ourWorks/UXDesignSection";
import ProductCustomizationSection from "@/components/sections/ourWorks/ProductCustomizationSection";
import LoyaltyProgramSection from "@/components/sections/ourWorks/LoyaltyProgramSection";
import { notFound } from "next/navigation";
import {
  getPortfolioDetailBySlug,
  getAllPortfolioSlugs,
} from "@/lib/portfolioData";
import GridSection from "@/components/sections/ourWorks/GridSection";
import LaptopMockupSection from "@/components/sections/ourWorks/LaptopMockupSection";

export const dynamicParams = true;
export const revalidate = 0;

interface WorkDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for known slugs
export async function generateStaticParams() {
  const slugs = getAllPortfolioSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata
export async function generateMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const portfolioData = getPortfolioDetailBySlug(slug);

  if (!portfolioData) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${portfolioData.hero.title} | Our Work`,
    description:
      portfolioData.hero?.description ||
      `Explore our ${portfolioData.hero.title} project`,
  };
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  console.log("Attempting to load slug:", slug); // Debug log

  const portfolioData = getPortfolioDetailBySlug(slug);

  console.log("Portfolio data found:", portfolioData ? "Yes" : "No"); // Debug log

  if (!portfolioData) {
    console.log("Available slugs:", getAllPortfolioSlugs()); // Debug log
    notFound();
  }

  return (
    <>
      <Header forceTransparent={true} />
      <div className="pt-16">
        <CaseStudyHero data={portfolioData.hero} />

        <ProjectOverview data={portfolioData.overview} />

        <BrandStatsSection data={portfolioData.brandStats} />

        <ObjectivesSection data={portfolioData.objectives} />

        <ChallengesSection data={portfolioData.challenges} />

        <UXDesignSection data={portfolioData.uxDesign} />
        <ProductCustomizationSection
          data={portfolioData.productCustomization}
        />
        {portfolioData.gridSection && (
          <GridSection data={portfolioData.gridSection} />
        )}
        {portfolioData.laptopMockupSection && (
          <LaptopMockupSection data={portfolioData.laptopMockupSection} />
        )}

        <Footer />
      </div>
    </>
  );
}
