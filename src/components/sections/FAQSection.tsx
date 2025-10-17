"use client";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  description?: string;
  faqs?: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({
  title = "Have Any Questions In Mind?",
  description = "Our team is available to help you if you require trustworthy IT solution services, customised strategies or professional advice on IT solutions. Together, we can transform your questions into opportunities.",
  faqs = [
    {
      question: "How can we calculate organic growth?",
      answer:
        "As a trusted IT solution company in Dubai, we measure organic growth by analyzing website traffic, search rankings and keyword performance. With our smart IT solutions, we help you keep track of actual growth and make sure your online presence keeps growing.",
    },
    {
      question: "Is there any process for web design and development?",
      answer:
        "Every great website begins with a process. As a trusted IT solution provider, we plan, design and build websites step by step, making sure that creativity and functionality work together. Our expert IT solutions give your brand a digital presence that is both engaging and successful.",
    },
    {
      question: "How will social media advertising benefit my business?",
      answer:
        "Through precise targeting, social media ads can help your business reach the right people. It is flexible, cost-effective and one of the most powerful ways to grow your online presence. It provides you with measurable results, from building communities to getting more visitors and sales.",
    },
  ],
}) => {
  const [openIndex, setOpenIndex] = useState<number>(0); // Last item open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-50 rounded-xl p-6 sm:p-8 lg:p-12">
          <div className="max-w-[1750px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 mx-auto p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Side - Title and Description */}
              <div className="lg:pr-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 mb-6 leading-tight">
                  {title}
                </h2>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {description}
                </p>
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
                      <span className="text-sm sm:text-base font-medium text-gray-900 pr-4 leading-snug">
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
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-3">
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
