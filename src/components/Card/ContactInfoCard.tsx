"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type ContactInfoCardProps = {
  icon: React.ElementType;
  title: string;
  details: string[];
  delay: number;
};

const ContactInfoCard = ({
  icon: Icon,
  title,
  details,
  delay,
}: ContactInfoCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const element = document.querySelector(`#info-card-${delay}`);
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <motion.div
      id={`info-card-${delay}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 border border-gray-100 group cursor-pointer hover:bg-black hover:text-white hover:shadow-2xl"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 hover:bg-orange-50 transition-transform duration-300">
        <Icon className="w-8 h-8 text-orange-600 " />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white">
        {title}
      </h3>
      {details.map((detail, idx) => (
        <p
          key={idx}
          className="text-gray-600 mb-1 leading-relaxed group-hover:text-white"
        >
          {detail}
        </p>
      ))}
    </motion.div>
  );
};

export default ContactInfoCard;
