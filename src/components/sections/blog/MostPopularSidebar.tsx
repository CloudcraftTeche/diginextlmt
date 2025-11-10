"use client";
import React from "react";
import Link from "next/link";
import { BlogPost } from "@/lib/blogData";

interface MostPopularSidebarProps {
  posts: BlogPost[];
}

const MostPopularSidebar: React.FC<MostPopularSidebarProps> = ({ posts }) => {
  return (
    <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8">
        Most popular
      </h2>
      <div className="space-y-6 sm:space-y-8">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="block group"
          >
            <div className="border-b border-gray-200 pb-6 sm:pb-8 last:border-b-0 last:pb-0">
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 sm:mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
                {post.title}
              </h3>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <span className="font-medium">{post.category}</span>
                <span className="text-gray-400">-</span>
                <span>{post.readTime}</span>
                <span className="text-gray-400">,</span>
                <span>{post.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MostPopularSidebar;

