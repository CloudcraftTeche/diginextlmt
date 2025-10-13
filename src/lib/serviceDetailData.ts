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
  ctaSection?: {
    title: string;
    description: string;
  };
  imageUrl: string;
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
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    heroDescription:
      "At DigiNext, we believe that good design is more than just how things look. It is about creating experiences that connect, engage, and inspire people. As one of the best UI/UX web design companies in Dubai, we work hard to develop designs that not only look great but also improve performance, keep visitors on your site, and reduce bounce rates.\n\nAs a trusted UI/UX design services company, we combine information based on research and user-focused innovation to define each step of the user journey. Our mission is simple, to create digital experiences that are easy to use and fit perfectly with your business goals and what your customers want.",
    ctaSection: {
      title: "Let's Build Something Extraordinary",
      description:
        "We love transforming ideas into engaging interfaces that give your brand more power. Are you ready to improve your online experience? Let's talk!",
    },
    servicesOffered: {
      title: "Our UI/UX Design Services",
      description:
        "We offer innovative and reliable UI/UX design solutions that help businesses grow faster and do better. Find out how our skills can help your business:",
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
          title: "Designing for multiple platforms",
          description:
            "We make sure that your brand is consistent across all platforms, whether it is the web, mobile, or desktop, so that users have one look and feel.",
        },
        {
          title: "Designing Interactions",
          description:
            "We design environments that make things easier to use and leave a lasting impression by learning how people use them.",
        },
        {
          title: "UI/UX Consulting & Auditing",
          description:
            "As a top UX/UI design company, we offer complete analysis and guidance to help you make your digital platforms easier to use, more consistent in design, and better at what they do.",
        },
        {
          title: "Designing Systems",
          description:
            "We build design systems that can develop and function well to make sure that all of your digital assets look good, work quickly, and are always the same.",
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
        "We plan, work together, and put the user first in our process. We are one of the best UI/UX design companies in Dubai, and we combine creativity and technology to make sure everything goes as planned.",
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
      "Your website is the first thing people see and at DigiNext, we make it unforgettable. As a leading web design company in Dubai, we make websites that are powerful, responsive, and conversion-focused websites that reflect your brand's personality and help your business grow in a measurable way.\n\nWe go beyond just making things look good by using a customer-focused approach and a creative design mindset to make digital experiences which attract, engage and convert. Our website design agency in the UAE offers solutions that not only look great, but also work perfectly on all devices and platforms, even if you are a new business or an established one.",
    ctaSection: {
      title: "Let's Build a Website That Works for You",
      description:
        "Your website needs to do more than just be present online, it needs to work. Let's talk and make your vision a reality in the digital world.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
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
          title: "Research and Investigation",
          description:
            "Recognizing your business, your goals, and the people you aim to reach.",
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
        "At DigiNext, every project uses a strategic, research-based design technique to make sure it works, is creative, and has an outcome.",
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
  "ecommerce-development": {
    slug: "ecommerce-development",
    title: "E-Commerce Web Development Company in Dubai",
    subtitle: "Turning Online Stores into Powerful Growth Engines",
    heroDescription:
      "We make online stores into powerful growth engines at DigiNext. We are one of the best ecommerce web design companies in Dubai. We make ecommerce websites that are smooth, safe and able to grow with your business. Our user-friendly designs keep your customers interested and your sales growing by making it easy for them to use and checkout.\n\nAs an expert ecommerce website development agency in Dubai, we understand that every click matters. We combine creativity and functionality to make ecommerce platforms that not only look great but work perfectly on all devices, browsers, and customer journeys.",
    ctaSection: {
      title: "Let's work together to build your online store",
      description:
        "Your eCommerce site should do more than just display products, it should also sell them. Let's talk and make a digital store that boosts sales, loyalty, and growth.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    servicesOffered: {
      title: "Our E-Commerce Website Design & Development Services",
      description:
        "DigiNext is one of the best eCommerce website design companies in the UAE. We offer a full range of eCommerce website design services that are customized for your business needs.",
      services: [
        {
          title: "Custom Ecommerce Website Design",
          description:
            "We build custom online stores that show off your brand identity and make shopping fun and easy.",
        },
        {
          title: "Ecommerce Web Development",
          description:
            "As a trusted ecommerce web development company, we create websites that are responsive, safe, fast, and high-performance websites optimized for growth and sales.",
        },
        {
          title: "Platform Integration & Optimization",
          description:
            "Our experts make sure that everything works together smoothly and at its best, whether you are using Shopify, WooCommerce, Magento, or a custom CMS.",
        },
        {
          title: "Ecommerce Website Management Services",
          description:
            "We offer ongoing management, maintenance, and updates in order to keep your ecommerce platform functioning smoothly. This makes sure that it always works well and is secured.",
        },
        {
          title: "UI/UX for Ecommerce",
          description:
            "We make user interfaces and shopping flows that are easy to use and increase engagement, which lowers cart abandonment and raises conversion rates.",
        },
        {
          title: "Payment Gateway and Security",
          description:
            "Our ecommerce development agency makes sure that payment options are safe, fast, and easy to use, with the highest levels of security and compliance.",
        },
      ],
    },
    process: {
      title: "Our E-Commerce Development Process",
      steps: [
        {
          title: "Research & Development",
          description:
            "Understanding your business, the goals you want to achieve, and the audience you want to reach.",
        },
        {
          title: "Design & Wireframes",
          description:
            "Crafting the structure and visuals of your online store.",
        },
        {
          title: "Development",
          description:
            "Building a secure, scalable, and fast Ecommerce platform.",
        },
        {
          title: "Integration & Testing",
          description:
            "Connecting APIs, payment gateways, and running quality tests.",
        },
        {
          title: "Launch & Optimization",
          description: "Going live and continuously improving performance.",
        },
      ],
    },
    faqs: {
      description:
        "As one of the best Ecommerce website design companies in Dubai, we help brands sell smarter and grow faster. We know a lot about Ecommerce web development, so we can make sure your customers have a smooth shopping experience from the first click to the last.",
      items: [
        {
          question:
            "How much does it cost to develop an Ecommerce website in Dubai?",
          answer:
            "The size, features, and platform requirements of your project will determine how much it will cost to build an Ecommerce website. After we learn about your specific needs and goals, we provide you personalized quotes.",
        },
        {
          question: "How long does it take to build an Ecommerce website?",
          answer:
            "A fully functional Ecommerce website usually takes 4 to 8 weeks to build, depending on how complicated it is, what design you want, and what integrations you need. Our team makes sure a smooth process with on time delivery.",
        },
        {
          question: "Will my Ecommerce website be mobile-friendly?",
          answer:
            "Of course. Every website we make is 100% responsive, so your customers will have a smooth shopping experience on all of their devices, including desktops, tablets and phones.",
        },
        {
          question: "Can DigiNext handle website maintenance and updates?",
          answer:
            "Yes, we manage your entire Ecommerce website, including updates, security checks, content uploads, and performance monitoring, to make sure your store runs perfectly.",
        },
      ],
    },
  },
  "app-development": {
    slug: "app-development",
    title: "Native & Hybrid App Development Company in Dubai",
    subtitle: "Building Mobile Experiences That Drive Engagement & Growth",
    heroDescription:
      "In a world where mobile devices are the most important, your app can be the first thing customers see. We help you make mobile apps that are powerful, engaging, and function effectively for your business. As a leading hybrid app development company in Dubai, we deliver smooth digital experiences across all platforms that boost user engagement and growth.\n\nOur expert developers make sure your brand stays connected with users anytime, anywhere, no matter whether it is native app development for performance-driven apps or hybrid app development for cost-effective, cross-platform solutions.",
    imageUrl:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
    servicesOffered: {
      title: "Our Native & Hybrid App Development Services",
      description:
        "We use strategy, creativity, and technology to make apps that get people engaged and help your business do better.",
      services: [
        {
          title: "Native App Development",
          description:
            "Make apps that are fast, useful, and easy to use, and that work well on both iOS and Android devices.",
        },
        {
          title: "Hybrid App Development",
          description:
            "We develop apps that work perfectly on many platforms by using advanced frameworks. This saves time and money on development without compromising quality.",
        },
        {
          title: "UI/UX Design for Mobile Apps",
          description:
            "We create user-friendly interfaces that make it easy to navigate and keep users engaged with your app for longer.",
        },
        {
          title: "App Testing & Quality Assurance",
          description:
            "We put every app through a lot of testing to make sure it works well, is safe and is functional on all devices.",
        },
        {
          title: "App Maintenance & Support",
          description:
            "We do not stop helping after deployment. We continue to provide updates, monitoring and optimizing to make sure your long-term success.",
        },
      ],
    },
    process: {
      title: "Our Development Process",
      steps: [
        {
          title: "Research & Strategy",
          description:
            "Understanding your business objectives, audience, and market needs.",
        },
        {
          title: "Design & Prototyping",
          description:
            "Crafting user-friendly interfaces and validating user flows.",
        },
        {
          title: "Development",
          description:
            "Building robust native and hybrid mobile applications using the latest technologies.",
        },
        {
          title: "Testing & QA",
          description:
            "Ensuring error-free performance and smooth user experience.",
        },
        {
          title: "Deployment & Support",
          description:
            "Launching your app successfully and providing continuous maintenance.",
        },
      ],
    },
    faqs: {
      description:
        "Work with a team that combines creativity, strategy, and technical skill to make hybrid mobile apps that work perfectly and have a lasting effect.",
      items: [
        {
          question:
            "What is the difference between native and hybrid app development?",
          answer:
            "Native apps are made for only one platform, like iOS or Android. Hybrid apps, on the other hand, work on many platforms with one codebase, which saves time and money.",
        },
        {
          question: "How long does it take to develop a hybrid mobile app?",
          answer:
            "The time it takes to make an app depends on how complicated it is and what features it has. Generally, a hybrid app can be made faster than a native app because it uses shared code and has a faster development process.",
        },
        {
          question: "Will my hybrid app perform as smoothly as a native app?",
          answer:
            "Yes, with the right technology stack and optimization, hybrid apps can work almost as well as native apps and give users a smooth experience on all devices.",
        },
        {
          question: "Why should I partner with DigiNext?",
          answer:
            "At DigiNext, we use our technical expertise, design skills and creativity to make scalable hybrid apps that fit your business goals perfectly.",
        },
      ],
    },
  },
  "android-development": {
    slug: "android-development",
    title: "Top Android App Development Company in Dubai",
    subtitle: "Custom, High-Performance Android Apps for Your Business",
    heroDescription:
      "We take ideas and turn them into powerful Android apps that help businesses get real results. We are one of the best Android app development companies in Dubai. We make custom, high-performing, and adaptable mobile apps that fit your business requirements. Our expert developers use both creativity and technology to make apps that are easy to use, safe, and designed to make users satisfied.\n\nFrom idea to launch, our team makes sure that every app we build not only works perfectly but also boosts your brand presence. We offer advanced Android app development in Dubai to help you stay ahead in a modern mobile world, no matter if you are a new business or an established one.",
    imageUrl:
      "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80",
    servicesOffered: {
      title: "Android App Development Services We Offer",
      description:
        "We bring new ideas, useful features, and excellent design to every project. As one of the most trusted Android development companies in Dubai, we offer a full range of services to help your business grow in the mobile world.",
      services: [
        {
          title: "Custom Android App Development",
          description:
            "We make custom Android apps which align with your business goals and work great on all devices.",
        },
        {
          title: "Enterprise Android Solutions",
          description:
            "Our Android apps for businesses make things run more smoothly, boost productivity, and improve communication within the organization.",
        },
        {
          title: "E-commerce Android App Development",
          description:
            "Mobile shopping experiences that are safe, easy to use and optimized for performance can help your online store reach more people and make more sales.",
        },
        {
          title: "App UI/UX Design",
          description:
            "Our design experts make interfaces that are organized, easy to use, and look attractive. This makes it easy to navigate and engage with the site.",
        },
        {
          title: "App Maintenance & Support",
          description:
            "We monitor, test and optimize your app all the time to make sure it stays up-to-date, safe, and fast.",
        },
      ],
    },
    process: {
      title: "Our Development Process",
      steps: [
        {
          title: "Requirement Analysis",
          description: "Understanding your vision, goals, and audience.",
        },
        {
          title: "UI/UX Design",
          description: "Creating intuitive and engaging user experiences.",
        },
        {
          title: "App Development",
          description:
            "Building feature-rich, strong, and adaptable Android apps.",
        },
        {
          title: "Testing & QA",
          description:
            "Ensuring flawless performance and functionality across devices.",
        },
        {
          title: "Deployment",
          description:
            "Publishing your app on the Play Store with complete optimization.",
        },
        {
          title: "Post-Launch Support",
          description:
            "Monitoring, updating, and improving based on real-time feedback.",
        },
      ],
    },
    faqs: {
      description:
        "DigiNext is more than just an Android application development company in Dubai, we are your technology partner in digital transformation. We develop Android apps that help your business grow, work well, and be trustworthy. Our goal is to be the best at what we do and to be innovative.",
      items: [
        {
          question: "How much does Android app development cost in Dubai?",
          answer:
            "The price of making an Android app in Dubai depends on how complicated it is, what features it needs, and design requirements. At DigiNext, we provide you a custom price after we understand your project's goals and scope.",
        },
        {
          question: "Do you develop apps for all Android devices?",
          answer:
            "Yes, our team makes sure your app works smoothly across all Android devices, including smartphones, tablets, and wearables, delivering consistent performance and a smooth user experience.",
        },
        {
          question: "How long does it take to build an Android app?",
          answer:
            "The period of time for development depends on how complicated and feature-rich the app is. A normal Android app goes from concept to launch in 6 to 12 weeks, with the updates as needed.",
        },
        {
          question: "Why choose DigiNext for Android app development?",
          answer:
            "We make Android apps that get people engaged and help businesses grow by combining great design, advanced technology, and a deep understanding of the market. As a trusted Android app development company in Dubai, we make sure quality, reliability, and results.",
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
