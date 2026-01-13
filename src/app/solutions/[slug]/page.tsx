// app/solutions/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/ui/HeroBanner";
import { ImageConstants } from "@/constants/ImageConstants";
import SolutionsOfferedSection from "@/components/sections/service-solutions/OfferedSection";
import ProcessAccordionSection from "@/components/sections/service-solutions/ProcessAccordionSection";
import CTASection from "@/components/sections/service-solutions/CTASection";
import PartnerSection from "@/components/sections/service-solutions/PartnerSection";
import ServiceHeroSection from "@/components/sections/service-solutions/ServiceHeroSection";
import {
  getAllSolutionSlugs,
  getSolutionDetailBySlug,
} from "@/lib/solutionDetailData";
import { generatePageMetadata } from "@/lib/metadata";
import { SOLUTIONS_SEO } from "@/lib/seo-data";

// NEXT.JS 16: Props type - params is a Promise
type Props = {
  params: Promise<{ slug: string }>;
};

// CRITICAL: generateMetadata for Next.js 16
export async function generateMetadata(props: Props): Promise<Metadata> {
  // MUST await params in Next.js 16
  const params = await props.params;
  const { slug } = params;

  const solutionData = SOLUTIONS_SEO[slug];

  if (!solutionData) {
    return {
      title: "Solution Not Found",
      description: "The solution you're looking for doesn't exist.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return generatePageMetadata(solutionData, `/solutions/${slug}`);
}

// Page component for Next.js 16
export default async function SolutionDetailPage(props: Props) {
  // MUST await params in Next.js 16
  const params = await props.params;
  const { slug } = params;

  const solutionData = getSolutionDetailBySlug(slug);

  // Use Next.js notFound() for 404s
  if (!solutionData) {
    notFound();
  }

  return (
    <>
      <Header forceTransparent={true} />

      <div className="pt-16">
        <HeroBanner
          backgorundImage={ImageConstants.INSIDE_BANNER_5}
          title={solutionData.heading || "Solution Details"}
        />

        <ServiceHeroSection
          title={solutionData.title}
          description={solutionData.heroDescription}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/solutions" },
          ]}
          imageSrc={solutionData.imageUrl}
        />

        {solutionData.ctaSection && (
          <CTASection
            title={solutionData.ctaSection.title}
            description={solutionData.ctaSection.description}
          />
        )}

        <SolutionsOfferedSection
          title={solutionData.servicesOffered.title}
          description={solutionData.servicesOffered.description}
          services={solutionData.servicesOffered.services}
        />

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
      </div>

      <Footer />
    </>
  );
}

// Generate static params - return format stays the same
export async function generateStaticParams() {
  const slugs = getAllSolutionSlugs();

  return slugs.map((slug) => ({
    slug: slug,
  }));
}
