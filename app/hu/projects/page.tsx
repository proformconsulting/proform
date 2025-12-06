import LanguageSwitcher from "../../components/LanguageSwitcher";
import MainNav from "../../components/MainNav";

export default function ProjectsHu() {
  return (
    <>
      <LanguageSwitcher />
      <MainNav />

      <main className="min-h-screen bg-[#f5f7fb] text-slate-900 relative overflow-hidden">
        {/* HÁTTÉR – ugyanaz a „aura” mint services oldalon */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#d7e3ff] blur-[200px] opacity-70" />
        <div className="pointer-events-none absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full bg-[#c4d9ff] blur-[220px] opacity-60" />
        <div className="pointer-events-none absolute bottom-[-260px] left-1/4 w-[460px] h-[460px] rounded-full bg-[#e0e6f5] blur-[180px] opacity-80" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_top,#e0e7ff_0,#f5f7fb_55%)] mix-blend-screen" />

        {/* HERO */}
        <section className="relative w-full py-20 md:py-24 bg-gradient-to-b from-white/95 via-[#f2f5fd]/96 to-[#eef2fb]">
          <div className="max-w-5xl mx-auto px-4 md:px-6 flex flex-col items-center text-center relative z-10">
            <h1 className="mb-6">
              <span className="inline-block text-[11px] md:text-xs tracking-[0.25em] uppercase text-[#64748b] mb-3">
                Építési projektek & koordináció
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-[#1f4fa5] via-[#3e6fb8] to-[#7fa4dd] text-transparent bg-clip-text">
                Építési projektjeid egy kézben – az ötlettől a kulcsátadásig
              </span>
            </h1>

            <div className="w-20 md:w-24 h-[2px] mb-6 bg-gradient-to-r from-transparent via-[#2563eb] to-transparent rounded-full" />

            <p className="text-[#4b5563] text-base md:text-lg max-w-2xl mb-8 md:mb-10 leading-relaxed">
              Nem csak tervet adunk, hanem egy átlátható, koordinált rendszert.
              Mi fogjuk össze a mestereket, a határidőket és a dokumentációt,
              hogy a projekted nyugodtan, kiszámíthatóan haladjon.
            </p>
          </div>
        </section>

        {/* SZEKCIÓ 1 – Milyen projekteket vállalunk? */}
        <section className="relative py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text">
              Milyen típusú projekteket vállalunk?
            </h2>
            <p className="text-[#4b5563] max-w-3xl text-sm md:text-base mb-8 leading-relaxed">
              A logika minden projektünknél ugyanaz: jól működő tér, valós
              költségkeret, fegyelmezett megvalósítás. A méret és a funkció
              változik – a rendszer mögötte ugyanaz marad.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Családi ház */}
              <div className="bg-white rounded-2xl border border-[#d4ddf4] shadow-[0_14px_32px_rgba(148,163,184,0.42)] p-5">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.24em] text-[#2563eb] mb-2">
                  Családi ház
                </div>
                <h3 className="text-sm md:text-base font-semibold text-[#111827] mb-2">
                  Új otthonok és bővítések
                </h3>
                <p className="text-[#4b5563] text-xs md:text-sm leading-relaxed">
                  Új építésű családi házak, modern villák, bővítések és
                  felújítások. Az első vázlattól a beköltözésig vezetünk végig.
                </p>
              </div>

              {/* Apartmanházak */}
              <div className="bg-white rounded-2xl border border-[#d4ddf4] shadow-[0_14px_32px_rgba(148,163,184,0.42)] p-5">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.24em] text-[#2563eb] mb-2">
                  Apartmanházak
                </div>
                <h3 className="text-sm md:text-base font-semibold text-[#111827] mb-2">
                  Befektetési lakóprojektek
                </h3>
                <p className="text-[#4b5563] text-xs md:text-sm leading-relaxed">
                  8–16 lakásos házak, kisebb fejlesztések. Lakásmix, alaprajz,
                  parkolás, megtérülés – minden szempontot együtt nézünk.
                </p>
              </div>

              {/* Kereskedelmi projektek */}
              <div className="bg-white rounded-2xl border border-[#d4ddf4] shadow-[0_14px_32px_rgba(148,163,184,0.42)] p-5">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.24em] text-[#2563eb] mb-2">
                  Kereskedelmi & irodai
                </div>
                <h3 className="text-sm md:text-base font-semibold text-[#111827] mb-2">
                  Irodák, üzletek, rendelők
                </h3>
                <p className="text-[#4b5563] text-xs md:text-sm leading-relaxed">
                  Olyan terek, ahol az ügyfélélmény és a hatékony működés
                  egyszerre fontos – iroda, showroom, rendelő, kisebb üzlet.
                </p>
              </div>

              {/* Csarnok / ipari / bontás */}
              <div className="bg-white rounded-2xl border border-[#d4ddf4] shadow-[0_14px_32px_rgba(148,163,184,0.42)] p-5">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.24em] text-[#2563eb] mb-2">
                  Csarnok & bontás
                </div>
                <h3 className="text-sm md:text-base font-semibold text-[#111827] mb-2">
                  Ipari terek és terület-előkészítés
                </h3>
                <p className="text-[#4b5563] text-xs md:text-sm leading-relaxed">
                  Csarnokok, raktárak, hangárok, bontási projektek. Engedélyek,
                  dokumentáció és biztonsági protokoll egy rendszerben.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SZEKCIÓ 2 – Hogyan dolgozunk? */}
        <section className="relative py-16 md:py-20 bg-[#eef2ff]/60">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text">
              Hogyan néz ki egy projekt nálunk?
            </h2>
            <p className="text-[#4b5563] max-w-3xl text-sm md:text-base mb-8 leading-relaxed">
              Nem hagyjuk rád a káoszt. Lépésről lépésre végigvezetünk a teljes
              folyamaton – mindig tudod, hol tartunk és mi következik.
            </p>

            <ol className="space-y-4 md:space-y-5 text-sm md:text-base text-[#374151]">
              <li className="bg-white/90 rounded-2xl border border-[#d4ddf4] p-5 shadow-[0_10px_25px_rgba(148,163,184,0.35)]">
                <span className="font-semibold text-[#1d4ed8] mr-2">1.</span>
                <span className="font-semibold">Konzultáció & helyzetkép</span>
                <p className="mt-2 text-xs md:text-sm text-[#4b5563]">
                  Átbeszéljük a céljaidat, a telek adottságait, a költségkeretet
                  és az időzítést. Őszintén elmondjuk, mi reális, és hol látunk
                  kockázatot.
                </p>
              </li>

              <li className="bg-white/90 rounded-2xl border border-[#d4ddf4] p-5 shadow-[0_10px_25px_rgba(148,163,184,0.35)]">
                <span className="font-semibold text-[#1d4ed8] mr-2">2.</span>
                <span className="font-semibold">
                  Koncepció + 3D / VR előnézet
                </span>
                <p className="mt-2 text-xs md:text-sm text-[#4b5563]">
                  Elkészítjük az első terveket, látványterveket, szükség esetén
                  VR bejárást. Itt még mindent könnyű módosítani – alaprajzot,
                  anyagokat, megjelenést.
                </p>
              </li>

              <li className="bg-white/90 rounded-2xl border border-[#d4ddf4] p-5 shadow-[0_10px_25px_rgba(148,163,184,0.35)]">
                <span className="font-semibold text-[#1d4ed8] mr-2">3.</span>
                <span className="font-semibold">
                  Engedélyezési és kiviteli dokumentáció
                </span>
                <p className="mt-2 text-xs md:text-sm text-[#4b5563]">
                  Összerakjuk az engedélyekhez és kivitelezéshez szükséges
                  terveket: statika, gépészet, részlettervek. Minden
                  átláthatóan, egy rendszerben.
                </p>
              </li>

              <li className="bg-white/90 rounded-2xl border border-[#d4ddf4] p-5 shadow-[0_10px_25px_rgba(148,163,184,0.35)]">
                <span className="font-semibold text-[#1d4ed8] mr-2">4.</span>
                <span className="font-semibold">
                  Kivitelezés szervezése & koordináció
                </span>
                <p className="mt-2 text-xs md:text-sm text-[#4b5563]">
                  Összehangoljuk a mestereket, figyeljük az ütemezést és a
                  minőséget. Te egy partnerrel beszélsz, mi pedig a háttérben
                  kommunikálunk mindenkivel.
                </p>
              </li>

              <li className="bg-white/90 rounded-2xl border border-[#d4ddf4] p-5 shadow-[0_10px_25px_rgba(148,163,184,0.35)]">
                <span className="font-semibold text-[#1d4ed8] mr-2">5.</span>
                <span className="font-semibold">
                  Átadás, lezárás, utókövetés
                </span>
                <p className="mt-2 text-xs md:text-sm text-[#4b5563]">
                  Végigkísérjük az átadást, ellenőrizzük, mi készült el, és mi az,
                  amit még javítani kell. Nem hagyunk „nyitott végeket”.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* SZEKCIÓ 3 – Mit jelent veled dolgozni? */}
        <section className="relative py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text">
              Mit jelent a ProForm Consulting a saját projektedben?
            </h2>
            <p className="text-[#4b5563] max-w-3xl text-sm md:text-base mb-8 leading-relaxed">
              Három dologban nem kötünk kompromisszumot: átláthatóság,
              felelősségvállalás és a te idegrendszered védelme.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-[#d4ddf4] shadow-[0_14px_32px_rgba(148,163,184,0.4)]">
                <h3 className="text-lg font-semibold mb-2 text-[#1d4ed8]">
                  Rendszer & átláthatóság
                </h3>
                <p className="text-[#4b5563] text-sm leading-relaxed">
                  Tudod, mi történik, ki dolgozik épp, és mi a következő lépés.
                  Nincs „majd megoldjuk valahogy”.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#d4ddf4] shadow-[0_14px_32px_rgba(148,163,184,0.4)]">
                <h3 className="text-lg font-semibold mb-2 text-[#1d4ed8]">
                  Vizuális biztonság
                </h3>
                <p className="text-[#4b5563] text-sm leading-relaxed">
                  Nem papíron képzeled el a házat. 3D-ben, VR-ben látod, mit
                  kapsz – a drága hibák nagy részét már a monitoron megfogjuk.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#d4ddf4] shadow-[0_14px_32px_rgba(148,163,184,0.4)]">
                <h3 className="text-lg font-semibold mb-2 text-[#1d4ed8]">
                  Idő & idegrendszer védelem
                </h3>
                <p className="text-[#4b5563] text-sm leading-relaxed">
                  Kevesebb telefon, kevesebb utánajárás, kevesebb stressz. Mi
                  fogjuk össze a folyamatot, te hozod a döntéseket.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BLOKK */}
        <section className="relative py-20 md:py-24 bg-[#f5f7ff]">
          <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#d4ddf4] shadow-[0_18px_50px_rgba(148,163,184,0.45)]">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1f2937]">
                Van egy telek, ház vagy épület, amivel kezdenél valamit?
              </h2>
              <p className="text-[#4b5563] max-w-xl mb-6 text-sm md:text-base leading-relaxed">
                Írd le pár mondatban, hol tartasz most – telek, meglévő ház,
                felújítási ötlet vagy befektetési projekt –, és visszajelzünk,
                milyen lépések várnak rád a következő 30–60 napban.
              </p>

              <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-6">
                <div className="text-[#1f2937] text-sm md:text-base">
                  <div className="mb-1">
                    Email:{" "}
                    <span className="font-semibold text-[#1d4ed8]">
                      proformconsulting@azet.sk
                    </span>
                  </div>
                  <div className="opacity-80 text-xs md:text-sm">
                    Telefonos elérhetőség: H–P 9:00–17:00
                  </div>
                </div>

                <button className="mt-2 md:mt-0 px-9 md:px-10 py-3.5 md:py-4 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white text-sm md:text-base font-semibold shadow-[0_16px_45px_rgba(37,99,235,0.75)] hover:scale-105 active:scale-100 transition">
                  Ingyenes projekt-átvilágítás kérése
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}