import React from "react";
import { ObjectivesSection as ObjectivesSectionData } from "@/lib/portfolioData";

interface ObjectivesSectionProps {
  data: ObjectivesSectionData;
}

const ObjectivesSection: React.FC<ObjectivesSectionProps> = ({ data }) => {
  const { subtitle, title, description, objectives } = data;

  return (
    <section className="w-full bg-white py-20 sm:py-28 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
            {subtitle}
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-8">
            {title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {objectives.map((objective, index) => (
            <div key={index} className="group">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {objective.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {objective.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
