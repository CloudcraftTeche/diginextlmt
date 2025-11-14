export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
}

export const PAGES_SEO: Record<string, PageMetadata> = {
  home: {
    title: "IT Solutions and Services Company in Dubai | Diginext",
    description:
      "Diginext is a trusted IT solutions and services company in Dubai offering professional and reliable IT support to help your business grow seamlessly.",
    keywords: ["IT solutions Dubai", "IT services", "IT support Dubai"],
  },
  about: {
    title: "About Us | it solutions provider | DigiNext",
    description:
      "DigiNext is a trusted IT solutions provider in Dubai, delivering high-quality IT infrastructure services across industries.",
    keywords: ["about diginext", "IT company Dubai"],
  },
  services: {
    title: "IT Solutions and Services in Dubai | DigiNext",
    description:
      "DigiNext provides expert IT solutions and services in Dubai, including software development, cloud integration, IT infrastructure, security, and managed services.",
    keywords: [
      "IT solutions Dubai",
      "software development",
      "cloud integration",
    ],
  },
  solutions: {
    title: "Trusted IT Solutions Consulting Dubai | DigiNext",
    description:
      "Looking for IT solutions consulting in Dubai? DigiNext leverages expert guidance to help businesses transform operations, optimize processes, and reduce costs.",
    keywords: [
      "IT solutions consulting",
      "IT consulting Dubai",
      "business optimization",
    ],
  },
  work: {
    title: "Our Work | DigiNext",
    description:
      "DigiNext showcases its expertise as a leading IT support and services company in Dubai, delivering innovative, reliable, and tailored IT solutions for businesses.",
    keywords: ["IT projects", "portfolio", "case studies Dubai"],
  },
  insights: {
    title: "Insights | DigiNext",
    description:
      "Explore DigiNext's insights on IT support solutions. Get expert advice, industry trends, and strategies to enhance IT operations and boost business performance.",
    keywords: ["IT insights", "technology trends", "business strategies"],
  },
  contact: {
    title: "Contact Us | DigiNext",
    description:
      "Get in touch with DigiNext, a trusted IT solution company in Dubai. We provide extensive technical support and IT services to help your business run smoothly.",
    keywords: [
      "contact diginext",
      "IT company Dubai contact",
      "technical support Dubai",
    ],
  },
};

// Services metadata
export const SERVICES_SEO: Record<string, PageMetadata> = {
  "branding-graphics-design": {
    title: "Top Creative Branding Agency in Dubai, UAE | Diginext",
    description:
      "Diginext is a leading branding agency in Dubai, offering strategy, design, and digital identity solutions that elevate your brand presence and growth.",
    keywords: ["branding agency Dubai", "graphic design", "brand identity"],
  },
  "product-packaging-design": {
    title: "Packaging & Product Design Agency in Dubai, UAE | Diginext",
    description:
      "Enhance your brand with Diginext, a top packaging design agency Dubai. We deliver creative and strategic product design Dubai that inspires and drives market success.",
    keywords: [
      "packaging design Dubai",
      "product design agency",
      "creative packaging",
    ],
  },
  "ui-ux-design": {
    title: "Top UI UX Web Design Company in Dubai | DigiNext",
    description:
      "Transform your ideas into user-friendly experiences with Diginext, a top UI UX web design company in Dubai creating engaging designs that captivate your audience.",
    keywords: ["UI UX design Dubai", "web design company", "user experience"],
  },
  "website-design": {
    title: "Website Design Agency in Dubai, UAE | Diginext",
    description:
      "Diginext is a leading web design agency in UAE offering innovative and responsive web design in Dubai to deliver creative solutions that elevate your brand.",
    keywords: [
      "website design Dubai",
      "web design agency",
      "responsive design",
    ],
  },
  "ecommerce-development": {
    title: "Ecommerce Web Design & Development Company in Dubai | Diginext",
    description:
      "Diginext is a trusted ecommerce web design company in Dubai offering eCommerce web development with creative, secure, and scalable online store solutions.",
    keywords: [
      "ecommerce development Dubai",
      "online store development",
      "ecommerce web design",
    ],
  },
  "app-development": {
    title: "Android & iOS App Development Company in Dubai, UAE | Diginext",
    description:
      "Diginext is a top Android app development company in Dubai offering custom iOS app development services with innovative, secure, and high-performance solutions.",
    keywords: [
      "app development Dubai",
      "Android development",
      "iOS development",
    ],
  },
  "custom-web-application": {
    title: "Custom Web Application Development Services in Dubai | Diginext",
    description:
      "Diginext offers custom web application development in Dubai to boost your business. Get innovative, scalable web app development services — start your project now.",
    keywords: [
      "web application development",
      "custom web apps Dubai",
      "scalable solutions",
    ],
  },
  "social-media-marketing": {
    title: "Best Social Media Marketing Agency in Dubai, UAE | Diginext",
    description:
      "Diginext is a leading social media marketing agency in Dubai offering proven strategies to boost ROAS, engagement, and lead generation across all digital platforms.",
    keywords: [
      "social media marketing Dubai",
      "SMM agency",
      "digital marketing",
    ],
  },
  "search-engine-optimization": {
    title: "Best SEO Services Agency in Dubai, UAE | Diginext",
    description:
      "Diginext is a leading SEO agency in Dubai offering the best SEO services with tailored, cost-effective strategies to boost your rankings and online visibility.",
    keywords: [
      "SEO services Dubai",
      "search engine optimization",
      "SEO agency",
    ],
  },
  "email-marketing": {
    title: "Email Marketing Services Agency in Dubai, UAE | Diginext",
    description:
      "Want fresh leads for your business? Diginext, a top email marketing agency in Dubai, offers powerful email marketing services to grow your brand faster.",
    keywords: ["email marketing Dubai", "email campaigns", "lead generation"],
  },
  "ppc-advertising": {
    title: "#1 Pay Per Click Management & Advertising in Dubai | Diginext",
    description:
      "Diginext is a top pay per click advertising agency in Dubai offering expert PPC management services to boost brand visibility, generate leads, and drive higher ROI.",
    keywords: [
      "PPC advertising Dubai",
      "pay per click management",
      "Google Ads Dubai",
    ],
  },
  "shared-hosting": {
    title: "Shared Hosting Services in Dubai | Diginext",
    description:
      "Shared Hosting Services in Dubai are vital for online presence. Diginext provides reliable shared hosting in Dubai, helping businesses reach global audience online.",
    keywords: [
      "shared hosting Dubai",
      "web hosting services",
      "affordable hosting",
    ],
  },
  "dedicated-hosting": {
    title: "Dedicated Server Hosting Services in Dubai, UAE | Diginext",
    description:
      "The finest dedicated hosting services in Dubai for your website. Diginext offers high-performance best dedicated server hosting for businesses across the UAE.",
    keywords: [
      "dedicated hosting Dubai",
      "dedicated server",
      "server hosting UAE",
    ],
  },
  "cloud-hosting": {
    title: "Best Cloud Hosting Services in Dubai, UAE | Diginext",
    description:
      "Experience fast, secure, and reliable cloud hosting services in Dubai with Diginext — the best cloud hosting provider in UAE for performance and business growth.",
    keywords: ["cloud hosting Dubai", "cloud services UAE", "scalable hosting"],
  },
  "email-hosting": {
    title: "Reliable Email Hosting Services Providers in Dubai | Diginext",
    description:
      "Diginext is a top email hosting provider in UAE offering reliable, secure, and scalable email hosting in Dubai with expert local support for your business.",
    keywords: [
      "email hosting Dubai",
      "business email hosting",
      "secure email services",
    ],
  },
  "g-suite": {
    title: "G Suite Services in Dubai ,UAE | Diginext",
    description:
      "Enhance business communication with Diginext G Suite services in Dubai. Reliable, professional G Suite in Dubai integrated with Google Workspace tools.",
    keywords: ["G Suite Dubai", "Google Workspace", "business email solutions"],
  },
  photography: {
    title: "Professional Photography Services in Dubai | Diginext",
    description:
      "Diginext is a leading professional photography service in Dubai offering expert photography for events, corporate projects, and creative visual storytelling.",
    keywords: [
      "photography Dubai",
      "professional photographer",
      "corporate photography",
    ],
  },
  videography: {
    title: "Creative Video Production Agency in Dubai, UAE | Diginext",
    description:
      "Diginext offers professional creative video production services in Dubai. Hire our experienced videography service in Dubai to capture your precious moments.",
    keywords: [
      "videography Dubai",
      "video production",
      "creative video services",
    ],
  },
  "event-management": {
    title: "Top Event Management Comapny in Dubai, UAE | Diginext",
    description:
      "Event management and planning in Dubai play a key role in your event's success. Choose Diginext — one of the top event management companies in the UAE.",
    keywords: ["event management Dubai", "event planning", "corporate events"],
  },
  "concerts-and-shows": {
    title: "Concert Event Management Company in Dubai | Diginext",
    description:
      "Diginext is a top concert event management company in Dubai offering complete event services with expert planning, execution, and seamless concert experiences.",
    keywords: ["concert management Dubai", "show production", "event services"],
  },
  "corporate-events": {
    title: "Corporate Event Management Company in Dubai | Diginext",
    description:
      "Diginext is one of the leading corporate event management and planning companies in Dubai, offering customized solutions to make every event a success.",
    keywords: [
      "corporate events Dubai",
      "business events",
      "event planning company",
    ],
  },
  "media-coverage": {
    title: "Latest UAE News Coverage Updates in Dubai | Diginext",
    description:
      "Stay updated with trusted UAE news coverage from Diginext News. Get the latest headlines, stories, and updates from Dubai and across the Emirates.",
    keywords: ["UAE news", "media coverage Dubai", "news updates"],
  },
};

// Solutions metadata
export const SOLUTIONS_SEO: Record<string, PageMetadata> = {
  "digital-printing": {
    title: "Fast & Affordable Digital Printing Services in Dubai | Diginext",
    description:
      "Diginext offers high-quality digital printing services in Dubai with fast delivery and great prices. Trusted for professional, reliable across the UAE.",
    keywords: [
      "digital printing Dubai",
      "printing services",
      "affordable printing UAE",
    ],
  },
  signages: {
    title: "Best Signage Company in Dubai, UAE | Diginext",
    description:
      "Discover expert signage solutions with Diginext, one of the best signage companies in Dubai. Trusted signage manufacturers in Dubai for design and installation.",
    keywords: ["signage Dubai", "signage company", "signage manufacturers"],
  },
  "exhibition-stand-builders": {
    title: "Best Exhibition Stand Contractor in Dubai, UAE | Diginext",
    description:
      "Diginext, the best exhibition stand contractor in Dubai, offers creative design and build solutions. Trusted exhibition stand builders in Dubai for all events.",
    keywords: [
      "exhibition stand Dubai",
      "stand builders",
      "exhibition contractor",
    ],
  },
  "corporate-gift": {
    title: "A Strategic Branded Corporate Gifts Partner In Dubai | Diginext",
    description:
      "Diginext is a trusted corporate gifts supplier in Dubai offering a wide range of branded corporate gifts for every occasion.Quality products tailored for your brand.",
    keywords: ["corporate gifts Dubai", "branded gifts", "business gifts"],
  },
  "performance-marketing": {
    title: "Performance Marketing Agency in Dubai | Diginext",
    description:
      "Diginext is a leading performance marketing agency in Dubai offering expert performance marketing services designed to boost ROI, leads, and brand growth online.",
    keywords: [
      "performance marketing Dubai",
      "ROI marketing",
      "digital performance",
    ],
  },
  "marketing-consultant": {
    title: "Best Marketing and Advertising Consultant in Dubai | Diginext",
    description:
      "Diginext is a best marketing agency in dubai specializing in branding, digital campaigns, and creative strategies.Contact for consultation.",
    keywords: [
      "marketing consultant Dubai",
      "advertising consultant",
      "marketing agency",
    ],
  },
  "growth-marketing": {
    title: "Best Growth Marketing Agency in Dubai, UAE | DigiNext",
    description:
      "Drive results with DigiNext, a leading growth marketing agency in Dubai, UAE. We craft data-driven strategies to boost your brand, leads, and revenue growth.",
    keywords: [
      "growth marketing Dubai",
      "marketing strategy",
      "business growth",
    ],
  },
  "content-marketing": {
    title: "Content Marketing Services in Dubai | Diginext",
    description:
      "Diginext is a content marketing agency in Dubai that helps brands create powerful stories, build trust, and drive real engagement across all digital platforms.",
    keywords: [
      "content marketing Dubai",
      "content strategy",
      "digital content",
    ],
  },
  "influencer-marketing": {
    title: "Top Influencer Marketing Agency in Dubai | DigiNext",
    description:
      "DigiNext is a leading influencer marketing agency in Dubai, offering top influencer marketing services in Dubai. Talk to our Dubai marketing experts today!",
    keywords: [
      "influencer marketing Dubai",
      "social media influencers",
      "brand partnerships",
    ],
  },
  "it-services": {
    title: "Best IT Services Company in Dubai, UAE | DigiNext",
    description:
      "DigiNext is a leading IT company in Dubai, offering top IT services in Dubai. Delivering innovative digital solutions to help businesses grow and succeed.",
    keywords: ["IT services Dubai", "IT company", "technology solutions"],
  },
  "enterprise-solutions": {
    title: "Enterprise Solutions Company in Dubai, UAE | DigiNext",
    description:
      "DigiNext provide top enterprise solutions in Dubai, UAE, including ERP, CRM, SCM, and BI systems to optimize business operations and drive growth.",
    keywords: ["enterprise solutions Dubai", "ERP systems", "CRM solutions"],
  },
  "gis-planning": {
    title: "Top Geospatial Company in Dubai, UAE | DigiNext",
    description:
      "DigiNext provides top geospatial solutions in UAE, including GIS, mapping, and spatial data services to optimize operations across industries.",
    keywords: ["GIS Dubai", "geospatial solutions", "mapping services"],
  },
  "on-site-support": {
    title: "Onsite Support Services & Solutions in Dubai | DigiNext",
    description:
      "DigiNext's onsite IT support solutions in Dubai provide tailored, competitively priced IT resources to deliver reliable technology services your business needs.",
    keywords: [
      "onsite support Dubai",
      "IT support services",
      "technical support",
    ],
  },
  "cyber-security": {
    title: "Leading Cyber Security Company in Dubai,UAE | DigiNext",
    description:
      "DigiNext offers network & cloud security, data protection, threat monitoring, risk assessment, and incident response. Trusted cyber security experts in UAE.",
    keywords: [
      "cyber security Dubai",
      "network security",
      "data protection UAE",
    ],
  },
  "hr-software-development": {
    title: "Best hr software Development in dubai, UAE | DigiNext",
    description:
      "DigiNext offers the best HR software in Dubai with smart HR solutions. Reliable HR software development services to enhance your organization's productivity.",
    keywords: ["HR software Dubai", "HRMS development", "HR solutions"],
  },
  "enterprise-crm-software": {
    title: "CRM Development Company Solutions in Dubai | DigiNext",
    description:
      "DigiNext is a leading CRM development company in Dubai, offering expert CRM software development services in Dubai tailored to your business needs.",
    keywords: [
      "CRM development Dubai",
      "CRM software",
      "customer relationship management",
    ],
  },
  "erp-development-consultation": {
    title: "ERP Development Company in Dubai,UAE | DigiNext",
    description:
      "DigiNext is a trusted ERP development company in Dubai, offering expert ERP consulting services, custom ERP solutions, system integration, and ongoing support.",
    keywords: [
      "ERP development Dubai",
      "ERP consulting",
      "enterprise resource planning",
    ],
  },
  "custom-dashboard-design": {
    title: "Custom Dashboard Design Services in Dubai | DigiNext",
    description:
      "DigiNext's custom dashboard design services transform messy data into clear, informative dashboards. Expert dashboard design services in Dubai for better insights.",
    keywords: [
      "dashboard design Dubai",
      "data visualization",
      "custom dashboards",
    ],
  },
  "erp-data-migration": {
    title: "ERP Data Migration Services in Dubai | DigiNext",
    description:
      "End-to-end ERP migration services by DigiNext. Our ERP data migration solutions ensure smooth, secure, and scalable system transition for your business in Dubai.",
    keywords: [
      "ERP migration Dubai",
      "data migration services",
      "system migration",
    ],
  },
  "erp-app-development": {
    title: "ERP App Development Services Company in Dubai | DigiNext",
    description:
      "DigiNext is a leading ERP development services company in Dubai, offering ERP app development solutions that boost efficiency, productivity, and business growth.",
    keywords: [
      "ERP app development",
      "ERP mobile apps",
      "enterprise applications",
    ],
  },
  "learning-management-system": {
    title: "Learning Management System in Dubai, UAE | DigiNext",
    description:
      "DigiNext's learning management system in Dubai empowers educational and corporate training. Our LMS platforms deliver a seamless, efficient learning experience.",
    keywords: [
      "LMS Dubai",
      "learning management system",
      "e-learning platform",
    ],
  },
};
