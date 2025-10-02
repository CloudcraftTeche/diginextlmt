"use client";
import { ImageConstants } from "@/constants/ImageConstants";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface FooterProps {
  newsletter?: {
    title?: string;
    description?: string;
    placeholder?: string;
    buttonText?: string;
  };
  company?: {
    logo?: string;
    description?: string;
  };
  contact?: {
    address?: string;
    phone?: string;
    email?: string;
  };
  services?: string[];
  solutions?: string[];
  usefulLinks?: string[];
  footerLinks?: string[];
  socialLinks?: {
    linkedin?: string;
    behance?: string;
    youtube?: string;
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
  onNewsletterSubmit?: (email: string) => void;
}

const Footer: React.FC<FooterProps> = ({
  newsletter = {
    title: "Subscribe to our Newsletter & Growth Tips",
    description:
      "We give you the latest tips for growing your business and market insights. Subscribe to get the latest news and give your business more power.",
    placeholder: "Enter your email address",
    buttonText: "Submit",
  },
  company = {
    logo: "/assets/logos/LOGO_DIGINxt-White 1.svg",
    description:
      "By combining creativity and technology, DigiNext has built its reputation on delivering necessary digital solutions.",
  },
  contact = {
    address: "The Metropolis Tower, Business Bay, Dubai",
    phone: "+971 50 320 5007",
    email: "hello@diginext.ae",
  },
  services = [
    "Design",
    "Development",
    "Digital Marketing",
    "Web Hosting",
    "Production",
  ],
  solutions = [
    "Print & Signages",
    "Marketing",
    "IT Infrastructure",
    "Custom Softwares",
    "CRM Systems",
  ],
  usefulLinks = [
    "Impact",
    "Testimonials",
    "Clients",
    "Partnership",
    "Industries",
  ],
  footerLinks = ["Careers", "Download Brochure", "Locations", "Support"],
  socialLinks = {
    linkedin: "https://linkedin.com/company/diginext",
    behance: "https://behance.net/diginext",
    youtube: "https://youtube.com/@diginext",
    instagram: "https://instagram.com/diginext",
    facebook: "https://facebook.com/diginext",
    twitter: "https://twitter.com/diginext",
  },
  onNewsletterSubmit,
}) => {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openSections, setOpenSections] = useState({
    address: false,
    services: false,
    solutions: false,
    usefulLinks: false,
  });

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector("#footer-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleNewsletterSubmit = async () => {
    if (!email.trim() || !isValidEmail(email)) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (onNewsletterSubmit) {
      onNewsletterSubmit(email);
    }

    setEmail("");
    setIsSubmitting(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleNewsletterSubmit();
    }
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const SocialIcon = ({ type, href }: { type: string; href?: string }) => {
    const icons = {
      linkedin: (
        <svg
          className="w-4 h-4 xs:w-5 xs:h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      behance: (
        <svg
          className="w-4 h-4 xs:w-5 xs:h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
        </svg>
      ),
      youtube: (
        <svg
          className="w-4 h-4 xs:w-5 xs:h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      instagram: (
        <svg
          className="w-4 h-4 xs:w-5 xs:h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      facebook: (
        <svg
          className="w-4 h-4 xs:w-5 xs:h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      twitter: (
        <svg
          className="w-4 h-4 xs:w-5 xs:h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    };

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
        aria-label={`Follow us on ${type}`}
      >
        {icons[type as keyof typeof icons]}
      </a>
    );
  };

  return (
    <footer
      id="footer-section"
      className="py-3 xs:py-4 sm:py-6 lg:py-8 bg-white"
    >
      <div className="px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="bg-black rounded-xl p-4 xs:p-5 sm:p-8 lg:p-12">
          <div className="max-w-7xl mx-auto">
            {/* Newsletter Section */}
            <div
              className={`transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 lg:gap-12 items-center mb-8 xs:mb-10 sm:mb-12 lg:mb-16">
                {/* Newsletter Title and Description */}
                <div className="text-center lg:text-left">
                  <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-medium text-white mb-3 xs:mb-4 sm:mb-6 leading-tight">
                    {newsletter.title}
                  </h2>
                  <p className="text-gray-300 text-xs xs:text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
                    {newsletter.description}
                  </p>
                </div>

                {/* Newsletter Form - Single Row on All Screens */}
                <div className="flex flex-row gap-0 max-w-full mx-auto lg:max-w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={newsletter.placeholder}
                    className="flex-1 px-4 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-3 text-left bg-white/90 backdrop-blur-sm text-black placeholder-gray-500 rounded-l-md border-2 border-transparent focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/20 transition-all duration-300 text-xs xs:text-sm sm:text-base min-w-[150px] xs:min-w-[180px] sm:min-w-[200px]"
                  />
                  <button
                    onClick={handleNewsletterSubmit}
                    disabled={!isValidEmail(email) || isSubmitting}
                    className="px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-r-md transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300 text-xs xs:text-sm sm:text-base hover:shadow-xl hover:shadow-orange-500/25 disabled:cursor-not-allowed min-w-[80px] xs:min-w-[100px] sm:min-w-[120px]"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg
                          className="animate-spin h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      </div>
                    ) : (
                      newsletter.buttonText
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Divider Line */}
            <div className="w-full h-px bg-gray-700 mb-8 xs:mb-10 sm:mb-12 lg:mb-16"></div>

            {/* Main Footer Content */}
            <div
              className={`transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 xs:gap-6 sm:gap-8 lg:gap-12">
                {/* Company Info */}
                <div className="sm:col-span-2 lg:col-span-2">
                  <Image
                    src={ImageConstants.WHITE_LOGO}
                    alt="Diginext Logo"
                    width={300}
                    height={80}
                    className="h-12 xs:h-14 sm:h-16 lg:h-20 w-auto transition-all duration-300 hover:scale-105 mb-3 xs:mb-4 sm:mb-6"
                    priority
                  />
                  <p className="text-gray-300 text-xs xs:text-sm sm:text-base leading-relaxed mb-4 xs:mb-6 sm:mb-8">
                    {company.description}
                  </p>
                </div>

                {/* Our Address - Collapsible on Mobile/Tablet */}
                <div className="sm:col-span-2 lg:col-span-1">
                  <button
                    onClick={() => toggleSection("address")}
                    className="text-white text-base xs:text-lg sm:text-lg lg:text-lg font-medium mb-3 xs:mb-4 sm:mb-6 w-full text-left flex items-center justify-between lg:cursor-default"
                  >
                    Our Address
                    <svg
                      className={`w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 lg:hidden transform transition-transform duration-300 ${
                        openSections.address ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`space-y-2 xs:space-y-3 sm:space-y-4 lg:block ${
                      openSections.address ? "block" : "hidden lg:block"
                    }`}
                  >
                    <div className="flex items-start space-x-2 xs:space-x-3">
                      <svg
                        className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-gray-400 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-gray-300 text-xs xs:text-sm sm:text-sm lg:text-sm">
                        {contact.address}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 xs:space-x-3">
                      <svg
                        className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <p className="text-gray-300 text-xs xs:text-sm sm:text-sm lg:text-sm">
                        {contact.phone}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 xs:space-x-3">
                      <svg
                        className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <p className="text-gray-300 text-xs xs:text-sm sm:text-sm lg:text-sm">
                        {contact.email}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Services - Collapsible on Mobile/Tablet */}
                <div>
                  <button
                    onClick={() => toggleSection("services")}
                    className="text-white text-base xs:text-lg sm:text-lg lg:text-lg font-medium mb-3 xs:mb-4 sm:mb-6 w-full text-left flex items-center justify-between lg:cursor-default"
                  >
                    Services
                    <svg
                      className={`w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 lg:hidden transform transition-transform duration-300 ${
                        openSections.services ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <ul
                    className={`space-y-2 xs:space-y-3 lg:block ${
                      openSections.services ? "block" : "hidden lg:block"
                    }`}
                  >
                    {services.map((service, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="text-gray-300 text-xs xs:text-sm sm:text-sm lg:text-sm hover:text-orange-400 transition-colors duration-300"
                        >
                          {service}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions - Collapsible on Mobile/Tablet */}
                <div>
                  <button
                    onClick={() => toggleSection("solutions")}
                    className="text-white text-base xs:text-lg sm:text-lg lg:text-lg font-medium mb-3 xs:mb-4 sm:mb-6 w-full text-left flex items-center justify-between lg:cursor-default"
                  >
                    Solutions
                    <svg
                      className={`w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 lg:hidden transform transition-transform duration-300 ${
                        openSections.solutions ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <ul
                    className={`space-y-2 xs:space-y-3 lg:block ${
                      openSections.solutions ? "block" : "hidden lg:block"
                    }`}
                  >
                    {solutions.map((solution, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="text-gray-300 text-xs xs:text-sm sm:text-sm lg:text-sm hover:text-orange-400 transition-colors duration-300"
                        >
                          {solution}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Useful Links - Collapsible on Mobile/Tablet */}
                <div>
                  <button
                    onClick={() => toggleSection("usefulLinks")}
                    className="text-white text-base xs:text-lg sm:text-lg lg:text-lg font-medium mb-3 xs:mb-4 sm:mb-6 w-full text-left flex items-center justify-between lg:cursor-default"
                  >
                    Useful Links
                    <svg
                      className={`w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 lg:hidden transform transition-transform duration-300 ${
                        openSections.usefulLinks ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <ul
                    className={`space-y-2 xs:space-y-3 lg:block ${
                      openSections.usefulLinks ? "block" : "hidden lg:block"
                    }`}
                  >
                    {usefulLinks.map((link, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="text-gray-300 text-xs xs:text-sm sm:text-sm lg:text-sm hover:text-orange-400 transition-colors duration-300"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div
              className={`mt-6 xs:mt-8 sm:mt-12 lg:mt-16 transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              {/* Footer Links */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-3 xs:gap-4 sm:gap-6 mb-4 xs:mb-6 sm:mb-8">
                {footerLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-white text-xs xs:text-sm sm:text-sm hover:text-orange-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>

              {/* Social Media Icons with Lines - Centered Layout */}
              <div className="flex items-center justify-center mb-4 xs:mb-6 sm:mb-8">
                {/* Left Line */}
                <div className="flex-1 h-px bg-gray-700 mr-3 xs:mr-4 sm:mr-8"></div>

                {/* Social Icons */}
                <div className="flex space-x-2 xs:space-x-3 sm:space-x-4">
                  <SocialIcon type="linkedin" href={socialLinks.linkedin} />
                  <SocialIcon type="behance" href={socialLinks.behance} />
                  <SocialIcon type="youtube" href={socialLinks.youtube} />
                  <SocialIcon type="instagram" href={socialLinks.instagram} />
                  <SocialIcon type="facebook" href={socialLinks.facebook} />
                  <SocialIcon type="twitter" href={socialLinks.twitter} />
                </div>

                {/* Right Line */}
                <div className="flex-1 h-px bg-gray-700 ml-3 xs:ml-4 sm:ml-8"></div>
              </div>

              {/* Copyright and Legal Links */}
              <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 xs:space-y-4 sm:space-y-0 text-center lg:text-left">
                <p className="text-gray-400 text-xs xs:text-sm sm:text-sm">
                  © 2025 DigiNext - Branding Agency Dubai. All Rights Reserved
                </p>
                <div className="flex flex-col xs:flex-row justify-center lg:justify-end gap-2 xs:gap-3 sm:gap-4 items-center">
                  <span className="text-gray-400 text-xs xs:text-sm sm:text-sm">
                    DigiNext is a part of L M TECH IT SERVICES
                  </span>
                  <span className="text-gray-400 hidden xs:inline">|</span>
                  <div className="flex flex-wrap justify-center gap-2 xs:gap-3 sm:gap-4">
                    <a
                      href="/terms"
                      className="text-gray-400 text-xs xs:text-sm sm:text-sm hover:text-orange-400 transition-colors"
                    >
                      Terms & Conditions
                    </a>
                    <a
                      href="/privacy"
                      className="text-gray-400 text-xs xs:text-sm sm:text-sm hover:text-orange-400 transition-colors"
                    >
                      Privacy Policy
                    </a>
                    <a
                      href="/payment"
                      className="text-gray-400 text-xs xs:text-sm sm:text-sm hover:text-orange-400 transition-colors"
                    >
                      Payment Policy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
