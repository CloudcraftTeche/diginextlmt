// components/sections/blog/BlogDetailSection.tsx

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPost } from "@/lib/blogData";
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
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
                <span className="font-semibold text-orange-600 uppercase">
                  {post.category}
                </span>
                <span>•</span>
                <span>{post.author}</span>
                <span>•</span>
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Content */}
              {/* Content */}
              <div className="prose prose-lg max-w-none">
                {/* Split content by paragraphs and render */}
                {post.content.split("\n\n").map((paragraph, idx) => {
                  // Check if it's a heading
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2
                        key={idx}
                        className="text-2xl font-bold text-gray-900 mt-8 mb-4"
                      >
                        {paragraph.replace("## ", "")}
                      </h2>
                    );
                  } else if (paragraph.startsWith("### ")) {
                    return (
                      <h3
                        key={idx}
                        className="text-xl font-bold text-gray-900 mt-6 mb-3"
                      >
                        {paragraph.replace("### ", "")}
                      </h3>
                    );
                  } else if (
                    paragraph.includes("\n- ") ||
                    paragraph.startsWith("- ")
                  ) {
                    // Handle bullet point lists
                    const items = paragraph
                      .split("\n")
                      .filter((line) => line.trim());
                    return (
                      <ul key={idx} className="list-disc pl-6 mb-6 space-y-3">
                        {items.map((item, i) => {
                          if (item.startsWith("- ")) {
                            const content = item.replace("- ", "");
                            // Handle bold text with **
                            const parts = content.split(/(\*\*.*?\*\*)/g);
                            return (
                              <li
                                key={i}
                                className="text-gray-700 leading-relaxed"
                              >
                                {parts.map((part, j) => {
                                  if (
                                    part.startsWith("**") &&
                                    part.endsWith("**")
                                  ) {
                                    return (
                                      <strong
                                        key={j}
                                        className="font-semibold text-gray-900"
                                      >
                                        {part.slice(2, -2)}
                                      </strong>
                                    );
                                  }
                                  return part;
                                })}
                              </li>
                            );
                          }
                          return null;
                        })}
                      </ul>
                    );
                  } else {
                    return (
                      <p
                        key={idx}
                        className="text-gray-700 leading-relaxed mb-6"
                      >
                        {paragraph}
                      </p>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailSection;
