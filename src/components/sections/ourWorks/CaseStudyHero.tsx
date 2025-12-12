import React from "react";

interface CaseStudyHeroProps {
  title?: string;
  industry?: string;
  backgroundImage?: string;
}

const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({
  title = "Caribou Coffee's Digital Takeoff with a Complete Mobile App",
  industry = "Food",
  backgroundImage = "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1200&h=800&fit=crop",
}) => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={`${title} Hero`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 h-full flex items-center justify-start px-6 sm:px-12 lg:px-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight mb-8">
            {title}
          </h1>
          <div className="space-y-2">
            <p className="text-sm text-white/70 uppercase tracking-wider">
              Industry
            </p>
            <p className="text-xl text-white">{industry}</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;
