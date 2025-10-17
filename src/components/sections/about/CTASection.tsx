"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 bg-black">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-1/3"
        initial={{ y: 0 }}
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY }}
      />
      <div className="relative z-10 max-w-[1750px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-light text-white">
            Why Working With Our Team Will Be Fun for You
          </h2>
          <p className="mt-6 max-w-3xl text-xl text-gray-400 font-light leading-relaxed">
            We are more than an IT solution company, we are a place to grow,
            innovate and expand. Together, we will create a path that is just as
            satisfying as the results that we deliver.
          </p>
          <motion.button
            className="mt-8 inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 font-light hover:bg-white hover:text-black transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.25 }}
          >
            Explore more
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}