// app/projekty/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import MainNav from "../components/MainNav";

export const metadata: Metadata = {
  title:
    "Projekty | ProForm Consulting profesionálne stavebné projekty a kompletná koordinácia",
  description:
    "ProForm Consulting zabezpečuje riadenie stavebných projektov od návrhu až po odovzdanie. Rodinné domy, investičné bývanie, komerčné priestory, priemyselné haly a demolačné práce v jednom stabilnom systéme.",
  keywords: [
    "ProForm Consulting",
    "stavebné projekty",
    "projektový manažment",
    "koordinácia stavby",
    "rodinný dom projekt",
    "bytové projekty",
    "komerčné priestory",
    "kancelárie",
    "priemyselné haly",
    "demolačné práce",
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
    title: "Projekty | ProForm Consulting profesionálne riadenie stavieb",
    description:
      "Rodinné domy, bytové projekty, obchodné a kancelárske priestory, priemyselné haly a demolácie. Stabilný systém riadenia projektu, ktorý vedie klienta od prvého nápadu po kompletné dokončenie.",
    url: "https://proformconsulting.sk/projekty",
    type: "website",
    siteName: "ProForm Consulting",
  },
};

export default function ProjektySk() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Riadenie stavebných projektov",
    provider: {
      "@type": "Organization",
      name: "ProForm Consulting",
    },
    areaServed: "Juh západné Slovensko",
    serviceType: [
      "kompletná koordinácia rodinných domov",
      "bytové a investičné projekty",
      "komerčné a kancelárske priestory",
      "priemyselné haly a príprava územia",
      "demolačné práce a technická dokumentácia",
    ],
    url: "https://proformconsulting.sk/projekty",
  };

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-900 relative overflow-hidden">

      <MainNav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Aura pozadie */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] bg-[#d7e3ff] rounded-full blur-[200px] opacity-70" />
      <div className="pointer-events-none absolute -right-40 top-1/3 w-[520px] h-[520px] bg-[#c4d9ff] rounded-full blur-[220px] opacity-60" />
      <div className="pointer-events-none absolute bottom-[-260px] left-1/4 w-[460px] h-[460px] bg-[#e0e6f5] rounded-full blur-[180px] opacity-80" />

      {/* HERO */}
      <section
        id="projekty-hero"
        className="relative w-full py-20 md:py-24 bg-gradient-to-b from-white/95 via-[#f2f5fd]/95 to-[#eef2fb]"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-[1.2fr,1fr] gap-10 items-center">

          <div>
            <p className="inline-block text-[11px] md:text-xs tracking-[0.25em] uppercase text-[#64748b] mb-3">
              Profesionálne stavebné projekty a riadenie
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-[#1f4fa5] via-[#3e6fb8] to-[#7fa4dd] text-transparent bg-clip-text">
              Každý projekt posúvame v stabilnom systéme ktorý prináša istotu
              prehľad a kontrolu nad celým procesom.
            </h1>

            <h2 className="text-lg md:text-xl font-semibold text-[#1f2937] mb-5">
              Našou úlohou je aby sa z výstavby nestal chaotický proces ale
              profesionálne vedený postup s jasnými krokmi ktoré majú logiku
              a výsledok.
            </h2>

            <p className="text-[#4b5563] text-sm md:text-base leading-relaxed mb-6 max-w-xl">
              Kvalitný projekt nevzniká náhodou. Opiera sa o premyslené rozhodnutia,
              dôslednú prípravu a odborné vedenie ktoré drží smer počas celej realizácie.
              Náš systém umožňuje klientovi robiť rozhodnutia s pokojom pretože vie,
              že celý proces má pevný základ a profesionálny dohľad.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 text-xs md:text-sm">

              <div className="bg-white/90 p-4 rounded-xl border border-[#d4ddf4] shadow-[0_10px_30px_rgba(148,163,184,0.35)]">
                <div className="text-[#2563eb] font-semibold mb-1">
                  Jedno profesionálne zázemie
                </div>
                <p className="text-[#4b5563]">
                  Všetky kroky projektu zastrešujeme my. Vy máte istotu a jediný stabilný kontakt.
                </p>
              </div>

              <div className="bg-white/90 p-4 rounded-xl border border-[#d4ddf4] shadow-[0_10px_30px_rgba(148,163,184,0.35)]">
                <div className="text-[#2563eb] font-semibold mb-1">
                  Reálne plánovanie a jasná finančná logika
                </div>
                <p className="text-[#4b5563]">
                  Každý krok má svoj časový rámec a rozpočtový základ ktorý prináša stabilitu.
                </p>
              </div>

              <div className="bg-white/90 p-4 rounded-xl border border-[#d4ddf4] shadow-[0_10px_30px_rgba(148,163,184,0.35)]">
                <div className="text-[#2563eb] font-semibold mb-1">
                  Pohľad do projektu ešte pred začiatkom
                </div>
                <p className="text-[#4b5563]">
                  Priestor si pozriete vo VR vďaka čomu sú vaše rozhodnutia presné a isté.
                </p>
              </div>

            </div>
          </div>

          <div className="relative h-56 md:h-72 lg:h-80 rounded-3xl overflow-hidden bg-white border border-[#d0d7e6] shadow-[0_18px_50px_rgba(148,163,184,0.45)]">
            <Image
              src="/services-hero2.jpeg"
              alt="Koordinácia stavebného projektu"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent" />
            <div className="absolute bottom-3 left-4 text-xs text-white/90">
              <div className="uppercase tracking-[0.22em] text-[10px]">
                Projektové vedenie
              </div>
              <div className="text-sm font-medium">
                Stabilita počas celej výstavby
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Typy projektov */}
      <section id="project-types" className="relative py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">

          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text">
            Aké projekty realizujeme
          </h2>

          <p className="text-[#4b5563] max-w-3xl text-sm md:text-base mb-8 leading-relaxed">
            Nezáleží na veľkosti ani type stavby. Dôležitý je systém ktorý stojí za každým projektom.
            Týmto systémom zabezpečujeme kvalitu, plynulosť a odborný dohľad na každom kroku.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">

            {/* Rodinný dom */}
            <article className="bg-white p-5 rounded-2xl border border-[#d4ddf4] shadow-[0_14px_32px_rgba(148,163,184,0.42)] flex flex-col justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#2563eb] mb-2">
                  Rodinné domy
                </p>
                <h3 className="text-base font-semibold text-[#111827] mb-2">
                  Premyslené bývanie s dôrazom na funkciu
                </h3>
                <p className="text-[#4b5563] leading-relaxed">
                  Priestorová logika svetlo a praktické riešenia ktoré vytvárajú dom s dlhodobou hodnotou.
                </p>
              </div>
              <p className="mt-3 text-[11px] text-[#9ca3af]">
                Najčastejšia veľkosť 110 až 220 štvorcových metrov
              </p>
            </article>

            {/* Bytové projekty */}
            <article className="bg-white p-5 rounded-2xl border border-[#d4ddf4] shadow-[0_14px_32px_rgba(148,163,184,0.42)] flex flex-col justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#2563eb] mb-2">
                  Bytové projekty
                </p>
                <h3 className="text-base font-semibold text-[#111827] mb-2">
                  Menšie developerské riešenia
                </h3>
                <p className="text-[#4b5563] leading-relaxed">
                  Byty so správnou dispozíciou a vysokou predajnou hodnotou.
                  Projekt pripravujeme s dôrazom na návratnosť investície.
                </p>
              </div>
              <p className="mt-3 text-[11px] text-[#9ca3af]">
                Praktické riešenia pre investorov
              </p>
            </article>

            {/* Komerčné priestory */}
            <article className="bg-white p-5 rounded-2xl border border-[#d4ddf4] shadow-[0_14px_32px_rgba(148,163,184,0.42)] flex flex-col justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#2563eb] mb-2">
                  Komerčné a kancelárske priestory
                </p>
                <h3 className="text-base font-semibold text-[#111827] mb-2">
                  Priestory s jasnou funkciou
                </h3>
                <p className="text-[#4b5563] leading-relaxed">
                  Navrhujeme priestory ktoré podporujú podnikanie, zlepšujú tok klientov
                  a prinášajú profesionálny dojem.
                </p>
              </div>
              <p className="mt-3 text-[11px] text-[#9ca3af]">
                Kancelárie, ambulancie, predajne
              </p>
            </article>

            {/* Haly a demolácie */}
            <article className="bg-white p-5 rounded-2xl border border-[#d4ddf4] shadow-[0_14px_32px_rgba(148,163,184,0.42)] flex flex-col justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#2563eb] mb-2">
                  Priemyselné haly a demolácie
                </p>
                <h3 className="text-base font-semibold text-[#111827] mb-2">
                  Stabilná konštrukcia a bezpečný postup
                </h3>
                <p className="text-[#4b5563] leading-relaxed">
                  Zameriavame sa na nosnosť, technické riešenia a logistiku.
                  Proces je vždy vedený bezpečne a odborne.
                </p>
              </div>
              <p className="mt-3 text-[11px] text-[#9ca3af]">
                Haly sklady pozemky a demolácie
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* Proces */}
      <section id="project-process" className="relative py-16 md:py-20 bg-[#eef2ff]/60">
        <div className="max-w-6xl mx-auto px-4 md:px-6">

          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text">
            Ako vyzerá projekt vedený naším tímom
          </h2>

          <p className="text-[#4b5563] max-w-3xl mb-8 text-sm md:text-base leading-relaxed">
            Projekty sú úspešné keď stoja na pevnom systéme. Ten zabezpečuje
            plynulosť, jasné rozhodnutia a odborný dohľad ktorý drží projekt
            v stabilnom tempe bez zbytočných komplikácií.
          </p>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6 text-sm">

            <article className="bg-white p-5 rounded-2xl border border-[#d4ddf4] shadow-[0_14px_36px_rgba(148,163,184,0.35)]">
              <h3 className="text-[#1d4ed8] font-semibold mb-2">
                Úvodná konzultácia a analýza
              </h3>
              <p className="text-[#4b5563] leading-relaxed">
                Presne zistíme ciele a možnosti projektu. Ponúkneme realistický pohľad
                na čas financie a technický postup.
              </p>
            </article>

            <article className="bg-white p-5 rounded-2xl border border-[#d4ddf4] shadow-[0_14px_36px_rgrgba(148,163,184,0.35)]">
              <h3 className="text-[#1d4ed8] font-semibold mb-2">
                Koncepcia a priestorová vizualizácia
              </h3>
              <p className="text-[#4b5563] leading-relaxed">
                Priestor si môžete pozrieť vo VR ešte pred začiatkom výstavby čo vytvára
                silný základ pre správne rozhodnutia.
              </p>
            </article>

            <article className="bg-white p-5 rounded-2xl border border-[#d4ddf4] shadow-[0_14px_36px_rgba(148,163,184,0.35)]">
              <h3 className="text-[#1d4ed8] font-semibold mb-2">
                Kompletná projektová a povolovacia dokumentácia
              </h3>
              <p className="text-[#4b5563] leading-relaxed">
                Vybavíme administratívu komunikujeme s úradmi a zastrešíme
                celý povolovací proces aby klient nemusel riešiť žiadne formality.
              </p>
            </article>

            <article className="bg-white p-5 rounded-2xl border border-[#d4ddf4] shadow-[0_14px_36px_rgba(148,163,184,0.35)]">
              <h3 className="text-[#1d4ed8] font-semibold mb-2">
                Overení majstri a dodávatelia
              </h3>
              <p className="text-[#4b5563] leading-relaxed">
                Pracujeme s tímami na ktoré sa môžeme spoľahnúť. Vieme ako pracujú
                a akú kvalitu prinášajú na stavbu.
              </p>
            </article>

            <article className="bg-white p-5 rounded-2xl border border-[#d4ddf4] shadow-[0_14px_36px_rgba(148,163,184,0.35)]">
              <h3 className="text-[#1d4ed8] font-semibold mb-2">
                Koordinácia a vedenie počas výstavby
              </h3>
              <p className="text-[#4b5563] leading-relaxed">
                Sledujeme postup kontrolujeme kvalitu a zabezpečujeme aby
                všetky kroky nadväzovali na seba bez prestojov.
              </p>
            </article>

            <article className="bg-white p-5 rounded-2xl border border-[#d4ddf4] shadow-[0_14px_36px_rgba(148,163,184,0.35)]">
              <h3 className="text-[#1d4ed8] font-semibold mb-2">
                Kontrola a odovzdanie hotového diela
              </h3>
              <p className="text-[#4b5563] leading-relaxed">
                Prejdeme celú stavbu zabezpečíme úpravy a klient dostáva projekt
                ktorý je pripravený na používanie bez otvorených problémov.
              </p>
            </article>

          </div>

        </div>
      </section>

      {/* VR sekcia */}
      <section id="vr" className="relative py-16 md:py-18 bg-gradient-to-r from-[#e0ebff] via-[#f5f7ff] to-[#e0ebff]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">

          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden bg-white border border-[#c7d4f0] shadow-[0_18px_50px_rgba(148,163,184,0.5)]">
            <Image
              src="/services-vr.jpeg"
              alt="Projekt vo virtuálnej realite"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/45 via-transparent to-[#2563eb]/45" />
            <div className="absolute bottom-3 left-4 text-xs text-white">
              <div className="uppercase tracking-[0.22em] text-[10px]">
                Virtuálna prehliadka
              </div>
              <div className="font-medium">Projekt ešte pred výstavbou</div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#1f2937]">
              Priestor ktorý zažijete ešte predtým než začne výstavba
            </h2>
            <p className="text-[#4b5563] leading-relaxed text-sm md:text-base mb-4">
              Virtuálna realita prináša istotu do rozhodovania. Človek vidí a cíti
              priestor jeho veľkosť orientáciu svetla a atmosféru ktorá nikdy
              nevyznie z papierového projektu.
            </p>
            <p className="text-[#475569] text-sm leading-relaxed">
              Tento nástroj eliminuje drahé úpravy počas výstavby pretože klient
              už vopred jasne vidí čo dostane a čo naozaj funguje.
            </p>
          </div>

        </div>
      </section>

      {/* Partneri */}
      <section id="project-team" className="relative py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text">
              Stabilná sieť overených majstrov a dodávateľov
            </h2>

            <p className="text-[#4b5563] text-sm md:text-base mb-4 leading-relaxed">
              Kvalitná stavba nevzniká náhodne. Vyžaduje spoľahlivé tímy ktoré
              pracujú odborne a presne podľa stanoveného postupu. Práve preto
              pracujeme iba s tými ktorých poznáme a ktorých výsledky prinášajú
              dlhodobú spokojnosť.
            </p>

            <p className="text-[#4b5563] text-sm md:text-base mb-4 leading-relaxed">
              Klient komunikuje iba s nami a všetky odborné úlohy riešime v pozadí.
              Koordinácia, kontrola, postup a kvalita sú v našich rukách.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs md:text-sm text-[#475569]">
              <ul className="space-y-1">
                <li>projektanti a statici</li>
                <li>zemné práce a základy</li>
                <li>murárske práce a betonáže</li>
                <li>strešné konštrukcie</li>
              </ul>
              <ul className="space-y-1">
                <li>vykurovanie voda plyn</li>
                <li>elektroinštalácie</li>
                <li>podlahy a obklady</li>
                <li>zateplenie a fasády</li>
              </ul>
            </div>

          </div>

          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden bg-white border border-[#d0d7e6] shadow-[0_18px_50px_rgba(148,163,184,0.5)]">
            <Image
              src="/services-team.jpeg"
              alt="Stavebný tím a koordinácia"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent" />
            <div className="absolute bottom-3 left-4 text-xs text-white">
              <div className="uppercase tracking-[0.22em] text-[10px]">
                Odborná sieť
              </div>
              <div className="font-medium">Overení majstri a dodávatelia</div>
            </div>
          </div>

        </div>
      </section>

      {/* Kontakt CTA */}
      <section id="project-contact-cta" className="relative py-18 md:py-20 bg-[#f5f7ff]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">

          <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#d4ddf4] shadow-[0_18px_50px_rgba(148,163,184,0.45)]">

            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#1f2937]">
              Poďme si povedať o vašom projekte a nastaviť jasný smer
            </h2>

            <p className="text-[#4b5563] text-sm md:text-base mb-6 max-w-2xl leading-relaxed">
              Napíšte nám v akej fáze sa nachádzate. Môže ísť o pozemok,
              rekonštrukciu, halu alebo investičný zámer. Pripravíme pre vás
              prehľadný návrh s postupom časovým rámcom a možnosťami spolupráce
              ktoré prinesú projektu pevný základ.
            </p>

            <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-6">

              <div className="text-[#1f2937] text-sm md:text-base">
                <div className="mb-1">
                  Email{" "}
                  <a
                    href="mailto:proformconsulting@azet.sk"
                    className="font-semibold text-[#1d4ed8] hover:underline"
                  >
                    proformconsulting@gmail.com
                  </a>
                </div>
                <div className="opacity-80 text-sm">
                  Telefonické konzultácie Pondelok až Piatok 9:00 až 17:00
                </div>
              </div>

              <a
                href="mailto:proformconsulting@azet.sk?subject=Konzultácia projektu ProForm Consulting"
                className="inline-flex items-center justify-center px-9 md:px-10 py-3.5 md:py-4 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white font-semibold text-sm md:text-base shadow-[0_16px_45px_rgba(37,99,235,0.75)] hover:scale-105 transition"
              >
                Chcem konzultáciu projektu
              </a>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}