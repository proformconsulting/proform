// app/hu/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import MainNav from "../components/MainNav";

export const metadata: Metadata = {
  title:
    "ProForm Consulting | Építési projektmenedzsment, bontás és teljes körű koordináció",
  description:
    "ProForm Consulting – professzionális építési projektmenedzsment, épületbontás és teljes körű építési koordináció. VR látványtervek, műszaki előkészítés, kivitelezői felügyelet, bontás és projektátadás egy kézben.",
  keywords: [
    "ProForm Consulting",
    "építési projektmenedzsment",
    "építési koordináció",
    "építőipari projekt",
    "kivitelezés felügyelet",
    "VR vizualizáció",
    "3D látványterv",
    "családi ház építés",
    "felújítás",
    "épületbontás",
    "bontás",
    "gyárbontás",
    "csarnok bontás",
    "építőipar",
    "építési vállalkozás",
    "projekt előkészítés",
  ],
  alternates: {
    canonical: "https://proformconsulting.sk/hu",
    languages: {
      "hu-HU": "/hu",
      "sk-SK": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title:
      "ProForm Consulting – Építési projektek, bontás és koordináció egy kézben",
    description:
      "Teljes körű építési projektmenedzsment és épületbontás: tervezés, műszaki előkészítés, VR látványtervek, kivitelezés koordináció, határidők és minőség kézben tartása.",
    url: "https://proformconsulting.sk/hu",
    type: "website",
    siteName: "ProForm Consulting",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD – struktúrált adat a nyitóoldalhoz
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ProForm Consulting",
  description:
    "Építési projekt- és koordinációs stúdió – családi házak, felújítások, bontási projektek, kereskedelmi és ipari épületek teljes körű tervezése, előkészítése, bontása és kivitelezési koordinációja Dél-nyugat Szlovákiában.",
  url: "https://proformconsulting.sk/hu",
  areaServed: "Dél-nyugat Szlovákia",
  serviceType: [
    "építési projektmenedzsment",
    "építési koordináció",
    "VR és 3D vizualizáció",
    "családi ház építés",
    "felújítás",
    "épületbontás",
    "bontási projekt",
    "kereskedelmi és ipari épületek",
  ],
  email: "proformconsulting@azet.sk",
};

export default function HomeHu() {
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

        {/* Háttér aurák – egységes brand */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#d7e3ff] blur-[200px] opacity-70" />
        <div className="pointer-events-none absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full bg-[#c4d9ff] blur-[220px] opacity-60" />
        <div className="pointer-events-none absolute bottom-[-260px] left-1/4 w-[460px] h-[460px] rounded-full bg-[#e0e6f5] blur-[180px] opacity-80" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_top,#e0e7ff_0,#f5f7fb_55%)] mix-blend-screen" />

        {/* HERO SZEKCIÓ */}
        <section
          className="relative w-full pt-24 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-white/95 via-[#f2f5fd]/96 to-[#eef2fb]"
          aria-labelledby="hero-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-5 md:px-6 text-center relative z-10">
            {/* LOGÓ AURA */}
            <div className="relative mb-10 flex justify-center">
              <div className="absolute w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] md:w-[460px] md:h-[460px] rounded-full bg-gradient-to-r from-[#1f4fa5] via-[#8fb3ff] to-[#1f4fa5] blur-[140px] opacity-80" />
              <div className="relative w-[170px] h-[170px] sm:w-[200px] sm:h-[200px] md:w-[230px] md:h-[230px] rounded-full overflow-hidden ring-[2.5px] ring-[#b8c9ff]/90 bg-white shadow-[0_0_80px_rgba(44,99,199,0.55)]">
                <Image
                  src="/proformconsulting-logo.jpeg"
                  alt="ProForm Consulting logó"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 180px, 230px"
                  priority
                />
              </div>
            </div>

            {/* CÍM, ALCÍM, LEAD SZÖVEG */}
            <h1 id="hero-heading" className="mb-4">
              <span className="inline-block text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#64748b] mb-3">
                Prémium építési és bontási projektirányítás
              </span>
              <span className="block text-[1.8rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-[#1f4fa5] via-[#3e6fb8] to-[#7fa4dd] bg-clip-text text-transparent">
                Építkezési projektje maximális kontroll alatt a tervezéstől a
                kulcsátadásig.
              </span>
            </h1>

            <p className="text-[#334155] text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-6">
              A csapat, akiknek a problémamegoldás és a minőségi kivitelezés nem
              feladat hanem szakmai identitás.
            </p>

            <div className="w-20 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-[#2563eb] to-transparent rounded-full mb-6 mx-auto" />

            <p className="text-[#4b5563] text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-10">
              Az építkezés vagy bontás valójában nem a téglákról szól, hanem
              több tucat összehangolt döntésről, engedélyről, szakemberről,
              határidőről, beszállítóról és egy olyan rendszerről, amely nem
              engedi, hogy a projekt elcsússzon.
              <br />
              <br />
              A ProForm Consulting ezt a rendszert adja, professzionális,
              átlátható és felelős projektirányítást. A tervezéstől a VR
              vizualizáción és bontási folyamatokon át egészen a kivitelezés
              felügyeletéig mindent egy kézben tartunk hogy a projekt stabilan,
              kiszámíthatóan és magas minőségi szinten valósuljon meg.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="#contact"
                className="px-7 md:px-8 py-3 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white text-sm md:text-base font-semibold shadow-[0_12px_35px_rgba(37,99,235,0.7)] hover:scale-105 active:scale-100 transition"
              >
                Kérek több információt
              </a>
              <a
                href="#contact"
                className="px-7 md:px-8 py-3 rounded-full border border-[#93c5fd] bg-white/80 text-[#1e3a8a] text-sm md:text-base font-semibold hover:bg-[#e0edff] transition"
              >
                Röviden leírom a projektemet
              </a>
            </div>
          </div>
        </section>

        {/* VR / 3D SZEKCIÓ */}
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
                Még mielőtt nagyobb kiadásokba kezdene, járja be VR-ben a
                tervezett épületet, és tekintse meg az elképzelését.
              </h2>

              <p className="text-[#4b5563] mb-4 text-sm md:text-base leading-relaxed">
                A VR és 3D vizualizáció ma már nem látványosság, hanem
                kockázatcsökkentő eszköz. Valós méretben járhatja be a tervezett
                épületet, üzletet vagy csarnokot, láthatja a fényviszonyokat, a
                térkapcsolatokat, a nyílászárók elhelyezését, sőt akár egy bontás
                utáni üres területre tervezett terveit is.
                <br />
                <br />
                Ahelyett, hogy papírról döntene milliós tételekről, a VR
                élmény alapján hozhat nyugodt, megalapozott döntéseket. Így
                elkerülhetők a felesleges anyagrendelések, a visszabontások és a
                „nem így képzeltem el” helyzetek.
              </p>

              <ul className="text-[#475569] text-xs md:text-sm space-y-2">
                <li>• Valós léptékű bejárás belső és külső tereken</li>
                <li>
                  • Anyag-, szín- és térvariációk kipróbálása még a kivitelezés
                  vagy bontás előtt
                </li>
                <li>
                  • Bontási folyamatok előre átlátható megtervezése nagyobb
                  épületeknél is
                </li>
                <li>
                  • Döntéstámogató vizualizáció kevesebb improvizáció, több
                  kiszámíthatóság
                </li>
              </ul>
            </div>

            <div className="grid gap-4">
              <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden border border-[#d0d7e6] shadow-[0_16px_40px_rgba(148,163,184,0.6)]">
                <Image
                  src="/services-vr.jpeg"
                  alt="VR bejárás építési és bontási projekthez"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/45 via-transparent to-[#2563eb]/45" />
              </div>

              <div className="relative h-36 md:h-40 rounded-2xl overflow-hidden border border-[#d0d7e6] shadow-[0_12px_32px_rgba(148,163,184,0.55)]">
                <Image
                  src="/house-blueprint.jpeg"
                  alt="Építési alaprajz, bontási terv és műszaki előkészítés"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* PROJEKTEK / SZOLGÁLTATÁSOK – KIBŐVÍTVE */}
        <section
          className="py-18 md:py-20 bg-gradient-to-b from-[#eef2ff] via-[#f5f7ff] to-[#eef2ff]"
          aria-labelledby="projects-heading"
        >
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h2
              id="projects-heading"
              className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] bg-clip-text text-transparent"
            >
              Miben számíthat ránk? Komplett megoldások építéshez és bontáshoz
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  img: "/project-family-house.jpg",
                  title: "Családi házak és lakóépületek",
                  desc: "Új építésű otthonok és kisebb lakóépületek kivitelezése a telek előkészítésétől a kulcsrakész átadásig. A folyamat minden lépését összehangoljuk.",
                },
                {
                  img: "/project-renovation.jpeg",
                  title: "Felújítások, átépítések, belső bontások",
                  desc: "Lakások és házak modernizálása, falbontás, térnyitás, szerkezeti módosítások. Úgy szervezve, hogy ne hónapokra legyen szétverve minden.",
                },
                {
                  img: "/project-apartment.jpeg",
                  title: "Ipari csarnokok, raktárak, gyárépületek építése",
                  desc: "Nagy projektek kivitelezése, ahol minden nap számít. Határidők, költségkeret és minőség kézben tartva, átlátható jelentésekkel.",
                },
                {
                  img: "/project-demolition.jpeg",
                  title: "Épületbontás kisebb épületektől a gyárakig",
                  desc: "Lakóházak, melléképületek, ipari csarnokok és gyárépületek bontása. Felmérés, veszélytelenítés, elszállítás és dokumentáció egy kézben.",
                },
                {
                  img: "/project-rescue.jpeg",
                  title: "Projektmentés problémás kivitelezéseknél",
                  desc: "Ha a kivitelezés elakadt, csúszik vagy minőségi gondok jelentek meg, belépünk, felmérjük a helyzetet és átstrukturáljuk a folyamatot.",
                },
                {
                  img: "/project-coordination.jpeg",
                  title: "Teljes projektirányítás és csapat-koordináció",
                  desc: "A ProForm Consulting nem csak ellenőriz: irányít. Mi szervezzük a szakemberek munkáját, az ütemtervet, az anyaglogisztikát és a költségek követését.",
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

        {/* REFERENCIÁK / RECENZIÓK */}
        <section
          className="py-16 md:py-20 bg-white"
          aria-labelledby="testimonials-heading"
        >
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <h2
              id="testimonials-heading"
              className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-[#4b5563] via-[#1d4ed8] to-[#60a5fa] bg-clip-text text-transparent"
            >
              Akik már velünk dolgoztak és nem a káoszt, hanem a megoldást
              tapasztalták
            </h2>

            <p className="text-[#4b5563] text-sm md:text-base mb-8 max-w-3xl">
              Ügyfeleink visszajelzéseiben három dolog tér vissza újra és újra 
              a gyors intézkedés, a csapat összehangoltsága és az, hogy a
              problémákra nem magyarázatot, hanem megoldást kaptak.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <article className="bg-[#f5f7ff] border border-[#d4ddf4] rounded-2xl p-5 shadow-[0_10px_30px_rgba(148,163,184,0.4)]">
                <p className="text-sm md:text-[0.9rem] text-[#374151] leading-relaxed mb-4">
                  „Nem gondoltam volna, hogy egy építkezés ennyire átlátható tud
                  lenni. A ProForm csapat minden kérdésre gyorsan reagált, és
                  végig éreztem, hogy valaki valóban kézben tartja a folyamatot.”
                </p>
                <p className="text-xs font-semibold text-[#1f2937]">
                  N. Andrea
                  <span className="block text-[0.7rem] font-normal text-[#6b7280]">
                    családi ház kivitelezés
                  </span>
                </p>
              </article>

              <article className="bg-[#f5f7ff] border border-[#d4ddf4] rounded-2xl p-5 shadow-[0_10px_30px_rgba(148,163,184,0.4)]">
                <p className="text-sm md:text-[0.9rem] text-[#374151] leading-relaxed mb-4">
                  „A bontástól őszintén tartottam. Az épület mérete és veszélye 
                  miatt több cég is visszalépett. A ProForm 48 órán belül a
                  helyszínen volt, felmérte a területet, és olyan ütemtervet adott,
                   ami napra pontosan működött.”
                </p>
                <p className="text-xs font-semibold text-[#1f2937]">
                  K. Zsolt
                  <span className="block text-[0.7rem] font-normal text-[#6b7280]">
                    ipari csarnok bontás
                  </span>
                </p>
              </article>

              <article className="bg-[#f5f7ff] border border-[#d4ddf4] rounded-2xl p-5 shadow-[0_10px_30px_rgba(148,163,184,0.4)]">
                <p className="text-sm md:text-[0.9rem] text-[#374151] leading-relaxed mb-4">
                  „A legnagyobb értékük a gyors intézkedés. Ha probléma
                  felmerült, nem heteket vártunk válaszra. A csapat összehangolt
                  volt, mindenki tudta a feladatát ez az, ami ma ritka az
                  építőiparban.”
                </p>
                <p className="text-xs font-semibold text-[#1f2937]">
                  M. Erika
                  <span className="block text-[0.7rem] font-normal text-[#6b7280]">
                    felújítás és átalakítás
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
                Írja le néhány mondatban, mi készül vagy mi tűnik el
              </h2>

              <p className="text-[#4b5563] mb-6 max-w-xl text-sm md:text-base leading-relaxed">
                Családi ház, felújítás, csarnoképítés vagy bontás előtt áll?
                Röviden fogalmazza meg, hol tart most a projekt, és mi a cél.
                Átnézzük, hol csúszhatna szét időben vagy pénzben a folyamat, és
                egy átlátható javaslatot adunk arra, hogyan tudjuk átvenni a
                koordinációt. Akkor is be tudunk lépni, ha a kivitelezés már
                elindult, és jelenleg inkább káosznak tűnik, mint folyamatnak.
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
                    Telefonos konzultáció: H–P 9:00–17:00
                  </div>
                </div>

                <a
                  href="mailto:proformconsulting@azet.sk?subject=Kapcsolatfelv%C3%A9tel%20%C3%A9p%C3%ADt%C3%A9si%20vagy%20bont%C3%A1si%20projekt%20%C3%BCgy%C3%A9ben"
                  className="inline-flex items-center justify-center px-9 py-3.5 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white font-semibold text-sm md:text-base shadow-[0_16px_45px_rgba(37,99,235,0.75)] hover:scale-105 active:scale-100 transition"
                >
                  Küldök üzenetet a projektemről
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}