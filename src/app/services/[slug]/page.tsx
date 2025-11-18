import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import HeroBanner from "@/components/ui/HeroBanner";
import { ImageConstants } from "@/constants/ImageConstants";
import FAQSection from "@/components/sections/FAQSection";
import {
  getAllServiceSlugs,
  getServiceDetailBySlug,
} from "@/lib/serviceDetailData";
import ServiceHeroSection from "@/components/sections/service/ServiceHeroSection";
import ServicesOfferedSection from "@/components/sections/service/ServicesOfferedSection";
import CTASection from "@/components/sections/service/CTASection";
import Link from "next/link";
import PartnerSection from "@/components/sections/service/PartnerSection";
import { generatePageMetadata } from "@/lib/metadata";
import { SERVICES_SEO } from "@/lib/seo-data";
import ProcessAccordionSection from "@/components/sections/ProcessAccordionSection";

// Define the props type for both generateMetadata and the component
interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Use the same interface for generateMetadata
export async function generateMetadata({ 
  params 
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const serviceData = SERVICES_SEO[slug];

  if (!serviceData) {
    return {
      title: "Service Not Found",
    };
  }

  return generatePageMetadata(serviceData, `/services/${slug}`);
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const serviceData = getServiceDetailBySlug(slug);

  // If service not found, show 404
  if (!serviceData) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Service Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The service you&apos;re looking for doesn&apos;t exist.
            </p>

            <Link
              href="/services"
              className="inline-block px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
            >
              Back to Services
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
        {/* Hero Banner */}
        <HeroBanner
          backgorundImage={ImageConstants.INSIDE_BANNER_5}
          title={"Service Details"}
        />

        {/* Service Hero Section with Breadcrumbs */}
        <ServiceHeroSection
          title={serviceData.title}
          description={serviceData.heroDescription}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            // { label: serviceData.title, href: `/services/?${slug}` },
          ]}
          imageSrc={serviceData.imageUrl}
        />

        {/* CTA Section */}
        {serviceData.ctaSection && (
          <CTASection
            title={serviceData.ctaSection.title}
            description={serviceData.ctaSection.description}
          />
        )}

        {/* Services Offered Section */}
        <ServicesOfferedSection
          title={serviceData.servicesOffered.title}
          description={serviceData.servicesOffered.description}
          services={serviceData.servicesOffered.services}
        />

        {/* Process Accordion Section */}
        <ProcessAccordionSection
          title={serviceData.process.title}
          steps={serviceData.process.steps}
          description={serviceData.process.description}
        />

        {serviceData.partnerSection && (
          <PartnerSection
            title={serviceData.partnerSection.title}
            description={serviceData.partnerSection.description}
          />
        )}

        <FAQSection faqs={serviceData.faqs.items} description="" />

        <Footer />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();

  return slugs.map((slug) => ({
    slug: slug,
  }));
}
