import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { PAGES_SEO } from "@/lib/seo-data";
import WorksClient from "./WorksClient";

export const metadata: Metadata = generatePageMetadata(PAGES_SEO.work, "/work");

export default function WorksPage() {
  return <WorksClient />;
}
