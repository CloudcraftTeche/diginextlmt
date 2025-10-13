"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
}

const CTASection: React.FC<CTASectionProps> = ({ title, description }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector("#cta-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta-section" className="bg-black py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Title */}
          <h2
            className={`text-3xl lg:text-4xl font-bold text-white mb-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {title}
          </h2>

          {/* Description */}
          <p
            className={`text-lg text-white mb-8 leading-relaxed transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {description}
          </p>

          {/* CTA Button */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl group text-lg"
            >
              Let&apos;s talk
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;