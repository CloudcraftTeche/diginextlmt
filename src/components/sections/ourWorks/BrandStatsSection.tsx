import React from 'react';

const BrandStatsSection = ({
  backgroundImage = "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&h=600&fit=crop",
  title = "A Premium Coffee Brand With 85+ Stores at Kuwait"
}) => {
  return (
    <section className="w-full bg-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Image Banner */}
        <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden mb-16">
          <img
            src={backgroundImage}
            alt="Caribou Coffee Brand"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white text-center px-6 leading-tight">
              {title}
            </h2>
          </div>
        </div>

        {/* Results Section */}
        <div className="mb-12">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            WAC&apos;s Turn Towards Making Incredible Results For Caribou
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Caribou Coffee Kuwait app launch has been an integral part of the brand and witnessed an unparalleled shift in sales patterns.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {/* Stat 1 */}
          <div>
            <div className="text-5xl sm:text-6xl lg:text-7xl font-light text-blue-600 mb-4">
              15K
            </div>
            <p className="text-base text-gray-700 leading-relaxed">
              Number of orders processed daily via app
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <div className="text-5xl sm:text-6xl lg:text-7xl font-light text-blue-600 mb-4">
              33%
            </div>
            <p className="text-base text-gray-700 leading-relaxed">
              Orders placed via app increased from 0 to 33%
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <div className="text-5xl sm:text-6xl lg:text-7xl font-light text-blue-600 mb-4">
              60%
            </div>
            <p className="text-base text-gray-700 leading-relaxed">
              Customers retained, aided by app&apos;s loyalty program
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStatsSection;