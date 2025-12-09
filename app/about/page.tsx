// app/o-nas/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import MainNav from "../components/MainNav";

export const metadata: Metadata = {
  title: "O nás | ProForm Consulting | stavebné projekty v jednej ruke",
  description:
    "ProForm Consulting už niekoľko rokov zabezpečuje riadenie stavebných a demolačných projektov. Poskytujeme koordináciu, organizáciu a sieť overených dodávateľov na juhozápadnom Slovensku. Rodinné domy, rekonštrukcie, haly, komerčné objekty a demolácie.",
  alternates: {
    canonical: "https://proformconsulting.sk/o-nas",
    languages: {
      "hu-HU": "/hu/rolunk",
      "sk-SK": "/o-nas",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "O nás | ProForm Consulting | projektová koordinácia a realizácia",
    description:
      "Tím zameraný na stavebné a demolačné projekty so stabilným zázemím a silnou praxou. Overená sieť dodávateľov, skúsenosti z rôznych typov stavieb a profesionálne vedenie od prvotnej myšlienky až po odovzdanie kľúčov.",
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
      "Koordinácia stavebných a demolačných projektov, projektový manažment a sieť dodávateľov na juhozápadnom Slovensku. Niekoľkoročné skúsenosti a stabilné odborné zázemie.",
    url: "https://proformconsulting.sk/o-nas",
    areaServed: "Juhovýchodné Slovensko",
    serviceType: [
      "Koordinácia stavebných projektov",
      "Organizácia demolačných prác",
      "VR a 3D vizualizácia",
      "Organizácia realizácie",
    ],
    email: "proformconsulting@azet.sk",
  };

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-900 relative overflow-hidden">
      <MainNav />

      {/* SEO JSON LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Pozadie aurárny efekt */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#d7e3ff] blur-[200px] opacity-70" />
      <div className="pointer-events-none absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full bg-[#c4d9ff] blur-[220px] opacity-60" />
      <div className="pointer-events-none absolute bottom-[-260px] left-1/4 w-[460px] h-[460px] rounded-full bg-[#e0e6f5] blur-[180px] opacity-80" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_top,#e0e7ff_0,#f5f7fb_55%)] mix-blend-screen" />

      {/* HERO hlavné posolstvo */}
      <section
        id="about-hero"
        className="relative w-full py-20 md:py-24 bg-gradient-to-b from-white/95 via-[#f2f5fd]/96 to-[#eef2fb]"
        aria-labelledby="about-hero-heading"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-[1.2fr,1fr] gap-10 items-center relative z-10">
          <div>
            <p className="text-[11px] md:text-xs tracking-[0.24em] uppercase text-[#64748b] mb-3">
              Štúdio pre stavebné projekty a koordináciu
            </p>
            <h1
              id="about-hero-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-[#1f4fa5] via-[#3e6fb8] to-[#7fa4dd] text-transparent bg-clip-text"
            >
              Jedna kancelária ktorá už roky drží celý stavebný proces pokope.
            </h1>
            <h2 className="text-lg md:text-xl font-semibold text-[#1f2937] mb-5">
              Nepracujeme iba s budovami vytvárame funkčný systém založený na
              skúsenostiach v úzkej spolupráci s klientom.
            </h2>
            <p className="text-[#4b5563] max-w-xl text-sm md:text-base leading-relaxed mb-6">
              Niekoľko rokov sa venujeme stavebným a demolačným projektom od
              rodinných domov až po väčšie priemyselné a komerčné objekty. V
              prostredí stavebníctva sa pohybujeme s istotou máme stabilné
              zázemie overených odborníkov a postup ktorý bol viackrát otestovaný
              v praxi. Vďaka tomu má projekt od prvého nápadu až po odovzdanie
              kľúčov jasnú a prehľadnú štruktúru.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 text-xs md:text-sm">
              <div className="bg-white/90 rounded-xl p-4 shadow-[0_10px_30px_rgba(148,163,184,0.35)] border border-[#d4ddf4]">
                <div className="text-[#2563eb] font-semibold mb-1">
                  Niekoľkoročná prax
                </div>
                <p className="text-[#4b5563]">
                  Projekty rodinných domov hál obchodov skladov a demolačných
                  prác s reálnymi skúsenosťami z terénu.
                </p>
              </div>
              <div className="bg-white/90 rounded-xl p-4 shadow-[0_10px_30px_rgba(148,163,184,0.35)] border border-[#d4ddf4]">
                <div className="text-[#2563eb] font-semibold mb-1">
                  Stabilné zázemie
                </div>
                <p className="text-[#4b5563]">
                  Dlhodobá spolupráca s dodávateľmi partnerskými firmami a
                  profesiami ktoré poznáme a opakovane s nimi pracujeme.
                </p>
              </div>
              <div className="bg-white/90 rounded-xl p-4 shadow-[0_10px_30px_rgba(148,163,184,0.35)] border border-[#d4ddf4]">
                <div className="text-[#2563eb] font-semibold mb-1">
                  Systémový prístup
                </div>
                <p className="text-[#4b5563]">
                  Projekt povolenia realizácia demolácia a komunikácia všetko u
                  jedného partnera s jasnou zodpovednosťou.
                </p>
              </div>
            </div>
          </div>

          {/* Hero obrázok */}
          <div className="relative h-56 md:h-72 lg:h-80 rounded-3xl overflow-hidden border border-[#d0d7e6] bg-white shadow-[0_18px_50px_rgba(148,163,184,0.5)]">
            <Image
              src="/about-team.jpeg"
              alt="Tím ProForm Consulting a riadenie projektu"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 text-xs md:text-sm text-white">
              <div className="uppercase tracking-[0.22em] text-[10px]">
                PROJECT TEAM
              </div>
              <div className="font-medium">Zladená sieť dodávateľov</div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOK 1 Kto sme */}
      <section
        id="who-we-are"
        className="relative py-16 md:py-20"
        aria-labelledby="who-we-are-heading"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2
              id="who-we-are-heading"
              className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text"
            >
              Kto sme?
            </h2>

            <p className="text-[#4b5563] mb-4 leading-relaxed text-sm sm:text-base">
              Sme kancelária ktorá sa už niekoľko rokov{" "}
              <span className="font-semibold">
                cielene venuje stavebným a demolačným projektom
              </span>
              . Neberieme si iba jednu fázu práce naším cieľom je zastrešiť celý
              priebeh od návrhu cez demolačné a zemné práce až po dokončenie a
              odovzdanie hotového diela.
            </p>

            <p className="text-[#4b5563] leading-relaxed text-sm sm:text-base mb-4">
              Tím je zložený z odborníkov partnerských firiem a majstrov ktorí
              spolupracujú dlhodobo. V pozadí funguje zladená sieť ktorá dokáže
              zvládnuť menšie objekty aj rozsiahle priemyselné a komerčné stavby
              od demolácie až po novú výstavbu.
            </p>

            <p className="text-[#4b5563] leading-relaxed text-sm sm:text-base mb-4">
              Máme skúsenosti s realizáciou a demontážou fabrík hál skladov
              obchodov reštaurácií rodinných domov a bytových objektov. Venujeme
              sa aj zemným prácam príprave komunikácií a dopravných plôch pri
              nových obytných zónach. Sledujeme celý proces nie iba malý výsek.
            </p>

            <p className="text-[#4b5563] leading-relaxed text-sm sm:text-base">
              Záleží nám na tom aby ste mali{" "}
              <span className="font-semibold">
                jasnú komunikáciu predvídateľný priebeh a zodpovedné vedenie
              </span>
              . Potrebujete vedieť na koho sa obrátiť a mať partnera ktorý vás
              sprevádza projektom od začiatku do konca. Niekoho kto nezmizne v
              momente keď sa situácia stane náročnejšou.
            </p>
          </div>

          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-[#d0d7e6] shadow-[0_12px_45px_rgba(148,163,184,0.4)]">
            <Image
              src="/about-site.jpeg"
              alt="Stavenisko a osobné stretnutie na mieste"
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
                Priemyselné obytné a komerčné priestory so skutočnou praxou
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOK 2 Čo prinášame */}
      <section
        id="what-we-offer"
        className="relative py-16 md:py-20 bg-gradient-to-b from-[#eef2ff] to-[#f5f7ff]"
        aria-labelledby="what-we-offer-heading"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-[#d0d7e6] shadow-[0_12px_45px_rgba(148,163,184,0.4)]">
            <Image
              src="/about-vr.jpeg"
              alt="Proces výstavby a VR náhľad projektu v ProForm Consulting"
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
                Viditeľný a premyslený projekt ešte pred realizáciou
              </div>
            </div>
          </div>

          <div>
            <h2
              id="what-we-offer-heading"
              className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text"
            >
              Čo prinášame?
            </h2>

            <p className="text-[#4b5563] mb-4 leading-relaxed text-sm sm:text-base">
              Naším cieľom je aby stavebné obdobie nebolo chaotickým a
              vyčerpávajúcim časom plným prekvapení. Klient nemá tráviť dni
              hľadaním majstrov dohadovaním termínov a riešením sporov.{" "}
              <span className="font-semibold">
                Riadenie celého procesu preberáme na seba
              </span>
              .
            </p>

            <ul className="text-[#475569] text-sm space-y-2 mb-4">
              <li>• kompletná koordinácia projektu a harmonogramu</li>
              <li>• vybavenie povolení a administratívnych krokov</li>
              <li>• zapojenie overených firiem a odborníkov</li>
              <li>• demolácia potom zemné práce potom výstavba a dokončenie u jedného partnera</li>
              <li>• VR náhľady pre dôležité rozhodnutia</li>
              <li>• odovzdanie hotového diela s priehľadnou komunikáciou</li>
            </ul>

            <p className="text-[#4b5563] leading-relaxed text-sm sm:text-base">
              Budujeme kanceláriu v ktorej funguje{" "}
              <span className="font-semibold">skutočná tímová spolupráca</span>{" "}
              a nie náhodné rozhodnutia zo dňa na deň. Opierame sa o postup
              ktorý bol viackrát použitý a vyladený na reálnych projektoch. Vďaka
              tomu je priebeh projektu oveľa predvídateľnejší a vy môžete robiť
              rozhodnutia o rozpočte čase a technickom riešení s väčším pokojom.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}