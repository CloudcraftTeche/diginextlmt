import React from 'react';

const ObjectivesSection = ({
  objectives = [
    {
      icon: "📱",
      title: "Online ordering system",
      description: "They wished to adopt a preferable combination of both offline sales and online sales, with online sales to be managed through a brand-owned application."
    },
    {
      icon: "💳",
      title: "POS integration",
      description: "The solution had to be effectively integrated with the external services and the client's backend systems to minimise operational complexities and overhead costs for a scalable expansion."
    },
    {
      icon: "🎁",
      title: "Loyalty program",
      description: "The client wanted to provide an option that makes it easier for the customers to redeem their reward points and view the balance points whenever necessary."
    }
  ]
}) => {
  return (
    <section className="w-full bg-white py-16 sm:py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Objectives
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl">
            The major objective of the client was to implement a feasible solution that helps users make a seamless online purchase in addition to the offline purchase option available. With a mindful team of proficient designers, developers and testing experts, we aimed to invoke the users&apos; interest in app-based sales.
          </p>
        </div>

        {/* Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {objectives.map((objective, index) => (
            <div key={index} className="group">
              {/* Icon */}
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                <span className="text-2xl">{objective.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {objective.title}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-700 leading-relaxed">
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