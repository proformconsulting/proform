"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import MainNav from "../../components/MainNav";

const currency = new Intl.NumberFormat("hu-HU", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

type ProjectType = "family" | "renovation" | "commercial";
type StandardType = "standard" | "premium";
type ModeType = "build" | "demolition";

interface CalcResult {
  buildMin: number;
  buildMax: number;
  demoMin: number;
  demoMax: number;
  serviceMin: number;
  serviceMax: number;
  totalMin: number;
  totalMax: number;
}

export default function CalculatorPageHu() {
  const [mode, setMode] = useState<ModeType>("build");
  const [projectType, setProjectType] = useState<ProjectType>("family");
  const [area, setArea] = useState<string>("");
  const [standard, setStandard] = useState<StandardType>("standard");
  const [hasDemolition, setHasDemolition] = useState<boolean>(false);
  const [demolitionArea, setDemolitionArea] = useState<string>("");
  const [includeVr, setIncludeVr] = useState<boolean>(false);

  const result = useMemo<CalcResult | null>(() => {
    const a = Number(area) || 0;
    const demoExtra = hasDemolition ? Number(demolitionArea) || 0 : 0;

    // 1) Csak bontás mód
    if (mode === "demolition") {
      if (a <= 0) return null;

      // dél-nyugat Szlovákia – egy kicsit a piaci átlag alá lőve
      const demoMinPerM2 = 32;
      const demoMaxPerM2 = 58;

      const demoMin = a * demoMinPerM2;
      const demoMax = a * demoMaxPerM2;

      // szolgáltatás: bontási dokumentáció + szervezés + koordináció
      const serviceMin = demoMin * 0.06;
      const serviceMax = demoMax * 0.09;

      return {
        buildMin: 0,
        buildMax: 0,
        demoMin,
        demoMax,
        serviceMin,
        serviceMax,
        totalMin: demoMin + serviceMin,
        totalMax: demoMax + serviceMax,
      };
    }

    // 2) Építés / felújítás mód
    if (a <= 0) return null;

    // építés / felújítás irányár m²-re – a piacnál kicsit olcsóbban
    let baseMinPerM2 = 0;
    let baseMaxPerM2 = 0;

    switch (projectType) {
      case "family":
        // új családi ház – kulcsrakész
        baseMinPerM2 = 1100;
        baseMaxPerM2 = 1450;
        break;
      case "renovation":
        // komplex lakás / ház felújítás
        baseMinPerM2 = 430;
        baseMaxPerM2 = 780;
        break;
      case "commercial":
        // csarnok, raktár, kereskedelmi / ipari épület
        baseMinPerM2 = 780;
        baseMaxPerM2 = 1200;
        break;
    }

    // standard vs prémium
    let factorMin = 1;
    let factorMax = 1;
    if (standard === "premium") {
      factorMin = 1.06;
      factorMax = 1.14;
    }

    const buildMin = a * baseMinPerM2 * factorMin;
    const buildMax = a * baseMaxPerM2 * factorMax;

    // bontás, ha előtte régi épületet kell elbontani
    const demoMinPerM2 = 32;
    const demoMaxPerM2 = 58;

    const demoMin = demoExtra > 0 ? demoExtra * demoMinPerM2 : 0;
    const demoMax = demoExtra > 0 ? demoExtra * demoMaxPerM2 : 0;

    const baseSubtotalMin = buildMin + demoMin;
    const baseSubtotalMax = buildMax + demoMax;

    // PROFORM szolgáltatás: projekttervezés + dokumentáció + projektirányítás + koordináció
    let serviceMinPercent = 0.075;
    let serviceMaxPercent = 0.105;

    const serviceBaseMin = baseSubtotalMin * serviceMinPercent;
    const serviceBaseMax = baseSubtotalMax * serviceMaxPercent;

    // VR / 3D a szolgáltatás díjában – ha kérik, összeget hozzáadjuk
    let vrExtraMin = 0;
    let vrExtraMax = 0;

    if (includeVr) {
      switch (projectType) {
        case "family":
          vrExtraMin = 650;
          vrExtraMax = 1300;
          break;
        case "renovation":
          vrExtraMin = 480;
          vrExtraMax = 950;
          break;
        case "commercial":
          vrExtraMin = 980;
          vrExtraMax = 2100;
          break;
      }
    }

    const serviceMin = serviceBaseMin + vrExtraMin;
    const serviceMax = serviceBaseMax + vrExtraMax;

    const totalMin = baseSubtotalMin + serviceMin;
    const totalMax = baseSubtotalMax + serviceMax;

    return {
      buildMin,
      buildMax,
      demoMin,
      demoMax,
      serviceMin,
      serviceMax,
      totalMin,
      totalMax,
    };
  }, [
    mode,
    projectType,
    area,
    standard,
    hasDemolition,
    demolitionArea,
    includeVr,
  ]);

  const renderResult = () => {
    if (!result) {
      return (
        <p className="text-sm text-[#6b7280]">
          Add meg az alapterületet, válaszd ki, hogy{" "}
          <strong>építés / felújítás</strong> vagy{" "}
          <strong>csak bontás</strong> érdekel, és a kalkulátor egy
          <strong> vonzó, de reális</strong> költségsávot mutat a
          dél-nyugat-szlovákiai piaci viszonyokhoz igazítva.
        </p>
      );
    }

    const {
      buildMin,
      buildMax,
      demoMin,
      demoMax,
      serviceMin,
      serviceMax,
      totalMin,
      totalMax,
    } = result;

    return (
      <div className="space-y-3 text-sm text-[#374151]">
        {mode === "build" && (
          <div className="flex items-baseline justify-between gap-4 border-b border-[#e5e7eb] pb-2.5">
            <span className="text-xs uppercase tracking-[0.16em] text-[#6b7280]">
              Építés / felújítás
            </span>
            <div className="text-right">
              <div className="font-semibold">
                {currency.format(buildMin)} – {currency.format(buildMax)}
              </div>
              <div className="text-[11px] text-[#9ca3af]">
                anyag + munka, kivitelezési szinttől függően
              </div>
            </div>
          </div>
        )}

        {demoMin > 0 && (
          <div className="flex items-baseline justify-between gap-4 border-b border-[#e5e7eb] pb-2.5">
            <span className="text-xs uppercase tracking-[0.16em] text-[#6b7280]">
              Bontás
            </span>
            <div className="text-right">
              <div className="font-semibold">
                {currency.format(demoMin)} – {currency.format(demoMax)}
              </div>
              <div className="text-[11px] text-[#9ca3af]">
                bontási munkák, gépek, sitt elszállítás (tájékoztató jelleggel)
              </div>
            </div>
          </div>
        )}

        <div className="flex items-baseline justify-between gap-4 border-b border-[#e5e7eb] pb-2.5">
          <span className="text-xs uppercase tracking-[0.16em] text-[#6b7280]">
            Projekt + irányítás
          </span>
          <div className="text-right">
            <div className="font-semibold">
              {currency.format(serviceMin)} – {currency.format(serviceMax)}
            </div>
            <div className="text-[11px] text-[#9ca3af]">
              tervezés, dokumentáció, projektirányítás, koordináció
              {mode === "build" && " (VR-rel együtt, ha be van jelölve)"}
            </div>
          </div>
        </div>

        <div className="mt-2 pt-3 border-t border-[#e5e7eb] flex items-baseline justify-between gap-4">
          <span className="text-xs uppercase tracking-[0.2em] text-[#111827]">
            Összesített tájékoztató költségkeret
          </span>
          <div className="text-right">
            <div className="text-base md:text-lg font-bold bg-gradient-to-r from-[#1f4fa5] via-[#2563eb] to-[#3b82f6] text-transparent bg-clip-text">
              {currency.format(totalMin)} – {currency.format(totalMax)}
            </div>
            <div className="text-[11px] text-[#9ca3af]">
              tipikus sáv hasonló projektek esetén a régióban
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <MainNav />

      <main className="min-h-screen bg-[#f5f7fb] text-slate-900 relative overflow-hidden">
        {/* háttér aurák */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#d7e3ff] blur-[200px] opacity-70" />
        <div className="pointer-events-none absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full bg-[#c4d9ff] blur-[220px] opacity-60" />
        <div className="pointer-events-none absolute bottom-[-260px] left-1/4 w-[460px] h-[460px] rounded-full bg-[#e0e6f5] blur-[180px] opacity-80" />

        {/* HERO + kalkulátor */}
        <section className="relative w-full pt-24 pb-16 md:pt-28 md:pb-24">
          <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-start">
              {/* BAL – szöveg + űrlap */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-[#1f4fa5] via-[#3e6fb8] to-[#7fa4dd] text-transparent bg-clip-text">
                  Tájékoztató építési költség kalkulátor
                </h1>
                <p className="text-[#4b5563] text-sm md:text-base mb-6 max-w-2xl">
                  Célunk, hogy{" "}
                  <strong>gyors és őszinte költségképet</strong> kapj. Az árak
                  úgy vannak beállítva, hogy a régióban{" "}
                  <strong>versenyképesek és elérhetőek</strong> legyenek.
                  A pontos ajánlatot egy rövid egyeztetés után készítjük el.
                </p>

                <div className="bg-white/95 rounded-2xl border border-[#d4ddf4] shadow-[0_18px_50px_rgba(148,163,184,0.45)] p-5 md:p-6 space-y-5">
                  {/* mód: építés / bontás */}
                  <div>
                    <label className="block text-xs font-semibold text-[#6b7280] mb-1.5 uppercase tracking-[0.14em]">
                      Kalkuláció típusa
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setMode("build")}
                        className={
                          "rounded-xl px-3 py-2 text-sm font-semibold border transition " +
                          (mode === "build"
                            ? "bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white border-transparent shadow-[0_10px_28px_rgba(37,99,235,0.55)]"
                            : "bg-white text-[#1f2937] border-[#cbd5f0] hover:border-[#93c5fd]")
                        }
                      >
                        Építés / felújítás
                      </button>
                      <button
                        type="button"
                        onClick={() => setMode("demolition")}
                        className={
                          "rounded-xl px-3 py-2 text-sm font-semibold border transition " +
                          (mode === "demolition"
                            ? "bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white border-transparent shadow-[0_10px_28px_rgba(37,99,235,0.55)]"
                            : "bg-white text-[#1f2937] border-[#cbd5f0] hover:border-[#93c5fd]")
                        }
                      >
                        Csak bontás
                      </button>
                    </div>
                  </div>

                  {/* projekt típus csak építés módban */}
                  {mode === "build" && (
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
                          Kereskedelmi / ipari
                        </button>
                      </div>
                    </div>
                  )}

                  {/* alapterület + standard/prémium vagy csak alapterület bontásra */}
                  <div className="grid sm:grid-cols-[1.2fr,0.9fr] gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#6b7280] mb-1.5 uppercase tracking-[0.14em]">
                        {mode === "build"
                          ? "Hasznos alapterület"
                          : "Bontandó objektum alapterülete"}
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

                    {mode === "build" && (
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
                    )}
                  </div>

                  {/* extra bontás – csak építés módban */}
                  {mode === "build" && (
                    <div className="border-t border-[#e2e8f0] pt-4 space-y-3">
                      <label className="flex items-center gap-2 text-sm font-semibold text-[#1f2937]">
                        <input
                          type="checkbox"
                          checked={hasDemolition}
                          onChange={(e) => setHasDemolition(e.target.checked)}
                          className="h-4 w-4 rounded border-[#cbd5f0] text-[#2563eb] focus:ring-[#bfdbfe]"
                        />
                        Előtte meglévő épület bontása is szükséges?
                      </label>

                      {hasDemolition && (
                        <div>
                          <label className="block text-xs font-semibold text-[#6b7280] mb-1.5 uppercase tracking-[0.14em]">
                            Bontandó alapterület
                          </label>
                          <div className="flex items-center gap-2">
                            <input
                              type="number"
                              min={0}
                              placeholder="pl. 90"
                              value={demolitionArea}
                              onChange={(e) =>
                                setDemolitionArea(e.target.value)
                              }
                              className="w-full rounded-xl border border-[#cbd5f0] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#60a5fa] focus:ring-2 focus:ring-[#bfdbfe]"
                            />
                            <span className="text-xs text-[#6b7280] font-semibold">
                              m²
                            </span>
                          </div>
                          <p className="mt-1 text-[11px] text-[#9ca3af]">
                            Bontás, gépek, sitt elszállítás – irányár.
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* VR opció – csak építésnél */}
                  {mode === "build" && (
                    <div className="border-t border-[#e2e8f0] pt-4 space-y-2">
                      <label className="flex items-center gap-2 text-sm font-semibold text-[#1f2937]">
                        <input
                          type="checkbox"
                          checked={includeVr}
                          onChange={(e) => setIncludeVr(e.target.checked)}
                          className="h-4 w-4 rounded border-[#cbd5f0] text-[#2563eb] focus:ring-[#bfdbfe]"
                        />
                        Szeretné VR / 3D bejárással is látni a projektet?
                      </label>
                      <p className="text-[11px] text-[#9ca3af]">
                        A VR a szolgáltatási díj része – a „Projekt + irányítás”
                        összegéhez adódik hozzá.
                      </p>
                    </div>
                  )}

                  <p className="text-[11px] text-[#9ca3af]">
                    A kalkuláció informatív jellegű. A végső ár függ a telek
                    adottságaitól, a választott technológiáktól, anyagoktól és
                    az ütemezéstől. Egy rövid telefonos egyeztetés után
                    személyre szabott ajánlatot készítünk.
                  </p>
                </div>
              </div>

              {/* JOBB – eredmény + illusztráció */}
              <div className="space-y-4 md:space-y-5">
                <div className="bg-white/95 rounded-2xl border border-[#d4ddf4] shadow-[0_18px_50px_rgba(148,163,184,0.5)] p-5 md:p-6">
                  <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#1f2937]">
                    Várható költségkeret
                  </h2>
                  {renderResult()}
                </div>

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
                        A számok tudatosan versenyképes szinten vannak beállítva.
                      </div>
                      <p className="text-[#4b5563]">
                        Az első beszélgetés után{" "}
                        <strong>konkrét, részletes költségvetést</strong> készítünk,
                        amely már a telek, a technológia és az anyagválasztás
                        minden részletét figyelembe veszi.
                      </p>
                    </div>
                  </div>
                </div>
                {/* JOBB vége */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}