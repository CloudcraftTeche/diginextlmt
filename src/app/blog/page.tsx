import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogGrid from "@/components/sections/blog/BlogGrid";
import MostPopularSidebar from "@/components/sections/blog/MostPopularSidebar";
import {
  getAllBlogPosts,
  getPopularBlogPosts,
} from "@/lib/blogData";

export const metadata: Metadata = {
  title: "Blogs - DigiNext",
  description: "Stay informed with the latest insights, trends, and updates from DigiNext",
};

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();
  const popularPosts = getPopularBlogPosts();

  return (
    <>
      <Header forceTransparent={true} />

      <div className="pt-16 bg-white min-h-screen">
        {/* Main Content */}
        <div className="max-w-[1750px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 lg:py-16">
          {/* Page Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-8 sm:mb-12">
            Blogs
          </h1>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Blog Grid */}
            <div className="lg:col-span-2">
              <BlogGrid posts={blogPosts} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <MostPopularSidebar posts={popularPosts} />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

