
const BRAND = "ProForm Consulting";
const CONTACT_EMAIL = "proformconsulting@gmail.com";

export default function AdatkezelesHu() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] relative overflow-hidden text-slate-900">

      <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#d7e3ff] blur-[200px] opacity-70" />
      <div className="pointer-events-none absolute bottom-[-280px] right-[-40px] w-[560px] h-[560px] rounded-full bg-[#c4d9ff] blur-[230px] opacity-60" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.32] bg-[radial-gradient(circle_at_top,#e0e7ff_0,#f5f7fb_55%)] mix-blend-screen" />

      <section className="pt-28 md:pt-32 pb-12 text-center relative z-10 px-4">
        <p className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-[#64748b] mb-3">
          Jogi információk
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#1f4ed8] via-[#4b7dd6] to-[#7fa4dd] text-transparent bg-clip-text">
          Adatkezelési tájékoztató
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-[#475569] text-sm md:text-lg leading-relaxed">
          Rövid, átlátható összefoglaló arról, hogyan kezeljük az adataidat a kapcsolatfelvétel során.
        </p>
        <div className="w-20 h-[2px] mx-auto mt-6 bg-gradient-to-r from-transparent via-[#1d4ed8] to-transparent rounded-full" />
      </section>

      <section className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 pb-24">
        <div className="bg-white/95 rounded-2xl border border-[#d4ddee] shadow-[0_15px_45px_rgba(145,163,185,0.28)] p-7 md:p-10 space-y-5">
          <div className="rounded-2xl border border-[#e6eefc] bg-[#f8fbff] p-6">
            <h2 className="text-base font-semibold text-[#1e3a8a]">Adatkezelő</h2>
            <p className="mt-2 text-sm text-[#475569]">
              {BRAND} — Kapcsolat:{" "}
              <a className="text-[#1d4ed8] font-medium hover:underline" href={"mailto:" + CONTACT_EMAIL}>
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-[#e6eefc] bg-[#f8fbff] p-6">
              <h2 className="text-base font-semibold text-[#1e3a8a]">Kezelt adatok</h2>
              <ul className="mt-2 text-sm text-[#475569] list-disc pl-5 space-y-1">
                <li>Név</li>
                <li>Email cím</li>
                <li>Üzenet tartalma</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#e6eefc] bg-[#f8fbff] p-6">
              <h2 className="text-base font-semibold text-[#1e3a8a]">Cél és jogalap</h2>
              <p className="mt-2 text-sm text-[#475569] leading-relaxed">
                Kapcsolatfelvétel, ajánlatadás, üzleti kommunikáció. Jogszerű érdek és/vagy hozzájárulás a megkeresés alapján.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#eef2ff] bg-white p-6">
            <h2 className="text-base font-semibold text-[#1e3a8a]">Adattovábbítás</h2>
            <p className="mt-2 text-sm text-[#475569] leading-relaxed">
              Az adatokat nem értékesítjük és nem adjuk át harmadik félnek marketing célból. Technikai szolgáltatók
              (tárhely, email) a működéshez szükséges mértékben érintettek lehetnek.
            </p>
          </div>

          <div className="rounded-2xl border border-[#eef2ff] bg-white p-6">
            <h2 className="text-base font-semibold text-[#1e3a8a]">Megőrzési idő</h2>
            <p className="mt-2 text-sm text-[#475569]">
              Az adatokat az üzleti kapcsolat fennállásáig, illetve az ügy lezárásáig kezeljük, jogszabályi kötelezettségek szerint.
            </p>
          </div>

          <div className="rounded-2xl border border-[#eef2ff] bg-white p-6">
            <h2 className="text-base font-semibold text-[#1e3a8a]">Érintetti jogok</h2>
            <p className="mt-2 text-sm text-[#475569] leading-relaxed">
              Tájékoztatás kérése, helyesbítés, törlés, adatkezelés korlátozása, tiltakozás, adathordozhatóság (ha alkalmazható).
              Kérésed a fenti email címen fogadjuk.
            </p>
          </div>

          <p className="text-[11px] text-[#94a3b8]">
            A szöveg tájékoztató jellegű. Egyedi adatkezelési folyamat (hírlevél, remarketing) esetén bővítés szükséges.
          </p>
        </div>
      </section>
    </main>

  );
}