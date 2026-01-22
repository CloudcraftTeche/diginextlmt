import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import ContactModal from "@/components/Modal/ContactModal";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { GoogleTagManager } from "@/components/GoogleTagManager";
import { LoadingProvider } from "@/contexts/LoadingContext";
import { GlobalLoading } from "@/components/common/GlobalLoading";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  verification: {
    google: "FEEPMTuIlMk8-qSGivtt8URG6yT_vwXRN_-2v1ZQzRY",
  },
  title: {
    template: "%s | Diginext",
    default: "IT Solutions and Services Company in Dubai | Diginext",
  },
  description: "IT Solutions and Services Company in Dubai",
  keywords: ["IT solutions Dubai", "IT services", "web development Dubai"],
  authors: [{ name: SITE_CONFIG.author }],
  creator: SITE_CONFIG.author,
  publisher: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary_large_image",
    creator: SITE_CONFIG.twitter,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* Google Tag Manager - Loads first */}
        <GoogleTagManager gtmId="GTM-WTTZD4MF" />

        {/* Loading Provider wraps entire app */}
        <LoadingProvider>
          {/* Global Loading Overlay */}
          <GlobalLoading />

          {/* Main Content */}
          {children}

          {/* Modals and Widgets */}
          <ContactModal />
          <WhatsAppWidget />
        </LoadingProvider>
      </body>
    </html>
  );
}
