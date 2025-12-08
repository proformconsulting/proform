import type { Metadata } from "next";
import Image from "next/image";
import MainNav from "../components/MainNav";

// --- SEO ---
export const metadata: Metadata = {
  title: "O nás | ProForm Consulting – stavebné projekty a koordinácia",
  description:
    "ProForm Consulting – koordinácia stavebných a demolačných projektov, kompletné riadenie výstavby a sieť spoľahlivých partnerov na juhozápadnom Slovensku.",
  alternates: {
    canonical: "https://proformconsulting.sk/o-nas",
    languages: {
      "sk-SK": "/o-nas",
      "hu-HU": "/hu/rolunk",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "O nás – ProForm Consulting | Koordinácia a riadenie projektov",
    description:
      "Skúsený tím, stabilné zázemie a overení remeselníci. ProForm Consulting drží celý proces výstavby v jednom systéme – od prvého návrhu po odovzdanie kľúčov.",
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
      "Koordinácia stavebných a demolačných projektov, projektový manažment a sieť overených partnerov na juhozápadnom Slovensku.",
    url: "https://proformconsulting.sk/o-nas",
    areaServed: "Juhozápadné Slovensko",
    serviceType: [
      "Koordinácia stavebného projektu",
      "Demolačné práce a ich riadenie",
      "VR a 3D vizualizácie",
      "Organizácia výstavby",
    ],
    email: "proformconsulting@azet.sk",
  };

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-900 relative overflow-hidden">
      {/* NAV */}
      <MainNav />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* AURÁK – egységes vizuál */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#d7e3ff] blur-[200px] opacity-70" />
      <div className="pointer-events-none absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full bg-[#c4d9ff] blur-[220px] opacity-60" />
      <div className="pointer-events-none absolute bottom-[-260px] left-1/4 w-[460px] h-[460px] rounded-full bg-[#e0e6f5] blur-[180px] opacity-80" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_top,#e0e7ff_0,#f5f7fb_55%)] mix-blend-screen" />

      {/* HERO */}
      <section
        id="about-hero"
        className="relative w-full py-20 md:py-24 bg-gradient-to-b from-white/95 via-[#f2f5fd]/96 to-[#eef2fb]"
        aria-labelledby="about-hero-heading"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-[1.2fr,1fr] gap-10 items-center relative z-10">
          {/* Text */}
          <div>
            <p className="text-[11px] md:text-xs tracking-[0.24em] uppercase text-[#64748b] mb-3">
              Projektové &amp; koordinačné štúdio
            </p>

            <h1
              id="about-hero-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-[#1f4fa5] via-[#3e6fb8] to-[#7fa4dd] text-transparent bg-clip-text"
            >
              Jedna kancelária, ktorá drží celý proces výstavby.
            </h1>

            <h2 className="text-lg md:text-xl font-semibold text-[#1f2937] mb-5">
              Nevytvárame len domy – vytvárame systém, ktorý funguje.
            </h2>

            <p className="text-[#4b5563] max-w-xl text-sm md:text-base leading-relaxed mb-6">
              Už roky pracujeme na stavebných a demolačných projektoch. V
              stavebníctve sa pohybujeme s istotou, máme stabilné zázemie,
              dlhodobých partnerov a proces, ktorý prináša prehľad a pokoj do
              každého projektu – od zámeru až po odovzdanie kľúčov.
            </p>

            {/* Mini-infoblokkok */}
            <div className="grid sm:grid-cols-3 gap-4 text-xs md:text-sm">
              <div className="bg-white/90 rounded-xl p-4 shadow-[0_10px_30px_rgba(148,163,184,0.35)] border border-[#d4ddf4]">
                <div className="text-[#2563eb] font-semibold mb-1">Skúsenosti</div>
                <p className="text-[#4b5563]">
                  Rodinné domy, haly, prevádzky a demolačné práce.
                </p>
              </div>

              <div className="bg-white/90 rounded-xl p-4 shadow-[0_10px_30px_rgba(148,163,184,0.35)] border border-[#d4ddf4]">
                <div className="text-[#2563eb] font-semibold mb-1">
                  Stabilné zázemie
                </div>
                <p className="text-[#4b5563]">
                  Overení remeselníci a dlhodobé partnerské firmy.
                </p>
              </div>

              <div className="bg-white/90 rounded-xl p-4 shadow-[0_10px_30px_rgba(148,163,184,0.35)] border border-[#d4ddf4]">
                <div className="text-[#2563eb] font-semibold mb-1">Systém</div>
                <p className="text-[#4b5563]">
                  Projekt, povolenia, výstavba – všetko v jednom procese.
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-56 md:h-72 lg:h-80 rounded-3xl overflow-hidden border border-[#d0d7e6] bg-white shadow-[0_18px_50px_rgba(148,163,184,0.5)]">
            <Image
              src="/about-team.jpeg"
              alt="Projektový tím ProForm Consulting"
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
              <div className="font-medium">Koordinovaná sieť partnerov</div>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCIa 1 – Kto sme? */}
      <section
        id="who-we-are"
        className="relative py-16 md:py-20"
        aria-labelledby="who-we-are-heading"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center relative z-10">
          {/* Text */}
          <div>
            <h2
              id="who-we-are-heading"
              className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text"
            >
              Kto sme?
            </h2>

            <p className="text-[#4b5563] mb-4 leading-relaxed text-sm sm:text-base">
              Náš tím tvorí sieť odborníkov, partnerských firiem a remeselníkov,
              ktorí spolupracujú dlhé roky. Tento systém nám umožňuje zvládnuť
              projekty rôzneho rozsahu – od menších objektov až po veľké
              priemyselné a komerčné stavby či kompletné demolácie.
            </p>

            <p className="text-[#4b5563] mb-4 leading-relaxed text-sm sm:text-base">
              Skúsenosti máme s halami, skladmi, prevádzkami, rodinnými domami,
              bytovými domami aj s projektmi, kde je potrebné najprv búrať a až
              potom budovať. Zabezpečujeme aj zemné práce, komunikácie a
              prípravu územia pre nové developerské projekty.
            </p>

            <p className="text-[#4b5563] leading-relaxed text-sm sm:text-base">
              Záleží nám na tom, aby ste mali{" "}
              <span className="font-semibold">
                jasného partnera a spoľahlivé vedenie projektu
              </span>
              – nie len riešenie jednej fázy, ale kompletný manažment od začiatku
              až po odovzdanie.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-[#d0d7e6] shadow-[0_12px_45px_rgba(148,163,184,0.4)]">
            <Image
              src="/about-site.jpeg"
              alt="Stavenište a tím ProForm Consulting"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 text-xs text-white">
              <div className="uppercase tracking-[0.22em] text-[10px]">
                REAL PROJECTS
              </div>
              <div className="font-medium">Priemyselné, obytné, komerčné stavby</div>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCIa 2 – Čo ponúkame? */}
      <section
        id="what-we-offer"
        className="relative py-16 md:py-20 bg-gradient-to-b from-[#eef2ff] to-[#f5f7ff]"
        aria-labelledby="what-we-offer-heading"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center relative z-10">
          {/* Image */}
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-[#d0d7e6] shadow-[0_12px_45px_rgba(148,163,184,0.4)]">
            <Image
              src="/about-vr.jpeg"
              alt="VR vizualizácia a plánovanie projektu"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/45 via-transparent to-[#2563eb]/45" />
            <div className="absolute bottom-3 left-4 text-xs md:text-sm text-white">
              <div className="uppercase tracking-[0.22em] text-[10px]">
                VR &amp; PLANNING
              </div>
              <div className="font-medium">Projekt, ktorý vidíte ešte pred výstavbou</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <h2
              id="what-we-offer-heading"
              className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text"
            >
              Čo ponúkame?
            </h2>

            <p className="text-[#4b5563] mb-4 leading-relaxed text-sm sm:text-base">
              Naším cieľom je, aby výstavba nebola chaotickým a stresujúcim
              obdobím. Aby ste nemuseli hľadať majstrov, riešiť termíny ani
              komunikovať v krízových situáciách – všetko prevezmeme my ako váš
              projektový partner.
            </p>

            <ul className="text-[#475569] text-sm space-y-2 mb-4">
              <li>• kompletná koordinácia a harmonogram</li>
              <li>• vybavenie povolení a administratívy</li>
              <li>• overené firmy a odborníci</li>
              <li>• búranie → výstavba → dokončenie v jednom procese</li>
              <li>• VR vizualizácie pred začiatkom stavby</li>
              <li>• odovzdanie na kľúč s transparentnou komunikáciou</li>
            </ul>

            <p className="text-[#4b5563] leading-relaxed text-sm sm:text-base">
              Budujeme kanceláriu, kde{" "}
              <span className="font-semibold">prebieha skutočná tímová práca</span>
              . Rozhodujeme systémovo, nie náhodne. Vďaka tomu je váš projekt
              predvídateľnejší a vy sa rozhodujete s väčším pokojom a istotou.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}