import { ImageConstants } from "@/constants/ImageConstants";
export interface SolutionFAQ {
  question: string;
  answer: string;
}

export interface SolutionStep {
  title: string;
  description: string;
}

export interface SolutionProcess {
  title: string;
  description: string;
  steps: SolutionStep[];
}

export interface SolutionSection {
  title: string;
  description: string;
  services: {
    title: string;
    description: string;
  }[];
}

export interface PartnerSection {
  title: string;
  description: string;
}

export interface SolutionDetailContent {
  slug: string;
  title: string;
  heroDescription: string;
  ctaSection?: {
    title: string;
    description: string;
  };
  imageUrl: string;
  servicesOffered: SolutionSection;
  process: SolutionProcess;
  partnerSection?: PartnerSection;
  faqs: {
    items: SolutionFAQ[];
  };
}

export const SERVICE_DETAILS: Record<string, SolutionDetailContent> = {
  "digital-printing": {
    slug: "digital-printing",
    title: "High-Quality Digital Printing Services in Dubai",
    heroDescription:
      "We bring your ideas to life at DigiNext with our high-quality digital printing services. Our team creates beautiful visuals that attract attention and improve your brand's identity, from creative ideas to bright prints. As a trusted name for digital printing in Dubai, we use the best printing technology and craftsmanship to make sure that every print represents your brand. \n\n No matter if it is marketing material, corporate stationery, signage, or product packaging, our printing solutions are structured in a way to meet your goals in the right way.",
    ctaSection: {
      title: "Let’s Bring Your Vision to Print",
      description:
        "Your brand needs prints that stand out. Let us talk about how to turn your creative ideas into strong, high-quality visuals that people will notice.",
    },
    imageUrl: ImageConstants.SOLUTION_IMAGE,
    servicesOffered: {
      title: "Digital Printing Services We Offer",
      description:
        "We deliver complete and reliable printing services in Dubai for businesses of all sizes. Check out our selection of personalized printing options:",
      services: [
        {
          title: "Corporate & Marketing Collaterals",
          description:
            "From brochures and flyers to business cards and company profiles, we design and print materials that help your brand make a lasting impression.",
        },
        {
          title: "Large Format & Signage Printing",
          description:
            "We make eye-catching banners, posters, and outdoor signs that help your business stand out and get more attention.",
        },
        {
          title: "Custom Packaging & Labels",
          description:
            "Make your products stand out with premium printed packaging and custom labels designed to reflect your brand personality.",
        },
        {
          title: "Event & Promotional Materials",
          description:
            "We provide on-brand printed materials that help you engage your audience, no matter it is trade shows, events, or corporate promotions.",
        },
        {
          title: "Office Branding & Interior Prints",
          description:
            "We use creative wall graphics, window decals, and display prints that show off your company's culture and vision to change the look of your workspace.",
        },
      ],
    },
    process: {
      title: "Our Printing Process",
      description:
        "We use detail-oriented printing process to make sure that every project has the best quality, clarity, and consistency.",
      steps: [
        {
          title: "Consultation & Design Brief",
          description:
            "Understanding your requirements, materials, and branding goals.",
        },
        {
          title: "Creative Design & Proofing",
          description:
            "Developing and refining visuals to match your expectations.",
        },
        {
          title: "Printing & Production",
          description:
            "Using state-of-the-art printing technology for high-quality results.",
        },
        {
          title: "Quality Check",
          description:
            "Ensuring color accuracy, clarity, and finish before final delivery.",
        },
        {
          title: "Delivery & Installation",
          description:
            "Timely delivery and setup for a smooth brand presentation.",
        },
      ],
    },
    partnerSection: {
      title: "Partner with DigiNext",
      description:
        "When it comes to digital printing, we are your reliable friend along with our creativity, accuracy, and dependability. Our designs do not just print, they also talk to you. We can help you bring your brand to life with prints that get people to act and make your brand more well-known.",
    },
    faqs: { items: [] }, // Leave empty array or remove this property entirely if unused in your component
  },
  signages: {
    slug: "signages",
    title: "The Best Signage Company in Dubai",
    heroDescription:
      "We believe your brand should stand out, not just online but also in every place your audience looks. As one of the best signage companies in Dubai, we design and deliver signage solutions that get people's attention and make your business stand out. Our creative experts make sure that your brand message is seen, remembered, and admired from concept to installation.\n\nNo matter if you need indoor branding, outdoor displays or digital signage solutions, we use creativity, technology, and accuracy to make your ideas real. Every sign we make is a reflection of your brand's personality, bold, clear, and designed to make an impression.",
    ctaSection: {
      title: "Let’s Make Your Brand Unmissable",
      description:
        "Want to make your brand stand out with beautiful, high-quality signage? Let us talk and make your dream come true.",
    },
    imageUrl: ImageConstants.SOLUTION_IMAGE,
    servicesOffered: {
      title: "Signage Solutions We Offer",
      description:
        "As one of the top signage manufacturers in Dubai, we offer a wide range of creative signage options that can help your brand connect with its audience in a meaningful way.",
      services: [
        {
          title: "Indoor Signage",
          description:
            "Improve your interior spaces with premium indoor signs that reflect your brand’s personality and professionalism.",
        },
        {
          title: "Outdoor Signage",
          description:
            "Set up signage that will last and stand up to the weather that will capture people's attention day and night.",
        },
        {
          title: "Digital Signage Solutions",
          description:
            "We use interactive, high-resolution digital signage displays to bring your message to life in a way that will get people's attention and have the most effect.",
        },
        {
          title: "Retail & Event Signage",
          description:
            "From store displays to event setups, we make custom signs that make your brand stand out and grab people's attention.",
        },
        {
          title: "Vehicle Branding & Signage",
          description:
            "Turn your vehicles into mobile billboards with high-quality graphics that promote your brand everywhere you go.",
        },
      ],
    },
    process: {
      title: "Our Process",
      description:
        "Every signage project at DigiNext goes through a detail-oriented process to make sure that every step is accurate, high-quality, and consistent.",
      steps: [
        {
          title: "Consultation & Strategy",
          description: "Understanding your brand goals and audience.",
        },
        {
          title: "Design & Visualization",
          description: "Crafting creative and impactful signage concepts.",
        },
        {
          title: "Material Selection",
          description:
            "Choosing durable, high-quality materials that suit your needs.",
        },
        {
          title: "Production & Manufacturing",
          description: "Executing designs with precision and craftsmanship.",
        },
        {
          title: "Installation & Delivery",
          description:
            "Smooth, on-site setup ensuring perfect placement and visibility.",
        },
      ],
    },
    partnerSection: {
      title: "Partner with DigiNext",
      description:
        "Customers should be able to see, recognize, and remember your brand. As a trusted signage solutions provider in Dubai, we help businesses transform spaces into experiences and ideas into strong visuals.",
    },
    faqs: { items: [] }, // No FAQ (leave as empty array)
  },
  "exhibition-stand-builders": {
    slug: "exhibition-stand-builders",
    title: "Best Exhibition Stand Contractor in Dubai",
    heroDescription:
      "Your brand should stand out, literally. We create exhibition stands at DigiNext that do not just take up space, they get people's attention. As one of the best exhibition stand contractors in Dubai, we use creativity, functionality, and new ideas to make stands that will make your brand the centre of attention at any event.\n\nOur experienced exhibition stand builders in Dubai understand that every brand has a story to tell. That is why we focus on providing custom exhibition solutions that show who you are, draw in visitors, and make a lasting impression. From concept to construction, we make sure every detail is designed to impress and perform.",
    ctaSection: {
      title: "Let’s Build Your Next Big Showcase",
      description:
        "Are you getting ready for your next event or trade show? Let's talk about how to make a space that gets people talking, gets them involved, and makes your brand stand out.",
    },
    imageUrl: ImageConstants.SOLUTION_IMAGE,
    servicesOffered: {
      title: "Our Exhibition Stand Services",
      description:
        "We provide a wide range of custom exhibition stand design and build services in Dubai to meet the needs of your brand and event.",
      services: [
        {
          title: "Custom Exhibition Stands",
          description:
            "We design and build unique, brand-specific stands that perfectly match your company’s identity and event objectives.",
        },
        {
          title: "Modular Exhibition Stands",
          description:
            "Our modular stands are a great choice for businesses that often take part in exhibitions because they are flexible, reusable, and affordable.",
        },
        {
          title: "Double-Decker Stands",
          description:
            "Multi-level stands that look great and are useful at the same time are the best way to make the most of your space and make an impact.",
        },
        {
          title: "Event Pavilion Design",
          description:
            "We build huge pavilions that tell the story of your brand, making it impossible for people to miss you at big expos and events.",
        },
        {
          title: "3D Design & Visualization",
          description:
            "Before we build, we visualize. Our 3D designs help you see how your stand will look and feel long before the event begins.",
        },
      ],
    },
    process: {
      title: "Our Process",
      description:
        "Every step of our process is in line with your brand vision, so you can be sure of accuracy, creativity, and on-time delivery.",
      steps: [
        {
          title: "Consultation & Briefing",
          description:
            "Understanding your brand, goals, and event requirements.",
        },
        {
          title: "Concept & Design",
          description:
            "Crafting 3D visuals and design mockups for your approval.",
        },
        {
          title: "Production & Build",
          description:
            "Transforming ideas into reality using high-quality materials.",
        },
        {
          title: "Installation & Setup",
          description:
            "Managing on-site assembly and ensuring a perfect finish.",
        },
        {
          title: "Dismantle & Storage",
          description:
            "Offering post-event support for easy reuse and logistics.",
        },
      ],
    },
    partnerSection: {
      title: "Partner with DigiNext",
      description:
        "As a trusted exhibition stand company in Dubai, we make your booth into a brand experience that connects with people and gets them to buy. We make sure your brand stands out at every trade show by using creative design, skilled craftsmanship, and timely execution.",
    },
    faqs: { items: [] }, // No FAQ (leave as empty array)
  },
  "corporate-gift": {
    slug: "corporate-gift",
    title: "Corporate Gifts That Make a Lasting Impression",
    heroDescription:
      "As a trusted corporate gifts supplier in Dubai, we help brands build stronger relationships by giving them elegant, high-quality, and personalized corporate gifts that people will remember. It is easy for us to help your brand show thanks, recognition, and professionalism in the best way possible.\n\nIf you are celebrating clients, employees, or business milestones, we deliver branded corporate gifts that reflect your company’s identity and values. DigiNext makes sure that every product, from design to delivery, gets attention, shows appreciation, and boosts your business's presence.",
    ctaSection: {
      title: "Let’s Create the Perfect Gift for Every Occasion",
      description:
        "Looking for a gifting solution that really stands out? Let's talk and come up with one-of-a-kind business gifts that fits perfectly with your brand.",
    },
    imageUrl: ImageConstants.SOLUTION_IMAGE,
    servicesOffered: {
      title: "Corporate Gift Solutions We Offer",
      description:
        "DigiNext offers a wide range of personalized gift options that are perfect for your brand and the events you have planned.",
      services: [
        {
          title: "Branded Corporate Gifts",
          description:
            "With high-quality branded products that speak for your business and build long-term loyalty, you can make a name for yourself.",
        },
        {
          title: "Personalised Corporate Gifts",
          description:
            "We customize your gifts by making designs, engravings, and packaging that are unique to your brand.",
        },
        {
          title: "Employee Recognition Gifts",
          description:
            "Reward dedication and inspire your team with thoughtful gifts that celebrate milestones and increase morale.",
        },
        {
          title: "Client Appreciation Gifts",
          description:
            "Give elegant, memorable gifts that leave a good impression to show your appreciation and strengthen business ties.",
        },
        {
          title: "Event & Promotional Gifts",
          description:
            "Give away creative items that promote your brand well at trade shows, product launches, and other business events to stand out.",
        },
      ],
    },
    process: {
      title: "Our Process",
      description:
        "Our simplified procedure makes sure that every corporate gift is carefully planned, perfectly made, and delivered on time.",
      steps: [
        {
          title: "Consultation",
          description: "Understanding your brand, audience, and gifting goals.",
        },
        {
          title: "Concept & Design",
          description: "Creating design mockups for your approval.",
        },
        {
          title: "Customization",
          description:
            "Adding branding, personalization, and unique packaging.",
        },
        {
          title: "Production & Quality Check",
          description: "Ensuring each gift meets premium standards.",
        },
        {
          title: "Delivery",
          description: "On-time, hassle-free delivery across Dubai and beyond.",
        },
      ],
    },
    partnerSection: {
      title: "Partner with DigiNext",
      description:
        "We combine creativity, precision, and branding expertise to deliver corporate gifting solutions that inspire connection and appreciation. We make sure that every gift, from personalized corporate gifts to branded giveaways, shows how great your business is.",
    },
    faqs: { items: [] }, // No FAQ
  },
  "performance-marketing": {
    slug: "performance-marketing",
    title: "Performance Marketing Agency in Dubai",
    heroDescription:
      "We do not just run campaigns, we deliver results that matter. As a trusted performance marketing company in Dubai, we pay attention to results that can be measured, such as leads, conversions, and ROI. Our team uses data-driven insights, creative strategies, and precise targeting to make sure that each buck you spend on marketing brings real value to your business.\n\nWith years of expertise in performance marketing services, we help brands grow steadily across search, social, and display networks by giving them a stronger digital presence. Every campaign is designed to work, from raising awareness to taking action.",
    ctaSection: {
      title: "Let’s Turn Your Goals Into Results",
      description:
        "Let us talk and see how our performance marketing solutions can help your brand grow more quickly, intelligently, and efficiently.",
    },
    imageUrl: ImageConstants.SOLUTION_IMAGE,
    servicesOffered: {
      title: "Performance Marketing Services We Offer",
      description:
        "As one of the top performance marketing agencies in Dubai, we offer personalised services that are meant to help you achieve measurable success.",
      services: [
        {
          title: "Search Engine Marketing (SEM)",
          description:
            "We use data to make campaigns that put your brand at the top of search results, bringing in qualified traffic that turns into sales.",
        },
        {
          title: "Social Media Advertising",
          description:
            "Our targeted ad campaigns on platforms like Meta, Instagram, and LinkedIn reach the right audience at the right time, maximizing your ROI.",
        },
        {
          title: "Display & Remarketing Campaigns",
          description:
            "We help you stay visible to potential customers through engaging display ads and smart remarketing techniques that re-engage visitors.",
        },
        {
          title: "Conversion Rate Optimization (CRO)",
          description:
            "We analyze how users interact with our landing pages and make changes to them to turn clicks into conversions.",
        },
        {
          title: "Analytics & Performance Tracking",
          description:
            "We monitor how well our campaigns are doing, figure out what works, and keep improving our strategies to get the best results.",
        },
      ],
    },
    process: {
      title: "Our Marketing Process",
      description:
        "Our process, which is based on performance, makes sure that every campaign is carefully planned, expertly carried out, and always improved to get the best return on investment.",
      steps: [
        {
          title: "Research & Strategy",
          description: "Understanding your goals, audience, and competition.",
        },
        {
          title: "Campaign Planning",
          description: "Creating structured, channel-specific strategies.",
        },
        {
          title: "Execution",
          description:
            "Launching optimized campaigns with catchy creatives and messaging.",
        },
        {
          title: "Monitoring & Optimization",
          description: "Tracking performance and refining for better outcomes.",
        },
        {
          title: "Reporting & Insights",
          description: "Delivering transparent analytics to measure ROI.",
        },
      ],
    },
    partnerSection: {
      title: "Partner with DigiNext",
      description:
        "As a leading performance marketing agency in Dubai, we use both creativity and data to deliver results that really work. We make every click count, whether you want to get more conversions, reach new audiences, or grow your brand online.",
    },
    faqs: { items: [] }, // No FAQ
  },
  "marketing-consultant": {
    slug: "marketing-consultant",
    title: "Marketing Consultancy That Drives Strategy, Growth, and Success",
    heroDescription:
      "Having the right marketing plan is very important in today's digital world. We do more than just run campaigns, we give you clear goals, direction, and results. As a trusted marketing and advertising consultant, our goal is to help brands make stronger connections, get greater visibility, and see measurable growth through strategies that are made just for them.\n\nDigiNext has become one of the best marketing agencies in Dubai because it has been in business for a long time and knows the industry well. We research your market, get to know your audience, and make marketing plans that are unique to you and help you reach your goals.",
    ctaSection: {
      title: "Let’s Grow Together",
      description:
        "A conversation is the first step in every great plan. Let us talk and make a marketing plan just for your business.",
    },
    imageUrl: ImageConstants.SOLUTION_IMAGE,
    servicesOffered: {
      title: "Our Marketing Consulting Services",
      description:
        "We understand everything you need to know about marketing, from digital strategy to performance optimization. We can help you turn problems into chances.",
      services: [
        {
          title: "Strategic Marketing Planning",
          description:
            "We develop marketing plans that are based on your brand goals, market trends, and target audience.",
        },
        {
          title: "Brand Positioning & Messaging",
          description:
            "As one of the best marketing consulting firms, we help you figure out what makes your brand unique and make sure that your messages are always clear and build trust.",
        },
        {
          title: "Digital Marketing Strategy",
          description:
            "We use data to make digital plans that include SEO, content, and paid campaigns to improve your online presence and performance.",
        },
        {
          title: "Market Research & Insights",
          description:
            "We help you make better decisions by giving you complete market research and competitor analysis.",
        },
        {
          title: "Performance Analysis & Optimization",
          description:
            "Our experts monitor your campaigns all the time and make changes to get the best return on investment (ROI) and long-term brand growth.",
        },
      ],
    },
    process: {
      title: "Our Consulting Process",
      description:
        "At DigiNext, we follow a structured, collaborative process to ensure every strategy we create delivers measurable outcomes.",
      steps: [
        {
          title: "Discovery & Research",
          description: "Understanding your brand, market, and objectives.",
        },
        {
          title: "Strategy Development",
          description:
            "Designing data-backed marketing plans structured to your goals.",
        },
        {
          title: "Implementation Guidance",
          description: "Supporting your team with tools and best practices.",
        },
        {
          title: "Performance Review",
          description: "Measuring outcomes and refining for continuous growth.",
        },
      ],
    },
    partnerSection: {
      title: "Partner with DigiNext",
      description:
        "The right strategy is the first step to your success. DigiNext is one of the best marketing consultant firms in Dubai. They help your business stand out in a crowded market by showing you how to grow slowly and consistently.",
    },
    faqs: { items: [] }, // No FAQ
  },
  "growth-marketing": {
    slug: "growth-marketing",
    title: "Growth Marketing Agency in Dubai",
    heroDescription:
      "As a leading growth marketing agency in Dubai, we help businesses achieve measurable success through data-based campaigns, creative storytelling, and continuous optimization. Our team combines new ideas with information to help your brand grow faster, making every marketing effort a long-term benefit.\n\nGrowth marketing focuses on the whole customer journey, from awareness to retention. We experiment, look at the results, and make improvements at every step to make sure you get results that are consistent and scalable that matter to your bottom line.",
    ctaSection: {
      title: "Let’s Build Your Growth Story",
      description:
        "Are you ready to move your brand to the next level? Let us get in touch and come up with plans that work and show results.",
    },
    imageUrl: ImageConstants.SOLUTION_IMAGE,
    servicesOffered: {
      title: "Our Growth Marketing Services",
      description:
        "DigiNext is a complete growth marketing agency that uses creativity, data, and technology to help your business succeed in a digital world that is always changing.",
      services: [
        {
          title: "Performance Marketing",
          description:
            "We use data insights and strategic ad placements to develop targeted campaigns that get the most return on investment (ROI) and bring in high-quality leads.",
        },
        {
          title: "Conversion Rate Optimization (CRO)",
          description:
            "We improve your website and campaigns to turn more visitors into loyal customers by looking at how they act.",
        },
        {
          title: "Email & Retention Marketing",
          description:
            "We create personalized email journeys and ways to get people to engage with you that keep them coming back for more.",
        },
        {
          title: "A/B Testing & Analytics",
          description:
            "We use ongoing testing and analytics to make our campaigns work better and help us make better decisions.",
        },
        {
          title: "Content & Campaign Strategy",
          description:
            "We create interesting content and strategies for multiple channels that will help your brand grow online in the long term.",
        },
      ],
    },
    process: {
      title: "Our Approach to Growth Marketing",
      description:
        "Our proven growth system helps businesses achieve more with less by combining creativity, testing, and strategy to make a difference that can be measured.",
      steps: [
        {
          title: "Research & Goal Setting",
          description:
            "Understand your market, audience, and growth objectives.",
        },
        {
          title: "Experimentation & Strategy",
          description:
            "Test creative ideas that drive awareness and engagement.",
        },
        {
          title: "Implementation",
          description:
            "Launch, monitor, and optimize high-performing campaigns.",
        },
        {
          title: "Performance Analysis",
          description:
            "Track growth metrics and refine strategies for ongoing success.",
        },
      ],
    },
    partnerSection: {
      title: "Partner with DigiNext",
      description:
        "At DigiNext, growth is not something that happens once, it is a journey that never ends. As your trusted growth marketing agency in Dubai, we help you attract new customers, engage them, and keep them coming back with strategies that change as your business does.",
    },
    faqs: { items: [] }, // No FAQ
  },
  "content-marketing": {
    slug: "content-marketing",
    title: "Content Marketing Services in Dubai",
    heroDescription:
      "We help businesses stand out by telling stories that are organized and writing content that informs, inspires, and converts. As a trusted content marketing agency in Dubai, we create powerful stories that get people engaged, build trust, and help your business grow continuously.\n\nOur content marketing services in Dubai are designed to help you get real results that matter, if you want to improve your online presence, get more leads, or get more people to see your business.",
    ctaSection: {
      title: "Let’s Tell Your Story Right",
      description:
        "We make sure that everyone hears the story behind your brand. Let us talk and make content that connects, converts, and captivates.",
    },
    imageUrl: ImageConstants.SOLUTION_IMAGE,
    servicesOffered: {
      title: "Our Content Marketing Services",
      description:
        "We want to make your brand an authority in the industry by giving you valuable, well-written content.",
      services: [
        {
          title: "Content Strategy Development",
          description:
            "We create custom content strategies that fit your goals, audience, and brand message. This makes sure that every word adds value.",
        },
        {
          title: "Blog & Article Writing",
          description:
            "Our team creates blog posts and articles that are interesting and SEO-friendly. These posts and articles help your website get more traffic from search engines.",
        },
        {
          title: "Website Content Creation",
          description:
            "As one of the best content marketing agencies in Dubai, we create clear, convincing website copy that matches your brand's voice and gets people to take action.",
        },
        {
          title: "Social Media Content",
          description:
            "We create content for social media that stops people from scrolling, which helps your brand stand out and get more people to interact with it.",
        },
        {
          title: "Email Marketing Content",
          description:
            "Personalized, conversion-focused email campaigns that keep your brand top of the list, can turn your audience into loyal customers.",
        },
        {
          title: "Content Optimization",
          description:
            "We improve the content that already exists, to make it more interesting, search engine friendly, and in alignment with what users want. This helps you reach more people and make it more relevant.",
        },
      ],
    },
    process: {
      title: "Our Approach to Content Marketing",
      description:
        "Our content marketing process combines creativity with strategy to make sure that the right people hear your brand message at the right time.",
      steps: [
        {
          title: "Research & Audience Analysis",
          description:
            "Understanding your industry, goals, and target audience.",
        },
        {
          title: "Content Planning",
          description:
            "Developing a strategy with themes, tone, and publishing schedules.",
        },
        {
          title: "Content Creation",
          description:
            "Writing, designing, and producing original, compelling content.",
        },
        {
          title: "Optimization",
          description: "Improving visibility through SEO best practices.",
        },
        {
          title: "Distribution",
          description:
            "Sharing your content across the right digital channels for maximum reach.",
        },
        {
          title: "Performance Tracking",
          description:
            "Measuring engagement and refining for continuous improvement.",
        },
      ],
    },
    partnerSection: {
      title: "Partner with DigiNext",
      description:
        "As a content marketing agency in Dubai that focuses on results. We help your brand communicate clearly, connect with people in a genuine way, and grow in a way that lasts. We use our expert content marketing services to convert words into power and stories into success.",
    },
    faqs: { items: [] }, // No FAQ
  },
  "influencer-marketing": {
    slug: "influencer-marketing",
    title: "Influencer Marketing Agency in Dubai",
    heroDescription:
      "DigiNext helps your brand connect with the right people through the power of influence in a world where originality gets attention. As a trusted influencer marketing agency in Dubai, we design strategic campaigns that make your brand's voice louder, build trust, and get people engaged in a meaningful way.\n\nWe do not just look at numbers when we do influencer marketing, we also look at real relationships, real stories, and real results. We make sure your brand gets to the right people at the right time through partnerships on social media, content-driven partnerships, or product promotions.",
    ctaSection: {
      title: "Let’s Build Influence, Not Just Reach",
      description:
        "Your audience believes in people, not ads. Let us work together to turn influence into action.",
    },
    imageUrl: ImageConstants.SOLUTION_IMAGE,
    servicesOffered: {
      title: "Influencer Marketing Services We Offer",
      description:
        "DigiNext is a leading provider of influencer marketing services in Dubai. We partner with top creators, brands, and communities to get results that matter.",
      services: [
        {
          title: "Influencer Strategy & Planning",
          description:
            "We create influencer strategies based on data that align with your brand's values, audience, and business goals.",
        },
        {
          title: "Influencer Collaboration & Management",
          description:
            "We take care of everything, from finding the right influencers to managing contracts and campaigns.",
        },
        {
          title: "Content Creation & Storytelling",
          description:
            "Our creative team works with influencers to make interesting content for each platform that builds trust and drives engagement.",
        },
        {
          title: "Campaign Execution & Optimization",
          description:
            "We make sure your influencer campaigns go off without any problems by monitoring performance, making changes as needed, and getting the most return on investment.",
        },
        {
          title: "Reporting & Analytics",
          description:
            "Get clear, useful reports that show you how far your campaign reached, how many people engaged, and how many people took action.",
        },
      ],
    },
    process: {
      title: "Our Approach to Influencer Marketing",
      description:
        "We use a mix of creativity, strategy, and analytics in our influencer marketing at DigiNext to build real brand connections that get real results.",
      steps: [
        {
          title: "Research & Audience Mapping",
          description:
            "Identifying your ideal audience and selecting relevant influencers.",
        },
        {
          title: "Strategy Development",
          description:
            "Creating campaign concepts that blend creativity with your marketing objectives.",
        },
        {
          title: "Collaboration & Content Creation",
          description:
            "Partnering with influencers to create authentic, engaging content.",
        },
        {
          title: "Campaign Execution",
          description:
            "Managing timelines, deliverables, and live activations.",
        },
        {
          title: "Performance Tracking",
          description:
            "Analyzing engagement metrics to refine and scale campaigns effectively.",
        },
      ],
    },
    partnerSection: {
      title: "Partner with DigiNext",
      description:
        "As a leading influencer marketing agency in Dubai, DigiNext transforms influence into growth that can be measured. We use a mix of creativity, strategy, and honesty to help your brand stand out in the digital world.",
    },
    faqs: { items: [] }, // No FAQ
  },
  "it-services": {
    slug: "it-services",
    title: "Leading IT Services in Dubai",
    heroDescription:
      "We offer modern IT services and solutions that are focused on getting results and helping your business run more efficiently, quickly, and safely. We are one of the best IT companies in Dubai, and we use our knowledge of technology, strategy, and expertise to solve difficult challenges and keep your business running smoothly.\n\nOur goal is to provide complete IT services to increase productivity, keep your data safe, and help your business succeed in the long term, no matter how big or small it is.",
    ctaSection: {
      title: "Let’s Empower Your Business Together",
      description:
        "Work with a trusted IT services company in the UAE that understands what you need and can build solutions that fit your goals. Let us have a chat!",
    },
    imageUrl: ImageConstants.SOLUTION_IMAGE,
    servicesOffered: {
      title: "Our IT Services",
      description:
        "We offer a wide range of IT solutions and services that can grow with your business as its requirements change. Find out how we can help you with your digital transformation:",
      services: [
        {
          title: "Managed IT Services",
          description:
            "As a trusted IT managed service provider, we monitor, maintain, and manage your IT systems 24/7 to make sure they are always up and running and your business runs smoothly.",
        },
        {
          title: "Cloud Solutions",
          description:
            "We help businesses migrate to the cloud with secure, flexible, and affordable solutions that make it easier for collaboration and access information.",
        },
        {
          title: "IT Infrastructure Setup & Support",
          description:
            "Our team makes sure that your IT environment is stable, efficient, and ready for the future, from setting up the network to regular maintenance.",
        },
        {
          title: "Data Backup & Recovery",
          description:
            "We offer reliable data protection and disaster recovery solutions that protect your business from losing data or being attacked by hackers.",
        },
        {
          title: "Cybersecurity Services",
          description:
            "Our experts use advanced security measures to protect your systems, keep your private data safe, and make sure you follow industry standards.",
        },
      ],
    },
    process: {
      title: "Our Process",
      description:
        "We at DigiNext have a structured way of providing reliable IT solutions that meet the needs of your business.",
      steps: [
        {
          title: "Assessment & Strategy",
          description:
            "Understanding your infrastructure, needs, and challenges.",
        },
        {
          title: "Planning & Implementation",
          description: "Designing and deploying solutions that fit your goals.",
        },
        {
          title: "Monitoring & Support",
          description:
            "Offering continuous support and proactive system monitoring.",
        },
        {
          title: "Optimization & Growth",
          description:
            "Regularly improving performance and scalability as your business evolves.",
        },
      ],
    },
    partnerSection: {
      title: "Partner with DigiNext",
      description:
        "As one of the leading IT services companies in the UAE, DigiNext empowers businesses with reliable technology and constant support. From IT infrastructure to cybersecurity, we are your partner in building a smarter and more connected future.",
    },
    faqs: { items: [] }, // No FAQ
  },
  "enterprise-solutions": {
    slug: "enterprise-solutions",
    title: "Enterprise Solutions Company in UAE",
    heroDescription:
      "We deliver powerful enterprise solutions that make operations easier, increase productivity, and make digital transformation go smoothly. We are one of the top enterprise solutions companies in the UAE. Our team of experts help businesses of all sizes use new technologies to grow and perform better over time.\n\nOur custom enterprise systems are designed to connect people, data, and processes throughout your business, which leads to better decisions and smoother workflows. DigiNext's enterprise solutions in Dubai will help you stay ahead at every step of your journey, no matter if you are improving your internal operations or growing your business online.",
    ctaSection: {
      title: "Let’s Empower Your Business Together",
      description:
        "DigiNext helps you build things that are smarter, faster, and stronger. Let us talk about your vision and make the best business solution for you.",
    },
    imageUrl: ImageConstants.SOLUTION_IMAGE,
    servicesOffered: {
      title: "Enterprise Solutions We Offer",
      description:
        "We offer enterprise solutions that are reliable, scalable, and focused on performance, all structured to your specific business needs and goals.",
      services: [
        {
          title: "ERP Solutions",
          description:
            "We use smart ERP systems that are made for speed, accuracy, and visibility to connect all of your main business functions, like finance, HR, and the supply chain.",
        },
        {
          title: "CRM Solutions",
          description:
            "With custom CRM solutions that are suitable for your workflow, you can improve customer relationships, manage leads better, and increase engagement.",
        },
        {
          title: "Cloud-Based Enterprise Solutions",
          description:
            "Our secure, cloud-based enterprise systems make it simple for data access, improve collaboration, and grow without any problems.",
        },
        {
          title: "Custom Enterprise Applications",
          description:
            "We make enterprise-grade apps that are made just for your business processes, so you can be sure about the performance, flexibility, and control.",
        },
        {
          title: "Business Intelligence & Analytics",
          description:
            "We use advanced analytics tools that give you real-time performance metrics and actionable insights to make decisions based on data.",
        },
      ],
    },
    process: {
      title: "Our Process",
      description:
        "We build every business solution we make on research, strategy, and new ideas. This helps you stay competitive in a connected world.",
      steps: [
        {
          title: "Discovery & Analysis",
          description:
            "Understanding your business structure and operational challenges.",
        },
        {
          title: "Strategy Development",
          description:
            "Designing a roadmap structured to your enterprise goals.",
        },
        {
          title: "System Design",
          description:
            "Crafting scalable and secure architecture for long-term growth.",
        },
        {
          title: "Implementation",
          description: "Smooth deployment with minimal disruption.",
        },
        {
          title: "Testing & Optimization",
          description: "Ensuring system stability, speed, and security.",
        },
        {
          title: "Support & Maintenance",
          description:
            "Continuous monitoring and updates for peak performance.",
        },
      ],
    },
    partnerSection: {
      title: "Partner with DigiNext",
      description:
        "We are a trusted enterprise solutions company in the UAE that uses strategy, technology, and innovation to make business systems that help businesses succeed. We want to help businesses in Dubai as well as globally work smarter, faster, and better.",
    },
    faqs: { items: [] }, // No FAQ
  },
  "gis-planning": {
    slug: "gis-planning",
    title: "Smart GIS Planning Solutions",
    heroDescription:
      "With our advanced GIS planning and mapping solutions, we help businesses make the best use of geography. As one of the top geospatial companies in the UAE, we combine technology, analytics, and design to turn complicated spatial data into clear and useful information. Our GIS solutions company helps you make better decisions based on location, if you are in infrastructure, logistics, or urban development. These decisions lead to real-world results.",
    ctaSection: {
      title: "Let's Plan Your Success",
      description:
        "Your data has a story, and we help you visualize it. Let us talk about how GIS can change the way you plan, manage, and grow your business.",
    },
    imageUrl: ImageConstants.SOLUTION_IMAGE,
    servicesOffered: {
      title: "Our GIS Planning Services",
      description:
        "We offer customized GIS solutions that use location intelligence to help businesses see new opportunities, make their operations run more smoothly, and plan more accurately.",
      services: [
        {
          title: "Spatial Data Analysis",
          description:
            "We analyze and understand geographic data to find trends, patterns, and connections that help us make good decision making.",
        },
        {
          title: "Mapping & Visualization",
          description:
            "Transform raw data into detailed, interactive maps that make complicated information easier to understand and help stakeholders make smart decisions.",
        },
        {
          title: "Geospatial Database Management",
          description:
            "We create and maintain adaptable, secure geospatial databases that work perfectly with the systems you already have.",
        },
        {
          title: "Urban & Infrastructure Planning",
          description:
            "Offer your city or business projects more power with data-driven planning that is backed up by precise GIS mapping and analysis.",
        },
        {
          title: "Location Intelligence Solutions",
          description:
            "Use advanced analytics to find growth opportunities, manage resources, and improve routes based on geospatial data.",
        },
      ],
    },
    process: {
      title: "Our Process",
      description:
        "Our GIS experts use a systematic and data-driven approach to make sure that every project is accurate and efficient.",
      steps: [
        {
          title: "Data Collection & Integration",
          description:
            "Gathering accurate spatial and non-spatial data from reliable sources.",
        },
        {
          title: "Analysis & Interpretation",
          description:
            "Converting raw data into meaningful geographic insights.",
        },
        {
          title: "Mapping & Visualization",
          description:
            "Designing intuitive maps and dashboards for decision support.",
        },
        {
          title: "Implementation",
          description:
            "Integrating GIS tools with your existing systems and workflows.",
        },
        {
          title: "Monitoring & Optimization",
          description: "Continuously improving data accuracy and usability.",
        },
      ],
    },
    partnerSection: {
      title: "Partner with DigiNext",
      description:
        "As a trusted GIS solutions company in the UAE, we help businesses and governments use location intelligence to make better plans and get things done faster. We provide geospatial solutions that make your data more useful and your decisions more powerful, from planning to execution.",
    },
    faqs: { items: [] }, // No FAQ
  },
  "on-site-support": {
    slug: "on-site-support",
    title: "Reliable On-Site IT Support Services & Solutions",
    heroDescription:
      "We understand that even the smallest technical problem can make your business less efficient. That is why our on-site support services and solutions are designed to keep your systems running smoothly and efficiently. Our team of experts makes sure that your IT infrastructure is always secure, responsive, and reliable, so your business never misses an opportunity.\n\nOur on-site managed services bring expert help right to your workplace, no matter if you need help with troubleshooting, setting up hardware, or managing your whole system, this means quick resolutions and little downtime. You can focus on growing your business while DigiNext takes care of the technology behind the scenes.",
    ctaSection: {
      title: "Let’s Keep Your Business Running Without Interruptions",
      description:
        "Looking for IT support that you can count on whenever you need it? Let us talk about how our on-site IT support can help your business run more smoothly.",
    },
    imageUrl: ImageConstants.SOLUTION_IMAGE,
    servicesOffered: {
      title: "Our On-Site Support Services",
      description:
        "DigiNext is a trusted provider of on-site managed services. We offer flexible, professional, and affordable support that is customized to your business's needs.",
      services: [
        {
          title: "Hardware & System Support",
          description:
            "Our experts take care of, repair, and maintain your IT hardware to make sure everything runs smoothly and without any problem.",
        },
        {
          title: "Network Maintenance",
          description:
            "We monitor and improve the performance of your network to keep it running smoothly with no downtime.",
        },
        {
          title: "Software Troubleshooting",
          description:
            "We offer expert help with software from installation to updates and bug fixes to make sure your digital workflow goes smoothly.",
        },
        {
          title: "System Upgrades & Deployment",
          description:
            "With as little disruption to your business as possible, we help you upgrade systems, move data, and install new technologies.",
        },
        {
          title: "IT Infrastructure Audits",
          description:
            "Our on-site experts inspect your IT setup to find possible problems and make sure that all of your systems are running at their best.",
        },
      ],
    },
    process: {
      title: "Our On-Site Support Process",
      description:
        "Our structured approach makes sure that every client gets reliable, efficient, and personalized help.",
      steps: [
        {
          title: "Assessment",
          description:
            "Understanding your IT environment and business challenges.",
        },
        {
          title: "Planning",
          description:
            "Creating a structured on-site support strategy that fits your workflow.",
        },
        {
          title: "Implementation",
          description:
            "Deploying experts to resolve technical issues quickly and effectively.",
        },
        {
          title: "Monitoring",
          description:
            "Continuously tracking system performance and identifying potential improvements.",
        },
        {
          title: "Optimization",
          description:
            "Regular reviews to improve infrastructure reliability and efficiency.",
        },
      ],
    },
    partnerSection: {
      title: "Partner with DigiNext",
      description:
        "DigiNext's on-site IT support solutions give you a team that is always ready to help, right where you need it. We do not just fix problems, we stop them from happening in the first place, so your technology always helps you reach your business goals.",
    },
    faqs: { items: [] }, // No FAQ
  },
  "cyber-security": {
    slug: "cyber-security",
    title: "Leading Cyber Security Company in UAE",
    heroDescription:
      "We are proud to be the best cyber security company in the UAE. We offer strong, proactive, and future-proof security solutions that keep your digital assets safe from evolving threats.\n\nOur team of certified security experts offers full protection, from assessing risks and defending networks to encrypting data and threat monitoring. We are one of the top 10 cybersecurity companies in Dubai, and we help businesses feel safe doing business in a connected world.",
    ctaSection: {
      title: "Let’s Secure Your Digital Future",
      description:
        "You need to keep your data as safe as possible. Let us talk about how to make your business's digital ecosystem safer, smarter, and stronger.",
    },
    imageUrl: ImageConstants.SOLUTION_IMAGE,
    servicesOffered: {
      title: "Our Cyber Security Services",
      description:
        "We offer full cybersecurity solutions that are customized to meet the needs of your business. We offer reliable protection based on new ideas and years of experience, no matter if you are a small business or a big one.",
      services: [
        {
          title: "Network Security",
          description:
            "We protect your IT infrastructure from cyber threats by using advanced firewalls, intrusion detection systems, and monitoring tools.",
        },
        {
          title: "Cloud Security",
          description:
            "Our cloud security solutions keep your data, applications, and cloud environments safe, making sure that privacy and compliance are at every level.",
        },
        {
          title: "Data Protection & Encryption",
          description:
            "We protect sensitive business data with the best encryption technologies in the business, making sure that all systems are safe and private.",
        },
        {
          title: "Cyber Threat Monitoring",
          description:
            "Real-time threat detection and response systems keep your business safe 24/7, so you can always stay one step ahead.",
        },
        {
          title: "Risk Assessment & Compliance",
          description:
            "We help find imperfections, assess risks and make sure that international cybersecurity standards and UAE laws are followed.",
        },
        {
          title: "Incident Response & Recovery",
          description:
            "Our experts respond quickly and effectively to security incidents to limit damage and keep the business running.",
        },
      ],
    },
    process: {
      title: "Our Security Process",
      description:
        "We follow a systematic and proactive approach to cybersecurity that helps us find, stop, and deal with digital threats in the best way possible.",
      steps: [
        {
          title: "Assessment & Audit",
          description:
            "Evaluating your current systems and identifying security gaps.",
        },
        {
          title: "Strategy Development",
          description:
            "Crafting structured security strategies based on your business needs.",
        },
        {
          title: "Implementation",
          description:
            "Deploying advanced protection tools and best practices.",
        },
        {
          title: "Monitoring & Detection",
          description:
            "Continuous tracking of systems for potential risks and intrusions.",
        },
        {
          title: "Response & Recovery",
          description: "Immediate action plans to restore operations securely.",
        },
        {
          title: "Review & Optimization",
          description:
            "Regular updates to maintain strong and adaptive protection.",
        },
      ],
    },
    partnerSection: {
      title: "Partner with DigiNext",
      description:
        "We are experts in UAE cybersecurity with trusted professionals, our team helps businesses improve their digital defenses and stay compliant in a threat environment that changes quickly. We do not just protect systems, we also protect trust, reputations, and the ability to keep doing business.",
    },
    faqs: { items: [] }, // No FAQ
  },
  "hr-software-development": {
    slug: "hr-software-development",
    title: "Smart HR Software Solutions in Dubai",
    heroDescription:
      "Managing people well is important for growth in the modern business environment, and technology makes it easy. We offer powerful and scalable HR software solutions in Dubai that make it easier to manage your employees, speed up your operations, and boost your productivity.\n\nAs one of the best HR software development companies in Dubai, our goal is to help businesses automate HR tasks while making the workplace better for employees and more efficient for the company. Our HR systems are made to grow with your business, onboarding to payroll and performance tracking.",
    ctaSection: {
      title: "Let’s Build the Future of HR Together",
      description:
        "Change the way your business manages its most valuable asset, and that is its people. Let's talk and come up with the best HR solution for your business.",
    },
    imageUrl: ImageConstants.SOLUTION_IMAGE,
    servicesOffered: {
      title: "HR Software Development Services We Offer",
      description:
        "We offer full-service HR software development that makes managing people faster, easier, and more effective. This is what we have to offer:",
      services: [
        {
          title: "Custom HR Software Development",
          description:
            "We create custom HR systems that satisfy the requirements of your business, such as tracking attendance, managing employees, and analyzing their performance.",
        },
        {
          title: "Cloud-Based HR Solutions",
          description:
            "You can get to your HR data anytime and anywhere. Our secure cloud HR software in Dubai is secure and provides you real-time insights, flexibility, and the ability to grow.",
        },
        {
          title: "Payroll and Leave Management Systems",
          description:
            "An all-in-one HR dashboard can make payroll easier, automate leave requests, and get rid of manual errors.",
        },
        {
          title: "Employee Self-Service Portals",
          description:
            "Give your workers the power to easily access payslips, leave requests, and personal updates all in one place.",
        },
        {
          title: "HR Analytics and Reporting Tools",
          description:
            "Use smart analytics to make decisions based on data that help you monitor employee performance, hiring trends, and the growth of your organization.",
        },
      ],
    },
    process: {
      title: "Our Development Process",
      description:
        "We are a trusted provider of HR solutions in Dubai. To make sure we get great results, we follow a clear, structured, and collaborative process:",
      steps: [
        {
          title: "Requirement Analysis",
          description:
            "Understanding your business model, HR needs, and goals.",
        },
        {
          title: "Design & Architecture",
          description:
            "Creating a clear system blueprint for smooth workflows.",
        },
        {
          title: "Development",
          description: "Building robust, secure, and scalable HR software.",
        },
        {
          title: "Testing & QA",
          description: "Ensuring flawless performance and user satisfaction.",
        },
        {
          title: "Deployment & Integration",
          description: "Implementing the solution with your existing systems.",
        },
        {
          title: "Support & Maintenance",
          description: "Offering continuous updates and improvements.",
        },
      ],
    },
    partnerSection: {
      title: "Partner with DigiNext",
      description:
        "DigiNext is more than just an IT solution company in Dubai, we are your partner in technology for new ideas. Our HR software development services help businesses make HR tasks easier, save time, and make better choices. Choose us to get the best HR software in Dubai made for modern businesses.",
    },
    faqs: { items: [] }, // No FAQ
  },
  "enterprise-crm-software": {
    slug: "enterprise-crm-software",
    title: "Enterprise CRM Software for Smarter Customer Relationships",
    heroDescription:
      "We make smart, flexible, and structured enterprise CRM software solutions that help businesses connect better, sell smarter, and grow faster. As a leading CRM development company in Dubai, we know that every business has different requirements when it comes to managing customers, so we make CRM systems that fit your goals, processes, and people perfectly.\n\nOur CRM software solutions in Dubai help businesses streamline their processes, automate tasks, and get to know the customers better. This helps you increase efficiency, engagement, and return on investment (ROI). We make managing customer relationships easy and effective, no matter how big or small your business is.",
    ctaSection: {
      title: "Let’s Build a System That Works for You",
      description:
        "Want to make it easier to manage customers and improve business relationships? Let us talk and make a CRM platform that works wonders for your business.",
    },
    imageUrl: ImageConstants.SOLUTION_IMAGE,
    servicesOffered: {
      title: "Our CRM Development Services",
      description:
        "We provide full-service CRM software development in Dubai to help businesses better manage their customers, sales, and operations. Here is how we help you reach business excellence:",
      services: [
        {
          title: "Custom CRM Development",
          description:
            "We create custom CRM systems that fit your unique processes, giving you complete control and flexibility over customer data and workflows.",
        },
        {
          title: "CRM Integration Services",
          description:
            "To make sure your data flows smoothly, our team connects your CRM to other tools like ERP, email marketing, and analytics platforms.",
        },
        {
          title: "CRM Migration & Modernization",
          description:
            "Get smarter, faster CRM systems without losing any data. We make sure that the migration goes smoothly and modern UI for improved usability and performance.",
        },
        {
          title: "CRM Maintenance & Support",
          description:
            "We offer ongoing support to keep your CRM system safe, efficient, and ready for the future. This includes regular updates and new features.",
        },
        {
          title: "Cloud-Based CRM Solutions",
          description:
            "You can get to your business data whenever and wherever you want. Our cloud CRM systems are secure, can grow with your business, and are perfect for businesses in Dubai and other places.",
        },
      ],
    },
    process: {
      title: "Our Process",
      description:
        "As one of the best CRM development companies in Dubai, we use a proven approach to make CRM systems that are reliable, efficient, and easy to use:",
      steps: [
        {
          title: "Requirement Analysis",
          description:
            "Understanding your business goals and workflow challenges.",
        },
        {
          title: "System Design",
          description:
            "Creating customized CRM architecture and module planning.",
        },
        {
          title: "Development",
          description: "Building secure and high-performing CRM software.",
        },
        {
          title: "Integration",
          description:
            "Connecting CRM with your existing systems for smooth data flow.",
        },
        {
          title: "Testing & Deployment",
          description: "Ensuring flawless performance before launch.",
        },
        {
          title: "Training & Support",
          description:
            "Helping your team adapt and utilize the system effectively.",
        },
      ],
    },
    partnerSection: {
      title: "Partner with DigiNext",
      description:
        "We do not just make software, we also make digital ecosystems that help your business make better decisions and build stronger connections. Partner with the most trusted CRM software development company to change the way you manage your customers.",
    },
    faqs: { items: [] }, // No FAQ
  },
  "erp-development-consultation": {
    slug: "erp-development-consultation",
    title: "Leading ERP Development Company",
    heroDescription:
      "We help businesses grow, simplify, and streamline with our powerful ERP solutions. As a trusted ERP development company, our specialty is figuring out what problems your business is having and coming up with systems that make workflows better, make things more efficient, and help your business grow in a measurable way.\n\nOur team has a lot of technical and industry knowledge, which helps us make ERP solutions that fit your needs perfectly. We make sure that your ERP system becomes the backbone of your business success, no matter if you want to automate tasks, centralize data, or better manage your resources.",
    ctaSection: {
      title: "Let’s Simplify the Way You Work",
      description:
        "Give your business the power it needs with custom ERP systems that will help you make better decisions and get more done. Let us talk and change the way you do business today.",
    },
    imageUrl: ImageConstants.SOLUTION_IMAGE,
    servicesOffered: {
      title: "ERP Consulting Services We Offer",
      description:
        "We offer complete ERP consulting services that help companies set up, upgrade, and improve their ERP systems in a way that is both quick and effective. We can help you in the following ways:",
      services: [
        {
          title: "ERP Strategy & Planning",
          description:
            "We examine the way your business works, figure out what your ERP needs are, and make a plan for how to implement it smoothly.",
        },
        {
          title: "ERP System Design & Development",
          description:
            "Our experts develop custom ERP systems that are perfect for your needs, making sure they can grow with your business and work well with other systems.",
        },
        {
          title: "ERP Implementation Consultation",
          description:
            "As an experienced ERP implementation consultant, we manage the whole process, from setting up the system to testing it and training users, to make sure everything goes smoothly.",
        },
        {
          title: "System Integration & Migration",
          description:
            "We connect your current software to ERP systems to make sure that data flows smoothly and that there is minimal disruption during migration.",
        },
        {
          title: "ERP Optimization & Support",
          description:
            "We monitor, customize, and support your ERP platform all the time to make sure it runs at its best and can grow with your business.",
        },
      ],
    },
    process: {
      title: "Our ERP Consultation Process",
      description:
        "We use a structured, focused method to make sure that every ERP solution we provide is effective, can grow with your business, and is ready for the future.",
      steps: [
        {
          title: "Discovery & Analysis",
          description:
            "Understanding your business goals, challenges, and system requirements.",
        },
        {
          title: "Planning & Design",
          description:
            "Creating a clear ERP roadmap aligned with your operations.",
        },
        {
          title: "Development & Implementation",
          description: "Building and deploying the ERP system with precision.",
        },
        {
          title: "Testing & Training",
          description: "Ensuring functionality, security, and team readiness.",
        },
        {
          title: "Ongoing Support & Optimization",
          description:
            "Providing continuous improvements and assistance post-launch.",
        },
      ],
    },
    partnerSection: {
      title: "Partner with DigiNext",
      description:
        "We are a trusted ERP development company that helps businesses get past problems and work smarter. Our ERP consulting services are designed to give you long-term benefits, such as helping you make decisions faster, work together better, and grow your business.",
    },
    faqs: { items: [] }, // No FAQ
  },
  "enterprise-erp-software": {
    slug: "enterprise-erp-software",
    title: "Enterprise ERP Software for Smarter Business Operations",
    heroDescription:
      "We help businesses grow, simplify, and streamline with our powerful ERP solutions. As a trusted ERP development company, our specialty is figuring out what problems your business is having and coming up with systems that make workflows better, make things more efficient, and help your business grow in a measurable way.\n\nOur team has a lot of technical and industry knowledge, which helps us make ERP solutions that fit your needs perfectly. We make sure that your ERP system becomes the backbone of your business success, no matter if you want to automate tasks, centralize data, or better manage your resources.",
    ctaSection: {
      title: "Let’s Simplify the Way You Work",
      description:
        "Give your business the power it needs with custom ERP systems that will help you make better decisions and get more done. Let us talk and change the way you do business today.",
    },
    imageUrl: ImageConstants.SOLUTION_IMAGE,
    servicesOffered: {
      title: "ERP Consulting Services We Offer",
      description:
        "We offer complete ERP consulting services that help companies set up, upgrade, and improve their ERP systems in a way that is both quick and effective. We can help you in the following ways:",
      services: [
        {
          title: "ERP Strategy & Planning",
          description:
            "We examine the way your business works, figure out what your ERP needs are, and make a plan for how to implement it smoothly.",
        },
        {
          title: "ERP System Design & Development",
          description:
            "Our experts develop custom ERP systems that are perfect for your needs, making sure they can grow with your business and work well with other systems.",
        },
        {
          title: "ERP Implementation Consultation",
          description:
            "As an experienced ERP implementation consultant, we manage the whole process, from setting up the system to testing it and training users, to make sure everything goes smoothly.",
        },
        {
          title: "System Integration & Migration",
          description:
            "We connect your current software to ERP systems to make sure that data flows smoothly and that there is minimal disruption during migration.",
        },
        {
          title: "ERP Optimization & Support",
          description:
            "We monitor, customize, and support your ERP platform all the time to make sure it runs at its best and can grow with your business.",
        },
      ],
    },
    process: {
      title: "Our ERP Consultation Process",
      description:
        "We use a structured, focused method to make sure that every ERP solution we provide is effective, can grow with your business, and is ready for the future.",
      steps: [
        {
          title: "Discovery & Analysis",
          description:
            "Understanding your business goals, challenges, and system requirements.",
        },
        {
          title: "Planning & Design",
          description:
            "Creating a clear ERP roadmap aligned with your operations.",
        },
        {
          title: "Development & Implementation",
          description: "Building and deploying the ERP system with precision.",
        },
        {
          title: "Testing & Training",
          description: "Ensuring functionality, security, and team readiness.",
        },
        {
          title: "Ongoing Support & Optimization",
          description:
            "Providing continuous improvements and assistance post-launch.",
        },
      ],
    },
    partnerSection: {
      title: "Partner with DigiNext",
      description:
        "We are a trusted ERP development company that helps businesses get past problems and work smarter. Our ERP consulting services are designed to give you long-term benefits, such as helping you make decisions faster, work together better, and grow your business.",
    },
    faqs: { items: [] }, // No FAQ
  },
  "custom-dashboard-design": {
    slug: "custom-dashboard-design",
    title: "Custom Dashboard Design Services",
    heroDescription:
      "We specialize in custom dashboard design that help businesses see important metrics, make sense of complicated data, and make faster, smarter decisions. As one of the leading providers of dashboard design services in Dubai, we make dashboards that are functional, clear, and beautiful, so your team can do their best work.\n\nOur expert designers make sure that every dashboard we make is interactive, easy to use, and customized to your business goals by focusing on usability and performance. Our dashboard design services transform data into useful information that can be used for sales tracking, marketing analytics, or operational performance.",
    ctaSection: {
      title: "Let’s Build a Dashboard That Works for You",
      description:
        "Give your business the power of accurate data. Let us work together to make a custom dashboard that helps you get results and make better choices.",
    },
    imageUrl: ImageConstants.SOLUTION_IMAGE,
    servicesOffered: {
      title: "Our Dashboard Design Expertise",
      description:
        "We offer full-service dashboard design that makes it easy and useful to view data:",
      services: [
        {
          title: "Business Intelligence Dashboards",
          description:
            "Dashboards that let you monitor key metrics, KPIs, and reports in real time help you make quick and sure decisions based on data.",
        },
        {
          title: "Custom Analytics Dashboards",
          description:
            "Our dashboards are made to fit the requirements of your business. They make the most of complicated data and provide you insights in a clear, easy-to-use way.",
        },
        {
          title: "Operational Dashboards",
          description:
            "Dashboards that make your workflows simpler and more straightforward to manage and will help you keep track of daily operations and team performance.",
        },
        {
          title: "Financial Dashboards",
          description:
            "Dynamic dashboards that analyze revenue, expenses, and forecasts all at once give you a clear picture of your company's financial health.",
        },
        {
          title: "Marketing & Sales Dashboards",
          description:
            "We use interactive dashboards that are made for performance to measure how well your campaigns are working, keep track of conversions, and improve your strategies.",
        },
      ],
    },
    process: {
      title: "Our Design Process",
      description:
        "We always use a structured and data-driven process to design our dashboards:",
      steps: [
        {
          title: "Requirement Analysis",
          description: "Understanding your data, goals, and KPIs.",
        },
        {
          title: "Data Mapping & Structure",
          description: "Organizing information for clarity and relevance.",
        },
        {
          title: "Wireframing",
          description:
            "Designing layouts that highlight the most important insights.",
        },
        {
          title: "Visual Design",
          description:
            "Applying intuitive colors, charts, and graphics for easy comprehension.",
        },
        {
          title: "Integration & Validation",
          description:
            "Ensuring smooth functionality and accurate data visualization.",
        },
      ],
    },
    partnerSection: {
      title: "Partner with DigiNext",
      description:
        "We use smart data and great design to make dashboards that help businesses grow. As a trusted name for dashboard design services, we transform your data into an experience that is powerful, visually appealing, and ready for decision-making.",
    },
    faqs: { items: [] }, // No FAQ
  },
  "erp-data-migration": {
    slug: "erp-data-migration",
    title: "Data Migration for a Smarter, Connected Business",
    heroDescription:
      "We make data migration simple, secure and stress free. Our team of experts makes sure that the switch from your old ERP system to a new one goes smoothly, without affecting daily business chores or putting your data at risk. With our ERP migration services, we help businesses modernize their procedures, bring all of their data systems together, and use automation for better decision making.\n\nDigiNext offers complete ERP data migration solutions that are customized for your business needs, no matter if you are upgrading an existing ERP or moving to a brand new platform.",
    ctaSection: {
      title: "Let's Make Your ERP Switch Easier",
      description:
        "Are you ready to make your business run better and smarter? Let us talk, and we will make sure your ERP migration operates easily.",
    },
    imageUrl: ImageConstants.SOLUTION_IMAGE,
    servicesOffered: {
      title: "Our ERP Migration Services",
      description:
        "Our structured and dependable technique makes sure that every step of your migration is done with care and accuracy. This is what we have to offer:",
      services: [
        {
          title: "Data Assessment & Strategy",
          description:
            "To make a migration plan that minimizes downtime and risks, we start by thoroughly looking at your current ERP system and business requirements.",
        },
        {
          title: "Data Mapping & Cleansing",
          description:
            "For a smooth transition, our team makes sure that all of your important data is cleaned, checked, and appropriately mapped to the new ERP system.",
        },
        {
          title: "Migration Execution",
          description:
            "We use industry standard tools and methods to safely transfer your data, to make sure that everything stays consistent and works well throughout the process.",
        },
        {
          title: "Testing & Validation",
          description:
            "We conduct a lot of testing before going live to make sure that all the data has been moved, organized, and is completely functional.",
        },
        {
          title: "Post-Migration Support",
          description:
            "After the migration is done, our experts monitor the system, optimize it, provide you support to make sure it keeps working well and stays stable.",
        },
      ],
    },
    process: {
      title: "Our Migration Process",
      description:
        "Our ERP data migration process is designed to ensure accuracy, security, and has no downtime.",
      steps: [
        {
          title: "Analysis & Planning",
          description:
            "Understanding your ERP environment and migration goals.",
        },
        {
          title: "Data Preparation",
          description: "Cleaning and organizing data for smooth migration.",
        },
        {
          title: "Migration Execution",
          description: "Transferring data securely and efficiently.",
        },
        {
          title: "Testing & Validation",
          description: "Ensuring data accuracy and completeness.",
        },
        {
          title: "Go-Live & Support",
          description:
            "Final deployment with continuous post-migration support.",
        },
      ],
    },
    partnerSection: {
      title: "Partner with DigiNext for ERP Migration Excellence",
      description:
        "Your data is in safe hands with our ERP Migration services. We use our technical expertise and strategic planning to make sure that your migration goes easily, accurately, and is future ready. This will help your business work smarter and faster.",
    },
    faqs: { items: [] }, // No FAQ
  },
  "erp-app-development": {
    slug: "erp-app-development",
    title: "Smart ERP App Development Solutions",
    heroDescription:
      "With customized ERP app development solutions, we help businesses function more smoothly and make better decisions. As a leading ERP app development services company, we design and develop ERP apps that are powerful, scalable, and easy to use. They connect your departments, make workflows easier, and help your business run more smoothly overall.\n\nOur ERP solutions are made to adapt your business—we provide solutions that bring everything together in one smooth system, whether you want to improve your finance, HR, supply chain, or operations.",
    ctaSection: {
      title: "Let’s Create the System That Operates Your Business",
      description:
        "We create ERP apps that work smarter, faster, and better from start to finish, just like your business requirements. Let us connect.",
    },
    imageUrl: ImageConstants.SOLUTION_IMAGE,
    servicesOffered: {
      title: "Our ERP App Development Services",
      description:
        "We offer complete ERP development services in Dubai that are customized to meet the requirements of your business. This is what we have to offer:",
      services: [
        {
          title: "Custom ERP App Development",
          description:
            "We build ERP apps from scratch, structured to your business's requirements, workflows, and data processes.",
        },
        {
          title: "Cloud-Based ERP Solutions",
          description:
            "You can safely access your business data from anywhere and at any time. Our cloud-based ERP systems make sure that they remain flexible, adapt, and give you real-time information.",
        },
        {
          title: "ERP Integration Services",
          description:
            "We connect your ERP system to other business tools, like CRMs, payment gateways, or third-party apps, so that data flows easily.",
        },
        {
          title: "ERP Modernization & Migration",
          description:
            "Upgrade your old systems to modern ERP solutions that have better performance, faster speed, and advanced features.",
        },
        {
          title: "ERP Maintenance & Support",
          description:
            "After deployment, our work is not done. We keep your ERP system running smoothly by giving you regular updates, monitoring, and technical support.",
        },
      ],
    },
    process: {
      title: "Our Process",
      description:
        "We use a structured, research-based method to give you ERP systems that work well and help you reach your business goals.",
      steps: [
        {
          title: "Requirement Analysis",
          description: "Understanding your processes and pain points.",
        },
        {
          title: "System Planning",
          description: "Defining modules, workflows, and features.",
        },
        {
          title: "Design & Prototyping",
          description: "Crafting user-friendly interfaces and architecture.",
        },
        {
          title: "Development & Integration",
          description: "Building and connecting your ERP with other tools.",
        },
        {
          title: "Testing & QA",
          description: "Ensuring performance, security, and reliability.",
        },
        {
          title: "Deployment & Support",
          description: "Launching smoothly and providing ongoing assistance.",
        },
      ],
    },
    partnerSection: {
      title: "Partner with DigiNext",
      description:
        "DigiNext is one of the most trusted names for ERP development services in Dubai. We help businesses achieve complete digital transformation. We do not just make software—we make smart systems that boost productivity, growth, and success over time.",
    },
    faqs: { items: [] }, // No FAQ
  },
  "learning-management-system": {
    slug: "learning-management-system",
    title: "Learning Management System in Dubai",
    heroDescription:
      "We create intelligent and interactive learning management systems (LMS) that make it easy for businesses to offer, keep track of, and run training or education programs. As a leading provider of the learning management system in Dubai, we focus on giving businesses, educational institutions, and other organizations technology-based learning solutions that are easy to use and make managing them easier.\n\nOur learning management system is a flexible and scalable platform that can be customized according to your requirements, no matter if you are training employees, onboarding new hires, or running online courses.",
    ctaSection: {
      title: "Let's Make Your Learning Environment",
      description:
        "Let us change how you educate and train with a smart, adaptable, and fully integrated learning management system that is designed to make learning easier, faster, and more effective.",
    },
    imageUrl: ImageConstants.SOLUTION_IMAGE,
    servicesOffered: {
      title: "Learning Management System Services We Offer",
      description:
        "Adopt a smart, flexible, and fully integrated learning management system to change the way you educate and train. It will make learning a lot easier, faster and effective.",
      services: [
        {
          title: "Custom LMS Development",
          description:
            "We develop custom LMS platforms that fit your business or academic goals and make sure they are flexible, scalable, and efficient.",
        },
        {
          title: "Corporate Training Solutions",
          description:
            "Make training easier for your employees by using a central system that keeps track of their progress, performance, and learning outcomes.",
        },
        {
          title: "E-Learning Platform Design",
          description:
            "We develop platforms that are easy to use, visually engaging, and simple to use, which makes learning more enjoyable and keeps users motivated.",
        },
        {
          title: "LMS Integration & Migration",
          description:
            "Our team makes sure that your LMS works well with your current infrastructure, even if you are switching systems or adding new tools.",
        },
        {
          title: "LMS Maintenance & Support",
          description:
            "We do not stop working after deployment, we keep giving support, upgrades, and optimization to make sure the system operates well for a long time.",
        },
      ],
    },
    process: {
      title: "Our LMS Development Process",
      description:
        "As one of the top providers of learning management system in Dubai, we use a structured and research-based method to make sure everything functions perfectly and that users are satisfied:",
      steps: [
        {
          title: "Requirement Analysis",
          description:
            "Understanding your organization’s goals, audience, and training needs.",
        },
        {
          title: "System Design",
          description:
            "Designing the LMS architecture and user experience for maximum engagement.",
        },
        {
          title: "Development",
          description:
            "Building scalable and secure LMS platforms structured to your specifications.",
        },
        {
          title: "Integration",
          description:
            "Connecting the LMS with existing systems and tools for smooth data flow.",
        },
        {
          title: "Testing & Deployment",
          description:
            "Ensuring functionality, performance, and a flawless launch.",
        },
        {
          title: "Support & Optimization",
          description:
            "Providing regular updates, analytics, and enhancements.",
        },
      ],
    },
    partnerSection: {
      title: "Partner with DigiNext",
      description:
        "We believe learning should be continuous, collaborative, and convenient. You may provide learners more power, get them engaged, and make training a strategic advantage for your business with our learning management system.",
    },
    faqs: { items: [] }, // No FAQ
  },
};
// Helper function to get service detail by slug
export const getSolutionDetailBySlug = (
  slug: string
): SolutionDetailContent | null => {
  return SERVICE_DETAILS[slug] || null;
};

// Get all available service slugs
export const getAllSolutionSlugs = (): string[] => {
  return Object.keys(SERVICE_DETAILS);
};
