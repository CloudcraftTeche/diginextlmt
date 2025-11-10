"use client";
import React from "react";
import Link from "next/link";
import { BlogPost } from "@/lib/blogData";

interface ArticleHeaderProps {
  post: BlogPost;
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({ post }) => {
  return (
    <div className="mb-8">
      {/* Breadcrumb */}
      <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide mb-4">
        <Link href="/insights" className="hover:text-orange-500 transition-colors">
          INSIGHTS
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-orange-500 transition-colors">
          BLOG
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
        {post.title}
      </h1>

      {/* Author Info */}
      {post.author && (
        <div className="mb-4">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            By <span className="font-semibold">{post.author}</span>
            {post.authorTitle && (
              <>
                , {post.authorTitle}
                {post.authorExperience && ` at DigiNext with ${post.authorExperience} of experience`}
              </>
            )}
            {post.authorBio && `. ${post.authorBio}`}
          </p>
        </div>
      )}

      {/* Metadata */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-4">
        <span>
          Published in {post.category} on {post.date}
        </span>
        {post.lastUpdated && (
          <>
            <span className="text-gray-400">•</span>
            <span>Last updated on {post.lastUpdated}</span>
          </>
        )}
        <span className="text-gray-400">•</span>
        <span>{post.readTime}</span>
        <div className="flex items-center gap-2 ml-auto">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Share">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Bookmark">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;

