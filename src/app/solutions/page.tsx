import { Metadata } from "next";
import Header from "@/components/layout/Header";
// import { StructuredData } from "@/components/seo/StructuredData";
// import { SITE_CONFIG } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/metadata";
import { PAGES_SEO } from "@/lib/seo-data";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/ui/HeroBanner";
import { ImageConstants } from "@/constants/ImageConstants";
import ShowcaseSection, {
  ServiceItem,
} from "@/components/sections/service-solutions/ShowcaseSection";
import { ServicesService } from "@/services/ServicesService";
import { getImageWithPlaceholder } from "@/lib/imageUtils";

// SEO Metadata Export - Use solutions metadata
export const metadata: Metadata = generatePageMetadata(
  PAGES_SEO.solutions,
  "/solutions",
);

export default async function SolutionsPage() {
  let solutionsData: ServiceItem[] = [];
  let bannerTitle = "Our Solutions";
  let bannerImage = ImageConstants.INSIDE_BANNER_3;

  try {
    const [solutionsRes, seoRes] = await Promise.all([
      ServicesService.getSolutions(),
      ServicesService.getSolutionsSeo(),
    ]);

    const solutionsList = solutionsRes.data.data;

    if (Array.isArray(solutionsList)) {
      solutionsData = solutionsList.map((cat) => ({
        title: cat.solutions_name,
        description: cat.solutions_description,
        slug: cat.solutions_name.toLowerCase().replace(/\s+/g, "-"),
        image: getImageWithPlaceholder(cat.solutions_image),
        imageAlt: cat.solutions_name,
        services: cat.solutions.map(
          (sub: { solutions_name: string; slug?: string }) => ({
            name: sub.solutions_name,
            slug:
              sub.slug || sub.solutions_name.toLowerCase().replace(/\s+/g, "-"), // Use provided slug or generate one
          }),
        ),
      }));
    }

    if (seoRes.data.success && seoRes.data.data) {
      // Optional: Update banner info from SEO endpoint if needed
      // const seoData = seoRes.data.data;
      // if (seoData.banner_image) bannerImage = getImageWithPlaceholder(seoData.banner_image);
    }
  } catch (error) {
    console.error("Failed to fetch solutions data", error);
    // Fallback? or let empty state show
  }

  // const structuredData = {
  //   "@context": "https://schema.org",
  //   "@type": "CollectionPage",
  //   name: "Our Solutions",
  //   description: PAGES_SEO.solutions.description,
  //   url: `${SITE_CONFIG.url}/solutions`,
  //   provider: {
  //     "@type": "Organization",
  //     name: SITE_CONFIG.name,
  //     url: SITE_CONFIG.url,
  //   },
  // };

  return (
    <>
      {/* <StructuredData data={structuredData} /> */}

      <Header forceTransparent={true} />

      {/* Main content with top padding to account for fixed header */}
      <div className="pt-16">
        <HeroBanner backgorundImage={bannerImage} title={bannerTitle} />
        {/* FIX: Set basePath for solutions */}
        <ShowcaseSection services={solutionsData} basePath="/solutions" />

        <Footer />
      </div>
    </>
  );
}
