import Image from "next/image";
import MainNav from "../components/MainNav";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function About() {
  return (
    <>
      <LanguageSwitcher />
      <MainNav />

      <main className="min-h-screen bg-[#f5f7fb] text-slate-900 relative overflow-hidden">

        {/* Pozadie – svetlé modré aury */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#d7e3ff] blur-[200px] opacity-70" />
        <div className="pointer-events-none absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full bg-[#c4d9ff] blur-[220px] opacity-60" />
        <div className="pointer-events-none absolute bottom-[-260px] left-1/4 w-[460px] h-[460px] rounded-full bg-[#e0e6f5] blur-[180px] opacity-80" />

        {/* HERO */}
        <section className="relative w-full py-20 md:py-24 bg-gradient-to-b from-white/95 via-[#f2f5fd]/96 to-[#eef2fb]">
          <div className="max-w-5xl mx-auto px-4 md:px-6 text-center relative z-10">

            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#1f4fa5] via-[#3e6fb8] to-[#7fa4dd] text-transparent bg-clip-text">
              O nás
            </h1>

            <p className="text-[#4b5563] max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
              Už roky sa venujeme stavebným aj demolačným projektom. V stavebnom
              prostredí sa pohybujeme profesionálne, so stabilným zázemím,
              overenými majstrami a systémom, ktorý riadi celý projekt
              od prvého kroku až po odovzdanie kľúčov.
            </p>
          </div>
        </section>

        {/* BLOK 1 */}
        <section className="relative py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-10 items-center">

            {/* Text */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text">
                Kto sme?
              </h2>

              <p className="text-[#4b5563] mb-4 leading-relaxed text-base">
                Náš tím tvorí sieť odborníkov, majstrov a partnerských firiem,
                s ktorými dlhodobo spolupracujeme. Zabezpečujeme široké spektrum
                stavebných aj demolačných prác od menších objektov až po veľké
                priemyselné a komerčné projekty.
              </p>

              <p className="text-[#4b5563] mb-4 leading-relaxed text-base">
                Realizovali sme výstavbu aj demontáž fabrík, hangárov, skladov,
                obchodných priestorov, reštaurácií, rodinných domov, obytných budov,
                terénne práce a výstavbu ciest pre nové rezidenčné štvrte.
              </p>
            </div>

            {/* Obrázok */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-[#d0d7e6] shadow-[0_12px_45px_rgba(148,163,184,0.4)]">
              <Image
                src="/about-team.jpeg"
                alt="Náš tím a projektové riadenie"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* BLOK 2 */}
        <section className="relative py-16 md:py-20 bg-gradient-to-b from-[#eef2ff] to-[#f5f7ff]">
          <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-10 items-center">

            {/* Obrázok */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-[#d0d7e6] shadow-[0_12px_45px_rgba(148,163,184,0.4)]">
              <Image
                src="/about-vr.jpeg"
                alt="Stavebný proces a VR náhľad"
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text">
                Čo ponúkame?
              </h2>

              <p className="text-[#4b5563] mb-4 leading-relaxed">
                Našou filozofiou je, aby klient nemusel riešiť žiadne problémy,
                hľadanie pracovníkov, koordináciu termínov, administratívu ani dohľad.
                O všetko sa staráme my profesionálne, prehľadne a načas.
              </p>

              <ul className="text-[#475569] text-sm space-y-2">
                <li>• kompletná koordinácia projektu & harmonogram</li>
                <li>• vybavovanie povolení a administratívy</li>
                <li>• overené firmy & odborníci v našej sieti</li>
                <li>• demolácia → stavba → dokončenie v jednom systéme</li>
                <li>• VR náhľad projektu ešte pred začiatkom realizácie</li>
                <li>• odovzdanie stavby v režime „na kľúč“ bez stresu</li>
              </ul>

              <p className="text-[#4b5563] mt-4 leading-relaxed">
                Sme pracovisko, kde funguje *skutočná tímová spolupráca*.
                Procesy máme zosúladené tak, aby bol projekt plynulý,
                predvídateľný a profesionálne riadený.
              </p>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}