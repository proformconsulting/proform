import MainNav from "../../components/MainNav";

type Company = {
  brand: string;
  legalName: string;
  ico: string;
  dic: string;
  icDph: string;
  vatRegNote: string;
  addressLines: string[];
  email: string;
  phone: string;
  hours: string;
};

const COMPANY: Company = {
  brand: "ProForm Consulting",
  legalName: "TRANSBETON PLUS, spol. s r.o.",
  ico: "36249131",
  dic: "2020200149",
  icDph: "SK2020200149",
  vatRegNote: "regisztráció: 14.6.2002",
  addressLines: ["Mlynská 2", "932 01 Veľký Meder", "Szlovákia"],
  email: "proformconsulting@gmail.com",
  phone: "+421 907 361 779",
  hours: "Hétfő – Péntek: 9:00 – 16:00",
};

// stabil: nincs ${}
const mapsQuery = encodeURIComponent(
  COMPANY.legalName + ", " + COMPANY.addressLines.join(", ")
);
const mapsHref = "https://www.google.com/maps/search/?api=1&query=" + mapsQuery;
const mapsEmbedSrc = "https://www.google.com/maps?q=" + mapsQuery + "&output=embed";

export default function ContactPageHu() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] relative overflow-hidden text-slate-900">
      <MainNav />

      {/* Háttér aurák – egységes a többi oldallal */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#d7e3ff] blur-[190px] opacity-70" />
      <div className="pointer-events-none absolute bottom-[-260px] right-0 w-[520px] h-[520px] rounded-full bg-[#c4d9ff] blur-[220px] opacity-60" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.32] bg-[radial-gradient(circle_at_top,#e0e7ff_0,#f5f7fb_55%)] mix-blend-screen" />

      {/* HERO – ugyanaz a stílus, mint a többi oldalon */}
      <section className="pt-28 md:pt-32 pb-14 md:pb-18 text-center relative z-10 px-4">
        <p className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-[#64748b] mb-3">
          Építési projektkoordináció
        </p>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#1f4ed8] via-[#4b7dd6] to-[#7fa4dd] text-transparent bg-clip-text">
          Kapcsolat
        </h1>

        <p className="max-w-xl mx-auto mt-4 text-[#475569] text-sm md:text-lg leading-relaxed">
          Írj vagy hívj minket a <strong>{COMPANY.brand}</strong> irodánál kapsz gyors,
          átlátható és szakmai támogatást a projektedhez.
        </p>

        <div className="w-20 h-[2px] mx-auto mt-6 bg-gradient-to-r from-transparent via-[#1d4ed8] to-transparent rounded-full" />
      </section>

      {/* Kártyák – maradjon olyan, mint a képen */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Bal – Kontakt kártya */}
          <div className="bg-white/95 p-7 md:p-8 rounded-2xl shadow-[0_15px_45px_rgba(145,163,185,0.35)] border border-[#d4ddee]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-[#1e3a8a]">
                  Kapcsolati központ
                </h2>
                <p className="text-sm text-[#64748b] mt-1">
                  Szolgáltatási név: <strong>{COMPANY.brand}</strong>
                </p>
              </div>

              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-[#eef2ff] text-[#1e3a8a] border border-[#dbe6ff]">
                Válasz 24–48 h
              </span>
            </div>

            <p className="text-[#475569] mt-5 mb-6 text-sm md:text-base leading-relaxed">
              Küldj rövid információt a projektről (helyszín, cél, határidő), és javaslunk
              egy profi következő lépést.
            </p>

            {/* Gyors gombok – mint a képen */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <a
                href={"tel:" + COMPANY.phone.replace(/\s/g, "")}
                className="text-center px-4 py-3 rounded-xl border border-[#d4ddee] bg-white hover:bg-[#f8fbff] transition shadow-[0_10px_25px_rgba(145,163,185,0.18)]"
              >
                <div className="text-xs font-semibold text-[#6b7280]">Telefon</div>
                <div className="text-sm font-semibold text-[#1d4ed8]">{COMPANY.phone}</div>
              </a>

              <a
                href={"mailto:" + COMPANY.email}
                className="text-center px-4 py-3 rounded-xl border border-[#d4ddee] bg-white hover:bg-[#f8fbff] transition shadow-[0_10px_25px_rgba(145,163,185,0.18)]"
              >
                <div className="text-xs font-semibold text-[#6b7280]">Email</div>
                <div className="text-sm font-semibold text-[#1d4ed8] truncate">
                  {COMPANY.email}
                </div>
              </a>

              <a
                href={mapsHref}
                target="_blank"
                rel="noreferrer"
                className="text-center px-4 py-3 rounded-xl border border-[#d4ddee] bg-white hover:bg-[#f8fbff] transition shadow-[0_10px_25px_rgba(145,163,185,0.18)]"
              >
                <div className="text-xs font-semibold text-[#6b7280]">Térkép</div>
                <div className="text-sm font-semibold text-[#1d4ed8]">Megnyitás</div>
              </a>
            </div>

            <p className="text-xs md:text-sm text-[#64748b] mb-2">
              Ügyfélidő: {COMPANY.hours}
            </p>

            {/* Jogi adatok – rejtve, nem feltűnő */}
            <div className="mt-6 pt-4 border-t border-[#e2e8f0]">
              <details className="group">
                <summary className="cursor-pointer list-none text-[11px] font-semibold text-[#9ca3af] flex items-center justify-between">
                  <span>Jogi / számlázási háttér</span>
                  <span className="text-[11px] text-[#cbd5e1] group-open:hidden">Megnyitás</span>
                  <span className="text-[11px] text-[#cbd5e1] hidden group-open:inline">Bezárás</span>
                </summary>

                <div className="mt-3 rounded-2xl border border-[#eef2ff] bg-[#f8fbff] p-4">
                  <p className="text-[11px] text-[#94a3b8] leading-relaxed">
                    <strong className="text-[#64748b]">{COMPANY.legalName}</strong>
                    <br />
                    Székhely: {COMPANY.addressLines.join(", ")}
                    <br />
                    IČO: {COMPANY.ico} • DIČ: {COMPANY.dic} • IČ DPH: {COMPANY.icDph}{" "}
                    <span className="opacity-70">({COMPANY.vatRegNote})</span>
                  </p>

                  <p className="mt-3 text-[11px] text-[#94a3b8]">
                    A projektek a <strong>{COMPANY.brand}</strong> név alatt futnak,
                    a számlázás a fenti jogi adatok szerint történik.
                  </p>
                </div>
              </details>
            </div>
          </div>

          {/* Jobb – Form + térkép */}
          <div className="space-y-6">
            <div className="bg-white/95 p-7 md:p-8 rounded-2xl shadow-[0_15px_45px_rgba(145,163,185,0.35)] border border-[#d4ddee]">
              <h2 className="text-2xl font-semibold mb-3 md:mb-4 text-[#1e3a8a]">
                Üzenetküldés
              </h2>

              <p className="text-[#475569] mb-4 text-sm md:text-base">
                Írd le röviden a projekt fő adatait, és visszajelzünk.
              </p>

              <form className="space-y-4">
                <input
                  className="w-full px-4 py-3 rounded-xl border border-[#c9d6ef] bg-white/95 text-sm outline-none focus:border-[#60a5fa] focus:ring-2 focus:ring-[#bfdbfe]"
                  placeholder="Név"
                />
                <input
                  className="w-full px-4 py-3 rounded-xl border border-[#c9d6ef] bg-white/95 text-sm outline-none focus:border-[#60a5fa] focus:ring-2 focus:ring-[#bfdbfe]"
                  placeholder="Email"
                />
                <textarea
                  className="w-full px-4 py-3 rounded-xl border border-[#c9d6ef] bg-white/95 text-sm outline-none focus:border-[#60a5fa] focus:ring-2 focus:ring-[#bfdbfe] resize-none"
                  rows={5}
                  placeholder="Üzenet"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white font-semibold text-sm md:text-base shadow-[0_12px_35px_rgba(37,99,235,0.5)] hover:scale-[1.02] active:scale-100 transition"
                >
                  Üzenet elküldése
                </button>
              </form>
            </div>

            <div className="bg-white/95 p-3 rounded-2xl shadow-[0_15px_45px_rgba(145,163,185,0.25)] border border-[#d4ddee] overflow-hidden">
              <iframe
                title="Google Maps"
                src={mapsEmbedSrc}
                className="w-full h-[280px] rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}