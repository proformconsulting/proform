// app/hu/projektek/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Projektek | ProForm Consulting prémium építési projektek és teljes körű koordináció",
  description:
    "ProForm Consulting professzionális építési projektmenedzsment családi házakhoz, befektetési projektekhez, kereskedelmi terekhez és csarnokokhoz. Átlátható rendszer, stabil kivitelezői háttér és felelősségvállalás a teljes folyamatért.",
  keywords: [
    "ProForm Consulting",
    "építési projektmenedzsment",
    "építkezés szervezés",
    "építési koordináció",
    "családi ház projekt",
    "lakóépület",
    "kereskedelmi tér",
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
    title: "Projektek | ProForm Consulting prémium építésirányítás",
    description:
      "Magas minőségű családi házak, befektetési lakóprojektek, kereskedelmi terek és csarnokok. Tiszta folyamat, stabil szakmai háttér és átlátható felelősségvállalás.",
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
    name: "Építési projektek vezetése és koordinációja",
    provider: {
      "@type": "Organization",
      name: "ProForm Consulting",
    },
    areaServed: "Dél nyugat Szlovákia",
    serviceType: [
      "családi házak teljes projektvezetése",
      "lakóprojektek és befektetési fejlesztések",
      "kereskedelmi és irodai terek kialakítása",
      "ipari csarnokok és területelőkészítés",
      "bontási projektek szakmai támogatással",
    ],
    url: "https://proformconsulting.sk/hu/projektek",
  };

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-900 relative overflow-hidden">
  

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

      {/* HERO – középre igazított prémium blokk */}
      <section
        id="projects-hero"
        className="relative w-full py-20 md:py-24 bg-gradient-to-b from-white/95 via-[#f2f5fd]/96 to-[#eef2fb]"
        aria-labelledby="projects-hero-heading"
      >
        <div className="max-w-5xl mx-auto px-4 md:px-6 flex flex-col items-center text-center relative z-10">
          <p className="inline-block text-[11px] md:text-xs tracking-[0.25em] uppercase text-[#64748b] mb-3">
            Prémium építési projektek és koordináció
          </p>

          <h1
            id="projects-hero-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-[#1f4fa5] via-[#3e6fb8] to-[#7fa4dd] text-transparent bg-clip-text"
          >
            Építési projektek átlátható rendszerben
          </h1>

          <h2 className="text-lg md:text-xl font-semibold text-[#1f2937] max-w-2xl mb-5">
            Családi házak lakóprojektek üzleti terek és csarnokok egy szakmai
            háttérrel és fegyelmezett folyamattal.
          </h2>

          <p className="text-[#4b5563] text-sm md:text-base leading-relaxed max-w-2xl">
            A célunk hogy az építési projekt ne kaotikus hanem átlátható és
            kiszámítható folyamat legyen. Nem neked kell külön mestereket
            határidőket és döntéseket egyensúlyban tartanod. Egy rendszerben
            gondolkodó csapat kíséri végig a projektet az első beszélgetéstől a
            kulcsátadásig.
          </p>

          <div className="w-20 h-[2px] mx-auto mt-6 bg-gradient-to-r from-transparent via-[#1d4ed8] to-transparent rounded-full" />
        </div>
      </section>

      {/* Projekt típuskártyák */}
      <section id="project-types" className="relative py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text">
            Milyen projekteket vezetünk
          </h2>

          <p className="text-[#4b5563] max-w-3xl text-sm md:text-base mb-8 leading-relaxed">
            Minden projekt ugyanarra a szakmai alapra épül. Tiszta tervezés
            előre felépített rendszer garanciát adó szakmai struktúra és olyan
            folyamat amelyben minden döntés a megfelelő időben születik meg.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            {/* Családi ház */}
            <article className="bg-white rounded-2xl border border-[#d4ddf4] shadow-[0_14px_32px_rgba(148,163,184,0.42)] p-5 flex flex-col justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#2563eb] mb-2">
                  Családi ház
                </p>
                <h3 className="text-sm md:text-base font-semibold text-[#111827] mb-2">
                  Tudatosan megtervezett otthonok
                </h3>
                <p className="text-[#4b5563] leading-relaxed">
                  Gondos térlogika fény funkcionalitás és költségoptimalizált
                  megvalósítás. A fókusz az időtálló minőségen és az átgondolt
                  elrendezésen van.
                </p>
              </div>
              <p className="mt-3 text-[11px] text-[#9ca3af]">
                Tipikus méret 110 és 220 négyzetméter között
              </p>
            </article>

            {/* Lakóprojektek */}
            <article className="bg-white rounded-2xl border border-[#d4ddf4] shadow-[0_14px_32px_rgba(148,163,184,0.42)] p-5 flex flex-col justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#2563eb] mb-2">
                  Lakóprojektek
                </p>
                <h3 className="text-sm md:text-base font-semibold text-[#111827] mb-2">
                  Apartmanházak és befektetői fejlesztések
                </h3>
                <p className="text-[#4b5563] leading-relaxed">
                  Tudatos alaprajzok és stabil pénzügyi logika. Intelligens
                  lakásmix és jól értékesíthető lakóterek befektetői
                  szemlélettel.
                </p>
              </div>
              <p className="mt-3 text-[11px] text-[#9ca3af]">
                Fókusz a megtérülésen és az értékteremtésen
              </p>
            </article>

            {/* Kereskedelmi terek */}
            <article className="bg-white rounded-2xl border border-[#d4ddf4] shadow-[0_14px_32px_rgba(148,163,184,0.42)] p-5 flex flex-col justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#2563eb] mb-2">
                  Kereskedelmi és irodai terek
                </p>
                <h3 className="text-sm md:text-base font-semibold text-[#111827] mb-2">
                  Hatékony és esztétikus üzleti környezet
                </h3>
                <p className="text-[#4b5563] leading-relaxed">
                  Ügyfél útvonal működési logika és brand élmény alapján
                  felépített terek amelyek támogatják a mindennapi működést
                  és az üzleti célt.
                </p>
              </div>
              <p className="mt-3 text-[11px] text-[#9ca3af]">
                Irodák rendelők üzlethelyiségek
              </p>
            </article>

            {/* Csarnokok */}
            <article className="bg-white rounded-2xl border border-[#d4ddf4] shadow-[0_14px_32px_rgba(148,163,184,0.42)] p-5 flex flex-col justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#2563eb] mb-2">
                  Ipari csarnok és bontás
                </p>
                <h3 className="text-sm md:text-base font-semibold text-[#111827] mb-2">
                  Stabil szerkezetek és biztonságos kivitelezés
                </h3>
                <p className="text-[#4b5563] leading-relaxed">
                  Teherbírás logisztika statikai rendszer és fegyelmezett
                  ütemezés. A cél a megbízható és határidőn belüli átadás.
                </p>
              </div>
              <p className="mt-3 text-[11px] text-[#9ca3af]">
                Csarnokok raktárak bontási munkák
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Folyamat */}
      <section
        id="project-process"
        className="relative py-16 md:py-20 bg-[#eef2ff]/60"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text">
            Hogyan vezetünk végig egy teljes projektet
          </h2>

          <p className="text-[#4b5563] mb-8 text-sm md:text-base max-w-3xl leading-relaxed">
            Egy projekt akkor lesz kiszámítható és veszteségmentes ha világos
            alapokra épül. Nálunk minden lépés előre felépített rendszer szerint
            halad így a döntések időben és biztos háttérrel születnek meg.
          </p>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6 text-sm">
            <article className="bg-white rounded-2xl p-5 border border-[#d4ddf4] shadow-[0_14px_36px_rgba(148,163,184,0.35)]">
              <h3 className="text-[#1d4ed8] font-semibold mb-2">
                Konzultáció és helyzetelemzés
              </h3>
              <p className="text-[#4b5563] leading-relaxed">
                Feltérképezzük a célokat a telek adottságait a pénzügyi
                keretet és az időzítést. Valós képet adunk arról mi működik jól
                és mi jelentene kockázatot.
              </p>
            </article>

            <article className="bg-white rounded-2xl p-5 border border-[#d4ddf4] shadow-[0_14px_36px_rgba(148,163,184,0.35)]">
              <h3 className="text-[#1d4ed8] font-semibold mb-2">
                Koncepció és háromdimenziós előnézet
              </h3>
              <p className="text-[#4b5563] leading-relaxed">
                A tér a valóság méreteiben jelenik meg VR szemüveg segítségével.
                Így a döntések biztos alapon születnek még az építés előtt.
              </p>
            </article>

            <article className="bg-white rounded-2xl p-5 border border-[#d4ddf4] shadow-[0_14px_36px_rgba(148,163,184,0.35)]">
              <h3 className="text-[#1d4ed8] font-semibold mb-2">
                Engedélyezési dokumentáció összeállítása
              </h3>
              <p className="text-[#4b5563] leading-relaxed">
                A teljes adminisztráció és hatósági kommunikáció a mi
                feladatunk. Tehermentesítjük az ügyfelet minden hivatalos
                lépéstől.
              </p>
            </article>

            <article className="bg-white rounded-2xl p-5 border border-[#d4ddf4] shadow-[0_14px_36px_rgba(148,163,184,0.35)]">
              <h3 className="text-[#1d4ed8] font-semibold mb-2">
                Megbízható kivitelezői háttér
              </h3>
              <p className="text-[#4b5563] leading-relaxed">
                Olyan szakemberekkel dolgozunk együtt akik stabil következetes
                teljesítményt nyújtanak. Csak bevált csapatokat engedünk be a
                projektbe.
              </p>
            </article>

            <article className="bg-white rounded-2xl p-5 border border-[#d4ddf4] shadow-[0_14px_36px_rgba(148,163,184,0.35)]">
              <h3 className="text-[#1d4ed8] font-semibold mb-2">
                Koordináció és folyamatos irányítás
              </h3>
              <p className="text-[#4b5563] leading-relaxed">
                Mi tartjuk a kapcsolatot a kivitelezőkkel figyeljük az
                ütemezést és ellenőrizzük a minőséget. Minden lépés tiszta és
                dokumentált.
              </p>
            </article>

            <article className="bg-white rounded-2xl p-5 border border-[#d4ddf4] shadow-[0_14px_36px_rgba(148,163,184,0.35)]">
              <h3 className="text-[#1d4ed8] font-semibold mb-2">
                Ellenőrzés és átadás
              </h3>
              <p className="text-[#4b5563] leading-relaxed">
                Átvizsgáljuk a munkát jegyzőkönyvezünk elvégeztetjük a
                javításokat és dokumentáljuk az átadás részleteit. Tiszta
                lezárt projektet adunk át.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* VR blokk */}
      <section
        id="vr"
        className="relative py-16 md:py-18 bg-gradient-to-r from-[#e0ebff] via-[#f5f7ff] to-[#e0ebff]"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center relative z-10">
          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden border border-[#c7d4f0] bg-white shadow-[0_18px_50px_rgba(148,163,184,0.5)]">
            <Image
              src="/projects-haz.jpeg"
              alt="VR projektbejárás"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/45 via-transparent to-[#2563eb]/45" />
            <div className="absolute bottom-3 left-4 text-xs md:text-sm text-white">
              <div className="uppercase tracking-[0.22em] text-[10px]">
                Virtuális előnézet
              </div>
              <div className="font-medium">Térélmény még az építés előtt</div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#1f2937]">
              Valós méretű bejárás a biztos döntésekhez
            </h2>
            <p className="text-[#4b5563] text-sm md:text-base mb-4 leading-relaxed">
              A VR technológia segítségével a teljes tér életre kel.
              Megtapasztalható a fény az arányok és a térlogika így a döntések
              nem pusztán elképzelésen hanem valós élményen alapulnak.
            </p>
            <p className="text-[#475569] text-sm leading-relaxed">
              Ez az egyik legerősebb eszköz a felesleges költségek és a későbbi
              módosítások megelőzésére mert a kritikus részletek már a tervezés
              idején láthatóvá válnak.
            </p>
          </div>
        </div>
      </section>

      {/* Partner hálózat */}
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
              Stabil kivitelezői háttér minden projekt mögött
            </h2>

            <p className="text-[#4b5563] text-sm md:text-base mb-4 leading-relaxed">
              A sikeres megvalósítás alapja a megbízható szakmai struktúra.
              Olyan csapatokkal dolgozunk együtt akik bizonyították a minőség
              iránti elkötelezettségüket és következetes teljesítményt
              nyújtanak a megvalósítás minden szakaszában.
            </p>

            <p className="text-[#4b5563] text-sm md:text-base mb-4 leading-relaxed">
              A koordináció a mi feladatunk. A szakmai ütemezés az ellenőrzés
              és a fegyelem biztosítja hogy a projekt tiszta átgondolt irány
              szerint haladjon végig.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs md:text-sm text-[#475569]">
              <ul className="space-y-1">
                <li>tervezők és statikusok</li>
                <li>földmunka és alapozás</li>
                <li>falazás és betonozás</li>
                <li>tetőszerkezet és fedés</li>
              </ul>
              <ul className="space-y-1">
                <li>gépészeti rendszerek</li>
                <li>villanyszerelés</li>
                <li>burkolás és belső munkák</li>
                <li>homlokzat és szigetelés</li>
              </ul>
            </div>
          </div>

          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden border border-[#d0d7e6] bg-white shadow-[0_18px_50px_rgba(148,163,184,0.5)]">
            <Image
              src="/team-projects.jpeg"
              alt="Építési szakmai csapat"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent" />
            <div className="absolute bottom-3 left-4 text-xs md:text-sm text-white">
              <div className="uppercase tracking-[0.22em] text-[10px]">
                Szakmai háttér
              </div>
              <div className="font-medium">Megbízható kivitelezői hálózat</div>
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
              Kezdjük el felépíteni azt amiben hosszú távon gondolkodsz
            </h2>

            <p className="text-[#4b5563] text-sm md:text-base mb-6 max-w-2xl leading-relaxed">
              Írd le röviden hol tart most a projekt vagy az elképzelés. Lehet
              telek felújítási terv csarnok vagy befektetési koncepció. Egy
              átlátható javaslatot kapsz amely bemutatja a következő lépéseket
              az időkeretet és a megvalósítás szakmai alapjait.
            </p>

            <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-6">
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
                  Telefonos konzultáció hétfőtől péntekig 9 és 17 óra között
                </div>
              </div>

              <a
                href="mailto:proformconsulting@azet.sk?subject=Projekt%20konzult%C3%A1ci%C3%B3%20%C3%A9rdekl%C5%91d%C3%A9s"
                className="inline-flex items-center justify-center mt-2 md:mt-0 px-9 md:px-10 py-3.5 md:py-4 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white text-sm md:text-base font-semibold shadow-[0_16px_45px_rgba(37,99,235,0.75)] hover:scale-105 active:scale-100 transition"
              >
                Projekt konzultáció kérése
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}