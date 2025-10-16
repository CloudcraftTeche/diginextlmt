export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServiceProcess {
  title: string;
  description: string;
  steps: ServiceStep[];
}

export interface ServiceSection {
  title: string;
  description: string;
  services: {
    title: string;
    description: string;
  }[];
}

export interface ServiceDetailContent {
  slug: string;
  title: string;
  heroDescription: string;
  ctaSection?: {
    title: string;
    description: string;
  };
  imageUrl: string;
  servicesOffered: ServiceSection;
  process: ServiceProcess;
  faqs: {
    items: ServiceFAQ[];
  };
}

export const SERVICE_DETAILS: Record<string, ServiceDetailContent> = {
  "ui-ux-design": {
    slug: "ui-ux-design",
    title: "UI/UX Design Company in Dubai",
    heroDescription: `At DigiNext, we believe that good design is more than just how things look. It is about creating experiences that connect, engage, and inspire people. As one of the best UI/UX web design companies in Dubai, we work hard to develop designs that not only look great but also improve performance, keep visitors on your site, and reduce bounce rates. \n\n As a trusted UI/UX design services company, we combine information based on research and user-focused innovation to define each step of the user journey. Our mission is simple, to create digital experiences that are easy to use and fit perfectly with your business goals and what your customers want.`,
    ctaSection: {
      title: "Let's Build Something Extraordinary",
      description:
        "We love transforming ideas into engaging interfaces that give your brand more power. Are you ready to improve your online experience? Let's talk!",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    servicesOffered: {
      title: "Our UI/UX Design Services",
      description:
        "We offer innovative and reliable UI/UX design solutions that help businesses grow faster and do better. Find out how our skills can help your business:",
      services: [
        {
          title: "User Experience Design (UX)",
          description:
            "We make designs that are easy to understand and based on your target audience’s mindset, so that browsing is smooth and interactions are meaningful.",
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
      description:
        "We plan, work together, and put the user first in our process. We are one of the best UI/UX design companies in Dubai, and we combine creativity and technology to make sure everything goes as planned.",
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
    heroDescription:
      "Your website is the first thing people see and at DigiNext, we make it unforgettable. As a leading web design company in Dubai, we make websites that are powerful, responsive, and conversion-focused websites that reflect your brand's personality and help your business grow in a measurable way.\n\nWe go beyond just making things look good by using a customer-focused approach and a creative design mindset to make digital experiences which attract, engage, and convert. Our website design agency in the UAE offers solutions that not only look great, but also work perfectly on all devices and platforms, even if you are a new business or an established one.",
    ctaSection: {
      title: "Let’s Build a Website That Works for You",
      description:
        "Your website needs to do more than just exist online — it needs to work. Let’s talk and make your vision a reality in the digital world.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    servicesOffered: {
      title: "Website Design Services We Offer",
      description:
        "DigiNext is one of the best web design companies in Dubai. We offer complete website design services that help businesses get more visibility, engagement, and growth. Here’s how we make your ideas come to life:",
      services: [
        {
          title: "Designing E-Commerce Website",
          description:
            "We create eCommerce websites that are easy to use, mobile-friendly, and optimized for better shopping experiences and higher sales.",
        },
        {
          title: "Designing a Corporate Website",
          description:
            "As a corporate website designing company in Dubai, we build professional, trustworthy, and goal-oriented websites that communicate your brand values effectively.",
        },
        {
          title: "Dashboards & Applications",
          description:
            "Our team develops user-friendly dashboards and web applications that simplify complex business processes while ensuring a seamless user experience.",
        },
        {
          title: "Custom Website Design",
          description:
            "Your website should be as unique as your business. We design fully customized websites that represent your brand authentically and engage your audience.",
        },
        {
          title: "Redesigning and Revamping a Website",
          description:
            "Want to refresh your online presence? Our website redesign services enhance visuals, speed, and usability to increase your traffic, leads, and conversions.",
        },
      ],
    },
    process: {
      title: "Our Web Design Process",
      description:
        "At DigiNext, every project follows a strategic, research-based design process to ensure effectiveness, creativity, and measurable outcomes.",
      steps: [
        {
          title: "Research and Investigation",
          description:
            "Understanding your business, goals, and target audience deeply before starting the design journey.",
        },
        {
          title: "Wireframe Planning",
          description:
            "Structuring layouts and user flows to make navigation simple and intuitive.",
        },
        {
          title: "Interactive Prototyping",
          description:
            "Creating interactive prototypes to visualize the final product before development.",
        },
        {
          title: "Journey Mapping",
          description:
            "Designing seamless navigation paths for a smooth and consistent user experience.",
        },
        {
          title: "Visual Experience Design",
          description:
            "Designing modern, brand-aligned, and fully responsive interfaces that stand out.",
        },
        {
          title: "Development Collaboration",
          description:
            "Working closely with developers for smooth handover and pixel-perfect implementation.",
        },
        {
          title: "Quality Assurance & Testing",
          description:
            "Testing for performance, responsiveness, and usability to ensure a flawless final result.",
        },
      ],
    },
    faqs: {
      items: [
        {
          question: "What is the price of your website design services?",
          answer:
            "The cost of a website design depends on your project’s complexity, features, and business requirements. We offer flexible pricing designed to deliver the best value and results for your goals.",
        },
        {
          question: "How can I get started with your website design services?",
          answer:
            "Simply get in touch with us through our website or contact form, and we’ll schedule a quick meeting to discuss your ideas. From there, our experts will guide you through every step — from planning to launch.",
        },
        {
          question: "Will my website work well on mobile devices?",
          answer:
            "Absolutely! We ensure every website we design is fully responsive and looks perfect across all devices, from smartphones to desktops.",
        },
        {
          question: "Why should I choose you for website design?",
          answer:
            "We’re one of the best web design companies in Dubai because we blend creativity, technology, and strategy to build websites that fuel business growth. Our designs are fast, user-focused, and built to make your brand stand out online.",
        },
      ],
    },
  },
  "ecommerce-development": {
    slug: "ecommerce-development",
    title: "E-Commerce Web Development Company in Dubai",
    heroDescription:
      "We make online stores into powerful growth engines at DigiNext. We are one of the best ecommerce web design companies in Dubai. We make ecommerce websites that are smooth, safe and able to grow with your business. Our user-friendly designs keep your customers interested and your sales growing by making it easy for them to use and checkout.\n\nAs an expert ecommerce website development agency in Dubai, we understand that every click matters. We combine creativity and functionality to make ecommerce platforms that not only look great but work perfectly on all devices, browsers, and customer journeys.",
    ctaSection: {
      title: "Let's work together to build your online store",
      description:
        "Your eCommerce site should do more than just display products, it should also sell them. Let's talk and make a digital store that boosts sales, loyalty, and growth.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
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
            "We offer ongoing management, maintenance, and updates to keep your ecommerce platform functioning smoothly, ensuring it always works well and is secure.",
        },
        {
          title: "UI/UX for Ecommerce",
          description:
            "We make user interfaces and shopping flows that are easy to use and increase engagement, which lowers cart abandonment and raises conversion rates.",
        },
        {
          title: "Payment Gateway and Security",
          description:
            "Our ecommerce development agency ensures that payment options are safe, fast, and easy to use, with the highest levels of security and compliance.",
        },
      ],
    },
    process: {
      title: "Our E-Commerce Development Process",
      description:
        "We use a structured, goal-oriented process at DigiNext to create websites that combine creativity, technology, and business understanding.",
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
            "Connecting APIs, payment gateways, and running quality tests to ensure flawless performance.",
        },
        {
          title: "Launch & Optimization",
          description:
            "Going live and continuously improving the website’s performance and user experience.",
        },
      ],
    },
    faqs: {
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
            "A fully functional Ecommerce website usually takes 4 to 8 weeks to build, depending on complexity, design requirements, and integrations. Our team ensures a smooth process with on-time delivery.",
        },
        {
          question: "Will my Ecommerce website be mobile-friendly?",
          answer:
            "Of course. Every website we make is 100% responsive, so your customers will have a smooth shopping experience on all of their devices, including desktops, tablets, and phones.",
        },
        {
          question: "Can DigiNext handle website maintenance and updates?",
          answer:
            "Yes, we manage your entire Ecommerce website, including updates, security checks, content uploads, and performance monitoring, to ensure your store runs perfectly.",
        },
      ],
    },
  },
  "native-hybrid-development": {
    slug: "native-hybrid-development",
    title: "Native & Hybrid App Development Company in Dubai",
    heroDescription:
      "In a world where mobile devices are the most important, your app can be the first thing customers see. We help you make mobile apps that are powerful, engaging, and function effectively for your business. As a leading hybrid app development company in Dubai, we deliver smooth digital experiences across all platforms that boost user engagement and growth.\n\nOur expert developers make sure your brand stays connected with users anytime, anywhere, no matter whether it is native app development for performance-driven apps or hybrid app development for cost-effective, cross-platform solutions.",
    ctaSection: {
      title: "Partner with DigiNext",
      description:
        "Work with a team that combines creativity, strategy, and technical skill to make hybrid mobile apps that work perfectly and have a lasting effect.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
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
            "We put every app through extensive testing to make sure it works well, is secure, and functions smoothly on all devices.",
        },
        {
          title: "App Maintenance & Support",
          description:
            "We continue to provide updates, monitoring, and optimization after deployment to ensure long-term success.",
        },
      ],
    },
    process: {
      title: "Our Development Process",
      description:
        "Our structured development process makes sure that your app is built with care. Every step, from idea to launch, is set up for success.",
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
            "At DigiNext, we use our technical expertise, design skills, and creativity to make scalable hybrid apps that fit your business goals perfectly.",
        },
      ],
    },
  },
  "android-development": {
    slug: "android-development",
    title: "Top Android App Development Company in Dubai",
    heroDescription:
      "We take ideas and turn them into powerful Android apps that help businesses get real results. We are one of the best Android app development companies in Dubai. We make custom, high-performing, and adaptable mobile apps that fit your business requirements. Our expert developers use both creativity and technology to make apps that are easy to use, safe, and designed to make users satisfied.\n\nFrom idea to launch, our team makes sure that every app we build not only works perfectly but also boosts your brand presence. We offer advanced Android app development in Dubai to help you stay ahead in a modern mobile world, no matter if you are a new business or an established one.",
    ctaSection: {
      title: "Let’s Build Your Next Android App",
      description:
        "Do you have a game-changing idea? Let's work together to transform it into an Android app with a lot of features that will have a lasting effect.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop",
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
            "Our Android apps for businesses make operations run more smoothly, boost productivity, and improve communication within the organization.",
        },
        {
          title: "E-commerce Android App Development",
          description:
            "Mobile shopping experiences that are secure, easy to use, and optimized for performance can help your online store reach more people and increase sales.",
        },
        {
          title: "App UI/UX Design",
          description:
            "Our design experts make interfaces that are organized, intuitive, and visually attractive, improving navigation and engagement.",
        },
        {
          title: "App Maintenance & Support",
          description:
            "We monitor, test, and optimize your app continuously to ensure it stays up-to-date, secure, and fast.",
        },
      ],
    },
    process: {
      title: "Our Development Process",
      description:
        "To make sure that every app meets international standards, we follow a structured, transparent, and flexible process.",
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
            "Building feature-rich, robust, and adaptable Android apps.",
        },
        {
          title: "Testing & QA",
          description:
            "Ensuring flawless performance and functionality across all devices.",
        },
        {
          title: "Deployment",
          description:
            "Publishing your app on the Play Store with complete optimization.",
        },
        {
          title: "Post-Launch Support",
          description:
            "Monitoring, updating, and improving the app based on real-time feedback.",
        },
      ],
    },
    faqs: {
      items: [
        {
          question: "How much does Android app development cost in Dubai?",
          answer:
            "The price of making an Android app in Dubai depends on complexity, features, and design requirements. At DigiNext, we provide a custom quote after understanding your project goals and scope.",
        },
        {
          question: "Do you develop apps for all Android devices?",
          answer:
            "Yes, our team ensures your app works smoothly across all Android devices, including smartphones, tablets, and wearables, delivering consistent performance and a smooth user experience.",
        },
        {
          question: "How long does it take to build an Android app?",
          answer:
            "The time for development depends on complexity and features. A typical Android app goes from concept to launch in 6 to 12 weeks, with updates as needed.",
        },
        {
          question: "Why choose DigiNext for Android app development?",
          answer:
            "We make Android apps that engage users and help businesses grow by combining excellent design, advanced technology, and deep market understanding. As a trusted Android app development company in Dubai, we ensure quality, reliability, and results.",
        },
      ],
    },
  },
  "ios-development": {
    slug: "ios-development",
    title: "Leading iOS App Development Company in Dubai",
    heroDescription:
      "At DigiNext, we do not just build iOS apps, we make mobile experiences that motivate users and help businesses succeed. As one of the top iOS app development companies in Dubai, we make custom iOS apps that are easy to use, work well, and fit perfectly with your business goals.\n\nOur team has extensive experience in iOS development in Dubai. We use creativity, new ideas, and technology to make digital products that work well and deliver measurable results. We transform your app idea into code, making it smart, adaptable, and ready for the future.",
    ctaSection: {
      title: "Let’s Build Something Extraordinary",
      description:
        "Are you ready to launch your next iOS app? Let's talk and make a product that stands out in the App Store, performs well, and connects with people.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1512499617640-c2f9992c04f5?w=800&h=600&fit=crop",
    servicesOffered: {
      title: "Our iOS Development Services",
      description:
        "Our full range of iOS development services in Dubai helps brands connect with customers easily and stay ahead of the market.",
      services: [
        {
          title: "Custom iOS App Development",
          description:
            "We develop custom iPhone apps that meet your business requirements and provide users with a smooth, engaging experience.",
        },
        {
          title: "iPhone Application Design & Development",
          description:
            "As a leading provider of iPhone application development in Dubai, we create apps that look amazing, function well, and are loved by users.",
        },
        {
          title: "Enterprise iOS Solutions",
          description:
            "We deliver secure, high-performing business apps that simplify operations, improve communication, and boost productivity.",
        },
        {
          title: "App Testing & Optimization",
          description:
            "Our quality assurance team ensures your app is bug-free, fast, and compatible with the latest iOS updates and devices.",
        },
        {
          title: "App Maintenance & Support",
          description:
            "We provide ongoing support and updates to keep your iOS app running smoothly and help you succeed in a competitive market.",
        },
      ],
    },
    process: {
      title: "Our iOS App Development Process",
      description:
        "Every great app begins with a clear plan and perfect execution. DigiNext is one of Dubai's most trusted iOS app development companies. We use a clear, strategic process from idea to launch:",
      steps: [
        {
          title: "Idea & Requirement Analysis",
          description:
            "Understanding your goals, audience, and functionality needs.",
        },
        {
          title: "UI/UX Design",
          description:
            "Creating intuitive and visually engaging app interfaces.",
        },
        {
          title: "Development",
          description:
            "Writing clean, optimized, and scalable code for superior app performance.",
        },
        {
          title: "Testing",
          description:
            "Conducting rigorous testing to ensure flawless performance across all devices.",
        },
        {
          title: "Deployment",
          description: "Launching your app successfully on the App Store.",
        },
        {
          title: "Support & Maintenance",
          description:
            "Offering post-launch support, updates, and continuous improvements.",
        },
      ],
    },
    faqs: {
      items: [
        {
          question: "Can you help with app submission to the App Store?",
          answer:
            "Yes, we handle the entire deployment process, from submitting your app to the App Store to ensuring it meets all guidelines and is successfully published.",
        },
        {
          question: "How long does it take to develop an iOS app?",
          answer:
            "The development time depends on the app's complexity and features. We follow a structured process to ensure timely delivery without compromising quality.",
        },
        {
          question: "Can you develop apps for both iPhone and iPad?",
          answer:
            "Yes, our iOS development services cover all Apple devices, including iPhones, iPads, and iOS tablets, ensuring responsive design and smooth performance.",
        },
        {
          question: "Do you provide app maintenance after launch?",
          answer:
            "Yes, we offer continuous support, updates, and optimization to keep your app functioning smoothly and performing well in the competitive App Store environment.",
        },
      ],
    },
  },
  "custom-web-application": {
    slug: "custom-web-application",
    title: "Custom Web Application Development",
    heroDescription:
      "At DigiNext, we make web applications that are tailored for your business. As one of the leading custom application development companies, we design, develop, and deploy solutions that streamline operations, increase productivity, and deliver measurable results. With our custom web app development services, your digital platforms will be secure, scalable, and perfectly aligned with your requirements.",
    ctaSection: {
      title: "Let’s Build Your Custom Solution",
      description:
        "Your digital solutions should be just as unique as your business. Let's talk and turn your idea into a strong, fully functional web application.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1581091870623-6e23b7b7c1b2?w=800&h=600&fit=crop",
    servicesOffered: {
      title: "Our Custom Web Application Services",
      description:
        "We deliver custom web app development from conception to completion that solves real business problems and helps you grow.",
      services: [
        {
          title: "Enterprise Web Applications",
          description:
            "We build robust and scalable web applications that help businesses manage processes, automate workflows, and improve productivity.",
        },
        {
          title: "SaaS Application Development",
          description:
            "We develop cloud-based SaaS platforms that are secure, reliable, and user-friendly as a trusted custom web application development partner.",
        },
        {
          title: "E-commerce Web Applications",
          description:
            "Our team builds eCommerce web applications that deliver smooth shopping experiences, resulting in higher sales and customer satisfaction.",
        },
        {
          title: "Custom Dashboard & Analytics Tools",
          description:
            "We design dashboards and reporting tools that simplify complex data for better business decision-making.",
        },
        {
          title: "Maintenance & Support",
          description:
            "We provide continuous support to ensure your custom web application functions smoothly, stays updated, and adapts to evolving business needs.",
        },
      ],
    },
    process: {
      title: "Our Custom Web Application Development Process",
      description:
        "Our process is structured, collaborative, and user-focused to ensure applications are reliable, scalable, and effective.",
      steps: [
        {
          title: "Requirement Analysis",
          description: "Understanding your business needs and objectives.",
        },
        {
          title: "Architecture & Planning",
          description:
            "Designing the structure for robust and scalable web applications.",
        },
        {
          title: "Wireframes & Prototyping",
          description:
            "Visualizing workflows and key functionalities before development.",
        },
        {
          title: "Development & Integration",
          description:
            "Building the application using modern technologies and integrating with existing systems.",
        },
        {
          title: "Quality Assurance",
          description:
            "Testing for performance, security, and overall user experience.",
        },
        {
          title: "Deployment & Support",
          description:
            "Launching the application and providing ongoing maintenance and updates.",
        },
      ],
    },
    faqs: {
      items: [
        {
          question: "What is a custom web application?",
          answer:
            "A custom web application is software developed specifically for your business needs to improve efficiency, usability, and operational effectiveness.",
        },
        {
          question:
            "How long does it take to develop a custom web application?",
          answer:
            "The development timeline depends on project complexity, features, and integrations. Typically, projects take a few weeks to a few months, ensuring quality and on-time delivery.",
        },
        {
          question: "Can you integrate a custom web app with existing systems?",
          answer:
            "Yes, our custom web applications can be integrated with existing software, databases, and third-party tools to ensure smooth operations and consistent data.",
        },
        {
          question: "Will my custom web application be secure and scalable?",
          answer:
            "Absolutely. Every application we develop has built-in security and scalability. We use the latest technologies and best practices to protect your data and support future growth.",
        },
      ],
    },
  },
  "social-media-marketing": {
    slug: "social-media-marketing",
    title: "Social Media Marketing Agency in Dubai",
    heroDescription:
      "Social media is more than just posting updates; it is about creating meaningful connections and driving real growth. As a top social media marketing agency in Dubai, we specialize in services that help businesses connect with customers, generate leads, and grow their brand on all major platforms. We ensure your social campaigns reach the right audience, at the right time, with the right message through a strategic, data-driven approach.",
    ctaSection: {
      title: "Let’s Amplify Your Social Presence",
      description:
        "Your brand needs attention, engagement, and growth. Contact us today to find out how our social media services can help you achieve all three.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
    servicesOffered: {
      title: "Social Media Marketing Services We Offer",
      description:
        "We offer a full range of social media services in Dubai designed to help your brand grow, engage your audience, and deliver measurable results.",
      services: [
        {
          title: "Social Media Advertising",
          description:
            "We create targeted ads on platforms like Facebook, Instagram, LinkedIn, and Twitter to reach the right audience, increase visibility, and drive sales.",
        },
        {
          title: "Lead Generation Campaigns",
          description:
            "Our social media lead generation strategies attract qualified leads ready to engage with your business.",
        },
        {
          title: "Content Creation & Management",
          description:
            "We produce engaging posts, videos, and graphics tailored to your audience while maintaining a consistent brand voice.",
        },
        {
          title: "Analytics & Optimization",
          description:
            "We continuously monitor performance, analyze engagement, and optimize campaigns to maximize ROI and stay ahead of competitors.",
        },
        {
          title: "Social Network Advertising",
          description:
            "We plan and run social media ad campaigns to deliver visible results and ensure your marketing budget is spent wisely.",
        },
      ],
    },
    process: {
      title: "Our Social Media Marketing Process",
      description:
        "Our structured, step-by-step approach ensures every campaign maximizes impact and delivers measurable ROI.",
      steps: [
        {
          title: "Research & Strategy",
          description:
            "Understanding your audience, industry, and competitors.",
        },
        {
          title: "Content Planning",
          description:
            "Developing posts, visuals, and campaign ideas aligned with your brand.",
        },
        {
          title: "Campaign Execution",
          description:
            "Launching organic and paid campaigns across multiple social media platforms.",
        },
        {
          title: "Monitoring & Optimization",
          description:
            "Tracking KPIs, analyzing data, and improving campaign performance.",
        },
        {
          title: "Reporting & Insights",
          description:
            "Providing detailed performance reports and actionable insights for ongoing improvements.",
        },
      ],
    },
    faqs: {
      items: [
        {
          question:
            "Can you help my business generate leads through social media?",
          answer:
            "Yes, our social media lead generation strategies use engaging content and ads to reach the right audience and convert followers into potential customers.",
        },
        {
          question:
            "Do you manage both organic and paid social media campaigns?",
          answer:
            "Yes, we provide end-to-end social media marketing services, including content creation, community management, and running paid advertising campaigns.",
        },
        {
          question:
            "Which platforms do you specialize in for social media advertising?",
          answer:
            "We are experts on all major platforms, including Facebook, Instagram, LinkedIn, Twitter, and YouTube. Ads are customized to match your business goals and target audience.",
        },
        {
          question:
            "How will I know if my social media campaigns are performing well?",
          answer:
            "We provide regular performance reports and actionable insights so you can monitor engagement, conversions, and ROI. Our team continually optimizes campaigns to ensure measurable results.",
        },
      ],
    },
  },
  "search-engine-optimization": {
    slug: "search-engine-optimization",
    title: "Best SEO Company in Dubai",
    heroDescription:
      "Visibility is everything in today's digital world. As the best SEO agency in Dubai, we use data-driven strategies to help businesses rank higher in search results, attract the right customers, and achieve sustainable growth. Our team of SEO experts delivers measurable results, increasing traffic, leads, and sales for businesses of all sizes.",
    ctaSection: {
      title: "Let’s Talk About Growing Your Search Visibility",
      description:
        "It’s time for your customers to find you first. Let's discuss an SEO strategy tailored to your business needs.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
    servicesOffered: {
      title: "SEO Services We Offer",
      description:
        "We provide complete SEO solutions in Dubai to help your website get more traffic and long-term visibility.",
      services: [
        {
          title: "On-Page SEO Optimization",
          description:
            "Optimizing website content, structure, and code to align with search engine algorithms and improve user navigation.",
        },
        {
          title: "Off-Page SEO & Link Building",
          description:
            "Creating high-quality backlinks and improving your brand's reputation online through ethical SEO practices.",
        },
        {
          title: "Technical SEO",
          description:
            "Performing technical audits to ensure your website loads quickly, functions smoothly, and is optimized for both users and search engines.",
        },
        {
          title: "Local SEO",
          description:
            "Geo-targeted optimization to help your business reach more local customers and stand out in a competitive market.",
        },
        {
          title: "E-Commerce SEO",
          description:
            "Enhancing product visibility for online stores to increase traffic, engagement, and sales.",
        },
        {
          title: "SEO Content Strategy",
          description:
            "Creating engaging, keyword-rich content that ranks well, builds trust, and converts readers into loyal customers.",
        },
      ],
    },
    process: {
      title: "Our SEO Process",
      description:
        "We follow a structured, data-driven process to deliver consistent, measurable results for every SEO campaign.",
      steps: [
        {
          title: "Website Audit & Research",
          description:
            "Analyzing your site’s current performance and identifying opportunities for growth.",
        },
        {
          title: "Keyword Strategy",
          description:
            "Finding the most effective keywords to attract qualified traffic.",
        },
        {
          title: "On-Page Optimization",
          description:
            "Optimizing website structure, meta tags, and content for better search performance.",
        },
        {
          title: "Content Creation",
          description:
            "Developing SEO-rich blogs, pages, and landing content to engage visitors and boost rankings.",
        },
        {
          title: "Link Building & Outreach",
          description:
            "Building authority through high-quality backlinks and ethical outreach strategies.",
        },
        {
          title: "Performance Tracking",
          description:
            "Monitoring rankings, analytics, and conversions to refine and improve SEO strategy.",
        },
      ],
    },
    faqs: {
      items: [
        {
          question: "How much does it cost for SEO services in Dubai?",
          answer:
            "The cost depends on your website size, goals, and competition. DigiNext offers flexible packages customized to meet your business needs, ensuring the best value.",
        },
        {
          question: "How long does it take to see results from SEO?",
          answer:
            "SEO usually shows significant results in 3 to 6 months. Our agency focuses on long-term strategies for sustainable growth.",
        },
        {
          question: "Do you guarantee top rankings on Google?",
          answer:
            "No ethical SEO company can guarantee top rankings, but our proven white-hat techniques consistently improve your site’s visibility and organic traffic.",
        },
        {
          question: "Why should I choose DigiNext for SEO services?",
          answer:
            "We combine data-driven strategies, transparency, and dedicated expertise to help your brand stand out in search results and generate real leads.",
        },
      ],
    },
  },
  "email-marketing": {
    slug: "email-marketing",
    title: "Best Email Marketing Agency in Dubai",
    heroDescription:
      "In a world full of distractions, your message should be heard and remembered. As a leading email marketing agency in Dubai, DigiNext creates personalized campaigns that build trust, generate leads, and increase conversions. Our expert team ensures your message reaches the right inbox at the right time for maximum impact.",
    ctaSection: {
      title: "Let’s Talk",
      description:
        "Reach out to your audience directly and build long-lasting relationships through meaningful communication. Let's create an email plan that really works for your brand.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1581090700227-6a2d3e5e5b15?w=800&h=600&fit=crop",
    servicesOffered: {
      title: "Our Email Marketing Services",
      description:
        "We offer integrated email marketing solutions to help your brand connect, engage, and convert effectively.",
      services: [
        {
          title: "Campaign Strategy & Planning",
          description:
            "Designing targeted email strategies, from welcome sequences to promotional campaigns, ensuring every email is meaningful and goal-oriented.",
        },
        {
          title: "Content & Design Creation",
          description:
            "Creating visually appealing templates and copy that match your brand's tone and objectives.",
        },
        {
          title: "Audience Segmentation & Personalization",
          description:
            "Segmenting audiences to deliver highly relevant and personalized messages that resonate with each group.",
        },
        {
          title: "Automation & Drip Campaigns",
          description:
            "Setting up automated workflows to nurture leads, re-engage inactive users, and maximize conversions.",
        },
        {
          title: "Analytics & Optimization",
          description:
            "Monitoring performance, running A/B tests, and optimizing campaigns to improve open rates, clicks, and ROI.",
        },
      ],
    },
    process: {
      title: "Our Process",
      description:
        "We follow a structured, data-driven approach to develop, deliver, and optimize email campaigns that drive real results.",
      steps: [
        {
          title: "Understanding Your Goals",
          description:
            "Learning your objectives, audience, and business needs to tailor the campaign effectively.",
        },
        {
          title: "Campaign Strategy",
          description:
            "Creating a customized plan to maximize reach, engagement, and conversions.",
        },
        {
          title: "Creative Design",
          description:
            "Designing branded, responsive templates that capture attention and encourage interaction.",
        },
        {
          title: "Automation Setup",
          description:
            "Scheduling and automating campaigns for consistent outreach and effective lead nurturing.",
        },
        {
          title: "Testing & Launch",
          description:
            "Running tests to ensure deliverability, timing, and content performance before sending.",
        },
        {
          title: "Performance Review",
          description:
            "Tracking metrics and optimizing campaigns based on open rates, clicks, conversions, and engagement.",
        },
      ],
    },
    faqs: {
      items: [
        {
          question: "How effective is email marketing for businesses?",
          answer:
            "Email marketing remains one of the most cost-effective ways to reach customers, improve brand recall, and increase sales.",
        },
        {
          question: "What types of email campaigns do you offer?",
          answer:
            "We manage newsletters, promotional emails, drip campaigns, and automated sequences, all tailored to your audience and goals.",
        },
        {
          question:
            "Can you integrate email marketing with my existing CRM or website?",
          answer:
            "Yes, we ensure seamless integration with CRM systems, e-commerce platforms, and websites for smooth automation and tracking.",
        },
        {
          question: "How do you measure the success of an email campaign?",
          answer:
            "We track open rates, click-through rates, conversions, and engagement metrics to evaluate performance and improve future campaigns.",
        },
      ],
    },
  },
  "ppc-advertising": {
    slug: "ppc-advertising",
    title: "Best PPC Agency in Dubai",
    heroDescription:
      "In a digital world where every click matters, DigiNext creates pay-per-click campaigns that deliver maximum visibility, high-quality leads, and measurable results. From Google Ads to display and remarketing campaigns, our data-driven strategies boost ROI and accelerate business growth.",
    ctaSection: {
      title: "Let’s Turn Clicks Into Conversions",
      description:
        "With performance-focused PPC services in Dubai, you can start reaching your ideal customers immediately. Let's create campaigns that maximize your results and ROI.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1581091215362-8bb44a0b53a2?w=800&h=600&fit=crop",
    servicesOffered: {
      title: "Our PPC Services in Dubai",
      description:
        "We provide comprehensive PPC management to increase visibility, engagement, and conversions for your business.",
      services: [
        {
          title: "Google Ads Management",
          description:
            "Creating and managing Google Ads campaigns that drive traffic, generate leads, and maximize ROI.",
        },
        {
          title: "Search Advertising",
          description:
            "Optimizing search campaigns with precise keyword targeting, bidding strategies, and compelling ad copy to stand out in search results.",
        },
        {
          title: "Display Advertising",
          description:
            "Designing visually attractive display campaigns to raise brand awareness and engage potential customers.",
        },
        {
          title: "Remarketing Campaigns",
          description:
            "Targeting previous visitors with strategic remarketing campaigns to bring them back and increase conversions.",
        },
        {
          title: "Shopping Ads",
          description:
            "Managing Google Shopping campaigns for ecommerce brands to attract ready-to-buy customers and boost online sales.",
        },
        {
          title: "PPC Consulting & Audit",
          description:
            "Analyzing your current PPC setup, identifying improvement opportunities, and providing actionable recommendations.",
        },
      ],
    },
    process: {
      title: "Our PPC Management Process",
      description:
        "We follow a structured, data-driven process to deliver consistent PPC results and optimize campaigns for maximum ROI.",
      steps: [
        {
          title: "Research & Ideas",
          description:
            "Understanding your goals, target audience, and competition to create effective campaigns.",
        },
        {
          title: "Campaign Setup",
          description:
            "Creating ad groups, selecting keywords, and writing compelling ad copy to launch campaigns efficiently.",
        },
        {
          title: "Ad Optimization",
          description:
            "Monitoring performance and refining bids, targeting, and creatives for maximum campaign impact.",
        },
        {
          title: "Tracking & Analytics",
          description:
            "Measuring conversions, traffic, and performance through real-time analytics and reports.",
        },
        {
          title: "Reporting & Improvement",
          description:
            "Providing detailed reports and continuously optimizing campaigns to enhance results and ROI.",
        },
      ],
    },
    faqs: {
      items: [
        {
          question: "How much do your PPC services cost?",
          answer:
            "The cost depends on your campaign goals, industry, and ad budget. We provide customized plans to ensure maximum value.",
        },
        {
          question: "How soon can I see results from PPC advertising?",
          answer:
            "PPC provides quick visibility; you can start receiving traffic and leads within days, with ongoing optimization for better conversions.",
        },
        {
          question: "Do you provide complete PPC management and reporting?",
          answer:
            "Yes, we handle everything from setup to optimization, with clear reports showing campaign performance and ROI.",
        },
        {
          question: "Why should I choose DigiNext for PPC services?",
          answer:
            "We combine data-driven strategies, creative ad design, and expert optimization to grow your business faster, delivering measurable leads, conversions, and brand presence.",
        },
      ],
    },
  },
  "shared-hosting": {
    slug: "shared-web-hosting",
    title: "Reliable Shared Web Hosting Services in Dubai",
    heroDescription:
      "DigiNext provides fast, secure, and reliable shared hosting services in Dubai, keeping your website online 24/7. Our hosting solutions are designed to ensure smooth performance, strong security, and consistent uptime for businesses of all sizes.",
    ctaSection: {
      title: "Let’s Get Your Website Online, Securely",
      description:
        "With expert hosting support, your website will be operational, fast, and reliable. Let’s discuss your hosting needs today!",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1591696205602-15d09f4e8b48?w=800&h=600&fit=crop",
    servicesOffered: {
      title: "Shared Web Hosting Services We Offer",
      description:
        "We provide a range of shared hosting solutions tailored to meet the needs of startups, growing businesses, and enterprise websites.",
      services: [
        {
          title: "Standard Shared Hosting",
          description:
            "Reliable hosting for small businesses and startups with 24/7 support, easy scalability, and dependable performance.",
        },
        {
          title: "Managed Shared Hosting",
          description:
            "Let us handle updates, security, and backups, so you can focus on growing your business while we manage the technical side.",
        },
        {
          title: "Business Shared Hosting",
          description:
            "Advanced hosting features, higher bandwidth, and faster speeds to support growing business websites with higher demands.",
        },
        {
          title: "Secure Shared Hosting",
          description:
            "Enhanced security measures including SSL, regular backups, and malware protection to keep your digital assets safe.",
        },
        {
          title: "Cloud-Integrated Shared Hosting",
          description:
            "Leverage cloud technology for faster load times, auto-scaling, and uninterrupted website performance during high traffic periods.",
        },
      ],
    },
    process: {
      title: "Our Hosting Process",
      description:
        "We provide a structured, transparent hosting journey, ensuring your website performs optimally and stays secure.",
      steps: [
        {
          title: "Assessment",
          description:
            "Understanding your website’s traffic, storage, and performance requirements to choose the right hosting plan.",
        },
        {
          title: "Setup & Configuration",
          description:
            "Installing and configuring your hosting environment for optimal speed, reliability, and scalability.",
        },
        {
          title: "Migration & Testing",
          description:
            "Smooth transfer of existing websites with zero downtime, ensuring a seamless transition to our servers.",
        },
        {
          title: "Security Setup",
          description:
            "Implementing SSL, firewalls, and anti-malware protection for maximum website security.",
        },
        {
          title: "Launch & Monitoring",
          description:
            "Going live with continuous uptime monitoring to ensure consistent performance.",
        },
        {
          title: "Ongoing Support",
          description:
            "24/7 technical assistance to resolve any hosting, security, or performance-related issues.",
        },
      ],
    },
    faqs: {
      items: [
        {
          question: "How much does shared web hosting cost in Dubai?",
          answer:
            "The cost depends on your website's size, storage, and traffic requirements. We offer flexible and affordable plans suitable for startups, small businesses, and growing brands.",
        },
        {
          question: "Is your shared hosting service reliable and secure?",
          answer:
            "Yes, our servers are monitored 24/7 with advanced firewalls, malware protection, and daily backups to ensure your website stays safe and online.",
        },
        {
          question:
            "Can you migrate my existing website to your hosting platform?",
          answer:
            "Absolutely. Our technical experts ensure a smooth migration of your website with zero downtime.",
        },
        {
          question: "Do you provide customer support for hosting issues?",
          answer:
            "Yes, our support team is available 24/7 to assist with any hosting, security, or performance concerns.",
        },
      ],
    },
  },
  "dedicated-hosting": {
    slug: "dedicated-hosting",
    title: "Reliable Dedicated Hosting Services in Dubai",
    heroDescription:
      "DigiNext provides powerful, secure, and fully managed dedicated hosting services in Dubai, ensuring high performance, scalability, and total data protection for your business websites and high-traffic platforms.",
    ctaSection: {
      title: "Let’s Build a Faster, Safer, and Smarter Online Experience",
      description:
        "Give your website the foundation it needs. Talk to us about how DigiNext’s dedicated hosting can deliver speed, reliability, and performance for your business.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1581090700227-60b1b90b81fc?w=800&h=600&fit=crop",
    servicesOffered: {
      title: "Our Dedicated Hosting Services",
      description:
        "We offer a range of dedicated hosting solutions optimized for performance, flexibility, and complete control over your server environment.",
      services: [
        {
          title: "Fully Managed Dedicated Hosting",
          description:
            "Relax while our experts handle configuration, updates, backups, and real-time monitoring to ensure maximum uptime and performance.",
        },
        {
          title: "Custom Dedicated Servers",
          description:
            "Get a scalable, secure, and high-performing server environment tailored to your business requirements.",
        },
        {
          title: "Dedicated Web Hosting",
          description:
            "Powerful hosting built for speed and stability, ensuring your website remains operational and efficient even under high traffic.",
        },
        {
          title: "Enterprise Server Solutions",
          description:
            "Advanced dedicated server hosting for businesses with critical applications, providing enhanced resources and security.",
        },
        {
          title: "Data Security & Backup",
          description:
            "Robust firewalls, encrypted backups, and proactive monitoring keep your data safe and accessible 24/7.",
        },
      ],
    },
    process: {
      title: "Our Hosting Process",
      description:
        "Our structured hosting process combines precision, reliability, and continuous support to maximize server performance and security.",
      steps: [
        {
          title: "Assessment & Planning",
          description:
            "Analyzing your business requirements, website traffic, and resource needs to design the ideal dedicated hosting setup.",
        },
        {
          title: "Server Setup & Configuration",
          description:
            "Customizing hardware and software configurations to match your business objectives and server demands.",
        },
        {
          title: "Security Implementation",
          description:
            "Installing firewalls, SSL certificates, and monitoring systems for robust server protection.",
        },
        {
          title: "Performance Optimization",
          description:
            "Fine-tuning the server environment for maximum efficiency, speed, and uptime.",
        },
        {
          title: "Ongoing Management & Support",
          description:
            "Continuous updates, backups, monitoring, and 24/7 technical assistance to ensure seamless server operation.",
        },
      ],
    },
    faqs: {
      items: [
        {
          question:
            "What makes DigiNext the best dedicated hosting company in Dubai?",
          answer:
            "We provide high-performance, secure, and fully customizable dedicated hosting services with reliable uptime and 24/7 technical support tailored to your business needs.",
        },
        {
          question: "How is dedicated hosting different from shared hosting?",
          answer:
            "Dedicated hosting gives your website exclusive access to server resources, offering faster load times, enhanced security, and more reliability compared to shared hosting.",
        },
        {
          question: "Can I upgrade or customize my hosting plan later?",
          answer:
            "Yes, our dedicated hosting services are fully scalable. You can increase storage, bandwidth, or customize server configurations as your business grows.",
        },
        {
          question: "Is my data safe with DigiNext’s dedicated server hosting?",
          answer:
            "Absolutely. Advanced firewalls, SSL encryption, and regular security audits ensure your data remains protected at all times.",
        },
      ],
    },
  },
  "cloud-hosting": {
    slug: "cloud-hosting",
    title: "Reliable Cloud Hosting Services in Dubai",
    heroDescription:
      "DigiNext provides advanced cloud hosting services in Dubai that deliver high performance, flexibility, and 24/7 accessibility for businesses of all sizes, ensuring maximum uptime and data security.",
    ctaSection: {
      title: "Let’s Power Your Business in the Cloud",
      description:
        "Move your business forward with a cloud hosting solution designed for performance, security, and growth. Talk to us today to design the perfect cloud environment for your needs.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1591696331112-5c71f3f8e755?w=800&h=600&fit=crop",
    servicesOffered: {
      title: "Our Cloud Hosting Services",
      description:
        "We offer a wide range of cloud hosting solutions to help businesses stay connected, secure, and scalable for the future.",
      services: [
        {
          title: "Managed Cloud Hosting",
          description:
            "We handle everything from setup to 24/7 maintenance, ensuring smooth operation so you can focus on growing your business.",
        },
        {
          title: "Private Cloud Hosting",
          description:
            "Dedicated infrastructure designed exclusively for your business, offering control, scalability, and data privacy.",
        },
        {
          title: "Public Cloud Hosting",
          description:
            "Flexible and secure public cloud hosting that adapts to your business needs while optimizing costs.",
        },
        {
          title: "Hybrid Cloud Solutions",
          description:
            "Combine the best of private and public clouds for a tailored, balanced hosting setup that meets your business requirements.",
        },
        {
          title: "Cloud Backup & Recovery",
          description:
            "Robust backup and disaster recovery solutions to keep your data safe and ensure uninterrupted business operations.",
        },
      ],
    },
    process: {
      title: "Our Hosting Process",
      description:
        "We follow a proven cloud hosting process that ensures smooth migration, high performance, and continuous monitoring.",
      steps: [
        {
          title: "Assessment & Planning",
          description:
            "Understanding your hosting requirements, business objectives, and traffic demands.",
        },
        {
          title: "Architecture Design",
          description:
            "Building a secure, scalable, and optimized cloud environment tailored to your business needs.",
        },
        {
          title: "Migration & Deployment",
          description:
            "Smooth data transfer and deployment with zero downtime to ensure uninterrupted operations.",
        },
        {
          title: "Optimization",
          description:
            "Enhancing performance, load speeds, and reliability for consistent and fast access.",
        },
        {
          title: "Monitoring & Support",
          description:
            "Continuous 24/7 monitoring and technical support to ensure your cloud environment runs flawlessly.",
        },
      ],
    },
    faqs: {
      items: [
        {
          question:
            "What makes DigiNext one of the best cloud hosting providers?",
          answer:
            "Our cloud hosting services in Dubai are secure, scalable, and high-performance. We ensure 99.9% uptime, fast load times, and 24/7 expert support.",
        },
        {
          question: "Is cloud hosting better than traditional web hosting?",
          answer:
            "Yes, cloud hosting offers more flexibility, scalability, and security than traditional hosting, allowing uninterrupted access even during high traffic periods.",
        },
        {
          question:
            "Can you migrate my existing website to your cloud hosting platform?",
          answer:
            "Yes, our experts manage the entire migration process, including data transfer and performance testing, with zero downtime.",
        },
        {
          question: "Is my data secure on your cloud hosting servers?",
          answer:
            "Absolutely. We use advanced encryption, firewalls, and continuous security monitoring to keep your digital assets safe and fully protected.",
        },
      ],
    },
  },
  "email-hosting": {
    slug: "email-hosting",
    title: "Reliable Email Hosting in Dubai",
    heroDescription:
      "DigiNext provides reliable and scalable email hosting solutions in Dubai, enabling businesses to communicate professionally, securely, and efficiently at all times.",
    ctaSection: {
      title: "Let’s Power Up Your Business Communication",
      description:
        "Upgrade your email system with a trusted email hosting service in the UAE. Talk to us today to find the best solution for your business needs.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1581092339048-9e5e7a35e86b?w=800&h=600&fit=crop",
    servicesOffered: {
      title: "Our Email Hosting Services",
      description:
        "We provide personalized email hosting solutions that increase productivity, improve security, and ensure seamless communication.",
      services: [
        {
          title: "Business Email Hosting",
          description:
            "Establish a professional identity with branded email addresses that reflect your brand’s credibility.",
        },
        {
          title: "Secure Cloud Email Hosting",
          description:
            "Encrypted email hosting with advanced protection against spam, phishing, and data breaches.",
        },
        {
          title: "Custom Domain Setup",
          description:
            "Create email accounts under your own domain for professional and consistent communication.",
        },
        {
          title: "Migration & Setup Support",
          description:
            "Seamless migration of existing emails with zero downtime, handled by our expert team.",
        },
        {
          title: "24/7 Monitoring & Support",
          description:
            "Round-the-clock monitoring and technical support to ensure your email services run smoothly.",
        },
      ],
    },
    process: {
      title: "Our Process",
      description:
        "We follow a smooth, step-by-step setup and management process to deliver reliable and secure email hosting services.",
      steps: [
        {
          title: "Assessment & Planning",
          description:
            "Understanding your business requirements and email needs.",
        },
        {
          title: "Setup & Configuration",
          description:
            "Creating and configuring your custom domain-based email accounts.",
        },
        {
          title: "Migration & Data Transfer",
          description:
            "Securely transferring existing emails, contacts, and folders without data loss or downtime.",
        },
        {
          title: "Security Integration",
          description:
            "Implementing advanced protection tools and access controls for safe communication.",
        },
        {
          title: "Monitoring & Maintenance",
          description:
            "Continuous performance checks, updates, and 24/7 support to ensure smooth operation.",
        },
      ],
    },
    faqs: {
      items: [
        {
          question: "How much does business email hosting in Dubai cost?",
          answer:
            "Pricing depends on the number of accounts, storage requirements, and security features. We offer plans suitable for businesses of all sizes and budgets.",
        },
        {
          question:
            "Will my business email work on mobile and desktop devices?",
          answer:
            "Yes, our email hosting services are compatible with all major devices and email clients, allowing access anytime, anywhere.",
        },
        {
          question:
            "Can you migrate our existing emails to your hosting platform?",
          answer:
            "Yes, our team handles complete email migration with zero downtime, ensuring all data, contacts, and folders are safely transferred.",
        },
        {
          question: "Why should I choose DigiNext for email hosting?",
          answer:
            "We provide reliable uptime, advanced security, expert support, and complete customization options. DigiNext is one of the most trusted email hosting providers in the UAE.",
        },
      ],
    },
  },
  "g-suite": {
    slug: "g-suite",
    title: "Give Power to Your Business with G Suite in Dubai",
    heroDescription:
      "DigiNext helps businesses work smarter and faster with Google Workspace (G Suite), a cloud-based productivity suite that improves communication, collaboration, and data management.",
    ctaSection: {
      title: "Let’s Transform the Way You Work",
      description:
        "Bring your team together with Google Workspace's smart collaboration solutions. Talk to us today to make your business more efficient, secure, and connected.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1581090700227-1c8c6b7f19b0?w=800&h=600&fit=crop",
    servicesOffered: {
      title: "Our G Suite Services",
      description:
        "We provide end-to-end G Suite solutions to help businesses run smoothly, securely, and efficiently in the digital world.",
      services: [
        {
          title: "Google Workspace Setup & Configuration",
          description:
            "Setup domains, user accounts, and permissions to ensure a smooth and secure start with Google Workspace.",
        },
        {
          title: "Email Hosting & Management",
          description:
            "Professional G Suite email hosting under your domain for a trusted and branded business identity.",
        },
        {
          title: "Data Migration & Integration",
          description:
            "Seamlessly migrate emails, files, and contacts from other platforms to Google Workspace while ensuring data safety.",
        },
        {
          title: "User Training & Support",
          description:
            "Guiding your team to maximize productivity with G Suite tools and providing ongoing technical support.",
        },
        {
          title: "Security & Compliance Solutions",
          description:
            "Advanced security setup, data protection, and admin controls to keep your business safe and compliant.",
        },
      ],
    },
    process: {
      title: "Our Process",
      description:
        "Our implementation process is structured, secure, and designed to fit your business workflows.",
      steps: [
        {
          title: "Assessment",
          description: "Understanding your business needs and team workflow.",
        },
        {
          title: "Planning",
          description:
            "Choosing the right Google Workspace plan to match your business goals.",
        },
        {
          title: "Setup & Migration",
          description:
            "Configuring Google Workspace and migrating your data securely.",
        },
        {
          title: "Customization",
          description: "Aligning G Suite tools with your operational needs.",
        },
        {
          title: "Training & Support",
          description:
            "Helping your team adapt quickly with expert guidance and ongoing support.",
        },
      ],
    },
    faqs: {
      items: [
        {
          question:
            "Can you help migrate my existing emails and data to Google Workspace?",
          answer:
            "Yes, our team ensures seamless migration of emails, files, and contacts to Google Workspace with minimal downtime.",
        },
        {
          question: "What kind of support do you offer after setup?",
          answer:
            "We provide ongoing assistance and user training so your team can get the most out of Google Workspace, including troubleshooting and expert guidance.",
        },
        {
          question:
            "Is Google Workspace suitable for small and medium-sized businesses?",
          answer:
            "Absolutely! Google Workspace offers scalable productivity and collaboration tools for businesses of all sizes.",
        },
        {
          question: "Will my business email use my company domain?",
          answer:
            "Yes, we provide domain-based Google Workspace email hosting, allowing professional email addresses like name@yourcompany.com.",
        },
      ],
    },
  },
  "photography-videography": {
    slug: "photography-videography",
    title: "Professional Photography and Videography Services in Dubai",
    heroDescription:
      "DigiNext combines creativity, precision, and storytelling to create visuals that showcase your brand. We are experts in photography and videography that make your brand vision a reality.",
    ctaSection: {
      title: "Let’s Capture Your Vision",
      description:
        "Your brand needs visuals that say more than words. Let's create photos and videos that tell your story effectively and memorably.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop",
    servicesOffered: {
      title: "Our Photography & Videography Services",
      description:
        "We offer professional photo and video services tailored to your business needs, ensuring high-quality results that engage your audience.",
      services: [
        {
          title: "Product Photography",
          description:
            "Creative and detailed product photography to help your brand stand out in a competitive market.",
        },
        {
          title: "Corporate & Brand Photography",
          description:
            "Business portraits and behind-the-scenes imagery that communicate your brand’s story effectively.",
        },
        {
          title: "Event Photography",
          description:
            "Documenting business events, launches, and celebrations to preserve every important moment.",
        },
        {
          title: "Creative Videography",
          description:
            "Visually engaging videos that tell your brand story and capture audience attention.",
        },
        {
          title: "Corporate Video Production",
          description:
            "Company profiles and brand films that highlight your expertise and creativity.",
        },
        {
          title: "Product Videos & Ads",
          description:
            "Compelling product videos and ads that turn features into attractive stories for your audience.",
        },
      ],
    },
    process: {
      title: "Our Creative Process",
      description:
        "A structured and creative workflow ensures every photo and video we produce meets the highest standards.",
      steps: [
        {
          title: "Concept Development",
          description:
            "Understanding your vision and brand story to set the creative direction.",
        },
        {
          title: "Pre-Production Planning",
          description:
            "Scriptwriting, location scouting, and planning the shoot for optimal results.",
        },
        {
          title: "Photography & Filming",
          description:
            "Capturing high-quality visuals with professional precision.",
        },
        {
          title: "Editing & Post-Production",
          description:
            "Enhancing visuals, adding effects, and fine-tuning every detail.",
        },
        {
          title: "Delivery & Optimization",
          description:
            "Providing polished visuals ready for web, social media, or advertising campaigns.",
        },
      ],
    },
    faqs: {
      items: [
        {
          question:
            "Do you offer on-location photography and videography in Dubai?",
          answer:
            "Yes, we provide on-location services across Dubai and the UAE, equipped to shoot in studios, offices, or outdoor locations.",
        },
        {
          question:
            "How much do your photography and videography services cost?",
          answer:
            "Pricing depends on project type, duration, and production requirements. We offer packages suitable for product shoots, events, and corporate videos for different budgets.",
        },
        {
          question:
            "Can you handle both photography and video production for the same project?",
          answer:
            "Absolutely. We provide both services to maintain consistency across your brand’s visuals and storytelling.",
        },
        {
          question:
            "How long does it take to deliver the final photos or videos?",
          answer:
            "Delivery depends on project size and post-production needs. Typically, photos are delivered in 5–7 business days, and videos in 10–14 business days after filming.",
        },
      ],
    },
  },
  "branding-graphics-design": {
    slug: "branding-graphics-design",
    title: "Top Branding and Graphic Design Agency in Dubai",
    heroDescription:
      "DigiNext combines design, strategy, and innovation to create visual stories that show your brand’s identity and values. We craft purposeful creativity that makes your brand memorable.",
    ctaSection: {
      title: "Let’s Build a Brand That Speaks for You",
      description:
        "Your brand deserves to be seen, remembered, and trusted. Together, let's create a design identity that captures your company's core values.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1581091215363-3b9b9e43f3b6?w=800&h=600&fit=crop",
    servicesOffered: {
      title: "Branding & Graphic Design Services We Offer",
      description:
        "We use strategy and creativity to deliver visual experiences that tell your story and make your brand stand out.",
      services: [
        {
          title: "Brand Identity Design",
          description:
            "Complete brand identities including logos, color schemes, fonts, and visual systems for consistent brand representation.",
        },
        {
          title: "Logo Design",
          description:
            "Modern and memorable logos that capture your brand values and resonate with your audience.",
        },
        {
          title: "Graphic Design Services",
          description:
            "Brand collateral, digital graphics, and marketing materials to strengthen your visual communication.",
        },
        {
          title: "Print & Signage Design",
          description:
            "Eye-catching print designs and signs that bring your brand identity to life and communicate your message effectively.",
        },
        {
          title: "Packaging Design",
          description:
            "Creative packaging solutions that reflect your product’s story and make your brand stand out on shelves.",
        },
        {
          title: "Brand Guidelines & Strategy",
          description:
            "Comprehensive brand guidelines defining your voice, tone, and visual style for consistent brand communication.",
        },
      ],
    },
    process: {
      title: "Our Creative Process",
      description:
        "Insight, creativity, and innovation guide our branding solutions to build trust, recognition, and a lasting impression.",
      steps: [
        {
          title: "Research",
          description:
            "Understanding your brand, audience, and business goals.",
        },
        {
          title: "Concept Development",
          description: "Brainstorming creative directions and design concepts.",
        },
        {
          title: "Design Execution",
          description:
            "Crafting visuals aligned with your strategy and brand message.",
        },
        {
          title: "Feedback & Refinement",
          description:
            "Perfecting the design through collaboration and iterations.",
        },
        {
          title: "Delivery & Implementation",
          description:
            "Providing a high-impact brand identity ready for deployment across all platforms.",
        },
      ],
    },
    faqs: {
      items: [
        {
          question: "How long does it take to create a brand identity?",
          answer:
            "Most branding projects take 2 to 6 weeks, including research, design, and revisions, depending on your brand’s requirements.",
        },
        {
          question: "Do you provide custom logo design services?",
          answer:
            "Yes, our logo designers create unique logos that fit your brand’s personality, target audience, and industry.",
        },
        {
          question: "Can you redesign or refresh an existing brand?",
          answer:
            "Absolutely. We help businesses update their brand identity while maintaining core values and reputation.",
        },
        {
          question:
            "Why choose DigiNext as your branding and graphic design partner?",
          answer:
            "We combine strategic thinking with creative design, helping brands grow, connect with audiences, and stand out in the market.",
        },
      ],
    },
  },
  "product-packaging-design": {
    slug: "product-packaging-design",
    title: "Product and Packaging Design Services in Dubai",
    heroDescription:
      "DigiNext combines creativity, strategy, and functionality to create product and packaging designs that make your brand stand out on shelves and screens. We design with purpose and impact.",
    ctaSection: {
      title: "Let’s Design Something Iconic",
      description:
        "Your product deserves packaging that represents your brand. Together, we create designs that capture attention and drive sales.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1593642532400-2682810df593?w=800&h=600&fit=crop",
    servicesOffered: {
      title: "Our Product and Packaging Design Services",
      description:
        "As a trusted packaging and product design agency in Dubai, we deliver powerful visuals that enhance brand identity and customer experience.",
      services: [
        {
          title: "Product Design",
          description:
            "Designing products that balance form and function, reflecting your brand’s vision and serving practical purposes.",
        },
        {
          title: "Packaging Design",
          description:
            "Creating attractive, user-friendly, and shelf-appealing packaging that stands out in competitive markets.",
        },
        {
          title: "Brand Identity Integration",
          description:
            "Ensuring your packaging aligns perfectly with your brand identity across all digital and physical touchpoints.",
        },
        {
          title: "3D Mockups & Prototyping",
          description:
            "Bringing ideas to life with realistic 3D models and mockups to visualize the final product before production.",
        },
        {
          title: "Sustainable Design Solutions",
          description:
            "Using eco-friendly materials and strategies to create responsible designs that minimize waste and maximize brand impact.",
        },
      ],
    },
    process: {
      title: "Our Design Approach",
      description:
        "We blend creativity and strategy to produce products and packaging that are visually striking and commercially effective.",
      steps: [
        {
          title: "Discovery & Research",
          description:
            "Understanding your product, target audience, and project goals.",
        },
        {
          title: "Developing Concept",
          description:
            "Brainstorming creative directions that align with your brand story.",
        },
        {
          title: "Visualization & Design",
          description:
            "Crafting design concepts, packaging layouts, and 3D mockups to bring ideas to life.",
        },
        {
          title: "Feedback & Refinement",
          description:
            "Perfecting every detail to meet project goals and brand standards.",
        },
        {
          title: "Final Execution",
          description:
            "Delivering production-ready designs that make your product shine in the market.",
        },
      ],
    },
    faqs: {
      items: [
        {
          question: "Do you handle both product and packaging design?",
          answer:
            "Yes, we provide complete creative solutions covering both product design and packaging design to ensure your product looks great and performs well in the market.",
        },
        {
          question: "Can you redesign my existing product packaging?",
          answer:
            "Absolutely. We update old packaging with modern, functional, and visually appealing designs while staying true to your brand identity.",
        },
        {
          question: "How long does the product design process take?",
          answer:
            "The timeframe depends on project size and complexity, but a full product and packaging design project usually takes 2 to 6 weeks from research to final delivery.",
        },
        {
          question: "Do you have eco-friendly packaging options?",
          answer:
            "Yes, our designers use sustainable materials and environmentally responsible methods to create packaging that benefits both your brand and the planet.",
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
