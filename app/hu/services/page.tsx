// app/hu/szolgaltatasok/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import MainNav from "../../components/MainNav";

// --- SEO / Meta ---
export const metadata: Metadata = {
  title:
    "Szolgáltatások | ProForm Consulting – építési projekt- és koordinációs iroda",
  description:
    "ProForm Consulting – teljes körű projekt- és építéskoordináció: családi házak, felújítások, kereskedelmi és ipari épületek. Tervezés, engedélyeztetés, VR-látvány, kivitelezésszervezés és műszaki ellenőrzés egy kézben.",
  keywords: [
    "ProForm Consulting",
    "szolgáltatások",
    "építési projektmenedzsment",
    "építkezés koordináció",
    "műszaki ellenőrzés",
    "családi ház építés",
    "felújítás szervezés",
    "kereskedelmi épület",
    "ipari csarnok",
    "VR látványterv",
    "3D vizualizáció",
    "építési iroda Dél-Szlovákia",
  ],
  alternates: {
    canonical: "https://proformconsulting.sk/hu/szolgaltatasok",
    languages: {
      "hu-HU": "/hu/szolgaltatasok",
      "sk-SK": "/sluzby",
      "x-default": "/",
    },
  },
  openGraph: {
    title:
      "Szolgáltatások – ProForm Consulting | Teljes körű építési projektmenedzsment",
    description:
      "Egy iroda, amely az első ötlettől a kulcsátadásig kézben tartja az egész építkezést: tervezés, engedélyek, mesterek, VR, kivitelezés és műszaki ellenőrzés.",
    url: "https://proformconsulting.sk/hu/szolgaltatasok",
    type: "website",
    siteName: "ProForm Consulting",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function ServicesHuPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ProForm Consulting",
    description:
      "Építési projekt- és koordinációs iroda: családi házak, felújítások, kereskedelmi és ipari épületek teljes körű szervezése Dél-nyugat Szlovákia régiójában.",
    url: "https://proformconsulting.sk/hu/szolgaltatasok",
    areaServed: "Dél-nyugat Szlovákia",
    serviceType: [
      "építési projektmenedzsment",
      "építkezés koordináció",
      "műszaki ellenőrzés",
      "VR és 3D látványterv",
      "komplett felújítás szervezése",
    ],
    email: "proformconsulting@azet.sk",
  };

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-900 relative overflow-hidden">
      {/* NAV – benne van a nyelvváltó */}
      <MainNav />

      {/* SEO: JSON-LD struktúrált adat */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Háttér aurák */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#d7e3ff] blur-[200px] opacity-70" />
      <div className="pointer-events-none absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full bg-[#c4d9ff] blur-[220px] opacity-60" />
      <div className="pointer-events-none absolute bottom-[-260px] left-1/4 w-[460px] h-[460px] rounded-full bg-[#e0e6f5] blur-[180px] opacity-80" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_top,#e0e7ff_0,#f5f7fb_55%)] mix-blend-screen" />

      {/* HERO – fő üzenet */}
      <section
        className="relative w-full py-20 md:py-24 bg-gradient-to-b from-white/95 via-[#f2f5fd]/96 to-[#eef2fb]"
        aria-labelledby="services-hu-hero"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-[1.2fr,1fr] gap-10 items-center relative z-10">
          {/* Szöveg */}
          <div>
            <p className="text-[11px] md:text-xs tracking-[0.24em] uppercase text-[#64748b] mb-3">
              Építési projekt- és koordinációs iroda
            </p>
            <h1
              id="services-hu-hero"
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-[#1f4fa5] via-[#3e6fb8] to-[#7fa4dd] text-transparent bg-clip-text"
            >
              Az első ötletről a kulcsátadásig mindent átvállalunk.
            </h1>
            <h2 className="text-lg md:text-xl font-semibold text-[#1f2937] mb-5">
              Egy iroda, amely kézben tartja az egész építkezést.
            </h2>
            <p className="text-[#4b5563] text-sm md:text-base leading-relaxed mb-6 max-w-xl">
              A célunk, hogy az építkezés alatt ne ön rohangáljon a mesterek,
              engedélyek és papírok után. A teljes folyamatot – tervezést,
              VR-látványt, engedélyeztetést, kivitelezés-szervezést és
              műszaki ellenőrzést – a mi csapatunk intézi. Ön közben
              nyugodtan élheti az életét.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 text-xs md:text-sm">
              <div className="bg-white/90 rounded-xl p-4 shadow-[0_10px_30px_rgba(148,163,184,0.35)] border border-[#d4ddf4]">
                <div className="text-[#2563eb] font-semibold mb-1">
                  Nincs idegeskedés
                </div>
                <p className="text-[#4b5563]">
                  Nem kell mestereket keresni, időpontokat egyeztetni vagy
                  konfliktusokat kezelni.
                </p>
              </div>
              <div className="bg-white/90 rounded-xl p-4 shadow-[0_10px_30px_rgba(148,163,184,0.35)] border border-[#d4ddf4]">
                <div className="text-[#2563eb] font-semibold mb-1">
                  Gyorsabb haladás
                </div>
                <p className="text-[#4b5563]">
                  Szerződött, bevált partnerekkel dolgozunk – nem kell éveket
                  várni egy-egy szakemberre.
                </p>
              </div>
              <div className="bg-white/90 rounded-xl p-4 shadow-[0_10px_30px_rgba(148,163,184,0.35)] border border-[#d4ddf4]">
                <div className="text-[#2563eb] font-semibold mb-1">
                  Átlátható rendszer
                </div>
                <p className="text-[#4b5563]">
                  Minden lépésről tájékoztatjuk, de a szervezés és felelősség
                  végig a miénk.
                </p>
              </div>
            </div>
          </div>

          {/* Hero kép */}
          <div className="relative h-56 md:h-72 lg:h-80 rounded-3xl overflow-hidden border border-[#d0d7e6] bg-white shadow-[0_18px_50px_rgba(148,163,184,0.5)]">
            <Image
              src="/services-hero2.jpeg"
              alt="Építési projekt koordináció és irányítás"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 text-xs text-white/90">
              <div className="uppercase tracking-[0.22em] text-[10px]">
                TELJES KÖRŰ PROJEKTVEZETÉS
              </div>
              <div className="text-sm font-medium">
                Egy partner az egész építkezéséhez
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Folyamat – 6 lépés */}
      <section
        className="relative py-16 md:py-20"
        aria-labelledby="hu-process-heading"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2
            id="hu-process-heading"
            className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text"
          >
            Hogyan dolgozunk? Lépésről lépésre
          </h2>
          <p className="text-[#4b5563] mb-8 text-sm md:text-base max-w-3xl">
            Az egész folyamat egy kézben marad. Ön pontosan tudja, hol tart a
            projekt, de a napi szintű intézkedést mi végezzük.
          </p>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6 text-sm">
            {[
              {
                title: "1. Konzultáció & igényfelmérés",
                text: "Megismerjük az elképzeléseit, a költségkeretet és a határidőket, majd felrajzoljuk a projekt kereteit.",
              },
              {
                title: "2. Tervezés & VR-látvány",
                text: "3D modell és VR bejárás: már az elején láthatja, milyen lesz a kész otthon vagy üzlet.",
              },
              {
                title: "3. Engedélyek & adminisztráció",
                text: "Minden beadványt, papírt és hatósági egyeztetést mi intézünk – önnek semmit sem kell beadnia.",
              },
              {
                title: "4. Mesterek & cégek kiválasztása",
                text: "A saját, bevált hálózatunkból választjuk ki az optimális csapatot az adott projektre.",
              },
              {
                title: "5. Kivitelezés koordinálása",
                text: "Ütemezés, ellenőrzés, minőség, elszámolás – mi tartjuk kézben a folyamatot az alapoktól a befejezésig.",
              },
              {
                title: "6. Átvétel & kulcsátadás",
                text: "Ellenőrzés, hibajavítás, dokumentáció, majd kulcsrakész átadás. Ön már csak beköltözik.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="bg-white rounded-2xl p-5 border border-[#d4ddf4] shadow-[0_14px_36px_rgba(148,163,184,0.35)]"
              >
                <h3 className="text-[#1d4ed8] font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-[#4b5563] text-xs md:text-sm leading-relaxed">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VR blok */}
      <section
        className="relative py-16 md:py-18 bg-gradient-to-r from-[#e0ebff] via-[#f5f7ff] to-[#e0ebff]"
        aria-labelledby="hu-vr-heading"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden border border-[#c7d4f0] bg-white shadow-[0_18px_50px_rgba(148,163,184,0.5)]">
            <Image
              src="/services-vr.jpeg"
              alt="VR bejárás építkezés előtt"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/45 via-transparent to-[#2563eb]/45" />
            <div className="absolute bottom-3 left-4 text-xs md:text-sm text-white">
              <div className="uppercase tracking-[0.22em] text-[10px] md:text-[11px]">
                VR BEJÁRÁS
              </div>
              <div className="font-medium">
                Lépjen be otthonába még az építkezés előtt
              </div>
            </div>
          </div>

          <div>
            <h2
              id="hu-vr-heading"
              className="text-2xl md:text-3xl font-bold mb-3 text-[#1f2937]"
            >
              VR-szemüveg: mintha már kész lenne az otthona
            </h2>
            <p className="text-[#4b5563] text-sm md:text-base mb-4 leading-relaxed">
              A VR-technológia segítségével valós méretben sétálhat végig a
              jövőbeli házán vagy üzletén. Látja a tér érzetét, a fényt, a
              bútorokat, a burkolatokat – mintha már berendezett lenne.
            </p>
            <ul className="text-[#475569] text-sm space-y-2">
              <li>• reális térérzet és arányok</li>
              <li>• anyagok, színek, világítás variálása</li>
              <li>• magabiztos döntések, kevesebb drága utólagos módosítás</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Csapat / hálózat */}
      <section
        className="relative py-16 md:py-20"
        aria-labelledby="hu-team-heading"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2
              id="hu-team-heading"
              className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text"
            >
              Saját szakember-hálózat, szerződött partnerekkel
            </h2>
            <p className="text-[#4b5563] text-sm md:text-base mb-4 leading-relaxed">
              Nem a Google-ről választunk mestert az utolsó pillanatban. Olyan
              csapatokkal dolgozunk, akikkel évek óta együttműködünk, és
              pontosan tudjuk, milyen minőséget képviselnek.
            </p>
            <p className="text-[#4b5563] text-sm md:text-base mb-4 leading-relaxed">
              Önnek nem kell külön kőművest, villanyszerelőt, fűtésszerelőt,
              burkolót keresnie – mi hozzuk a komplett rendszert.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs md:text-sm text-[#475569]">
              <ul className="space-y-1">
                <li>• tervezők, statikusok</li>
                <li>• alapozás, szerkezetépítés</li>
                <li>• tetőfedés</li>
                <li>• víz–gáz–fűtés</li>
              </ul>
              <ul className="space-y-1">
                <li>• villanyszerelés</li>
                <li>• burkolás, padlók</li>
                <li>• bútor, asztalos munka</li>
                <li>• homlokzat, hőszigetelés</li>
              </ul>
            </div>
          </div>

          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden border border-[#d0d7e6] bg-white shadow-[0_18px_50px_rgba(148,163,184,0.5)]">
            <Image
              src="/services-team.jpeg"
              alt="Csapatmunka az építési irodában"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 text-xs md:text-sm text-white">
              <div className="uppercase tracking-[0.22em] text-[10px]">
                SZAKEMBER-HÁLÓZAT
              </div>
              <div className="font-medium">Bevált mesterek, stabil csapat</div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt CTA */}
      <section
        className="relative py-18 md:py-20 bg-[#f5f7ff]"
        aria-labelledby="hu-contact-heading"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#d4ddf4] shadow-[0_18px_50px_rgba(148,163,184,0.45)]">
            <h2
              id="hu-contact-heading"
              className="text-2xl md:text-3xl font-bold mb-3 text-[#1f2937]"
            >
              Beszéljünk az ön projektjéről
            </h2>

            <p className="text-[#4b5563] max-w-2xl mb-6 text-sm md:text-base">
              Írjon pár sort arról, mit szeretne – új családi ház, teljes
              felújítás vagy nagyobb üzleti / ipari épület. Válaszként egy
              átlátható, lépésről lépésre felépített javaslatot kap.
            </p>

            <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-6">
              <div className="text-[#1f2937] text-sm md:text-base">
                <div className="mb-1">
                  Email:{" "}
                  <a
                    href="mailto:proformconsulting@azet.sk"
                    className="font-semibold text-[#1d4ed8] hover:underline"
                  >
                    proformconsulting@azet.sk
                  </a>
                </div>
                <div className="opacity-80 text-sm">
                  Telefonszám, egyeztetés: H–P 9:00–17:00
                </div>
              </div>

              <a
                href="mailto:proformconsulting@azet.sk?subject=Érdeklődés%20a%20ProForm%20Consulting%20szolgáltatásai%20iránt"
                className="inline-flex items-center justify-center mt-2 md:mt-0 px-9 md:px-10 py-3.5 md:py-4 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white text-sm md:text-base font-semibold shadow-[0_16px_45px_rgba(37,99,235,0.75)] hover:scale-105 active:scale-100 transition"
              >
                Üzenet küldése
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}