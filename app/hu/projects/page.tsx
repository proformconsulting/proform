// app/hu/projektek/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import MainNav from "../../components/MainNav";

export const metadata: Metadata = {
  title:
    "Projektek | ProForm Consulting – építési projektek és teljes körű koordináció",
  description:
    "Milyen projekteket vállal a ProForm Consulting? Családi házak, befektetési lakóprojektek, kereskedelmi és irodai terek, ipari csarnokok és bontási projektek. Az ötlettől a kulcsátadásig egy rendszerben.",
  keywords: [
    "ProForm Consulting",
    "építési projektek",
    "építési projektmenedzsment",
    "építkezés koordinálása",
    "családi ház tervezés",
    "lakóprojekt",
    "kereskedelmi épület",
    "irodaház",
    "ipari csarnok",
    "bontási projekt",
  ],
  alternates: {
    canonical: "https://proformconsulting.sk/hu/projektek",
    languages: {
      "hu-HU": "/hu/projektek",
      "sk-SK": "/projekty",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Projektek – ProForm Consulting | Építési projektek egy kézben",
    description:
      "Családi házak, befektetési lakóprojektek, kereskedelmi és irodai terek, csarnokok és bontás. A ProForm Consulting az egész projektet egy kézben tartja az ötlettől a kulcsátadásig.",
    url: "https://proformconsulting.sk/hu/projektek",
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

export default function ProjectsHu() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Építési projektek koordinációja",
    provider: {
      "@type": "Organization",
      name: "ProForm Consulting",
    },
    areaServed: "Dél-nyugat Szlovákia",
    serviceType: [
      "családi ház tervezés és koordináció",
      "lakóépület és apartmanház projekt",
      "kereskedelmi és irodai terek kialakítása",
      "ipari csarnokok és raktárak",
      "bontási projektek és terület-előkészítés",
      "építési projektmenedzsment és koordináció",
    ],
    url: "https://proformconsulting.sk/hu/projektek",
  };

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-900 relative overflow-hidden">
      {/* NAV – benne van a nyelvváltó */}
      <MainNav />

      {/* SEO: JSON-LD struktúrált adat */}
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

      {/* HERO – fő üzenet */}
      <section
        id="projects-hero"
        className="relative w-full py-20 md:py-24 bg-gradient-to-b from-white/95 via-[#f2f5fd]/96 to-[#eef2fb]"
        aria-labelledby="projects-hero-heading"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-[1.2fr,1fr] gap-10 items-center relative z-10">
          {/* Szöveg */}
          <div>
            <p className="text-[11px] md:text-xs tracking-[0.24em] uppercase text-[#64748b] mb-3">
              Építési projektek &amp; koordináció
            </p>
            <h1
              id="projects-hero-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-[#1f4fa5] via-[#3e6fb8] to-[#7fa4dd] text-transparent bg-clip-text"
            >
              Építési projektjeid egy kézben – az ötlettől a kulcsátadásig.
            </h1>
            <h2 className="text-lg md:text-xl font-semibold text-[#1f2937] mb-5">
              Családi ház, felújítás, csarnok vagy üzlethelyiség – egy rendszerben
              tartjuk a teljes folyamatot.
            </h2>
            <p className="text-[#4b5563] text-sm md:text-base leading-relaxed mb-6 max-w-xl">
              Nem csak tervet adunk, hanem átlátható projektet: engedélyek,
              dokumentáció, kivitelezés és koordináció. A célunk, hogy végig
              tudd, mi a következő lépés – anélkül, hogy neked kellene mindent
              kézben tartani.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 text-xs md:text-sm">
              <div className="bg-white/90 rounded-xl p-4 shadow-[0_10px_30px_rgba(148,163,184,0.35)] border border-[#d4ddf4]">
                <div className="text-[#2563eb] font-semibold mb-1">
                  1 felelős partner
                </div>
                <p className="text-[#4b5563]">
                  Aki a teljes projektet fogja – tervezéstől a kulcsátadásig.
                </p>
              </div>
              <div className="bg-white/90 rounded-xl p-4 shadow-[0_10px_30px_rgba(148,163,184,0.35)] border border-[#d4ddf4]">
                <div className="text-[#2563eb] font-semibold mb-1">
                  Valós költségkeret
                </div>
                <p className="text-[#4b5563]">
                  A régióhoz igazított irányárakkal és átlátható logikával.
                </p>
              </div>
              <div className="bg-white/90 rounded-xl p-4 shadow-[0_10px_30px_rgba(148,163,184,0.35)] border border-[#d4ddf4]">
                <div className="text-[#2563eb] font-semibold mb-1">
                  VR &amp; 3D támogatás
                </div>
                <p className="text-[#4b5563]">
                  Mielőtt építünk, végigjárod a házat virtuálisan is.
                </p>
              </div>
            </div>
          </div>

          {/* Hero kép */}
          <div className="relative h-56 md:h-72 lg:h-80 rounded-3xl overflow-hidden border border-[#d0d7e6] bg-white shadow-[0_18px_50px_rgba(148,163,184,0.5)]">
            <Image
              src="/services-hero2.jpeg"
              alt="Építési projektek koordinációja"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 text-xs text-white/90">
              <div className="uppercase tracking-[0.22em] text-[10px]">
                PROJECT COORDINATION
              </div>
              <div className="text-sm font-medium">
                Egy kézben tartott építési projektek
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milyen projekteket vállalunk? */}
      <section
        id="project-types"
        className="relative py-16 md:py-20"
        aria-labelledby="project-types-heading"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <h2
            id="project-types-heading"
            className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text"
          >
            Milyen típusú projekteket vállalunk?
          </h2>
          <p className="text-[#4b5563] max-w-3xl text-sm md:text-base mb-8 leading-relaxed">
            A logika minden projektnél ugyanaz: jól működő tér, valós
            költségkeret, fegyelmezett megvalósítás. A méret és a funkció
            változik – a rendszer mögötte ugyanaz marad.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <article className="bg-white rounded-2xl border border-[#d4ddf4] shadow-[0_14px_32px_rgba(148,163,184,0.42)] p-5 flex flex-col justify-between">
              <div>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.24em] text-[#2563eb] mb-2">
                  Családi ház
                </p>
                <h3 className="text-sm md:text-base font-semibold text-[#111827] mb-2">
                  Új otthonok és bővítések
                </h3>
                <p className="text-[#4b5563] text-xs md:text-sm leading-relaxed">
                  Új építésű családi házak, modern villák, bővítések és
                  felújítások. Az első vázlattól a beköltözésig végigvezetünk.
                </p>
              </div>
              <p className="mt-3 text-[11px] text-[#9ca3af]">
                Tipikus méret: 110–220 m²
              </p>
            </article>

            <article className="bg-white rounded-2xl border border-[#d4ddf4] shadow-[0_14px_32px_rgba(148,163,184,0.42)] p-5 flex flex-col justify-between">
              <div>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.24em] text-[#2563eb] mb-2">
                  Lakóprojektek
                </p>
                <h3 className="text-sm md:text-base font-semibold text-[#111827] mb-2">
                  Apartmanházak, társasházak
                </h3>
                <p className="text-[#4b5563] text-xs md:text-sm leading-relaxed">
                  8–16 lakásos házak, kisebb fejlesztések. Lakásmix, alaprajz,
                  parkolás, megtérülés – befektetői szemmel gondolkodva.
                </p>
              </div>
              <p className="mt-3 text-[11px] text-[#9ca3af]">
                Fókusz: megtérülés &amp; értékesíthetőség
              </p>
            </article>

            <article className="bg-white rounded-2xl border border-[#d4ddf4] shadow-[0_14px_32px_rgba(148,163,184,0.42)] p-5 flex flex-col justify-between">
              <div>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.24em] text-[#2563eb] mb-2">
                  Kereskedelmi &amp; irodai
                </p>
                <h3 className="text-sm md:text-base font-semibold text-[#111827] mb-2">
                  Irodák, üzletek, rendelők
                </h3>
                <p className="text-[#4b5563] text-xs md:text-sm leading-relaxed">
                  Terek, ahol az ügyfélélmény és a hatékony működés egyszerre
                  fontos – iroda, showroom, rendelő, kisebb üzlet.
                </p>
              </div>
              <p className="mt-3 text-[11px] text-[#9ca3af]">
                Ügyfélút, működési logika, brand
              </p>
            </article>

            <article className="bg-white rounded-2xl border border-[#d4ddf4] shadow-[0_14px_32px_rgba(148,163,184,0.42)] p-5 flex flex-col justify-between">
              <div>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.24em] text-[#2563eb] mb-2">
                  Csarnok &amp; bontás
                </p>
                <h3 className="text-sm md:text-base font-semibold text-[#111827] mb-2">
                  Ipari terek és terület-előkészítés
                </h3>
                <p className="text-[#4b5563] text-xs md:text-sm leading-relaxed">
                  Csarnokok, raktárak, hangárok, bontási projektek. Engedélyek,
                  dokumentáció és biztonsági protokoll egy rendszerben.
                </p>
              </div>
              <p className="mt-3 text-[11px] text-[#9ca3af]">
                Teherbírás, logisztika, biztonság
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Folyamat – 6 lépés */}
      <section
        id="project-process"
        className="relative py-16 md:py-20 bg-[#eef2ff]/60"
        aria-labelledby="project-process-heading"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <h2
            id="project-process-heading"
            className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text"
          >
            Hogyan néz ki egy projekt nálunk?
          </h2>
          <p className="text-[#4b5563] mb-8 text-sm md:text-base max-w-3xl leading-relaxed">
            Nem hagyunk rád káoszt. Lépésről lépésre vezetünk végig a teljes
            folyamaton – mindig tudod, hol tartunk és mi következik.
          </p>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6 text-sm">
            {[
              {
                title: "1. Konzultáció & helyzetkép",
                text: "Átbeszéljük a célokat, a telek adottságait, a költségkeretet és az időzítést. Őszintén elmondjuk, mi reális, és hol látunk kockázatot.",
              },
              {
                title: "2. Koncepció + 3D / VR előnézet",
                text: "Elkészítjük az első terveket és látványt. VR-ben is be tudod járni a házat vagy üzletet, még mielőtt bármi épülne.",
              },
              {
                title: "3. Engedélyezési dokumentáció",
                text: "Projekt, statika, gépészet, szakági tervek. Benyújtások az önkormányzat, közművek és hatóságok felé.",
              },
              {
                title: "4. Kivitelezők és mesterek",
                text: "Olyan csapatokkal dolgozunk, akikkel hosszú távú együttműködésünk van. Nem a kivitelezés közben kezdünk el mestert keresni.",
              },
              {
                title: "5. Koordináció a kivitelezés alatt",
                text: "Időzítés, minőség, sorrend. Mi tartjuk a kapcsolatot a kivitelezőkkel, te pedig átlátod a fő mérföldköveket.",
              },
              {
                title: "6. Ellenőrzés & átadás",
                text: "Munkaellenőrzés, hibajegyzék, javítások, záró dokumentáció. Nem hagyunk nyitva maradt pontokat.",
              },
            ].map((item) => (
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
        id="vr"
        className="relative py-16 md:py-18 bg-gradient-to-r from-[#e0ebff] via-[#f5f7ff] to-[#e0ebff]"
        aria-labelledby="vr-heading"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center relative z-10">
          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden border border-[#c7d4f0] bg-white shadow-[0_18px_50px_rgba(148,163,184,0.5)]">
            <Image
              src="/services-vr.jpeg"
              alt="VR bejárás építési projekthez"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/45 via-transparent to-[#2563eb]/45" />
            <div className="absolute bottom-3 left-4 text-xs md:text-sm text-white">
              <div className="uppercase tracking-[0.22em] text-[10px] md:text-[11px]">
                VR PROJEKTBEJÁRÁS
              </div>
              <div className="font-medium">
                Lásd a házat, mielőtt egy téglát leraknánk
              </div>
            </div>
          </div>

          <div>
            <h2
              id="vr-heading"
              className="text-2xl md:text-3xl font-bold mb-3 text-[#1f2937]"
            >
              Virtuális valóság: biztos döntés a tervek előtt
            </h2>
            <p className="text-[#4b5563] text-sm md:text-base mb-4 leading-relaxed">
              A VR-ral valós méretben járhatod be a házat vagy üzlethelyiséget.
              Így nem alaprajzból kell elképzelned, hanem megtapasztalod a
              tereket, fényt és arányokat.
            </p>
            <ul className="text-[#475569] text-sm space-y-2">
              <li>• valós arányok, nem torzított látvány</li>
              <li>• könnyű anyag- és színvariálás még a kivitelezés előtt</li>
              <li>• kevesebb drága utólagos módosítás a helyszínen</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Partneri hálózat */}
      <section
        id="project-team"
        className="relative py-16 md:py-20"
        aria-labelledby="project-team-heading"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2
              id="project-team-heading"
              className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text"
            >
              Stabil kivitelezői hálózat a projektek mögött
            </h2>
            <p className="text-[#4b5563] text-sm md:text-base mb-4 leading-relaxed">
              Nem a projekt közben kezdünk kivitelezőt keresni. Olyan
              csapatokkal dolgozunk, akikkel hosszú távú, jól működő
              együttműködésünk van – így a projekted nem áll hónapokra egy-egy
              szakma hiánya miatt.
            </p>
            <p className="text-[#4b5563] text-sm md:text-base mb-4 leading-relaxed">
              A koordináció, ütemezés és minőségellenőrzés nálunk van. Neked
              egy partnerrel kell beszélned – a többit mi szervezzük.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs md:text-sm text-[#475569]">
              <ul className="space-y-1">
                <li>• tervezők, statikusok</li>
                <li>• földmunka és alapozás</li>
                <li>• falazás, betonozás</li>
                <li>• tetőszerkezet, héjalás</li>
              </ul>
              <ul className="space-y-1">
                <li>• gépészet (víz–fűtés–gáz)</li>
                <li>• villanyszerelés</li>
                <li>• burkolás, festés</li>
                <li>• homlokzat, szigetelés</li>
              </ul>
            </div>
          </div>

          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden border border-[#d0d7e6] bg-white shadow-[0_18px_50px_rgba(148,163,184,0.5)]">
            <Image
              src="/services-team.jpeg"
              alt="Építési csapat és koordináció a projekten"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 text-xs md:text-sm text-white">
              <div className="uppercase tracking-[0.22em] text-[10px]">
                PARTNER HÁLÓZAT
              </div>
              <div className="font-medium">Bevált kivitelezők és mesterek</div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt CTA */}
      <section
        id="project-contact-cta"
        className="relative py-18 md:py-20 bg-[#f5f7ff]"
        aria-labelledby="project-contact-heading"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#d4ddf4] shadow-[0_18px_50px_rgba(148,163,184,0.45)]">
            <h2
              id="project-contact-heading"
              className="text-2xl md:text-3xl font-bold mb-3 text-[#1f2937]"
            >
              Van egy telek, ház vagy épület, amivel kezdenél valamit?
            </h2>
            <p className="text-[#4b5563] text-sm md:text-base mb-6 max-w-2xl leading-relaxed">
              Írd le pár mondatban, hol tartasz most – telek, meglévő ház,
              felújítási ötlet vagy befektetési projekt. Készítünk egy világos
              lépéslistát, időkeretet és együttműködési lehetőségeket.
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
                  Telefonos elérhetőség: H–P 9:00–17:00
                </div>
              </div>

              <a
                href="mailto:proformconsulting@azet.sk?subject=Projekt%20egyeztet%C3%A9s%20-%20ProForm%20Consulting"
                className="inline-flex items-center justify-center mt-2 md:mt-0 px-9 md:px-10 py-3.5 md:py-4 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white text-sm md:text-base font-semibold shadow-[0_16px_45px_rgba(37,99,235,0.75)] hover:scale-105 active:scale-100 transition"
              >
                Szeretnék projekt-konzultációt
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}