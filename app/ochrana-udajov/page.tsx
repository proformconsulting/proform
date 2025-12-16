
const BRAND = "ProForm Consulting";
const CONTACT_EMAIL = "proformconsulting@gmail.com";

export default function OchranaUdajovSk() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] relative overflow-hidden text-slate-900">

      <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#d7e3ff] blur-[200px] opacity-70" />
      <div className="pointer-events-none absolute bottom-[-280px] right-[-40px] w-[560px] h-[560px] rounded-full bg-[#c4d9ff] blur-[230px] opacity-60" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.32] bg-[radial-gradient(circle_at_top,#e0e7ff_0,#f5f7fb_55%)] mix-blend-screen" />

      <section className="pt-28 md:pt-32 pb-12 text-center relative z-10 px-4">
        <p className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-[#64748b] mb-3">
          Právne informácie
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#1f4ed8] via-[#4b7dd6] to-[#7fa4dd] text-transparent bg-clip-text">
          Ochrana osobných údajov
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-[#475569] text-sm md:text-lg leading-relaxed">
          Stručné a zrozumiteľné informácie o spracovaní údajov pri kontakte.
        </p>
        <div className="w-20 h-[2px] mx-auto mt-6 bg-gradient-to-r from-transparent via-[#1d4ed8] to-transparent rounded-full" />
      </section>

      <section className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 pb-24">
        <div className="bg-white/95 rounded-2xl border border-[#d4ddee] shadow-[0_15px_45px_rgba(145,163,185,0.28)] p-7 md:p-10 space-y-5">
          <div className="rounded-2xl border border-[#e6eefc] bg-[#f8fbff] p-6">
            <h2 className="text-base font-semibold text-[#1e3a8a]">Prevádzkovateľ</h2>
            <p className="mt-2 text-sm text-[#475569]">
              {BRAND} — Kontakt:{" "}
              <a className="text-[#1d4ed8] font-medium hover:underline" href={"mailto:" + CONTACT_EMAIL}>
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-[#e6eefc] bg-[#f8fbff] p-6">
              <h2 className="text-base font-semibold text-[#1e3a8a]">Spracúvané údaje</h2>
              <ul className="mt-2 text-sm text-[#475569] list-disc pl-5 space-y-1">
                <li>Meno</li>
                <li>Email</li>
                <li>Obsah správy</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#e6eefc] bg-[#f8fbff] p-6">
              <h2 className="text-base font-semibold text-[#1e3a8a]">Účel a právny základ</h2>
              <p className="mt-2 text-sm text-[#475569] leading-relaxed">
                Kontakt, príprava ponuky, obchodná komunikácia. Oprávnený záujem a/alebo súhlas podľa podania.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#eef2ff] bg-white p-6">
            <h2 className="text-base font-semibold text-[#1e3a8a]">Prenos údajov</h2>
            <p className="mt-2 text-sm text-[#475569] leading-relaxed">
              Údaje nepredávame a neposkytujeme tretím stranám na marketing. Technickí poskytovatelia (hosting/email)
              môžu byť zapojení v nevyhnutnom rozsahu.
            </p>
          </div>

          <div className="rounded-2xl border border-[#eef2ff] bg-white p-6">
            <h2 className="text-base font-semibold text-[#1e3a8a]">Doba uchovávania</h2>
            <p className="mt-2 text-sm text-[#475569]">
              Údaje uchovávame počas trvania komunikácie a do uzavretia prípadu, prípadne podľa zákonných povinností.
            </p>
          </div>

          <div className="rounded-2xl border border-[#eef2ff] bg-white p-6">
            <h2 className="text-base font-semibold text-[#1e3a8a]">Práva dotknutej osoby</h2>
            <p className="mt-2 text-sm text-[#475569] leading-relaxed">
              Právo na prístup, opravu, výmaz, obmedzenie spracúvania, námietku a prenosnosť (ak je uplatniteľná).
              Žiadosť vybavíme cez uvedený email.
            </p>
          </div>

          <p className="text-[11px] text-[#94a3b8]">
            Ak neskôr pridáte newsletter/remarketing, odporúča sa rozšírená verzia a cookie banner.
          </p>
        </div>
      </section>
    </main>
  );
}