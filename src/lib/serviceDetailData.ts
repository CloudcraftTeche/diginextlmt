// Service Detail Data Structure
export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetailContent {
  slug: string;
  title: string;
  subtitle: string;
  heroDescription: string;
  ctaTitle: string;
  ctaDescription: string;
  servicesOffered: {
    title: string;
    description: string;
    services: {
      title: string;
      description: string;
    }[];
  };
  process: {
    title: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  faqs: {
    description: string;
    items: ServiceFAQ[];
  };
}

export const SERVICE_DETAILS: Record<string, ServiceDetailContent> = {
  "ui-ux-design": {
    slug: "ui-ux-design",
    title: "UI/UX Design Company in Dubai",
    subtitle: "For Improved User Retention and Lower Bounce Rates",
    heroDescription:
      "We are UI/UX design experts focused on the user experience by incorporating research and user-centric innovations. We define each stage of the user's life cycle to ensure we meet the needs of the target audience.",
    ctaTitle: "Let's Build Something Extraordinary",
    ctaDescription:
      "We love transforming ideas into engaging interfaces that give your brand more power. Are you ready to improve your online experience? Let's talk!",
    servicesOffered: {
      title: "UI/UX Design Services",
      description:
        "We adopt a rapid and reliable approach with the best UI/UX Design services for organisations to achieve their business goals. Eager to know what our expertise can contribute to your business? Here we go!",
      services: [
        {
          title: "User Experience Design (UX)",
          description:
            "We make designs that are easy to understand and based on your target audience's mindset, so that browsing is smooth and interactions are meaningful.",
        },
        {
          title: "User Interface Design (UI)",
          description:
            "Our expert UI/UX developers create interfaces that are both attractive as well as useful, which keeps visitors coming back.",
        },
        {
          title: "Cross-platform Experience Design",
          description:
            "We make sure that the design is aligned across all the platforms to ensure uniformity in the customer experience.",
        },
        {
          title: "Interaction Design",
          description:
            "Designing interactive digital products, environments, systems, and services according to user behaviour.",
        },
        {
          title: "UI/UX Consulting & Auditing",
          description:
            "Get the best consulting on UI/UX design services to improve the design and usability of your digital products.",
        },
        {
          title: "Design System",
          description:
            "Systematic approach to design and ensure consistency, efficiency, and scalability across different platforms.",
        },
      ],
    },
    process: {
      title: "Our Design Process",
      steps: [
        {
          title: "Discovery & Research",
          description: "Understanding your business, users, and goals.",
        },
        {
          title: "Concept Idea",
          description: "Generating creative and functional design concepts.",
        },
        {
          title: "Wireframing & Structure",
          description: "Structuring layouts and defining navigation flow.",
        },
        {
          title: "Design",
          description:
            "Creating visually compelling interfaces that improve usability.",
        },
        {
          title: "Interactive Prototyping",
          description: "Bringing designs to life with detailed prototypes.",
        },
        {
          title: "User Testing & Feedback",
          description: "Testing and refining based on real user input.",
        },
        {
          title: "Design Handoff",
          description:
            "Smooth collaboration with developers for pixel-perfect delivery.",
        },
        {
          title: "Performance Analysis & Integration",
          description: "Tracking user engagement and improving continuously.",
        },
      ],
    },
    faqs: {
      description:
        "At DigiNext, we believe that good design is more than just how things look. It is about creating experiences that connect, engage, and inspire people. As one of the best UI/UX web design companies in Dubai, we work hard to develop designs that not only look great but also improve performance, keep visitors on your site, and reduce bounce rates.",
      items: [
        {
          question: "What exactly does a UX designer do?",
          answer:
            "A UX service designer's job is to make sure that users have smooth and easy experiences with all of their digital touchpoints. At DigiNext, our UX designers analyze user behavior, map customer journeys, and make interactions that are smooth and easy to use on your website or app.",
        },
        {
          question:
            "What types of applications or platforms do you design for?",
          answer:
            "As a leading UI/UX Web design company in Dubai, we design everything from eCommerce sites and corporate websites to mobile apps and enterprise dashboards. Our UI/UX developers ensure each design is responsive, fast, and match with your business goals.",
        },
        {
          question: "When is the right time to conduct a UI/UX audit?",
          answer:
            "You must conduct a UI/UX audit if you see that your bounce rates are high, your engagement is low, or your conversions are going down. It is also a good idea to do this before you release a new version of your app or website. Our UI/UX design services company helps identify usability gaps and opportunities for better performance.",
        },
        {
          question: "Can you evaluate the UX of my website or mobile app?",
          answer:
            "Absolutely! Our team at DigiNext, a top UX/UI designing company, does detailed UX audits to check how easy it is to use, how accessible it is, and how good the overall user experience is of your digital product. We then provide you useful information that can help you make your designs more efficient and your users more satisfied.",
        },
      ],
    },
  },
  "website-design": {
    slug: "website-design",
    title: "Best Web Design Company in Dubai",
    subtitle: "Creating Powerful, Responsive & Conversion-Focused Websites",
    heroDescription:
      "Your website is the first thing people see and at DigiNext, we make it unforgettable. As a leading web design company in Dubai, we make websites that are powerful, responsive, and conversion-focused websites that reflect your brand's personality and help your business grow in a measurable way.",
    ctaTitle: "Let's Build a Website That Works for You",
    ctaDescription:
      "Your website needs to do more than just be present online, it needs to work. Let's talk and make your vision a reality in the digital world.",
    servicesOffered: {
      title: "Website Design Services We Offer",
      description:
        "DigiNext is one of the best web design companies in Dubai. We offer complete website design services that help businesses get more visibility, engagement, and growth. This is how we make your ideas come to life:",
      services: [
        {
          title: "Designing E-Commerce Website",
          description:
            "We create eCommerce websites that are easy to use, work well on mobile devices, and help people shop more easily and make more sales.",
        },
        {
          title: "Designing a Corporate Website",
          description:
            "As a corporate website designing company in Dubai, we make professional, trustworthy, and goal-oriented websites that clearly communicate your brand values and business goals.",
        },
        {
          title: "Dashboards & Applications",
          description:
            "Our team makes user-friendly dashboards and web applications that make complicated business tasks easier while making sure that users have a smooth experience.",
        },
        {
          title: "Custom Website Design",
          description:
            "Your website should be as unique as your business. As a trustworthy web design company in Dubai, we create custom websites that accurately represent your brand and connect with your target audience.",
        },
        {
          title: "Redesigning and revamping a website",
          description:
            "Want to update your online presence? Our website redesign services make your site look better, load faster and are simple to use, which will help your business get more traffic, leads, and sales.",
        },
      ],
    },
    process: {
      title: "Our Web Design Process",
      steps: [
        {
          title: "Discovery & Research",
          description:
            "Understanding your business, goals, and target audience.",
        },
        {
          title: "Wireframe Planning",
          description:
            "Making layouts and user journeys clear and easy to follow.",
        },
        {
          title: "Interactive Prototyping",
          description:
            "Using interactive prototypes to see what the final product will look like.",
        },
        {
          title: "Journey Mapping",
          description:
            "Making navigation easy to understand for smooth interactions.",
        },
        {
          title: "Visual Experience Design",
          description: "Crafting modern, brand-aligned and responsive designs.",
        },
        {
          title: "Development Collaboration",
          description:
            "Ensuring smooth handover and pixel-perfect implementation.",
        },
        {
          title: "Quality Assurance & Testing",
          description: "Validating performance, responsiveness, and usability.",
        },
      ],
    },
    faqs: {
      description:
        "We go beyond just making things look good by using a customer-focused approach and a creative design mindset to make digital experiences which attract, engage and convert. Our website design agency in the UAE offers solutions that not only look great, but also work perfectly on all devices and platforms.",
      items: [
        {
          question: "What is the price of your website design services?",
          answer:
            "The cost of a website design depends on your project's complexity, features and business requirements. We offer flexible prices that are designed to give you the best value and results for your goals.",
        },
        {
          question: "How can I get started with your website design services?",
          answer:
            "Just get in touch with us through our website or contact form, and we will schedule a quick meeting to talk about your ideas. From there, our experts will guide you with every step, from planning to launch.",
        },
        {
          question: "Will my website work well on mobile devices?",
          answer:
            "Yes, for sure! We make sure that every website we design works and looks great on all devices, from smartphones to desktops.",
        },
        {
          question: "Why should I choose you for website design?",
          answer:
            "We are one of the best web design companies in Dubai because we use creativity, technology, and strategy to make websites that help businesses grow. Our designs are fast, focus on the user, and are made to help your brand stand out online.",
        },
      ],
    },
  },
};

// Helper function to get service detail by slug
export const getServiceDetailBySlug = (
  slug: string
): ServiceDetailContent | null => {
  return SERVICE_DETAILS[slug] || null;
};

// Get all available service slugs
export const getAllServiceSlugs = (): string[] => {
  return Object.keys(SERVICE_DETAILS);
};
