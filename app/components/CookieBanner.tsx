"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

type ConsentState = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  ts: number;
  v: number;
};

const STORAGE_KEY = "pf_consent_v1";
const CONSENT_VERSION = 1;

// Consent Mode v2 paraméterek (GTM + GA4 kompatibilis)
function applyConsent(consent: ConsentState) {
  if (typeof window === "undefined") return;

  // gtag stub: GTM a dataLayerből fogja felvenni
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).gtag =
    (window as any).gtag ||
    function gtag() {
      (window as any).dataLayer.push(arguments);
    };

  const analyticsGranted = consent.analytics ? "granted" : "denied";
  const adsGranted = consent.marketing ? "granted" : "denied";

  (window as any).gtag("consent", "update", {
    analytics_storage: analyticsGranted,
    ad_storage: adsGranted,
    ad_user_data: adsGranted,
    ad_personalization: adsGranted,
  });
}

function loadStored(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (!parsed || parsed.v !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

function saveStored(consent: ConsentState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
}

export default function CookieBanner() {
  const pathname = usePathname() || "/";
  const isHu = pathname === "/hu" || pathname.startsWith("/hu/");
  const lang = isHu ? "hu" : "sk";

  const t = useMemo(() => {
    if (lang === "hu") {
      return {
        title: "Cookie beállítások",
        desc:
          "A weboldal működéséhez szükséges cookie-kat használunk. Az analitika segít javítani a szolgáltatást, a marketing pedig releváns ajánlatokat támogat. Te döntesz.",
        necessary: "Szükséges (mindig aktív)",
        analytics: "Analitika (GA4)",
        marketing: "Marketing (hirdetések)",
        acceptAll: "Összes elfogadása",
        rejectAll: "Elutasítás",
        settings: "Beállítások",
        save: "Mentés",
        manage: "Cookie-k kezelése",
        policy: "Adatkezelési tájékoztató",
        policyHref: "/hu/adatkezeles",
      };
    }
    return {
      title: "Nastavenia cookies",
      desc:
        "Používame cookies potrebné na fungovanie webu. Analytika pomáha zlepšovať služby, marketing podporuje relevantné ponuky. Rozhodnutie je na vás.",
      necessary: "Nevyhnutné (vždy aktívne)",
      analytics: "Analytika (GA4)",
      marketing: "Marketing (reklama)",
      acceptAll: "Prijať všetko",
      rejectAll: "Odmietnuť",
      settings: "Nastavenia",
      save: "Uložiť",
      manage: "Spravovať cookies",
      policy: "Ochrana osobných údajov",
      policyHref: "/ochrana-osobnych-udajov",
    };
  }, [lang]);

  const [open, setOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const stored = loadStored();
    if (!stored) {
      setOpen(true);
      return;
    }
    // ha már van consent, alkalmazzuk
    setAnalytics(stored.analytics);
    setMarketing(stored.marketing);
    applyConsent(stored);
    setOpen(false);
  }, []);

  function acceptAll() {
    const consent: ConsentState = {
      necessary: true,
      analytics: true,
      marketing: true,
      ts: Date.now(),
      v: CONSENT_VERSION,
    };
    saveStored(consent);
    applyConsent(consent);
    setOpen(false);
    setShowSettings(false);
  }

  function rejectAll() {
    const consent: ConsentState = {
      necessary: true,
      analytics: false,
      marketing: false,
      ts: Date.now(),
      v: CONSENT_VERSION,
    };
    saveStored(consent);
    applyConsent(consent);
    setOpen(false);
    setShowSettings(false);
  }

  function saveCustom() {
    const consent: ConsentState = {
      necessary: true,
      analytics,
      marketing,
      ts: Date.now(),
      v: CONSENT_VERSION,
    };
    saveStored(consent);
    applyConsent(consent);
    setOpen(false);
    setShowSettings(false);
  }

  // kis “kezelés” gomb, ha már választott
  const showManageButton = !open;

  return (
    <>
      {showManageButton && (
        <button
          type="button"
          onClick={() => {
            setOpen(true);
            setShowSettings(true);
          }}
          className="fixed bottom-5 left-5 z-[60] rounded-full bg-white/90 backdrop-blur px-4 py-2 text-xs font-semibold text-[#1e3a8a] border border-[#d4ddee] shadow-[0_10px_30px_rgba(145,163,185,0.35)] hover:scale-[1.02] transition"
        >
          {t.manage}
        </button>
      )}

      {open && (
        <div className="fixed inset-0 z-[70] flex items-end md:items-center justify-center p-4">
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/25"
            onClick={() => setOpen(false)}
          />

          {/* card */}
          <div className="relative w-full max-w-2xl rounded-2xl border border-[#d4ddee] bg-white/95 backdrop-blur shadow-[0_18px_60px_rgba(15,23,42,0.25)] overflow-hidden">
            <div className="p-6 md:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-[#0f172a]">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-[15px] text-[#475569] leading-relaxed">
                    {t.desc}
                  </p>
                </div>

                <button
                  type="button"
                  className="text-[#64748b] hover:text-[#0f172a] text-sm"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href={t.policyHref}
                  className="text-xs md:text-sm text-[#1d4ed8] font-semibold hover:underline"
                >
                  {t.policy}
                </a>
                <span className="text-xs text-[#94a3b8]">
                  ProForm Consulting
                </span>
              </div>

              {/* settings */}
              {showSettings && (
                <div className="mt-5 grid gap-3">
                  <div className="rounded-xl border border-[#e6eefc] bg-[#f8fbff] p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-[#1e3a8a]">
                          {t.necessary}
                        </p>
                        <p className="text-xs text-[#64748b] mt-1">
                          (session, biztonság, alap funkciók)
                        </p>
                      </div>
                      <div className="text-xs font-bold text-[#16a34a]">
                        ON
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#e6eefc] bg-[#f8fbff] p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-[#1e3a8a]">
                          {t.analytics}
                        </p>
                        <p className="text-xs text-[#64748b] mt-1">
                          oldalak, interakciók, teljesítmény
                        </p>
                      </div>

                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={analytics}
                          onChange={(e) => setAnalytics(e.target.checked)}
                        />
                        <span
                          className={`w-11 h-6 rounded-full transition border ${
                            analytics
                              ? "bg-[#2563eb] border-[#1d4ed8]"
                              : "bg-slate-200 border-slate-300"
                          }`}
                        >
                          <span
                            className={`block w-5 h-5 bg-white rounded-full mt-0.5 transition ${
                              analytics ? "ml-5" : "ml-0.5"
                            }`}
                          />
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#e6eefc] bg-[#f8fbff] p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-[#1e3a8a]">
                          {t.marketing}
                        </p>
                        <p className="text-xs text-[#64748b] mt-1">
                          remarketing, hirdetésmérés
                        </p>
                      </div>

                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={marketing}
                          onChange={(e) => setMarketing(e.target.checked)}
                        />
                        <span
                          className={`w-11 h-6 rounded-full transition border ${
                            marketing
                              ? "bg-[#2563eb] border-[#1d4ed8]"
                              : "bg-slate-200 border-slate-300"
                          }`}
                        >
                          <span
                            className={`block w-5 h-5 bg-white rounded-full mt-0.5 transition ${
                              marketing ? "ml-5" : "ml-0.5"
                            }`}
                          />
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* actions */}
              <div className="mt-6 flex flex-col md:flex-row gap-3">
                <button
                  type="button"
                  onClick={acceptAll}
                  className="w-full md:w-auto flex-1 py-3 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white font-semibold text-sm shadow-[0_12px_35px_rgba(37,99,235,0.45)] hover:scale-[1.01] active:scale-100 transition"
                >
                  {t.acceptAll}
                </button>

                <button
                  type="button"
                  onClick={rejectAll}
                  className="w-full md:w-auto py-3 px-6 rounded-full bg-white text-[#0f172a] font-semibold text-sm border border-[#d4ddee] hover:bg-slate-50 transition"
                >
                  {t.rejectAll}
                </button>

                {!showSettings ? (
                  <button
                    type="button"
                    onClick={() => setShowSettings(true)}
                    className="w-full md:w-auto py-3 px-6 rounded-full bg-white text-[#1e3a8a] font-semibold text-sm border border-[#d4ddee] hover:bg-slate-50 transition"
                  >
                    {t.settings}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={saveCustom}
                    className="w-full md:w-auto py-3 px-6 rounded-full bg-white text-[#1e3a8a] font-semibold text-sm border border-[#d4ddee] hover:bg-slate-50 transition"
                  >
                    {t.save}
                  </button>
                )}
              </div>

              <p className="mt-4 text-[11px] text-[#94a3b8]">
                {lang === "hu"
                  ? "A szükséges cookie-k minden esetben aktívak. A választás később bármikor módosítható."
                  : "Nevyhnutné cookies sú vždy aktívne. Voľbu môžete kedykoľvek zmeniť."}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}