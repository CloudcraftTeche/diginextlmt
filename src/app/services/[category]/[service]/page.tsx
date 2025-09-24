import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  getServiceBySlug,
  getServiceItemBySlug,
  SERVICES_DATA,
} from "@/lib/services-data";
import Link from "next/link";
import Image from "next/image";

interface ServicePageProps {
  params: {
    category: string;
    service: string;
  };
}

export async function generateStaticParams() {
  const params = [];

  for (const service of SERVICES_DATA) {
    for (const item of service.items) {
      params.push({
        category: service.slug,
        service: item.slug,
      });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const serviceItem = getServiceItemBySlug(params.category, params.service);
  const categoryService = getServiceBySlug(params.category);

  if (!serviceItem || !categoryService) {
    return {
      title: "Service Not Found | DigiNext",
    };
  }

  return {
    title: `${serviceItem.name} | ${categoryService.title} | DigiNext`,
    description: serviceItem.description,
    openGraph: {
      title: `${serviceItem.name} | DigiNext`,
      description: serviceItem.description,
      images: [serviceItem.image],
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const serviceItem = getServiceItemBySlug(params.category, params.service);
  const categoryService = getServiceBySlug(params.category);

  if (!serviceItem || !categoryService) {
    notFound();
  }

  // Get related services from the same category
  const relatedServices = categoryService.items
    .filter((item) => item.slug !== serviceItem.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Header forceTransparent={false} />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-orange-600 transition-colors">
                Home
              </Link>
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <Link
                href="/#services"
                className="hover:text-orange-600 transition-colors"
              >
                Services
              </Link>
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <Link
                href={`/services/${params.category}`}
                className="hover:text-orange-600 transition-colors"
              >
                {categoryService.title}
              </Link>
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="text-gray-900 font-medium">
                {serviceItem.name}
              </span>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full mb-4">
                  {categoryService.title} {categoryService.subtitle}
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                  {serviceItem.name}
                </h1>
                <div className="h-1 w-20 bg-orange-600 rounded-full"></div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                {serviceItem.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors duration-200"
                >
                  Get Started
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link
                  href={`/services/${params.category}`}
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-orange-600 text-orange-600 font-medium rounded-lg hover:bg-orange-600 hover:text-white transition-all duration-200"
                >
                  View All Services
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={serviceItem.image}
                  alt={serviceItem.name}
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/10 to-transparent"></div>
              </div>

              {/* Floating info card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 max-w-xs border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Available Now
                    </div>
                    <div className="text-sm text-gray-600">Ready to Start</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Service Overview
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {serviceItem.fullDescription}
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  What's Included
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {serviceItem.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-orange-200 hover:shadow-md transition-all duration-200"
                    >
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-3 h-3 text-orange-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-800 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              {serviceItem.process && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Our Process
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {serviceItem.process.map((step, index) => (
                      <div
                        key={index}
                        className="text-center p-6 bg-white rounded-xl border border-gray-200"
                      >
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-orange-600 font-bold">
                            {index + 1}
                          </span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {step}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefits */}
              {serviceItem.benefits && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Key Benefits
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {serviceItem.benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-4 p-6 bg-gradient-to-r from-orange-50 to-transparent rounded-xl"
                      >
                        <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {benefit}
                          </h3>
                          <p className="text-sm text-gray-600">
                            Experience the advantage of professional{" "}
                            {serviceItem.name.toLowerCase()}.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Info */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  Service Details
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Category</span>
                    <span className="font-medium text-gray-900">
                      {categoryService.title}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Features</span>
                    <span className="font-medium text-gray-900">
                      {serviceItem.features.length}+
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Delivery</span>
                    <span className="font-medium text-green-600">
                      Available
                    </span>
                  </div>

                  <hr className="my-4" />

                  <Link
                    href="/contact"
                    className="w-full bg-orange-600 text-white text-center py-3 px-4 rounded-lg font-medium hover:bg-orange-700 transition-colors duration-200 block"
                  >
                    Request Quote
                  </Link>

                  <Link
                    href="/portfolio"
                    className="w-full border-2 border-orange-600 text-orange-600 text-center py-3 px-4 rounded-lg font-medium hover:bg-orange-600 hover:text-white transition-all duration-200 block"
                  >
                    View Portfolio
                  </Link>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-4">Need Help?</h3>
                <p className="text-orange-100 text-sm mb-4">
                  Our experts are ready to discuss your project and provide
                  personalized recommendations.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm">info@diginext.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text-sm">+91 123 456 7890</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <div className="border-t border-gray-200 pt-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Related {categoryService.title} Services
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Explore other services in our{" "}
                  {categoryService.title.toLowerCase()} portfolio that might
                  interest you.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedServices.map((relatedService, index) => (
                  <Link
                    key={index}
                    href={`/services/${params.category}/${relatedService.slug}`}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                  >
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={relatedService.image}
                        alt={relatedService.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                          <span className="text-sm font-medium text-gray-900">
                            View Details
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                        {relatedService.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {relatedService.description}
                      </p>

                      <div className="flex items-center text-orange-600 font-medium">
                        <span className="text-sm">Learn More</span>
                        <svg
                          className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* FAQ Section */}
          <div className="mt-20 bg-gray-50 rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Common questions about our {serviceItem.name.toLowerCase()}{" "}
                service.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <details className="group bg-white rounded-2xl p-6 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900">
                    How long does {serviceItem.name.toLowerCase()} typically
                    take?
                  </h3>
                  <svg
                    className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed">
                    The timeline for {serviceItem.name.toLowerCase()} varies
                    depending on project complexity and requirements. Typically,
                    projects range from 1-4 weeks. We'll provide a detailed
                    timeline during our initial consultation based on your
                    specific needs and goals.
                  </p>
                </div>
              </details>

              <details className="group bg-white rounded-2xl p-6 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900">
                    What information do you need to get started?
                  </h3>
                  <svg
                    className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed">
                    To begin your {serviceItem.name.toLowerCase()} project,
                    we'll need to understand your goals, target audience, brand
                    guidelines (if available), and any specific requirements or
                    preferences. We'll guide you through our discovery process
                    to gather all necessary information.
                  </p>
                </div>
              </details>

              <details className="group bg-white rounded-2xl p-6 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Do you provide revisions and ongoing support?
                  </h3>
                  <svg
                    className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed">
                    Yes! We include multiple revision rounds in all our projects
                    to ensure the final result meets your expectations. We also
                    offer ongoing support and maintenance packages to keep your{" "}
                    {serviceItem.name.toLowerCase()}
                    performing at its best over time.
                  </p>
                </div>
              </details>

              <details className="group bg-white rounded-2xl p-6 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900">
                    What makes your {serviceItem.name.toLowerCase()} different?
                  </h3>
                  <svg
                    className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed">
                    Our approach combines strategic thinking with creative
                    excellence. We don't just focus on aesthetics – we ensure
                    every element serves your business objectives. Our team
                    brings years of experience and stays current with industry
                    trends to deliver solutions that drive real results.
                  </p>
                </div>
              </details>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <g fill="currentColor" fillOpacity="0.1">
                      <circle cx="30" cy="30" r="2" />
                    </g>
                  </g>
                </svg>
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Ready to Start Your {serviceItem.name} Project?
                </h2>
                <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
                  Let's discuss your vision and create something exceptional
                  together. Get in touch for a free consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors duration-200 shadow-lg"
                  >
                    Get Free Consultation
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                  <Link
                    href={`/services/${params.category}`}
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-200"
                  >
                    View All Services
                  </Link>
                </div>

                {/* Trust indicators */}
                <div className="flex items-center justify-center space-x-8 mt-8 pt-8 border-t border-orange-500">
                  <div className="text-center">
                    <div className="text-2xl font-bold">100+</div>
                    <div className="text-sm text-orange-200">
                      Projects Completed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">5★</div>
                    <div className="text-sm text-orange-200">Client Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm text-orange-200">
                      Support Available
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
