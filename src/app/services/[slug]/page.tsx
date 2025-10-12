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
import ProcessAccordionSection from "@/components/sections/service/ProcessAccordionSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Details - DigiNext",
  description: "Learn more about our professional services",
};

interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const serviceData = getServiceDetailBySlug(params.slug);

  // If service not found, you might want to redirect or show 404
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
          title={serviceData.title}
        />

        {/* Service Hero Section with Breadcrumbs */}
        <ServiceHeroSection
          title={serviceData.title}
          subtitle={serviceData.subtitle}
          description={serviceData.heroDescription}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            // { label: "Experience Design", href: "/services/experience-design" },
            { label: serviceData.title, href: `/services/${params.slug}` },
          ]}
        />

        {/* Services Offered Section */}
        <ServicesOfferedSection
          title={serviceData.servicesOffered.title}
          description={serviceData.servicesOffered.description}
          services={serviceData.servicesOffered.services}
        />

        {/* Process Section with Accordion */}
        <ProcessAccordionSection
          title={serviceData.process.title}
          steps={serviceData.process.steps}
        />

        {/* Case Studies Section
        <CaseStudiesSection /> */}

        {/* FAQ Section */}
        <FAQSection
          description={serviceData.faqs.description}
          faqs={serviceData.faqs.items}
        />

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
