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
import ContactForm from "../Form/ContactForm";

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
          <ContactForm/>

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
