// app/about/layout.tsx
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { PAGES_SEO } from "@/lib/seo-data";

export const metadata: Metadata = generatePageMetadata(
  PAGES_SEO.about, 
  "/about"
);

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
