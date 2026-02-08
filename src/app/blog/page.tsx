"use client";

import { useState, useEffect } from "react";
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/ui/HeroBanner";
import { ImageConstants } from "@/constants/ImageConstants";
import BlogListingSection from "@/components/sections/blog/BlogListingSection";
import { getAllCategories, BlogPost } from "@/lib/blogData";
import { SITE_CONFIG } from "@/lib/constants";
import { BlogListingSkeleton } from "@/components/LoadingSkelton/blog/BlogSkeleton";
import { BlogService } from "@/services/BlogService";

/*
// Metadata cannot be exported from a Client Component.
// You can move this to a separate layout.tsx file or a parent server component.
export const metadata: Metadata = {
  title: "Blog - DigiNext | Digital Marketing & IT Insights",
  description: "Insights, trends, and expert advice on digital marketing and technology",
};
*/

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: any = await BlogService.getBlogPosts();
        if (response.data && response.data.success) {
          // Verify if response.data.data matches BlogPost[] structure
          setBlogPosts(response.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const categories = getAllCategories(); // Logic could move to service if dynamic

  if (loading) {
    return (
      <>
        <Header forceTransparent={true} />
        <div className="pt-16">
          <HeroBanner
            backgorundImage={ImageConstants.INSIDE_BANNER_5}
            title="Our Blog"
            subtitle="Insights, trends, and expert advice on digital marketing and technology"
          />
          <BlogListingSkeleton />
          <Footer />
        </div>
      </>
    );
  }

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
