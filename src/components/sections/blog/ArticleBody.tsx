"use client";
import React from "react";
import Image from "next/image";
import { BlogPost } from "@/lib/blogData";

interface ArticleBodyProps {
  post: BlogPost;
}

const ArticleBody: React.FC<ArticleBodyProps> = ({ post }) => {
  return (
    <div className="prose prose-lg max-w-none">
      {/* Hero Image */}
      <div className="mb-8 rounded-xl overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Article Content */}
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: post.content || "" }}
        style={{
          lineHeight: "1.8",
        }}
      />

      {/* In a Nutshell Box */}
      {post.inANutshell && (
        <div className="my-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {post.inANutshell.title}
          </h3>
          <p className="text-gray-700 mb-4">{post.inANutshell.definition}</p>
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Successful tactics include:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {post.inANutshell.tactics.map((tactic, index) => (
                <li key={index} className="text-sm">
                  {tactic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <style jsx global>{`
        .blog-content h2 {
          font-size: 1.875rem;
          font-weight: 700;
          color: #111827;
          margin-top: 2rem;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #111827;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .blog-content p {
          margin-bottom: 1.25rem;
          color: #374151;
          line-height: 1.8;
        }
        .blog-content ul,
        .blog-content ol {
          margin-bottom: 1.25rem;
          padding-left: 1.5rem;
        }
        .blog-content li {
          margin-bottom: 0.5rem;
          color: #374151;
          line-height: 1.8;
        }
        .blog-content a {
          color: #2563eb;
          text-decoration: underline;
        }
        .blog-content a:hover {
          color: #1d4ed8;
        }
        .blog-content strong {
          font-weight: 600;
          color: #111827;
        }
      `}</style>
    </div>
  );
};

export default ArticleBody;

