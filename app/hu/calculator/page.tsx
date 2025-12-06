"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import MainNav from "../../components/MainNav";
import LanguageSwitcher from "../../components/LanguageSwitcher";

const currency = new Intl.NumberFormat("hu-HU", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

type ProjectType = "family" | "renovation" | "commercial";

export default function CalculatorPageHu() {
  const [projectType, setProjectType] = useState<ProjectType>("family");
  const [area, setArea] = useState<string>("");
  const [standard, setStandard] = useState<"standard" | "premium">("standard");
  const [hasDemolition, setHasDemolition] = useState<boolean>(false);
  const [demolitionArea, setDemolitionArea] = useState<string>("");

  const result = useMemo(() => {
    const a = Number(area) || 0;
    const d = hasDemolition ? Number(demolitionArea) || 0 : 0;

    if (a <= 0) {
      return null;
    }

    // Alap – építés / felújítás ára m²-re vetítve, projekt típus szerint
    let baseMinPerM2 = 0;
    let baseMaxPerM2 = 0;

    switch (projectType) {
      case "family":
        // családi ház – új építés (szerkezet + standard befejezés)
        baseMinPerM2 = 1350;
        baseMaxPerM2 = 1750;
        break;
      case "renovation":
        // komplex lakás / ház felújítás
        baseMinPerM2 = 550;
        baseMaxPerM2 = 950;
        break;
      case "commercial":
        // kereskedelmi / ipari objektumok
        baseMinPerM2 = 950;
        baseMaxPerM2 = 1450;
        break;
    }

    // Standard vs Prémium
    let factorMin = 1;
    let factorMax = 1;
    if (standard === "premium") {
      factorMin = 1.12;
      factorMax = 1.25;
    }

    const buildMin = a * baseMinPerM2 * factorMin;
    const buildMax = a * baseMaxPerM2 * factorMax;

    // Bontás, ha van
    const demoMinPerM2 = 60;
    const demoMaxPerM2 = 110;

    const demoMin = d > 0 ? d * demoMinPerM2 : 0;
    const demoMax = d > 0 ? d * demoMaxPerM2 : 0;

    // A mi munkánk – projektirányítás, koordináció, ellenőrzés
    const subtotalMin = buildMin + demoMin;
    const subtotalMax = buildMax + demoMax;

    const ourFeeMin = subtotalMin * 0.08; // 8 %
    const ourFeeMax = subtotalMax * 0.12; // 12 %

    const totalMin = subtotalMin + ourFeeMin;
    const totalMax = subtotalMax + ourFeeMax;

    return {
      buildMin,
      buildMax,
      demoMin,
      demoMax,
      ourFeeMin,
      ourFeeMax,
      totalMin,
      totalMax,
    };
  }, [projectType, area, standard, hasDemolition, demolitionArea]);

  return (
    <>
      <LanguageSwitcher />
      <MainNav />

      <main className="min-h-screen bg-[#f5f7fb] text-slate-900 relative overflow-hidden">
        {/* Háttér aurák */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#d7e3ff] blur-[200px] opacity-70" />
        <div className="pointer-events-none absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full bg-[#c4d9ff] blur-[220px] opacity-60" />
        <div className="pointer-events-none absolute bottom-[-260px] left-1/4 w-[460px] h-[460px] rounded-full bg-[#e0e6f5] blur-[180px] opacity-80" />

        {/* HERO + kalkulátor */}
        <section className="relative w-full py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-start">
              {/* BAL – szöveg + űrlap */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-[#1f4fa5] via-[#3e6fb8] to-[#7fa4dd] text-transparent bg-clip-text">
                  Tájékoztató építési költség kalkulátor
                </h1>
                <p className="text-[#4b5563] text-sm md:text-base mb-6 max-w-2xl">
                  Ez a kalkulátor <strong>gyors képet ad</strong> a várható
                  költségkeretről dél-nyugat Szlovákia piaci viszonyaihoz igazítva.
                  Az értékek tájékoztató jellegűek – a pontos ajánlatot
                  személyes egyeztetés után készítjük el.
                </p>

                <div className="bg-white/95 rounded-2xl border border-[#d4ddf4] shadow-[0_18px_50px_rgba(148,163,184,0.45)] p-5 md:p-6 space-y-5">
                  {/* Projekt típus */}
                  <div>
                    <label className="block text-xs font-semibold text-[#6b7280] mb-1.5 uppercase tracking-[0.14em]">
                      Projekt típusa
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setProjectType("family")}
                        className={
                          "rounded-xl px-3 py-2 text-sm font-semibold border transition " +
                          (projectType === "family"
                            ? "bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white border-transparent shadow-[0_10px_28px_rgba(37,99,235,0.55)]"
                            : "bg-white text-[#1f2937] border-[#cbd5f0] hover:border-[#93c5fd]")
                        }
                      >
                        Családi ház
                      </button>
                      <button
                        type="button"
                        onClick={() => setProjectType("renovation")}
                        className={
                          "rounded-xl px-3 py-2 text-sm font-semibold border transition " +
                          (projectType === "renovation"
                            ? "bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white border-transparent shadow-[0_10px_28px_rgba(37,99,235,0.55)]"
                            : "bg-white text-[#1f2937] border-[#cbd5f0] hover:border-[#93c5fd]")
                        }
                      >
                        Felújítás
                      </button>
                      <button
                        type="button"
                        onClick={() => setProjectType("commercial")}
                        className={
                          "rounded-xl px-3 py-2 text-sm font-semibold border transition " +
                          (projectType === "commercial"
                            ? "bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white border-transparent shadow-[0_10px_28px_rgba(37,99,235,0.55)]"
                            : "bg-white text-[#1f2937] border-[#cbd5f0] hover:border-[#93c5fd]")
                        }
                      >
                        Kereskedelmi / ipari objektum
                      </button>
                    </div>
                  </div>

                  {/* Alapterület + kivitelezési szint */}
                  <div className="grid sm:grid-cols-[1.2fr,0.9fr] gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#6b7280] mb-1.5 uppercase tracking-[0.14em]">
                        Hasznos alapterület
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          min={0}
                          placeholder="pl. 140"
                          value={area}
                          onChange={(e) => setArea(e.target.value)}
                          className="w-full rounded-xl border border-[#cbd5f0] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#60a5fa] focus:ring-2 focus:ring-[#bfdbfe]"
                        />
                        <span className="text-xs text-[#6b7280] font-semibold">
                          m²
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#6b7280] mb-1.5 uppercase tracking-[0.14em]">
                        Kivitelezési szint
                      </label>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setStandard("standard")}
                          className={
                            "flex-1 rounded-xl px-3 py-2 text-xs font-semibold border transition " +
                            (standard === "standard"
                              ? "bg-white text-[#1f2937] border-[#60a5fa] shadow-[0_8px_20px_rgba(148,163,184,0.5)]"
                              : "bg-white/80 text-[#6b7280] border-[#cbd5f0] hover:border-[#93c5fd]")
                          }
                        >
                          Standard
                        </button>
                        <button
                          type="button"
                          onClick={() => setStandard("premium")}
                          className={
                            "flex-1 rounded-xl px-3 py-2 text-xs font-semibold border transition " +
                            (standard === "premium"
                              ? "bg-gradient-to-r from-[#1f4fa5] to-[#3b82f6] text-white border-transparent shadow-[0_10px_26px_rgba(37,99,235,0.6)]"
                              : "bg-white/80 text-[#6b7280] border-[#cbd5f0] hover:border-[#93c5fd]")
                          }
                        >
                          Prémium
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Bontás */}
                  <div className="border-t border-[#e2e8f0] pt-4">
                    <div className="flex items-center justify-between mb-2.5">
                      <label className="flex items-center gap-2 text-sm font-semibold text-[#1f2937]">
                        <input
                          type="checkbox"
                          checked={hasDemolition}
                          onChange={(e) => setHasDemolition(e.target.checked)}
                          className="h-4 w-4 rounded border-[#cbd5f0] text-[#2563eb] focus:ring-[#bfdbfe]"
                        />
                        Szükséges a meglévő épület bontása / elbontása?
                      </label>
                    </div>

                    {hasDemolition && (
                      <div className="mt-2">
                        <label className="block text-xs font-semibold text-[#6b7280] mb-1.5 uppercase tracking-[0.14em]">
                          Bontandó alapterület (becslés)
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            min={0}
                            placeholder="pl. 90"
                            value={demolitionArea}
                            onChange={(e) => setDemolitionArea(e.target.value)}
                            className="w-full rounded-xl border border-[#cbd5f0] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#60a5fa] focus:ring-2 focus:ring-[#bfdbfe]"
                          />
                          <span className="text-xs text-[#6b7280] font-semibold">
                            m²
                          </span>
                        </div>
                        <p className="mt-1 text-[11px] text-[#9ca3af]">
                          Tartalmazza a bontási munkákat, gépeket és a sitt elszállítását
                          (tájékoztató jelleggel).
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <p className="text-[11px] text-[#9ca3af]">
                    A kalkuláció tájékoztató jellegű – a végső ár függ a konkrét
                    tervtől, a választott anyagoktól és a pontos műszaki
                    tartalomtól. A részletes ajánlatot személyes egyeztetés után
                    készítjük el.
                  </p>
                </div>
              </div>

              {/* JOBB – eredmény + grafika */}
              <div className="space-y-4 md:space-y-5">
                {/* Eredmény kártya */}
                <div className="bg-white/95 rounded-2xl border border-[#d4ddf4] shadow-[0_18px_50px_rgba(148,163,184,0.5)] p-5 md:p-6">
                  <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#1f2937]">
                    Várható költségkeret
                  </h2>

                  {!result ? (
                    <p className="text-sm text-[#6b7280]">
                      Adja meg az <strong>alapterületet</strong>, válassza ki a
                      projekt típusát, és jelölje, ha bontásra is szükség van.
                      A kalkulátor ezután megjeleníti a tájékoztató költségsávot.
                    </p>
                  ) : (
                    <div className="space-y-3 text-sm text-[#374151]">
                      <div className="flex items-baseline justify-between gap-4 border-b border-[#e5e7eb] pb-2.5">
                        <span className="text-xs uppercase tracking-[0.16em] text-[#6b7280]">
                          Építési munkák
                        </span>
                        <div className="text-right">
                          <div className="font-semibold">
                            {currency.format(result.buildMin)} –{" "}
                            {currency.format(result.buildMax)}
                          </div>
                          <div className="text-[11px] text-[#9ca3af]">
                            projekt típusától és szinttől függően
                          </div>
                        </div>
                      </div>

                      {result.demoMin > 0 && (
                        <div className="flex items-baseline justify-between gap-4 border-b border-[#e5e7eb] pb-2.5">
                          <span className="text-xs uppercase tracking-[0.16em] text-[#6b7280]">
                            Bontás
                          </span>
                          <div className="text-right">
                            <div className="font-semibold">
                              {currency.format(result.demoMin)} –{" "}
                              {currency.format(result.demoMax)}
                            </div>
                            <div className="text-[11px] text-[#9ca3af]">
                              bontási munkák + sitt elszállítása
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="flex items-baseline justify-between gap-4 border-b border-[#e5e7eb] pb-2.5">
                        <span className="text-xs uppercase tracking-[0.16em] text-[#6b7280]">
                          Saját munkánk
                        </span>
                        <div className="text-right">
                          <div className="font-semibold">
                            {currency.format(result.ourFeeMin)} –{" "}
                            {currency.format(result.ourFeeMax)}
                          </div>
                          <div className="text-[11px] text-[#9ca3af]">
                            projektirányítás, koordináció, műszaki ellenőrzés
                          </div>
                        </div>
                      </div>

                      <div className="mt-2 pt-3 border-t border-[#e5e7eb] flex items-baseline justify-between gap-4">
                        <span className="text-xs uppercase tracking-[0.2em] text-[#111827]">
                          Összesített tájékoztató költségvetés
                        </span>
                        <div className="text-right">
                          <div className="text-base md:text-lg font-bold bg-gradient-to-r from-[#1f4fa5] via-[#2563eb] to-[#3b82f6] text-transparent bg-clip-text">
                            {currency.format(result.totalMin)} –{" "}
                            {currency.format(result.totalMax)}
                          </div>
                          <div className="text-[11px] text-[#9ca3af]">
                            a végleges tervtől és anyagválasztástól függően
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Illusztráció + bizalom szöveg */}
                <div className="bg-gradient-to-r from-[#1f4fa5] via-[#3b82f6] to-[#60a5fa] rounded-2xl p-[1px] shadow-[0_18px_50px_rgba(37,99,235,0.55)]">
                  <div className="bg-white/95 rounded-2xl p-4 md:p-5 flex gap-4 md:gap-5 items-center">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border border-[#d1ddff] shadow-[0_10px_28px_rgba(148,163,184,0.6)]">
                      <Image
                        src="/house-blueprint.jpeg"
                        alt="Projekt és építési folyamat"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-xs md:text-sm text-[#1f2937]">
                      <div className="font-semibold mb-1">
                        Ezek a számok az első tájékoztató keretet mutatják.
                      </div>
                      <p className="text-[#4b5563]">
                        Az <strong>egyedi ajánlatot</strong> a telek adottságai,
                        a műszaki megoldás, a kiválasztott anyagok és a
                        megvalósítási ütemterv alapján készítjük el, személyre
                        szabottan.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}