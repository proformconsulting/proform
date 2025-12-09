// app/kontakt/page.tsx
import Image from "next/image";
import MainNav from "../components/MainNav";

export default function ContactPageSk() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] relative overflow-hidden text-slate-900">
      <MainNav />

      {/* Pozadie aura efekt */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#d7e3ff] blur-[190px] opacity-70" />
      <div className="pointer-events-none absolute bottom-[-260px] right-0 w-[520px] h-[520px] rounded-full bg-[#c4d9ff] blur-[220px] opacity-60" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.32] bg-[radial-gradient(circle_at_top,#e0e7ff_0,#f5f7fb_55%)] mix-blend-screen" />

      {/* HERO */}
      <section className="pt-28 md:pt-32 pb-14 md:pb-18 text-center relative z-10">
        <p className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-[#64748b] mb-3">
          Inovatívne štúdio pre stavebné projekty
        </p>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#1f4ed8] via-[#4b7dd6] to-[#7fa4dd] text-transparent bg-clip-text">
          Kontaktujte nás
        </h1>

        <p className="max-w-xl mx-auto mt-4 text-[#475569] text-sm md:text-lg leading-relaxed">
          Sme nová generácia projektového riadenia vo výstavbe.  
          Naším cieľom je priniesť presné, transparentné a technologicky
          moderné riešenia pre váš stavebný projekt.
        </p>

        <div className="w-20 h-[2px] mx-auto mt-6 bg-gradient-to-r from-transparent via-[#1d4ed8] to-transparent rounded-full" />
      </section>

      {/* Prečo s nami */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 mb-14">
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            {
              title: "Rýchla reakcia",
              text: "Na dopyty reagujeme v krátkom čase. Vieme, že začiatok projektu je rozhodujúci.",
            },
            {
              title: "Technológia a inovácie",
              text: "VR prechádzky v mierke jedna ku jednej, digitálne procesy a premyslená komunikácia.",
            },
            {
              title: "Stabilné odborné zázemie",
              text: "Skúsené projektové vedenie ktoré prináša istotu a kontrolu do celého procesu výstavby.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/95 p-6 rounded-2xl border border-[#d4ddee] shadow-[0_10px_35px_rgba(145,163,185,0.25)]"
            >
              <h3 className="text-lg font-semibold text-[#1e3a8a] mb-2">
                {item.title}
              </h3>
              <p className="text-[#475569] text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Kontakt + formulár */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Ľavá strana – kontaktné údaje */}
          <div className="bg-white/95 p-7 md:p-8 rounded-2xl shadow-[0_15px_45px_rgba(145,163,185,0.35)] border border-[#d4ddee]">
            <h2 className="text-2xl font-semibold mb-3 md:mb-4 text-[#1e3a8a]">
              Kontaktné centrum
            </h2>

            <p className="text-[#475569] mb-6 text-sm md:text-base">
              ProForm Consulting je stavebné projektové a koordinačné štúdio
              ktoré spája modernú technológiu s profesionálnym vedením.
              Našim klientom prinášame jasný, čitateľný a riadený priebeh výstavby.
            </p>

            <div className="space-y-4 text-[#1f2937] text-sm md:text-base">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:proformconsulting@azet.sk"
                  className="text-[#1d4ed8] font-medium hover:underline"
                >
                  proformconsulting@gmail.com
                </a>
              </p>

              <p>
                <strong>Telefón:</strong>{" "}
                <span className="text-[#1d4ed8] font-medium">
                  +421 —
                </span>
              </p>

              <p className="text-xs md:text-sm opacity-80">
                Pondelok až piatok 9:00 – 17:00
              </p>

              {/* Firemné údaje – neskôr doplníš */}
              <div className="pt-4 border-t border-[#e2e8f0]">
                <p className="text-sm md:text-base font-semibold mb-1">
                  Firemné údaje
                </p>

                <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                  Obchodné meno:{" "}
                  <span className="text-[#1f2937] font-medium">
                    ProForm Consulting
                  </span>
                  <br />
                  Sídlo: —
                  <br />
                  IČO: —
                  <br />
                  DIČ: —
                </p>
              </div>
            </div>
          </div>

          {/* Pravá strana – formulár */}
          <div className="bg-white/95 p-7 md:p-8 rounded-2xl shadow-[0_15px_45px_rgba(145,163,185,0.35)] border border-[#d4ddee]">
            <h2 className="text-2xl font-semibold mb-3 md:mb-4 text-[#1e3a8a]">
              Napíšte nám správu
            </h2>

            <p className="text-[#475569] mb-4 text-sm md:text-base">
              Stručne opíšte váš zámer, lokalitu projektu a plánovaný časový
              rámec. Na základe toho pripravíme odporúčanie šité na mieru.
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#6b7280] mb-1">
                  Meno
                </label>
                <input
                  type="text"
                  placeholder="Vaše celé meno"
                  className="w-full px-4 py-3 rounded-xl border border-[#c9d6ef] bg-white/95 text-sm outline-none focus:border-[#60a5fa] focus:ring-2 focus:ring-[#bfdbfe]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#6b7280] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="vas@email.sk"
                  className="w-full px-4 py-3 rounded-xl border border-[#c9d6ef] bg-white/95 text-sm outline-none focus:border-[#60a5fa] focus:ring-2 focus:ring-[#bfdbfe]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#6b7280] mb-1">
                  Správa
                </label>
                <textarea
                  placeholder="Stručný popis projektu..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-[#c9d6ef] bg-white/95 text-sm outline-none focus:border-[#60a5fa] focus:ring-2 focus:ring-[#bfdbfe] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white font-semibold text-sm md:text-base shadow-[0_12px_35px_rgba(37,99,235,0.5)] hover:scale-105 active:scale-100 transition"
              >
                Odoslať správu
              </button>

              <p className="text-[11px] text-[#9ca3af] text-center">
                Odoslaním správy súhlasíte s tým že vás môžeme kontaktovať
                ohľadom vášho projektu.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}