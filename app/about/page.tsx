// app/o-nas/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import MainNav from "../components/MainNav";

export const metadata: Metadata = {
  title: "O nás | ProForm Consulting stavebné projekty v jednej kancelárii",
  description:
    "ProForm Consulting už roky koordinuje stavebné a demolačné projekty s kompletnou organizáciou a stabilnou sieťou overených dodávateľov na juhozápade Slovenska. Rodinné domy, rekonštrukcie, haly, obchodné priestory a demolácie.",
  alternates: {
    canonical: "https://proformconsulting.sk/o-nas",
    languages: {
      "hu-HU": "/hu/rolunk",
      "sk-SK": "/o-nas",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "O nás ProForm Consulting | Projektová koordinácia a realizácia",
    description:
      "Tím zameraný na stavebné a demolačné projekty so stabilným zázemím, reálnymi skúsenosťami a sieťou spoľahlivých dodávateľov. Vedieme projekty od prvého nápadu po odovzdanie.",
    url: "https://proformconsulting.sk/o-nas",
    type: "website",
    siteName: "ProForm Consulting",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutSk() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ProForm Consulting",
    description:
      "Koordinácia stavebných a demolačných projektov, projektový manažment a sieť dodávateľov na juhozápade Slovenska. Viacročné skúsenosti a stabilné odborné zázemie.",
    url: "https://proformconsulting.sk/o-nas",
    areaServed: "Juhozápadné Slovensko",
    serviceType: [
      "Koordinácia stavebných projektov",
      "Organizácia demolačných projektov",
      "VR a 3D vizualizácia",
      "Organizácia realizácie stavby",
    ],
    email: "proformconsulting@azet.sk",
  };

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-900 relative overflow-hidden">
      {/* NAV */}
      <MainNav />

      {/* SEO – JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Háttér aurák */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#d7e3ff] blur-[200px] opacity-70" />
      <div className="pointer-events-none absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full bg-[#c4d9ff] blur-[220px] opacity-60" />
      <div className="pointer-events-none absolute bottom-[-260px] left-1/4 w-[460px] h-[460px] rounded-full bg-[#e0e6f5] blur-[180px] opacity-80" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_top,#e0e7ff_0,#f5f7fb_55%)] mix-blend-screen" />

      {/* HERO – stredový prémiový blok */}
      <section
        id="about-hero"
        className="relative w-full py-20 md:py-24 bg-gradient-to-b from-white/95 via-[#f2f5fd]/96 to-[#eef2fb]"
        aria-labelledby="about-hero-heading"
      >
        <div className="max-w-5xl mx-auto px-4 md:px-6 flex flex-col items-center text-center relative z-10">
          <p className="inline-block text-[11px] md:text-xs tracking-[0.25em] uppercase text-[#64748b] mb-3">
            Prémiové stavebné projektové štúdio
          </p>

          <h1
            id="about-hero-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-[#1f4fa5] via-[#3e6fb8] to-[#7fa4dd] text-transparent bg-clip-text"
          >
            Stavebné projekty v jednej kancelárii
          </h1>

          <h2 className="text-lg md:text-xl font-semibold text-[#1f2937] max-w-2xl mb-5">
            Kancelária ktorá už roky drží pokope celý proces výstavby od prvého
            návrhu po odovzdanie nehnuteľnosti.
          </h2>

          <p className="text-[#4b5563] max-w-2xl text-sm md:text-base leading-relaxed">
            Pracujeme na stavebných aj demolačných projektoch od rodinných domov
            až po väčšie priemyselné a obchodné objekty. Opierame sa o stabilné
            odborné zázemie sieť overených dodávateľov a proces ktorý dáva
            projektu jasný rámec od prvotnej myšlienky až po odovzdanie kľúčov.
          </p>

          <div className="w-20 h-[2px] mx-auto mt-6 bg-gradient-to-r from-transparent via-[#1d4ed8] to-transparent rounded-full" />
        </div>
      </section>

      {/* BLOKK 1 – Kto sme */}
      <section
        id="who-we-are"
        className="relative py-16 md:py-20"
        aria-labelledby="who-we-are-heading"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-10 items-center">
          {/* Szöveg */}
          <div>
            <h2
              id="who-we-are-heading"
              className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text"
            >
              Kto sme
            </h2>

            <p className="text-[#4b5563] mb-4 leading-relaxed text-sm sm:text-base">
              Sme kancelária ktorá sa už roky{" "}
              <span className="font-semibold">
                cielene zameriava na stavebné a demolačné projekty
              </span>
              . Neberieme si len jednu fázu ale koordinujeme celý proces od
              projektovej prípravy cez zemné práce a demolácie až po výstavbu a
              odovzdanie.
            </p>

            <p className="text-[#4b5563] leading-relaxed text-sm sm:text-base mb-4">
              Náš tím tvoria odborníci partnerské firmy a remeselníci ktorí
              spolupracujú dlhodobo. V pozadí funguje zosúladená sieť ktorá
              dokáže dotiahnuť menšie nehnuteľnosti aj väčšie priemyselné a
              obchodné objekty od demolácie až po novú stavbu.
            </p>

            <p className="text-[#4b5563] leading-relaxed text-sm sm:text-base mb-4">
              Máme skúsenosti s výstavbou a rekonštrukciami výrobných hál
              hangárov skladov obchodov reštaurácií rodinných domov aj
              bytových domov. Realizovali sme zemné práce cesty a spevnené
              plochy pri nových obytných zónach pričom sme sledovali celý
              proces nie iba jednu malú časť.
            </p>

            <p className="text-[#4b5563] leading-relaxed text-sm sm:text-base">
              Záleží nám na tom aby si mal{" "}
              <span className="font-semibold">
                jasnú komunikáciu predvídateľnú prítomnosť a zodpovedné
                vedenie projektu
              </span>
              . Aby si vždy vedel na koho sa obrátiť a mal partnera ktorý s
              tebou projekt dotiahne do konca a nezmizne v momente keď sa situácia
              skomplikuje.
            </p>
          </div>

          {/* Kép */}
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-[#d0d7e6] shadow-[0_12px_45px_rgba(148,163,184,0.4)]">
            <Image
              src="/about-site.jpeg"
              alt="Stavenisko a osobná konzultácia na mieste"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 text-xs text-white">
              <div className="uppercase tracking-[0.22em] text-[10px]">
                REAL PROJECTS
              </div>
              <div className="font-medium">
                Priemyselné obytné aj obchodné priestory s reálnou praxou
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOKK 2 – Čo prinášame */}
      <section
        id="what-we-offer"
        className="relative py-16 md:py-20 bg-gradient-to-b from-[#eef2ff] to-[#f5f7ff]"
        aria-labelledby="what-we-offer-heading"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-10 items-center">
          {/* Kép */}
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-[#d0d7e6] shadow-[0_12px_45px_rgba(148,163,184,0.4)]">
            <Image
              src="/about-vr.jpeg"
              alt="Stavebný proces a VR náhľad ProForm Consulting"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/45 via-transparent to-[#2563eb]/45" />
            <div className="absolute bottom-3 left-4 text-xs md:text-sm text-white">
              <div className="uppercase tracking-[0.22em] text-[10px]">
                VR &amp; PLANNING
              </div>
              <div className="font-medium">
                Viditeľný premyslený projekt ešte pred realizáciou
              </div>
            </div>
          </div>

          {/* Szöveg */}
          <div>
            <h2
              id="what-we-offer-heading"
              className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text"
            >
              Čo prinášame
            </h2>

            <p className="text-[#4b5563] mb-4 leading-relaxed text-sm sm:text-base">
              Naším cieľom je aby výstavba nebola chaotické a stresujúce obdobie
              kde každý deň prichádza nové prekvapenie. Nemusíš hľadať
              remeselníkov riešiť termíny ani konfliktné situácie{" "}
              <span className="font-semibold">
                riadenie celého procesu berieme na seba
              </span>
              .
            </p>

            <ul className="text-[#475569] text-sm space-y-2 mb-4">
              <li>• kompletná projektová koordinácia a harmonogram</li>
              <li>• vybavenie povolení a administratívy</li>
              <li>• zapojenie overených firiem a odborníkov</li>
              <li>• demolácia → zemné práce → výstavba → dokončovacie práce v jednej línii</li>
              <li>• VR náhľad pred kľúčovými rozhodnutiami</li>
              <li>• odovzdanie na kľúč s priebežnou transparentnou komunikáciou</li>
            </ul>

            <p className="text-[#4b5563] leading-relaxed text-sm sm:text-base">
              Budujeme kanceláriu kde{" "}
              <span className="font-semibold">prebieha skutočná tímová práca</span>{" "}
              nie séria náhodných rozhodnutí. Spoliehame sa na vopred
              nastavený a mnohokrát overený proces aby bol postup projektu čo
              najpredvídateľnejší a aby si vedel pokojnejšie rozhodovať o
              peniazoch čase aj technickom riešení stavby.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}