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
import { WorkService } from "@/services/WorkService";
import { ChevronDown, Loader2 } from "lucide-react";

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
interface PortfolioShowcaseProps {
  works: any;
  onFilter: (type: "expertise" | "industry", id: number) => void;
}

const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({
  works,
  onFilter,
}) => {
  const router = useRouter();

  // Chip States
  const [openDropdown, setOpenDropdown] = useState<
    "expertise" | "industries" | null
  >(null);
  const [expertiseData, setExpertiseData] = useState<{
    data: any[];
    loading: boolean;
  }>({ data: [], loading: false });
  const [industriesData, setIndustriesData] = useState<{
    data: any[];
    loading: boolean;
  }>({ data: [], loading: false });

  const handleWorkClick = (slug: string) => {
    router.push(`/work/${slug}`);
  };

  const toggleDropdown = async (type: "expertise" | "industries") => {
    if (openDropdown === type) {
      setOpenDropdown(null);
      return;
    }

    setOpenDropdown(type);

    // Fetch data if not already present
    if (type === "expertise" && expertiseData.data.length === 0) {
      setExpertiseData((prev) => ({ ...prev, loading: true }));
      try {
        const res = await WorkService.getExpertise();
        setExpertiseData({ data: res.data.data || [], loading: false });
      } catch (err) {
        console.error(err);
        setExpertiseData({ data: [], loading: false });
      }
    } else if (type === "industries" && industriesData.data.length === 0) {
      setIndustriesData((prev) => ({ ...prev, loading: true }));
      try {
        const res = await WorkService.getIndustries();
        setIndustriesData({ data: res.data.data || [], loading: false });
      } catch (err) {
        console.error(err);
        setIndustriesData({ data: [], loading: false });
      }
    }
  };

  const handleFilterClick = (type: "expertise" | "industry", id: number) => {
    onFilter(type, id);
    setOpenDropdown(null);
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
                ({works.length})
              </span>
            </h1>
          </div>

          {/* Filter Chips */}
          <div className="flex gap-4 relative">
            {/* Expertise Chip */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("expertise")}
                className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 border border-black text-sm font-medium
                    ${openDropdown === "expertise" ? "bg-black text-white" : "bg-transparent text-black hover:bg-black hover:text-white"}`}
              >
                Expertise
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${openDropdown === "expertise" ? "rotate-180" : ""}`}
                />
              </button>

              {openDropdown === "expertise" && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 z-20 py-2 max-h-64 overflow-y-auto">
                  {expertiseData.loading ? (
                    <div className="flex justify-center p-4">
                      <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
                    </div>
                  ) : expertiseData.data.length > 0 ? (
                    expertiseData.data.map((item: any) => (
                      <div
                        key={item.id}
                        onClick={() => handleFilterClick("expertise", item.id)}
                        className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700 transition-colors"
                      >
                        {item.name}
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-xs text-gray-400">
                      No expertise found
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Industries Chip */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("industries")}
                className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 border border-black text-sm font-medium
                    ${openDropdown === "industries" ? "bg-black text-white" : "bg-transparent text-black hover:bg-black hover:text-white"}`}
              >
                Industries
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${openDropdown === "industries" ? "rotate-180" : ""}`}
                />
              </button>

              {openDropdown === "industries" && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 z-20 py-2 max-h-64 overflow-y-auto">
                  {industriesData.loading ? (
                    <div className="flex justify-center p-4">
                      <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
                    </div>
                  ) : industriesData.data.length > 0 ? (
                    industriesData.data.map((item: any) => (
                      <div
                        key={item.id}
                        onClick={() => handleFilterClick("industry", item.id)}
                        className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700 transition-colors"
                      >
                        {item.name}
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-xs text-gray-400">
                      No industries found
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="visible"
          animate="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {works.map((work: any) => (
            <motion.article
              // Use ID or fallback to title/random key since API doesn't have slug yet
              key={work.id || work.title}
              variants={cardVariants}
              className="group cursor-pointer"
              // API doesn't provide slug, using ID for now (though page expects string slug).
              // TODO: Update API or frontend to use consistent IDs/Slugs.
              // Using ID as string if slug is missing.
              onClick={() => handleWorkClick(work.slug || work.id.toString())}
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-gray-100">
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                  {/* Access image directly from work object, fallback to banner_image or empty string */}
                  <MediaDisplay
                    src={work.image || work.banner_image || ""}
                    alt={work.title}
                  />
                </div>

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold px-6 py-2.5 border-2 border-white rounded-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    View Case Study
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                  {/* Industry is an ID in API (number), so we might want to map it or just show safe fallback */}
                  <span>{work.industry || "Industry"}</span>
                  <span>•</span>
                  {/* System is at root level in API */}
                  <span>{work.system || "System"}</span>
                </div>

                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {work.title}
                  </h3>
                </div>

                <p
                  className={`${DESCRIPTION_SIZE} text-gray-600 leading-relaxed line-clamp-2`}
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
