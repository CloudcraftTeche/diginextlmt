"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import MediaDisplay from "@/components/ui/MediaDisplay";

import {
  CONTENT_WRAPPER_CLASSES,
  SECTION_PY,
} from "@/constants/layoutConstants";
import {
  HERO_HEADING_SIZE,
  HERO_DESCRIPTION_SIZE,
  FONT_WEIGHT,
  SECTION_HEADING_SIZE,
} from "@/constants/typographyConstants";

interface ServiceHeroSectionProps {
  title: string;
  description: string;
  breadcrumbs?: { label: string; href: string }[];
  imageSrc?: string;
  imageAlt?: string;
}

const ServiceHeroSection: React.FC<ServiceHeroSectionProps> = ({
  title,
  description,
  imageSrc = "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
  imageAlt = "Professional team working on digital solutions",
}) => {
  const paragraphs = description.split("\n").filter((p) => p.trim());

  const mediaVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, delay: 0.3, ease: "easeOut" },
    },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, delay: 0.5, ease: "easeOut" },
    },
  };

  const paragraphVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.7 + i * 0.1, ease: "easeOut" },
    }),
  };

  return (
    <div className="bg-white">
      <section className={SECTION_PY}>
        <div className={CONTENT_WRAPPER_CLASSES}>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Content */}
            <motion.div
              className="w-full flex-1"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className={`${SECTION_HEADING_SIZE} ${FONT_WEIGHT.semibold} mb-6`}>
                {title}
              </h1>

              <div className="space-y-4 mb-8">
                {paragraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    custom={index}
                    variants={paragraphVariants}
                    initial="hidden"
                    animate="visible"
                    className={HERO_DESCRIPTION_SIZE}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Link
                  href="/contact#contact-form"
                  className="inline-flex items-center px-6 py-2.5 border-2 border-gray-900 text-gray-900 font-medium rounded hover:bg-gray-900 hover:text-white transition-all duration-200 text-sm"
                >
                  Let&apos;s Talk
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Media */}
            <motion.div
              className="w-full lg:w-auto lg:flex-shrink-0"
              variants={mediaVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="sticky top-8">
                <div className="w-full lg:w-[520px] aspect-square rounded-2xl overflow-hidden bg-gray-100">
                  <MediaDisplay src={imageSrc} alt={imageAlt} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceHeroSection;
