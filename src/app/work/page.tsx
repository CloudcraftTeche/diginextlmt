import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/ui/HeroBanner";
import { ImageConstants } from "@/constants/ImageConstants";
import PortfolioShowcase from "@/components/sections/ourWorks/PortfolioShowcase";

export const metadata: Metadata = {
  title: "Our Works - DigiNext",
  description: "Explore our portfolio of successful projects in UI/UX design, web development, and branding.",
};

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
