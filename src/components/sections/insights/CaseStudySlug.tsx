"use client";
import { caseStudyData } from "@/lib/insightsData";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import {
  SECTION_PX,
  SECTION_PY,
  CONTENT_WRAPPER_CLASSES,
  PRIMARY_GRADIENT,
  PRIMARY_SHADOW_HOVER,
  WHITE_TEXT,
  GRAY_TEXT_LIGHT,
  GRAY_TEXT_DARK,
  COMMON_GAP_MD,
  COMMON_GAP_SM,
  COMMON_GAP_XLG,
  COMMON_MB_SM,
  COMMON_MB_MD,
  CARD_PADDING,
} from "@/constants/layoutConstants";

// Animation variants
const fadeInUpVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainerVariants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1 } },
};

// Types
interface Strategy {
  title: string;
  description: string;
  points: string[];
}

interface Result {
  metric: string;
  value: string;
  description: string;
  icon: typeof TrendingUp;
}

interface CaseStudy {
  client: string;
  industry: string;
  timeline: string;
  services: string[];
  heroImage: string;
  overview: {
    title: string;
    description: string;
  };
  challenges: string[];
  solution: {
    title: string;
    intro: string;
    strategies: Strategy[];
  };
  results: Result[];
  additionalResults: string[];
  conclusion: {
    title: string;
    description: string;
  };
}

type CaseStudyData = {
  [key: string]: CaseStudy;
};

interface CaseStudyPageProps {
  slug: string;
}

const CaseStudyPage = ({ slug }: CaseStudyPageProps) => {
  const caseStudy = caseStudyData[slug];

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Case Study Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The case study you&apos;re looking for doesn&apos;t exist.
          </p>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    );
  }

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
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
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
                <span className="px-4 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
                  {caseStudy.industry}
                </span>
                <span className="text-gray-400 text-sm">
                  {caseStudy.timeline}
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUpVariants}
                className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight"
              >
                {caseStudy.client}
              </motion.h1>

              <motion.p
                variants={fadeInUpVariants}
                className={`text-lg ${GRAY_TEXT_LIGHT} leading-relaxed ${COMMON_MB_SM}`}
              >
                {caseStudy.overview.description}
              </motion.p>

              <motion.div
                variants={fadeInUpVariants}
                className={`flex flex-wrap ${COMMON_GAP_SM}`}
              >
                {caseStudy.services.map((service, index) => (
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
                src={caseStudy.heroImage}
                alt={caseStudy.client}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className={`${SECTION_PX} ${SECTION_PY} bg-gray-50`}>
        <div className={CONTENT_WRAPPER_CLASSES}>
          <motion.div
            variants={staggerContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUpVariants}
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            >
              The Challenge
            </motion.h2>

            <motion.p
              variants={fadeInUpVariants}
              className={`text-lg ${GRAY_TEXT_DARK} ${COMMON_MB_MD} max-w-3xl`}
            >
              Before partnering with DigiNext, {caseStudy.client} faced common
              digital issues that prevented potential clients from discovering
              their services.
            </motion.p>

            <motion.div
              variants={fadeInUpVariants}
              className={`grid md:grid-cols-2 lg:grid-cols-3 ${COMMON_GAP_MD}`}
            >
              {caseStudy.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className={`${CARD_PADDING} bg-white rounded-xl border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300`}
                >
                  <div className={`flex items-start ${COMMON_GAP_SM}`}>
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{challenge}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className={`${SECTION_PX} ${SECTION_PY} bg-white`}>
        <div className={CONTENT_WRAPPER_CLASSES}>
          <motion.div
            variants={staggerContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUpVariants}
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            >
              {caseStudy.solution.title}
            </motion.h2>

            <motion.p
              variants={fadeInUpVariants}
              className={`text-lg ${GRAY_TEXT_DARK} ${COMMON_MB_MD} max-w-3xl`}
            >
              {caseStudy.solution.intro}
            </motion.p>

            <div className={`grid md:grid-cols-2 ${COMMON_GAP_MD} lg:gap-12`}>
              {caseStudy.solution.strategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUpVariants}
                  className="relative pl-8 border-l-4 border-orange-500"
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {strategy.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {strategy.description}
                  </p>

                  <ul className="space-y-2">
                    {strategy.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className={`flex items-start ${COMMON_GAP_SM}`}
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section
        className={`${SECTION_PX} ${SECTION_PY} bg-gradient-to-br from-orange-50 to-orange-100`}
      >
        <div className={CONTENT_WRAPPER_CLASSES}>
          <motion.div
            variants={staggerContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUpVariants}
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center"
            >
              The Results
            </motion.h2>

            <motion.p
              variants={fadeInUpVariants}
              className={`text-lg ${GRAY_TEXT_DARK} ${COMMON_MB_MD} max-w-3xl mx-auto text-center`}
            >
              Within months, {caseStudy.client} experienced significant growth
              across all key metrics.
            </motion.p>

            <motion.div
              variants={fadeInUpVariants}
              className={`grid md:grid-cols-2 lg:grid-cols-4 ${COMMON_GAP_MD} mb-12`}
            >
              {caseStudy.results.map((result, index) => {
                const Icon = result.icon;
                return (
                  <div
                    key={index}
                    className={`${CARD_PADDING} bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange-500`}
                  >
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {result.value}
                    </div>
                    <div className="text-sm font-semibold text-orange-600 mb-2">
                      {result.metric}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {result.description}
                    </p>
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              variants={fadeInUpVariants}
              className={`bg-white rounded-2xl ${CARD_PADDING} shadow-lg`}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Additional Achievements
              </h3>
              <ul className="space-y-4">
                {caseStudy.additionalResults.map((result, index) => (
                  <li
                    key={index}
                    className={`flex items-start ${COMMON_GAP_SM}`}
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{result}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section
        className={`${SECTION_PX} ${SECTION_PY} bg-gradient-to-br from-gray-900 via-black to-gray-800 ${WHITE_TEXT}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUpVariants}
              className="text-3xl lg:text-4xl font-bold mb-6"
            >
              {caseStudy.conclusion.title}
            </motion.h2>

            <motion.p
              variants={fadeInUpVariants}
              className={`text-lg ${GRAY_TEXT_LIGHT} leading-relaxed mb-12`}
            >
              {caseStudy.conclusion.description}
            </motion.p>

            <motion.div
              variants={fadeInUpVariants}
              className={`flex flex-col sm:flex-row ${COMMON_GAP_SM} justify-center`}
            >
              <button
                className={`px-8 py-4 ${PRIMARY_GRADIENT} ${WHITE_TEXT} font-semibold rounded-full ${PRIMARY_SHADOW_HOVER} transition-all duration-300`}
              >
                Start Your Success Story
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300">
                View More Case Studies
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyPage;
