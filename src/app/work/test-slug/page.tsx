import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import HeroBanner from "@/components/ui/HeroBanner";
import { ImageConstants } from "@/constants/ImageConstants";
import PortfolioGallerySection from "@/components/sections/ourWorks/PortfolioGallerySection";
import {
  getPortfolioDetailBySlug,
  getAllPortfolioSlugs,
} from "@/lib/portfolioData";
import CaseStudyHero from "@/components/sections/ourWorks/CaseStudyHero";
import BrandStatsSection from "@/components/sections/ourWorks/BrandStatsSection";
import ChallengesSection from "@/components/sections/ourWorks/ChallengesSection";
import LoyaltyProgramSection from "@/components/sections/ourWorks/LoyaltyProgramSection";
import ObjectivesSection from "@/components/sections/ourWorks/ObjectivesSection";
import ProductCustomizationSection from "@/components/sections/ourWorks/ProductCustomizationSection";
import ProjectOverview from "@/components/sections/ourWorks/ProjectOverview";
import UXDesignSection from "@/components/sections/ourWorks/UXDesignSection";
import { notFound } from "next/navigation";

export const dynamicParams = true;
export const revalidate = false;

interface WorkDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate metadata dynamically based on portfolio data
export async function generateMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const portfolioData = getPortfolioDetailBySlug(slug);

  if (!portfolioData) {
    return {
      title: "Portfolio Not Found - DigiNext",
      description: "The requested portfolio item could not be found.",
    };
  }

  return {
    title: `${portfolioData.title} - DigiNext Portfolio`,
    // description: portfolioData.description || `View our ${portfolioData.title} case study`,
  };
}

export default async function WorkDetailPage({
  params,
}: WorkDetailPageProps) {
  // const resolvedParams = await params;
  // const { slug } = resolvedParams;

  // // Try to get portfolio data
  // const portfolioData = getPortfolioDetailBySlug(slug);

  // // If portfolio not found, trigger Next.js 404
  // if (!portfolioData) {
  //   notFound();
  // }

  return (
    <>
      <Header forceTransparent={true} />

      <div className="pt-16">
        {/* Hero Banner */}
        {/* <HeroBanner
          backgorundImage={ImageConstants.INSIDE_BANNER_3}
          title={portfolioData.title}
        /> */}

        {/* Pass portfolio data to sections if needed */}
        <CaseStudyHero />
        <ProjectOverview />
        <BrandStatsSection />
        <ObjectivesSection />
        <ChallengesSection />
        <UXDesignSection />
        <ProductCustomizationSection />
        <LoyaltyProgramSection />

        <Footer />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const slugs = getAllPortfolioSlugs();

  return slugs.map((slug) => ({
    slug: slug,
  }));
}
