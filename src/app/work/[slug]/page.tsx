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

export const metadata: Metadata = {
  title: "Portfolio Details - DigiNext",
  description: "View our portfolio project details",
};

export const dynamicParams = true;
export const revalidate = false; // or a number in seconds if you want revalidation

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // Try to get portfolio data
  const portfolioData = getPortfolioDetailBySlug(slug);

  // If portfolio not found, show enhanced 404 with debug info
  if (!portfolioData) {
    return;
  }

  return (
    <>
      <Header forceTransparent={true} />

      <div className="pt-16">
        {/* Hero Banner */}
        <HeroBanner
          backgorundImage={ImageConstants.INSIDE_BANNER_3}
          title={portfolioData.title}
        />

        {/* Gallery Section */}
        <PortfolioGallerySection images={portfolioData.galleryImages} />

        

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
