// app/projekty/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Projekty | ProForm Consulting prémiové stavebné projekty a profesionálna koordinácia",
  description:
    "ProForm Consulting prináša odborné vedenie stavebných projektov od rodinných domov cez bytové a komerčné priestory až po priemyselné haly. Jasný systém, stabilná sieť odborníkov a profesionálna zodpovednosť počas celého procesu.",
  keywords: [
    "stavebné projekty",
    "riadenie stavby",
    "stavebná koordinácia",
    "rodinný dom projekt",
    "bytová výstavba",
    "komerčný priestor",
    "priemyselná hala",
    "demolačné práce",
    "ProForm Consulting",
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
    title: "Projekty | ProForm Consulting prémiové stavebné riadenie",
    description:
      "Rodinné domy bytové projekty obchodné priestory a haly. Profesionálne vedený proces od prvého návrhu až po odovzdanie hotového diela.",
    url: "https://proformconsulting.sk/projekty",
    type: "website",
    siteName: "ProForm Consulting",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ProjektySk() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Riadenie a koordinácia stavebných projektov",
    provider: {
      "@type": "Organization",
      name: "ProForm Consulting",
    },
    areaServed: "Južné Slovensko",
    serviceType: [
      "kompletné vedenie rodinných domov",
      "bytové a investičné projekty",
      "komerčné a kancelárske priestory",
      "priemyselné haly a príprava územia",
      "demolačné projekty a odborný dohľad",
    ],
  };

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-900 relative overflow-hidden">


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background aura */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#d7e3ff] blur-[200px] opacity-70" />
      <div className="pointer-events-none absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full bg-[#c4d9ff] blur-[220px] opacity-60" />
      <div className="pointer-events-none absolute bottom-[-260px] left-1/4 w-[460px] h-[460px] rounded-full bg-[#e0e6f5] blur-[180px] opacity-80" />

      {/* HERO – prémiový centrálny blok */}
      <section
        id="projekty-hero"
        className="relative w-full py-20 md:py-24 bg-gradient-to-b from-white/95 via-[#f2f5fd]/96 to-[#eef2fb]"
      >
        <div className="max-w-5xl mx-auto px-4 md:px-6 flex flex-col items-center text-center">

          <p className="inline-block text-[11px] md:text-xs tracking-[0.25em] uppercase text-[#64748b] mb-3">
            Prémiové stavebné projekty a koordinácia
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-[#1f4fa5] via-[#3e6fb8] to-[#7fa4dd] text-transparent bg-clip-text">
            Stavebné projekty v prehľadnom profesionálnom systéme
          </h1>

          <h2 className="text-lg md:text-xl font-semibold text-[#1f2937] max-w-2xl mb-5">
            Rodinné domy bytové projekty komerčné priestory a priemyselné haly
            s odborným vedením a stabilným postupom.
          </h2>

          <p className="text-[#4b5563] text-sm md:text-base leading-relaxed max-w-2xl">
            Naším cieľom je aby bol celý proces jasný od prvého návrhu až po
            odovzdanie hotovej stavby. Vedieme projekt v jednotnom systéme aby
            boli rozhodnutia odborné termíny dodržané a realizácia bez stresu.
          </p>

          <div className="w-20 h-[2px] mx-auto mt-6 bg-gradient-to-r from-transparent via-[#1d4ed8] to-transparent rounded-full" />
        </div>
      </section>

      {/* Typy projektov */}
      <section id="project-types" className="relative py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">

          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text">
            Aké projekty vedieme
          </h2>

          <p className="text-[#4b5563] max-w-3xl text-sm md:text-base mb-8 leading-relaxed">
            Každý projekt staviame na rovnakých profesionálnych základoch.
            Premyslená príprava jasný systém kontrola kvality a stabilná
            odborná zodpovednosť v každej fáze.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">

            {/* Rodinný dom */}
            <article className="bg-white rounded-2xl border border-[#d4ddf4] shadow-[0_14px_32px_rgba(148,163,184,0.42)] p-5 flex flex-col justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#2563eb] mb-2">
                  Rodinné domy
                </p>
                <h3 className="text-sm md:text-base font-semibold text-[#111827] mb-2">
                  Premyslené a funkčné bývanie
                </h3>
                <p className="text-[#4b5563] leading-relaxed">
                  Tvoríme priestor s dôrazom na svetlo logiku a dlhodobú
                  kvalitu. Cieľom je komfortné a trvácne riešenie.
                </p>
              </div>
              <p className="mt-3 text-[11px] text-[#9ca3af]">
                Najčastejšia veľkosť 110 až 220 metrov štvorcových
              </p>
            </article>

            {/* Bytové projekty */}
            <article className="bg-white rounded-2xl border border-[#d4ddf4] shadow-[0_14px_32px_rgba(148,163,184,0.42)] p-5 flex flex-col justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#2563eb] mb-2">
                  Bytové projekty
                </p>
                <h3 className="text-sm md:text-base font-semibold text-[#111827] mb-2">
                  Apartmánové domy a investičné výstavby
                </h3>
                <p className="text-[#4b5563] leading-relaxed">
                  Premyslený pôdorys stabilná návratnosť a funkčné riešenia.
                  Projekty ktoré dávajú zmysel investorom aj budúcim obyvateľom.
                </p>
              </div>
              <p className="mt-3 text-[11px] text-[#9ca3af]">
                Zameranie na hodnotu a návratnosť
              </p>
            </article>

            {/* Komerčné priestory */}
            <article className="bg-white rounded-2xl border border-[#d4ddf4] shadow-[0_14px_32px_rgba(148,163,184,0.42)] p-5 flex flex-col justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#2563eb] mb-2">
                  Komerčné priestory
                </p>
                <h3 className="text-sm md:text-base font-semibold text-[#111827] mb-2">
                  Kancelárie predajne a prevádzky
                </h3>
                <p className="text-[#4b5563] leading-relaxed">
                  Priestory navrhnuté podľa logiky prevádzky klientského pohybu
                  a identity značky. Efektívny a estetický pracovný priestor.
                </p>
              </div>
              <p className="mt-3 text-[11px] text-[#9ca3af]">
                Zameranie na funkciu a estetiku
              </p>
            </article>

            {/* Haly a demolácie */}
            <article className="bg-white rounded-2xl border border-[#d4ddf4] shadow-[0_14px_32px_rgba(148,163,184,0.42)] p-5 flex flex-col justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#2563eb] mb-2">
                  Priemyselné haly a demolácia
                </p>
                <h3 className="text-sm md:text-base font-semibold text-[#111827] mb-2">
                  Stabilita bezpečnosť a odborný postup
                </h3>
                <p className="text-[#4b5563] leading-relaxed">
                  Haly sklady logistické priestory a príprava územia vrátane
                  bezpečných demolačných prác.
                </p>
              </div>
              <p className="mt-3 text-[11px] text-[#9ca3af]">
                Odborný dohľad a bezpečnostné štandardy
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* Proces projektu */}
      <section id="project-process" className="relative py-16 md:py-20 bg-[#eef2ff]/60">
        <div className="max-w-6xl mx-auto px-4 md:px-6">

          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text">
            Ako prebieha celý projekt
          </h2>

          <p className="text-[#4b5563] max-w-3xl mb-8 text-sm md:text-base leading-relaxed">
            Projekty sú úspešné vtedy keď majú pevné základy jasný systém
            a odborné vedenie. Náš proces zabezpečuje stabilitu v každej fáze
            rozhodovania a realizácie.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-sm">

            <article className="bg-white rounded-2xl p-5 border border-[#d4ddf4] shadow">
              <h3 className="text-[#1d4ed8] font-semibold mb-2">
                Úvodná konzultácia a analýza
              </h3>
              <p className="text-[#4b5563] leading-relaxed">
                Zhodnotíme ciele pozemok rozpočet a časový plán. Jasne
                pomenujeme čo je reálne a kde sú riziká.
              </p>
            </article>

            <article className="bg-white rounded-2xl p-5 border border-[#d4ddf4] shadow">
              <h3 className="text-[#1d4ed8] font-semibold mb-2">
                Koncept a trojrozmerný náhľad
              </h3>
              <p className="text-[#4b5563] leading-relaxed">
                Priestor môžete prejsť v reálnej veľkosti cez VR okuliare ešte
                pred začiatkom výstavby. Rozhodnutia sú tak presné a isté.
              </p>
            </article>

            <article className="bg-white rounded-2xl p-5 border border-[#d4ddf4] shadow">
              <h3 className="text-[#1d4ed8] font-semibold mb-2">
                Dokumentácia a povolenia
              </h3>
              <p className="text-[#4b5563] leading-relaxed">
                Kompletnú prípravu projektu a komunikáciu s úradmi preberáme my.
                Klient je odbremenený od administratívnej záťaže.
              </p>
            </article>

            <article className="bg-white rounded-2xl p-5 border border-[#d4ddf4] shadow">
              <h3 className="text-[#1d4ed8] font-semibold mb-2">
                Overení realizátori
              </h3>
              <p className="text-[#4b5563] leading-relaxed">
                Spolupracujeme s tímami ktoré dlhodobo prinášajú stabilnú
                kvalitu. Do projektu púšťame iba profesionálov.
              </p>
            </article>

            <article className="bg-white rounded-2xl p-5 border border-[#d4ddf4] shadow">
              <h3 className="text-[#1d4ed8] font-semibold mb-2">
                Koordinácia a dohľad
              </h3>
              <p className="text-[#4b5563] leading-relaxed">
                Kontrola kvality komunikácia s majstrami a dohľad nad postupom.
                Každý krok je jasne dokumentovaný.
              </p>
            </article>

            <article className="bg-white rounded-2xl p-5 border border-[#d4ddf4] shadow">
              <h3 className="text-[#1d4ed8] font-semibold mb-2">
                Kontrola a odovzdanie
              </h3>
              <p className="text-[#4b5563] leading-relaxed">
                Odovzdáme hotové dielo s čistým protokolom kontrolou detailov
                a komplet dokumentáciou. Projekt je ukončený bez otvorených bodov.
              </p>
            </article>

          </div>

        </div>
      </section>

      {/* VR BLOK */}
      <section id="vr" className="relative py-16 md:py-18 bg-gradient-to-r from-[#e0ebff] via-[#f5f7ff] to-[#e0ebff]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">

          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden border border-[#c7d4f0] shadow">
            <Image
              src="/projects-haz.jpeg"
              alt="VR náhľad projektu"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/45 via-transparent to-[#2563eb]/45" />
            <div className="absolute bottom-3 left-4 text-xs md:text-sm text-white">
              <div className="uppercase tracking-[0.22em] text-[10px]">
                Virtuálny náhľad
              </div>
              <div className="font-medium">Priestor v reálnej veľkosti</div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#1f2937]">
              Istota rozhodnutí ešte pred začiatkom výstavby
            </h2>
            <p className="text-[#4b5563] text-sm md:text-base mb-4 leading-relaxed">
              Virtuálna realita umožní klientovi prechádzať priestor v jeho
              skutočnej veľkosti. Svetlo výška stropov a logika priestoru sú
              okamžite pochopiteľné.
            </p>
            <p className="text-[#475569] text-sm leading-relaxed">
              Tento nástroj výrazne znižuje riziko drahých zmien počas stavby
              pretože každý detail je jasný už v prípravnej fáze.
            </p>
          </div>

        </div>
      </section>

      {/* Partneri */}
      <section id="project-team" className="relative py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text">
              Stabilná profesionálna sieť za každým projektom
            </h2>

            <p className="text-[#4b5563] text-sm md:text-base mb-4 leading-relaxed">
              Spolupracujeme s odborníkmi ktorí dlhodobo dodávajú vysoký štandard.
              Pracujeme iba s tímami ktoré prešli našimi kritériami kvality.
            </p>

            <p className="text-[#4b5563] text-sm md:text-base mb-4 leading-relaxed">
              Odborný dohľad časový plán a kvalita sú v našich rukách. Klient má
              jedného partnera ktorý riadi celý proces.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs md:text-sm text-[#475569]">
              <ul className="space-y-1">
                <li>projektanti a statici</li>
                <li>zemné práce a základy</li>
                <li>murovanie a betonáž</li>
                <li>strešné konštrukcie</li>
              </ul>
              <ul className="space-y-1">
                <li>technické inštalácie</li>
                <li>elektroinštalácie</li>
                <li>interiérové práce</li>
                <li>fasády a izolácie</li>
              </ul>
            </div>
          </div>

          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden border border-[#d0d7e6] shadow">
            <Image
              src="/services-team.jpeg"
              alt="Profesionálny stavebný tím"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent" />
            <div className="absolute bottom-3 left-4 text-xs md:text-sm text-white">
              <div className="uppercase tracking-[0.22em] text-[10px]">
                Odborná sieť
              </div>
              <div className="font-medium">Overení realizátori</div>
            </div>
          </div>

        </div>
      </section>

      {/* Kontakt CTA */}
      <section
        id="project-contact-cta"
        className="relative py-18 md:py-20 bg-[#f5f7ff]"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">

          <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#d4ddf4] shadow">

            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#1f2937]">
              Začnime budovať projekt ktorý má jasnú víziu a hodnotu
            </h2>

            <p className="text-[#4b5563] text-sm md:text-base mb-6 max-w-2xl leading-relaxed">
              Napíš stručne v akej fáze sa nachádzaš. Môže ísť o pozemok nápad
              rekonštrukciu halu alebo investičný zámer. Pripravíme prehľadný
              návrh ďalších krokov časový rámec a odborné riešenia.
            </p>

            <div className="flex flex-col md:flex-row md:items-center gap-6">

              <div className="text-[#1f2937] text-sm md:text-base">
                <div className="mb-1">
                  Email{" "}
                  <a
                    href="mailto:proformconsulting@azet.sk"
                    className="font-semibold text-[#1d4ed8] hover:underline"
                  >
                    proformconsulting@azet.sk
                  </a>
                </div>
                <div className="opacity-80 text-sm">
                  Telefonické konzultácie Pondelok až Piatok 9 až 17
                </div>
              </div>

              <a
                href="mailto:proformconsulting@azet.sk?subject=Projekt konzultácia"
                className="inline-flex items-center justify-center px-9 py-4 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white font-semibold text-sm md:text-base shadow hover:scale-105 transition"
              >
                Chcem projektovú konzultáciu
              </a>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}