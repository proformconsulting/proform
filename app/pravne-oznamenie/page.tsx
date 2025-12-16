
const BRAND = "ProForm Consulting";

export default function PravneOznamenieSk() {
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
          Právne oznámenie
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-[#475569] text-sm md:text-lg leading-relaxed">
          Obmedzenie zodpovednosti a informácie o obsahu webu.
        </p>
        <div className="w-20 h-[2px] mx-auto mt-6 bg-gradient-to-r from-transparent via-[#1d4ed8] to-transparent rounded-full" />
      </section>

      <section className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 pb-24">
        <div className="bg-white/95 rounded-2xl border border-[#d4ddee] shadow-[0_15px_45px_rgba(145,163,185,0.28)] p-7 md:p-10 space-y-5">
          <div className="rounded-2xl border border-[#e6eefc] bg-[#f8fbff] p-6">
            <h2 className="text-base font-semibold text-[#1e3a8a]">Informatívny charakter</h2>
            <p className="mt-2 text-sm text-[#475569] leading-relaxed">
              Informácie na stránke majú všeobecný informatívny charakter a nenahrádzajú právne, úradné ani technické poradenstvo.
            </p>
          </div>

          <div className="rounded-2xl border border-[#eef2ff] bg-white p-6">
            <h2 className="text-base font-semibold text-[#1e3a8a]">Realizácia a zodpovednosť</h2>
            <p className="mt-2 text-sm text-[#475569] leading-relaxed">
              {BRAND} nie je zhotoviteľ. Za realizáciu stavby a odbornú zodpovednosť nesú zodpovednosť zhotovitelia,
              projektanti a príslušné subjekty.
            </p>
          </div>

          <div className="rounded-2xl border border-[#eef2ff] bg-white p-6">
            <h2 className="text-base font-semibold text-[#1e3a8a]">Tretie strany</h2>
            <p className="mt-2 text-sm text-[#475569]">
              Nenesieme zodpovednosť za rozhodnutia a omeškania tretích strán (úrady, dodávatelia).
            </p>
          </div>

          <div className="rounded-2xl border border-[#eef2ff] bg-white p-6">
            <h2 className="text-base font-semibold text-[#1e3a8a]">Zmluvný rámec</h2>
            <p className="mt-2 text-sm text-[#475569]">
              Konkrétne služby sa poskytujú výlučne na základe písomnej dohody.
            </p>
          </div>

          <p className="text-[11px] text-[#94a3b8]">
            Pre väčšie projekty odporúčame individuálnu zmluvu a jasné definovanie zodpovedností.
          </p>
        </div>
      </section>
    </main>
  );
}