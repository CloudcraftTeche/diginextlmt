"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

interface ServicesProps {
  title?: string;
  subtitle?: string;
  services?: ServiceCard[];
}

const ServicesSection: React.FC<ServicesProps> = ({
  title = "Our Main IT Solutions",
  subtitle = "Maintain high standards of ethics in engaging and delivering content and strategy that result in measurable business growth.",
  services: initialServices,
}) => {
  const [services, setServices] = useState<ServiceCard[]>(
    initialServices || [],
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await ServicesService.getServices();

        let serviceList: any[] = [];
        // Handle both direct array (mock) and envelope structure (API)
        if (Array.isArray(response.data)) {
          serviceList = response.data;
        } else if (response.data?.data && Array.isArray(response.data.data)) {
          serviceList = response.data.data;
        }

        if (serviceList.length > 0) {
          const mappedServices = serviceList.map((item: any) => ({
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
          {/* Section Title */}
          <motion.h2
            id="services-heading"
            variants={fadeInUpVariants}
            className={`${HERO_HEADING_SIZE} text-center mb-3`}
          >
            {title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUpVariants}
            className={`${CENTER_DESCRIPTION_SIZE} max-w-5xl leading-relaxed mb-10`}
          >
            {subtitle}
          </motion.p>

          {/* Services Cards — Horizontal Scroll */}
          <motion.div
            className="w-full overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
            variants={fadeInUpVariants}
          >
            <div className="flex gap-5 lg:gap-6 snap-x snap-mandatory w-max">
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
