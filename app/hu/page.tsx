// app/hu/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import MainNav from "../components/MainNav";

export const metadata: Metadata = {
  title:
    "ProForm Consulting | Építési projektmenedzsment és teljes körű koordináció",
  description:
    "ProForm Consulting – professzionális építési projektmenedzsment és teljes körű építési koordináció. VR látványtervek, műszaki előkészítés, kivitelezői felügyelet és projektátadás egy kézben.",
  keywords: [
    "ProForm Consulting",
    "építési projektmenedzsment",
    "építési koordináció",
    "építőipari projekt",
    "kivitelezés felügyelet",
    "VR vizualizáció",
    "3D látványterv",
    "családi ház építés",
    "felújítás",
    "építőipar",
    "építési vállalkozás",
    "projekt előkészítés",
  ],
  alternates: {
    canonical: "https://proformconsulting.sk/hu",
    languages: {
      "hu-HU": "/hu",
      "sk-SK": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title:
      "ProForm Consulting – Építési projektek és koordináció egy kézben",
    description:
      "Teljes körű építési projektmenedzsment: tervezés, műszaki előkészítés, VR látványtervek, kivitelezés koordináció, határidők és minőség kézben tartása.",
    url: "https://proformconsulting.sk/hu",
    type: "website",
    siteName: "ProForm Consulting",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD – struktúrált adat a nyitóoldalhoz
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ProForm Consulting",
  description:
    "Építési projekt- és koordinációs stúdió – családi házak, felújítások, kereskedelmi és ipari épületek teljes körű tervezése, előkészítése és kivitelezési koordinációja Dél-nyugat Szlovákiában.",
  url: "https://proformconsulting.sk/hu",
  areaServed: "Dél-nyugat Szlovákia",
  serviceType: [
    "építési projektmenedzsment",
    "építési koordináció",
    "VR és 3D vizualizáció",
    "családi ház építés",
    "felújítás",
    "kereskedelmi és ipari épületek",
  ],
  email: "proformconsulting@azet.sk",
};

export default function HomeHu() {
  return (
    <>
     

      <main
        id="top"
        className="min-h-screen bg-[#f5f7fb] text-slate-900 relative overflow-hidden"
      >
         <MainNav />
        {/* SEO: JSON-LD */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Háttér aurák – egységes brand */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#d7e3ff] blur-[200px] opacity-70" />
        <div className="pointer-events-none absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full bg-[#c4d9ff] blur-[220px] opacity-60" />
        <div className="pointer-events-none absolute bottom-[-260px] left-1/4 w-[460px] h-[460px] rounded-full bg-[#e0e6f5] blur-[180px] opacity-80" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_top,#e0e7ff_0,#f5f7fb_55%)] mix-blend-screen" />

        {/* HERO SZEKCIÓ */}
        <section
          className="relative w-full pt-24 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-white/95 via-[#f2f5fd]/96 to-[#eef2fb]"
          aria-labelledby="hero-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-5 md:px-6 text-center relative z-10">
            {/* LOGÓ AURA */}
            <div className="relative mb-10 flex justify-center">
              <div className="absolute w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] md:w-[460px] md:h-[460px] rounded-full bg-gradient-to-r from-[#1f4fa5] via-[#8fb3ff] to-[#1f4fa5] blur-[140px] opacity-80" />
              <div className="relative w-[170px] h-[170px] sm:w-[200px] sm:h-[200px] md:w-[230px] md:h-[230px] rounded-full overflow-hidden ring-[2.5px] ring-[#b8c9ff]/90 bg-white shadow-[0_0_80px_rgba(44,99,199,0.55)]">
                <Image
                  src="/proformconsulting-logo.jpeg"
                  alt="ProForm Consulting logó"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 180px, 230px"
                  priority
                />
              </div>
            </div>

            {/* CÍM ÉS CLAIM */}
            <h1 id="hero-heading" className="mb-6">
              <span className="inline-block text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#64748b] mb-3">
                Építési projekt- és koordinációs stúdió
              </span>
              <span className="block text-[1.8rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-[#1f4fa5] via-[#3e6fb8] to-[#7fa4dd] bg-clip-text text-transparent">
                Komplett irányítás és koordináció építési projektekhez
              </span>
            </h1>

            <div className="w-20 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-[#2563eb] to-transparent rounded-full mb-6 mx-auto" />

            <p className="text-[#4b5563] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Levesszük a válladról az építkezés terhét az első ötlettől a
              kész házig. Mi intézzük a tervezést, vizualizációt, a mesterek
              koordinálását, a minőség és határidők ellenőrzését – te pedig a
              fontos döntésekre koncentrálhatsz.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="#contact"
                className="px-7 md:px-8 py-3 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white text-sm md:text-base font-semibold shadow-[0_12px_35px_rgba(37,99,235,0.7)] hover:scale-105 active:scale-100 transition"
              >
                Ingyenes konzultáció
              </a>
              <a
                href="#contact"
                className="px-7 md:px-8 py-3 rounded-full border border-[#93c5fd] bg-white/80 text-[#1e3a8a] text-sm md:text-base font-semibold hover:bg-[#e0edff] transition"
              >
                Időpont egyeztetés
              </a>
            </div>
          </div>
        </section>

        {/* VR / 3D SZEKCIÓ */}
        <section
          className="relative py-16 md:py-20"
          aria-labelledby="vr-heading"
        >
          <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                id="vr-heading"
                className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] bg-clip-text text-transparent"
              >
                Virtuális valóság és 3D vizualizációk
              </h2>

              <p className="text-[#4b5563] mb-4 text-sm md:text-base leading-relaxed">
                Mielőtt a kivitelezés elindul, már látod, hogyan fog kinézni az
                otthonod vagy üzleted. A VR és 3D tervek segítenek elkerülni a
                drága hibákat, és biztosan azt kapod, amit elképzeltél.
              </p>

              <ul className="text-[#475569] text-xs md:text-sm space-y-2">
                <li>• 3D bejárás belső és külső tereken, valós léptékben</li>
                <li>• anyag- és színvariációk kipróbálása még a kivitelezés előtt</li>
                <li>• jobb döntések, kevesebb utólagos módosítás és pluszköltség</li>
              </ul>
            </div>

            <div className="grid gap-4">
              <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden border border-[#d0d7e6] shadow-[0_16px_40px_rgba(148,163,184,0.6)]">
                <Image
                  src="/services-vr.jpeg"
                  alt="VR bejárás építési projekthez"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/45 via-transparent to-[#2563eb]/45" />
              </div>

              <div className="relative h-36 md:h-40 rounded-2xl overflow-hidden border border-[#d0d7e6] shadow-[0_12px_32px_rgba(148,163,184,0.55)]">
                <Image
                  src="/house-blueprint.jpeg"
                  alt="Építési alaprajz és műszaki előkészítés"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* PROJEKTEK / REFERENCIÁK */}
        <section
          className="py-18 md:py-20 bg-gradient-to-b from-[#eef2ff] via-[#f5f7ff] to-[#eef2ff]"
          aria-labelledby="projects-heading"
        >
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h2
              id="projects-heading"
              className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] bg-clip-text text-transparent"
            >
              Milyen projekteken dolgozunk?
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  img: "/project-family-house.jpg",
                  title: "Családi házak",
                  desc: "Új építésű otthonok teljes körű tervezése, ütemezése és kivitelezés-koordinációja.",
                },
                {
                  img: "/project-renovation.jpeg",
                  title: "Felújítások",
                  desc: "Lakások, házak modernizálása profi, összehangolt csapattal.",
                },
                {
                  img: "/project-apartment.jpeg",
                  title: "Kereskedelmi és ipari projektek",
                  desc: "Raktárak, éttermek, csarnokok és üzletek koordinált kivitelezése.",
                },
              ].map((p) => (
                <article
                  key={p.title}
                  className="rounded-2xl overflow-hidden bg-white/95 border border-[#d4ddf4] shadow-[0_14px_36px_rgba(148,163,184,0.4)] hover:shadow-[0_18px_48px_rgba(148,163,184,0.55)] transition"
                >
                  <div className="relative h-40">
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-sm md:text-base mb-1 text-[#111827]">
                      {p.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* KONTAKT / CTA */}
        <section
          id="contact"
          className="py-20 md:py-24 bg-[#f5f7ff]"
          aria-labelledby="contact-heading"
        >
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#d4ddf4] shadow-[0_18px_50px_rgba(148,163,184,0.45)]">
              <h2
                id="contact-heading"
                className="text-2xl md:text-3xl font-bold mb-4 text-[#111827]"
              >
                Vedd fel velünk a kapcsolatot
              </h2>

              <p className="text-[#4b5563] mb-6 max-w-xl text-sm md:text-base leading-relaxed">
                Írj nekünk néhány mondatot a tervedről – családi ház,
                felújítás vagy kereskedelmi projekt. Elkészítjük a
                együttműködési javaslatot, és megmutatjuk, hogyan tudjuk
                átvenni a teljes folyamat koordinációját.
              </p>

              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                <div className="text-sm md:text-base text-[#111827]">
                  <div className="mb-1">
                    Email:{" "}
                    <a
                      href="mailto:proformconsulting@azet.sk"
                      className="text-[#1d4ed8] font-semibold hover:underline"
                    >
                      proformconsulting@azet.sk
                    </a>
                  </div>
                  <div className="text-xs md:text-sm opacity-80">
                    Telefonos elérhetőség: H–P 9:00–17:00
                  </div>
                </div>

                <a
                  href="mailto:proformconsulting@azet.sk?subject=Kapcsolatfelv%C3%A9tel%20%C3%A9p%C3%ADt%C3%A9si%20projekt%20%C3%BCgy%C3%A9ben"
                  className="inline-flex items-center justify-center px-9 py-3.5 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white font-semibold text-sm md:text-base shadow-[0_16px_45px_rgba(37,99,235,0.75)] hover:scale-105 active:scale-100 transition"
                >
                  Üzenet küldése
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}