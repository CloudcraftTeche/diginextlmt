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

interface JobListing {
  id: string;
  title: string;
  experience: string;
  workMode: string;
  icon: React.ElementType;
  responsibilities: string[];
  requirements: string[];
  additionalInfo?: {
    title: string;
    points: string[];
  };
}

const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string>("motion-designer");

  const jobs: JobListing[] = [
    {
      id: "motion-designer",
      title: "Motion & Graphic Designer",
      experience: "2+ Years",
      workMode: "Remote",
      icon: Video,
      responsibilities: [
        "Develop engaging graphics, motion visuals, and animations for websites, social media, and digital campaigns",
        "Create audio-visual content, including short videos, explainer animations, and motion graphics",
        "Design SMM posts, reels, and animated content for multiple platforms",
        "Collaborate with the marketing and web teams to ensure creative consistency",
        "Edit and enhance video content as needed",
        "Maintain brand identity across all digital assets",
      ],
      requirements: [
        "2+ years of proven experience in motion design and graphic design",
        "Strong portfolio with motion graphics, animations, and design projects",
        "Expertise in tools like After Effects, Premiere Pro, Illustrator, Photoshop, Figma, etc.",
        "Ability to work in a fast-paced remote environment",
        "Strong creativity, attention to detail, and storytelling skills",
        "Understanding of current design and animation trends",
      ],
    },
    {
      id: "brand-designer",
      title: "Brand Designer",
      experience: "2+ Years",
      workMode: "Remote",
      icon: Palette,
      responsibilities: [
        "Develop and shape brand identities for a variety of clients",
        "Create visual concepts, brand guidelines, and design assets",
        "Collaborate with the marketing and creative teams",
        "Ensure brand consistency across all platforms",
      ],
      requirements: [
        "Proven experience as a Brand Designer (2+ years)",
        "Strong portfolio showcasing brand identity projects",
        "Proficiency in design tools like Adobe Creative Suite, Figma, etc.",
        "Strong attention to detail and creativity",
      ],
    },
    {
      id: "business-development",
      title: "Business Development Executive",
      experience: "4+ Years",
      workMode: "Remote/Hybrid",
      icon: TrendingUp,
      responsibilities: [
        "Pitch and acquire international clients across IT, Digital Marketing, and Event sectors",
        "Develop and execute strategic business growth plans",
        "Conduct market research to identify opportunities and potential clients",
        "Build strong client relationships and manage ongoing communication",
        "Prepare proposals, presentations, and business documents",
        "Collaborate with internal teams to ensure seamless project delivery",
        "Achieve monthly and quarterly sales targets as part of a performance-driven structure",
        "Maintain a consistent sales pipeline and follow-up process",
      ],
      requirements: [
        "Minimum 4 years of experience in Business Development",
        "Proven experience dealing with IT services, Digital Marketing, and Events",
        "Strong communication, negotiation, and presentation skills",
        "Experience in international sales/client acquisition",
        "Ability to understand client needs and translate them into effective solutions",
        "Highly self-driven, proactive, and target-oriented",
        "Comfortable working with CRM tools and business communication platforms",
      ],
      additionalInfo: {
        title: "Target-Based Expectations",
        points: [
          "Must be confident in working under a target-driven sales model",
          "Consistently achieve and exceed revenue acquisition goals",
          "Maintain high performance in outreach, conversions, and client retention",
        ],
      },
    },
    {
      id: "business-development-junior",
      title: "Business Development Executive (Junior)",
      experience: "0-1 Year",
      workMode: "Remote/Hybrid",
      icon: Users,
      responsibilities: [
        "Assist in pitching and communicating with international clients",
        "Support business development activities across IT, Digital Marketing, and Events",
        "Conduct basic market research to identify potential leads",
        "Prepare proposals, client reports, and presentations",
        "Coordinate with internal teams for smooth project execution",
        "Maintain CRM data and follow up with leads",
        "Work towards achieving monthly lead-generation and conversion targets",
      ],
      requirements: [
        "0–1 year of experience (freshers with good communication skills can apply)",
        "Strong interest in IT, Digital Marketing, or Event solutions",
        "Excellent communication and presentation skills",
        "Strong willingness to learn and grow in a fast-paced environment",
        "Basic knowledge of sales or client communication is an added advantage",
        "Confidence to work under a target-driven structure",
      ],
      additionalInfo: {
        title: "Target-Based Expectations (Junior Level)",
        points: [
          "Meet basic monthly KPIs (lead outreach, calls, follow-ups, proposals)",
          "Contribute to achieving team sales targets",
          "Develop confidence in pitching and client conversions over time",
        ],
      },
    },
    {
      id: "junior-graphic-designer",
      title: "Junior Graphic Designer",
      experience: "Fresher (0-1 Year)",
      workMode: "Remote",
      icon: Palette,
      responsibilities: [
        "Assist in creating graphics for social media, websites, and branding materials",
        "Support senior designers with design tasks and revisions",
        "Help develop visually appealing layouts and digital assets",
        "Brainstorm creative ideas for campaigns and projects",
        "Maintain brand consistency across all designs",
      ],
      requirements: [
        "Freshers are welcome (0–1 year experience)",
        "Basic knowledge of design tools (Photoshop, Illustrator, Canva, or Figma)",
        "Creative mindset with strong attention to detail",
        "Ability to follow brand guidelines and design directions",
        "A portfolio (college projects or personal work) is a plus",
      ],
    },
    {
      id: "sales-manager",
      title: "Sales Manager",
      experience: "4+ Years",
      workMode: "Remote/Hybrid",
      icon: TrendingUp,
      responsibilities: [
        "Drive sales growth through strategic planning and execution",
        "Achieve monthly and quarterly sales targets consistently",
        "Pitch and convert clients in IT, Digital Marketing, and related services",
        "Build, manage, and maintain strong customer relationships",
        "Identify new business opportunities and potential markets",
        "Lead follow-ups, negotiations, and deal closures",
        "Prepare sales reports and performance analytics",
        "Work closely with marketing and BD teams to support sales activities",
      ],
      requirements: [
        "Proven experience in a target-based sales role",
        "Strong communication, negotiation, and closing skills",
        "Experience in IT, Digital Marketing, or similar industries is a plus",
        "Ability to work under pressure and meet strict targets",
        "Self-motivated, confident, and goal-oriented",
        "Familiarity with CRM tools and sales pipelines",
      ],
      additionalInfo: {
        title: "What We Expect",
        points: [
          "A strong achiever with a competitive mindset",
          "Someone who is comfortable working in a performance-driven structure",
          "Commitment to hitting and exceeding targets consistently",
        ],
      },
    },
    {
      id: "ppc-expert",
      title: "PPC Expert",
      experience: "2+ Years",
      workMode: "Remote",
      icon: Target,
      responsibilities: [
        "Plan, execute, and optimize PPC campaigns across Google Ads, Meta Ads, and other platforms",
        "Conduct keyword research, audience targeting, and competitor analysis",
        "Manage budgets, bidding strategies, and campaign performance",
        "Track, measure, and report campaign results with actionable insights",
        "Collaborate with SEO, design, and marketing teams to improve conversions",
        "Stay updated with the latest trends and paid advertising strategies",
      ],
      requirements: [
        "Minimum 2+ years of proven PPC experience",
        "Hands-on experience with Google Ads, Meta Ads Manager, Google Analytics",
        "Strong skills in campaign optimization, A/B testing, and performance tracking",
        "Ability to analyze data and make ROI-driven decisions",
        "Good communication and reporting skills",
        "Immediate joining preferred",
      ],
    },
    {
      id: "seo-trainee",
      title: "SEO Trainee / Intern",
      experience: "Fresher (0-1 Year)",
      workMode: "Remote",
      icon: Award,
      responsibilities: [
        "Assist in keyword research, on-page optimization, and technical SEO",
        "Work on content optimization, meta tags, and improving website rankings",
        "Support in backlink building and outreach activities",
        "Perform SEO audits and competitor analysis",
        "Collaborate with the digital marketing team on SEO strategies",
        "Monitor website performance using tools like Google Analytics & Search Console",
      ],
      requirements: [
        "Basic understanding of SEO concepts (training will be provided)",
        "Interest in digital marketing and website optimization",
        "Good analytical and research skills",
        "Familiarity with tools like Google Analytics, Search Console, or SEMrush (added advantage)",
        "Strong communication skills and eagerness to learn",
        "Immediate joining preferred",
      ],
    },
  ];

  const currentJob = jobs.find((job) => job.id === selectedJob) || jobs[0];
  const JobIcon = currentJob.icon;

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
              We&apos;re looking for talented individuals to help shape the future of
              digital design and brand identity. Be part of a team that creates
              meaningful experiences.
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
              const Icon = job.icon;
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
                        {job.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {job.experience} • {job.workMode}
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
                        {currentJob.title}
                      </h2>
                      <p className={`${DESCRIPTION_SIZE} text-gray-600 mb-4`}>
                        Diginext —{" "}
                        <a
                          href="https://diginext.ae/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-600 hover:text-orange-700 underline"
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
                        {currentJob.workMode}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                      <Clock className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">
                        Full Time
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
                    {currentJob.responsibilities.map((item, index) => (
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
                    {currentJob.requirements.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className={`${DESCRIPTION_SIZE} text-gray-700`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Additional Info (if exists) */}
                {currentJob.additionalInfo && (
                  <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-3xl p-8 lg:p-10 shadow-sm">
                    <h3
                      className={`${TITLE_SIZE} ${FONT_WEIGHT.medium} text-gray-900 mb-6`}
                    >
                      {currentJob.additionalInfo.title}
                    </h3>
                    <ul className="space-y-4">
                      {currentJob.additionalInfo.points.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Target className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                          <span className={`${DESCRIPTION_SIZE} text-gray-700`}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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
                            {currentJob.title} Application
                          </p>
                        </div>
                      </div>
                    </div>

                    <a
                      href={`mailto:careers@diginext.ae?subject=${currentJob.title} Application`}
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
              We&apos;re an equal opportunity employer and value diversity at our
              company. We do not discriminate on the basis of race, religion,
              color, national origin, gender, sexual orientation, age, marital
              status, veteran status, or disability status.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
