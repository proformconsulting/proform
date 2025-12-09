// app/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import MainNav from "./components/MainNav";

export const metadata: Metadata = {
  title:
    "ProForm Consulting | Riadenie stavebných projektov, demolácie a komplexná koordinácia",
  description:
    "ProForm Consulting – profesionálny stavebný projekt manažment, demolácie objektov a komplexná koordinácia. VR vizualizácie, technická príprava, dohľad nad realizáciou, demolácie a odovzdanie stavby v jednej ruke.",
  keywords: [
    "ProForm Consulting",
    "riadenie stavebných projektov",
    "stavebná koordinácia",
    "stavebný projekt",
    "dohľad nad realizáciou",
    "VR vizualizácia",
    "3D vizualizácia",
    "výstavba rodinného domu",
    "rekonštrukcia",
    "demolácia objektov",
    "búracie práce",
    "demolácia fabriky",
    "demolácia hál",
    "stavebníctvo",
    "stavebná firma",
    "príprava projektu",
  ],
  alternates: {
    canonical: "https://proformconsulting.sk/",
    languages: {
      "hu-HU": "/hu",
      "sk-SK": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title:
      "ProForm Consulting – Stavebné projekty, demolácie a koordinácia v jednej ruke",
    description:
      "Kompletný stavebný projekt manažment a demolácie: projektovanie, technická príprava, VR vizualizácie, koordinácia realizácie, kontrola termínov a kvality.",
    url: "https://proformconsulting.sk/",
    type: "website",
    siteName: "ProForm Consulting",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD – štruktúrované dáta pre úvodnú stránku
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ProForm Consulting",
  description:
    "Štúdio pre riadenie a koordináciu stavebných projektov – rodinné domy, rekonštrukcie, demolačné projekty, komerčné a priemyselné objekty s kompletnou prípravou, demoláciou a koordináciou realizácie v juhozápadnom Slovensku.",
  url: "https://proformconsulting.sk/",
  areaServed: "Juhovýchodné Slovensko",
  serviceType: [
    "riadenie stavebných projektov",
    "stavebná koordinácia",
    "VR a 3D vizualizácia",
    "výstavba rodinných domov",
    "rekonštrukcie",
    "demolácia objektov",
    "demolačné projekty",
    "komerčné a priemyselné objekty",
  ],
  email: "proformconsulting@azet.sk",
};

export default function HomeSk() {
  return (
    <>
      <main
        id="top"
        className="min-h-screen bg-[#f5f7fb] text-slate-900 relative overflow-hidden"
      >
        <MainNav />

        {/* SEO: JSON-LD */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Pozadie – aurárny efekt značky */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#d7e3ff] blur-[200px] opacity-70" />
        <div className="pointer-events-none absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full bg-[#c4d9ff] blur-[220px] opacity-60" />
        <div className="pointer-events-none absolute bottom-[-260px] left-1/4 w-[460px] h-[460px] rounded-full bg-[#e0e6f5] blur-[180px] opacity-80" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_top,#e0e7ff_0,#f5f7fb_55%)] mix-blend-screen" />

        {/* HERO SEKCIA */}
        <section
          className="relative w-full pt-24 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-white/95 via-[#f2f5fd]/96 to-[#eef2fb]"
          aria-labelledby="hero-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-5 md:px-6 text-center relative z-10">
            {/* LOGO AURA */}
            <div className="relative mb-10 flex justify-center">
              <div className="absolute w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] md:w-[460px] md:h-[460px] rounded-full bg-gradient-to-r from-[#1f4fa5] via-[#8fb3ff] to-[#1f4fa5] blur-[140px] opacity-80" />
              <div className="relative w-[170px] h-[170px] sm:w-[200px] sm:h-[200px] md:w-[230px] md:h-[230px] rounded-full overflow-hidden ring-[2.5px] ring-[#b8c9ff]/90 bg-white shadow-[0_0_80px_rgba(44,99,199,0.55)]">
                <Image
                  src="/proformconsulting-logo.jpeg"
                  alt="ProForm Consulting logo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 180px, 230px"
                  priority
                />
              </div>
            </div>

            {/* NADPIS, PODNADPIS, LEAD TEXT */}
            <h1 id="hero-heading" className="mb-4">
              <span className="inline-block text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#64748b] mb-3">
                Prémiové riadenie stavebných a demolačných projektov
              </span>
              <span className="block text-[1.8rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-[#1f4fa5] via-[#3e6fb8] to-[#7fa4dd] bg-clip-text text-transparent">
                Váš stavebný projekt pod maximálnou kontrolou – od návrhu až po
                odovzdanie kľúčov.
              </span>
            </h1>

            <p className="text-[#334155] text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-6">
              Tím, pre ktorý riešenie problémov a kvalitná realizácia nie sú
              úlohou, ale odbornou identitou.
            </p>

            <div className="w-20 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-[#2563eb] to-transparent rounded-full mb-6 mx-auto" />

            <p className="text-[#4b5563] text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-10">
              Stavebný projekt alebo demolácia v skutočnosti nie sú o tehlách,
              ale o desiatkach navzájom prepojených rozhodnutí, povolení,
              odborníkov, termínov, dodávateľov a o systéme, ktorý nedovolí, aby
              sa projekt rozpadol.
              <br />
              <br />
              ProForm Consulting prináša práve tento systém: profesionálne,
              transparentné a zodpovedné riadenie projektu. Od návrhu cez VR
              vizualizácie a demolačné procesy až po dohľad nad realizáciou –
              všetko držíme v jednej ruke, aby realizácia prebehla stabilne,
              predvídateľne a vo vysokej kvalite.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="#contact"
                className="px-7 md:px-8 py-3 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white text-sm md:text-base font-semibold shadow-[0_12px_35px_rgba(37,99,235,0.7)] hover:scale-105 active:scale-100 transition"
              >
                Chcem profesionálne riadenie projektu
              </a>
              <a
                href="#contact"
                className="px-7 md:px-8 py-3 rounded-full border border-[#93c5fd] bg-white/80 text-[#1e3a8a] text-sm md:text-base font-semibold hover:bg-[#e0edff] transition"
              >
                Stručne opíšem svoj projekt
              </a>
            </div>
          </div>
        </section>

        {/* VR / 3D SEKCIA */}
        <section
          className="relative py-16 md:py-20"
          aria-labelledby="vr-heading"
        >
          <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                id="vr-heading"
                className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] bg-clip-text text-transparent"
              >
                Skôr než investujete väčšie sumy, prejdite si plánovaný objekt
                vo VR a pozrite si svoju predstavu vopred
              </h2>

              <p className="text-[#4b5563] mb-4 text-sm md:text-base leading-relaxed">
                VR a 3D vizualizácia dnes nie sú atrakciou, ale nástrojom na
                zníženie rizika. V reálnom meradle si môžete prejsť plánovanú
                budovu, obchod alebo halu, vidieť svetelné podmienky, priestorové
                vzťahy, umiestnenie otvorov, a dokonca aj návrhy pre plochu po
                demolácii.
                <br />
                <br />
                Namiesto rozhodovania z papiera pri miliónových položkách sa
                môžete spoľahnúť na reálny vizuálny zážitok. Vyhnete sa tak
                zbytočným objednávkam materiálu, spätným búračkám a situáciám
                typu „takto som si to nepredstavoval“.
              </p>

              <ul className="text-[#475569] text-xs md:text-sm space-y-2">
                <li>• Prehliadka interiéru aj exteriéru v reálnom meradle</li>
                <li>
                  • Testovanie materiálov, farieb a dispozičných variantov ešte
                  pred realizáciou alebo demoláciou
                </li>
                <li>
                  • Vopred naplánované postupy demolácie aj pri väčších
                  objektoch
                </li>
                <li>
                  • Vizualizácie na podporu rozhodovania – menej improvizácie,
                  viac predvídateľnosti
                </li>
              </ul>
            </div>

            <div className="grid gap-4">
              <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden border border-[#d0d7e6] shadow-[0_16px_40px_rgba(148,163,184,0.6)]">
                <Image
                  src="/services-vr.jpeg"
                  alt="VR prehliadka stavebného a demolačného projektu"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/45 via-transparent to-[#2563eb]/45" />
              </div>

              <div className="relative h-36 md:h-40 rounded-2xl overflow-hidden border border-[#d0d7e6] shadow-[0_12px_32px_rgba(148,163,184,0.55)]">
                <Image
                  src="/house-blueprint.jpeg"
                  alt="Stavebný pôdorys, demolačný plán a technická príprava"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* PROJEKTY / SLUŽBY – ROZŠÍRENÉ */}
        <section
          className="py-18 md:py-20 bg-gradient-to-b from-[#eef2ff] via-[#f5f7ff] to-[#eef2ff]"
          aria-labelledby="projects-heading"
        >
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h2
              id="projects-heading"
              className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] bg-clip-text text-transparent"
            >
              V čom sa na nás môžete spoľahnúť? Komplexné riešenia pre výstavbu
              aj demolácie
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  img: "/project-family-house.jpg",
                  title: "Rodinné domy a obytné budovy",
                  desc: "Výstavba nových rodinných domov a menších obytných objektov – od prípravy pozemku až po odovzdanie kľúčov. Každý krok procesu je koordinovaný.",
                },
                {
                  img: "/project-renovation.jpeg",
                  title: "Rekonštrukcie, prestavby, vnútorné búračky",
                  desc: "Modernizácia bytov a domov, búranie priečok, otváranie priestorov, zmeny konštrukcie. Organizované tak, aby nebol dom mesiace rozbitý a neobývateľný.",
                },
                {
                  img: "/project-apartment.jpeg",
                  title: "Výstavba priemyselných hál, skladov a fabrík",
                  desc: "Realizácia veľkých projektov, kde rozhoduje každý deň. Termíny, rozpočet a kvalita pod kontrolou, s jasnými reportmi.",
                },
                {
                  img: "/project-demolition.jpeg",
                  title: "Demolácie – od menších objektov po továrne",
                  desc: "Demolácie rodinných domov, vedľajších objektov, priemyselných hál a fabrík. Obhliadka, zabezpečenie, odvoz materiálu a dokumentácia v jednej ruke.",
                },
                {
                  img: "/project-rescue.jpeg",
                  title: "Záchrana problémových projektov",
                  desc: "Ak sa realizácia zasekla, mešká alebo sa objavili vážne nedostatky, vstupujeme do procesu, zhodnotíme stav a nastavíme nový, funkčný postup.",
                },
                {
                  img: "/project-coordination.jpeg",
                  title: "Kompletné riadenie projektu a tímová koordinácia",
                  desc: "ProForm Consulting projekt len nekontroluje – my ho riadime. Organizujeme prácu majstrov, harmonogram, logistiku materiálu a sledovanie nákladov.",
                },
              ].map((p) => (
                <article
                  key={p.title}
                  className="rounded-2xl overflow-hidden bg-white/95 border border-[#d4ddf4] shadow-[0_14px_36px_rgba(148,163,184,0.4)] hover:shadow-[0_18px_48px_rgba(148,163,184,0.55)] transition"
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
                    <h3 className="font-semibold text-sm md:text-base mb-1 text-[#111827]">
                      {p.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* REFERENCIE / RECENZIE */}
        <section
          className="py-16 md:py-20 bg-white"
          aria-labelledby="testimonials-heading"
        >
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <h2
              id="testimonials-heading"
              className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-[#4b5563] via-[#1d4ed8] to-[#60a5fa] bg-clip-text text-transparent"
            >
              Klienti, ktorí s nami už spolupracovali – namiesto chaosu zažili
              riešenia
            </h2>

            <p className="text-[#4b5563] text-sm md:text-base mb-8 max-w-3xl">
              V spätnej väzbe našich klientov sa opakujú tri kľúčové prvky:
              rýchlosť reakcie, zladený tím a to, že namiesto výhovoriek dostali
              reálne riešenia.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <article className="bg-[#f5f7ff] border border-[#d4ddf4] rounded-2xl p-5 shadow-[0_10px_30px_rgba(148,163,184,0.4)]">
                <p className="text-sm md:text-[0.9rem] text-[#374151] leading-relaxed mb-4">
                  „Nemyslela som si, že môže byť stavba takto prehľadná. Tím
                  ProForm reagoval rýchlo na každú otázku a počas celého procesu
                  som cítila, že niekto projekt skutočne drží v rukách.“
                </p>
                <p className="text-xs font-semibold text-[#1f2937]">
                  N. Andrea
                  <span className="block text-[0.7rem] font-normal text-[#6b7280]">
                    výstavba rodinného domu
                  </span>
                </p>
              </article>

              <article className="bg-[#f5f7ff] border border-[#d4ddf4] rounded-2xl p-5 shadow-[0_10px_30px_rgba(148,163,184,0.4)]">
                <p className="text-sm md:text-[0.9rem] text-[#374151] leading-relaxed mb-4">
                  „Demolácie som sa úprimne bál. Kvôli veľkosti objektu a
                  rizikám viaceré firmy cúvli. ProForm bol na mieste do 48
                  hodín, urobil obhliadku a pripravil harmonogram, ktorý
                  fungoval na deň presne.“
                </p>
                <p className="text-xs font-semibold text-[#1f2937]">
                  K. Zsolt
                  <span className="block text-[0.7rem] font-normal text-[#6b7280]">
                    demolácia priemyselnej haly
                  </span>
                </p>
              </article>

              <article className="bg-[#f5f7ff] border border-[#d4ddf4] rounded-2xl p-5 shadow-[0_10px_30px_rgba(148,163,184,0.4)]">
                <p className="text-sm md:text-[0.9rem] text-[#374151] leading-relaxed mb-4">
                  „Ich najväčšou hodnotou je rýchle konanie. Keď vznikol
                  problém, nečakali sme týždne na odpoveď. Tím bol zladený,
                  každý vedel, čo má robiť – a to je v dnešnom stavebníctve
                  skôr výnimka.“
                </p>
                <p className="text-xs font-semibold text-[#1f2937]">
                  M. Erika
                  <span className="block text-[0.7rem] font-normal text-[#6b7280]">
                    rekonštrukcia a prestavba
                  </span>
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* KONTAKT / CTA */}
        <section
          id="contact"
          className="py-20 md:py-24 bg-[#f5f7ff]"
          aria-labelledby="contact-heading"
        >
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#d4ddf4] shadow-[0_18px_50px_rgba(148,163,184,0.45)]">
              <h2
                id="contact-heading"
                className="text-2xl md:text-3xl font-bold mb-4 text-[#111827]"
              >
                Opíšte v niekoľkých vetách, čo sa chystá – alebo čo má zmiznúť
              </h2>

              <p className="text-[#4b5563] mb-6 max-w-xl text-sm md:text-base leading-relaxed">
                Čaká vás výstavba rodinného domu, rekonštrukcia, výstavba haly
                alebo demolácia? Stručne popíšte, v akej fáze sa projekt
                nachádza a aký je váš cieľ. Pozrieme sa, kde by mohol proces
                časovo alebo finančne „pretekať“ a pripravíme prehľadný návrh,
                ako vieme prevziať koordináciu. Vstúpiť vieme aj do už bežiacej
                realizácie, ktorá sa dnes skôr podobá chaosu ako riadenému
                procesu.
              </p>

              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                <div className="text-sm md:text-base text-[#111827]">
                  <div className="mb-1">
                    Email:{" "}
                    <a
                      href="mailto:proformconsulting@azet.sk"
                      className="text-[#1d4ed8] font-semibold hover:underline"
                    >
                      proformconsulting@gmail.com
                    </a>
                  </div>
                  <div className="text-xs md:text-sm opacity-80">
                    Telefonické konzultácie: Po–Pi 9:00–17:00
                  </div>
                </div>

                <a
                  href="mailto:proformconsulting@azet.sk?subject=Kontakt%20v%20s%C3%BAvislosti%20so%20stavebn%C3%BDm%20alebo%20demola%C4%8Dn%C3%BDm%20projektom"
                  className="inline-flex items-center justify-center px-9 py-3.5 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white font-semibold text-sm md:text-base shadow-[0_16px_45px_rgba(37,99,235,0.75)] hover:scale-105 active:scale-100 transition"
                >
                  Pošlem správu o mojom projekte
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}