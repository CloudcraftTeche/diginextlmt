import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/ui/HeroBanner";
import { ImageConstants } from "@/constants/ImageConstants";
import PortfolioShowcase from "@/components/sections/ourWorks/PortfolioShowcase";
import { generatePageMetadata } from "@/lib/metadata";
import { PAGES_SEO } from "@/lib/seo-data";

export const metadata: Metadata = generatePageMetadata(
  PAGES_SEO.work,
  "/work"
);

export default function WorksPage() {
  return (
    <>
      <Header forceTransparent={true} />
      <div className="pt-16">
        <HeroBanner
          backgorundImage={ImageConstants.INSIDE_BANNER_3}
          title="Our Works"
        />
        <PortfolioShowcase />
        <Footer />
      </div>
    </>
  );
}
