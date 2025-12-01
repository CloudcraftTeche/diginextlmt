import React from 'react';

const LoyaltyProgramSection = ({
  title = "Loyalty we serve to our customers",
  description = "Caribou coffee app lets customers redeem points for rewards like complimentary brewed coffee, upgrades in size, and more. The 'My Rewards' section in the app enables users to build up balance points and redeem them for exciting rewards like size upgrades, free bakery products, growlers, or beans."
}) => {
  return (
    <section className="w-full bg-white py-16 sm:py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Title & Description */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Loyalty Cards Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Stacked Cards */}
          <div className="relative h-[500px] flex items-center justify-center">
            {/* Card 3 - Back */}
            <div className="absolute w-80 h-48 bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl shadow-lg transform rotate-6 opacity-60" />
            
            {/* Card 2 - Middle */}
            <div className="absolute w-80 h-48 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl shadow-lg transform rotate-3 opacity-80">
              <div className="p-6 text-white">
                <p className="text-sm font-semibold mb-1">Reward Points</p>
                <p className="text-3xl font-bold mb-4">350 Points</p>
              </div>
            </div>
            
            {/* Card 1 - Front */}
            <div className="relative w-80 h-48 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-2xl transform -rotate-1">
              <div className="p-6 text-white h-full flex flex-col justify-between">
                <div>
                  <p className="text-sm font-semibold mb-1">Reward Points</p>
                  <p className="text-4xl font-bold">350 Points</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold">Sapphire Member</span>
                  </div>
                  
                  <button className="text-sm font-semibold hover:underline flex items-center gap-1">
                    See Benefits
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Mobile Preview */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs">
              {/* Phone Frame */}
              <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                {/* Screen */}
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-gradient-to-r from-teal-500 to-teal-600 px-6 py-3 flex justify-between items-center text-white text-xs">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-3 border border-white rounded-sm" />
                    </div>
                  </div>

                  {/* Header */}
                  <div className="bg-gradient-to-r from-teal-500 to-teal-600 px-6 pb-6 pt-2">
                    <div className="flex items-center justify-between text-white mb-4">
                      <button>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <h2 className="font-semibold">REWARD BENEFIT</h2>
                      <div className="w-6" />
                    </div>

                    {/* Ruby Member Card */}
                    <div className="bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl p-4 mb-4 relative overflow-hidden">
                      <div className="absolute top-2 right-2">
                        <svg className="w-8 h-8 text-white opacity-30" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <p className="text-white text-xs font-semibold mb-1">RUBY MEMBER</p>
                      <p className="text-white text-sm font-bold mb-4">Member Exclusive Benefits</p>
                      <button className="bg-white text-pink-500 text-xs font-semibold px-4 py-1 rounded-full">
                        + Add
                      </button>
                    </div>
                  </div>

                  {/* Benefits List */}
                  <div className="px-6 py-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-teal-600 font-bold">1</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-gray-900 mb-1">Get free 50 Points Add on</p>
                        <p className="text-xs text-gray-600">Free Point Add On</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="teal-600 font-bold">2</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-gray-900 mb-1">Get free 35 Point Add on</p>
                        <p className="text-xs text-gray-600">Free Point Add On</p>
                      </div>
                    </div>

                    {/* Sapphire Member Card */}
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 relative overflow-hidden">
                      <div className="absolute top-2 right-2">
                        <svg className="w-8 h-8 text-white opacity-30" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <p className="text-white text-xs font-semibold mb-1">SAPPHIRE MEMBER</p>
                      <p className="text-white text-sm font-bold">Member Exclusive Benefits</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyProgramSection;