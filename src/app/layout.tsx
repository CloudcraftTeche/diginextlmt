// app/layout.tsx
import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import Script from "next/script";

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
  const GTM_ID = "GTM-WTTZD4MF"; // Defined the GTM ID

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*
          IMPORTANT: The standard GTM script is now replaced by the next/script component
          placed just before the closing </body> tag.
        */}
      </head>

      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* Google Tag Manager (noscript) - Must be immediately after opening <body> tag */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}

        {/* Google Tag Manager - Main Script */}
        {/* Use next/script with afterInteractive strategy for reliable client-side execution */}
        <Script
          id="google-tag-manager-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
        {/* End Google Tag Manager - Main Script */}
      </body>
    </html>
  );
}
