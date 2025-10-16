"use client";
import { useState, useEffect } from "react";

interface Service {
  title: string;
  description: string;
}

interface ServicesOfferedSectionProps {
  title: string;
  description: string;
  services: Service[];
}

const ServicesOfferedSection: React.FC<ServicesOfferedSectionProps> = ({
  description,title,
  services,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector("#services-offered-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services-offered-section"
      className="px-3 xs:px-4 sm:px-6 lg:px-8 py-4 xs:py-6 sm:py-8 lg:py-10 bg-white"
    >
      {/* Full-width black background with rounded corners and padding */}
      <div className="w-full bg-black rounded-xl xs:rounded-2xl p-6 sm:p-8 lg:p-12 xl:p-16">
        {/* Constrained content wrapper */}
        <div className="max-w-7xl mx-auto">
          {/* Header Text */}
          <div className="text-center mb-12">
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 transition-all duration-700 ${
                isVisible 
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {title}
            </h2>
            <p
              className={`text-sm leading-relaxed max-w-4xl mx-auto mb-8 text-white transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {description}
            </p>

          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <h3 className="text-base font-semibold mb-3 border-b border-white pb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOfferedSection;
