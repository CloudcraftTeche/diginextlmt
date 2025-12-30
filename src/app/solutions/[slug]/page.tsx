// app/solutions/[slug]/page.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import HeroBanner from "@/components/ui/HeroBanner";
import { ImageConstants } from "@/constants/ImageConstants";
import SolutionsOfferedSection from "@/components/sections/service-solutions/OfferedSection";
import ProcessAccordionSection from "@/components/sections/service-solutions/ProcessAccordionSection";
import CTASection from "@/components/sections/service-solutions/CTASection";
import Link from "next/link";
import PartnerSection from "@/components/sections/service-solutions/PartnerSection";
import {
  getAllSolutionSlugs,
  getSolutionDetailBySlug,
} from "@/lib/solutionDetailData";
import { generatePageMetadata } from "@/lib/metadata";
import { SOLUTIONS_SEO } from "@/lib/seo-data";
import ServiceHeroSection from "@/components/sections/service-solutions/ServiceHeroSection";

interface SolutionDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    title?: string;
  }>;
}

// Dynamic metadata generation
export async function generateMetadata({ 
  params 
}: SolutionDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solutionData = SOLUTIONS_SEO[slug];

  if (!solutionData) {
    return {
      title: "Solution Not Found | DigiNext",
      description: "The solution you're looking for doesn't exist.",
    };
  }

  return generatePageMetadata(solutionData, `/solutions/${slug}`);
}

export default async function SolutionDetailPage({
  params,
  searchParams,
}: SolutionDetailPageProps) {
  const { slug } = await params;
  const { title } = await searchParams;
  const solutionData = getSolutionDetailBySlug(slug);

  // If solution not found, show 404
  if (!solutionData) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Solution Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The solution you&apos;re looking for doesn&apos;t exist.
            </p>

            <Link
              href="/solutions"
              className="inline-block px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
            >
              Back to Solutions
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header forceTransparent={true} />

      <div className="pt-16">
        {/* Hero Banner - Use title from query params or fall back to default */}
        <HeroBanner
          backgorundImage={ImageConstants.INSIDE_BANNER_5}
          title={solutionData.heading || "Solution Details"}
        />

        {/* Solution Hero Section with Breadcrumbs */}
        <ServiceHeroSection
          title={solutionData.title}
          description={solutionData.heroDescription}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/solutions" },
            // { label: solutionData.title, href: `/solutions/${slug}` },
          ]}
          imageSrc={solutionData.imageUrl}
        />

        {/* CTA Section */}
        {solutionData.ctaSection && (
          <CTASection
            title={solutionData.ctaSection.title}
            description={solutionData.ctaSection.description}
          />
        )}

        {/* Solutions Offered Section */}
        <SolutionsOfferedSection
          title={solutionData.servicesOffered.title}
          description={solutionData.servicesOffered.description}
          services={solutionData.servicesOffered.services}
        />

        {/* Process Accordion Section */}
        <ProcessAccordionSection
          title={solutionData.process.title}
          steps={solutionData.process.steps}
          description={solutionData.process.description}
        />

        {solutionData.partnerSection && (
          <PartnerSection
            title={solutionData.partnerSection.title}
            description={solutionData.partnerSection.description}
          />
        )}

        <Footer />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const slugs = getAllSolutionSlugs();

  return slugs.map((slug) => ({
    slug: slug,
  }));
}