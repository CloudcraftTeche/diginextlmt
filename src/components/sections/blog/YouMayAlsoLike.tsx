"use client";
import React from "react";
import Link from "next/link";
import { BlogPost } from "@/lib/blogData";

interface YouMayAlsoLikeProps {
  posts: BlogPost[];
}

const YouMayAlsoLike: React.FC<YouMayAlsoLikeProps> = ({ posts }) => {
  return (
    <div className="sticky top-24">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-blue-600 mb-6">You May Also Like</h2>
        <ol className="space-y-4">
          {posts.map((post, index) => (
            <li key={post.id}>
              <Link
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 text-sm font-semibold text-gray-400 group-hover:text-orange-500 transition-colors">
                    {index + 1}.
                  </span>
                  <span className="text-sm font-medium text-gray-900 group-hover:text-orange-500 transition-colors line-clamp-2">
                    {post.title}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default YouMayAlsoLike;

