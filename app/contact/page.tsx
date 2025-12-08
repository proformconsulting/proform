// app/contact/page.tsx
import type { Metadata } from "next";
import MainNav from "../components/MainNav";

// --- SEO ---
export const metadata: Metadata = {
  title: "Kontakt | ProForm Consulting – stavebné projekty a koordinácia",
  description:
    "Kontaktujte ProForm Consulting – koordinácia stavebných a demolačných projektov, nezáväzná konzultácia a orientačný rozpočet pre váš projekt.",
  alternates: {
    canonical: "https://proformconsulting.sk/contact",
    languages: {
      "sk-SK": "/contact",
      "hu-HU": "/hu/contact",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Kontakt – ProForm Consulting | Koordinácia a riadenie projektov",
    description:
      "Napíšte nám pár viet o vašom projekte – rodinný dom, rekonštrukcia alebo komerčný objekt. Dohodneme si konzultáciu a pripravíme orientačný rozpočet.",
    url: "https://proformconsulting.sk/contact",
    type: "website",
    siteName: "ProForm Consulting",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ProForm Consulting",
    description:
      "Kontakt na ProForm Consulting – koordinácia stavebných a demolačných projektov, projektový manažment a sieť overených partnerov na juhozápadnom Slovensku.",
    url: "https://proformconsulting.sk/contact",
    areaServed: "Juhozápadné Slovensko",
    email: "proformconsulting@azet.sk",
    telephone: "+421",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["Slovak", "Hungarian"],
    },
  };

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-900 relative overflow-hidden">
      {/* NAV – ugyanott, mint az O nás oldalon */}
      <MainNav />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* AURÁK – ugyanaz a háttér, mint az O nás oldalon */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#d7e3ff] blur-[200px] opacity-70" />
      <div className="pointer-events-none absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full bg-[#c4d9ff] blur-[220px] opacity-60" />
      <div className="pointer-events-none absolute bottom-[-260px] left-1/4 w-[460px] h-[460px] rounded-full bg-[#e0e6f5] blur-[180px] opacity-80" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_top,#e0e7ff_0,#f5f7fb_55%)] mix-blend-screen" />

      {/* HERO – ugyanaz a fejléces háttér, mint a Home/O nás tetején */}
      <section
        className="relative w-full pt-24 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-white/95 via-[#f2f5fd]/96 to-[#eef2fb]"
        aria-labelledby="contact-hero-heading"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-5 md:px-6 text-center relative z-10">
          <p className="text-[11px] md:text-xs tracking-[0.24em] uppercase text-[#64748b] mb-3">
            Stavebné projektové a koordinačné štúdio
          </p>

          <h1
            id="contact-hero-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#1f4fa5] via-[#3e6fb8] to-[#7fa4dd] text-transparent bg-clip-text"
          >
            Kontaktujte nás
          </h1>

          <div className="w-20 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-[#2563eb] to-transparent rounded-full mt-6 mb-4 mx-auto" />

          <p className="max-w-xl mx-auto text-[#475569] text-sm md:text-lg leading-relaxed">
            Máte otázky k projektu? Chcete nezáväznú konzultáciu alebo
            orientačný rozpočet? Napíšte nám pár viet o vašej stavbe – ozveme
            sa vám s ďalším postupom.
          </p>
        </div>
      </section>

      {/* KONTAKT BLOKY – dizájn egységes az About kártyáival */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* ĽAVÁ STRANA – kontaktné údaje */}
          <div className="bg-white/95 p-7 md:p-8 rounded-2xl shadow-[0_15px_45px_rgba(145,163,185,0.35)] border border-[#d4ddee]">
            <h2 className="text-2xl font-semibold mb-3 md:mb-4 text-[#1e3a8a]">
              Kontaktné údaje
            </h2>

            <p className="text-[#475569] mb-6 text-sm md:text-base leading-relaxed">
              Sme vám k dispozícii počas pracovných dní. Napíšte nám základné
              informácie o projekte – typ stavby, lokalita a približná plocha.
            </p>

            <div className="space-y-4 text-[#1f2937] text-sm md:text-base">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:proformconsulting@azet.sk"
                  className="text-[#1d4ed8] font-medium hover:underline"
                >
                  proformconsulting@azet.sk
                </a>
              </p>

              <p>
                <strong>Telefón:</strong>{" "}
                <span className="text-[#1d4ed8] font-medium">+421 —</span>
              </p>

              <p className="text-xs md:text-sm opacity-80">
                PO–PI: 9:00 – 17:00
              </p>
            </div>
          </div>

          {/* PRAVÁ STRANA – statický formulár */}
          <div className="bg-white/95 p-7 md:p-8 rounded-2xl shadow-[0_15px_45px_rgba(145,163,185,0.35)] border border-[#d4ddee]">
            <h2 className="text-2xl font-semibold mb-3 md:mb-4 text-[#1e3a8a]">
              Napíšte nám správu
            </h2>

            <p className="text-[#475569] mb-4 text-sm md:text-base leading-relaxed">
              Stručne popíšte projekt: novostavba alebo rekonštrukcia, plocha,
              lokalita a plánovaný termín. Čím konkrétnejšie informácie, tým
              presnejšiu orientačnú ponuku vieme pripraviť.
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#6b7280] mb-1">
                  Meno
                </label>
                <input
                  type="text"
                  placeholder="Vaše celé meno"
                  className="w-full px-4 py-3 rounded-xl border border-[#c9d6ef] text-sm bg-white/95 outline-none focus:border-[#60a5fa] focus:ring-2 focus:ring-[#bfdbfe]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#6b7280] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="vas@mail.sk"
                  className="w-full px-4 py-3 rounded-xl border border-[#c9d6ef] text-sm bg-white/95 outline-none focus:border-[#60a5fa] focus:ring-2 focus:ring-[#bfdbfe]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#6b7280] mb-1">
                  Správa
                </label>
                <textarea
                  placeholder="Stručný popis projektu..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-[#c9d6ef] text-sm bg-white/95 outline-none focus:border-[#60a5fa] focus:ring-2 focus:ring-[#bfdbfe] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white font-semibold text-sm md:text-base shadow-[0_12px_35px_rgba(37,99,235,0.5)] hover:scale-105 active:scale-100 transition"
              >
                Odoslať správu
              </button>

              <p className="text-[11px] text-[#9ca3af] text-center">
                Odoslaním správy súhlasíte s tým, že vás budeme kontaktovať
                ohľadom vášho projektu.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}