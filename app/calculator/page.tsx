// app/calculator/page.tsx
import type { Metadata } from "next";
import MainNav from "../components/MainNav";
import CalculatorClient from "./CalculatorClient";

// --- SEO / META ---
export const metadata: Metadata = {
  title:
    "Kalkulačka nákladov | ProForm Consulting – orientačný rozpočet stavby a demolácie",
  description:
    "Orientačný kalkulátor stavebných a demolačných nákladov v regióne juhozápadného Slovenska. Zadajte plochu a typ projektu – získate reálne cenové pásmo a rámcový rozpočet.",
  alternates: {
    canonical: "https://proformconsulting.sk/kalkulacka",
    languages: {
      "sk-SK": "/kalkulacka",
      "hu-HU": "/hu/kalkulator",
      "x-default": "/",
    },
  },
  openGraph: {
    title:
      "Orientačná kalkulačka nákladov – ProForm Consulting | Výstavba a demolácia",
    description:
      "Získajte rýchly a férový odhad nákladov na výstavbu rodinného domu, rekonštrukciu, komerčný objekt alebo demoláciu. Nastavené na reálne podmienky juhozápadného Slovenska.",
    url: "https://proformconsulting.sk/kalkulacka",
    type: "website",
    siteName: "ProForm Consulting",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD – struktúrované dáta
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Orientačný kalkulátor stavebných a demolačných nákladov",
  provider: {
    "@type": "Organization",
    name: "ProForm Consulting",
  },
  areaServed: "Juhozápadné Slovensko",
  serviceType: [
    "Odhad nákladov na výstavbu rodinného domu",
    "Odhad nákladov na rekonštrukciu",
    "Odhad nákladov na komerčné a priemyselné stavby",
    "Odhad nákladov na demoláciu objektu",
    "Projektové riadenie a koordinácia stavby",
  ],
  url: "https://proformconsulting.sk/kalkulacka",
};

export default function CalculatorPage() {
  return (
    <>
      <MainNav />

      <main className="min-h-screen bg-[#f5f7fb] text-slate-900 relative overflow-hidden">
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* A teljes kalkulátor kliens oldalon fut */}
        <CalculatorClient />
      </main>
    </>
  );
}