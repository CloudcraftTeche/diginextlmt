import { ImageConstants } from "@/constants/ImageConstants";

export interface HeroSection {
  title: string;
  industry: string;
  heroImage: string;
  description: string;
}

export interface ProjectOverviewSection {
  title: string;
  description: string;
  language: string;
  timescale: string;
  launchDate: string;
  system: string;
  services: string[];
}

export interface BrandStatsSection {
  backgroundImage: string;
  title: string;
  description: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
}
export interface LaptopMockupSection {
  backgroundImage: string;
  title: string;
  description: string;
}

export interface ObjectivesSection {
  subtitle: string;
  title: string;
  description: string;
  objectives: Array<{
    title: string;
    description: string;
  }>;
}

export interface ChallengesSection {
  backgroundImage: string;
  subtitle: string;
  title: string;
  description: string;
  challenges: Array<{
    title: string;
    description: string;
  }>;
}

export interface UXDesignSection {
  subtitle: string;
  title: string;
  backgroundImage: string;
  description: string;
  features: Array<{
    image: string;
    title: string;
    subtitle?: string;
    description: string;
  }>;
}

export interface ProductCustomizationSection {
  subtitle: string;
  title: string;
  description: string;
  image: string;
  image_2: string;
}

export interface GridSection {
  title: string;
  description: string;
  images: Array<{
    image: string;
    alt?: string;
  }>;
}

export interface PortfolioDetailContent {
  title: string;
  slug: string;
  description: string;
  hero: HeroSection;
  overview: ProjectOverviewSection;
  brandStats: BrandStatsSection;
  objectives: ObjectivesSection;
  challenges: ChallengesSection;
  uxDesign: UXDesignSection;
  productCustomization: ProductCustomizationSection;
  gridSection?: GridSection;
  laptopMockupSection?: LaptopMockupSection;
}

const PORTFOLIO_DETAILS: Record<string, PortfolioDetailContent> = {
  "alhabat-interior": {
    title: "Alhabat Interior",
    slug: "alhabat-interior",
    description:
      "Alhabat Interior is a premium interior design and fit-out brand delivering modern, functional, and elegant spaces.",

    hero: {
      title: "Alhabat Interior",
      industry: "Interior Design · Fit-Out Solutions",
      heroImage: ImageConstants.WORKS.ALHABAT_INTERIOR.HERO_1,
      description:
        "Premium interior design and fit-out solutions crafted with precision, style, and functionality.",
    },

    overview: {
      title: "Transforming Spaces with Modern Design Excellence",
      description:
        "Alhabat Interior specializes in creating sophisticated living and working environments through innovative design and meticulous execution. Our approach combines contemporary aesthetics with functional design principles, delivering spaces that not only look exceptional but enhance the daily lives of their occupants. From concept to completion, we ensure every detail reflects quality craftsmanship and timeless elegance.",
      language: "English, Arabic",
      timescale: "6-8 weeks",
      launchDate: "March 2024",
      system: "Custom Design & Build",
      services: [
        "Interior Design",
        "Space Planning",
        "Fit-Out Solutions",
        "Custom Furniture",
        "3D Visualization",
        "Project Management",
      ],
    },

    brandStats: {
      backgroundImage: ImageConstants.WORKS.ALHABAT_INTERIOR.HERO_2,
      title:
        "Delivering Excellence in Every Project, Building Trust Through Quality",
      description:
        "Our commitment to excellence has positioned us as a trusted partner in the interior design industry. Through meticulous attention to detail, innovative design solutions, and unwavering dedication to client satisfaction, we've established a track record that speaks for itself.",
      stats: [
        {
          value: "200+",
          label: "Successfully completed residential and commercial projects",
        },
        {
          value: "98%",
          label: "Client satisfaction rate with repeat business partnerships",
        },
        {
          value: "15+",
          label: "Years of combined experience in interior design and fit-out",
        },
      ],
    },

    objectives: {
      subtitle: "Project Goals",
      title: "Objectives",
      description:
        "Our primary objective was to create a comprehensive brand identity and digital presence that reflects Alhabat Interior's commitment to excellence while providing clients with an immersive experience of their design capabilities.",
      objectives: [
        {
          title: "Brand Identity Development",
          description:
            "Establish a sophisticated visual identity that communicates luxury, precision, and modern design excellence across all touchpoints.",
        },
        {
          title: "Digital Experience Enhancement",
          description:
            "Create an engaging online platform that showcases portfolio work and facilitates seamless client interaction and project inquiries.",
        },
        {
          title: "Market Positioning",
          description:
            "Position Alhabat Interior as a premium interior design brand that delivers exceptional value through innovative solutions and quality craftsmanship.",
        },
      ],
    },

    challenges: {
      backgroundImage: ImageConstants.WORKS.ALHABAT_INTERIOR.CONTAINER_BANNER_1,
      subtitle: "What We Solved",
      title: "Challenges",
      description:
        "Every great project comes with its unique set of challenges. Here's how we tackled them head-on to deliver exceptional results.",
      challenges: [
        {
          title: "Client Vision Alignment",
          description:
            "Translating diverse client preferences into cohesive design concepts while maintaining brand consistency and design integrity.",
        },
        {
          title: "Space Optimization",
          description:
            "Maximizing functionality and aesthetics in limited spaces while adhering to building regulations and client budget constraints.",
        },
        {
          title: "Timeline Management",
          description:
            "Coordinating multiple vendors, ensuring timely material delivery, and maintaining quality standards under strict project deadlines.",
        },
      ],
    },

    uxDesign: {
      subtitle: "Design Excellence",
      title: "Visual Identity & Brand Experience",
      backgroundImage: ImageConstants.WORKS.ALHABAT_INTERIOR.HERO_2,
      description:
        "Creating a cohesive visual language that reflects sophistication, elegance, and modern design principles across all brand touchpoints.",
      features: [
        {
          image: ImageConstants.WORKS.ALHABAT_INTERIOR.PRODUCT_1,
          title: "Brand Identity",
          subtitle: "Logo Design",
          description:
            "Contemporary logo design reflecting the perfect balance of luxury and minimalism in interior design.",
        },
        {
          image: ImageConstants.WORKS.ALHABAT_INTERIOR.PRODUCT_2,
          title: "Marketing Materials",
          subtitle: "Print Design",
          description:
            "Professional brochures and presentation materials showcasing project portfolios with elegant layouts.",
        },
        {
          image: ImageConstants.WORKS.ALHABAT_INTERIOR.PRODUCT_3,
          title: "Digital Presence",
          subtitle: "Web Design",
          description:
            "Responsive website design highlighting portfolio work with immersive visual experiences and intuitive navigation.",
        },
        {
          image: ImageConstants.WORKS.ALHABAT_INTERIOR.PRODUCT_4,
          title: "Social Media",
          subtitle: "Content Design",
          description:
            "Engaging social media templates and content design maintaining consistent brand aesthetics across platforms.",
        },
      ],
    },

    productCustomization: {
      subtitle: "Interactive Experience",
      title: "3D Visualization & Virtual Tours",
      description:
        "Experience spaces before they're built with our cutting-edge 3D visualization technology. Our interactive virtual tours allow clients to walk through their future spaces, make real-time design adjustments, and visualize material selections with photorealistic accuracy. This immersive approach ensures complete confidence in design decisions and eliminates costly revisions during construction.",
      image: ImageConstants.WORKS.ALHABAT_INTERIOR.PHONE_MOCKUP_1,
      image_2: ImageConstants.WORKS.ALHABAT_INTERIOR.PHONE_MOCKUP_2,
    },
    gridSection: {
      title: "We Create Excellence Through Technology",
      description:
        "Our primary objective is to be the go-to one-stop platform for all corporate advertising, branding, and event needs in the UAE. We empower businesses through innovative technology solutions.",
      images: [
        {
          image: ImageConstants.WORKS.ALHABAT_INTERIOR.PRODUCT_1,
          alt: "Modern interior design workspace",
        },
        {
          image: ImageConstants.WORKS.ALHABAT_INTERIOR.PRODUCT_2,
          alt: "Contemporary office space",
        },
        {
          image: ImageConstants.WORKS.ALHABAT_INTERIOR.PRODUCT_3,
          alt: "Elegant design consultation area",
        },
      ],
    },
    laptopMockupSection: {
      backgroundImage: ImageConstants.WORKS.ALHABAT_INTERIOR.LAP_MOCKUP,
      title:
        "Delivering Excellence in Every Project, Building Trust Through Quality",
      description:
        "Our commitment to excellence has positioned us as a trusted partner in the interior design industry. Through meticulous attention to detail, innovative design solutions, and unwavering dedication to client satisfaction, we've established a track record that speaks for itself.",
    },
  },
  "balance-spa": {
    title: "Balance Spa",
    slug: "balance-spa",
    description:
      "Balance Spa is a wellness brand focused on relaxation, rejuvenation, and holistic healing experiences.",

    hero: {
      title: "Balance Spa",
      industry: "Wellness · Spa & Therapy",
      heroImage: ImageConstants.WORKS.BALANCE_SPA.HERO_1,
      description:
        "A serene wellness experience crafted to restore balance, harmony, and peace.",
    },

    overview: {
      title: "Wellness Through Design & Experience",
      description:
        "Balance Spa required a calming and premium visual identity that reflects relaxation, luxury, and holistic wellness. The project focused on creating visually soothing designs that align with the brand’s philosophy of healing and rejuvenation.",
      language: "English",
      timescale: "4–5 weeks",
      launchDate: "2024",
      system: "Branding & Creative Design",
      services: [
        "Brand Identity",
        "Social Media Creatives",
        "Print Design",
        "Marketing Banners",
      ],
    },

    brandStats: {
      backgroundImage:
        ImageConstants.WORKS.BALANCE_SPA.HERO_2 ||
        ImageConstants.WORKS.BALANCE_SPA.HERO_1,
      title: "Creating Calm Through Visual Storytelling",
      description:
        "Every design element was curated to evoke tranquility and trust.",
      stats: [
        { value: "50+", label: "Creative Assets Delivered" },
        { value: "4.9★", label: "Customer Satisfaction Rating" },
        { value: "20+", label: "Spa Campaign Designs" },
      ],
    },

    objectives: {
      subtitle: "Project Goals",
      title: "Objectives",
      description:
        "To build a soothing and consistent brand presence across digital and physical touchpoints.",
      objectives: [
        {
          title: "Visual Calmness",
          description:
            "Use soft colors and minimal layouts to reflect wellness.",
        },
        {
          title: "Brand Recognition",
          description: "Ensure consistency across marketing platforms.",
        },
        {
          title: "Customer Engagement",
          description: "Attract new customers through appealing visuals.",
        },
      ],
    },

    challenges: {
      backgroundImage: ImageConstants.WORKS.BALANCE_SPA.CONTAINER_BANNER_1,
      subtitle: "What We Solved",
      title: "Challenges",
      description:
        "Designing visuals that communicate relaxation while staying commercially effective.",
      challenges: [
        {
          title: "Color Balance",
          description:
            "Maintaining a calming palette across multiple creatives.",
        },
        {
          title: "Platform Adaptability",
          description: "Optimizing designs for print and digital formats.",
        },
      ],
    },

    uxDesign: {
      subtitle: "Creative Direction",
      title: "Wellness-Focused Visual Identity",
      backgroundImage:
        ImageConstants.WORKS.BALANCE_SPA.HERO_2 ||
        ImageConstants.WORKS.BALANCE_SPA.HERO_1,
      description:
        "A clean, elegant design language that reflects peace and wellness.",
      features: [
        {
          image: ImageConstants.WORKS.BALANCE_SPA.PRODUCT_1,
          title: "Social Media Design",
          description: "Minimal and calming social creatives.",
        },
        {
          image: ImageConstants.WORKS.BALANCE_SPA.PRODUCT_2,
          title: "Promotional Creatives",
          description: "High-impact spa promotional visuals.",
        },
        {
          image: ImageConstants.WORKS.BALANCE_SPA.PRODUCT_3,
          title: "Brand Collaterals",
          description: "Consistent branding across print materials.",
        },
        {
          image: ImageConstants.WORKS.BALANCE_SPA.PRODUCT_4,
          title: "Campaign Designs",
          description: "Seasonal and promotional campaigns.",
        },
      ],
    },

    productCustomization: {
      subtitle: "Mobile Experience",
      title: "Digital Spa Presence",
      description:
        "Mobile-first creatives designed to attract and engage wellness audiences.",
      image: ImageConstants.WORKS.BALANCE_SPA.PHONE_MOCKUP_1,
      image_2: ImageConstants.WORKS.BALANCE_SPA.PHONE_MOCKUP_2,
    },

    gridSection: {
      title: "Designing Wellness Experiences",
      description:
        "A collection of brand creatives that represent calm and luxury.",
      images: [
        { image: ImageConstants.WORKS.BALANCE_SPA.PRODUCT_1 },
        { image: ImageConstants.WORKS.BALANCE_SPA.PRODUCT_2 },
        { image: ImageConstants.WORKS.BALANCE_SPA.PRODUCT_3 },
      ],
    },

    laptopMockupSection: {
      backgroundImage: ImageConstants.WORKS.BALANCE_SPA.PRODUCT_1,
      title: "A Brand Built on Relaxation",
      description:
        "Visuals that enhance customer trust and wellness perception.",
    },
  },
  "western-education": {
    title: "Western Education",
    slug: "western-education",
    description:
      "Western Education is an overseas education consultancy helping students achieve global academic opportunities.",

    hero: {
      title: "Western Education",
      industry: "Education · Study Abroad",
      heroImage: ImageConstants.WORKS.WESTERN_EDUCATION.HERO_1,
      description:
        "Guiding students towards international education and global success.",
    },

    overview: {
      title: "Empowering Students for Global Education",
      description:
        "Western Education needed a professional and trustworthy brand presence to connect with students aspiring to study abroad. The focus was on clarity, credibility, and strong visual communication.",
      language: "English",
      timescale: "5–6 weeks",
      launchDate: "2024",
      system: "Branding & Digital Design",
      services: [
        "Brand Identity",
        "Social Media Creatives",
        "Marketing Campaigns",
        "Print Design",
      ],
    },

    brandStats: {
      backgroundImage:
        ImageConstants.WORKS.WESTERN_EDUCATION.HERO_2 ||
        ImageConstants.WORKS.WESTERN_EDUCATION.HERO_1,
      title: "Building Trust Through Clear Communication",
      description:
        "Strong visuals and messaging helped position the brand as a reliable education partner.",
      stats: [
        { value: "1000+", label: "Students Guided" },
        { value: "15+", label: "Partner Universities" },
        { value: "95%", label: "Application Success Rate" },
      ],
    },

    objectives: {
      subtitle: "Project Goals",
      title: "Objectives",
      description:
        "To create a credible and engaging brand identity for student-focused communication.",
      objectives: [
        {
          title: "Trust Building",
          description: "Create confidence among students and parents.",
        },
        {
          title: "Clear Messaging",
          description: "Simplify complex education processes visually.",
        },
        {
          title: "Brand Consistency",
          description: "Maintain uniform branding across platforms.",
        },
      ],
    },

    challenges: {
      backgroundImage:
        ImageConstants.WORKS.WESTERN_EDUCATION.CONTAINER_BANNER_1,
      subtitle: "What We Solved",
      title: "Challenges",
      description: "Balancing informative content with engaging design.",
      challenges: [
        {
          title: "Information Density",
          description: "Presenting large amounts of data clearly.",
        },
        {
          title: "Student Engagement",
          description: "Designing youth-friendly visuals.",
        },
      ],
    },

    uxDesign: {
      subtitle: "Visual Strategy",
      title: "Education-Focused Design",
      backgroundImage:
        ImageConstants.WORKS.WESTERN_EDUCATION.HERO_2 ||
        ImageConstants.WORKS.WESTERN_EDUCATION.HERO_1,
      description: "Clean layouts and structured visuals for clarity.",
      features: [
        {
          image: ImageConstants.WORKS.WESTERN_EDUCATION.PRODUCT_1,
          title: "Social Media Creatives",
          description: "Informative posts designed for students.",
        },
        {
          image: ImageConstants.WORKS.WESTERN_EDUCATION.PRODUCT_2,
          title: "Promotional Banners",
          description: "High-impact admission campaigns.",
        },
        {
          image: ImageConstants.WORKS.WESTERN_EDUCATION.PRODUCT_3,
          title: "Print Materials",
          description: "Brochures and flyers for offline marketing.",
        },
        {
          image: ImageConstants.WORKS.WESTERN_EDUCATION.PRODUCT_4,
          title: "Campaign Visuals",
          description: "Event and intake campaigns.",
        },
      ],
    },

    productCustomization: {
      subtitle: "Mobile Presence",
      title: "Student-Centric Digital Creatives",
      description: "Optimized visuals for mobile-first student audiences.",
      image: ImageConstants.WORKS.WESTERN_EDUCATION.PHONE_MOCKUP_1,
      image_2: ImageConstants.WORKS.WESTERN_EDUCATION.PHONE_MOCKUP_2,
    },

    gridSection: {
      title: "Creative Education Campaigns",
      description: "Designs that inspire students to take the next step.",
      images: [
        { image: ImageConstants.WORKS.WESTERN_EDUCATION.PRODUCT_1 },
        { image: ImageConstants.WORKS.WESTERN_EDUCATION.PRODUCT_2 },
        { image: ImageConstants.WORKS.WESTERN_EDUCATION.PRODUCT_3 },
      ],
    },

    laptopMockupSection: {
      backgroundImage: ImageConstants.WORKS.WESTERN_EDUCATION.PRODUCT_1,
      title: "Designing Educational Impact",
      description: "Strong visuals supporting student success journeys.",
    },
  },
  "mondial-express": {
    title: "Mondial Express",
    slug: "mondial-express",
    description:
      "Mondial Express is a logistics and courier service specializing in fast and reliable deliveries.",

    hero: {
      title: "Mondial Express",
      industry: "Logistics · Courier Services",
      heroImage: ImageConstants.WORKS.MONDIAL_EXPRESS.HERO_1,
      description: "Delivering speed, reliability, and trust worldwide.",
    },

    overview: {
      title: "Logistics Powered by Smart Design",
      description:
        "The project focused on creating a bold and professional visual identity that communicates speed and reliability.",
      language: "English",
      timescale: "4 weeks",
      launchDate: "2024",
      system: "Branding & Marketing Design",
      services: [
        "Brand Identity",
        "Social Media Design",
        "Print Advertising",
        "Promotional Creatives",
      ],
    },

    brandStats: {
      backgroundImage:
        ImageConstants.WORKS.MONDIAL_EXPRESS.HERO_2 ||
        ImageConstants.WORKS.MONDIAL_EXPRESS.HERO_1,
      title: "Speed Meets Visual Precision",
      description: "Designs that reinforce reliability and trust.",
      stats: [
        { value: "24/7", label: "Delivery Support" },
        { value: "30+", label: "Service Locations" },
        { value: "99%", label: "On-Time Delivery Rate" },
      ],
    },

    objectives: {
      subtitle: "Project Goals",
      title: "Objectives",
      description: "To visually communicate speed and professionalism.",
      objectives: [
        {
          title: "Brand Recognition",
          description: "Create a strong logistics identity.",
        },
        {
          title: "Customer Trust",
          description: "Reinforce reliability visually.",
        },
        {
          title: "Marketing Impact",
          description: "High-visibility promotional designs.",
        },
      ],
    },

    challenges: {
      backgroundImage: ImageConstants.WORKS.MONDIAL_EXPRESS.CONTAINER_BANNER_1,
      subtitle: "What We Solved",
      title: "Challenges",
      description: "Communicating logistics efficiency visually.",
      challenges: [
        {
          title: "Speed Representation",
          description: "Designing visuals that feel fast.",
        },
        {
          title: "Brand Consistency",
          description: "Unified look across platforms.",
        },
      ],
    },

    uxDesign: {
      subtitle: "Design System",
      title: "Logistics Branding",
      backgroundImage:
        ImageConstants.WORKS.MONDIAL_EXPRESS.HERO_2 ||
        ImageConstants.WORKS.MONDIAL_EXPRESS.HERO_1,
      description: "Bold typography and structured layouts.",
      features: [
        {
          image: ImageConstants.WORKS.MONDIAL_EXPRESS.PRODUCT_1,
          title: "Social Media Ads",
          description: "High-impact delivery promotions.",
        },
        {
          image: ImageConstants.WORKS.MONDIAL_EXPRESS.PRODUCT_2,
          title: "Print Campaigns",
          description: "Courier service advertising.",
        },
        {
          image: ImageConstants.WORKS.MONDIAL_EXPRESS.PRODUCT_3,
          title: "Brand Materials",
          description: "Stationery and brand assets.",
        },
        {
          image: ImageConstants.WORKS.MONDIAL_EXPRESS.PRODUCT_4,
          title: "Campaign Creatives",
          description: "Offer-based designs.",
        },
      ],
    },

    productCustomization: {
      subtitle: "Mobile Ads",
      title: "Delivery Campaign Creatives",
      description: "Mobile-first designs for courier promotions.",
      image: ImageConstants.WORKS.MONDIAL_EXPRESS.PHONE_MOCKUP_1,
      image_2: ImageConstants.WORKS.MONDIAL_EXPRESS.PHONE_MOCKUP_2,
    },
    gridSection: {
      title: "Delivering Logistics with Precision",
      description:
        "Visual assets designed to reinforce speed, reliability, and trust across logistics platforms.",
      images: [
        { image: ImageConstants.WORKS.MONDIAL_EXPRESS.PRODUCT_1 },
        { image: ImageConstants.WORKS.MONDIAL_EXPRESS.PRODUCT_2 },
        { image: ImageConstants.WORKS.MONDIAL_EXPRESS.PRODUCT_3 },
      ],
    },

    laptopMockupSection: {
      backgroundImage: ImageConstants.WORKS.MONDIAL_EXPRESS.PRODUCT_1,
      title: "Reliable Logistics, Strong Visual Identity",
      description:
        "Consistent branding that communicates efficiency and professionalism.",
    },
  },
  "bethel-ag": {
    title: "Bethel AG",
    slug: "bethel-ag",
    description:
      "Bethel AG is a faith-based organization focused on community outreach, events, and spiritual growth.",

    hero: {
      title: "Bethel AG",
      industry: "Religious Organization · Community",
      heroImage: ImageConstants.WORKS.BETHEL_AG.HERO_1,
      description:
        "Connecting people through faith-driven events and meaningful community engagement.",
    },

    overview: {
      title: "Faith-Centered Visual Communication",
      description:
        "The project focused on creating visually inspiring designs that communicate faith, unity, and community values while maintaining clarity and consistency across platforms.",
      language: "English",
      timescale: "4–5 weeks",
      launchDate: "2024",
      system: "Creative Branding",
      services: [
        "Brand Design",
        "Event Creatives",
        "Social Media Graphics",
        "Print Materials",
      ],
    },

    brandStats: {
      backgroundImage:
        ImageConstants.WORKS.BETHEL_AG.HERO_2 ||
        ImageConstants.WORKS.BETHEL_AG.HERO_1,
      title: "Designing for Faith and Community Impact",
      description:
        "Consistent visuals helped strengthen community recognition and participation.",
      stats: [
        { value: "50+", label: "Events Designed" },
        { value: "10k+", label: "Community Reach" },
        { value: "100%", label: "Brand Consistency" },
      ],
    },

    objectives: {
      subtitle: "Project Goals",
      title: "Objectives",
      description:
        "To visually communicate faith-based messages clearly and effectively.",
      objectives: [
        {
          title: "Community Engagement",
          description:
            "Increase event participation through compelling visuals.",
        },
        {
          title: "Faith Representation",
          description: "Reflect spiritual values through design.",
        },
        {
          title: "Consistency",
          description: "Maintain a unified look across all media.",
        },
      ],
    },

    challenges: {
      backgroundImage: ImageConstants.WORKS.BETHEL_AG.CONTAINER_BANNER_1,
      subtitle: "What We Solved",
      title: "Challenges",
      description: "Balancing spiritual depth with modern design.",
      challenges: [
        {
          title: "Message Clarity",
          description: "Presenting messages without visual clutter.",
        },
        {
          title: "Audience Diversity",
          description: "Designing for all age groups.",
        },
      ],
    },

    uxDesign: {
      subtitle: "Creative Direction",
      title: "Event & Faith Design",
      backgroundImage:
        ImageConstants.WORKS.BETHEL_AG.HERO_2 ||
        ImageConstants.WORKS.BETHEL_AG.HERO_1,
      description: "Calm color palettes and meaningful typography.",
      features: [
        {
          image: ImageConstants.WORKS.BETHEL_AG.PRODUCT_1,
          title: "Event Posters",
          description: "Inspirational church event creatives.",
        },
        {
          image: ImageConstants.WORKS.BETHEL_AG.PRODUCT_2,
          title: "Social Media Posts",
          description: "Engaging weekly designs.",
        },
        {
          image: ImageConstants.WORKS.BETHEL_AG.PRODUCT_3,
          title: "Campaign Creatives",
          description: "Special programs and campaigns.",
        },
        {
          image: ImageConstants.WORKS.BETHEL_AG.PRODUCT_4,
          title: "Announcements",
          description: "Clear and readable announcements.",
        },
      ],
    },

    productCustomization: {
      subtitle: "Digital Reach",
      title: "Faith-Based Social Creatives",
      description: "Optimized designs for online ministry engagement.",
      image: ImageConstants.WORKS.BETHEL_AG.PHONE_MOCKUP_1,
      image_2: ImageConstants.WORKS.BETHEL_AG.PHONE_MOCKUP_2,
    },
    gridSection: {
      title: "Designing Faith-Based Experiences",
      description:
        "Creative assets crafted to strengthen spiritual connection and community engagement.",
      images: [
        { image: ImageConstants.WORKS.BETHEL_AG.PRODUCT_1 },
        { image: ImageConstants.WORKS.BETHEL_AG.PRODUCT_2 },
        { image: ImageConstants.WORKS.BETHEL_AG.PRODUCT_3 },
      ],
    },

    laptopMockupSection: {
      backgroundImage: ImageConstants.WORKS.BETHEL_AG.LAP_MOCKUP,
      title: "Faith, Community & Visual Consistency",
      description:
        "Designs that support meaningful communication across church platforms.",
    },
  },
  "dr-anjali": {
    title: "Dr Anjali",
    slug: "dr-anjali",
    description:
      "Dr Anjali is a healthcare professional brand dedicated to building patient trust and promoting wellness through clear, approachable, and visually consistent communication. The brand combines medical professionalism with compassionate design to enhance patient engagement and confidence.",

    hero: {
      title: "Dr Anjali",
      industry: "Healthcare · Medical Practice",
      heroImage: ImageConstants.WORKS.DR_ANJALI.HERO_1,
      description:
        "A healthcare brand that communicates compassion, trust, and professionalism through clear design. Our aim was to visually represent the brand’s commitment to patient care and medical excellence.",
    },

    overview: {
      title: "Healthcare Communication Through Design",
      description:
        "The project focused on creating a visual identity that bridges the gap between medical professionalism and patient approachability. The goal was to design calm, trustworthy visuals for social media, print, and digital communication that resonate with patients, providing clarity, education, and reassurance.",
      language: "English",
      timescale: "4 Weeks",
      launchDate: "2024",
      system: "Medical Branding & Communication",
      services: [
        "Comprehensive Brand Identity Design",
        "Social Media Creative Design",
        "Patient Awareness Campaigns",
        "Print Materials & Collateral Design",
        "Digital Communication Templates",
      ],
    },

    brandStats: {
      backgroundImage:
        ImageConstants.WORKS.DR_ANJALI.HERO_2 ||
        ImageConstants.WORKS.DR_ANJALI.HERO_1,
      title: "Designing Trust in Healthcare",
      description:
        "A consistent and professional visual identity helped Dr Anjali build patient confidence and enhance engagement across multiple channels. The structured design system allowed the clinic to communicate medical information clearly while maintaining a friendly and approachable tone.",
      stats: [
        { value: "5000+", label: "Patients Reached" },
        { value: "100%", label: "Consistent Brand Professionalism" },
        { value: "4.9★", label: "Average Patient Satisfaction Rating" },
      ],
    },

    objectives: {
      subtitle: "Project Goals",
      title: "Objectives",
      description:
        "The key objective was to create a medical brand identity that feels credible, approachable, and reassuring. Each visual and communication element was designed to reinforce trust, simplify complex medical information, and provide a seamless digital presence.",
      objectives: [
        {
          title: "Patient Trust",
          description:
            "Through careful color selection, typography, and layout design, we aimed to create visuals that feel safe, reliable, and professional, building a sense of security for patients at every touchpoint.",
        },
        {
          title: "Clear Health Awareness",
          description:
            "We focused on designing educational content that simplifies medical information for patients. Infographics, awareness posts, and health tips were crafted to be visually digestible and informative, promoting better understanding and engagement.",
        },
        {
          title: "Strong Digital Presence",
          description:
            "A cohesive social media and digital presence was established with consistent templates, layouts, and tone. This approach ensures that the clinic communicates a unified identity, enhancing recognition and trust across all platforms.",
        },
      ],
    },

    challenges: {
      backgroundImage: ImageConstants.WORKS.DR_ANJALI.CONTAINER_BANNER_1,
      subtitle: "What We Solved",
      title: "Challenges",
      description:
        "Designing for healthcare requires careful attention to accuracy, tone, and patient perception. Balancing clinical credibility with visual simplicity was critical to ensure that medical content was easy to understand without compromising professionalism.",
      challenges: [
        {
          title: "Medical Accuracy",
          description:
            "Ensuring that all visuals, infographics, and awareness content conveyed correct information was a priority. We collaborated with medical experts to confirm content accuracy and visual representation of health information.",
        },
        {
          title: "Tone & Approachability",
          description:
            "Healthcare design often risks appearing too clinical or distant. We carefully selected a color palette, fonts, and imagery that are professional yet approachable, making patients feel welcomed and supported.",
        },
      ],
    },

    uxDesign: {
      subtitle: "Visual Language",
      title: "Medical Branding System",
      backgroundImage:
        ImageConstants.WORKS.DR_ANJALI.HERO_2 ||
        ImageConstants.WORKS.DR_ANJALI.HERO_1,
      description:
        "The branding system was designed as a flexible, patient-centric framework to ensure visual consistency across all touchpoints. Clean layouts, calm color tones, and consistent typography were implemented to create a reassuring, professional experience for patients.",
      features: [
        {
          image: ImageConstants.WORKS.DR_ANJALI.PRODUCT_1,
          title: "Patient Awareness Posts",
          description:
            "Educational creatives to inform patients about common health issues, preventive care, and wellness tips, designed to be visually engaging and easy to comprehend.",
        },
        {
          image: ImageConstants.WORKS.DR_ANJALI.PRODUCT_2,
          title: "Clinic Promotions",
          description:
            "Visual content highlighting specific treatments, services, and events at the clinic, ensuring clarity and appeal while maintaining professional aesthetics.",
        },
        {
          image: ImageConstants.WORKS.DR_ANJALI.PRODUCT_3,
          title: "Health Tips & Guidance",
          description:
            "Quick, digestible tips designed to empower patients with actionable knowledge, fostering trust and positioning Dr Anjali as a reliable source of health guidance.",
        },
        {
          image: ImageConstants.WORKS.DR_ANJALI.PRODUCT_4,
          title: "Brand Visuals & Identity",
          description:
            "A consistent visual language applied across all digital and physical touchpoints, reinforcing recognition and enhancing brand credibility in the healthcare space.",
        },
      ],
    },

    productCustomization: {
      subtitle: "Mobile-First Communication",
      title: "Patient-Focused Creatives",
      description:
        "With the majority of patients accessing information via mobile devices, all content was designed with a mobile-first approach. Layouts, readability, and user experience were optimized for smartphone screens without compromising visual quality or clarity.",
      image: ImageConstants.WORKS.DR_ANJALI.PHONE_MOCKUP_1,
      image_2: ImageConstants.WORKS.DR_ANJALI.PHONE_MOCKUP_2,
    },

    gridSection: {
      title: "Healthcare Communication Through Design",
      description:
        "A curated selection of patient-focused creatives showcasing clarity, trust, and accessibility in medical communication. Each design reinforces the clinic’s commitment to educating and engaging patients effectively.",
      images: [
        { image: ImageConstants.WORKS.DR_ANJALI.TABLET_MOCKUP },
        { image: ImageConstants.WORKS.DR_ANJALI.PRODUCT_1 },
        { image: ImageConstants.WORKS.DR_ANJALI.PRODUCT_3 },
      ],
    },

    laptopMockupSection: {
      backgroundImage: ImageConstants.WORKS.DR_ANJALI.LAP_MOCKUP,
      title: "Designing Trust in Healthcare",
      description:
        "A comprehensive design system that ensures patient-focused clarity, consistency, and professional aesthetics. By combining calm color schemes, clean layouts, and a patient-centric approach, the brand successfully communicates credibility and care.",
    },
  },

  "jk-diaries": {
    title: "JK Diaries",
    slug: "jk-diaries",
    description:
      "JK Diaries specializes in customized corporate diaries and branded stationery.",

    hero: {
      title: "JK Diaries",
      industry: "Printing · Corporate Branding",
      heroImage: ImageConstants.WORKS.JK_DIARIES.HERO_1,
      description: "Premium customized diaries for corporate identity.",
    },

    overview: {
      title: "Turning Print into Brand Experience",
      description:
        "The project focused on showcasing product quality and customization options through strong visuals.",
      language: "English",
      timescale: "5 weeks",
      launchDate: "2024",
      system: "Print Branding",
      services: [
        "Product Design",
        "Advertising Creatives",
        "Social Media Design",
        "Print Campaigns",
      ],
    },

    brandStats: {
      backgroundImage:
        ImageConstants.WORKS.JK_DIARIES.HERO_2 ||
        ImageConstants.WORKS.JK_DIARIES.HERO_1,
      title: "Designing Corporate Identity Through Print",
      description: "Visual storytelling enhanced product value.",
      stats: [
        { value: "100+", label: "Corporate Clients" },
        { value: "500+", label: "Custom Designs" },
        { value: "10+", label: "Years Experience" },
      ],
    },

    objectives: {
      subtitle: "Project Goals",
      title: "Objectives",
      description:
        "To visually highlight customization quality and brand reliability.",
      objectives: [
        {
          title: "Product Showcase",
          description: "Highlight diary quality and finish.",
        },
        {
          title: "Brand Value",
          description: "Strengthen corporate appeal.",
        },
        {
          title: "Market Reach",
          description: "Boost visibility through ads.",
        },
      ],
    },

    challenges: {
      backgroundImage: ImageConstants.WORKS.JK_DIARIES.CONTAINER_BANNER_1,
      subtitle: "What We Solved",
      title: "Challenges",
      description: "Showcasing print quality digitally.",
      challenges: [
        {
          title: "Texture Representation",
          description: "Visually expressing premium materials.",
        },
        {
          title: "Customization Clarity",
          description: "Presenting multiple options clearly.",
        },
      ],
    },

    uxDesign: {
      subtitle: "Product Design",
      title: "Corporate Print Visuals",
      backgroundImage: ImageConstants.WORKS.JK_DIARIES.HERO_2,
      description: "High-detail product-focused designs.",
      features: [
        {
          image: ImageConstants.WORKS.JK_DIARIES.PRODUCT_1,
          title: "Diary Mockups",
          description: "Realistic product presentations.",
        },
        {
          image: ImageConstants.WORKS.JK_DIARIES.PRODUCT_2,
          title: "Customization Options",
          description: "Multiple branding variations.",
        },
        {
          image: ImageConstants.WORKS.JK_DIARIES.PRODUCT_3,
          title: "Advertising Creatives",
          description: "Promotional designs.",
        },
        {
          image: ImageConstants.WORKS.JK_DIARIES.PRODUCT_4,
          title: "Graphic Design",
          description: "Supporting brand visuals.",
        },
      ],
    },

    productCustomization: {
      subtitle: "Print Excellence",
      title: "Customized Diary Designs",
      description: "Premium corporate diary customization.",
      image: ImageConstants.WORKS.JK_DIARIES.PHONE_MOCKUP_1,
      image_2: ImageConstants.WORKS.JK_DIARIES.PHONE_MOCKUP_2,
    },
    gridSection: {
      title: "Corporate Print Excellence",
      description:
        "Showcasing premium diary designs and corporate branding solutions.",
      images: [
        { image: ImageConstants.WORKS.JK_DIARIES.PRODUCT_1 },
        { image: ImageConstants.WORKS.JK_DIARIES.PRODUCT_2 },
        { image: ImageConstants.WORKS.JK_DIARIES.PRODUCT_3 },
      ],
    },

    laptopMockupSection: {
      backgroundImage: ImageConstants.WORKS.JK_DIARIES.PRODUCT_1,
      title: "Print That Reflects Brand Identity",
      description:
        "High-quality visuals that elevate corporate stationery branding.",
    },
  },
};

export const getPortfolioDetailBySlug = (
  slug: string
): PortfolioDetailContent | null => {
  return PORTFOLIO_DETAILS[slug] || null;
};

export const getAllPortfolioSlugs = (): string[] => {
  return Object.keys(PORTFOLIO_DETAILS);
};

export function getAllPortfolioItems(): PortfolioDetailContent[] {
  return Object.values(PORTFOLIO_DETAILS);
}
