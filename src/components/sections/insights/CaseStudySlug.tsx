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

export interface StrategyBlockPoint {
  id: number;
  text: string;
  order: number;
}

export interface StrategyBlock {
  id: number;
  heading: string;
  order: number;
  points: StrategyBlockPoint[];
}

export interface Strategy {
  id: number;
  heading: string;
  description: string;
  blocks: StrategyBlock[];
}

export interface ResultBlock {
  id: number;
  image: string | null;
  heading: string;
  title: string;
  description: string;
  order: number;
}

export interface Results {
  id: number;
  heading: string;
  description: string;
  blocks: ResultBlock[];
}

export interface AchievementPoint {
  id: number;
  text: string;
  order: number;
}

export interface Achievements {
  id: number;
  heading: string;
  points: AchievementPoint[];
}

export interface Growth {
  id: number;
  heading: string;
  description: string;
}

export interface InsightData {
  id: number;
  category: string;
  title: string;
  description: string;
  services: string;
  image: string;
  insight_date: string;
  slug: string;
  challenge_sections?: ChallengeSection[];
  strategy?: Strategy;
  results?: Results;
  achievements?: Achievements;
  growth?: Growth;
  // Deprecated fields kept for backward compatibility if needed temporarily
  solution_title?: string;
  solution_description?: string;
  solution_sections?: any[];
  result_sections?: any[];
  additional_results?: any[];
  conclusion_title?: string;
  conclusion_description?: string;
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
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sans">
      {/* Hero Section - Premium Design */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#0A0A0A]">
        {/* Background Accents */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[60%] bg-orange-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[50%] bg-blue-500/5 blur-[100px] rounded-full" />
        </div>

        <div className={`${SECTION_PX} w-full relative z-10 py-20 lg:py-32`}>
          <div className={CONTENT_WRAPPER_CLASSES}>
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainerVariants}
              className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center"
            >
              <div className="lg:col-span-7">
                <motion.button
                  variants={fadeInUpVariants}
                  onClick={() => router.back()}
                  className="group mb-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  </div>
                  <span className="text-sm font-medium tracking-wide uppercase">
                    Back to Insights
                  </span>
                </motion.button>

                <motion.div variants={fadeInUpVariants} className="mb-6">
                  {data.category && (
                    <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold tracking-widest uppercase mb-4 border border-orange-500/20">
                      {data.category}
                    </span>
                  )}
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                    {data.title}
                  </h1>
                </motion.div>

                <motion.div
                  variants={fadeInUpVariants}
                  className="flex flex-wrap gap-2 mb-8"
                >
                  {servicesList.map((service, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-gray-400 text-xs font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  variants={fadeInUpVariants}
                  className="flex items-center gap-6 pt-4 border-t border-white/10"
                >
                  <div>
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-1">
                      Duration
                    </p>
                    <p className="text-white font-medium">
                      {data.insight_date}
                    </p>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div>
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-1">
                      Status
                    </p>
                    <p className="text-orange-500 font-medium tracking-wide">
                      COMPLETED
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-5 relative">
                <motion.div
                  variants={fadeInUpVariants}
                  className="relative z-10 aspect-[5/4] rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] group"
                >
                  <img
                    src={getFullImageUrl(data.image)}
                    alt={data.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </motion.div>
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500/20 blur-2xl rounded-full animate-pulse" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="relative z-10 -mt-10 lg:-mt-16 pb-20">
        <div className={CONTENT_WRAPPER_CLASSES}>
          {/* Overview Card */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white rounded-[32px] p-8 md:p-12 lg:p-20 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100 mb-20"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-orange-500 rounded-full" />
                <h2 className="text-sm font-bold tracking-[.3em] uppercase text-gray-400">
                  Project Overview
                </h2>
              </div>
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light text-justify">
                {data.description}
              </p>
            </div>
          </motion.section>

          {/* Detailed Content Sections */}
          <div className="space-y-32">
            {/* Challenge Section */}
            {data.challenge_sections?.map((section) => (
              <section key={section.id} className="relative">
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                  <div className="lg:col-span-4 sticky top-24">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                      {section.title}
                    </h2>
                    <p className="text-gray-500 leading-relaxed text-lg">
                      {section.description}
                    </p>
                  </div>
                  <div className="lg:col-span-8">
                    <div className="grid sm:grid-cols-2 gap-6">
                      {section.items.map((item, idx) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-orange-500/30 hover:shadow-xl transition-all duration-300 group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gray-50 text-gray-400 font-bold flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                            {(idx + 1).toString().padStart(2, "0")}
                          </div>
                          <p className="text-gray-700 font-medium leading-relaxed">
                            {item.text}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ))}

            {/* Strategy (formerly Solution) Section */}
            {data.strategy && (
              <section className="relative py-20 bg-gray-900 rounded-[40px] px-8 md:px-12 lg:px-20 overflow-hidden text-white shadow-2xl">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500/5 blur-[120px] pointer-events-none" />
                <div className="relative z-10">
                  <div className="max-w-3xl mb-16">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-[2px] bg-blue-500 rounded-full" />
                      <h2 className="text-sm font-bold tracking-[.3em] uppercase text-blue-400">
                        Our Strategy
                      </h2>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">
                      {data.strategy.heading}
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {data.strategy.description}
                    </p>
                  </div>

                  <div className="space-y-20">
                    {data.strategy.blocks
                      ?.sort((a, b) => a.order - b.order)
                      .map((block) => (
                        <div
                          key={block.id}
                          className="grid lg:grid-cols-3 gap-12"
                        >
                          <div className="lg:col-span-1">
                            <h3 className="text-2xl font-bold text-white mb-4">
                              {block.heading}
                            </h3>
                          </div>
                          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
                            {block.points
                              ?.sort((a, b) => a.order - b.order)
                              .map((point) => (
                                <div
                                  key={point.id}
                                  className="flex items-start gap-4 p-5 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors"
                                >
                                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                  <p className="text-gray-300 text-sm leading-relaxed">
                                    {point.text}
                                  </p>
                                </div>
                              ))}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </section>
            )}

            {/* Results & Metrics Section */}
            {data.results && (
              <section className="py-20">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-sm font-bold tracking-[.3em] uppercase text-orange-500 mb-4">
                    {data.results.heading}
                  </h2>
                  <h3 className="text-4xl font-bold text-gray-900 mb-6">
                    {data.results.description}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {data.results.blocks
                    ?.sort((a, b) => a.order - b.order)
                    .map((block, idx) => (
                      <motion.div
                        key={block.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 text-center flex flex-col items-center"
                      >
                        <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                          <span className="text-2xl font-light">
                            {block.heading.replace("%", "")}
                          </span>
                          {block.heading.includes("%") && (
                            <span className="text-sm">%</span>
                          )}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {block.heading}
                        </h4>
                        <p className="text-gray-400 uppercase tracking-widest text-[10px] font-bold mb-4">
                          {block.title}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {block.description}
                        </p>
                      </motion.div>
                    ))}
                </div>

                {data.achievements && (
                  <div className="mt-12 p-8 bg-gray-50 rounded-[32px] border border-gray-100">
                    <h4 className="text-center text-lg font-bold text-gray-900 mb-8 uppercase tracking-widest">
                      {data.achievements.heading}
                    </h4>
                    <div className="flex flex-wrap gap-8 justify-center">
                      {data.achievements.points
                        ?.sort((a, b) => a.order - b.order)
                        .map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center gap-3"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                            <span className="text-gray-700 font-medium">
                              {item.text}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </section>
            )}
          </div>
        </div>
      </main>

      {/* Services Provided Component */}
      <div className="bg-white border-t border-gray-100">
        <ServicesProvided
          details={[
            { label: "Industry", value: data.category },
            { label: "Duration", value: data.insight_date },
            { label: "Scope", value: data.services },
          ]}
        />
      </div>

      {/* Growth (formerly Conclusion) Section */}
      {data.growth && (
        <section className="py-32 bg-[#0A0A0A] overflow-hidden relative">
          <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2" />
          <div
            className={`${CONTENT_WRAPPER_CLASSES} relative z-10 text-center`}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 leading-tight">
                {data.growth.heading}
              </h2>
              <div className="relative">
                <div className="absolute -top-8 -left-8 text-orange-500/20 text-9xl font-serif">
                  “
                </div>
                <p className="text-xl md:text-xl text-gray-400 italic leading-relaxed font-light px-12">
                  {data.growth.description}
                </p>
                <div className="absolute -bottom-16 -right-8 text-blue-500/20 text-9xl font-serif">
                  ”
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CaseStudyPage;
