import React from 'react';

const ProjectOverview = ({
  title = "Developing an Extraordinary Mobile App for Premium US-Based Coffee Brand",
  description = "Caribou Coffee is a US-based premium coffee brand, providing high-quality handcrafted beverages, coffee lifestyle products and food items in a welcoming coffeehouse environment for over three decades. In addition to Caribou's presence in grocery stores, club stores, merchandisers, food service providers, entertainment venues and various eCommerce channels, the brand wanted an exclusive app-based solution to make purchases seamless for Kuwaiti customers through mobile app purchases.",
  language = "PHP / Kotlin / Swift",
  timescale = "20 Weeks",
  launchDate = "January 2024",
  system = "Laravel",
  services = [
    "UI/UX Design",
    "E-commerce",
    "Web App Development",
    "Mobile App Development",
    "Digital Marketing",
    "Cloud Services"
  ]
}) => {
  return (
    <section className="w-full bg-white py-16 sm:py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Side - Services */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-6">
              Services Provided
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {services.map((service, index) => (
                <span
                  key={index}
                  className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-gray-900 hover:bg-gray-50 transition-all duration-300"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side - Project Details */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
              {title}
            </h2>
            
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
              {description}
            </p>

            {/* Project Specs Grid */}
            <div className="grid grid-cols-2 gap-6 border-t border-gray-200 pt-6">
              <div>
                <p className="text-sm text-gray-600 mb-2">Language</p>
                <p className="text-base font-medium text-gray-900">{language}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 mb-2">Timescale</p>
                <p className="text-base font-medium text-gray-900">{timescale}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 mb-2">Launch Date</p>
                <p className="text-base font-medium text-gray-900">{launchDate}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 mb-2">System</p>
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