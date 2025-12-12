"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  SECTION_PX,
  SECTION_PY,
  CONTENT_WRAPPER_CLASSES,
} from "@/constants/layoutConstants";
import {
  SECTION_HEADING_SIZE,
  DESCRIPTION_SIZE,
  FONT_WEIGHT,
} from "@/constants/typographyConstants";
import MediaDisplay from "@/components/ui/MediaDisplay";

// Work Item Interface
interface WorkItem {
  id: string;
  title: string;
  description: string;
  category: string;
  industry: string;
  mediaSrc: string;
  mediaAlt: string;
  slug: string;
}

// Portfolio Data - Make this dynamic by fetching from API/database
const PORTFOLIO_DATA: WorkItem[] = [
  {
    id: "1",
    title: "Caribou Coffee Kuwait",
    description:
      "Helping a reputed coffee chain go digital with a powerful app in their Kuwait chapter",
    category: "Mobile App",
    industry: "Food",
    mediaSrc:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
    mediaAlt: "Caribou Coffee App",
    slug: "caribou-coffee-kuwait",
  },
  {
    id: "2",
    title: "IKEA Foods E-commerce",
    description:
      "Delectably designed branded E-commerce store to launch a new sales channel",
    category: "E-commerce",
    industry: "Retail / Food",
    mediaSrc:
      "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=600&fit=crop",
    mediaAlt: "IKEA Foods Platform",
    slug: "ikea-foods-ecommerce",
  },
  {
    id: "3",
    title: "Turtlewax Website Redesign",
    description:
      "Achieving glossy greatness for cars with a smooth redefined website",
    category: "Web Design",
    industry: "Automobile",
    mediaSrc:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop",
    mediaAlt: "Turtlewax Website",
    slug: "turtlewax-website-redesign",
  },
  {
    id: "4",
    title: "LuLu Hypermarket Mobile App",
    description:
      "Building a one-click path to groceries with an intensive CRM integration",
    category: "Mobile App",
    industry: "Retail",
    mediaSrc:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    mediaAlt: "LuLu Hypermarket App",
    slug: "lulu-hypermarket-app",
  },
  {
    id: "5",
    title: "Joyalukkas Brand Experience",
    description:
      "An interactive-first approach to your timeless jewelry experience",
    category: "Branding",
    industry: "Retail / Fashion",
    mediaSrc:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop",
    mediaAlt: "Joyalukkas Brand",
    slug: "joyalukkas-brand-experience",
  },
  // {
  //   id: "6",
  //   title: "Radio Mango Streaming App",
  //   description: "Ears on to timeless tunes guided by a feature rich interface",
  //   category: "Mobile App",
  //   industry: "Media",
  //   mediaSrc:
  //     "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
  //   mediaAlt: "Radio Mango App",
  //   slug: "radio-mango-streaming-app",
  // },
];

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const PortfolioShowcase: React.FC = () => {
  const router = useRouter();
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");
  const [selectedExpertise, setSelectedExpertise] = useState<string>("All");

  // Extract unique industries and expertises dynamically
  const industries = [
    "All",
    ...Array.from(new Set(PORTFOLIO_DATA.map((item) => item.industry))),
  ];
  const expertises = [
    "All",
    ...Array.from(new Set(PORTFOLIO_DATA.map((item) => item.category))),
  ];

  // Filter works dynamically
  const filteredWorks = PORTFOLIO_DATA.filter((item) => {
    const matchesIndustry =
      selectedIndustry === "All" || item.industry === selectedIndustry;
    const matchesExpertise =
      selectedExpertise === "All" || item.category === selectedExpertise;
    return matchesIndustry && matchesExpertise;
  });

  const handleWorkClick = (slug: string) => {
    router.push(`/work/${slug}`);
  };

  return (
    <section className={`${SECTION_PX} ${SECTION_PY} bg-white`}>
      <div className={CONTENT_WRAPPER_CLASSES}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
          <div>
            <h1
              className={`${SECTION_HEADING_SIZE} ${FONT_WEIGHT.semibold} mb-2`}
            >
              Case Studies
              <span className="text-gray-400 ml-3 text-xl">
                ({filteredWorks.length})
              </span>
            </h1>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="relative inline-block">
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-full px-6 py-2.5 pr-10 text-sm font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all cursor-pointer"
              >
                {industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry === "All" ? "Industries" : industry}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div className="relative inline-block">
              <select
                value={selectedExpertise}
                onChange={(e) => setSelectedExpertise(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-full px-6 py-2.5 pr-10 text-sm font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all cursor-pointer"
              >
                {expertises.map((expertise) => (
                  <option key={expertise} value={expertise}>
                    {expertise === "All" ? "Expertise" : expertise}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredWorks.map((work) => (
            <motion.article
              key={work.id}
              variants={cardVariants}
              className="group cursor-pointer"
              onClick={() => handleWorkClick(work.slug)}
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-gray-100">
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                  <MediaDisplay src={work.mediaSrc} alt={work.mediaAlt} />
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold px-6 py-2.5 border-2 border-white rounded-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    View Case Study
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                  <span>{work.industry}</span>
                  {work.category && (
                    <>
                      <span>•</span>
                      <span>{work.category}</span>
                    </>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                  {work.title}
                </h3>
                <p
                  className={`${DESCRIPTION_SIZE} text-gray-600 leading-relaxed`}
                >
                  {work.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {filteredWorks.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400">
              No case studies found matching your filters.
            </p>
            <button
              onClick={() => {
                setSelectedIndustry("All");
                setSelectedExpertise("All");
              }}
              className="mt-6 text-orange-600 hover:text-orange-700 font-semibold"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioShowcase;
