import type { Metadata } from "next";
import Image from "next/image";
import MainNav from "./components/MainNav";

export const metadata: Metadata = {
  title: "ProForm Consulting | Koordinácia a riadenie stavebných projektov",
  description:
    "ProForm Consulting – stavebné projektové a koordinačné štúdio. Kompletné riadenie stavby od prvotného zámeru, cez projektovú prípravu a VR vizualizácie až po odovzdanie hotovej stavby.",
  keywords: [
    "ProForm Consulting",
    "stavebné projekty",
    "projektový manažment",
    "koordinácia stavby",
    "stavebný dozor",
    "VR vizualizácie",
    "3D vizualizácie",
    "rodinný dom",
    "rekonštrukcia",
    "stavebné štúdio",
    "projektová dokumentácia",
    "stavebná firma Dunajská Streda",
  ],
  openGraph: {
    title: "ProForm Consulting – stavebné projektové & koordinačné štúdio",
    description:
      "Kompletné riadenie a koordinácia stavebných projektov s dôrazom na kvalitu, termíny a moderné VR vizualizácie.",
    url: "https://proformconsulting.sk",
    type: "website",
    siteName: "ProForm Consulting",
  },
};

export default function Home() {
  return (
    <>
      {/* Responzívna navigácia – benne van a nyelvváltó */}
      <MainNav />

      <main
        className="min-h-screen bg-[#f5f7fb] text-slate-900 relative overflow-hidden"
        id="top"
      >
        {/* HÁTTÉR – finom kék aurák világos háttéren */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#d7e3ff] blur-[200px] opacity-70" />
        <div className="pointer-events-none absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full bg-[#c4d9ff] blur-[220px] opacity-60" />
        <div className="pointer-events-none absolute bottom-[-260px] left-1/4 w-[460px] h-[460px] rounded-full bg-[#e0e6f5] blur-[180px] opacity-80" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_top,#e0e7ff_0,#f5f7fb_55%)] mix-blend-screen" />

        {/* HERO – LOGO + CLAIM */}
        <section
          id="hero"
          className="relative w-full pt-24 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-white/95 via-[#f2f5fd]/96 to-[#eef2fb]"
          aria-labelledby="hero-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-5 md:px-6 flex flex-col items-center text-center relative z-10">
            {/* LOGO AURÁVAL */}
            <div className="relative mb-8 md:mb-10 flex items-center justify-center">
              <div
                className="
                  absolute w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] md:w-[460px] md:h-[460px] rounded-full
                  bg-gradient-to-r from-[#1f4fa5] via-[#8fb3ff] to-[#1f4fa5]
                  blur-[140px] opacity-80
                "
                aria-hidden="true"
              />
              <div
                className="
                  relative w-[160px] h-[160px] sm:w-[190px] sm:h-[190px] md:w-[230px] md:h-[230px]
                  rounded-full overflow-hidden
                  ring-[2.5px] ring-[#b8c9ff]/90 bg-white
                  shadow-[0_0_80px_rgba(44,99,199,0.55)]
                "
              >
                <Image
                  src="/proformconsulting-logo.jpeg"
                  alt="Logo ProForm Consulting – stavebné projektové a koordinačné štúdio"
                  fill
                  sizes="(max-width: 768px) 180px, 230px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* MINI FELIRAT + FŐ CLAIM */}
            <h1 id="hero-heading" className="mb-6">
              <span className="inline-block text-[11px] md:text-xs tracking-[0.25em] uppercase text-[#64748b] mb-3">
                Stavebné projektové &amp; koordinačné štúdio
              </span>
              <span className="block text-[1.7rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-[#1f4fa5] via-[#3e6fb8] to-[#7fa4dd] text-transparent bg-clip-text">
                Kompletné riadenie a koordinácia stavebných projektov
              </span>
            </h1>

            {/* Dekoratív vonal */}
            <div
              className="w-16 sm:w-20 md:w-24 h-[2px] mb-6 bg-gradient-to-r from-transparent via-[#2563eb] to-transparent rounded-full"
              aria-hidden="true"
            />

            {/* BEVEZETŐ SZÖVEG */}
            <p className="text-[#4b5563] text-sm sm:text-base md:text-lg max-w-2xl mb-8 md:mb-10 leading-relaxed">
              Zastrešíme celý proces od prvotného zámeru a projektovej prípravy,
              cez VR vizualizácie a výber majstrov, až po odovzdanie hotovej
              stavby. Jedna zodpovedná kancelária, jasné termíny a dôsledná
              kontrola kvality.
            </p>

            {/* Gombok – belső hivatkozás a kontakt szekcióra SEO miatt */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 md:px-8 py-3 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white text-sm md:text-base font-semibold shadow-[0_12px_35px_rgba(37,99,235,0.7)] hover:scale-105 focus-visible:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2563eb] transition"
              >
                Bezplatná konzultácia
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 md:px-8 py-3 rounded-full border border-[#93c5fd] text-[#1e3a8a] text-sm md:text-base font-semibold bg-white/80 hover:bg-[#e0edff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2563eb] transition"
              >
                Dohodnúť stretnutie
              </a>
            </div>
          </div>
        </section>

        {/* SZEKCIÓ 1 – VR Visualizáció */}
        {/* ... a többi szekció ugyanaz, azokon nem kell változtatni ... */}

        {/* (Itt hagyd meg pontosan azt, amit eddig küldtél:
            VR szekció, projektek, kontakt – azok jól vannak felépítve.) */}

      </main>
    </>
  );
}