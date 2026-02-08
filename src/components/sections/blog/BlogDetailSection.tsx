// components/sections/blog/BlogDetailSection.tsx

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPost } from "@/lib/blogData";
import { getFullImageUrl } from "@/lib/imageUtils";
import {
  CONTENT_WRAPPER_CLASSES,
  SECTION_PX,
  SECTION_PY,
} from "@/constants/layoutConstants";
import {
  staggerContainerVariants,
  fadeInUpVariants,
  onceInViewPort,
} from "@/constants/animationVariants";

interface Breadcrumb {
  label: string;
  href: string;
}

interface BlogDetailSectionProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
  breadcrumbs: Breadcrumb[];
}

const BlogDetailSection: React.FC<BlogDetailSectionProps> = ({
  post,
  relatedPosts,
  breadcrumbs,
}) => {
  return (
    <section className={`${SECTION_PX} ${SECTION_PY} bg-white`}>
      <div className={CONTENT_WRAPPER_CLASSES}>
        <div>
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.href}>
                {index > 0 && <span className="text-gray-400">/</span>}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-gray-900 font-medium line-clamp-1">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="hover:text-orange-600 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Image */}
              <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden bg-gray-200">
                {(() => {
                  const imageUrl = getFullImageUrl(
                    post.banner_image || post.image || post.imageUrl,
                  );
                  return imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  ) : null;
                })()}
              </div>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
                <span className="font-semibold text-orange-600 uppercase">
                  {post.category}
                </span>
                <span>•</span>
                <span>
                  {new Date(post.created_at || post.date).toLocaleDateString(
                    "en-US",
                    {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    },
                  )}
                </span>
              </div>

              {/* Features as Tags */}
              {post.features && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.features.split(",").map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {feature.trim()}
                    </span>
                  ))}
                </div>
              )}

              {/* Content - HTML Rendering */}
              <div
                className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-orange-600 hover:prose-a:text-orange-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailSection;
