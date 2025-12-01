import Image from "next/image";
import React from "react";

const ChallengesSection = ({
  backgroundImage = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=400&fit=crop",
  challenges = [
    {
      icon: "👤",
      title: "Lack of personalised order experience",
      description:
        "There was no app-based solution for the customers in the region. Additionally, the brand was not able to offer a personalised order experience to the users digitally.",
    },
    {
      icon: "🚚",
      title: "Inconsistent product delivery",
      description:
        "Relying on food delivery partners to accept orders was not cost-effective. The lack of a product delivery system to replace the delivery partners was a key challenge.",
    },
    {
      icon: "⚙️",
      title: "Operational complexities",
      description:
        "The solution had to be effectively integrated with the external services and the client's backend systems to minimise operational complexities and overhead costs for a scalable expansion.",
    },
  ],
}) => {
  return (
    <section className="w-full bg-white py-16 sm:py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Top Image */}
        <div className="relative w-full h-[250px] sm:h-[300px] rounded-2xl overflow-hidden mb-12">
          <Image
            src={backgroundImage}
            alt="Customer Journey"
            className="w-full h-full object-cover"
            width={200}
            height={200}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/40 to-transparent flex items-center px-8">
            <h3 className="text-2xl sm:text-3xl font-light text-white">
              Customer&apos;s Journey
            </h3>
          </div>
        </div>

        {/* Challenges Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Challenges
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl">
            Though the brand already had about 20,000 orders per day via direct
            orders and delivery agents, they wanted their system to increase the
            number of orders while relieving themselves of the challenge of
            paying third-party agents for product delivery.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {challenges.map((challenge, index) => (
            <div key={index} className="group">
              {/* Icon */}
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                <span className="text-2xl">{challenge.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {challenge.title}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-700 leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
