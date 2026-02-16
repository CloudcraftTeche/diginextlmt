"use client";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import {
  SECTION_PX,
  SECTION_PY,
  CONTENT_WRAPPER_CLASSES,
  WHITE_TEXT,
  GRAY_TEXT_LIGHT,
  COMMON_GAP_SM,
  COMMON_GAP_XLG,
  COMMON_MB_SM,
} from "@/constants/layoutConstants";
import { useRouter } from "next/navigation";
import { getFullImageUrl } from "@/lib/imageUtils";

// Animation variants
const fadeInUpVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainerVariants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1 } },
};

export interface InsightData {
  id: number;
  category: string;
  title: string;
  description: string;
  services: string; // Comma separated string
  image: string;
  insight_date: string;
  slug: string;
}

interface CaseStudyPageProps {
  data: InsightData;
}

const CaseStudyPage = ({ data }: CaseStudyPageProps) => {
  const router = useRouter();

  if (!data) {
    return null;
  }

  const servicesList = data.services
    ? data.services.split(",").map((s) => s.trim())
    : [];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className={`relative bg-gradient-to-br from-gray-900 via-black to-gray-800 ${WHITE_TEXT} overflow-hidden ${SECTION_PX} ${SECTION_PY}`}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 animate-pulse" />
        </div>

        <div className={`${CONTENT_WRAPPER_CLASSES} relative z-10`}>
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`inline-flex items-center ${COMMON_GAP_SM} ${GRAY_TEXT_LIGHT} hover:text-white transition-colors ${COMMON_MB_SM} group`}
            onClick={() => router.back()}
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </motion.button>

          <motion.div
            variants={staggerContainerVariants}
            initial="initial"
            animate="animate"
            className={`grid lg:grid-cols-2 ${COMMON_GAP_XLG} items-center`}
          >
            <div>
              <motion.div
                variants={fadeInUpVariants}
                className={`flex items-center ${COMMON_GAP_SM} mb-4`}
              >
                {data.category && (
                  <span className="px-4 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
                    {data.category}
                  </span>
                )}
                <span className="text-gray-400 text-sm">
                  {data.insight_date}
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUpVariants}
                className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight"
              >
                {data.title}
              </motion.h1>

              <motion.div
                variants={fadeInUpVariants}
                className={`flex flex-wrap ${COMMON_GAP_SM} mb-8`}
              >
                {servicesList.map((service, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm"
                  >
                    {service}
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUpVariants}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={getFullImageUrl(data.image)}
                alt={data.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className={`${SECTION_PX} ${SECTION_PY} bg-white`}>
        <div className={CONTENT_WRAPPER_CLASSES}>
          <motion.div
            variants={staggerContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUpVariants}
              className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6"
            >
              Overview
            </motion.h2>

            <motion.p
              variants={fadeInUpVariants}
              className="text-lg text-gray-600 leading-relaxed whitespace-pre-wrap"
            >
              {data.description}
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyPage;
