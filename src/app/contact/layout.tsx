// app/contact/layout.tsx
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { PAGES_SEO } from "@/lib/seo-data";

export const metadata: Metadata = generatePageMetadata(
  PAGES_SEO.contact,
  "/contact"
);

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
