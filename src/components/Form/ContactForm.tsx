"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  CheckCircle,
  Briefcase,
  Building2,
  ChevronDown,
  Check,
  Phone,
} from "lucide-react";
import { apiService } from "@/services/apiService";
import { SERVICES } from "@/constants/services";
import { SOLUTIONS } from "@/constants/solutions";
import { LeadPayload } from "@/types/api.types";
// Import PhoneInput
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

interface ContactFormProps {
  onSuccess?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // Will hold full international number (e.g. +971501234567)
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const leadData: LeadPayload = {
        fullname: formData.name,
        email: formData.email,
        phone: formData.phone || null, // Already includes country code
        company: formData.company || null,
        service: formData.service,
        message: formData.message,
        submitted_at: new Date().toISOString(),
      };

      await apiService.createLead(leadData);

      setSubmitStatus({
        type: "success",
        message:
          "Message sent successfully! We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitStatus({ type: "", message: "" });
        if (onSuccess) {
          onSuccess();
        }
      }, 3000);
    } catch (error) {
      console.error("Form submission failed:", error);
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const combinedOptions = [...new Set([...SERVICES, ...SOLUTIONS])];

  const handleServiceSelect = (value: string) => {
    setFormData({ ...formData, service: value });
    setIsDropdownOpen(false);
  };

  return (
    <motion.div
      id="contact-form"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl shadow-2xl p-6 lg:p-8 border border-gray-100"
    >
      <div className="mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-3">Get In Touch</h3>
        <p className="text-gray-600 text-lg">
          Fill out the form below and we&apos;ll get back to you within 24 hours.
        </p>
      </div>

      {submitStatus.message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
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
        </motion.div>
      )}

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Full Name <span className="text-orange-500">*</span>
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
                className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl text-gray-900 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all bg-gray-50 focus:bg-white"
                placeholder="John Doe"
              />
            </div>
          </div>

          <div className="group">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Email Address <span className="text-orange-500">*</span>
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
                className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 text-gray-900 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all bg-gray-50 focus:bg-white"
                placeholder="john@example.com"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Phone Number
            </label>

            <div className="relative phone-input-wrapper">
              <PhoneInput
                defaultCountry="ae"
                value={formData.phone}
                onChange={(phone) => {
                  console.log("Phone onChange - Received value:", phone);
                  setFormData((prev) => {
                    console.log("Setting phone to:", phone);
                    return { ...prev, phone: phone };
                  });
                }}
                inputClassName="!w-full !pl-4 !pr-4 !py-3.5 !border-2 !border-gray-200 !rounded-r-xl !text-gray-900 !bg-gray-50 focus:!border-orange-500 focus:!ring-4 focus:!ring-orange-500/10 !outline-none !transition-all focus:!bg-white !h-[54px]"
                countrySelectorStyleProps={{
                  buttonClassName:
                    "!border-2 !border-r-0 !border-gray-200 !rounded-l-xl !bg-gray-50 hover:!bg-white focus:!border-orange-500 focus:!ring-4 focus:!ring-orange-500/10 !transition-all !h-[54px]",
                  dropdownStyleProps: {
                    className:
                      "!border-2 !border-gray-200 !rounded-xl !shadow-xl !mt-2",
                    listItemClassName: "hover:!bg-orange-50 !transition-colors",
                  },
                }}
                inputProps={{
                  id: "phone",
                  name: "phone",
                  placeholder: "50 123 4567",
                }}
              />
            </div>

            <style jsx global>{`
              .phone-input-wrapper .react-international-phone-input-container {
                display: flex;
                align-items: stretch;
                height: 54px;
              }

              .phone-input-wrapper
                .react-international-phone-country-selector-button {
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
              }

              .phone-input-wrapper
                .react-international-phone-country-selector-button__button-content {
                padding: 0 12px !important;
                display: flex !important;
                align-items: center !important;
                gap: 8px !important;
              }

              .phone-input-wrapper .react-international-phone-input {
                border-left: 0 !important;
              }
            `}</style>
          </div>

          <div className="group">
            <label
              htmlFor="company"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Company Name
            </label>
            <div className="relative">
              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-orange-500 transition-colors" />
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl text-gray-900 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all bg-gray-50 focus:bg-white"
                placeholder="Your Company"
              />
            </div>
          </div>
        </div>

        <div className="group" ref={dropdownRef}>
          <label
            htmlFor="service"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Service/Solution <span className="text-orange-500">*</span>
          </label>
          <div className="relative">
            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-orange-500 transition-colors pointer-events-none z-10" />
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`w-full pl-12 pr-12 py-3.5 border-2 rounded-xl text-left outline-none transition-all ${
                isDropdownOpen
                  ? "border-orange-500 ring-4 ring-orange-500/10 bg-white"
                  : "border-gray-200 bg-gray-50 hover:bg-white"
              } ${formData.service ? "text-gray-900" : "text-gray-500"}`}
            >
              {formData.service || "Select a service/solution"}
            </button>
            <ChevronDown
              className={`absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 transition-transform pointer-events-none ${
                isDropdownOpen ? "rotate-180 text-orange-500" : ""
              }`}
            />

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-50 w-full mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-xl max-h-60 overflow-y-auto"
                >
                  {combinedOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleServiceSelect(option)}
                      className={`w-full px-4 py-3 text-left hover:bg-orange-50 transition-colors flex items-center justify-between group ${
                        formData.service === option
                          ? "bg-orange-50 text-orange-600"
                          : "text-gray-700"
                      }`}
                    >
                      <span className="font-medium">{option}</span>
                      {formData.service === option && (
                        <Check className="w-5 h-5 text-orange-500" />
                      )}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="group">
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Your Message <span className="text-orange-500">*</span>
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 text-gray-400 w-5 h-5 group-focus-within:text-orange-500 transition-colors" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={2}
              className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl text-gray-900 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all resize-none bg-gray-50 focus:bg-white"
              placeholder="Tell us about your project requirements..."
            />
          </div>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
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
              <span>Send Message</span>
              <Send className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default ContactForm;
