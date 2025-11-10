import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ArticleHeader from "@/components/sections/blog/ArticleHeader";
import AudioPlayer from "@/components/sections/blog/AudioPlayer";
import TableOfContents from "@/components/sections/blog/TableOfContents";
import ArticleBody from "@/components/sections/blog/ArticleBody";
import YouMayAlsoLike from "@/components/sections/blog/YouMayAlsoLike";
import {
  getBlogPostBySlug,
  getAllBlogSlugs,
  getRelatedPosts,
} from "@/lib/blogData";
import { notFound } from "next/navigation";
import Link from "next/link";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found - DigiNext",
    };
  }

  return {
    title: `${post.title} - DigiNext Blog`,
    description: post.inANutshell?.definition || `Read ${post.title} on DigiNext blog`,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 5);

  return (
    <>
      <Header forceTransparent={true} />

      <div className="pt-16 bg-white min-h-screen">
        {/* Main Content */}
        <div className="max-w-[1750px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 lg:py-16">
          {/* Article Header */}
          <ArticleHeader post={post} />

          {/* Audio Player */}
          {post.audioDuration && <AudioPlayer duration={post.audioDuration} />}

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Table of Contents - Left Sidebar */}
            {post.tableOfContents && post.tableOfContents.length > 0 && (
              <div className="lg:col-span-2 hidden lg:block">
                <TableOfContents items={post.tableOfContents} />
              </div>
            )}

            {/* Article Body - Center */}
            <div
              className={`${
                post.tableOfContents && post.tableOfContents.length > 0
                  ? "lg:col-span-7"
                  : "lg:col-span-9"
              }`}
            >
              <ArticleBody post={post} />
            </div>

            {/* You May Also Like - Right Sidebar */}
            <div className="lg:col-span-3">
              <YouMayAlsoLike posts={relatedPosts} />
            </div>
          </div>

          {/* Mobile Table of Contents */}
          {post.tableOfContents && post.tableOfContents.length > 0 && (
            <div className="lg:hidden mt-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Table of Contents
                </h2>
                <nav className="space-y-2">
                  {post.tableOfContents.map((item) => (
                    <Link
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm py-2 px-3 rounded-lg text-gray-600 hover:text-orange-600 hover:bg-gray-50 transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

