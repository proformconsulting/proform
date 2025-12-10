// app/hu/szolgaltatasok/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import MainNav from "../../components/MainNav";

// --- SEO / Meta ---
export const metadata: Metadata = {
  title:
    "Szolgáltatások | ProForm Consulting – építési projekt és koordinációs iroda",
  description:
    "ProForm Consulting teljes körű projekt és építéskoordináció családi házakhoz, felújításokhoz, kereskedelmi és ipari épületekhez. Tervezés, engedélyezés, VR látvány, kivitelezés szervezés és műszaki ellenőrzés egy kézben.",
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
    "építési iroda Dél Szlovákia",
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
      "Egy iroda, amely az első ötlettől a kulcsátadásig kézben tartja az egész építkezést. Tervezés, engedélyek, mesterek, VR, kivitelezés és műszaki ellenőrzés átlátható rendszerben.",
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
      "Építési projekt és koordinációs iroda. Családi házak, felújítások, kereskedelmi és ipari épületek teljes körű szervezése Dél nyugat Szlovákia régiójában.",
    url: "https://proformconsulting.sk/hu/szolgaltatasok",
    areaServed: "Dél nyugat Szlovákia",
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

      {/* HERO – középre igazított prémium blokk */}
      <section
        className="relative w-full py-20 md:py-24 bg-gradient-to-b from-white/95 via-[#f2f5fd]/96 to-[#eef2fb]"
        aria-labelledby="services-hu-hero"
      >
        <div className="max-w-5xl mx-auto px-4 md:px-6 flex flex-col items-center text-center relative z-10">
          <p className="inline-block text-[11px] md:text-xs tracking-[0.25em] uppercase text-[#64748b] mb-3">
            Prémium építési projekt és koordinációs iroda
          </p>

          <h1
            id="services-hu-hero"
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-[#1f4fa5] via-[#3e6fb8] to-[#7fa4dd] text-transparent bg-clip-text"
          >
            Szolgáltatások egy kézben az egész építkezéshez
          </h1>

          <h2 className="text-lg md:text-xl font-semibold text-[#1f2937] max-w-2xl mb-5">
            Egy iroda amely összefogja és irányítja a családi ház felújítás
            üzleti tér vagy csarnok teljes folyamatát.
          </h2>

          <p className="text-[#4b5563] text-sm md:text-base leading-relaxed max-w-2xl">
            A célunk hogy az építkezés ne kaotikus és túlterhelő időszak
            legyen. Nem neked kell külön szakembereket engedélyeket és
            határidőket összehangolni. A tervezést a VR látványt az
            engedélyezést a kivitelezés szervezését és a műszaki ellenőrzést a
            mi csapatunk viszi te pedig egy átlátható rendszerben hozhatsz
            biztonságos döntéseket.
          </p>

          <div className="w-20 h-[2px] mx-auto mt-6 bg-gradient-to-r from-transparent via-[#1d4ed8] to-transparent rounded-full" />
        </div>

        {/* Értékblokkok a hero alatt egységes dobozokban */}
        <div className="max-w-5xl mx-auto px-4 md:px-6 mt-10">
          <div className="grid sm:grid-cols-3 gap-4 text-xs md:text-sm">
            <div className="bg-white/90 rounded-xl p-4 shadow-[0_10px_30px_rgba(148,163,184,0.35)] border border-[#d4ddf4]">
              <div className="text-[#2563eb] font-semibold mb-1">
                Kevesebb stressz
              </div>
              <p className="text-[#4b5563]">
                Nem kell szakembereket keresni egyeztetni vagy vitás
                helyzeteket kezelni ezeket a feladatokat mi vállaljuk át.
              </p>
            </div>
            <div className="bg-white/90 rounded-xl p-4 shadow-[0_10px_30px_rgba(148,163,184,0.35)] border border-[#d4ddf4]">
              <div className="text-[#2563eb] font-semibold mb-1">
                Szervezett haladás
              </div>
              <p className="text-[#4b5563]">
                Bevált partnerekkel dolgozunk a lépések egymásra épülnek nincs
                állandó újratervezés és kapkodás.
              </p>
            </div>
            <div className="bg-white/90 rounded-xl p-4 shadow-[0_10px_30px_rgba(148,163,184,0.35)] border border-[#d4ddf4]">
              <div className="text-[#2563eb] font-semibold mb-1">
                Egyértelmű felelősség
              </div>
              <p className="text-[#4b5563]">
                Egy iroda felel a folyamatért. Mindig tudod kihez fordulhatsz
                kérdés vagy döntés esetén.
              </p>
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
            Hogyan dolgozunk együtt hat lépésben
          </h2>
          <p className="text-[#4b5563] mb-8 text-sm md:text-base max-w-3xl">
            A folyamat elejétől a végéig egy kézben marad. Te pontosan látod
            hol tart a projekt a napi szervezés egyeztetés és ellenőrzés
            azonban a mi feladatunk.
          </p>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6 text-sm">
            {[
              {
                title: "Konzultáció és igényfelmérés",
                text: "Átbeszéljük a célokat a költségkeretet a határidőt és a műszaki elképzeléseket így meghatározzuk a projekt kereteit.",
              },
              {
                title: "Tervezés és VR látvány",
                text: "Elkészítjük a terveket majd VR bejáráson mutatjuk meg hogyan fog kinézni a kész otthon vagy üzlet.",
              },
              {
                title: "Engedélyek és adminisztráció",
                text: "A szükséges beadványokat hatósági egyeztetéseket és dokumentumokat mi kezeljük nem neked kell a hivatalokat járni.",
              },
              {
                title: "Szakemberek és cégek kiválasztása",
                text: "A saját kipróbált hálózatunkból állítjuk össze a csapatot minden szakág a megfelelő időben lép be.",
              },
              {
                title: "Kivitelezés koordinálása",
                text: "Ütemezés minőségellenőrzés jelenléti pontok és elszámolás a munkafolyamatot követjük és irányítjuk.",
              },
              {
                title: "Átvétel és kulcsátadás",
                text: "Ellenőrizzük a munkát elvégeztetjük a javításokat összegyűjtjük a dokumentációt majd átadjuk a kész ingatlant.",
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
                Lépj be az épületbe még az átadás előtt
              </div>
            </div>
          </div>

          <div>
            <h2
              id="hu-vr-heading"
              className="text-2xl md:text-3xl font-bold mb-3 text-[#1f2937]"
            >
              Nem csak rajzon látod a teret hanem be is járhatod
            </h2>
            <p className="text-[#4b5563] text-sm md:text-base mb-4 leading-relaxed">
              A VR technológia segítségével valós méretben sétálhatsz végig a
              jövőbeli házon vagy üzleten. Megérzed a terek arányát a
              belmagasságot a fényt és a bútorozást mielőtt egy tégla a helyére
              kerülne.
            </p>
            <ul className="text-[#475569] text-sm space-y-2">
              <li>• reális térérzet és arányok a tervek alapján</li>
              <li>• anyagok színek és világítás variálása a döntés előtt</li>
              <li>• kevesebb drága utólagos módosítás biztosabb döntések</li>
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
              Saját szakember hálózat szerződött partnerekkel
            </h2>
            <p className="text-[#4b5563] text-sm md:text-base mb-4 leading-relaxed">
              Nem véletlenszerűen választott alvállalkozókkal dolgozunk. Olyan
              csapatokkal működünk együtt akiknek a munkáját ismerjük és
              akikhez rendszeresen visszatérünk új projektek során is.
            </p>
            <p className="text-[#4b5563] text-sm md:text-base mb-4 leading-relaxed">
              Neked nem kell külön szakágakat keresni. Mi hozzuk a komplett
              rendszert az alapoktól a befejező munkákig.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs md:text-sm text-[#475569]">
              <ul className="space-y-1">
                <li>• tervezők és statikusok</li>
                <li>• alapozás és szerkezetépítés</li>
                <li>• tetőszerkezet és fedés</li>
                <li>• víz gáz és fűtés rendszerek</li>
              </ul>
              <ul className="space-y-1">
                <li>• villanyszerelés</li>
                <li>• burkolás és padlók</li>
                <li>• asztalos és bútor munkák</li>
                <li>• homlokzat és hőszigetelés</li>
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
                SZAKEMBER HÁLÓZAT
              </div>
              <div className="font-medium">Bevált mesterek stabil csapat</div>
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
              Beszéljünk a te projektedről
            </h2>

            <p className="text-[#4b5563] max-w-2xl mb-6 text-sm md:text-base">
              Írj pár sort arról mit tervezel. Új családi ház teljes
              felújítás csarnoképítés vagy üzleti épület. Válaszként egy
              átlátható lépésről lépésre felépített javaslatot kapsz amely
              megmutatja hogyan tudjuk átvenni a szervezést és a
              felelősséget.
            </p>

            <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-6">
              <div className="text-[#1f2937] text-sm md:text-base">
                <div className="mb-1">
                  Email{" "}
                  <a
                    href="mailto:proformconsulting@azet.sk"
                    className="font-semibold text-[#1d4ed8] hover:underline"
                  >
                    proformconsulting@gmail.com
                  </a>
                </div>
                <div className="opacity-80 text-sm">
                  Telefonszám egyeztetés hétfőtől péntekig 9 és 17 óra között
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