"use client";
import { Minus, Plus } from "lucide-react";
import { useState, useEffect } from "react";

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessAccordionSectionProps {
  title: string;
  steps: ProcessStep[];
  sideImage?: string;
}

const ProcessAccordionSection: React.FC<ProcessAccordionSectionProps> = ({
  title,
  steps,
  sideImage = "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=800&fit=crop",
}) => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector("#process-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="process-section" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Image */}
          <div
            className={`relative order-2 lg:order-1 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="sticky top-24">
              <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={sideImage}
                  alt="Process visualization"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Accordion */}
          <div
            className={`order-1 lg:order-2 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 lg:mb-12">
              {title}
            </h2>

            <div className="space-y-4">
              {steps.map((step, index) => {
                const stepParagraphs = step.description
                  .split("\n\n")
                  .filter((p) => p.trim());

                return (
                  <div
                    key={index}
                    className={`border-b border-gray-200 transition-all duration-500 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between py-6 text-left group"
                    >
                      <span
                        className={`text-lg lg:text-xl font-semibold transition-colors ${
                          openIndex === index
                            ? "text-orange-600"
                            : "text-gray-900 group-hover:text-orange-600"
                        }`}
                      >
                        {step.title}
                      </span>
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          openIndex === index
                            ? "bg-orange-600 text-white"
                            : "bg-gray-100 text-gray-600 group-hover:bg-orange-100"
                        }`}
                      >
                        {openIndex === index ? (
                          <Minus className="w-5 h-5" />
                        ) : (
                          <Plus className="w-5 h-5" />
                        )}
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        openIndex === index
                          ? "max-h-96 opacity-100 pb-6"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="text-gray-600 leading-relaxed text-base space-y-2">
                        {stepParagraphs.map((paragraph, pIndex) => (
                          <p key={pIndex}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessAccordionSection;
