"use client";

import type { Metadata } from "next";
import { useState, useMemo } from "react";
import Image from "next/image";
import MainNav from "../components/MainNav";

// --- SEO / META ---
export const metadata: Metadata = {
  title:
    "Kalkulačka nákladov | ProForm Consulting – orientačný rozpočet stavby a demolácie",
  description:
    "Orientačný kalkulátor stavebných a demolačných nákladov v regióne juhozápadného Slovenska. Zadajte plochu a typ projektu – získate reálne cenové pásmo a rámcový rozpočet.",
  alternates: {
    canonical: "https://proformconsulting.sk/kalkulacka",
    languages: {
      "sk-SK": "/kalkulacka",
      "hu-HU": "/hu/kalkulator",
      "x-default": "/",
    },
  },
  openGraph: {
    title:
      "Orientačná kalkulačka nákladov – ProForm Consulting | Výstavba a demolácia",
    description:
      "Získajte rýchly a férový odhad nákladov na výstavbu rodinného domu, rekonštrukciu, komerčný objekt alebo demoláciu. Nastavené na reálne podmienky juhozápadného Slovenska.",
    url: "https://proformconsulting.sk/kalkulacka",
    type: "website",
    siteName: "ProForm Consulting",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// formázott euró árak
const currency = new Intl.NumberFormat("sk-SK", {
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

export default function CalculatorPage() {
  const [mode, setMode] = useState<ModeType>("build");
  const [projectType, setProjectType] = useState<ProjectType>("family");
  const [area, setArea] = useState<string>("");
  const [standard, setStandard] = useState<StandardType>("standard");
  const [hasDemolition, setHasDemolition] = useState<boolean>(false);
  const [demolitionArea, setDemolitionArea] = useState<string>("");
  const [includeVr, setIncludeVr] = useState<boolean>(false);

  // JSON-LD – struktúrált adat
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Orientačný kalkulátor stavebných a demolačných nákladov",
    provider: {
      "@type": "Organization",
      name: "ProForm Consulting",
    },
    areaServed: "Juhozápadné Slovensko",
    serviceType: [
      "Odhad nákladov na výstavbu rodinného domu",
      "Odhad nákladov na rekonštrukciu",
      "Odhad nákladov na komerčné a priemyselné stavby",
      "Odhad nákladov na demoláciu objektu",
      "Projektové riadenie a koordinácia stavby",
    ],
    url: "https://proformconsulting.sk/kalkulacka",
  };

  const result = useMemo<CalcResult | null>(() => {
    const a = Number(area) || 0;
    const demoExtra = hasDemolition ? Number(demolitionArea) || 0 : 0;

    // DEMOLÁCIA – iba búranie
    if (mode === "demolition") {
      if (a <= 0) return null;

      // juhozápadné Slovensko, zámerne mierne pod priemerným trhom
      const demoMinPerM2 = 32;
      const demoMaxPerM2 = 58;

      const demoMin = a * demoMinPerM2;
      const demoMax = a * demoMaxPerM2;

      // servis: dokumentácia + koordinácia demolácie
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

    // VÝSTAVBA / REKONŠTRUKCIA
    if (a <= 0) return null;

    let baseMinPerM2 = 0;
    let baseMaxPerM2 = 0;

    switch (projectType) {
      case "family":
        // nový rodinný dom – štandardne „na kľúč”
        baseMinPerM2 = 1100;
        baseMaxPerM2 = 1450;
        break;
      case "renovation":
        // komplexná rekonštrukcia bytu / domu
        baseMinPerM2 = 430;
        baseMaxPerM2 = 780;
        break;
      case "commercial":
        // hala, sklad, komerčný / priemyselný objekt
        baseMinPerM2 = 780;
        baseMaxPerM2 = 1200;
        break;
    }

    // štandard vs. premium
    let factorMin = 1;
    let factorMax = 1;
    if (standard === "premium") {
      factorMin = 1.06;
      factorMax = 1.14;
    }

    const buildMin = a * baseMinPerM2 * factorMin;
    const buildMax = a * baseMaxPerM2 * factorMax;

    // demolácia, ak treba zbúrať starý objekt
    const demoMinPerM2 = 32;
    const demoMaxPerM2 = 58;

    const demoMin = demoExtra > 0 ? demoExtra * demoMinPerM2 : 0;
    const demoMax = demoExtra > 0 ? demoExtra * demoMaxPerM2 : 0;

    const baseSubtotalMin = buildMin + demoMin;
    const baseSubtotalMax = buildMax + demoMax;

    // servis: projektdokumentácia + projektový manažment + koordinácia
    let serviceMinPercent = 0.075;
    let serviceMaxPercent = 0.105;

    const serviceBaseMin = baseSubtotalMin * serviceMinPercent;
    const serviceBaseMax = baseSubtotalMax * serviceMaxPercent;

    // VR / 3D – ak je zvolené, pripočítame k servisu
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
          Zadajte plochu a vyberte typ výpočtu. Kalkulátor vám ukáže{" "}
          <strong>atraktívne, ale reálne</strong> cenové pásmo pre váš projekt
          v regióne juhozápadného Slovenska.
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
              Výstavba / rekonštrukcia
            </span>
            <div className="text-right">
              <div className="font-semibold">
                {currency.format(buildMin)} – {currency.format(buildMax)}
              </div>
              <div className="text-[11px] text-[#9ca3af]">
                materiál + práca, podľa štandardu
              </div>
            </div>
          </div>
        )}

        {demoMin > 0 && (
          <div className="flex items-baseline justify-between gap-4 border-b border-[#e5e7eb] pb-2.5">
            <span className="text-xs uppercase tracking-[0.16em] text-[#6b7280]">
              Demolácia objektu
            </span>
            <div className="text-right">
              <div className="font-semibold">
                {currency.format(demoMin)} – {currency.format(demoMax)}
              </div>
              <div className="text-[11px] text-[#9ca3af]">
                búracie práce, stroje, odvoz odpadu (orientačne)
              </div>
            </div>
          </div>
        )}

        <div className="flex items-baseline justify-between gap-4 border-b border-[#e5e7eb] pb-2.5">
          <span className="text-xs uppercase tracking-[0.16em] text-[#6b7280]">
            Projekt + riadenie stavby
          </span>
          <div className="text-right">
            <div className="font-semibold">
              {currency.format(serviceMin)} – {currency.format(serviceMax)}
            </div>
            <div className="text-[11px] text-[#9ca3af]">
              projektdokumentácia, koordinácia, kontrola kvality
              {mode === "build" && " (VR zahrnuté, ak je zaškrtnuté)"}
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
              typické pásmo pri podobných projektoch v regióne
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
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* háttér aurák – egységes brand */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#d7e3ff] blur-[200px] opacity-70" />
        <div className="pointer-events-none absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full bg-[#c4d9ff] blur-[220px] opacity-60" />
        <div className="pointer-events-none absolute bottom-[-260px] left-1/4 w-[460px] h-[460px] rounded-full bg-[#e0e6f5] blur-[180px] opacity-80" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_top,#e0e7ff_0,#f5f7fb_55%)] mix-blend-screen" />

        {/* HERO + kalkulátor */}
        <section className="relative w-full pt-24 pb-16 md:pt-28 md:pb-24">
          <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-start">
              {/* BAL – szöveg + form */}
              <div>
                <p className="text-[11px] md:text-xs tracking-[0.24em] uppercase text-[#64748b] mb-3">
                  Orientačný výpočet nákladov
                </p>
                <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-[#1f4fa5] via-[#3e6fb8] to-[#7fa4dd] text-transparent bg-clip-text">
                  Orientačný kalkulátor stavebných nákladov
                </h1>
                <p className="text-[#4b5563] text-sm md:text-base mb-6 max-w-2xl">
                  Cieľom je dať vám{" "}
                  <strong>rýchly a férový odhad</strong> nákladov. Naše čísla sú
                  nastavené tak, aby boli{" "}
                  <strong>konkurencieschopné a dostupné</strong> oproti bežnej
                  ponuke v regióne. Presnú cenovú ponuku pripravíme po krátkej
                  konzultácii.
                </p>

                <div className="bg-white/95 rounded-2xl border border-[#d4ddf4] shadow-[0_18px_50px_rgba(148,163,184,0.45)] p-5 md:p-6 space-y-5">
                  {/* mód: výstavba vs demolácia */}
                  <div>
                    <label className="block text-xs font-semibold text-[#6b7280] mb-1.5 uppercase tracking-[0.14em]">
                      Typ výpočtu
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
                        Výstavba / rekonštrukcia
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
                        Iba demolácia objektu
                      </button>
                    </div>
                  </div>

                  {/* projekt típus – csak build módban */}
                  {mode === "build" && (
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
                  )}

                  {/* plocha + standard / alebo len plocha pri demolácii */}
                  <div className="grid sm:grid-cols-[1.2fr,0.9fr] gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#6b7280] mb-1.5 uppercase tracking-[0.14em]">
                        {mode === "build"
                          ? "Úžitková plocha stavby"
                          : "Plocha objektu na demoláciu"}
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

                    {mode === "build" && (
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
                    )}
                  </div>

                  {/* extra demolácia – len build módban */}
                  {mode === "build" && (
                    <div className="border-t border-[#e2e8f0] pt-4 space-y-3">
                      <label className="flex items-center gap-2 text-sm font-semibold text-[#1f2937]">
                        <input
                          type="checkbox"
                          checked={hasDemolition}
                          onChange={(e) =>
                            setHasDemolition(e.target.checked)
                          }
                          className="h-4 w-4 rounded border-[#cbd5f0] text-[#2563eb] focus:ring-[#bfdbfe]"
                        />
                        Treba pred výstavbou zbúrať existujúci objekt?
                      </label>

                      {hasDemolition && (
                        <div>
                          <label className="block text-xs font-semibold text-[#6b7280] mb-1.5 uppercase tracking-[0.14em]">
                            Plocha objektu na demoláciu
                          </label>
                          <div className="flex items-center gap-2">
                            <input
                              type="number"
                              min={0}
                              placeholder="napr. 90"
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
                            Zahŕňa búracie práce, stroje a odvoz odpadu
                            (orientačne).
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* VR – len build módban */}
                  {mode === "build" && (
                    <div className="border-t border-[#e2e8f0] pt-4 space-y-2">
                      <label className="flex items-center gap-2 text-sm font-semibold text-[#1f2937]">
                        <input
                          type="checkbox"
                          checked={includeVr}
                          onChange={(e) => setIncludeVr(e.target.checked)}
                          className="h-4 w-4 rounded border-[#cbd5f0] text-[#2563eb] focus:ring-[#bfdbfe]"
                        />
                        Chcem mať projekt aj vo VR / 3D prechode
                      </label>
                      <p className="text-[11px] text-[#9ca3af]">
                        VR je súčasťou nášho servisného balíka – suma sa
                        pripočíta k položke „Projekt + riadenie stavby“.
                      </p>
                    </div>
                  )}

                  <p className="text-[11px] text-[#9ca3af]">
                    Ide o informatívny výpočet. Skutočná cena závisí od
                    pozemku, materiálov, technológií a detailného zadania. Po
                    krátkom telefonáte vám pripravíme presnejšiu ponuku.
                  </p>
                </div>
              </div>

              {/* JOBB – eredmény + info box */}
              <div className="space-y-4 md:space-y-5">
                <div className="bg-white/95 rounded-2xl border border-[#d4ddf4] shadow-[0_18px_50px_rgba(148,163,184,0.5)] p-5 md:p-6">
                  <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#1f2937]">
                    Odhad nákladov
                  </h2>
                  {renderResult()}
                </div>

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
                        Čísla sú nastavené tak, aby boli konkurencieschopné.
                      </div>
                      <p className="text-[#4b5563]">
                        Po úvodnom stretnutí vám pripravíme{" "}
                        <strong>konkrétny rozpočet</strong>, kde zohľadníme
                        všetky detaily – od pozemku až po finálne materiály a
                        technológie.
                      </p>
                    </div>
                  </div>
                </div>
                {/* jobb vége */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}