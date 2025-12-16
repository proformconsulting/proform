// app/hu/calculator/page.tsx
import type { Metadata } from "next";
import CalculatorClientHu from "./CalculatorClientHu";

// --- SEO / META ---
export const metadata: Metadata = {
  title:
    "Kalkulátor | ProForm Consulting – építési és bontási költség orientáció",
  description:
    "Orientációs kalkulátor építési és bontási költségekre Dél-nyugat Szlovákia térségében. Add meg az alapterületet és a projekt típusát – kapsz egy részletes, de életszerű költségpászt.",
  alternates: {
    canonical: "https://proformconsulting.sk/hu/kalkulator",
    languages: {
      "hu-HU": "/hu/kalkulator",
      "sk-SK": "/kalkulacka",
      "x-default": "/",
    },
  },
  openGraph: {
    title:
      "Építési költség kalkulátor – ProForm Consulting | Építés és bontás",
    description:
      "Gyors és korrekt költségbecslés családi házra, felújításra, kereskedelmi vagy ipari épületre, illetve bontási projektre. A helyi piaci viszonyokhoz igazítva Dél-nyugat Szlovákiában.",
    url: "https://proformconsulting.sk/hu/kalkulator",
    type: "website",
    siteName: "ProForm Consulting",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD – struktúrált adat
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Építési és bontási költség kalkulátor",
  provider: {
    "@type": "Organization",
    name: "ProForm Consulting",
  },
  areaServed: "Dél-nyugat Szlovákia",
  serviceType: [
    "Családi ház építési költség becslése",
    "Lakás vagy ház felújítás költségbecslés",
    "Kereskedelmi és ipari épület költségbecslés",
    "Bontási projekt költségbecslés",
    "Építési projektmenedzsment és koordináció",
  ],
  url: "https://proformconsulting.sk/hu/kalkulator",
};

export default function CalculatorPageHu() {
  return (
    <>
           <main className="min-h-screen bg-[#f5f7fb] text-slate-900 relative overflow-hidden">
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* A teljes kalkulátor kliens oldalon fut */}
        <CalculatorClientHu />
      </main>
    </>
  );
}