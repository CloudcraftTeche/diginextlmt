"use client";

import React, { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Camera, Target, Users, Award, Sparkles, Zap } from "lucide-react";

const CARD_COUNT = 6;

export function StoryCarousel({ theme = "dark" }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const cards = useMemo(
    () => [
      {
        id: 1,
        icon: Camera,
        title: "Our Story",
        description:
          "We at DigiNext believe that technology is more than just a tool, it is what makes businesses successful. What initially began as a small idea has turned into one of Dubai&apos;s top IT solution companies.",
      },
      {
        id: 2,
        icon: Target,
        title: "Why Do We Exist?",
        description:
          "We create IT solutions that transform the way your clients engage with your business. As a leading IT solution company in Dubai, we use technology and technique to drive growth.",
      },
      {
        id: 3,
        icon: Users,
        title: "Our Team",
        description:
          "Our group of experts and creative thinkers goes above and beyond what usually exists in Dubai advertising agencies. Together, we deliver IT solutions that are smarter, faster, and more effective.",
      },
      {
        id: 4,
        icon: Award,
        title: "Milestones That Inspire Us",
        description:
          "From a trusted IT solutions provider to one of Dubai&apos;s top advertising agencies, each achievement is our stepping stone to success.",
      },
      {
        id: 5,
        icon: Sparkles,
        title: "One Brand, Many Solutions",
        description:
          "We combine creativity and technology in all aspects, from branding to IT solution services. We offer all of your business&apos;s requirements in a single place.",
      },
      {
        id: 6,
        icon: Zap,
        title: "Our Vision",
        description:
          "To be a catalyst for digital transformation, empowering businesses to achieve extraordinary growth through innovative IT solutions and creative excellence.",
      },
    ],
    []
  );

  const isLight = theme === "light";

  // Pre-create all transforms as individual hooks (not in a loop)
  const cardCount = CARD_COUNT;

  const card0Start = 0 / cardCount;
  const card0End = 1 / cardCount;
  const card0Mid = (card0Start + card0End) / 2;
  const t0 = {
    opacity: useTransform(
      scrollYProgress,
      [card0Start - 0.05, card0Start + 0.05, card0End - 0.05, card0End + 0.05],
      [0, 1, 1, 0]
    ),
    x: useTransform(
      scrollYProgress,
      [card0Start - 0.05, card0Start + 0.05, card0End - 0.05, card0End + 0.05],
      [300, 0, 0, -300]
    ),
    scale: useTransform(
      scrollYProgress,
      [card0Start, card0Mid, card0End],
      [0.8, 1, 0.8]
    ),
    width: useTransform(
      scrollYProgress,
      [card0Start, card0Mid, card0End],
      [8, 48, 8]
    ),
    bg: useTransform(
      scrollYProgress,
      [card0Start, card0Mid, card0End],
      [
        isLight ? "#ccc" : "#666",
        isLight ? "#333" : "#fff",
        isLight ? "#ccc" : "#666",
      ]
    ),
  };

  const card1Start = 1 / cardCount;
  const card1End = 2 / cardCount;
  const card1Mid = (card1Start + card1End) / 2;
  const t1 = {
    opacity: useTransform(
      scrollYProgress,
      [card1Start - 0.05, card1Start + 0.05, card1End - 0.05, card1End + 0.05],
      [0, 1, 1, 0]
    ),
    x: useTransform(
      scrollYProgress,
      [card1Start - 0.05, card1Start + 0.05, card1End - 0.05, card1End + 0.05],
      [300, 0, 0, -300]
    ),
    scale: useTransform(
      scrollYProgress,
      [card1Start, card1Mid, card1End],
      [0.8, 1, 0.8]
    ),
    width: useTransform(
      scrollYProgress,
      [card1Start, card1Mid, card1End],
      [8, 48, 8]
    ),
    bg: useTransform(
      scrollYProgress,
      [card1Start, card1Mid, card1End],
      [
        isLight ? "#ccc" : "#666",
        isLight ? "#333" : "#fff",
        isLight ? "#ccc" : "#666",
      ]
    ),
  };

  const card2Start = 2 / cardCount;
  const card2End = 3 / cardCount;
  const card2Mid = (card2Start + card2End) / 2;
  const t2 = {
    opacity: useTransform(
      scrollYProgress,
      [card2Start - 0.05, card2Start + 0.05, card2End - 0.05, card2End + 0.05],
      [0, 1, 1, 0]
    ),
    x: useTransform(
      scrollYProgress,
      [card2Start - 0.05, card2Start + 0.05, card2End - 0.05, card2End + 0.05],
      [300, 0, 0, -300]
    ),
    scale: useTransform(
      scrollYProgress,
      [card2Start, card2Mid, card2End],
      [0.8, 1, 0.8]
    ),
    width: useTransform(
      scrollYProgress,
      [card2Start, card2Mid, card2End],
      [8, 48, 8]
    ),
    bg: useTransform(
      scrollYProgress,
      [card2Start, card2Mid, card2End],
      [
        isLight ? "#ccc" : "#666",
        isLight ? "#333" : "#fff",
        isLight ? "#ccc" : "#666",
      ]
    ),
  };

  const card3Start = 3 / cardCount;
  const card3End = 4 / cardCount;
  const card3Mid = (card3Start + card3End) / 2;
  const t3 = {
    opacity: useTransform(
      scrollYProgress,
      [card3Start - 0.05, card3Start + 0.05, card3End - 0.05, card3End + 0.05],
      [0, 1, 1, 0]
    ),
    x: useTransform(
      scrollYProgress,
      [card3Start - 0.05, card3Start + 0.05, card3End - 0.05, card3End + 0.05],
      [300, 0, 0, -300]
    ),
    scale: useTransform(
      scrollYProgress,
      [card3Start, card3Mid, card3End],
      [0.8, 1, 0.8]
    ),
    width: useTransform(
      scrollYProgress,
      [card3Start, card3Mid, card3End],
      [8, 48, 8]
    ),
    bg: useTransform(
      scrollYProgress,
      [card3Start, card3Mid, card3End],
      [
        isLight ? "#ccc" : "#666",
        isLight ? "#333" : "#fff",
        isLight ? "#ccc" : "#666",
      ]
    ),
  };

  const card4Start = 4 / cardCount;
  const card4End = 5 / cardCount;
  const card4Mid = (card4Start + card4End) / 2;
  const t4 = {
    opacity: useTransform(
      scrollYProgress,
      [card4Start - 0.05, card4Start + 0.05, card4End - 0.05, card4End + 0.05],
      [0, 1, 1, 0]
    ),
    x: useTransform(
      scrollYProgress,
      [card4Start - 0.05, card4Start + 0.05, card4End - 0.05, card4End + 0.05],
      [300, 0, 0, -300]
    ),
    scale: useTransform(
      scrollYProgress,
      [card4Start, card4Mid, card4End],
      [0.8, 1, 0.8]
    ),
    width: useTransform(
      scrollYProgress,
      [card4Start, card4Mid, card4End],
      [8, 48, 8]
    ),
    bg: useTransform(
      scrollYProgress,
      [card4Start, card4Mid, card4End],
      [
        isLight ? "#ccc" : "#666",
        isLight ? "#333" : "#fff",
        isLight ? "#ccc" : "#666",
      ]
    ),
  };

  const card5Start = 5 / cardCount;
  const card5End = 6 / cardCount;
  const card5Mid = (card5Start + card5End) / 2;
  const t5 = {
    opacity: useTransform(
      scrollYProgress,
      [card5Start - 0.05, card5Start + 0.05, card5End - 0.05, card5End + 0.05],
      [0, 1, 1, 0]
    ),
    x: useTransform(
      scrollYProgress,
      [card5Start - 0.05, card5Start + 0.05, card5End - 0.05, card5End + 0.05],
      [300, 0, 0, -300]
    ),
    scale: useTransform(
      scrollYProgress,
      [card5Start, card5Mid, card5End],
      [0.8, 1, 0.8]
    ),
    width: useTransform(
      scrollYProgress,
      [card5Start, card5Mid, card5End],
      [8, 48, 8]
    ),
    bg: useTransform(
      scrollYProgress,
      [card5Start, card5Mid, card5End],
      [
        isLight ? "#ccc" : "#666",
        isLight ? "#333" : "#fff",
        isLight ? "#ccc" : "#666",
      ]
    ),
  };

  const transforms = [t0, t1, t2, t3, t4, t5];

  return (
    <div
      ref={containerRef}
      className={`${
        isLight ? "bg-white text-black" : "bg-black text-white"
      } relative`}
      style={{ height: `${(CARD_COUNT + 1) * 100}vh` }}
    >
      {/* Sticky container - stays fixed during card transitions */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden py-8 md:py-12">
        {/* Header */}
        <div className="flex-shrink-0 mb-6 md:mb-10 w-full px-4 md:px-6 lg:px-16 text-center">
          <div className="inline-block mb-3 text-4xl">🚀</div>
          <h2 className="text-4xl md:text-5xl font-light">
            Our Journey &amp; Values
          </h2>
          <p
            className={`mt-3 text-lg ${
              isLight ? "text-gray-600" : "text-gray-400"
            } max-w-2xl mx-auto font-light`}
          >
            Discover the story behind DigiNext and what drives us to deliver
            exceptional IT solutions and creative services.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative flex-1 w-full px-4 md:px-6 lg:px-16 flex items-center justify-center">
          <div className="relative w-full h-[400px] md:h-[450px] flex items-center justify-center">
            {cards.map((card, i) => {
              const { opacity, x, scale } = transforms[i];
              return (
                <motion.div
                  key={card.id}
                  className="absolute"
                  style={{ x, scale, opacity }}
                >
                  <article
                    className={`w-[300px] sm:w-[340px] h-[350px] sm:h-[370px] rounded-2xl p-6 sm:p-8 text-center shadow-lg backdrop-blur-sm ${
                      isLight
                        ? "border border-gray-200 bg-gray-50/90"
                        : "border border-gray-700 bg-gray-900/50"
                    }`}
                  >
                    <div className="mb-4 sm:mb-6 text-5xl flex justify-center">
                      <card.icon
                        className={isLight ? "text-gray-900" : "text-gray-100"}
                        size={48}
                      />
                    </div>
                    <div
                      className={`absolute top-4 sm:top-6 right-4 sm:right-6 text-3xl sm:text-4xl font-light ${
                        isLight ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-[1.4rem] sm:text-[1.6rem] font-light mb-3 sm:mb-4">
                      {card.title}
                    </h3>
                    <p
                      className={`${
                        isLight ? "text-gray-700" : "text-gray-300"
                      } font-light leading-relaxed text-sm sm:text-base`}
                      dangerouslySetInnerHTML={{ __html: card.description }}
                    />
                    <div
                      className={`h-1 mt-6 sm:mt-8 ${
                        isLight ? "bg-gray-300" : "bg-gray-700"
                      }`}
                    >
                      <div
                        className={`h-full w-1/3 ${
                          isLight ? "bg-gray-900" : "bg-gray-300"
                        }`}
                      />
                    </div>
                  </article>
                </motion.div>
              );
            })}
          </div>

          {/* Progress Dots */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2">
            {cards.map((_, i) => (
              <motion.div
                key={i}
                className="h-2 rounded-full"
                style={{
                  width: transforms[i].width,
                  backgroundColor: transforms[i].bg,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoryCarousel;
