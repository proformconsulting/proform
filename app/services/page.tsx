// app/sluzby/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import MainNav from "../components/MainNav";

// --- SEO / Meta ---
export const metadata: Metadata = {
  title:
    "Služby | ProForm Consulting – projekty a koordinácia výstavby",
  description:
    "ProForm Consulting poskytuje komplexné riadenie stavebných projektov pre rodinné domy, rekonštrukcie, komerčné a priemyselné objekty. Projekt, povolenia, VR vizualizácia, koordinácia realizácie a technický dohľad v jednom systéme.",
  keywords: [
    "ProForm Consulting",
    "služby",
    "projektový manažment stavby",
    "koordinácia výstavby",
    "technický dozor",
    "výstavba rodinného domu",
    "rekonštrukcia",
    "komerčná budova",
    "priemyselná hala",
    "VR vizualizácia",
    "3D vizualizácia",
    "stavebná kancelária juh Slovenska",
  ],
  alternates: {
    canonical: "https://proformconsulting.sk/sluzby",
    languages: {
      "sk-SK": "/sluzby",
      "hu-HU": "/hu/szolgaltatasok",
      "x-default": "/",
    },
  },
  openGraph: {
    title:
      "Služby – ProForm Consulting | Komplexné riadenie stavebných projektov",
    description:
      "Jedna kancelária, ktorá prevezme celý proces od prvého návrhu až po odovzdanie kľúčov. Projekt, povolenia, dodávatelia, VR, realizácia a technický dohľad v prehľadnom systéme.",
    url: "https://proformconsulting.sk/sluzby",
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

export default function ServicesSkPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ProForm Consulting",
    description:
      "Projektová a koordinačná kancelária pre stavebné a rekonštrukčné projekty. Rodinné domy, komerčné a priemyselné objekty so stabilným odborným zázemím v regióne juhozápadného Slovenska.",
    url: "https://proformconsulting.sk/sluzby",
    areaServed: "Juh západného Slovenska",
    serviceType: [
      "projektový manažment stavby",
      "koordinácia výstavby",
      "technický dozor",
      "VR a 3D vizualizácia",
      "kompletná organizácia rekonštrukcie",
    ],
    email: "proformconsulting@azet.sk",
  };

  const steps = [
    {
      title: "1. Konzultácia a analýza projektu",
      text: "Spolu si prejdeme ciele, rozpočet, termíny a technické predstavy. Nastavíme jasný rámec projektu a pomenujeme riziká aj možnosti.",
    },
    {
      title: "2. Návrh a VR vizualizácia",
      text: "Pripravíme projekt a klient si môže budúci dom alebo priestor prejsť vo VR. Rozloženie, svetlo a proporcie vidíte v reálnej mierke ešte pred začiatkom výstavby.",
    },
    {
      title: "3. Povolenia a administratíva",
      text: "Dokumentáciu, podania a komunikáciu s úradmi a dotknutými stranami riešime my. Nemusíte tráviť čas na úradoch ani sledovať termíny podaní.",
    },
    {
      title: "4. Výber overených dodávateľov",
      text: "Z našej dlhodobo budovanej siete vyberáme firmy a remeselníkov, ktorých prácu poznáme. Každý vstupuje do projektu v správnej fáze.",
    },
    {
      title: "5. Koordinácia realizácie",
      text: "Sledujeme harmonogram, kvalitu a nadväznosť prác. Komunikujeme s dodávateľmi, riešime operatívne otázky a strážime priebeh výstavby.",
    },
    {
      title: "6. Kontrola a odovzdanie stavby",
      text: "Preveríme zhotovené práce, pripravíme zoznam nedostatkov, zabezpečíme ich odstránenie a uzavrieme dokumentáciu. Nasleduje odovzdanie hotovej nehnuteľnosti.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-900 relative overflow-hidden">
      {/* NAV – jazykový prepínač je vnútri */}
      <MainNav />

      {/* SEO – štruktúrované dáta JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Pozadie – jemné aurálne kruhy */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#d7e3ff] blur-[200px] opacity-70" />
      <div className="pointer-events-none absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full bg-[#c4d9ff] blur-[220px] opacity-60" />
      <div className="pointer-events-none absolute bottom-[-260px] left-1/4 w-[460px] h-[460px] rounded-full bg-[#e0e6f5] blur-[180px] opacity-80" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_top,#e0e7ff_0,#f5f7fb_55%)] mix-blend-screen" />

      {/* HERO – hlavné posolstvo */}
      <section
        className="relative w-full py-20 md:py-24 bg-gradient-to-b from-white/95 via-[#f2f5fd]/96 to-[#eef2fb]"
        aria-labelledby="services-sk-hero"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-[1.2fr,1fr] gap-10 items-center relative z-10">
          {/* Textový blok */}
          <div>
            <p className="text-[11px] md:text-xs tracking-[0.24em] uppercase text-[#64748b] mb-3">
              Projektové a koordinačné štúdio výstavby
            </p>

            <h1
              id="services-sk-hero"
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-[#1f4fa5] via-[#3e6fb8] to-[#7fa4dd] text-transparent bg-clip-text"
            >
              Preberieme zodpovednosť za celý priebeh výstavby.
            </h1>

            <h2 className="text-lg md:text-xl font-semibold text-[#1f2937] mb-5">
              Jedna kancelária, ktorá drží projekt pokope od prvého návrhu až po odovzdanie kľúčov.
            </h2>

            <p className="text-[#4b5563] text-sm md:text-base leading-relaxed mb-6 max-w-xl">
              Cieľom je, aby ste počas výstavby nemuseli sami riešiť majstrov, povolenia, termíny a fakturáciu.
              Projekt, VR vizualizáciu, administratívu, výber dodávateľov, koordináciu prác aj technický dohľad
              prepájame do jedného prehľadného systému, v ktorom sa môžete rozhodovať s istotou.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 text-xs md:text-sm">
              <div className="bg-white/90 rounded-xl p-4 shadow-[0_10px_30px_rgba(148,163,184,0.35)] border border-[#d4ddf4]">
                <div className="text-[#2563eb] font-semibold mb-1">
                  Menej stresu
                </div>
                <p className="text-[#4b5563]">
                  Nemusíte hľadať remeselníkov, zladiť ich termíny ani riešiť sporné situácie. Tieto úlohy preberáme my.
                </p>
              </div>

              <div className="bg-white/90 rounded-xl p-4 shadow-[0_10px_30px_rgba(148,163,184,0.35)] border border-[#d4ddf4]">
                <div className="text-[#2563eb] font-semibold mb-1">
                  Organizovaný postup
                </div>
                <p className="text-[#4b5563]">
                  Pracujeme s overenými partnermi a jasným harmonogramom. Krok za krokom, bez neustáleho prerábania plánov.
                </p>
              </div>

              <div className="bg-white/90 rounded-xl p-4 shadow-[0_10px_30px_rgba(148,163,184,0.35)] border border-[#d4ddf4]">
                <div className="text-[#2563eb] font-semibold mb-1">
                  Jasná zodpovednosť
                </div>
                <p className="text-[#4b5563]">
                  Za priebeh nesie zodpovednosť jedna kancelária. Vždy viete, na koho sa obrátiť s otázkou alebo rozhodnutím.
                </p>
              </div>
            </div>
          </div>

          {/* HERO obrázok */}
          <div className="relative h-56 md:h-72 lg:h-80 rounded-3xl overflow-hidden border border-[#d0d7e6] bg-white shadow-[0_18px_50px_rgba(148,163,184,0.5)]">
            <Image
              src="/services-hero2.jpeg"
              alt="Koordinácia stavebných projektov ProForm Consulting"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 text-xs text-white/90">
              <div className="uppercase tracking-[0.22em] text-[10px]">
                KOMPLEXNÉ RIADENIE PROJEKTU
              </div>
              <div className="text-sm font-medium">
                Jeden partner pre celú výstavbu
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proces – 6 krokov */}
      <section
        className="relative py-16 md:py-20"
        aria-labelledby="sk-process-heading"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2
            id="sk-process-heading"
            className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text"
          >
            Ako spolupracujeme? Šesť jasných krokov
          </h2>

          <p className="text-[#4b5563] mb-8 text-sm md:text-base max-w-3xl leading-relaxed">
            Od prvého stretnutia až po odovzdanie stavby zostáva projekt v jedných rukách.
            Vy vidíte prehľadný stav a rozhodujete, my riešime každodennú koordináciu a kontrolu.
          </p>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6 text-sm">
            {steps.map((item) => (
              <article
                key={item.title}
                className="bg-white rounded-2xl p-5 border border-[#d4ddf4] shadow-[0_14px_36px_rgba(148,163,184,0.35)]"
              >
                <h3 className="text-[#1d4ed8] font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-[#4b5563] text-xs md:text-sm leading-relaxed">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VR blok */}
      <section
        className="relative py-16 md:py-18 bg-gradient-to-r from-[#e0ebff] via-[#f5f7ff] to-[#e0ebff]"
        aria-labelledby="sk-vr-heading"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden border border-[#c7d4f0] bg-white shadow-[0_18px_50px_rgba(148,163,184,0.5)]">
            <Image
              src="/services-vr.jpeg"
              alt="VR prehliadka projektu pred výstavbou"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/45 via-transparent to-[#2563eb]/45" />
            <div className="absolute bottom-3 left-4 text-xs md:text-sm text-white">
              <div className="uppercase tracking-[0.22em] text-[10px] md:text-[11px]">
                VR PREHLIADKA
              </div>
              <div className="font-medium">
                Vstúpte do priestoru ešte pred výstavbou
              </div>
            </div>
          </div>

          <div>
            <h2
              id="sk-vr-heading"
              className="text-2xl md:text-3xl font-bold mb-3 text-[#1f2937]"
            >
              Nevidíte len výkres, ale prejdete si celý priestor
            </h2>
            <p className="text-[#4b5563] text-sm md:text-base mb-4 leading-relaxed">
              Vďaka VR technológii si môžete budúci dom alebo komerčný priestor
              prejsť v reálnom meradle. Cítite proporcie miestností, výšku stropov,
              prirodzené svetlo aj praktické usporiadanie ešte pred začatím prác.
            </p>
            <ul className="text-[#475569] text-sm space-y-2">
              <li>• realistický pocit z priestoru na základe projektu</li>
              <li>• jednoduché porovnávanie materiálov, farieb a osvetlenia</li>
              <li>• menej drahých zmien na stavbe a istejšie rozhodnutia</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tím a sieť dodávateľov */}
      <section
        className="relative py-16 md:py-20"
        aria-labelledby="sk-team-heading"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2
              id="sk-team-heading"
              className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text"
            >
              Vlastná sieť odborníkov a dlhodobých partnerov
            </h2>

            <p className="text-[#4b5563] text-sm md:text-base mb-4 leading-relaxed">
              Nespoliehame sa na náhodný výber subdodávateľov. Spolupracujeme s
              firmami a remeselníkmi, ktorých prácu poznáme z reálnych projektov
              a s ktorými dlhodobo budujeme profesionálne vzťahy.
            </p>

            <p className="text-[#4b5563] text-sm md:text-base mb-4 leading-relaxed">
              Klient tak dostáva ucelený systém od prípravy pozemku až po
              dokončovacie práce. Nemusí hľadať jednotlivé profesie zvlášť,
              pretože ich koordináciu preberáme my.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs md:text-sm text-[#475569]">
              <ul className="space-y-1">
                <li>• projektanti a statici</li>
                <li>• zemné práce a základy</li>
                <li>• hrubá stavba a betonáž</li>
                <li>• strešné konštrukcie a krytiny</li>
              </ul>
              <ul className="space-y-1">
                <li>• voda, kúrenie, plyn</li>
                <li>• elektroinštalácie</li>
                <li>• podlahy a obklady</li>
                <li>• fasády a zateplenie</li>
              </ul>
            </div>
          </div>

          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden border border-[#d0d7e6] bg-white shadow-[0_18px_50px_rgba(148,163,184,0.5)]">
            <Image
              src="/services-team.jpeg"
              alt="Tím odborníkov ProForm Consulting"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 text-xs md:text-sm text-white">
              <div className="uppercase tracking-[0.22em] text-[10px]">
                SIEŤ ODBORNÍKOV
              </div>
              <div className="font-medium">
                Overení dodávatelia a remeselníci
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt CTA */}
      <section
        className="relative py-18 md:py-20 bg-[#f5f7ff]"
        aria-labelledby="sk-contact-heading"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#d4ddf4] shadow-[0_18px_50px_rgba(148,163,184,0.45)]">
            <h2
              id="sk-contact-heading"
              className="text-2xl md:text-3xl font-bold mb-3 text-[#1f2937]"
            >
              Poďme sa porozprávať o vašom projekte
            </h2>

            <p className="text-[#4b5563] max-w-2xl mb-6 text-sm md:text-base leading-relaxed">
              Napíšte pár viet o tom, čo plánujete. Nový rodinný dom, kompletnú
              rekonštrukciu, výstavbu haly alebo komerčného objektu. Pripravíme
              prehľadný návrh krokov, časového rámca a spôsobu spolupráce, aby
              ste mali od začiatku jasno, ako vieme prevziať organizáciu a zodpovednosť.
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
                <div className="opacity-80 text-sm">
                  Telefonické konzultácie: Po–Pi 9:00 – 17:00
                </div>
              </div>

              <a
                href="mailto:proformconsulting@azet.sk?subject=Záujem%20o%20služby%20ProForm%20Consulting"
                className="inline-flex items-center justify-center mt-2 md:mt-0 px-9 md:px-10 py-3.5 md:py-4 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white text-sm md:text-base font-semibold shadow-[0_16px_45px_rgba(37,99,235,0.75)] hover:scale-105 active:scale-100 transition"
              >
                Napísať správu
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}