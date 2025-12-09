// app/blog/page.tsx

import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/ui/HeroBanner";
import { ImageConstants } from "@/constants/ImageConstants";
import BlogListingSection from "@/components/sections/blog/BlogListingSection";
import { getAllBlogPosts, getAllCategories } from "@/lib/blogData";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog - DigiNext | Digital Marketing & IT Insights",
  description:
    "Explore expert insights on web development, digital marketing, IT consulting, and technology trends from DigiNext Dubai.",
  keywords:
    "blog, digital marketing, web development, IT consulting, Dubai, technology insights",
  openGraph: {
    title: "Blog - DigiNext | Digital Marketing & IT Insights",
    description:
      "Explore expert insights on web development, digital marketing, IT consulting, and technology trends from DigiNext Dubai.",
    type: "website",
    url: `${SITE_CONFIG.url}/blog`,
    siteName: "DigiNext",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - DigiNext",
    description: "Expert insights on digital marketing and technology",
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/blog`,
  },
};

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();
  const categories = getAllCategories();

  return (
    <>
      <Header forceTransparent={true} />

      <div className="pt-16">
        {/* Hero Banner */}
        <HeroBanner
          backgorundImage={ImageConstants.INSIDE_BANNER_5}
          title="Our Blog"
          subtitle="Insights, trends, and expert advice on digital marketing and technology"
        />

        {/* Blog Listing Section */}
        <BlogListingSection posts={blogPosts} categories={categories} />

        <Footer />
      </div>
    </>
  );
}
