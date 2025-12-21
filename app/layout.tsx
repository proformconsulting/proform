import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import MainNav from "./components/MainNav";
import Footer from "./components/Footer";

const GTM_ID = "GTM-MQMP3W2K";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://proformconsulting.sk"),

  title: {
    default: "ProForm Consulting – Koordinácia a riadenie stavebných projektov",
    template: "%s | ProForm Consulting",
  },

  description:
    "Kompletné riadenie stavebných projektov – od projektovej prípravy, VR vizualizácií, koordinácie profesií až po odovzdanie hotovej stavby. Stavebné štúdio ProForm Consulting.",

  keywords: [
    "ProForm Consulting",
    "stavebný projekt",
    "projektový manažment",
    "riadenie stavby",
    "stavebný dozor",
    "VR vizualizácie",
    "rekonštrukcia",
    "novostavba",
    "stavebná firma",
    "Dunajská Streda",
    "projektovanie",
  ],

  authors: [{ name: "ProForm Consulting" }],
  creator: "ProForm Consulting",
  publisher: "ProForm Consulting",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "https://proformconsulting.sk",
    siteName: "ProForm Consulting",
    title: "ProForm Consulting – stavebné projektové & koordinačné štúdio",
    description:
      "Komplexná koordinácia a riadenie výstavby. Moderné VR vizualizácie, stavebný dozor a profesionálna príprava projektov.",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "ProForm Consulting – stavebné projektové a koordinačné štúdio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ProForm Consulting – stavebné projektové & koordinačné štúdio",
    description:
      "Komplexná koordinácia a riadenie výstavby, VR vizualizácie a stavebný manažment.",
    images: ["/og-cover.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sk" className="scroll-smooth">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="color-scheme" content="light dark" />

        {/* ✅ Google Tag Manager - Next-kompatibilis */}
        <Script
          id="gtm-base"
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
      </head>

      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          bg-[#f5f7fb]
          text-slate-900
        `}
      >
        {/* ✅ GTM noscript - közvetlenül a body elején */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <div className="relative min-h-screen flex flex-col">
          <MainNav />
          <main className="flex-1 relative">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}