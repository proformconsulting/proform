// app/page.tsx  (szlovák főoldal)

import type { Metadata } from "next";
import Image from "next/image";
import MainNav from "./components/MainNav";

export const metadata: Metadata = {
  title:
    "ProForm Consulting | Riadenie stavebných projektov a kompletná koordinácia",
  description:
    "ProForm Consulting – profesionálny stavebný projektový manažment a kompletná koordinácia výstavby. VR vizualizácie, technická príprava, dohľad nad realizáciou a odovzdanie projektu v jednej ruke.",
  keywords: [
    "ProForm Consulting",
    "projektový manažment",
    "stavebná koordinácia",
    "stavebný projekt",
    "dohľad nad stavbou",
    "VR vizualizácia",
    "3D vizualizácia",
    "výstavba rodinného domu",
    "rekonštrukcia",
    "stavebníctvo",
    "projektová príprava",
  ],
  alternates: {
    canonical: "https://proformconsulting.sk",
    languages: {
      "sk-SK": "/",
      "hu-HU": "/hu",
      "x-default": "/",
    },
  },
  openGraph: {
    title:
      "ProForm Consulting – Stavebný projekt a koordinácia v jednej ruke",
    description:
      "Kompletný stavebný projektový manažment: príprava, plánovanie, VR vizualizácie, koordinácia remeselníkov, kontrola kvality a termínov.",
    url: "https://proformconsulting.sk",
    type: "website",
    siteName: "ProForm Consulting",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD pre SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ProForm Consulting",
  description:
    "Stavebné projektové a koordinačné štúdio – rodinné domy, rekonštrukcie, komerčné a priemyselné stavby s kompletným riadením výstavby v regióne juhozápadného Slovenska.",
  url: "https://proformconsulting.sk",
  email: "proformconsulting@azet.sk",
  areaServed: "Juhozápadné Slovensko",
  serviceType: [
    "stavebný projektový manažment",
    "stavebná koordinácia",
    "VR a 3D vizualizácie",
    "výstavba rodinného domu",
    "rekonštrukcie",
    "komerčné a priemyselné objekty",
  ],
};

export default function HomeSk() {
  return (
    <>
  

      <main
        id="top"
        className="min-h-screen bg-[#f5f7fb] text-slate-900 relative overflow-hidden"
      >
            <MainNav />
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* AURÁK – brand dizajn */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#d7e3ff] blur-[200px] opacity-70" />
        <div className="pointer-events-none absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full bg-[#c4d9ff] blur-[220px] opacity-60" />
        <div className="pointer-events-none absolute bottom-[-260px] left-1/4 w-[460px] h-[460px] rounded-full bg-[#e0e6f5] blur-[180px] opacity-80" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_top,#e0e7ff_0,#f5f7fb_55%)] mix-blend-screen" />

        {/* HERO */}
        <section className="relative w-full pt-24 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-white/95 via-[#f2f5fd]/96 to-[#eef2fb]">
          <div className="max-w-5xl mx-auto px-4 md:px-6 text-center relative z-10">
            {/* LOGO AURA */}
            <div className="relative mb-10 flex justify-center">
              <div className="absolute w-[360px] h-[360px] rounded-full bg-gradient-to-r from-[#1f4fa5] via-[#8fb3ff] to-[#1f4fa5] blur-[140px] opacity-80" />
              <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden ring-[2.5px] ring-[#b8c9ff]/90 bg-white shadow-[0_0_80px_rgba(44,99,199,0.55)]">
                <Image
                  src="/proformconsulting-logo.jpeg"
                  alt="ProForm Consulting logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* TEXT */}
            <h1 className="mb-6">
              <span className="inline-block text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#64748b] mb-3">
                Stavebné projektové a koordinačné štúdio
              </span>
              <span className="block text-[1.8rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#1f4fa5] via-[#3e6fb8] to-[#7fa4dd] text-transparent bg-clip-text leading-tight">
                Kompletné riadenie a koordinácia stavebných projektov
              </span>
            </h1>

            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#2563eb] to-transparent mx-auto mb-6" />

            <p className="text-[#4b5563] text-sm md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Zoberieme z vašich ramien celé bremeno výstavby – od prvého návrhu
              až po odovzdanie hotového projektu. Zabezpečíme plánovanie,
              vizualizácie, koordináciu majstrov, kontrolu termínov a kvality.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="#contact"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white font-semibold text-sm shadow-[0_12px_35px_rgba(37,99,235,0.7)] hover:scale-105 transition"
              >
                Nezáväzná konzultácia
              </a>

              <a
                href="#contact"
                className="px-8 py-3 rounded-full border border-[#93c5fd] bg-white/80 text-[#1e3a8a] hover:bg-[#e0edff] transition"
              >
                Dohodnúť stretnutie
              </a>
            </div>
          </div>
        </section>

        {/* VR / 3D */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] bg-clip-text text-transparent">
                Virtuálna realita a 3D vizualizácie
              </h2>

              <p className="text-[#4b5563] mb-4 text-sm md:text-base">
                Ešte pred realizáciou uvidíte, ako bude váš dom či projekt
                vyzerať. VR prehliadka eliminuje drahé chyby a zrýchľuje
                rozhodovanie.
              </p>

              <ul className="text-[#475569] text-xs md:text-sm space-y-2">
                <li>• realistná 3D prehliadka interiéru aj exteriéru</li>
                <li>• zmena materiálov a farieb v reálnom čase</li>
                <li>• presnejšie rozhodnutia, menej dodatočných úprav</li>
              </ul>
            </div>

            <div className="grid gap-4">
              <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden border border-[#d0d7e6] shadow-xl">
                <Image
                  src="/services-vr.jpeg"
                  alt="VR vizualizácia domu"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/45 via-transparent to-[#2563eb]/45" />
              </div>

              <div className="relative h-36 md:h-40 rounded-2xl overflow-hidden border border-[#d0d7e6] shadow-lg">
                <Image
                  src="/house-blueprint.jpeg"
                  alt="Stavebný výkres a technická dokumentácia"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PROJEKTY */}
        <section className="py-20 bg-gradient-to-b from-[#eef2ff] via-[#f5f7ff] to-[#eef2ff]">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] bg-clip-text text-transparent">
              Naše projekty
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  img: "/project-family-house.jpg",
                  title: "Rodinné domy",
                  desc: "Kompletné projektovanie, harmonogram, dohľad a koordinácia výstavby.",
                },
                {
                  img: "/project-renovation.jpeg",
                  title: "Rekonštrukcie",
                  desc: "Modernizácia domov a bytov s profesionálnym dohľadom.",
                },
                {
                  img: "/project-apartment.jpeg",
                  title: "Komerčné a priemyselné objekty",
                  desc: "Koordinácia výstavby hál, prevádzok, skladov a gastro priestorov.",
                },
              ].map((p) => (
                <article
                  key={p.title}
                  className="rounded-2xl overflow-hidden bg-white/95 border border-[#d4ddf4] shadow-lg hover:shadow-xl transition"
                >
                  <div className="relative h-40">
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-1">{p.title}</h3>
                    <p className="text-xs text-slate-600">{p.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* KONTAKT */}
        <section id="contact" className="py-20 bg-[#f5f7ff]">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#d4ddf4] shadow-[0_18px_50px_rgba(148,163,184,0.45)]">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Kontaktujte nás
              </h2>

              <p className="text-[#4b5563] mb-6 max-w-xl">
                Napíšte nám pár viet o vašom projekte – rodinný dom,
                rekonštrukcia alebo komerčný objekt. Pripravíme návrh
                spolupráce a vysvetlíme, ako môžeme prevziať celú koordináciu.
              </p>

              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div>
                  <div className="text-base mb-1">
                    Email:{" "}
                    <a
                      href="mailto:proformconsulting@azet.sk"
                      className="text-[#1d4ed8] font-semibold hover:underline"
                    >
                      proformconsulting@azet.sk
                    </a>
                  </div>
                  <div className="text-sm opacity-80">
                    Telefonická dostupnosť: PO–PI 9:00–17:00
                  </div>
                </div>

                <a
                  href="mailto:proformconsulting@azet.sk?subject=Kontakt%20oh%C4%BEadne%20stavebn%C3%A9ho%20projektu"
                  className="px-9 py-3.5 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white font-semibold shadow-lg hover:scale-105 transition"
                >
                  Odoslať správu
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}