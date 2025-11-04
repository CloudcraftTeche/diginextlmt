"use client";
import { ImageConstants } from "@/constants/ImageConstants";
import { useState, useEffect } from "react";

interface BrandingImage {
  id: number;
  alt: string;
  gradient: string;
  img: string;
}

interface BrandingShowcaseProps {
  title?: string;
  description?: string;
  subDescription?: string;
  images?: BrandingImage[];
}

const BrandingShowcase: React.FC<BrandingShowcaseProps> = ({
  title = "Branding",
  description = "Building a Brand is one of the pre-requisites to creating a favorable image of any Company. Blending together the elements of Ethos (ethical nature) Pathos (create a connect) and Kronos (in a timely manner) for every brand building activity. DigiNext has been successfully in developing the ultimate Brand building outcome for its customers. Through a series of collaborative interactions DigiNext has established itself as the 'go-to' Ad Agency in Dubai, that works together with its customers to build, create and sustain their respective brand identity through innovative and creative techniques. A combination of strategies through above-the-line, below-the-line and online media defines the modality through which DigiNext aims at creating a Brand Identity for its customers, through a 360 degree approach.",
  subDescription = "Today Advertising trends have changed drastically. By positioning itself as a comprehensive Online Advertising agency in Dubai, DigiNext collaborates with its customers to create targeted digital advertising strategies to optimize the messaging to the relevant target audience.",
  images = [
    {
      id: 1,
      alt: "Interior Design Branding",
      gradient: "from-amber-900 to-orange-800",
      img: ImageConstants.CASE_STUDY_1,
    },
    {
      id: 2,
      alt: "Al-Manara Branding",
      gradient: "from-emerald-600 to-green-700",
      img: ImageConstants.CASE_STUDY_2,
    },
    {
      id: 3,
      alt: "Product Branding",
      gradient: "from-teal-700 to-emerald-800",
      img: ImageConstants.CASE_STUDY_3,
    },
  ],
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector("#branding-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="branding-section"
      className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden"
    >
      <div className="max-w-[1750px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Title and Description */}
        <div
          className={`mb-12 lg:mb-16 transform transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
            {title}
          </h2>
          <p
            className="text-sm sm:text-base lg:text-base text-gray-700 leading-relaxed mb-6"
            style={{ textAlign: "justify" }}
          >
            {description}
          </p>
          <p
            className="text-sm sm:text-base lg:text-base text-gray-700 leading-relaxed"
            style={{ textAlign: "justify" }}
          >
            {subDescription}
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src={image.img}
                alt={image.alt}
                className={`w-full h-80 object-cover rounded-lg shadow-lg transition-transform duration-500 ${
                  hoveredImage === image.id ? "scale-105" : "scale-100"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Bottom Description (Duplicate section as shown in image) */}
        <div
          className={`mt-16 lg:mt-20 transform transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
            {title}
          </h2>
          <p
            className="text-sm sm:text-base lg:text-base text-gray-700 leading-relaxed mb-6"
            style={{ textAlign: "justify" }}
          >
            {description}
          </p>
          <p
            className="text-sm sm:text-base lg:text-base text-gray-700 leading-relaxed"
            style={{ textAlign: "justify" }}
          >
            {subDescription}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandingShowcase;
