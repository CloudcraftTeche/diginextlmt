import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ServicesService } from "@/services/ServicesService";
import { ServicesLoadingSkeleton } from "@/components/LoadingSkelton/home/ServicesLoadingSkeleton";

// Reuse layout/color constants
import {
  SECTION_PX,
  SECTION_PY,
  CONTENT_WRAPPER_CLASSES,
} from "@/constants/layoutConstants";

import {
  HERO_HEADING_SIZE,
  CENTER_DESCRIPTION_SIZE,
  TITLE_SIZE,
  DESCRIPTION_SIZE,
  FONT_WEIGHT,
} from "@/constants/typographyConstants";

import {
  staggerContainerVariants,
  fadeInUpVariants,
  onceInViewPort,
} from "@/constants/animationVariants";

interface ServiceCard {
  title: string;
  description: string;
  link?: string;
}

interface ApiServiceItem {
  service_name: string;
  service_description: string;
  slug?: string;
}

interface ServicesProps {
  title?: string;
  subtitle?: string;
  services?: ServiceCard[];
}

const ServicesSection: React.FC<ServicesProps> = ({
  title = "Creative & Supportive Services",
  subtitle = "Maintain high standards of ethics in engaging and delivering content and strategy that result in measurable business growth.",
  services: initialServices,
}) => {
  const [services, setServices] = useState<ServiceCard[]>(
    initialServices || [],
  );
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await ServicesService.getServices();

        let serviceList: ApiServiceItem[] = [];
        // Handle both direct array (mock) and envelope structure (API)
        if (Array.isArray(response.data)) {
          serviceList = response.data;
        } else if (response.data?.data && Array.isArray(response.data.data)) {
          serviceList = response.data.data;
        }

        if (serviceList.length > 0) {
          const mappedServices = serviceList.map((item: ApiServiceItem) => ({
            title: item.service_name,
            description: item.service_description,
            // Generate basic slug if missing, e.g. "Design" -> "design"
            link: `/solutions/${
              item.slug ||
              item.service_name?.toLowerCase().replace(/\s+/g, "-") ||
              "#"
            }`,
          }));
          setServices(mappedServices);
        }
      } catch (error) {
        console.error("Failed to fetch services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 350; // Approximated card width + gap
      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  if (loading) {
    return <ServicesLoadingSkeleton />;
  }

  return (
    <section
      id="services-section"
      className={`${SECTION_PX} ${SECTION_PY} bg-white`}
      aria-labelledby="services-heading"
    >
      <div className={CONTENT_WRAPPER_CLASSES}>
        <motion.div
          className="flex flex-col items-center"
          variants={staggerContainerVariants}
          initial="initial"
          whileInView="animate"
          viewport={onceInViewPort}
        >
          {/* Header Section with Buttons */}
          <div className="w-full relative flex flex-col items-center mb-10">
            <div className="text-center max-w-3xl">
              {/* Section Title */}
              <motion.h2
                id="services-heading"
                variants={fadeInUpVariants}
                className={`${HERO_HEADING_SIZE} mb-3`}
              >
                {title}
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                variants={fadeInUpVariants}
                className={`${CENTER_DESCRIPTION_SIZE} leading-relaxed`}
              >
                {subtitle}
              </motion.p>
            </div>

            {/* Scroll Buttons - Desktop Only or Hidden on Mobile if preferred */}
            <motion.div
              variants={fadeInUpVariants}
              className="hidden md:flex gap-3 md:absolute md:right-0 md:bottom-2 mt-6 md:mt-0"
            >
              <button
                onClick={() => scroll("left")}
                className="p-3 border border-gray-300 rounded-full hover:bg-black hover:text-white transition-all duration-300"
                aria-label="Scroll left"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-3 border border-gray-300 rounded-full hover:bg-black hover:text-white transition-all duration-300"
                aria-label="Scroll right"
              >
                <ChevronRight size={24} />
              </button>
            </motion.div>
          </div>

          {/* Services Cards — Horizontal Scroll */}
          <div
            ref={scrollContainerRef}
            className="w-full overflow-x-auto pb-4 relative z-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
            style={{
              touchAction: "pan-x",
              WebkitOverflowScrolling: "touch",
            }}
            data-lenis-prevent="true"
          >
            <div
              className="flex gap-5 lg:gap-6 w-max"
              data-lenis-prevent="true"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUpVariants}
                  className="snap-start flex-shrink-0 w-72 sm:w-80 lg:w-96 relative flex flex-col p-7 lg:p-8 bg-white border border-gray-300 rounded-2xl
                  hover:bg-black hover:border-black hover:text-white hover:shadow-lg
                  transition-all duration-500 ease-out group"
                >
                  {/* Title */}
                  <h3
                    className={`${TITLE_SIZE} mb-4 group-hover:text-white transition-colors duration-500`}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`${DESCRIPTION_SIZE} ${FONT_WEIGHT.light} group-hover:text-white leading-relaxed`}
                  >
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
