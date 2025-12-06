import Image from "next/image";
import LanguageSwitcher from "../components/LanguageSwitcher";
import MainNav from "../components/MainNav";

export default function ContactPage() {
  return (
    <>
      <LanguageSwitcher />
      <MainNav />

      <main className="min-h-screen bg-[#f3f6ff] relative overflow-hidden text-slate-900">
        {/* Háttér aurák */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#d7e3ff] blur-[180px] opacity-70" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full bg-[#c4d9ff] blur-[220px] opacity-60" />

        {/* HERO */}
        <section className="pt-32 pb-20 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1d4ed8] via-[#4b7dd6] to-[#7fa4dd] text-transparent bg-clip-text">
            Kontaktujte nás
          </h1>

          <p className="max-w-xl mx-auto mt-4 text-[#475569] text-lg">
            Máte otázky? Chcete konzultáciu alebo cenovú ponuku?
            Radi vám pripravíme riešenie priamo pre váš projekt.
          </p>

          <div className="w-20 h-[2px] mx-auto mt-6 bg-gradient-to-r from-transparent via-[#1d4ed8] to-transparent" />
        </section>

        {/* Kontakt blokkok */}
        <section className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 pb-24">
          <div className="grid md:grid-cols-2 gap-10">

            {/* Bal oldal – Kontakt info */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_15px_45px_rgba(145,163,185,0.35)] border border-[#d4ddee]">
              <h2 className="text-2xl font-semibold mb-4 text-[#1e3a8a]">
                Kontakt údaje
              </h2>

              <p className="text-[#475569] mb-6">
                Sme vám k dispozícii počas pracovných dní.
              </p>

              <div className="space-y-4 text-[#1f2937] text-lg">
                <p>
                  <strong>Email:</strong>{" "}
                  <span className="text-[#1d4ed8] font-medium">
                    proformconsulting@azet.sk
                  </span>
                </p>

                <p>
                  <strong>Telefón:</strong>{" "}
                  <span className="text-[#1d4ed8] font-medium">
                    +421 —
                  </span>
                </p>

                <p className="text-sm opacity-80">PO–PIA 9:00 – 17:00</p>
              </div>
            </div>

            {/* Jobb oldal – Üzenetküldő form */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_15px_45px_rgba(145,163,185,0.35)] border border-[#d4ddee]">
              <h2 className="text-2xl font-semibold mb-4 text-[#1e3a8a]">
                Napíšte nám správu
              </h2>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Vaše meno"
                  className="w-full px-4 py-3 rounded-xl border border-[#c9d6ef] text-sm focus:ring-2 focus:ring-[#1d4ed8] outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl border border-[#c9d6ef] text-sm focus:ring-2 focus:ring-[#1d4ed8] outline-none"
                />
                <textarea
                  placeholder="Správa"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-[#c9d6ef] text-sm focus:ring-2 focus:ring-[#1d4ed8] outline-none"
                />
                <button
                  className="w-full py-3 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white font-semibold shadow-[0_12px_35px_rgba(37,99,235,0.5)] hover:scale-105 transition"
                >
                  Odoslať správu
                </button>
              </form>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}