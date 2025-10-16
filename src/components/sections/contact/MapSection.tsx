"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MapSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const element = document.querySelector("#map-section");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      id="map-section"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={
        isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
      }
      transition={{ duration: 0.6 }}
      className="bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
    >
      <div className="aspect-video bg-gray-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.7269742894757!2d55.27113931500227!3d25.27625198388284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d5b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sDubai%2C%20UAE!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="DigiNext Location"
          className="absolute inset-0"
        />
      </div>
    </motion.div>
  );
};

export default MapSection;
