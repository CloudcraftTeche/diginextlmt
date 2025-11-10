"use client";
import React from "react";
import BlogCard from "./BlogCard";
import { BlogPost } from "@/lib/blogData";

interface BlogGridProps {
  posts: BlogPost[];
}

const BlogGrid: React.FC<BlogGridProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
      {posts.map((post, index) => (
        <BlogCard key={post.id} post={post} delay={index * 100} />
      ))}
    </div>
  );
};

export default BlogGrid;

