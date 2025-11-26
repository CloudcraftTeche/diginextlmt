"use client";

import { useState, useEffect } from "react";
import {
  X,
  Mail,
  User,
  MessageSquare,
  Send,
  CheckCircle,
  Briefcase,
} from "lucide-react";
import { ImageConstants } from "@/constants/ImageConstants";
import Image from "next/image";

const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  useEffect(() => {
    // Check if modal has been closed in this session
    const hasClosedModal = sessionStorage.getItem("contactModalClosed");

    if (hasClosedModal) {
      return; // Don't show modal if already closed
    }

    // Show modal after 30 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const clientLogos = [
    { name: "Tata Power", logo: ImageConstants.COMPANY_LOGO_1 },
    { name: "Gulf Logistics", logo: ImageConstants.COMPANY_LOGO_2 },
    { name: "Award Badge", logo: ImageConstants.COMPANY_LOGO_4 },
    { name: "IMT Business School", logo: ImageConstants.COMPANY_LOGO_5 },
    { name: "Company 6", logo: ImageConstants.COMPANY_LOGO_6 },
    { name: "Company 7", logo: ImageConstants.COMPANY_LOGO_7 },
    { name: "Company 8", logo: ImageConstants.COMPANY_LOGO_8 },
    { name: "Company 9", logo: ImageConstants.COMPANY_LOGO_9 },
    { name: "Company 10", logo: ImageConstants.COMPANY_LOGO_10 },
    { name: "Company 11", logo: ImageConstants.COMPANY_LOGO_11 },
    { name: "Company 12", logo: ImageConstants.COMPANY_LOGO_12 },
    { name: "Company 13", logo: ImageConstants.COMPANY_LOGO_13 },
    { name: "Company 14", logo: ImageConstants.COMPANY_LOGO_14 },
    { name: "Company 15", logo: ImageConstants.COMPANY_LOGO_15 },
    { name: "Company 16", logo: ImageConstants.COMPANY_LOGO_16 },
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "Digital Marketing",
    "SEO Services",
    "UI/UX Design",
    "E-commerce Solutions",
    "Custom Software",
    "Other",
  ];

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.service
    ) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    // Simulate API call - replace with your actual API call
    setTimeout(() => {
      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! We'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
      setIsSubmitting(false);

      setTimeout(() => {
        closeModal();
      }, 2000);
    }, 1500);
  };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const closeModal = () => {
    setIsOpen(false);
    // Mark modal as closed in sessionStorage
    sessionStorage.setItem("contactModalClosed", "true");
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
      onClick={closeModal}
    >
      <div
        className="relative bg-white rounded-3xl overflow-hidden w-full max-w-6xl mx-auto shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid lg:grid-cols-2">
          {/* Right Side - Contact Form */}
          <div className="p-8 lg:p-12 bg-white">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                We Are Happy to Help You!
              </h3>
              <p className="text-gray-600">
                Fill out the form and we&apos;ll get back to you within 24
                hours.
              </p>
            </div>

            {submitStatus.message && (
              <div
                className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {submitStatus.type === "success" && (
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                )}
                <span className="font-medium">{submitStatus.message}</span>
              </div>
            )}

            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="group">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    First Name <span className="text-orange-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-orange-500 transition-colors" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="Enter first name"
                    />
                  </div>
                </div>

                <div className="group">
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-orange-500 transition-colors" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="group">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email <span className="text-orange-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-orange-500 transition-colors" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 text-gray-900 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="Enter email"
                    />
                  </div>
                </div>

                <div className="group">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number <span className="text-orange-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-orange-500 transition-colors" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 text-gray-900 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="+91"
                    />
                  </div>
                </div>
              </div>

              <div className="group">
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Service/Solution <span className="text-orange-500">*</span>
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-orange-500 transition-colors" />
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all bg-gray-50 focus:bg-white appearance-none"
                  >
                    <option value="" disabled>
                      Select a service/solution
                    </option>
                    {services.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="group">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Tell Us More
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-gray-400 w-5 h-5 group-focus-within:text-orange-500 transition-colors" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all resize-none bg-gray-50 focus:bg-white"
                    placeholder="Brief about your project"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5"
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
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <>
                    <span>Send Enquiry</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Left Side - Client Logos */}
          <div className="bg-black p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-white text-2xl font-bold mb-8">
                Our Clients
              </h3>
              <div className="grid grid-cols-3 gap-6 mb-12">
                {clientLogos.map((client, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center hover:bg-white/20 transition-all"
                  >
                    <Image
                      width={200}
                      height={60}
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-12 object-contain filter brightness-0 invert"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={closeModal}
          className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all shadow-lg z-10"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
