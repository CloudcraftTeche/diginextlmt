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
import ServicesProvided from "./ServicesProvided";

// Animation variants
const fadeInUpVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainerVariants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1 } },
};

export interface ChallengeItem {
  id: number;
  text: string;
}

export interface ChallengeSection {
  id: number;
  title: string;
  description: string;
  items: ChallengeItem[];
}

export interface InsightData {
  id: number;
  category: string;
  title: string;
  description: string;
  services: string; // Comma separated string
  image: string;
  insight_date: string;
  slug: string;
  challenge_sections?: ChallengeSection[];
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

  const serviceDetails = [
    {
      label: "Services",
      value: data.services,
    },
    {
      label: "Timescale",
      value: data.insight_date,
    },
  ];

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
      ={/* Overview Section */}
      <section
        className={`${SECTION_PX} ${SECTION_PY} bg-white border-t border-gray-100`}
      >
        <div className={CONTENT_WRAPPER_CLASSES}>
          <motion.div
            variants={staggerContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-6">
              <motion.h2
                variants={fadeInUpVariants}
                className="text-xl sm:text-2xl lg:text-2xl font-semibold text-gray-900 mb-4 leading-tight"
              >
                Overview
              </motion.h2>
              <motion.p
                variants={fadeInUpVariants}
                className="text-lg text-gray-600 leading-relaxed whitespace-pre-wrap text-justify"
              >
                {data.description}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Challenge Sections */}
      {data.challenge_sections &&
        data.challenge_sections.map((section) => (
          <section
            key={section.id}
            className={`${SECTION_PX} ${SECTION_PY} bg-gray-50`}
          >
            <div className={CONTENT_WRAPPER_CLASSES}>
              <motion.div
                variants={staggerContainerVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <div className="flex flex-col gap-8">
                  <motion.h2
                    variants={fadeInUpVariants}
                    className="text-xl sm:text-2xl lg:text-2xl font-semibold text-gray-900 mb-4 leading-tight"
                  >
                    {section.title}
                  </motion.h2>
                  <div className="space-y-8">
                    <motion.p
                      variants={fadeInUpVariants}
                      className="text-lg text-gray-700 leading-relaxed text-justify"
                    >
                      {section.description}
                    </motion.p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {section.items.map((item, idx) => (
                        <motion.div
                          key={item.id}
                          variants={fadeInUpVariants}
                          custom={idx}
                          className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100"
                        >
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">
                            {idx + 1}
                          </div>
                          <p className="text-gray-700 leading-snug">
                            {item.text}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        ))}
    </div>
  );
};

export default CaseStudyPage;
