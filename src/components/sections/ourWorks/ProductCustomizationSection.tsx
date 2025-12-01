import React from 'react';

const ProductCustomizationSection = ({
  title = "Customise Products as Desired",
  description = "The app lets users easily add their preferred features of the product, and customise them according to their preferences. With a user-friendly interface, the app helps shoppers customise the products they wish to purchase with their preferred combinations."
}) => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 py-16 sm:py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">
            Major Features
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Mobile App Preview */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-sm lg:max-w-md">
            {/* Phone Frame */}
            <div className="relative bg-gradient-to-b from-blue-100 to-blue-50 rounded-[3rem] p-6 shadow-2xl">
              {/* Phone Screen */}
              <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg">
                {/* Status Bar */}
                <div className="bg-white px-6 py-3 flex justify-between items-center text-xs">
                  <span className="font-semibold">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-3 border border-gray-400 rounded-sm" />
                    <div className="w-4 h-3 border border-gray-400 rounded-sm" />
                    <div className="w-4 h-3 border border-gray-400 rounded-sm bg-gray-900" />
                  </div>
                </div>

                {/* Product Image */}
                <div className="bg-white px-6 py-8">
                  <div className="w-48 h-48 mx-auto mb-6">
                    <img
                      src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop"
                      alt="Cold Press Lemonade"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Product Name */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    COLD PRESS LEMONADE
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Your Favourite Cold Press mixed with fresh apple, and served over ice.
                  </p>

                  {/* Size Selection */}
                  <div className="mb-6">
                    <div className="flex gap-2">
                      <button className="flex-1 py-2 text-sm border-2 border-gray-300 rounded-lg hover:border-gray-900 transition-colors">
                        SMALL<br/>283 ML
                      </button>
                      <button className="flex-1 py-2 text-sm border-2 border-gray-300 rounded-lg hover:border-gray-900 transition-colors">
                        MEDIUM<br/>402 ML
                      </button>
                      <button className="flex-1 py-2 text-sm font-semibold bg-gray-900 text-white rounded-lg">
                        LARGE<br/>$2.850
                      </button>
                    </div>
                  </div>

                  {/* Flavor Options */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-3">
                      Choice of Flavor
                    </p>
                    <div className="flex gap-2">
                      <button className="flex-1 py-2 text-sm font-semibold bg-gray-900 text-white rounded-lg">
                        APPLE
                      </button>
                      <button className="flex-1 py-2 text-sm border-2 border-gray-300 rounded-lg hover:border-gray-900 transition-colors">
                        WATERMELON
                      </button>
                      <button className="flex-1 py-2 text-sm border-2 border-gray-300 rounded-lg hover:border-gray-900 transition-colors">
                        ORANGE
                      </button>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button className="w-full bg-teal-500 text-white py-4 rounded-lg font-semibold hover:bg-teal-600 transition-colors">
                    Add to cart - $2.850
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCustomizationSection;