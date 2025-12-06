"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import MainNav from "../components/MainNav";

const currency = new Intl.NumberFormat("sk-SK", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

type ProjectType = "family" | "renovation" | "commercial";
type StandardType = "standard" | "premium";

interface CalcResult {
  buildMin: number;
  buildMax: number;
  demoMin: number;
  demoMax: number;
  projectDocsMin: number;
  projectDocsMax: number;
  vrMin: number;
  vrMax: number;
  ourFeeMin: number;
  ourFeeMax: number;
  totalMin: number;
  totalMax: number;
}

export default function CalculatorPage() {
  const [projectType, setProjectType] = useState<ProjectType>("family");
  const [area, setArea] = useState<string>("");
  const [standard, setStandard] = useState<StandardType>("standard");
  const [hasDemolition, setHasDemolition] = useState<boolean>(false);
  const [demolitionArea, setDemolitionArea] = useState<string>("");
  const [includeProjectDocs, setIncludeProjectDocs] = useState<boolean>(true);
  const [includeVr, setIncludeVr] = useState<boolean>(false);

  const result = useMemo<CalcResult | null>(() => {
    const a = Number(area) || 0;
    const d = hasDemolition ? Number(demolitionArea) || 0 : 0;

    if (a <= 0) return null;

    // ALAP – építés / felújítás irányár m²-re
    let baseMinPerM2 = 0;
    let baseMaxPerM2 = 0;

    switch (projectType) {
      case "family":
        // új családi ház – kulcsrakész, standard
        baseMinPerM2 = 1200;
        baseMaxPerM2 = 1600;
        break;
      case "renovation":
        // komplex lakás / ház felújítás
        baseMinPerM2 = 500;
        baseMaxPerM2 = 850;
        break;
      case "commercial":
        // csarnok, raktár, kereskedelmi / ipari épület
        baseMinPerM2 = 900;
        baseMaxPerM2 = 1350;
        break;
    }

    // STANDARD vs PREMIUM
    let factorMin = 1;
    let factorMax = 1;
    if (standard === "premium") {
      factorMin = 1.1;
      factorMax = 1.2;
    }

    const buildMin = a * baseMinPerM2 * factorMin;
    const buildMax = a * baseMaxPerM2 * factorMax;

    // BONTÁS (ha van)
    const demoMinPerM2 = 45;
    const demoMaxPerM2 = 90;

    const demoMin = d > 0 ? d * demoMinPerM2 : 0;
    const demoMax = d > 0 ? d * demoMaxPerM2 : 0;

    // Alap kivitelezési összeg (építés + bontás)
    const baseSubtotalMin = buildMin + demoMin;
    const baseSubtotalMax = buildMax + demoMax;

    // Projektdokumentáció (ha kéri)
    let projectDocsMin = 0;
    let projectDocsMax = 0;

    if (includeProjectDocs) {
      // 5–7 % az építés összegéből – vonzó, de reális
      projectDocsMin = baseSubtotalMin * 0.05;
      projectDocsMax = baseSubtotalMax * 0.07;
    }

    // VR / 3D vizualizáció (ha kéri) – projekt típus szerint
    let vrMin = 0;
    let vrMax = 0;

    if (includeVr) {
      switch (projectType) {
        case "family":
          vrMin = 900;
          vrMax = 1800;
          break;
        case "renovation":
          vrMin = 600;
          vrMax = 1200;
          break;
        case "commercial":
          vrMin = 1500;
          vrMax = 2800;
          break;
      }
    }

    // ProForm díj – projekt irányítás, koordináció, minőségellenőrzés
    const subtotalWithExtrasMin = baseSubtotalMin + projectDocsMin + vrMin;
    const subtotalWithExtrasMax = baseSubtotalMax + projectDocsMax + vrMax;

    const ourFeeMin = subtotalWithExtrasMin * 0.07; // 7 %
    const ourFeeMax = subtotalWithExtrasMax * 0.1; // 10 %

    const totalMin = subtotalWithExtrasMin + ourFeeMin;
    const totalMax = subtotalWithExtrasMax + ourFeeMax;

    return {
      buildMin,
      buildMax,
      demoMin,
      demoMax,
      projectDocsMin,
      projectDocsMax,
      vrMin,
      vrMax,
      ourFeeMin,
      ourFeeMax,
      totalMin,
      totalMax,
    };
  }, [
    projectType,
    area,
    standard,
    hasDemolition,
    demolitionArea,
    includeProjectDocs,
    includeVr,
  ]);

  // külön függvényben – így TS tudja, hogy itt már biztosan van result
  const renderResult = () => {
    if (!result) {
      return (
        <p className="text-sm text-[#6b7280]">
          Zadajte <strong>úžitkovú plochu</strong>, vyberte typ projektu a
          nastavte možnosti. Kalkulátor vám zobrazí orientačný rozpočet v
          atraktívnom, ale reálnom pásme.
        </p>
      );
    }

    const {
      buildMin,
      buildMax,
      demoMin,
      demoMax,
      projectDocsMin,
      projectDocsMax,
      vrMin,
      vrMax,
      ourFeeMin,
      ourFeeMax,
      totalMin,
      totalMax,
    } = result;

    return (
      <div className="space-y-3 text-sm text-[#374151]">
        <div className="flex items-baseline justify-between gap-4 border-b border-[#e5e7eb] pb-2.5">
          <span className="text-xs uppercase tracking-[0.16em] text-[#6b7280]">
            Stavebné práce
          </span>
          <div className="text-right">
            <div className="font-semibold">
              {currency.format(buildMin)} – {currency.format(buildMax)}
            </div>
            <div className="text-[11px] text-[#9ca3af]">
              podľa typu projektu a štandardu
            </div>
          </div>
        </div>

        {demoMin > 0 && (
          <div className="flex items-baseline justify-between gap-4 border-b border-[#e5e7eb] pb-2.5">
            <span className="text-xs uppercase tracking-[0.16em] text-[#6b7280]">
              Demolácia
            </span>
            <div className="text-right">
              <div className="font-semibold">
                {currency.format(demoMin)} – {currency.format(demoMax)}
              </div>
              <div className="text-[11px] text-[#9ca3af]">
                búracie práce + odvoz odpadu
              </div>
            </div>
          </div>
        )}

        {projectDocsMin > 0 && (
          <div className="flex items-baseline justify-between gap-4 border-b border-[#e5e7eb] pb-2.5">
            <span className="text-xs uppercase tracking-[0.16em] text-[#6b7280]">
              Projektdokumentácia
            </span>
            <div className="text-right">
              <div className="font-semibold">
                {currency.format(projectDocsMin)} –{" "}
                {currency.format(projectDocsMax)}
              </div>
              <div className="text-[11px] text-[#9ca3af]">
                architektúra + profesie, orientačne 5–7 % stavby
              </div>
            </div>
          </div>
        )}

        {vrMin > 0 && (
          <div className="flex items-baseline justify-between gap-4 border-b border-[#e5e7eb] pb-2.5">
            <span className="text-xs uppercase tracking-[0.16em] text-[#6b7280]">
              VR / 3D vizualizácia
            </span>
            <div className="text-right">
              <div className="font-semibold">
                {currency.format(vrMin)} – {currency.format(vrMax)}
              </div>
              <div className="text-[11px] text-[#9ca3af]">
                kompletný virtuálny prechod projektu
              </div>
            </div>
          </div>
        )}

        <div className="flex items-baseline justify-between gap-4 border-b border-[#e5e7eb] pb-2.5">
          <span className="text-xs uppercase tracking-[0.16em] text-[#6b7280]">
            Naša práca
          </span>
          <div className="text-right">
            <div className="font-semibold">
              {currency.format(ourFeeMin)} – {currency.format(ourFeeMax)}
            </div>
            <div className="text-[11px] text-[#9ca3af]">
              projektové riadenie, koordinácia, kontrola kvality
            </div>
          </div>
        </div>

        <div className="mt-2 pt-3 border-t border-[#e5e7eb] flex items-baseline justify-between gap-4">
          <span className="text-xs uppercase tracking-[0.2em] text-[#111827]">
            Celkový orientačný rozpočet
          </span>
          <div className="text-right">
            <div className="text-base md:text-lg font-bold bg-gradient-to-r from-[#1f4fa5] via-[#2563eb] to-[#3b82f6] text-transparent bg-clip-text">
              {currency.format(totalMin)} – {currency.format(totalMax)}
            </div>
            <div className="text-[11px] text-[#9ca3af]">
              pásmo, v ktorom sa typicky pohybujú podobné projekty
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
              {/* BAL – szöveg + form */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-[#1f4fa5] via-[#3e6fb8] to-[#7fa4dd] text-transparent bg-clip-text">
                  Orientačný kalkulátor stavebných nákladov
                </h1>
                <p className="text-[#4b5563] text-sm md:text-base mb-6 max-w-2xl">
                  Tento kalkulátor vám dá{" "}
                  <strong>rýchly a realistický prehľad</strong> o možnom rozpočte
                  pre váš projekt v podmienkach juhozápadného Slovenska. Ide o
                  orientačné hodnoty – konkrétnu ponuku pripravíme po osobnej
                  konzultácii.
                </p>

                <div className="bg-white/95 rounded-2xl border border-[#d4ddf4] shadow-[0_18px_50px_rgba(148,163,184,0.45)] p-5 md:p-6 space-y-5">
                  {/* Projekt típus */}
                  <div>
                    <label className="block text-xs font-semibold text-[#6b7280] mb-1.5 uppercase tracking-[0.14em]">
                      Typ projektu
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
                        Rodinný dom
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
                        Rekonštrukcia
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
                        Komerčný / priemyselný objekt
                      </button>
                    </div>
                  </div>

                  {/* Plocha + standard */}
                  <div className="grid sm:grid-cols-[1.2fr,0.9fr] gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#6b7280] mb-1.5 uppercase tracking-[0.14em]">
                        Úžitková plocha
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          min={0}
                          placeholder="napr. 140"
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
                        Štandard vyhotovenia
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
                          Štandard
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
                          Premium
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Demoláció */}
                  <div className="border-t border-[#e2e8f0] pt-4 space-y-3">
                    <label className="flex items-center gap-2 text-sm font-semibold text-[#1f2937]">
                      <input
                        type="checkbox"
                        checked={hasDemolition}
                        onChange={(e) => setHasDemolition(e.target.checked)}
                        className="h-4 w-4 rounded border-[#cbd5f0] text-[#2563eb] focus:ring-[#bfdbfe]"
                      />
                      Je potrebné aj odstránenie / demolácia existujúceho objektu?
                    </label>

                    {hasDemolition && (
                      <div>
                        <label className="block text-xs font-semibold text-[#6b7280] mb-1.5 uppercase tracking-[0.14em]">
                          Odhadovaná plocha na demoláciu
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            min={0}
                            placeholder="napr. 90"
                            value={demolitionArea}
                            onChange={(e) => setDemolitionArea(e.target.value)}
                            className="w-full rounded-xl border border-[#cbd5f0] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#60a5fa] focus:ring-2 focus:ring-[#bfdbfe]"
                          />
                          <span className="text-xs text-[#6b7280] font-semibold">
                            m²
                          </span>
                        </div>
                        <p className="mt-1 text-[11px] text-[#9ca3af]">
                          Zahŕňa búracie práce, stroje a odvoz odpadu
                          (orientačne).
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Projekt + VR opciók */}
                  <div className="border-t border-[#e2e8f0] pt-4 space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold text-[#1f2937]">
                      <input
                        type="checkbox"
                        checked={includeProjectDocs}
                        onChange={(e) => setIncludeProjectDocs(e.target.checked)}
                        className="h-4 w-4 rounded border-[#cbd5f0] text-[#2563eb] focus:ring-[#bfdbfe]"
                      />
                      Projektdokumentácia (architektúra, profesie)
                    </label>
                    <label className="flex items-center gap-2 text-sm font-semibold text-[#1f2937]">
                      <input
                        type="checkbox"
                        checked={includeVr}
                        onChange={(e) => setIncludeVr(e.target.checked)}
                        className="h-4 w-4 rounded border-[#cbd5f0] text-[#2563eb] focus:ring-[#bfdbfe]"
                      />
                      VR / 3D vizualizácia projektu
                    </label>
                  </div>

                  <p className="text-[11px] text-[#9ca3af]">
                    Výsledky sú orientačné – finálna cena závisí od projektu,
                    materiálov a konkrétneho zadania. Presnú ponuku pripravíme po
                    krátkej konzultácii a prehliadke podkladov.
                  </p>
                </div>
              </div>

              {/* JOBB – eredmény + grafika */}
              <div className="space-y-4 md:space-y-5">
                <div className="bg-white/95 rounded-2xl border border-[#d4ddf4] shadow-[0_18px_50px_rgba(148,163,184,0.5)] p-5 md:p-6">
                  <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#1f2937]">
                    Odhad nákladov
                  </h2>
                  {renderResult()}
                </div>

                {/* Illusztráció + bizalom szöveg */}
                <div className="bg-gradient-to-r from-[#1f4fa5] via-[#3b82f6] to-[#60a5fa] rounded-2xl p-[1px] shadow-[0_18px_50px_rgba(37,99,235,0.55)]">
                  <div className="bg-white/95 rounded-2xl p-4 md:p-5 flex gap-4 md:gap-5 items-center">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border border-[#d1ddff] shadow-[0_10px_28px_rgba(148,163,184,0.6)]">
                      <Image
                        src="/house-blueprint.jpeg"
                        alt="Projekt a riadenie stavby"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-xs md:text-sm text-[#1f2937]">
                      <div className="font-semibold mb-1">
                        Čísla berte ako prvý orientačný rámec.
                      </div>
                      <p className="text-[#4b5563]">
                        Po úvodnom stretnutí vám pripravíme{" "}
                        <strong>konkrétnejší a presný rozpočet</strong>,
                        prispôsobený vášmu pozemku, technológiám a časovým
                        požiadavkám.
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