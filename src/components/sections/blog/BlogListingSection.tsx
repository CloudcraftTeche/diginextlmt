// components/sections/blog/BlogListingSection.tsx

"use client";
import React, { useState } from "react";
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
import { slugify } from "@/lib/utils";
import EmptyState from "@/components/ui/EmptyState";

interface BlogListingSectionProps {
  posts: BlogPost[];
  categories: string[];
}

const BlogListingSection: React.FC<BlogListingSectionProps> = ({
  posts,
  categories,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <section className={`${SECTION_PX} ${SECTION_PY} bg-white`}>
      <div className={CONTENT_WRAPPER_CLASSES}>
        <motion.div
          variants={staggerContainerVariants}
          initial="initial"
          whileInView="animate"
          viewport={onceInViewPort}
        >
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id || post.slug}
                variants={fadeInUpVariants}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Link
                  href={`/blog/${post.id || post.slug}-${slugify(post.title)}`}
                  className="block h-full flex flex-col"
                >
                  {/* Image */}
                  <div className="relative w-full h-48 bg-gray-200">
                    {(() => {
                      const imageUrl = getFullImageUrl(
                        post.image || post.imageUrl,
                      );

                      return imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={post.title}
                          fill
                          className="object-cover"
                          onError={(e) => {
                            console.error("Error loading image:", imageUrl);
                            // Optionally hide the image or show fallback
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          <span className="text-sm">No Image</span>
                        </div>
                      );
                    })()}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Category & Date */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-orange-600 uppercase">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(
                          post.created_at || post.date,
                        ).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-orange-600 transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.description}
                    </p>

                    {/* Features used as tags if available */}
                    {post.features && (
                      <div className="mt-auto flex flex-wrap gap-2">
                        {post.features
                          .split(",")
                          .slice(0, 2)
                          .map((feature, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                            >
                              {feature.trim()}
                            </span>
                          ))}
                      </div>
                    )}
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <EmptyState
              title="No Blog Posts Found"
              description={`We couldn't find any blog posts in the "${selectedCategory}" category.`}
              action={{
                label: "Clear Category Filter",
                href: "#",
                onClick: () => setSelectedCategory("All"),
              }}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogListingSection;
