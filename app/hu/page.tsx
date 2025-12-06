import Image from "next/image";
import LanguageSwitcher from "../components/LanguageSwitcher";
import MainNav from "../components/MainNav";
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

        {/* HERO – LOGÓ + CLAIM */}
        <section className="relative w-full py-20 md:py-24 bg-gradient-to-b from-white/95 via-[#f2f5fd]/96 to-[#eef2fb]">
          <div className="max-w-5xl mx-auto px-4 md:px-6 flex flex-col items-center text-center relative z-10">
            {/* LOGÓ AURÁVAL – körben */}
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
                  alt="ProForm Consulting logó"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* MINI FELIRAT + FŐ CLAIM */}
            <h1 className="mb-6">
              <span className="inline-block text-[11px] md:text-xs tracking-[0.25em] uppercase text-[#64748b] mb-3">
                Építési projekt és koordinációs stúdió
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-[#1f4fa5] via-[#3e6fb8] to-[#7fa4dd] text-transparent bg-clip-text">
                Komplett irányítás és koordináció építési projektekhez 
              </span>
            </h1>

            {/* Dekoratív luxus vonal */}
            <div className="w-20 md:w-24 h-[2px] mb-6 bg-gradient-to-r from-transparent via-[#2563eb] to-transparent rounded-full" />

            <p className="text-[#4b5563] text-base md:text-lg max-w-2xl mb-8 md:mb-10 leading-relaxed">
              Levesszük a válladról az építkezés terhét az első ötlettől a kész házig.
              Megtervezzük, vizualizáljuk, megszervezzük a mestereket, figyeljük a
              határidőket és a minőséget. Neked egy partner, nekünk az egész folyamat.
            </p>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <button className="px-7 md:px-8 py-3 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white text-sm md:text-base font-semibold shadow-[0_12px_35px_rgba(37,99,235,0.7)] hover:scale-105 active:scale-100 transition">
                Ingyenes konzultáció
              </button>
              <button className="px-7 md:px-8 py-3 rounded-full border border-[#93c5fd] text-[#1e3a8a] text-sm md:text-base font-semibold bg-white/80 hover:bg-[#e0edff] hover:border-[#60a5fa] transition">
                Időpont egyeztetés
              </button>
            </div>
          </div>
        </section>

        {/* SZEKCIÓ 1 – VR + TERVRAJZ */}
        <section className="relative py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
              {/* Szöveg */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text">
                  Virtuális valóság és 3D vizualizációk
                </h2>
                <p className="text-[#4b5563] mb-4 leading-relaxed text-sm md:text-base">
                  Mielőtt egyetlen tégla le lenne rakva, már látod a házat térben.
                  A VR és 3D vizualizációk megmutatják, hogyan fog hatni az otthonod
                  vagy a felújítás valós méretben.
                </p>
                <p className="text-[#4b5563] mb-4 leading-relaxed text-sm md:text-base">
                  Az elrendezést, anyagokat és fényeket digitálisan finomítjuk, így nem
                  a helyszínen derülnek ki a drága hibák.
                </p>

                <ul className="text-[#475569] text-xs md:text-sm space-y-2">
                  <li>• 3D bejárás belső és külső terekben</li>
                  <li>• anyagok és színek cseréje valós időben</li>
                </ul>
              </div>

              {/* Képek */}
              <div className="grid gap-4">
                <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden border border-[#d0d7e6] bg-white shadow-[0_15px_35px_rgba(148,163,184,0.45)] hover:shadow-[0_20px_55px_rgba(59,130,246,0.45)] transition">
                  <Image
                    src="/vr-visual.jpg"
                    alt="VR bejárás"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-[#2563eb]/35" />
                  <div className="absolute bottom-3 left-4 text-[10px] md:text-xs uppercase tracking-[0.22em] text-white drop-shadow">
                    VR PROJEKTBEJÁRÁS
                  </div>
                </div>

                <div className="relative h-36 md:h-40 rounded-2xl overflow-hidden border border-[#d0d7e6] bg-white shadow-[0_12px_30px_rgba(148,163,184,0.45)] hover:shadow-[0_18px_45px_rgba(59,130,246,0.35)] transition">
                  <Image
                    src="/house-blueprint.jpeg"
                    alt="Alaprajz és műszaki terv"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-4 text-[10px] md:text-xs uppercase tracking-[0.22em] text-white drop-shadow">
                    ALAPRAJZOK ÉS MŰSZAKI MEGOLDÁSOK
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SZEKCIÓ 2 – PROJEKTEK TÍPUSAI */}
        <section className="relative py-18 md:py-20 bg-gradient-to-b from-[#eef2ff] via-[#f5f7ff] to-[#eef2ff]">
          <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text">
                  Milyen projekteket viszünk?
                </h2>
                <p className="text-[#4b5563] max-w-xl text-sm md:text-base">
                  Családi ház, felújítás, lakás vagy nagyobb csarnok, raktár, étterem, épület
                  a folyamat logikája, ütemezése és kontrollja a mi kezünkben van.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* 1 – Családi ház */}
              <div className="group relative rounded-2xl overflow-hidden border border-[#d2d9ea] bg-white shadow-[0_16px_40px_rgba(148,163,184,0.45)] hover:shadow-[0_20px_55px_rgba(59,130,246,0.35)] transition">
                <div className="relative h-40">
                  <Image
                    src="/project-family-house.jpg"
                    alt="Modern családi ház"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                </div>
                <div className="p-4">
                  <div className="text-[10px] md:text-xs uppercase tracking-[0.22em] text-[#2563eb] mb-1">
                    CSALÁDI HÁZ
                  </div>
                  <h3 className="text-sm font-semibold text-[#111827] mb-1">
                    Új családi ház teljes folyamatban
                  </h3>
                  <p className="text-[#4b5563] text-xs leading-relaxed">
                    Tervezés, engedélyezés, mesterek kiválasztása, ütemezés és átadás
                    minden egy kézben.
                  </p>
                </div>
              </div>

              {/* 2 – Rekonstrukció */}
              <div className="group relative rounded-2xl overflow-hidden border border-[#d2d9ea] bg-white shadow-[0_16px_40px_rgba(148,163,184,0.45)] hover:shadow-[0_20px_55px_rgba(59,130,246,0.35)] transition">
                <div className="relative h-40">
                  <Image
                    src="/project-renovation.jpeg"
                    alt="Lakás vagy ház felújítás"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                </div>
                <div className="p-4">
                  <div className="text-[10px] md:text-xs uppercase tracking-[0.22em] text-[#2563eb] mb-1">
                    FELÚJÍTÁS
                  </div>
                  <h3 className="text-sm font-semibold text-[#111827] mb-1">
                    Komplex lakás- vagy házfelújítás
                  </h3>
                  <p className="text-[#4b5563] text-xs leading-relaxed">
                    Több szakma összehangolása, munkafolyamatok sorrendje, minőség-ellenőrzés
                    káosz nélkül.
                  </p>
                </div>
              </div>

              {/* 3 – Kommerc & ipari */}
              <div className="group relative rounded-2xl overflow-hidden border border-[#d2d9ea] bg-white shadow-[0_16px_40px_rgba(148,163,184,0.45)] hover:shadow-[0_20px_55px_rgba(59,130,246,0.35)] transition">
                <div className="relative h-40">
                  <Image
                    src="/project-apartment.jpeg"
                    alt="Kereskedelmi vagy ipari épület"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                </div>
                <div className="p-4">
                  <div className="text-[10px] md:text-xs uppercase tracking-[0.22em] text-[#2563eb] mb-1">
                    KOMMERS IPARI PROJEKTEK
                  </div>
                  <h3 className="text-sm font-semibold text-[#111827] mb-1">
                    Nagyobb csarnokok, raktárak, éttermek
                  </h3>
                  <p className="text-[#4b5563] text-xs leading-relaxed">
                    Ipari csarnokok, raktárak, hangárok, éttermek és nagyobb épületek
                    koordinációja, folyamatbeállítás, csapatok irányítása.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SZEKCIÓ 3 – MIT KAPSZ VELÜNK? */}
        <section className="relative py-16 md:py-18">
          <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text">
              Mit kapsz velünk?
            </h2>
            <p className="text-[#4b5563] max-w-2xl mb-8 text-sm md:text-base">
              Nem csak „egy mester” vagyunk a listádban. Mi tartjuk kézben a rendszert,
              az ütemezést és a kommunikációt az első beszélgetéstől a kulcsátadásig.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-[#d4ddeF] shadow-[0_14px_32px_rgba(148,163,184,0.4)] hover:shadow-[0_18px_45px_rgba(59,130,246,0.28)] transition">
                <h3 className="text-lg font-semibold mb-2 text-[#1d4ed8]">Átláthatóság</h3>
                <p className="text-[#4b5563] text-sm">
                  Minden fázisban tudod, mi történik, ki dolgozik és mi a következő lépés.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-[#d4ddeF] shadow-[0_14px_32px_rgba(148,163,184,0.4)] hover:shadow-[0_18px_45px_rgba(59,130,246,0.28)] transition">
                <h3 className="text-lg font-semibold mb-2 text-[#1d4ed8]">Felelősség</h3>
                <p className="text-[#4b5563] text-sm">
                  Minden részfeladatnak van gazdája – nem csak „majd valaki megoldja”.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-[#d4ddeF] shadow-[0_14px_32px_rgga(148,163,184,0.4)] hover:shadow-[0_18px_45px_rgba(59,130,246,0.28)] transition">
                <h3 className="text-lg font-semibold mb-2 text-[#1d4ed8]">Nyugalom</h3>
                <p className="text-[#4b5563] text-sm">
                  Kevesebb stressz, kevesebb telefonálás, nincs mesterek üldözése egy
                  partner, aki fogja a projekted kezét.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* KONTAKT BLOKK */}
        <section className="relative py-20 md:py-24 bg-[#f5f7ff]">
          <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#d4ddf4] shadow-[0_18px_50px_rgba(148,163,184,0.45)]">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1f2937]">
                Vedd fel velünk a kapcsolatot
              </h2>

              <p className="text-[#4b5563] max-w-xl mb-6 text-sm md:text-base">
                Írj pár sort a tervedről családi ház, felújítás vagy nagyobb komerciális
                projekt és összerakunk neked egy átlátható, konkrét javaslatot a
                következő lépésekre.
              </p>

              <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-6">
                <div className="text-[#1f2937]">
                  <div className="text-base md:text-lg mb-1">
                    Email:{" "}
                    <span className="font-semibold text-[#1d4ed8]">
                      proformconsulting@azet.sk
                    </span>
                  </div>
                  <div className="opacity-80 text-sm">
                    Telefonos elérhetőség: H–P 9:00–17:00
                  </div>
                </div>

                <button className="mt-2 md:mt-0 px-9 md:px-10 py-3.5 md:py-4 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white text-sm md:text-base font-semibold shadow-[0_16px_45px_rgba(37,99,235,0.75)] hover:scale-105 active:scale-100 transition">
                  Üzenet küldése
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}