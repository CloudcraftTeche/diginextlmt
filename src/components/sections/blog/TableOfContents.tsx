"use client";
import React, { useState, useEffect } from "react";

interface TableOfContentsProps {
  items: Array<{
    id: string;
    title: string;
  }>;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const headings = items.map((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          return {
            id: item.id,
            top: element.getBoundingClientRect().top,
          };
        }
        return null;
      }).filter(Boolean) as Array<{ id: string; top: number }>;

      const currentHeading = headings
        .filter((h) => h.top <= 100)
        .sort((a, b) => b.top - a.top)[0];

      if (currentHeading) {
        setActiveId(currentHeading.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-24">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
        <nav className="space-y-2">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-colors ${
                activeId === item.id
                  ? "bg-orange-50 text-orange-600 font-medium"
                  : "text-gray-600 hover:text-orange-600 hover:bg-gray-50"
              }`}
            >
              {item.title}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default TableOfContents;

