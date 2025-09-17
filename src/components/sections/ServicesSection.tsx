"use client";
import { useState, useEffect } from "react";
import { Send } from "lucide-react";

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
  title = "What we do",
  subtitle = "Maintain high standards of ethics in engaging and delivering content and strategy that will result in the growth of the customer business.",
  services = [
    {
      title: "Branding & Graphic Design",
      description:
        "Through sound technical knowledge and a flair for website design Lamp Media Tech has been successful in",
      link: "#branding",
    },
    {
      title: "Web UI/UX Design",
      description:
        "Through sound technical knowledge and a flair for website design Lamp Media Tech has been successful in",
      link: "#web-design",
    },
    {
      title: "eCommerce Development",
      description:
        "Through sound technical knowledge and a flair for website design Lamp Media Tech has been successful in",
      link: "#ecommerce",
    },
    {
      title: "Mobile App Development",
      description:
        "Through sound technical knowledge and a flair for website design Lamp Media Tech has been successful in",
      link: "#mobile-app",
    },
    {
      title: "Photography Video Graphy",
      description:
        "Through sound technical knowledge and a flair for website design Lamp Media Tech has been successful in",
      link: "#photography",
    },
    {
      title: "Print & Signage",
      description:
        "Through sound technical knowledge and a flair for website design Lamp Media Tech has been successful in",
      link: "#print",
    },
    {
      title: "Content Writing",
      description:
        "Through sound technical knowledge and a flair for website design Lamp Media Tech has been successful in",
      link: "#content",
    },
    {
      title: "IT & Marketing Consultancy",
      description:
        "Through sound technical knowledge and a flair for website design Lamp Media Tech has been successful in",
      link: "#consultancy",
    },
  ],
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const el = document.querySelector("#services-section");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services-section"
      className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2
            id="services-heading"
            className={`text-2xl sm:text-3xl md:text-4xl text-black font-semibold mb-5 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-100 translate-y-8"
            }`}
          >
            {title}
          </h2>
          <p
            className={`text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            {subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 xl:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-7 lg:p-8 bg-white border border-gray-300 rounded-2xl shadow-none 
                hover:bg-black hover:border-black hover:text-white hover:shadow-lg
                transition-[background,border,color,box-shadow] duration-500 ease-out group
                focus:outline-none focus:ring-2 focus:ring-orange-400
              `}
              tabIndex={0}
              aria-labelledby={`service-title-${index}`}
            >
              <h3
                id={`service-title-${index}`}
                className="text-lg sm:text-xl font-semibold mb-3 text-black group-hover:text-white transition-colors duration-500"
              >
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-200 transition-colors duration-500 mb-8">
                {service.description}
              </p>
              <a
                href={service.link}
                className="mt-auto inline-flex items-center font-semibold text-base text-black group-hover:text-orange-400 transition-colors duration-300 group/link"
                aria-label={`Connect to us for ${service.title}`}
              >
                <span>Connect to Us</span>
                <Send className="w-4 h-4 ml-2 group-hover/link:translate-x-1 group-hover:rotate-45 transition-all duration-300" />
              </a>

              {/* Glow effect on hover */}
              <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-20 blur-lg transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
