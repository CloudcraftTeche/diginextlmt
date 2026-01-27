import React from "react";
import { ProjectOverviewSection } from "@/lib/portfolioData";

interface ProjectOverviewProps {
  data: any; // Relaxed type
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({ data }) => {
  const {
    title,
    description,
    language,
    timescale = data.timeline, // Alias
    launchDate = data.year, // Alias
    system,
    services = [],
  } = data;

  return (
    <section className="w-full bg-white py-20 sm:py-28 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column - Services */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
              Services Provided
            </h3>
            <div className="flex flex-wrap gap-3">
              {services.map((service: string, index: number) => (
                <span
                  key={index}
                  className="px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 cursor-default"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-8">
              {title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              {description}
            </p>

            {/* Project Details Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-gray-200 pt-8">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Language
                </p>
                <p className="text-base font-medium text-gray-900">
                  {language}
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Timescale
                </p>
                <p className="text-base font-medium text-gray-900">
                  {timescale}
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Launch Date
                </p>
                <p className="text-base font-medium text-gray-900">
                  {launchDate}
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  System
                </p>
                <p className="text-base font-medium text-gray-900">{system}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
