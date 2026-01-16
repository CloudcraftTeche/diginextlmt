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
import { getAllPortfolioItems } from "@/lib/portfolioData";

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

  const [selectedIndustry] = useState<string>("All");
  const [selectedExpertise] = useState<string>("All");

  const portfolioItems = getAllPortfolioItems();

  // Filter (kept for future use, no structure change)
  const filteredWorks = portfolioItems.filter((item) => {
    const matchesIndustry =
      selectedIndustry === "All" || item.hero.industry === selectedIndustry;

    const matchesExpertise =
      selectedExpertise === "All" || item.overview.system === selectedExpertise;

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
              key={work.slug}
              variants={cardVariants}
              className="group cursor-pointer"
              onClick={() => handleWorkClick(work.slug)}
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-gray-100">
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                  <MediaDisplay src={work.hero.heroImage} alt={work.title} />
                </div>

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold px-6 py-2.5 border-2 border-white rounded-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    View Case Study
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                  <span>{work.hero.industry}</span>
                  <span>•</span>
                  <span>{work.overview.system}</span>
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
      </div>
    </section>
  );
};

export default PortfolioShowcase;
