import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Prémium fontok
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

// Viewport – mobilbarát beállítás Next módra
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// Weboldal globális SEO beállításai
export const metadata: Metadata = {
  metadataBase: new URL("https://proformconsulting.sk"),
  title: {
    default:
      "ProForm Consulting – Koordinácia a riadenie stavebných projektov",
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

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "https://proformconsulting.sk",
    siteName: "ProForm Consulting",
    title:
      "ProForm Consulting – stavebné projektové & koordinačné štúdio",
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

  // Twitter (X) Cards
  twitter: {
    card: "summary_large_image",
    title:
      "ProForm Consulting – stavebné projektové & koordinačné štúdio",
    description:
      "Komplexná koordinácia a riadenie výstavby, VR vizualizácie a stavebný manažment.",
    images: ["/og-cover.jpg"],
  },

  // Technikai SEO
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
        {/* Apple / mobil meta */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />

        {/* Faviconok */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Color scheme (Dark / Light támogatás) */}
        <meta name="color-scheme" content="light dark" />
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
        {/* Globális wrap – minden oldal erre épül */}
        <div className="relative min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}