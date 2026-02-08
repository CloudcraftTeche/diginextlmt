"use client";

import React from "react";
import { motion } from "framer-motion";
import { SearchX, ArrowRight, LucideIcon } from "lucide-react";
import {
  HERO_HEADING_SIZE,
  DESCRIPTION_SIZE,
  FONT_WEIGHT,
} from "@/constants/typographyConstants";
import {
  fadeInUpVariants,
  staggerContainerVariants,
} from "@/constants/animationVariants";

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: LucideIcon;
  action?: {
    label: string;
    href: string;
    onClick?: () => void;
  };
  minHeight?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No Items Found",
  description = "We couldn't find what you were looking for. Please check back later.",
  icon: Icon = SearchX,
  action,
  minHeight = "min-h-[50vh]",
}) => {
  return (
    <div
      className={`w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 ${minHeight} flex flex-col items-center justify-center p-8 text-center`}
    >
      <motion.div
        variants={staggerContainerVariants}
        initial="initial"
        animate="animate"
        className="flex flex-col items-center justify-center max-w-2xl mx-auto"
      >
        <motion.div
          variants={fadeInUpVariants}
          className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6"
        >
          <Icon className="w-10 h-10 text-orange-600" />
        </motion.div>

        <motion.h2
          variants={fadeInUpVariants}
          className={`${HERO_HEADING_SIZE} ${FONT_WEIGHT.medium} text-gray-900 mb-4`}
        >
          {title}
        </motion.h2>

        <motion.p
          variants={fadeInUpVariants}
          className={`${DESCRIPTION_SIZE} text-gray-600 mb-8 max-w-lg`}
        >
          {description}
        </motion.p>

        {action && (
          <motion.a
            variants={fadeInUpVariants}
            href={action.href}
            onClick={action.onClick}
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>{action.label}</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        )}
      </motion.div>
    </div>
  );
};

export default EmptyState;
