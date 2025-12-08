// app/hu/rolunk/page.tsx (vagy ahol az About oldalad van)
import type { Metadata } from "next";
import Image from "next/image";
import MainNav from "../../components/MainNav";

export const metadata: Metadata = {
  title: "Rólunk | ProForm Consulting – építési projektek egy kézben",
  description:
    "ProForm Consulting – építési és bontási projektek koordinációja, teljes körű szervezés és kivitelezői hálózat Dél-nyugat Szlovákiában. Családi házak, felújítások, csarnokok, kereskedelmi terek.",
  alternates: {
    canonical: "https://proformconsulting.sk/hu/rolunk",
    languages: {
      "hu-HU": "/hu/rolunk",
      "sk-SK": "/o-nas",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Rólunk – ProForm Consulting | Projektkoordináció és kivitelezés",
    description:
      "Csapatunk több éves tapasztalattal, stabil háttérrel és megbízható kivitelezői hálózattal viszi végig építési és bontási projektjeit az ötlettől a kulcsátadásig.",
    url: "https://proformconsulting.sk/hu/rolunk",
    type: "website",
    siteName: "ProForm Consulting",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ProForm Consulting",
    description:
      "Építési és bontási projektek koordinációja, projektmenedzsment és kivitelezői hálózat Dél-nyugat Szlovákiában.",
    url: "https://proformconsulting.sk/hu/rolunk",
    areaServed: "Dél-nyugat Szlovákia",
    serviceType: [
      "Építési projektkoordináció",
      "Bontási projektek szervezése",
      "VR és 3D vizualizáció",
      "Kivitelezés szervezése",
    ],
    email: "proformconsulting@azet.sk",
  };

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-900 relative overflow-hidden">
      {/* NAV – nyelvváltóval */}
      <MainNav />

      {/* SEO – JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Háttér aurák – egységes a többi oldallal */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#d7e3ff] blur-[200px] opacity-70" />
      <div className="pointer-events-none absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full bg-[#c4d9ff] blur-[220px] opacity-60" />
      <div className="pointer-events-none absolute bottom-[-260px] left-1/4 w-[460px] h-[460px] rounded-full bg-[#e0e6f5] blur-[180px] opacity-80" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_top,#e0e7ff_0,#f5f7fb_55%)] mix-blend-screen" />

      {/* HERO – fő üzenet, 2 oszlop, mint a /sluzby / projektek */}
      <section
        id="about-hero"
        className="relative w-full py-20 md:py-24 bg-gradient-to-b from-white/95 via-[#f2f5fd]/96 to-[#eef2fb]"
        aria-labelledby="about-hero-heading"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-[1.2fr,1fr] gap-10 items-center relative z-10">
          {/* Szöveg */}
          <div>
            <p className="text-[11px] md:text-xs tracking-[0.24em] uppercase text-[#64748b] mb-3">
              Építési projektstúdió &amp; koordináció
            </p>
            <h1
              id="about-hero-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-[#1f4fa5] via-[#3e6fb8] to-[#7fa4dd] text-transparent bg-clip-text"
            >
              Egy iroda, amely a teljes építési folyamatot egyben tartja.
            </h1>
            <h2 className="text-lg md:text-xl font-semibold text-[#1f2937] mb-5">
              Nem csak házakat, hanem működő rendszert építünk – veled
              együttműködve.
            </h2>
            <p className="text-[#4b5563] max-w-xl text-sm md:text-base leading-relaxed mb-6">
              Évek óta dolgozunk építési és bontási projekteken. Az iparban
              otthonosan mozgunk, stabil háttérrel, megbízható szakemberekkel és
              olyan folyamattal, amely az első ötlettől a kulcsátadásig átlátható
              keretet ad a projektednek.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 text-xs md:text-sm">
              <div className="bg-white/90 rounded-xl p-4 shadow-[0_10px_30px_rgba(148,163,184,0.35)] border border-[#d4ddf4]">
                <div className="text-[#2563eb] font-semibold mb-1">
                  Tapasztalat
                </div>
                <p className="text-[#4b5563]">
                  Családi házak, csarnokok, kereskedelmi terek és bontási
                  projektek a hátunk mögött.
                </p>
              </div>
              <div className="bg-white/90 rounded-xl p-4 shadow-[0_10px_30px_rgba(148,163,184,0.35)] border border-[#d4ddf4]">
                <div className="text-[#2563eb] font-semibold mb-1">
                  Stabil háttér
                </div>
                <p className="text-[#4b5563]">
                  Hosszú távú együttműködések kivitelezőkkel és
                  partnervállalkozásokkal.
                </p>
              </div>
              <div className="bg-white/90 rounded-xl p-4 shadow-[0_10px_30px_rgba(148,163,184,0.35)] border border-[#d4ddf4]">
                <div className="text-[#2563eb] font-semibold mb-1">
                  Rendszerszemlélet
                </div>
                <p className="text-[#4b5563]">
                  Projekt, engedélyek, kivitelezés és kommunikáció – egy kézben.
                </p>
              </div>
            </div>
          </div>

          {/* Hero kép */}
          <div className="relative h-56 md:h-72 lg:h-80 rounded-3xl overflow-hidden border border-[#d0d7e6] bg-white shadow-[0_18px_50px_rgba(148,163,184,0.5)]">
            <Image
              src="/about-team.jpeg"
              alt="ProForm Consulting csapat és projektvezetés"
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
              <div className="font-medium">Koordinált kivitelezői hálózat</div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOKK 1 – Kik vagyunk? */}
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
              Kik vagyunk?
            </h2>

            <p className="text-[#4b5563] mb-4 leading-relaxed text-sm sm:text-base">
              Csapatunk szakemberekből, partnervállalkozásokból és mesterekből
              áll, akik hosszú évek óta dolgoznak együtt. A háttérben egy
              összehangolt hálózat működik, amely képes a kisebb ingatlanoktól
              a nagyobb ipari és kereskedelmi épületekig végigvinni a projekteket
              – bontástól az új építésig.
            </p>

            <p className="text-[#4b5563] leading-relaxed text-sm sm:text-base mb-4">
              Gyárak, hangárok, csarnokok, raktárak, üzletek, éttermek, családi
              házak és lakóépületek kivitelezésében és bontásában szereztünk
              tapasztalatot. Végeztünk talajmunkákat, útépítést és
              közlekedési felületek kialakítását új lakónegyedeknél is – a
              teljes folyamatot végigkövetve.
            </p>

            <p className="text-[#4b5563] leading-relaxed text-sm sm:text-base">
              Fontos számunkra, hogy{" "}
              <span className="font-semibold">
                egyértelmű kommunikációt és stabil jelenlétet
              </span>{" "}
              kapj: tudd, kihez fordulhatsz, és legyen egy partner, aki
              végigviszi veled a projektet, nem csak egy fázisra szerződik.
            </p>
          </div>

          {/* Kép – már a hero-ban is használjuk, itt közelebbi hangulatban is oké, de maradhat másik is */}
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-[#d0d7e6] shadow-[0_12px_45px_rgba(148,163,184,0.4)]">
            <Image
              src="/about-site.jpeg"
              alt="Építési terület és helyszíni egyeztetés"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 text-xs text-white">
              <div className="uppercase tracking-[0.22em] text-[10px]">
                REAL PROJECTS
              </div>
              <div className="font-medium">Ipari, lakó és kereskedelmi terek</div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOKK 2 – Mit nyújtunk? */}
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
              alt="Építkezési folyamat és VR előnézet ProForm Consulting"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/45 via-transparent to-[#2563eb]/45" />
            <div className="absolute bottom-3 left-4 text-xs md:text-sm text-white">
              <div className="uppercase tracking-[0.22em] text-[10px]">
                VR &amp; PLANNING
              </div>
              <div className="font-medium">Látható projekt a kivitelezés előtt</div>
            </div>
          </div>

          {/* Szöveg */}
          <div>
            <h2
              id="what-we-offer-heading"
              className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text"
            >
              Mit nyújtunk?
            </h2>

            <p className="text-[#4b5563] mb-4 leading-relaxed text-sm sm:text-base">
              A célunk, hogy az építkezés ne egy kaotikus, stresszes időszak
              legyen. Ne neked kelljen mestereket keresni, időpontokat
              egyeztetni vagy vitás helyzeteket kezelni – mi egyben átvállaljuk
              a folyamat irányítását.
            </p>

            <ul className="text-[#475569] text-sm space-y-2 mb-4">
              <li>• teljes projektkoordináció és ütemezés</li>
              <li>• engedélyek és adminisztráció intézése</li>
              <li>• megbízható cégek és szakemberek bevonása</li>
              <li>• bontás → építés → befejezés egy kézben</li>
              <li>• VR előnézet a döntések előtt</li>
              <li>• kulcsrakész átadás átlátható kommunikációval</li>
            </ul>

            <p className="text-[#4b5563] leading-relaxed text-sm sm:text-base">
              Egy olyan irodát építünk, ahol{" "}
              <span className="font-semibold">valódi csapatmunka</span> zajlik.
              Nem ad-hoc döntésekkel dolgozunk, hanem előre felépített
              folyamattal. Így a projekted előrehaladása kiszámíthatóbb, te
              pedig nyugodtabban tudsz dönteni pénzről, időről és
              műszaki megoldásokról.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}