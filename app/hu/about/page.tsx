import Image from "next/image";
import MainNav from "../../components/MainNav";

export default function About() {
  return (
    <>
      <MainNav />

      <main className="min-h-screen bg-[#f5f7fb] text-slate-900 relative overflow-hidden">
        {/* Háttér aurák */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#d7e3ff] blur-[200px] opacity-70" />
        <div className="pointer-events-none absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full bg-[#c4d9ff] blur-[220px] opacity-60" />
        <div className="pointer-events-none absolute bottom-[-260px] left-1/4 w-[460px] h-[460px] rounded-full bg-[#e0e6f5] blur-[180px] opacity-80" />

        {/* HERO */}
        <section className="relative w-full pt-24 pb-16 md:pt-28 md:pb-20 bg-gradient-to-b from-white/95 via-[#f2f5fd]/96 to-[#eef2fb]">
          <div className="max-w-5xl mx-auto px-4 md:px-6 text-center relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#1f4fa5] via-[#3e6fb8] to-[#7fa4dd] text-transparent bg-clip-text">
              Rólunk
            </h1>

            <p className="text-[#4b5563] max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
              Évek óta építési és bontási projekteken dolgozunk. Az építőiparban
              otthonosan mozgunk, stabil háttérrel, megbízható szakemberekkel és
              olyan rendszerrel, amely a teljes projektet egyben kezeli az első
              ötlettől a kulcsátadásig – átláthatóan, profi szervezettséggel.
            </p>
          </div>
        </section>

        {/* BLOKK 1 – Kik vagyunk? */}
        <section className="relative py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-10 items-center">
            {/* Szöveg */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text">
                Kik vagyunk?
              </h2>

              <p className="text-[#4b5563] mb-4 leading-relaxed text-sm sm:text-base">
                Csapatunk olyan szakemberekből, partnervállalkozásokból és
                mesterekből áll, akik hosszú évek óta dolgoznak együtt. A
                háttérben egy összehangolt hálózat működik, amely képes
                bármilyen építési vagy bontási feladatot elvégezni – a kisebb
                ingatlanoktól egészen a nagyméretű ipari és kereskedelmi
                épületekig.
              </p>

              <p className="text-[#4b5563] leading-relaxed text-sm sm:text-base">
                Gyárak, hangárok, csarnokok, raktárak, üzletek, éttermek,
                családi házak és lakóépületek kivitelezésében és bontásában
                szereztünk tapasztalatot. Végeztünk talajmunkákat, útépítést és
                közlekedési felületek kialakítását új lakónegyedeknél is – a
                teljes folyamatot végigkövetve.
              </p>
            </div>

            {/* Kép */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-[#d0d7e6] shadow-[0_12px_45px_rgba(148,163,184,0.4)]">
              <Image
                src="/about-team.jpeg"
                alt="ProForm Consulting csapat és projektvezetés"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* BLOKK 2 – Mit nyújtunk? */}
        <section className="relative py-16 md:py-20 bg-gradient-to-b from-[#eef2ff] to-[#f5f7ff]">
          <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-10 items-center">
            {/* Kép */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-[#d0d7e6] shadow-[0_12px_45px_rgba(148,163,184,0.4)]">
              <Image
                src="/about-vr.jpeg"
                alt="Építkezési folyamat és VR előnézet ProForm Consulting"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Szöveg */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text">
                Mit nyújtunk?
              </h2>

              <p className="text-[#4b5563] mb-4 leading-relaxed text-sm sm:text-base">
                A célunk, hogy az építkezés ne egy kaotikus, stresszes
                időszak legyen. Az ügyfélnek ne kelljen mestereket keresnie,
                időpontokat egyeztetnie vagy problémákat kezelnie – mi egyben
                átvállaljuk a folyamat irányítását.
              </p>

              <ul className="text-[#475569] text-sm space-y-2">
                <li>• teljes projektkoordináció és ütemezés</li>
                <li>• engedélyek és adminisztráció intézése</li>
                <li>• megbízható cégek és szakemberek bevonása</li>
                <li>• bontás → építés → befejezés egy kézben</li>
                <li>• VR előnézet a projekt indulása előtt</li>
                <li>• kulcsrakész átadás átlátható kommunikációval</li>
              </ul>

              <p className="text-[#4b5563] mt-4 leading-relaxed text-sm sm:text-base">
                Egy olyan irodát építünk, ahol{" "}
                <span className="font-semibold">valódi csapatmunka</span>{" "}
                zajlik. Nem improvizálunk – a folyamataik össze vannak
                hangolva, így a projekted előrehaladása kiszámítható, a döntéseid
                pedig nyugodtabbak lehetnek.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}