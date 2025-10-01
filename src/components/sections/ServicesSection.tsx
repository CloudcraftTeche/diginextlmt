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
  title = "Our Main IT Solutions",
  subtitle = "Maintain high standards of ethics in engaging and delivering content and strategy that will result in the growth of the customer business.",
  services = [
    {
      title: "Web UI/UX & eCommerce Development",
      description:
        "We do not just design websites, We make digital experiences that are easy to use. From engaging UI/UX designs to custom eCommerce platforms, we help businesses attract customers, improve conversions and maximize sales.",
      link: "#web-design",
    },
    {
      title: "Mobile App Development",
      description:
        "We transform app ideas into fully functional mobile solutions. We make apps that stand out in highly competitive markets and give users a smooth experience by using attractive designs and excellent performance.",
      link: "#mobile-app",
    },
    {
      title: "Cloud & Data Solutions",
      description:
        "We help businesses move to the cloud with ease because we are a creative and forward-thinking IT solutions provider. Our cloud services keep your business open and ready for the future by making it easy to grow up, store data securely and collaborate together more easily.",
      link: "#cloud",
    },
    {
      title: "System Optimisation & Infrastructure Management",
      description:
        "We provide proactive IT support to make sure your systems work smoothly. From network optimization to server management and cybersecurity, our IT solution services keep your business safe from digital threats and failures.",
      link: "#infrastructure",
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
      className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 bg-white"
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
                focus:outline-none focus:ring-2 
              `}
              tabIndex={0}
              aria-labelledby={`service-title-${index}`}
            >
              <h3
                id={`service-title-${index}`}
                className="text-md sm:text-md font-semibold mb-3 text-black group-hover:text-white transition-colors duration-500"
              >
                {service.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-xs md:text-sm lg:text-sm  group-hover:text-gray-200 transition-colors duration-500 mb-2 leading-relaxed">
                {" "}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
