// app/projekty/page.tsx
import type { Metadata } from "next";
import MainNav from "../components/MainNav";

export const metadata: Metadata = {
  title:
    "Projekty | ProForm Consulting – stavebné projekty a koordinácia výstavby",
  description:
    "Prehľad typov projektov, ktoré zastrešuje ProForm Consulting: rodinné domy, bytové domy, komerčné priestory, haly a demolačné projekty. Od prvotného zámeru cez projekt, povolenia až po koordináciu realizácie.",
  keywords: [
    "ProForm Consulting",
    "stavebné projekty",
    "projekt manažment výstavby",
    "koordinácia stavby",
    "rodinný dom projekt",
    "bytový dom projekt",
    "komerčná stavba",
    "priemyseľná hala",
    "rekonštrukcia budovy",
    "demolácia objektu",
  ],
  alternates: {
    canonical: "https://proformconsulting.sk/projekty",
    languages: {
      "sk-SK": "/projekty",
      "hu-HU": "/hu/projektek",
      "x-default": "/",
    },
  },
  openGraph: {
    title:
      "Projekty – ProForm Consulting | Stavebné projekty v jednej ruke",
    description:
      "Rodinné domy, bytové domy, komerčné priestory, haly a demolácie. ProForm Consulting zastreší celý systém projektu od nápadu po odovzdanie.",
    url: "https://proformconsulting.sk/projekty",
    type: "website",
    siteName: "ProForm Consulting",
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

export default function ProjectsSkPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Koordinácia stavebných projektov",
    provider: {
      "@type": "Organization",
      name: "ProForm Consulting",
    },
    areaServed: "juhozápadné Slovensko",
    serviceType: [
      "projektovanie rodinných domov",
      "projektovanie bytových domov",
      "komerčné a kancelárske priestory",
      "priemyseľné haly a sklady",
      "demolácie a príprava územia",
      "koordinácia výstavby a projektový manažment",
    ],
    url: "https://proformconsulting.sk/projekty",
  };

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-900 relative overflow-hidden">
      {/* NAV – benne van a nyelvváltó */}
      <MainNav />

      {/* SEO: JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HÁTTÉR / AURÁK */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#d7e3ff] blur-[200px] opacity-70" />
      <div className="pointer-events-none absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full bg-[#c4d9ff] blur-[220px] opacity-60" />
      <div className="pointer-events-none absolute bottom-[-260px] left-1/4 w-[460px] h-[460px] rounded-full bg-[#e0e6f5] blur-[180px] opacity-80" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_top,#e0e7ff_0,#f5f7fb_55%)] mix-blend-screen" />

      {/* HERO – hasonló a főoldal / rólunk stílusához */}
      <section
        className="relative w-full py-20 md:py-24 bg-gradient-to-b from-white/95 via-[#f2f5fd]/96 to-[#eef2fb]"
        aria-labelledby="projects-hero-heading"
      >
        <div className="max-w-5xl mx-auto px-4 md:px-6 flex flex-col items-center text-center relative z-10">
          <p className="inline-block text-[11px] md:text-xs tracking-[0.25em] uppercase text-[#64748b] mb-3">
            Stavebné projekty & koordinácia
          </p>

          <h1
            id="projects-hero-heading"
            className="block text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-[#1f4fa5] via-[#3e6fb8] to-[#7fa4dd] text-transparent bg-clip-text mb-4"
          >
            Vaše stavebné projekty v jednej ruke – od nápadu po odovzdanie.
          </h1>

          <div className="w-20 md:w-24 h-[2px] mb-6 bg-gradient-to-r from-transparent via-[#2563eb] to-transparent rounded-full" />

          <p className="text-[#4b5563] text-base md:text-lg max-w-2xl mb-8 md:mb-10 leading-relaxed">
            Neponúkame len projektovú dokumentáciu, ale celý, koordinovaný
            systém. Zastrešíme remeselníkov, termíny aj dokumentáciu, aby váš
            projekt prebiehal pokojne, predvídateľne a bez chaosu.
          </p>
        </div>
      </section>

      {/* SEKCIA 1 – Typy projektov */}
      <section
        className="relative py-16 md:py-20"
        aria-labelledby="project-types-heading"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <h2
            id="project-types-heading"
            className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text"
          >
            Aké typy projektov riešime?
          </h2>
          <p className="text-[#4b5563] max-w-3xl text-sm md:text-base mb-8 leading-relaxed">
            Pri každom projekte hľadáme rovnováhu medzi funkčnosťou,
            rozpočtom a reálnou realizovateľnosťou. Veľkosť a funkcia sa
            menia – systém v pozadí je stále rovnaký.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Rodinné domy */}
            <article className="bg-white rounded-2xl border border-[#d4ddf4] shadow-[0_14px_32px_rgba(148,163,184,0.42)] p-5">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.24em] text-[#2563eb] mb-2">
                Rodinné domy
              </p>
              <h3 className="text-sm md:text-base font-semibold text-[#111827] mb-2">
                Novostavby a prístavby
              </h3>
              <p className="text-[#4b5563] text-xs md:text-sm leading-relaxed">
                Nové rodinné domy, moderné vily, prístavby a kompletné
                rekonštrukcie. Od prvého náčrtu až po nasťahovanie.
              </p>
            </article>

            {/* Bytové domy */}
            <article className="bg-white rounded-2xl border border-[#d4ddf4] shadow-[0_14px_32px_rgba(148,163,184,0.42)] p-5">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.24em] text-[#2563eb] mb-2">
                Bytové domy
              </p>
              <h3 className="text-sm md:text-base font-semibold text-[#111827] mb-2">
                Menšie developerské projekty
              </h3>
              <p className="text-[#4b5563] text-xs md:text-sm leading-relaxed">
                8–16 bytové domy a menšie rezidenčné projekty. Mix bytov,
                pôdorysy, parkovanie a návratnosť – pozeráme sa na to očami
                investora.
              </p>
            </article>

            {/* Komerčné projekty */}
            <article className="bg-white rounded-2xl border border-[#d4ddf4] shadow-[0_14px_32px_rgba(148,163,184,0.42)] p-5">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.24em] text-[#2563eb] mb-2">
                Komerčné & kancelárie
              </p>
              <h3 className="text-sm md:text-base font-semibold text-[#111827] mb-2">
                Kancelárie, obchody, ambulancie
              </h3>
              <p className="text-[#4b5563] text-xs md:text-sm leading-relaxed">
                Priestory, kde je dôležitá zákaznícka skúsenosť aj efektívna
                prevádzka – kancelárie, showroomy, menšie obchodné jednotky.
              </p>
            </article>

            {/* Haly / demolácie */}
            <article className="bg-white rounded-2xl border border-[#d4ddf4] shadow-[0_14px_32px_rgba(148,163,184,0.42)] p-5">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.24em] text-[#2563eb] mb-2">
                Haly & demolácie
              </p>
              <h3 className="text-sm md:text-base font-semibold text-[#111827] mb-2">
                Priemyselné projekty a príprava územia
              </h3>
              <p className="text-[#4b5563] text-xs md:text-sm leading-relaxed">
                Výrobné haly, sklady, hangáre a demolačné projekty. Povolenia,
                dokumentácia a bezpečnostné postupy v jednom systéme.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SEKCIA 2 – Ako pracujeme? */}
      <section
        className="relative py-16 md:py-20 bg-[#eef2ff]/60"
        aria-labelledby="project-process-heading"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2
            id="project-process-heading"
            className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text"
          >
            Ako prebieha projekt s nami?
          </h2>
          <p className="text-[#4b5563] max-w-3xl text-sm md:text-base mb-8 leading-relaxed">
            Nechávame vás rozhodovať, ale nenecháme vás v chaose. Každý krok
            má svoju logiku, zodpovednú osobu a jasný výstup.
          </p>

          <ol className="space-y-4 md:space-y-5 text-sm md:text-base text-[#374151]">
            <li className="bg-white/90 rounded-2xl border border-[#d4ddf4] p-5 shadow-[0_10px_25px_rgba(148,163,184,0.35)]">
              <span className="font-semibold text-[#1d4ed8] mr-2">1.</span>
              <span className="font-semibold">Úvodná konzultácia & analýza</span>
              <p className="mt-2 text-xs md:text-sm text-[#4b5563]">
                Prejdeme vaše ciele, pozemok alebo existujúcu budovu,
                rozpočet a časový rámec. Otvorene povieme, čo je reálne a kde
                vidíme riziká.
              </p>
            </li>

            <li className="bg-white/90 rounded-2xl border border-[#d4ddf4] p-5 shadow-[0_10px_25px_rgba(148,163,184,0.35)]">
              <span className="font-semibold text-[#1d4ed8] mr-2">2.</span>
              <span className="font-semibold">Koncept + 3D / VR náhľad</span>
              <p className="mt-2 text-xs md:text-sm text-[#4b5563]">
                Pripravíme prvý návrh, vizualizácie a podľa potreby aj VR
                prehliadku. V tejto fáze sa dá jednoducho meniť dispozícia,
                materiály aj vzhľad.
              </p>
            </li>

            <li className="bg-white/90 rounded-2xl border border-[#d4ddf4] p-5 shadow-[0_10px_25px_rgba(148,163,184,0.35)]">
              <span className="font-semibold text-[#1d4ed8] mr-2">3.</span>
              <span className="font-semibold">
                Projekt pre povolenie a realizáciu
              </span>
              <p className="mt-2 text-xs md:text-sm text-[#4b5563]">
                Krok za krokom pripravíme dokumentáciu pre úrady aj realizačnú
                firmu – statika, technika, detaily. Všetko v prehľadnom systéme.
              </p>
            </li>

            <li className="bg-white/90 rounded-2xl border border-[#d4ddf4] p-5 shadow-[0_10px_25px_rgba(148,163,184,0.35)]">
              <span className="font-semibold text-[#1d4ed8] mr-2">4.</span>
              <span className="font-semibold">
                Organizácia & koordinácia realizácie
              </span>
              <p className="mt-2 text-xs md:text-sm text-[#4b5563]">
                Zlaďujeme remeselníkov, dohliadame na harmonogram a kvalitu
                práce. Vy komunikujete s jedným partnerom, my komunikujeme so
                všetkými ostatnými.
              </p>
            </li>

            <li className="bg-white/90 rounded-2xl border border-[#d4ddf4] p-5 shadow-[0_10px_25px_rgba(148,163,184,0.35)]">
              <span className="font-semibold text-[#1d4ed8] mr-2">5.</span>
              <span className="font-semibold">
                Odovzdanie, uzavretie, následný servis
              </span>
              <p className="mt-2 text-xs md:text-sm text-[#4b5563]">
                Sprevádzame procesom odovzdania, kontrolujeme výstupy a
                dohliadame, aby nezostali otvorené nedoriešené body.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* SEKCIA 3 – Čo to pre vás znamená? */}
      <section
        className="relative py-16 md:py-20"
        aria-labelledby="project-benefits-heading"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2
            id="project-benefits-heading"
            className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text"
          >
            Čo pre vás znamená spolupráca s ProForm Consulting?
          </h2>
          <p className="text-[#4b5563] max-w-3xl text-sm md:text-base mb-8 leading-relaxed">
            Nechceme byť „ďalší majster v telefóne“. Chceme byť partner, ktorý
            drží pokope celý systém projektu.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <article className="bg-white p-6 rounded-2xl border border-[#d4ddf4] shadow-[0_14px_32px_rgba(148,163,184,0.4)]">
              <h3 className="text-lg font-semibold mb-2 text-[#1d4ed8]">
                Systém & prehľad
              </h3>
              <p className="text-[#4b5563] text-sm leading-relaxed">
                Viete, čo sa deje, kto pracuje a aký je ďalší krok. Nie je to
                len „uvidíme, ako to dopadne“.
              </p>
            </article>

            <article className="bg-white p-6 rounded-2xl border border-[#d4ddf4] shadow-[0_14px_32px_rgba(148,163,184,0.4)]">
              <h3 className="text-lg font-semibold mb-2 text-[#1d4ed8]">
                Vizuálna istota
              </h3>
              <p className="text-[#4b5563] text-sm leading-relaxed">
                Dom alebo priestor nepredstavujete len z pôdorysu. Vidíte ho v
                3D, vo VR – drahé chyby odchytíme ešte na obrazovke.
              </p>
            </article>

            <article className="bg-white p-6 rounded-2xl border border-[#d4ddf4] shadow-[0_14px_32px_rgba(148,163,184,0.4)]">
              <h3 className="text-lg font-semibold mb-2 text-[#1d4ed8]">
                Čas & nervy
              </h3>
              <p className="text-[#4b5563] text-sm leading-relaxed">
                Menej telefonátov, menej naháňania remeselníkov, menej stresu.
                My koordinujeme proces, vy robíte rozhodnutia.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA BLOK */}
      <section
        className="relative py-20 md:py-24 bg-[#f5f7ff]"
        aria-labelledby="project-cta-heading"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#d4ddf4] shadow-[0_18px_50px_rgba(148,163,184,0.45)]">
            <h2
              id="project-cta-heading"
              className="text-2xl md:text-3xl font-bold mb-4 text-[#1f2937]"
            >
              Máte pozemok, dom alebo budovu, s ktorou chcete niečo urobiť?
            </h2>
            <p className="text-[#4b5563] max-w-xl mb-6 text-sm md:text-base leading-relaxed">
              Napíšte nám pár viet o tom, v akej fáze ste – pozemok,
              existujúci dom, rekonštrukcia alebo investičný zámer – a my vám
              naznačíme, aké kroky vás čakajú v najbližších 30–60 dňoch.
            </p>

            <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-6">
              <div className="text-[#1f2937] text-sm md:text-base">
                <div className="mb-1">
                  Email:{" "}
                  <a
                    href="mailto:proformconsulting@azet.sk"
                    className="font-semibold text-[#1d4ed8] hover:underline"
                  >
                    proformconsulting@azet.sk
                  </a>
                </div>
                <div className="opacity-80 text-xs md:text-sm">
                  Telefonická dostupnosť: Po–Pi 9:00–17:00
                </div>
              </div>

              <a
                href="mailto:proformconsulting@azet.sk?subject=Nezáväzná%20konzultácia%20k%20projektu"
                className="inline-flex items-center justify-center mt-2 md:mt-0 px-9 md:px-10 py-3.5 md:py-4 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white text-sm md:text-base font-semibold shadow-[0_16px_45px_rgba(37,99,235,0.75)] hover:scale-105 active:scale-100 transition"
              >
                Nezáväzná projektová konzultácia
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}