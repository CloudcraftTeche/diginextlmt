"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/blogData";

interface BlogCardProps {
  post: BlogPost;
  delay?: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, delay = 0 }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const element = document.querySelector(`#blog-card-${post.id}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [post.id]);

  return (
    <Link href={`/blog/${post.slug}`}>
      <div
        id={`blog-card-${post.id}`}
        className={`group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform cursor-pointer ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-95"
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {/* Image Section */}
        <div className="relative overflow-hidden h-48 sm:h-56 md:h-64 lg:h-72">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-5 md:p-6">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>

          <div className="flex flex-col gap-1 sm:gap-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
              <span className="font-medium">{post.category}</span>
              <span className="text-gray-400">-</span>
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm text-gray-500">
                {post.date}
              </span>
              {post.author && (
                <span className="text-xs sm:text-sm text-gray-600">
                  By {post.author}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

