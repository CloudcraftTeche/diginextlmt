import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getServiceBySlug, SERVICES_DATA } from "@/lib/services-data";
import Link from "next/link";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    category: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.category);

  if (!service) {
    return {
      title: "Service Not Found | DigiNext",
    };
  }

  return {
    title: `${service.title} ${service.subtitle} | DigiNext`,
    description: `Professional ${service.title.toLowerCase()} services. Browse our comprehensive range of ${service.title.toLowerCase()} solutions including ${service.items
      .slice(0, 3)
      .map((item) => item.name)
      .join(", ")}.`,
    openGraph: {
      title: `${service.title} ${service.subtitle} | DigiNext`,
      description: `Professional ${service.title.toLowerCase()} services tailored to your needs.`,
      images: [service.image],
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const service = getServiceBySlug(params.category);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
              <span className="text-gray-900 font-medium">
                {service.title} {service.subtitle}
              </span>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {service.title}
                  <br />
                  <span className="text-orange-600">{service.subtitle}</span>
                </h1>
                <div className="mt-4 h-1 w-20 bg-orange-600 rounded-full"></div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                Explore our comprehensive range of {service.title.toLowerCase()}{" "}
                services designed to elevate your brand and create exceptional
                experiences. We combine creative excellence with strategic
                thinking to deliver solutions that drive results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#services-grid"
                  className="inline-flex items-center justify-center px-8 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors duration-200"
                >
                  Explore Services
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-orange-600 text-orange-600 font-medium rounded-lg hover:bg-orange-600 hover:text-white transition-all duration-200"
                >
                  Get Quote
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">
                    {service.items.length}+
                  </div>
                  <div className="text-sm text-gray-600">Services</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">100+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">5★</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-transparent"></div>
              </div>

              {/* Floating cards */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Quality Assured
                    </div>
                    <div className="text-sm text-gray-600">
                      Premium Solutions
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div id="services-grid" className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our {service.title} Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose from our range of specialized services designed to meet
                your unique needs and drive exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.items.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Service number badge */}
                    <div className="absolute top-4 left-4 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.features
                        .slice(0, 2)
                        .map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-3 py-1 text-xs bg-orange-50 text-orange-600 rounded-full font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      {item.features.length > 2 && (
                        <span className="px-3 py-1 text-xs bg-gray-50 text-gray-500 rounded-full">
                          +{item.features.length - 2} more
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/services/${service.slug}/${item.slug}`}
                      className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200"
                    >
                      Learn More
                      <svg
                        className="ml-1 w-4 h-4"
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
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mt-20 bg-white rounded-3xl shadow-lg p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Our {service.title} Services?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We bring years of expertise and a passion for excellence to
                every project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-orange-600"
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
                <h3 className="font-semibold text-gray-900 mb-2">
                  Fast Delivery
                </h3>
                <p className="text-sm text-gray-600">
                  Quick turnaround without compromising quality
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Quality Assured
                </h3>
                <p className="text-sm text-gray-600">
                  Rigorous quality control and testing processes
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Expert Team
                </h3>
                <p className="text-sm text-gray-600">
                  Experienced professionals with proven track record
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 110 19.5 9.75 9.75 0 010-19.5z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  24/7 Support
                </h3>
                <p className="text-sm text-gray-600">
                  Round-the-clock assistance and maintenance
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-3xl p-8 lg:p-12 text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
                Let's discuss your project and create something amazing
                together. Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors duration-200"
                >
                  Start Your Project
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
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-200"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
