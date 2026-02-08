"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Briefcase,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Users,
  Target,
  Award,
  ChevronDown,
  Palette,
  Video,
  TrendingUp,
  SearchX,
} from "lucide-react";

import {
  CONTENT_WRAPPER_CLASSES,
  SECTION_PX,
  SECTION_PY,
} from "@/constants/layoutConstants";
import {
  HERO_HEADING_SIZE,
  TITLE_SIZE,
  DESCRIPTION_SIZE,
  FONT_WEIGHT,
} from "@/constants/typographyConstants";
import {
  staggerContainerVariants,
  fadeInUpVariants,
  onceInViewPort,
} from "@/constants/animationVariants";

import { CareerPost } from "@/mocks/career/careerList.mock";

interface CareersPageSectionProps {
  jobs: CareerPost[];
}

const getJobIcon = (title: string) => {
  const lower = title.toLowerCase();
  if (lower.includes("motion") || lower.includes("video")) return Video;
  if (lower.includes("design") || lower.includes("creative")) return Palette;
  if (lower.includes("sales")) return TrendingUp;
  if (lower.includes("business")) return Users;
  if (
    lower.includes("seo") ||
    lower.includes("ppc") ||
    lower.includes("marketing")
  )
    return Target;
  if (lower.includes("manager")) return CheckCircle;
  return Briefcase;
};

const CareersPage: React.FC<CareersPageSectionProps> = ({ jobs = [] }) => {
  const [selectedJob, setSelectedJob] = useState<number>(jobs[0]?.id || 0);

  // Effect to set initial selected job if jobs change
  React.useEffect(() => {
    if (jobs.length > 0 && !jobs.find((j) => j.id === selectedJob)) {
      setSelectedJob(jobs[0].id);
    }
  }, [jobs, selectedJob]);

  if (!jobs || jobs.length === 0) {
    return (
      <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50 min-h-screen flex flex-col items-center justify-center pt-20 pb-20">
        <section className={`${SECTION_PX} py-20 text-center`}>
          <div className={CONTENT_WRAPPER_CLASSES}>
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
                <SearchX className="w-10 h-10 text-orange-600" />
              </motion.div>

              <motion.h2
                variants={fadeInUpVariants}
                className={`${HERO_HEADING_SIZE} ${FONT_WEIGHT.medium} text-gray-900 mb-4`}
              >
                No Open Positions
              </motion.h2>

              <motion.p
                variants={fadeInUpVariants}
                className={`${DESCRIPTION_SIZE} text-gray-600 mb-8 max-w-lg`}
              >
                We don&apos;t have any open roles at the moment, but we&apos;re
                always looking for talented people. Send us your CV, and
                we&apos;ll keep you in mind for future opportunities.
              </motion.p>

              <motion.a
                variants={fadeInUpVariants}
                href="mailto:careers@diginext.ae"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transform hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us Your CV</span>
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  const currentJob = jobs.find((job) => job.id === selectedJob) || jobs[0];
  const JobIcon = getJobIcon(currentJob.heading);

  // Helper to get specific section points
  const getSectionPoints = (headingPartial: string) => {
    const section = currentJob.sections.find((s) =>
      s.heading.toLowerCase().includes(headingPartial.toLowerCase()),
    );
    return section ? section.points : [];
  };

  const responsibilities = getSectionPoints("responsibilities");
  const requirements = getSectionPoints("requirements");
  // Find "What We Expect" or "Target-Based Expectations" or any other section
  const otherSections = currentJob.sections.filter(
    (s) =>
      !s.heading.toLowerCase().includes("responsibilities") &&
      !s.heading.toLowerCase().includes("requirements"),
  );

  const perks = [
    {
      icon: Users,
      title: "Remote First",
      description: "Work from anywhere in the world",
    },
    {
      icon: Target,
      title: "Growth Focused",
      description: "Continuous learning opportunities",
    },
    {
      icon: Award,
      title: "Creative Freedom",
      description: "Shape innovative solutions",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className={`${SECTION_PX} pt-16 lg:pt-24 pb-8`}>
        <div className={CONTENT_WRAPPER_CLASSES}>
          <motion.div
            variants={staggerContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={onceInViewPort}
            className="text-center"
          >
            <motion.div
              variants={fadeInUpVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              We&apos;re Hiring - Multiple Positions
            </motion.div>

            <motion.h1
              variants={fadeInUpVariants}
              className={`${HERO_HEADING_SIZE} ${FONT_WEIGHT.medium} mb-6 text-gray-900`}
            >
              Join Our Creative Team
            </motion.h1>

            <motion.p
              variants={fadeInUpVariants}
              className={`${DESCRIPTION_SIZE} text-gray-600 max-w-3xl mx-auto leading-relaxed`}
            >
              We&apos;re looking for talented individuals to help shape the
              future of digital design and brand identity. Be part of a team
              that creates meaningful experiences.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Job Selector */}
      <section className={`${SECTION_PX} pb-8`}>
        <div className={CONTENT_WRAPPER_CLASSES}>
          <motion.div
            variants={fadeInUpVariants}
            initial="initial"
            whileInView="animate"
            viewport={onceInViewPort}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {jobs.map((job) => {
              const Icon = getJobIcon(job.heading);
              return (
                <button
                  key={job.id}
                  onClick={() => setSelectedJob(job.id)}
                  className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                    selectedJob === job.id
                      ? "border-orange-500 bg-orange-50 shadow-lg"
                      : "border-gray-200 bg-white hover:border-orange-200 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        selectedJob === job.id
                          ? "bg-orange-600 text-white"
                          : "bg-gray-100 text-gray-600 group-hover:bg-orange-100 group-hover:text-orange-600"
                      } transition-colors`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-lg ${FONT_WEIGHT.medium} mb-1 ${
                          selectedJob === job.id
                            ? "text-orange-600"
                            : "text-gray-900"
                        }`}
                      >
                        {job.heading}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {job.experience} • {job.type}
                      </p>
                    </div>
                  </div>
                  {selectedJob === job.id && (
                    <div className="absolute top-4 right-4">
                      <CheckCircle className="w-5 h-5 text-orange-600" />
                    </div>
                  )}
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className={`${SECTION_PX} ${SECTION_PY}`}>
        <div className={CONTENT_WRAPPER_CLASSES}>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedJob}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {/* Left Column - Job Details */}
              <div className="lg:col-span-2 space-y-8">
                {/* Job Header Card */}
                <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <JobIcon className="w-7 h-7 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h2
                        className={`${TITLE_SIZE} ${FONT_WEIGHT.medium} text-gray-900 mb-2`}
                      >
                        {currentJob.heading}
                      </h2>
                      <p className={`${DESCRIPTION_SIZE} text-gray-600 mb-4`}>
                        {currentJob.description}
                        <a
                          href="https://diginext.ae/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-600 hover:text-orange-700 underline ml-1"
                        >
                          https://diginext.ae/
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Meta Info Pills */}
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                      <Briefcase className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">
                        {currentJob.experience}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                      <MapPin className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">
                        {currentJob.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                      <Clock className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">
                        {currentJob.job_type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <Target className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3
                      className={`${TITLE_SIZE} ${FONT_WEIGHT.medium} text-gray-900`}
                    >
                      Responsibilities
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className={`${DESCRIPTION_SIZE} text-gray-700`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3
                      className={`${TITLE_SIZE} ${FONT_WEIGHT.medium} text-gray-900`}
                    >
                      Requirements
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {requirements.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className={`${DESCRIPTION_SIZE} text-gray-700`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Additional Sections */}
                {otherSections.map((section, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-3xl p-8 lg:p-10 shadow-sm"
                  >
                    <h3
                      className={`${TITLE_SIZE} ${FONT_WEIGHT.medium} text-gray-900 mb-6`}
                    >
                      {section.heading}
                    </h3>
                    <ul className="space-y-4">
                      {section.points.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Target className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                          <span className={`${DESCRIPTION_SIZE} text-gray-700`}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Right Column - Sticky Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-30 space-y-6">
                  {/* Apply Card */}
                  <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 shadow-xl">
                    <h3
                      className={`${TITLE_SIZE} ${FONT_WEIGHT.medium} text-white mb-4`}
                    >
                      Ready to Apply?
                    </h3>
                    <p className={`${DESCRIPTION_SIZE} text-gray-300 mb-6`}>
                      Send your CV and portfolio to get started.
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-400 mb-1">
                            Email us at
                          </p>
                          <a
                            href="mailto:careers@diginext.ae"
                            className="text-white hover:text-orange-400 transition-colors break-all"
                          >
                            careers@diginext.ae
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-400 mb-1">
                            Subject line
                          </p>
                          <p className="text-white text-sm">
                            {currentJob.heading} Application
                          </p>
                        </div>
                      </div>
                    </div>

                    <a
                      href={`mailto:careers@diginext.ae?subject=${currentJob.heading} Application`}
                      className="group w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transform hover:-translate-y-0.5"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                  {/* Perks */}
                  <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
                    <h3
                      className={`text-lg ${FONT_WEIGHT.medium} text-gray-900 mb-4`}
                    >
                      Why Join Us?
                    </h3>
                    <div className="space-y-4">
                      {perks.map((perk, index) => {
                        const Icon = perk.icon;
                        return (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon className="w-4 h-4 text-orange-600" />
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-gray-900 mb-1">
                                {perk.title}
                              </h4>
                              <p className="text-xs text-gray-600">
                                {perk.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Footer Note */}
      <section className={`${SECTION_PX} pb-16`}>
        <div className={CONTENT_WRAPPER_CLASSES}>
          <motion.div
            variants={fadeInUpVariants}
            initial="initial"
            whileInView="animate"
            viewport={onceInViewPort}
            className="text-center bg-gray-100 rounded-2xl p-8"
          >
            <p
              className={`${DESCRIPTION_SIZE} text-gray-600 max-w-3xl mx-auto`}
            >
              We&apos;re an equal opportunity employer and value diversity at
              our company. We do not discriminate on the basis of race,
              religion, color, national origin, gender, sexual orientation, age,
              marital status, veteran status, or disability status.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
