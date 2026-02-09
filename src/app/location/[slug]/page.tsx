// app/location/[slug]/page.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LocationSection from "@/components/sections/location/LocationSection";
import { Metadata } from "next";
import { LocationService } from "@/services/LocationService";
import { Location } from "@/types/location";
import { slugify } from "@/lib/utils";

interface LocationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Dynamic metadata based on slug
export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;

  // Extract ID from slug (format: id-location-name)
  const id = slug.split("-")[0];

  // Fetch by ID directly
  const response: any = await LocationService.getLocationById(Number(id));
  const data: Location =
    response.data && response.data.success ? response.data.data : null;

  if (!data) {
    return {
      title: "Location Not Found - DigiNext",
      description: "The location you're looking for doesn't exist.",
    };
  }

  // description might be long, slice it
  const desc = data.description
    ? data.description.substring(0, 160)
    : "DigiNext IT Solutions";

  return {
    title: data.heading,
    description: desc,
    keywords: `IT solutions ${data.location}, IT company ${data.location}, managed IT services ${data.location}`,
    openGraph: {
      title: data.heading,
      description: desc,
      url: `https://www.diginext.ae/location/${slug}`,
      images: [data.image || ""],
    },
  };
}

// Server Component
export default async function LocationDetailPage({
  params,
}: LocationPageProps) {
  const { slug } = await params;

  // Extract ID from slug (format: id-location-name)
  const id = slug.split("-")[0];

  const response: any = await LocationService.getLocationById(Number(id));
  const data: Location =
    response.data && response.data.success ? response.data.data : null;

  // 404 if location doesn't exist
  if (!data) {
    return (
      <>
        <Header />
        <main className="font-sans bg-white text-foreground">
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4 text-gray-900">
                Location Not Found
              </h1>
              <p className="text-gray-600 mb-8">
                The location you&apos;re looking for doesn&apos;t exist.
              </p>
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="font-sans bg-white text-foreground">
        <LocationSection data={data} />
      </main>
      <Footer />
    </>
  );
}
