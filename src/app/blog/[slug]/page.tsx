"use client";

// app/blog/[slug]/page.tsx

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/ui/HeroBanner";
import { ImageConstants } from "@/constants/ImageConstants";
import BlogDetailSection from "@/components/sections/blog/BlogDetailSection";
import { BlogService } from "@/services/BlogService";
import Link from "next/link";
import { slugify } from "@/lib/utils";
import { useParams } from "next/navigation";
import { BlogDetailSkeleton } from "@/components/LoadingSkelton/blog/BlogSkeleton";

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return;
      const id = slug.split("-")[0];

      if (!id) {
        setError(true);
        setLoading(false);
        return;
      }

      try {
        const response: any = await BlogService.getBlogPostById(id);
        if (response.data && response.data.success && response.data.data) {
          const postData = response.data.data;
          setPost(postData);

          // Fetch related posts
          const relatedResponse: any = await BlogService.getRelatedPosts(
            postData.category,
            postData.id,
          );
          if (relatedResponse.data && relatedResponse.data.success) {
            setRelatedPosts(relatedResponse.data.data);
          }
        } else {
          setError(true);
        }
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <>
        <Header forceTransparent={true} />
        <div className="pt-16">
          <BlogDetailSkeleton />
        </div>
        <Footer />
      </>
    );
  }

  // If post not found, show 404
  if (error || !post) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Blog Post Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The blog post you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              href="/blog"
              className="inline-block px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
            >
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
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
          title={post.title}
        />

        {/* Blog Detail Section with Breadcrumbs */}
        <BlogDetailSection
          post={post}
          relatedPosts={relatedPosts}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            {
              label: post.title,
              href: `/blog/${post.id}-${slugify(post.title)}`,
            },
          ]}
        />

        <Footer />
      </div>
    </>
  );
}
