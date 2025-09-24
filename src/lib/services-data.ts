// src/lib/services-data.ts

export interface ServiceItem {
  title: string;
  subtitle: string;
  items: ServiceItemDetail[];
  image: string;
  imageAlt: string;
  slug: string;
}

export interface ServiceItemDetail {
  name: string;
  slug: string;
  description: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  image: string;
  gallery?: string[];
  process?: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    title: "Branding",
    subtitle: "& Graphic Design",
    slug: "branding-graphic-design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Branding and graphic design materials",
    items: [
      {
        name: "Logo Design",
        slug: "logo-design",
        description:
          "Create distinctive and memorable logos that represent your brand identity.",
        fullDescription:
          "Our logo design service combines creative excellence with strategic thinking to create distinctive brand marks that resonate with your target audience. We believe that a great logo is more than just a visual element – it's the cornerstone of your brand identity that communicates your values, personality, and unique positioning in the market.",
        features: [
          "Brand Analysis & Research",
          "Concept Development",
          "Multiple Design Variations",
          "Brand Guidelines Documentation",
          "File Formats for All Uses",
        ],
        benefits: [
          "Increased Brand Recognition",
          "Professional Credibility",
          "Consistent Brand Identity",
          "Market Differentiation",
        ],
        image:
          "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ],
        process: [
          "Discovery & Research",
          "Concept Development",
          "Design Refinement",
          "Final Delivery",
        ],
      },
      {
        name: "Corporate Identity & Brand Guidelines",
        slug: "corporate-identity",
        description:
          "Comprehensive brand identity systems that ensure consistency across all touchpoints.",
        fullDescription:
          "Develop a cohesive brand identity system that ensures consistent communication across all your business touchpoints. Our comprehensive brand guidelines provide clear instructions for maintaining brand integrity while allowing flexibility for creative applications.",
        features: [
          "Logo Usage Guidelines",
          "Color Palette Systems",
          "Typography Standards",
          "Brand Voice & Tone",
          "Application Examples",
        ],
        benefits: [
          "Brand Consistency",
          "Professional Appearance",
          "Team Alignment",
          "Scalable Brand System",
        ],
        image:
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        process: [
          "Brand Audit",
          "Identity Development",
          "Guidelines Creation",
          "Team Training",
        ],
      },
      {
        name: "Marketing Collateral Design",
        slug: "marketing-collateral",
        description:
          "Professional marketing materials that effectively communicate your message.",
        fullDescription:
          "Create compelling marketing materials that drive engagement and conversions. From brochures to business cards, we design collateral that not only looks great but also serves your marketing objectives effectively.",
        features: [
          "Brochure Design",
          "Flyer Creation",
          "Business Card Design",
          "Presentation Templates",
          "Digital Assets",
        ],
        benefits: [
          "Professional Image",
          "Marketing Effectiveness",
          "Brand Consistency",
          "Cost-Effective Solutions",
        ],
        image:
          "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        process: [
          "Content Strategy",
          "Design Development",
          "Review & Refinement",
          "Production Ready Files",
        ],
      },
      {
        name: "Social Media & Digital Graphics",
        slug: "social-media-graphics",
        description:
          "Eye-catching social media graphics that boost engagement and brand visibility.",
        fullDescription:
          "Stand out in crowded social feeds with visually striking graphics designed specifically for each platform. Our social media designs are optimized for engagement while maintaining brand consistency across all channels.",
        features: [
          "Platform-Specific Designs",
          "Animated Graphics",
          "Story Templates",
          "Post Designs",
          "Ad Creatives",
        ],
        benefits: [
          "Higher Engagement",
          "Brand Recognition",
          "Professional Presence",
          "Consistent Messaging",
        ],
        image:
          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        process: [
          "Platform Analysis",
          "Content Planning",
          "Design Creation",
          "Performance Optimization",
        ],
      },
      {
        name: "Packaging Design",
        slug: "packaging-design",
        description:
          "Innovative packaging solutions that protect your product and attract customers.",
        fullDescription:
          "Create packaging that not only protects your product but also serves as a powerful marketing tool at the point of sale. Our packaging designs balance functionality with aesthetic appeal to maximize shelf impact.",
        features: [
          "Structural Design",
          "Label Design",
          "Material Selection",
          "Print Production",
          "Sustainability Focus",
        ],
        benefits: [
          "Shelf Appeal",
          "Brand Protection",
          "Customer Experience",
          "Sales Enhancement",
        ],
        image:
          "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        process: [
          "Product Analysis",
          "Concept Development",
          "Prototyping",
          "Production Optimization",
        ],
      },
    ],
  },
  {
    title: "Experience",
    subtitle: "Design",
    slug: "experience-design",
    image:
      "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    imageAlt: "User experience design",
    items: [
      {
        name: "UI/UX Design",
        slug: "ui-ux-design",
        description:
          "User-centered design solutions that create intuitive and engaging experiences.",
        fullDescription:
          "Transform your digital products with user-centered design that prioritizes usability, accessibility, and engagement. Our UI/UX design process combines research-driven insights with creative excellence to deliver experiences that users love and businesses benefit from.",
        features: [
          "User Research & Analysis",
          "Wireframing & Prototyping",
          "Visual Design",
          "Usability Testing",
          "Design System Creation",
        ],
        benefits: [
          "Improved User Satisfaction",
          "Higher Conversion Rates",
          "Reduced Development Costs",
          "Competitive Advantage",
        ],
        image:
          "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        process: [
          "Discovery & Research",
          "Information Architecture",
          "Design & Prototyping",
          "Testing & Iteration",
        ],
      },
      {
        name: "Website Design",
        slug: "website-design",
        description:
          "Modern, responsive websites that deliver exceptional user experiences.",
        fullDescription:
          "Build websites that not only look stunning but also perform exceptionally across all devices and browsers. Our responsive designs ensure optimal user experience while supporting your business goals through strategic design decisions.",
        features: [
          "Responsive Design",
          "Performance Optimization",
          "SEO Optimization",
          "Content Management",
          "Analytics Integration",
        ],
        benefits: [
          "Mobile-First Approach",
          "Fast Loading Times",
          "Search Engine Friendly",
          "Easy Content Updates",
        ],
        image:
          "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        process: [
          "Strategy & Planning",
          "Design Development",
          "Development & Testing",
          "Launch & Optimization",
        ],
      },
      {
        name: "Mobile Experience",
        slug: "mobile-experience",
        description:
          "Native and web-based mobile applications designed for optimal user engagement.",
        fullDescription:
          "Create mobile experiences that users can't put down. Our mobile design approach focuses on touch interactions, performance, and platform-specific conventions to deliver apps that feel natural and intuitive on every device.",
        features: [
          "Native App Design",
          "Progressive Web Apps",
          "Touch Interactions",
          "Performance Optimization",
          "Platform Guidelines",
        ],
        benefits: [
          "Enhanced User Engagement",
          "Higher Retention Rates",
          "Seamless Interactions",
          "Cross-Platform Consistency",
        ],
        image:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        process: [
          "User Journey Mapping",
          "Interaction Design",
          "Visual Design",
          "Prototype Testing",
        ],
      },
      {
        name: "E-commerce Experience",
        slug: "ecommerce-experience",
        description:
          "Conversion-optimized e-commerce designs that turn visitors into customers.",
        fullDescription:
          "Design e-commerce experiences that guide users seamlessly from discovery to purchase. Our conversion-focused approach combines persuasive design principles with user psychology to maximize sales and customer satisfaction.",
        features: [
          "Conversion Optimization",
          "Product Showcase",
          "Checkout Flow Design",
          "Mobile Commerce",
          "Payment Integration",
        ],
        benefits: [
          "Increased Sales",
          "Better User Experience",
          "Reduced Cart Abandonment",
          "Customer Retention",
        ],
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        process: [
          "E-commerce Strategy",
          "User Flow Optimization",
          "Design Implementation",
          "Conversion Testing",
        ],
      },
    ],
  },
  {
    title: "Interior",
    subtitle: "Design Solutions",
    slug: "interior-design",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Luxury interior design",
    items: [
      {
        name: "Residential Interior Design",
        slug: "residential-interior",
        description:
          "Transform your living spaces with personalized interior design solutions.",
        fullDescription:
          "Create homes that reflect your personality and lifestyle while maximizing functionality and aesthetic appeal. Our residential interior design service covers everything from concept development to final styling, ensuring every detail contributes to your dream living space.",
        features: [
          "Space Planning",
          "Furniture Selection",
          "Color Coordination",
          "Lighting Design",
          "Custom Solutions",
        ],
        benefits: [
          "Personalized Spaces",
          "Increased Property Value",
          "Functional Layouts",
          "Stress-Free Process",
        ],
        image:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        process: [
          "Initial Consultation",
          "Design Development",
          "Material Selection",
          "Implementation",
        ],
      },
      {
        name: "Commercial Space Planning",
        slug: "commercial-space-planning",
        description:
          "Optimize your commercial spaces for productivity and brand expression.",
        fullDescription:
          "Design commercial spaces that enhance productivity, reflect your brand values, and create positive experiences for employees and customers. Our commercial design solutions balance functionality with aesthetic appeal to support business success.",
        features: [
          "Workflow Optimization",
          "Brand Integration",
          "Employee Wellness",
          "Flexible Layouts",
          "Technology Integration",
        ],
        benefits: [
          "Increased Productivity",
          "Enhanced Brand Image",
          "Employee Satisfaction",
          "Operational Efficiency",
        ],
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        process: [
          "Space Analysis",
          "Functional Planning",
          "Design Development",
          "Project Management",
        ],
      },
      {
        name: "Luxury Furniture Selection",
        slug: "luxury-furniture",
        description:
          "Curate premium furniture pieces that define elegance and sophistication.",
        fullDescription:
          "Access our network of luxury furniture suppliers and receive expert guidance in selecting pieces that complement your space and lifestyle. We focus on quality, craftsmanship, and timeless design to create interiors that age gracefully.",
        features: [
          "Premium Brand Access",
          "Custom Furniture",
          "Quality Assessment",
          "Style Coordination",
          "Delivery Management",
        ],
        benefits: [
          "Exclusive Access",
          "Expert Curation",
          "Quality Assurance",
          "Timeless Appeal",
        ],
        image:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        process: [
          "Style Assessment",
          "Selection Process",
          "Customization",
          "Installation",
        ],
      },
    ],
  },
];

export const getServiceBySlug = (slug: string): ServiceItem | undefined => {
  return SERVICES_DATA.find((service) => service.slug === slug);
};

export const getServiceItemBySlug = (
  serviceSlug: string,
  itemSlug: string
): ServiceItemDetail | undefined => {
  const service = getServiceBySlug(serviceSlug);
  return service?.items.find((item) => item.slug === itemSlug);
};

export const getAllServiceSlugs = (): string[] => {
  return SERVICES_DATA.map((service) => service.slug);
};

export const getAllServiceItemSlugs = (serviceSlug: string): string[] => {
  const service = getServiceBySlug(serviceSlug);
  return service ? service.items.map((item) => item.slug) : [];
};
