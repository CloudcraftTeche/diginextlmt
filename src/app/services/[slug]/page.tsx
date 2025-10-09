import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import ServiceDetailSection from "@/components/sections/ServiceDetailSection";
import HeroBanner from "@/components/ui/HeroBanner";
import { ImageConstants } from "@/constants/ImageConstants";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FAQSection from "@/components/sections/FAQSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";

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
  return (
    <>
      <Header forceTransparent={true} />

      <div className="pt-16">
        <HeroBanner
          backgorundImage={ImageConstants.INSIDE_BANNER_5}
          title="Services Details"
        />
        <ServiceDetailSection slug={params.slug} />
        <ExpertiseSection />
        <CaseStudiesSection />
        <FAQSection
          description="Every great project begins with a question. We can help you if you are looking for a branding agency in Dubai to help establish your identity. We are your right choice if you need a graphic design company in Dubai to create images that communicate your brand, or a website design that will help develop a successful online presence. Our team will listen, provide advice and create strategies that meet your goals. Tell us what you think and together we can make your questions into results.
"
          faqs={[
            {
              question:
                "What IT solutions can effectively help my company grow?",
              answer:
                "Many clients want to know which IT solutions may reduce expenses and increase productivity. We guide businesses on services like network administration, cloud integration, and enterprise IT solutions that are specific to their requirements.",
            },
            {
              question:
                "How long does it take to develop a website or mobile application?",
              answer:
                "Customers often ask for a clear date. Websites or apps may take a few weeks to months to develop, depending on their level of complexity. We will provide you the entire project plan and keep you updated at every step.",
            },
            {
              question: "How can I make sure that my business data is secure?",
              answer:
                "One of the main concerns is data security. A common question from customers is how to protect private data. To protect data, we provide IT solutions like encrypted communications, secure hosting and cybersecurity audits",
            },
            {
              question:
                "How to know which IT solution services are best for my company?",
              answer:
                "Customers often consider which IT solution combination, such as enterprise software, cloud services or eCommerce platforms will produce the best results. We analyze your business's requirements and recommend services that support your growth goals.",
            },
          ]}
        />
        <Footer />
      </div>
    </>
  );
}
