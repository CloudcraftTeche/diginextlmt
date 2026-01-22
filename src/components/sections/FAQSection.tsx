"use client";
import React, { useState } from "react";

import {
  SECTION_PX,
  SECTION_PY,
  CONTENT_WRAPPER_CLASSES,
} from "@/constants/layoutConstants";
import {
  HERO_HEADING_SIZE,
  DESCRIPTION_SIZE,
  TITLE_SIZE,
  FONT_WEIGHT,
} from "@/constants/typographyConstants";

interface FAQItem {
  question: string;
  answer: string;
}

import { FAQLoadingSkeleton } from "../LoadingSkelton/home/FAQLoadingSkeleton";

interface FAQSectionProps {
  title?: string;
  description?: string;
  faqs?: FAQItem[];
  isLoading?: boolean;
}

const FAQSection: React.FC<FAQSectionProps> = ({
  title = "Have Any Questions In Mind?",
  description = "Our team is available to help you if you require trustworthy IT solution services, customised strategies or professional advice on IT solutions. Together, we can transform your questions into opportunities.",
  faqs = [],
  isLoading = false,
}) => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  if (isLoading) {
    return <FAQLoadingSkeleton />;
  }

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq-section"
      className={`${SECTION_PX} ${SECTION_PY} bg-white`}
    >
      <div className={CONTENT_WRAPPER_CLASSES}>
        <div className="bg-blue-50 rounded-xl xs:rounded-2xl">
          <div className="max-w-[1750px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 lg:py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Side - Title and Description */}
              <div className="lg:pr-4">
                <h2
                  className={`${HERO_HEADING_SIZE} ${FONT_WEIGHT.normal} mb-4 sm:mb-5 lg:mb-6 leading-tight`}
                >
                  {title}
                </h2>
                <p className={DESCRIPTION_SIZE}>{description}</p>
              </div>

              {/* Right Side - FAQ Items */}
              <div className="space-y-3 lg:space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <span
                        className={`${TITLE_SIZE}  pr-4 leading-snug`}
                      >
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0 ml-2">
                        {openIndex === index ? (
                          <svg
                            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 12H4"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        )}
                      </div>
                    </button>

                    {openIndex === index && (
                      <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                        <div className="pt-2 border-t border-gray-100">
                          <p className={DESCRIPTION_SIZE}>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
