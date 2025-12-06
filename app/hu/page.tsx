import type { Metadata } from "next";
import Image from "next/image";
import LanguageSwitcher from "../components/LanguageSwitcher";
import MainNav from "../components/MainNav";

export const metadata: Metadata = {
  title: "ProForm Consulting | Építési projektmenedzsment és koordináció",
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
  openGraph: {
    title: "ProForm Consulting – Építési projekt és koordináció egy kézben",
    description:
      "Teljes körű építési projektmenedzsment: tervezés, műszaki előkészítés, VR látványtervek, kivitelezés koordináció, határidők és minőség kézben tartása.",
    url: "https://proformconsulting.sk/hu",
    type: "website",
    siteName: "ProForm Consulting",
  },
};

export default function Home() {
  return (
    <>
      <LanguageSwitcher />
      <MainNav />

      <main
        className="min-h-screen bg-[#f5f7fb] text-slate-900 relative overflow-hidden"
        id="top"
      >
        {/* HÁTTÉR AURÁK */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#d7e3ff] blur-[200px] opacity-70" />
        <div className="pointer-events-none absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full bg-[#c4d9ff] blur-[220px] opacity-60" />
        <div className="pointer-events-none absolute bottom-[-260px] left-1/4 w-[460px] h-[460px] rounded-full bg-[#e0e6f5] blur-[180px] opacity-80" />

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
                  alt="ProForm Consulting Logo"
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
              Levesszük a válladról az építkezés terhét az első ötlettől a kész házig.
              Mi intézzük a tervezést, vizualizációt, mesterek koordinálását, a minőség és határidők ellenőrzését.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="#contact"
                className="px-7 md:px-8 py-3 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white text-sm md:text-base font-semibold shadow-[0_12px_35px_rgba(37,99,235,0.7)] hover:scale-105 transition"
              >
                Ingyenes konzultáció
              </a>
              <a
                href="#contact"
                className="px-7 md:px-8 py-3 rounded-full border border-[#93c5fd] bg-white/80 text-[#1e3a8a] hover:bg-[#e0edff] transition"
              >
                Időpont egyeztetés
              </a>
            </div>
          </div>
        </section>

        {/* VR SZEKCIÓ */}
        <section className="relative py-16 md:py-20" aria-labelledby="vr-heading">
          <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                id="vr-heading"
                className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] bg-clip-text text-transparent"
              >
                Virtuális valóság és 3D vizualizációk
              </h2>

              <p className="text-[#4b5563] mb-4 text-sm md:text-base">
                Mielőtt építkezés indul, már látod, hogyan fog kinézni az otthonod.
                A VR és 3D tervek segítenek elkerülni a drága hibákat és jobb döntéseket hozni.
              </p>

              <ul className="text-[#475569] text-xs md:text-sm space-y-2">
                <li>• 3D bejárás belső és külső tereken</li>
                <li>• Anyag- és színvariációk élőben</li>
              </ul>
            </div>

            <div className="grid gap-4">
              <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/vr-visual.jpg"
                  alt="VR bejárás"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-36 md:h-40 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/house-blueprint.jpeg"
                  alt="Építési alaprajz"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PROJEKTEK */}
        <section
          className="py-18 md:py-20 bg-gradient-to-b from-[#eef2ff] via-[#f5f7ff] to-[#eef2ff]"
          aria-labelledby="projects-heading"
        >
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h2
              id="projects-heading"
              className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] bg-clip-text text-transparent"
            >
              Referenciáink
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* KÁRTYÁK */}
              {[
                {
                  img: "/project-family-house.jpg",
                  title: "Családi ház",
                  desc: "Teljes körű tervezés, ütemezés és koordináció.",
                },
                {
                  img: "/project-renovation.jpeg",
                  title: "Felújítás",
                  desc: "Lakások, házak modernizálása profi csapattal.",
                },
                {
                  img: "/project-apartment.jpeg",
                  title: "Kommers / ipari projektek",
                  desc: "Raktárak, éttermek, csarnokok kivitelezési koordinációja.",
                },
              ].map((p) => (
                <article
                  key={p.title}
                  className="rounded-2xl overflow-hidden bg-white border shadow hover:shadow-xl transition"
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
                    <h3 className="font-semibold text-sm mb-1">{p.title}</h3>
                    <p className="text-xs text-slate-600">{p.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* KONTAKT */}
        <section
          id="contact"
          className="py-20 md:py-24 bg-[#f5f7ff]"
          aria-labelledby="contact-heading"
        >
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="bg-white p-8 md:p-10 rounded-2xl border shadow-lg">
              <h2
                id="contact-heading"
                className="text-2xl md:text-3xl font-bold mb-4"
              >
                Vedd fel velünk a kapcsolatot
              </h2>

              <p className="text-[#4b5563] mb-6 max-w-xl">
                Írj nekünk néhány mondatot a tervedről – mi elkészítjük a teljes
                együttműködési javaslatot és a folyamatot is átvállaljuk.
              </p>

              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div>
                  <div className="text-base md:text-lg mb-1">
                    Email:{" "}
                    <a
                      href="mailto:proformconsulting@azet.sk"
                      className="text-[#1d4ed8] font-semibold hover:underline"
                    >
                      proformconsulting@azet.sk
                    </a>
                  </div>
                  <div className="text-sm opacity-80">
                    Telefon: H–P 9:00–17:00
                  </div>
                </div>

                <a
                  href="mailto:proformconsulting@azet.sk?subject=Kapcsolatfelvétel%20építési%20projekt%20ügyében"
                  className="px-9 py-3.5 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white font-semibold text-sm hover:scale-105 transition shadow-lg"
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