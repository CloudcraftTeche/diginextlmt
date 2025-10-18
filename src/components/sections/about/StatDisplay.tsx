"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef, useState, useEffect } from "react";
import type { MotionValue } from "framer-motion";
import GlassSphereVisual from "./GlassSphereVisual";

type StatItem = {
  end: number;
  suffix: string;
  label: string;
};

function StatDisplay({
  item,
  index,
  total,
  progress,
}: {
  item: { end: number; suffix: string; label: string };
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const step = 1 / Math.max(total, 1);
  const center = step * index + step / 2;
  const pad = step * 0.45;
  const range: [number, number, number] = [center - pad, center, center + pad];

  const opacity = useTransform(progress, range, [0, 1, 0]);
  const y = useTransform(progress, range, [40, 0, -40]);
  const scale = useTransform(progress, range, [0.95, 1, 0.95]);

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
      style={{ opacity, y, scale }}
    >
      <div className="text-center px-4">
        <div className="text-[clamp(4rem,12vw,12rem)] font-light leading-none mb-3 md:mb-4">
          {item.end}
          <span className="text-[clamp(2.5rem,8vw,8rem)]">{item.suffix}</span>
        </div>
        <div className="h-[2px] w-24 md:w-32 mx-auto bg-white/20 mb-4 md:mb-6" />
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-light max-w-sm md:max-w-lg mx-auto px-4">
          {item.label}
        </p>
      </div>
    </motion.div>
  );
}

export function StatsScrolly() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const stats: StatItem[] = useMemo(
    () => [
      {
        end: 700,
        suffix: "+",
        label: "Successfully launched projects in various kinds of industries",
      },
      {
        end: 10,
        suffix: "M+",
        label: "Daily customer interactions inspired by our solutions",
      },
      {
        end: 100,
        suffix: "+",
        label: "Digital transformation experiences with our company",
      },
    ],
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="achievements-heading"
      className="relative min-h-[300svh] bg-black text-white"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        </div>

        {/* Content wrapper */}
        <div className="relative z-10 max-w-[1750px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center h-screen">
            {/* Left column - Hero Content */}
            <div
              className={`space-y-6 lg:space-y-8 order-1 lg:order-1 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-4 lg:mb-6">
                  Big Dreams,
                  <br />
                  Bigger Numbers
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-400 font-light max-w-xl leading-relaxed">
                  We are moving ahead with relentless energy to achieve amazing
                  results that speak volumes. We don&apos;t intend to slow down
                  either!
                </p>
              </div>
            </div>

            {/* Right column - Stats with 3D visual */}
            <div
              className={`relative h-[50vh] sm:h-[60vh] lg:h-[80vh] flex items-center justify-center order-2 lg:order-2 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              {/* 3D Visual */}
              <div className="absolute inset-0">
                <GlassSphereVisual progress={scrollYProgress} />
              </div>

              {/* Stats overlay */}
              <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
                <div className="relative w-full max-w-2xl">
                  {stats.map((stat, i) => (
                    <StatDisplay
                      key={`${stat.label}-${i}`}
                      item={stat}
                      index={i}
                      total={stats.length}
                      progress={scrollYProgress}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
