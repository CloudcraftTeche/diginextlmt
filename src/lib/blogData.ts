import { ImageConstants } from "@/constants/ImageConstants";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  image: string;
  readTime: string;
  date: string;
  author?: string;
  authorTitle?: string;
  authorBio?: string;
  authorExperience?: string;
  category: string;
  isPopular?: boolean;
  lastUpdated?: string;
  audioDuration?: string;
  tableOfContents?: Array<{
    id: string;
    title: string;
  }>;
  content?: string;
  inANutshell?: {
    title: string;
    definition: string;
    tactics: string[];
  };
  relatedPosts?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "ai-in-mobile-app-development",
    title: "AI in Mobile App Development: Unlocking the Future of Apps",
    image: ImageConstants.CASE_STUDY_2,
    readTime: "15 mins read",
    date: "November 01, 2025",
    category: "Blog",
  },
  {
    id: "2",
    slug: "customer-journey-understanding",
    title: "Customer Journey: Understanding the Path from Awareness to Advocacy",
    image: ImageConstants.CASE_STUDY_3,
    readTime: "9 mins read",
    date: "November 03, 2025",
    author: "Parvathy P R",
    category: "Blog",
  },
  {
    id: "3",
    slug: "top-automated-functional-testing-tools-2026",
    title: "Top Automated Functional Testing Tools 2026",
    image: ImageConstants.CASE_STUDY_1,
    readTime: "13 min read",
    date: "October 20, 2025",
    category: "Blog",
  },
  {
    id: "4",
    slug: "top-software-development-trends-2026",
    title: "Top Software Development Trends to Look Out for in 2026",
    image: ImageConstants.CASE_STUDY_2,
    readTime: "11 mins read",
    date: "October 10, 2025",
    author: "Stefano Iavarone",
    category: "Blog",
  },
  {
    id: "5",
    slug: "how-to-start-app-development-for-startups",
    title: "How to Start App Development for Startups Successfully",
    image: ImageConstants.CASE_STUDY_3,
    readTime: "8 mins read",
    date: "October 06, 2025",
    author: "I Anjali",
    category: "Blog",
  },
  {
    id: "6",
    slug: "digital-marketing-strategy-2026",
    title: "Digital Marketing Strategy: Building a Winning Plan for 2026",
    image: ImageConstants.CASE_STUDY_1,
    readTime: "13 min read",
    date: "October 14, 2025",
    lastUpdated: "October 28, 2025",
    author: "Rincy John",
    authorTitle: "Technical Writer",
    authorBio: "Technical Writer at DigiNext with 13 years of experience in Software Development and Technical Writing. She has a diverse background in cross-platform full-stack development, Software Testing and Writing. She is passionate about acquiring new skills and is adaptable to changing technology.",
    authorExperience: "13 years",
    category: "Blog",
    audioDuration: "21 minutes",
    tableOfContents: [
      { id: "what-is-digital-marketing-strategy", title: "What is A Digital Marketing Strategy?" },
      { id: "effective-digital-marketing-strategies", title: "What Are The Most Effective Digital Marketing Strategies?" },
      { id: "how-to-build-digital-marketing-strategy", title: "How To Build A Digital Marketing Strategy" },
      { id: "conclusion", title: "Conclusion" },
    ],
    content: `
      <p>The digital marketing landscape is evolving at an unprecedented pace. According to a recent <a href="#" class="text-blue-600 hover:underline">Gartner study</a>, the global digital marketing market is projected to reach <strong>$843.48 billion</strong> by 2026. This growth is driven by businesses recognizing the critical importance of a well-structured digital marketing strategy.</p>
      
      <p>In today's competitive market, having a digital presence isn't enough. You need a comprehensive strategy that aligns with your business goals, targets the right audience, and delivers measurable results. Research shows that <strong>93% of buyers research reviews</strong> before making a purchase decision, highlighting the importance of a strong digital marketing presence.</p>
      
      <h2 id="what-is-digital-marketing-strategy">What is A Digital Marketing Strategy?</h2>
      
      <p>A digital marketing strategy is a comprehensive plan that outlines how your business will achieve its marketing goals using online channels. It encompasses everything from SEO and content marketing to social media and paid advertising.</p>
      
      <p>An effective digital marketing strategy should be:</p>
      <ul>
        <li>Data-driven and measurable</li>
        <li>Aligned with business objectives</li>
        <li>Focused on your target audience</li>
        <li>Adaptable to market changes</li>
        <li>Integrated across all digital channels</li>
      </ul>
      
      <h2 id="effective-digital-marketing-strategies">What Are The Most Effective Digital Marketing Strategies?</h2>
      
      <p>Several digital marketing strategies have proven to be highly effective in recent years:</p>
      
      <h3>1. Content Marketing</h3>
      <p>Content marketing remains one of the most effective strategies, with businesses that blog generating <strong>67% more leads</strong> than those that don't.</p>
      
      <h3>2. Search Engine Optimization (SEO)</h3>
      <p>SEO helps your business appear in organic search results, driving qualified traffic without paid advertising costs.</p>
      
      <h3>3. Social Media Marketing</h3>
      <p>With over 4.7 billion social media users worldwide, social media marketing offers unparalleled reach and engagement opportunities.</p>
      
      <h3>4. Email Marketing</h3>
      <p>Email marketing continues to deliver one of the highest ROI, with an average return of <strong>$42 for every $1 spent</strong>.</p>
      
      <h3>5. Pay-Per-Click (PPC) Advertising</h3>
      <p>PPC advertising provides immediate visibility and allows for precise targeting and budget control.</p>
      
      <h2 id="how-to-build-digital-marketing-strategy">How To Build A Digital Marketing Strategy</h2>
      
      <p>Building an effective digital marketing strategy requires careful planning and execution. Here's a step-by-step approach:</p>
      
      <h3>Step 1: Define Your Goals</h3>
      <p>Start by clearly defining what you want to achieve. Whether it's increasing brand awareness, generating leads, or driving sales, your goals should be specific, measurable, and time-bound.</p>
      
      <h3>Step 2: Understand Your Audience</h3>
      <p>Conduct thorough market research to understand your target audience's needs, preferences, and online behavior. Create detailed buyer personas to guide your strategy.</p>
      
      <h3>Step 3: Choose Your Channels</h3>
      <p>Select the digital marketing channels that best align with your audience and goals. This might include your website, social media platforms, email, and paid advertising.</p>
      
      <h3>Step 4: Create Compelling Content</h3>
      <p>Develop high-quality, valuable content that resonates with your audience and addresses their pain points. This includes blog posts, videos, infographics, and more.</p>
      
      <h3>Step 5: Implement and Monitor</h3>
      <p>Execute your strategy and continuously monitor performance using analytics tools. Adjust your approach based on data insights.</p>
      
      <h2 id="conclusion">Conclusion</h2>
      
      <p>A well-crafted digital marketing strategy is essential for business success in 2026 and beyond. By understanding your audience, choosing the right channels, and creating valuable content, you can build a strategy that drives real results.</p>
      
      <p>Remember, digital marketing is not a one-time effort but an ongoing process that requires continuous optimization and adaptation to market trends and consumer behavior.</p>
    `,
    inANutshell: {
      title: "In a Nutshell",
      definition: "A digital marketing strategy is a comprehensive plan that outlines how your business will achieve its marketing goals using online channels.",
      tactics: [
        "earned media",
        "chatbots",
        "AI agents",
        "social media marketing",
        "email marketing",
        "PPC advertising",
        "video marketing",
        "inbound marketing",
        "content marketing",
        "SEO",
        "live chat"
      ],
    },
    relatedPosts: [
      "customer-journey-understanding",
      "how-to-increase-views-instagram-reels-2025",
      "top-pay-per-click-tools",
      "digital-marketing-strategy-2026",
      "top-software-development-trends-2026",
    ],
  },
  {
    id: "7",
    slug: "ultimate-guide-to-b2b-saas",
    title: "Ultimate Guide to B2B SaaS",
    image: ImageConstants.CASE_STUDY_2,
    readTime: "10 mins read",
    date: "September 20, 2025",
    author: "Kristina Iavarone",
    category: "Blog",
  },
  {
    id: "8",
    slug: "top-pay-per-click-tools",
    title: "Top Pay Per Click Tools for Research, Automation & Optimization",
    image: ImageConstants.CASE_STUDY_3,
    readTime: "10 mins read",
    date: "September 18, 2025",
    author: "Rincy John",
    category: "Blog",
  },
  {
    id: "9",
    slug: "best-python-web-framework",
    title: "Which Is the Best Python Web Framework: Django, Flask, or FastAPI?",
    image: ImageConstants.CASE_STUDY_1,
    readTime: "13 mins read",
    date: "September 22, 2025",
    author: "I Anjali",
    category: "Blog",
  },
  {
    id: "10",
    slug: "guide-to-winning-with-ppc",
    title: "Guide to Winning with PPC: Optimizing Your Paid Search Strategy",
    image: ImageConstants.CASE_STUDY_2,
    readTime: "12 mins read",
    date: "September 14, 2025",
    author: "Rincy John",
    category: "Blog",
  },
  {
    id: "11",
    slug: "how-to-speed-up-woocommerce-site",
    title: "How to Speed up Your WooCommerce Site",
    image: ImageConstants.CASE_STUDY_3,
    readTime: "8 mins read",
    date: "September 10, 2025",
    author: "I Anjali",
    category: "Blog",
  },
  {
    id: "12",
    slug: "building-restful-apis-with-laravel",
    title: "Building RESTful APIs with Laravel: Everything You Need to Know",
    image: ImageConstants.CASE_STUDY_1,
    readTime: "10 mins read",
    date: "August 12, 2025",
    author: "Rincy John",
    category: "Blog",
  },
];

export const popularBlogPosts: BlogPost[] = [
  {
    id: "13",
    slug: "top-20-advantages-disadvantages-social-media",
    title: "Top 20 Advantages and Disadvantages of Social Media",
    image: ImageConstants.CASE_STUDY_1,
    readTime: "10 min read",
    date: "January 18, 2024",
    category: "Blog",
    isPopular: true,
  },
  {
    id: "14",
    slug: "top-20-advantages-disadvantages-technology",
    title: "Top 20 Advantages and Disadvantages of Technology",
    image: ImageConstants.CASE_STUDY_2,
    readTime: "8 mins read",
    date: "September 09, 2024",
    category: "Blog",
    isPopular: true,
  },
  {
    id: "15",
    slug: "how-to-increase-views-instagram-reels-2025",
    title: "How to Increase Views on Instagram Reels in 2025 - Prove...",
    image: ImageConstants.CASE_STUDY_3,
    readTime: "12 mins read",
    date: "May 21, 2025",
    category: "Blog",
    isPopular: true,
  },
  {
    id: "16",
    slug: "top-11-backend-programming-languages-2025",
    title: "Top 11 Backend Programming Languages in 2025",
    image: ImageConstants.CASE_STUDY_1,
    readTime: "7 mins read",
    date: "November 13, 2024",
    category: "Blog",
    isPopular: true,
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getPopularBlogPosts(): BlogPost[] {
  return popularBlogPosts;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return [...blogPosts, ...popularBlogPosts].find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return [...blogPosts, ...popularBlogPosts].map((post) => post.slug);
}

export function getRelatedPosts(currentSlug: string, limit: number = 5): BlogPost[] {
  const currentPost = getBlogPostBySlug(currentSlug);
  if (!currentPost || !currentPost.relatedPosts) {
    return [...blogPosts, ...popularBlogPosts]
      .filter((post) => post.slug !== currentSlug)
      .slice(0, limit);
  }
  
  return currentPost.relatedPosts
    .map((slug) => getBlogPostBySlug(slug))
    .filter((post): post is BlogPost => post !== undefined)
    .slice(0, limit);
}

