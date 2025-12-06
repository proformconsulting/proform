import Image from "next/image";
import LanguageSwitcher from "./components/LanguageSwitcher";
import MainNav from "./components/MainNav";

export default function Home() {
  return (
    <>
      <LanguageSwitcher />
      <MainNav />

      <main className="min-h-screen bg-[#f5f7fb] text-slate-900 relative overflow-hidden">
        {/* HÁTTÉR – finom kék aurák világos háttéren */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#d7e3ff] blur-[200px] opacity-70" />
        <div className="pointer-events-none absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full bg-[#c4d9ff] blur-[220px] opacity-60" />
        <div className="pointer-events-none absolute bottom-[-260px] left-1/4 w-[460px] h-[460px] rounded-full bg-[#e0e6f5] blur-[180px] opacity-80" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_top,#e0e7ff_0,#f5f7fb_55%)] mix-blend-screen" />

        {/* HERO – LOGO + CLAIM */}
        <section className="relative w-full py-20 md:py-24 bg-gradient-to-b from-white/95 via-[#f2f5fd]/96 to-[#eef2fb]">
          <div className="max-w-5xl mx-auto px-4 md:px-6 flex flex-col items-center text-center relative z-10">
            
            {/* LOGO AURÁVAL */}
            <div className="relative mb-8 md:mb-10 flex items-center justify-center">
              <div
                className="
                  absolute w-[420px] h-[420px] md:w-[460px] md:h-[460px] rounded-full
                  bg-gradient-to-r from-[#1f4fa5] via-[#8fb3ff] to-[#1f4fa5]
                  blur-[150px] opacity-80
                "
              />
              <div
                className="
                  relative w-[200px] h-[200px] md:w-[230px] md:h-[230px]
                  rounded-full overflow-hidden
                  ring-[2.5px] ring-[#b8c9ff]/90 bg-white
                  shadow-[0_0_80px_rgba(44,99,199,0.55)]
                "
              >
                <Image
                  src="/proformconsulting-logo.jpeg"
                  alt="ProForm Consulting Logo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* MINI FELIRAT + FŐ CLAIM */}
            <h1 className="mb-6">
              <span className="inline-block text-[11px] md:text-xs tracking-[0.25em] uppercase text-[#64748b] mb-3">
                Stavebné projektové & koordinačné štúdio
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-[#1f4fa5] via-[#3e6fb8] to-[#7fa4dd] text-transparent bg-clip-text">
                Kompletné riadenie a koordinácia stavebných projektov
              </span>
            </h1>

            {/* Dekoratív vonal */}
            <div className="w-20 md:w-24 h-[2px] mb-6 bg-gradient-to-r from-transparent via-[#2563eb] to-transparent rounded-full" />

            {/* BEVEZETŐ SZÖVEG */}
            <p className="text-[#4b5563] text-base md:text-lg max-w-2xl mb-8 md:mb-10 leading-relaxed">
              Zastrešíme celý proces od prvotného zámeru a projektovej prípravy,
              cez VR vizualizácie a výber majstrov, až po odovzdanie hotovej stavby.
              Jedna zodpovedná kancelária, jasné termíny a dôsledná kontrola kvality.
            </p>

            {/* Gombok */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <button className="px-7 md:px-8 py-3 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white text-sm md:text-base font-semibold shadow-[0_12px_35px_rgba(37,99,235,0.7)] hover:scale-105 transition">
                Bezplatná konzultácia
              </button>
              <button className="px-7 md:px-8 py-3 rounded-full border border-[#93c5fd] text-[#1e3a8a] text-sm md:text-base font-semibold bg-white/80 hover:bg-[#e0edff] transition">
                Dohodnúť stretnutie
              </button>
            </div>
          </div>
        </section>

        {/* SZEKCIÓ 1 – VR Visualizáció */}
        <section className="relative py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">

              {/* Szöveg */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text">
                  Virtuálna realita & 3D vizualizácie
                </h2>
                <p className="text-[#4b5563] mb-4 leading-relaxed">
                  Ešte predtým, než padne prvá tehla, vidíte svoj projekt v priestore.
                  VR a 3D vizualizácie ukážu reálny priestor a atmosféru stavby.
                </p>

                <ul className="text-[#475569] text-xs md:text-sm space-y-2">
                  <li>• 3D prehliadka interiéru a exteriéru</li>
                  <li>• Možnosť meniť materiály a farby v reálnom čase</li>
                </ul>
              </div>

              {/* Képek blokk */}
              <div className="grid gap-4">
                <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden shadow">
                  <Image src="/vr-visual.jpg" alt="VR vizualizácia" fill className="object-cover" />
                </div>
                <div className="relative h-36 md:h-40 rounded-2xl overflow-hidden shadow">
                  <Image src="/house-blueprint.jpeg" alt="Pôdorys" fill className="object-cover" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SZEKCIÓ 2 – Projektek */}
        <section className="relative py-18 md:py-20 bg-gradient-to-b from-[#eef2ff] via-[#f5f7ff] to-[#eef2ff]">
          <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
            
            <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text">
              Ukážky projektov
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              {/* 1. Családi ház */}
              <div className="group rounded-2xl overflow-hidden shadow bg-white border">
                <div className="relative h-40">
                  <Image src="/project-family-house.jpg" fill alt="Rodinný dom" className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold">Rodinný dom</h3>
                </div>
              </div>

              {/* 2. Rekonstrukció */}
              <div className="group rounded-2xl overflow-hidden shadow bg-white border">
                <div className="relative h-40">
                  <Image src="/project-renovation.jpeg" fill alt="Rekonštrukcia" className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold">Kompletná rekonštrukcia</h3>
                </div>
              </div>

              {/* 3. Apartman / komerčná stavba */}
              <div className="group rounded-2xl overflow-hidden shadow bg-white border">
                <div className="relative h-40">
                  <Image src="/project-apartment.jpeg" fill alt="Projekt" className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold">Komerčné projekty</h3>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* KONTAKT */}
        <section className="relative py-20 md:py-24 bg-[#f5f7ff]">
          <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
            <div className="bg-white p-8 md:p-10 rounded-2xl border shadow">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Kontaktujte nás
              </h2>

              <p className="text-[#4b5563] max-w-xl mb-6">
                Napíšte nám pár viet o vašom projekte a pripravíme pre vás návrh spolupráce.
              </p>

              <div className="flex flex-col md:flex-row md:items-center gap-5">
                <div className="text-[#1f2937]">
                  <div className="text-base md:text-lg mb-1">
                    Email:{" "}
                    <span className="font-semibold text-[#1d4ed8]">
                      proformconsulting@azet.sk
                    </span>
                  </div>
                  <div className="opacity-80 text-sm">
                    Telefonické hodiny: PO–PIA 9:00–17:00
                  </div>
                </div>

                <button className="px-9 py-3.5 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white text-sm md:text-base font-semibold shadow hover:scale-105 transition">
                  Odoslať správu
                </button>
              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}