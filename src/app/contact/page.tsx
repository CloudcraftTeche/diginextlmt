"use client";

import ContactInfoCard from "@/components/Card/ContactInfoCard";
import ContactForm from "@/components/Form/ContactForm";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { CTASection } from "@/components/sections/about/CTASection";
import ContactHero from "@/components/sections/contact/ContactHero";
import MapSection from "@/components/sections/contact/MapSection";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: ["DigiNext – Dubai, UAE", "Business Bay, Dubai"],
      delay: 0,
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+971 XXX XXX XXX", "Available during office hours"],
      delay: 100,
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@diginext.ae", "We'll respond within 24 hours"],
      delay: 200,
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Sunday to Thursday: 9:00 AM - 6:00 PM",
        "Friday & Saturday: Closed",
      ],
      delay: 300,
    },
  ];

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <ContactHero />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, idx) => (
              <ContactInfoCard key={idx} {...info} />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            <ContactForm />
            <MapSection />
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
