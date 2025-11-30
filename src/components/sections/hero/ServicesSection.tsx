"use client";
import { motion } from "framer-motion";

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
  services = [
    {
      title: "Web UI/UX & eCommerce Development",
      description:
        "We do not just design websites, We make digital experiences that are easy to use. From UI/UX designs to custom eCommerce platforms, we help businesses attract customers and maximize sales.",
      link: "#web-design",
    },
    {
      title: "Mobile App Development",
      description:
        "We transform app ideas into fully functional mobile solutions that stand out in the competitive market using top-class UX and performance.",
      link: "#mobile-app",
    },
    {
      title: "Cloud & Data Solutions",
      description:
        "We help businesses move to the cloud with scalable, secure and collaborative infrastructure ready for the future.",
      link: "#cloud",
    },
    {
      title: "System Optimisation & Infrastructure Management",
      description:
        "Proactive IT support ensuring systems work smoothly — including server management, cybersecurity and network optimization.",
      link: "#infrastructure",
    },
  ],
}) => {
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

          {/* Services Cards Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 xl:gap-8 w-full"
            variants={fadeInUpVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUpVariants}
                className="relative flex flex-col p-7 lg:p-8 bg-white border border-gray-300 rounded-2xl
                hover:bg-black hover:border-black hover:text-white hover:shadow-lg
                transition-all duration-500 ease-out group"
              >
                {/* Title */}
                <h3
                  className={`${TITLE_SIZE} mb-2 group-hover:text-white transition-colors duration-500`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`${DESCRIPTION_SIZE} ${FONT_WEIGHT.light} group-hover:text-white leading-relaxed mb-3 xs:mb-4 sm:mb-5 md:mb-6`}
                >
                  {service.description}
                </p>

                {/* CTA Button */}
                {/* <Link
                  href={service.link || "/contact"}
                  aria-label={`Contact for ${service.title}`}
                  className="mt-auto inline-flex items-center font-semibold text-base text-black group-hover:text-orange-400 transition-all duration-300"
                >
                  <span>Connect to Us</span>
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:rotate-45 transition-transform duration-300" />
                </Link> */}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
