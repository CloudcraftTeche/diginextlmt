"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ImageConstants } from "@/constants/ImageConstants";

interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  introduction: string;
  mainDescription: string;
  philosophy: string[];
  expertiseFields: {
    name: string;
    description: string;
  }[];
  caseStudies: {
    title: string;
    image: string;
  }[];
  faqIntro: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedServices?: {
    title: string;
    slug: string;
    image: string;
  }[];
}

const SERVICES_DATABASE: Record<string, ServiceDetail> = {
  "branding-graphic-design": {
    slug: "branding-graphic-design",
    title: "Branding - Making Stories Into Identities",
    subtitle: "Transform Your Ideas Into Strong Identities",
    heroImage: ImageConstants.CASE_STUDY_1,
    introduction:
      "We believe that every brand has a story that needs to be told at DigiNext. As one of the best branding agencies in Dubai, we transform your ideas into a strong identity that connects, inspires and lasts.",
    mainDescription:
      "We do not just make logos like a lot of branding companies in Dubai, we create experiences. We create brands that stand out in highly competitive markets and earn customer trust by combining creativity with strategy. DigiNext is one of the best branding agencies in Dubai. We take a full range approach to design, storytelling and strategy. That is why businesses in Dubai think we are the best branding agency for making their identities that people do not just notice, but they remember.",
    philosophy: [
      "We listen first, then create with purpose and finally deliver with a lasting effect on every project.",
      "To make your brand unforgettable, we focus on clarity, creativity and consistency.",
      "Branding at DigiNext is more than just design, it is the story of your business coming to life.",
    ],
    expertiseFields: [
      {
        name: "Brand Identity",
        description:
          "We develop brand identities that make an impact, from creating iconic logos to developing your business's positioning and image.",
      },
      {
        name: "Below-the-Line Advertising",
        description:
          "We make your brand come to life with engaging brand presentations, brochures, videos and print newsletter, and content that develops a personal connection with your audience.",
      },
      {
        name: "Above-the-Line Advertising",
        description:
          "Whether it is website development, landing pages, print media management, Ad development, TV, radio or visual signage, we make sure your brand is impactful and visible on all major platforms.",
      },
      {
        name: "Online Communication Strategy",
        description:
          "We help your business speak digitally through targeted ads, SEO, digital newsletters and social media campaigns that get people engaged and help grow your audience.",
      },
      {
        name: "Visual Media",
        description:
          "From concept and storyboard development to videography, photography, graphic design and 3D animation, we create visuals that tell the story of your brand in the most interesting way.",
      },
    ],
    caseStudies: [
      {
        title: "Branding Essentials",
        image: ImageConstants.CASE_STUDY_1,
      },
      {
        title: "Rebranding Strategy",
        image: ImageConstants.CASE_STUDY_2,
      },
      {
        title: "Digital Concepts",
        image: ImageConstants.CASE_STUDY_3,
      },
    ],
    faqIntro:
      "Every great project begins with a question. We can help you if you are looking for a branding agency in Dubai to help establish your identity. We are your right choice if you need a graphic design company in Dubai to create images that communicate your brand, or a website design that will help develop a successful online presence. Our team will listen, provide advice and create strategies that meet your goals. Tell us what you think and together we can make your questions into results.",
    faqs: [
      {
        question: "What IT solutions can effectively help my company grow?",
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
          "One of the main concerns is data security. A common question from customers is how to protect private data. To protect data, we provide IT solutions like encrypted communications, secure hosting and cybersecurity audits.",
      },
      {
        question:
          "How to know which IT solution services are best for my company?",
        answer:
          "Customers often consider which IT solution combination, such as enterprise software, cloud services or eCommerce platforms will produce the best results. We analyze your business's requirements and recommend services that support your growth goals.",
      },
    ],
    relatedServices: [
      {
        title: "Web Design",
        slug: "web-design",
        image: ImageConstants.CASE_STUDY_2,
      },
      {
        title: "Digital Marketing",
        slug: "digital-marketing",
        image: ImageConstants.CASE_STUDY_3,
      },
      {
        title: "UI/UX Design",
        slug: "uiux-design",
        image: ImageConstants.CASE_STUDY_1,
      },
    ],
  },
};

interface ServiceDetailSectionProps {
  slug: string;
}

export default function ServiceDetailSection({
  slug,
}: ServiceDetailSectionProps) {
  const service = SERVICES_DATABASE[slug];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector("#service-detail-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Service Not Found
          </h1>
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700"
          >
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div id="service-detail-section">
      {/* Breadcrumb */}
      <div className="bg-white py-4 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link
              href="/"
              className="text-orange-600 hover:text-orange-700 font-medium"
            >
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href="/services"
              className="text-orange-600 hover:text-orange-700 font-medium"
            >
              Services
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 font-medium">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6">
                {service.subtitle}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {service.introduction}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {service.mainDescription}
              </p>
            </div>

            <div
              className={`transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-[300px] lg:h-[400px]">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
