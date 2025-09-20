"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function NotFound() {
  const [isVisible, setIsVisible] = useState(false);

  // Fade-in animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const section = document.querySelector("#not-found-section");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className="min-h-screen flex items-center justify-center bg-black">
        <section
          id="not-found-section"
          className="w-full flex flex-col items-center justify-center text-center px-4"
        >
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <span className="text-orange-500 animate-pulse">4</span>
            <span className="text-white">0</span>
            <span className="text-orange-500 animate-pulse">4</span>
          </h1>

          <h2
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <span className="text-orange-500 font-medium">Oops!</span> Page Not
            Found
          </h2>

          <p
            className={`text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-lg mx-auto mb-8 leading-relaxed transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            The page you are looking for has disappeared into the digital void.
            Let’s get you back on track.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <Link
              href="/"
              className="group inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-base font-medium transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300 hover:shadow-lg hover:shadow-orange-500/30"
            >
              🏠 Go Home
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-3 bg-white text-black rounded-full text-base font-medium transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 hover:bg-gray-100 hover:shadow-lg hover:shadow-white/20"
            >
              💬 Get Support
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
