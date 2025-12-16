
const BRAND = "ProForm Consulting";

function Block({ n, t, children }: { n: string; t: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-[#e6eefc] bg-[#f8fbff] p-6">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#eef2ff] text-[#1e3a8a] text-xs font-bold">
          {n}
        </span>
        <div>
          <h2 className="text-base font-semibold text-[#1e3a8a]">{t}</h2>
          <div className="mt-2 text-sm text-[#475569] leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function VopSk() {
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
          VOP
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-[#475569] text-sm md:text-lg leading-relaxed">
          Všeobecné obchodné podmienky pre služby {BRAND}.
        </p>
        <div className="w-20 h-[2px] mx-auto mt-6 bg-gradient-to-r from-transparent via-[#1d4ed8] to-transparent rounded-full" />
      </section>

      <section className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 pb-24">
        <div className="bg-white/95 rounded-2xl border border-[#d4ddee] shadow-[0_15px_45px_rgba(145,163,185,0.28)] p-7 md:p-10">
          <div className="grid gap-5">
            <Block n="1" t="Charakter služby">
              Služby zahŕňajú koordináciu projektu, poradenstvo, prípravu a podporu komunikácie.
              Konkrétny rozsah je vždy definovaný písomnou dohodou.
            </Block>

            <Block n="2" t="Nie sme zhotoviteľ">
              {BRAND} nevykonáva fyzickú realizáciu stavby. Za chyby realizácie, kvalitu prác a materiálov
              zodpovedá zhotoviteľ (dodávateľ).
            </Block>

            <Block n="3" t="Tretie strany a úrady">
              Rozhodnutia, omeškania alebo zlyhania projektantov, dodávateľov, dodávateľov materiálu alebo úradov
              sú mimo kontroly {BRAND}.
            </Block>

            <Block n="4" t="Vznik zmluvy">
              Poskytnutie služby vzniká na základe písomnej ponuky a jej akceptácie (email / zmluva).
            </Block>

            <Block n="5" t="Cena a platby">
              Cena je individuálna podľa dohody. Platobné podmienky sú uvedené v konkrétnej zmluve/ponuke.
            </Block>

            <Block n="6" t="Obmedzenie zodpovednosti">
              {BRAND} postupuje odborne a s náležitou starostlivosťou, avšak nenesie zodpovednosť za ušlý zisk a nepriame škody,
              pokiaľ zákon neustanovuje inak.
            </Block>

            <Block n="7" t="Rozhodné právo">
              Tieto podmienky sa riadia právom Slovenskej republiky. V spore uprednostňujeme zmier a dohodu.
            </Block>
          </div>

          <p className="mt-8 text-[11px] text-[#94a3b8]">
            Text je informatívny. Pre konkrétne zmluvy odporúčame právnu konzultáciu.
          </p>
        </div>
      </section>
    </main>
  );
}