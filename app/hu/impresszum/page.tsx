
const COMPANY = {
  brand: "ProForm Consulting",
  legalName: "TRANSBETON PLUS, spol. s r.o.",
  address: "Mlynská 2, 932 01 Veľký Meder, Szlovákia",
  ico: "36249131",
  dic: "2020200149",
  icdph: "SK2020200149",
  regNote: "Regisztráció: 14.6.2002",
  email: "proformconsulting@gmail.com",
};

function PageShell({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#f5f7fb] relative overflow-hidden text-slate-900">


      {/* Hátterek – egységes stílus */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#d7e3ff] blur-[200px] opacity-70" />
      <div className="pointer-events-none absolute bottom-[-280px] right-[-40px] w-[560px] h-[560px] rounded-full bg-[#c4d9ff] blur-[230px] opacity-60" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.32] bg-[radial-gradient(circle_at_top,#e0e7ff_0,#f5f7fb_55%)] mix-blend-screen" />

      {/* HERO */}
      <section className="pt-28 md:pt-32 pb-12 text-center relative z-10 px-4">
        <p className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-[#64748b] mb-3">
          {eyebrow}
        </p>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#1f4ed8] via-[#4b7dd6] to-[#7fa4dd] text-transparent bg-clip-text">
          {title}
        </h1>

        <p className="max-w-2xl mx-auto mt-4 text-[#475569] text-sm md:text-lg leading-relaxed">
          {subtitle}
        </p>

        <div className="w-20 h-[2px] mx-auto mt-6 bg-gradient-to-r from-transparent via-[#1d4ed8] to-transparent rounded-full" />
      </section>

      <section className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 pb-24">
        <div className="bg-white/95 rounded-2xl border border-[#d4ddee] shadow-[0_15px_45px_rgba(145,163,185,0.28)] p-7 md:p-10">
          {children}

          <p className="mt-8 text-[11px] text-[#94a3b8]">
            Tájékoztató jellegű tartalom. Egyedi esetben javasolt jogi szakértő bevonása.
          </p>
        </div>
      </section>
    </main>
  );
}

export default function ImpresszumHu() {
  return (
    <PageShell
      eyebrow="Jogi információk"
      title="Impresszum"
      subtitle="Átlátható működés, tiszta szerepek — a ProForm Consulting márkanév alatt dolgozunk."
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-[#e6eefc] bg-[#f8fbff] p-6">
          <h2 className="text-lg font-semibold text-[#1e3a8a] mb-3">
            Szolgáltatási márkanév
          </h2>
          <p className="text-[#475569] text-sm leading-relaxed">
            <span className="font-semibold text-[#0f2f7a]">{COMPANY.brand}</span>
            <br />
            Projektkoordináció, tanácsadás, előkészítés.
          </p>
        </div>

        <div className="rounded-2xl border border-[#e6eefc] bg-[#f8fbff] p-6">
          <h2 className="text-lg font-semibold text-[#1e3a8a] mb-3">
            Kapcsolat
          </h2>
          <p className="text-[#475569] text-sm leading-relaxed">
            Email:{" "}
            <a className="text-[#1d4ed8] font-medium hover:underline" href={"mailto:" + COMPANY.email}>
              {COMPANY.email}
            </a>
          </p>
        </div>

        <div className="md:col-span-2 rounded-2xl border border-[#eef2ff] bg-white p-6">
          <h2 className="text-base font-semibold text-[#1e3a8a] mb-2">
            Jogi / számlázási háttér (diszkrét, de hivatalos)
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            Jogi szolgáltató: <span className="font-semibold">{COMPANY.legalName}</span>
            <br />
            Székhely: {COMPANY.address}
            <br />
            IČO: {COMPANY.ico} • DIČ: {COMPANY.dic} • IČ DPH: {COMPANY.icdph}
            <br />
            <span className="text-xs text-[#64748b]">{COMPANY.regNote}</span>
          </p>

          <p className="mt-3 text-[12px] text-[#64748b]">
            Megjegyzés: a szolgáltatás a <strong>{COMPANY.brand}</strong> márkanév alatt fut,
            a számlázás a fenti jogi entitás adataival történik.
          </p>
        </div>
    
      </div>
    </PageShell>
  );
}