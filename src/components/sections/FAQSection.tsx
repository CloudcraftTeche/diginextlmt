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
  title = "Have Any Questions in Mind?",
  description = "DigiNext specializes on creating websites with optimum user interphases backed with new-age technology and functionality. Be it Static, Dynamic, E-commerce or Web Design, DigiNext are one of the most sought after Web Design Agency in Dubai. Employing some of the best Web Designers and Developers, DigiNext is able to deliver on functionality, scalability and sustainability. We are best Web Development Company in Dubai and able to create and innovate website according to current customer requirements keeping in mind their long-term needs, thus achieving a coherence in the current and future business purpose. With the objective of being an extension of your online business DigiNext is the only Website Design Company in Dubai that raises the bar higher when it comes to catering to customer needs. The technology know-how coupled with the business knowledge to develop online strategies is at the fore-front of all aspects of how the Web Design is conceived and developed in Dubai.",
  faqs = [
    {
      question: "How we can calculate the Organic Growth?",
      answer:
        "Organic growth can be calculated by analyzing various metrics such as website traffic, search engine rankings, conversion rates, and revenue growth over time without paid advertising efforts.",
    },
    {
      question: "Is it any process for web design and Development?",
      answer:
        "Yes, we follow a structured process that includes discovery and planning, design conceptualization, development, testing, and deployment. Each phase involves client collaboration and feedback to ensure the final product meets your requirements.",
    },
    {
      question: "How i can submit my resume?",
      answer:
        "You can submit your resume through our careers page on our website, or send it directly to our HR email. We review all applications and will contact qualified candidates for further discussion.",
    },
    {
      question: "How will social media advertising benefit my business?",
      answer:
        "Advertising on social media offers businesses highly effective ways of reaching their audiences with precise targeting. It is flexible, affordable, and dynamic. It is one of the best avenues for advertising online. It can benefit your business in many ways, from growing your online community to generating traffic and closing deals.",
    },
  ],
}) => {
  const [openIndex, setOpenIndex] = useState<number>(3); // Last item open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-50 rounded-xl p-6 sm:p-8 lg:p-12">
          <div className="max-w-7xl mx-auto p-6">
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
