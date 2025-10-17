"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ContactHero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-[1750px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-24 lg:py-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-semibold backdrop-blur-sm">
              Let&apos;s Connect
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Let&apos;s Work Together to Make
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed mb-4">
            At DigiNext, we believe that every great idea begins with a
            conversation. Our team is here to listen, collaborate, and create
            solutions that drive success.
          </p>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Whether you want to enhance your brand, update your website, or
            automate your business processes—get in touch with us today and
            let&apos;s grow your business together.
          </p>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
    </div>
  );
};

export default ContactHero;
