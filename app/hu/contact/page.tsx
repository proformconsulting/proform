import Image from "next/image";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import MainNav from "../../components/MainNav";

export default function ContactPageHu() {
  return (
    <>
      <LanguageSwitcher />
      <MainNav />

      <main className="min-h-screen bg-[#f3f6ff] relative overflow-hidden text-slate-900">

        {/* HÁTTEREK – prémium aurák + fénycsík animáció */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#d7e3ff] blur-[200px] opacity-70" />
        <div className="pointer-events-none absolute top-1/3 -right-56 w-[580px] h-[580px] rounded-full bg-[#c4d9ff] blur-[250px] opacity-60" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 w-[480px] h-[480px] rounded-full bg-[#e0e6f5] blur-[200px] opacity-80" />

        {/* Elegáns fénycsík grafika */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.65),rgba(235,240,255,0.25),transparent_70%)]" />
        <div className="pointer-events-none absolute top-0 left-0 w-full h-full bg-[linear-gradient(115deg,rgba(255,255,255,0.2)_0%,rgba(130,170,255,0.15)_40%,transparent_80%)] mix-blend-soft-light" />

        {/* HERO SZEKCIÓ */}
        <section className="pt-32 pb-16 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-[#1d4ed8] via-[#4b7dd6] to-[#7fa4dd] text-transparent bg-clip-text">
            Kapcsolat & Konzultáció
          </h1>

          <p className="max-w-2xl mx-auto mt-4 text-[#475569] text-lg leading-relaxed">
            Akár építési projektet indít, akár felújít, akár bontást tervez –
            írjon nekünk, és átlátható lépésekre bontjuk a teljes folyamatot.
          </p>

          <div className="w-24 h-[2px] mx-auto mt-6 bg-gradient-to-r from-transparent via-[#1d4ed8] to-transparent rounded-full" />
        </section>

        {/* TARTALOM BLOKKOK */}
        <section className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 pb-28">
          <div className="grid md:grid-cols-2 gap-10">

            {/* BAL – elérhetőségek kártya prémium dizájn */}
            <div className="bg-white/80 backdrop-blur-xl p-10 rounded-2xl shadow-[0_20px_55px_rgba(145,163,185,0.28)] border border-[#d8e1f3] relative overflow-hidden">

              {/* díszvonal */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#2563eb] via-[#4c7ff8] to-transparent" />

              <h2 className="text-2xl font-semibold mb-4 text-[#1e3a8a]">
                Elérhetőségek
              </h2>
              <p className="text-[#475569] mb-6 text-sm leading-relaxed">
                Munkanapokon bármikor szívesen segítünk.
              </p>

              <div className="space-y-6 text-lg text-[#1f2937]">

                {/* Email */}
                <div className="flex items-start gap-3">
                  <svg width="24" height="24" fill="#2563eb">
                    <path d="M2 4h20v16H2V4zm10 7L4 6v12h16V6l-8 5z" />
                  </svg>
                  <div>
                    <strong>Email:</strong>
                    <div className="text-[#1d4ed8] font-medium">
                      proformconsulting@azet.sk
                    </div>
                  </div>
                </div>

                {/* Telefon */}
                <div className="flex items-start gap-3">
                  <svg width="24" height="24" fill="#2563eb">
                    <path d="M6.6 10.8c1.2 2.3 3.1 4.2 5.4 5.4l1.8-1.8c.3-.3.8-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1v2.8c0 .6-.4 1-1 1C9.4 20.6 3.4 14.6 3.4 7c0-.6.4-1 1-1H7c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-1.7 1.9z" />
                  </svg>

                  <div>
                    <strong>Telefon:</strong>
                    <div className="text-[#1d4ed8] font-medium">+421 —</div>
                  </div>
                </div>

                <p className="text-sm opacity-70 pl-1">H–P: 9:00 – 17:00</p>
              </div>
            </div>

            {/* JOBB – kapcsolatfelvételi űrlap */}
            <div className="bg-white/80 backdrop-blur-xl p-10 rounded-2xl shadow-[0_20px_55px_rgba(145,163,185,0.28)] border border-[#d8e1f3] relative overflow-hidden">

              {/* díszvonal */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#2563eb] via-[#4b7dd6] to-transparent" />

              <h2 className="text-2xl font-semibold mb-4 text-[#1e3a8a]">
                Írjon nekünk
              </h2>

              <form className="space-y-4 mt-2">

                <input
                  type="text"
                  placeholder="Név"
                  className="w-full px-4 py-3 rounded-xl border border-[#cbd7f2] bg-white/70 focus:ring-2 focus:ring-[#2563eb] backdrop-blur-sm outline-none text-sm"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl border border-[#cbd7f2] bg-white/70 focus:ring-2 focus:ring-[#2563eb] backdrop-blur-sm outline-none text-sm"
                />

                <textarea
                  placeholder="Üzenet"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-[#cbd7f2] bg-white/70 focus:ring-2 focus:ring-[#2563eb] backdrop-blur-sm outline-none text-sm"
                />

                <button
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white font-semibold shadow-[0_18px_45px_rgba(37,99,235,0.55)] hover:scale-[1.03] active:scale-100 transition"
                >
                  Üzenet küldése
                </button>

              </form>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}