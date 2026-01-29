import { generatePageMetadata } from "@/lib/metadata";
import { PAGES_SEO } from "@/lib/seo-data";
import { Metadata } from "next";
import React from "react";
import InsightsClient from "./InsightsClient";

export const metadata: Metadata = generatePageMetadata(
  PAGES_SEO.insights,
  "/insights",
);

export default function InsightsPage() {
  return <InsightsClient />;
}
