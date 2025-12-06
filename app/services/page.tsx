// app/sluzby/page.tsx
import Image from "next/image";
import LanguageSwitcher from "../components/LanguageSwitcher";
import MainNav from "../components/MainNav";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-900 relative overflow-hidden">
      <LanguageSwitcher />
        <MainNav />

      {/* Háttér aurák */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#d7e3ff] blur-[200px] opacity-70" />
      <div className="pointer-events-none absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full bg-[#c4d9ff] blur-[220px] opacity-60" />
      <div className="pointer-events-none absolute bottom-[-260px] left-1/4 w-[460px] h-[460px] rounded-full bg-[#e0e6f5] blur-[180px] opacity-80" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_top,#e0e7ff_0,#f5f7fb_55%)] mix-blend-screen" />

      {/* HERO – fő üzenet */}
      <section className="relative w-full py-20 md:py-24 bg-gradient-to-b from-white/95 via-[#f2f5fd]/96 to-[#eef2fb]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-[1.2fr,1fr] gap-10 items-center relative z-10">
          {/* Szöveg */}
          <div>
            <p className="text-[11px] md:text-xs tracking-[0.24em] uppercase text-[#64748b] mb-3">
              Projektové & koordinačné štúdio pre výstavbu
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-[#1f4fa5] via-[#3e6fb8] to-[#7fa4dd] text-transparent bg-clip-text">
              Od prvého nápadu až po odovzdanie kľúčov.
            </h1>
            <h2 className="text-lg md:text-xl font-semibold text-[#1f2937] mb-5">
              Jedna kancelária, ktorá za vás drží celý proces výstavby.
            </h2>
            <p className="text-[#4b5563] text-sm md:text-base leading-relaxed mb-6">
              Naším cieľom je, aby ste počas výstavby nemuseli riešiť majstrov,
              povolenia ani papierovanie. Celú cestu od prvotného zámeru, cez
              projekt, VR vizualizácie, vybavenie povolení až po samotnú
              výstavbu a odovzdanie prevezmeme za vás.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 text-xs md:text-sm">
              <div className="bg-white/90 rounded-xl p-4 shadow-[0_10px_30px_rgba(148,163,184,0.35)] border border-[#d4ddf4]">
                <div className="text-[#2563eb] font-semibold mb-1">
                  Bez starostí
                </div>
                <p className="text-[#4b5563]">
                  Žiadne behanie po úradoch, žiadne naháňanie majstrov. Všetko
                  riešime my.
                </p>
              </div>
              <div className="bg-white/90 rounded-xl p-4 shadow-[0_10px_30px_rgba(148,163,184,0.35)] border border-[#d4ddf4]">
                <div className="text-[#2563eb] font-semibold mb-1">
                  Rýchlejší postup
                </div>
                <p className="text-[#4b5563]">
                  Spolupracujeme s overenými firmami a remeselníkmi, s ktorými
                  máme dlhodobé zmluvy.
                </p>
              </div>
              <div className="bg-white/90 rounded-xl p-4 shadow-[0_10px_30px_rgba(148,163,184,0.35)] border border-[#d4ddf4]">
                <div className="text-[#2563eb] font-semibold mb-1">
                  Jasný prehľad
                </div>
                <p className="text-[#4b5563]">
                  Priebežne vás informujeme, no nič nemusíte organizovať
                  osobne.
                </p>
              </div>
            </div>
          </div>

          {/* Hero kép */}
          <div className="relative h-56 md:h-72 lg:h-80 rounded-3xl overflow-hidden border border-[#d0d7e6] bg-white shadow-[0_18px_50px_rgba(148,163,184,0.5)]">
            <Image
              src="/services-hero2.jpeg"
              alt="Koordinácia stavebného projektu"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 text-xs text-white/90">
              <div className="uppercase tracking-[0.22em] text-[10px]">
                COMPLEX PROJECT MANAGEMENT
              </div>
              <div className="text-sm font-medium">
                Jeden partner pre celú výstavbu
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Folyamat – 6 lépés */}
      <section className="relative py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text">
            Ako prebieha spolupráca krok za krokom
          </h2>
          <p className="text-[#4b5563] mb-8 text-sm md:text-base max-w-3xl">
            Sme partner, ktorý drží systém, harmonogram a zodpovednosť. Vy
            poznáte ďalší krok, ale nič nemusíte riešiť osobne.
          </p>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6 text-sm">
            {[
              {
                title: "1. Úvodná konzultácia",
                text: "Zadefinujeme vaše potreby, rozpočet, štýl a priority. Pripravíme rámcový plán projektu.",
              },
              {
                title: "2. Návrh & VR vizualizácia",
                text: "Vytvoríme 3D model a VR prehliadku, kde si viete pozrieť dom alebo prevádzku v reálnej mierke.",
              },
              {
                title: "3. Projekt & povolenia",
                text: "Projektová dokumentácia, podania na úrady, komunikácia so všetkými dotknutými stranami.",
              },
              {
                title: "4. Výber firiem a majstrov",
                text: "Pracujeme s overenými remeselníkmi a firmami, s ktorými máme dlhodobé zmluvy.",
              },
              {
                title: "5. Koordinácia výstavby",
                text: "Riadenie prác, kontrola kvality, harmonogram. Vy sa nestaráte o denný chod stavby.",
              },
              {
                title: "6. Kontrola & odovzdanie",
                text: "Preberanie prác, zoznam nedostatkov, finálne odovzdanie hotovej stavby a dokumentácie.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-5 border border-[#d4ddf4] shadow-[0_14px_36px_rgba(148,163,184,0.35)]"
              >
                <div className="text-[#1d4ed8] font-semibold mb-2">
                  {item.title}
                </div>
                <p className="text-[#4b5563] text-xs md:text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VR blok */}
      <section className="relative py-16 md:py-18 bg-gradient-to-r from-[#e0ebff] via-[#f5f7ff] to-[#e0ebff]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center relative z-10">
          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden border border-[#c7d4f0] bg-white shadow-[0_18px_50px_rgba(148,163,184,0.5)]">
            <Image
              src="/services-vr.jpeg"
              alt="VR prehliadka interiéru"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/45 via-transparent to-[#2563eb]/45" />
            <div className="absolute bottom-3 left-4 text-xs md:text-sm text-white">
              <div className="uppercase tracking-[0.22em] text-[10px] md:text-[11px]">
                VR PREHLIADKA PROJEKTU
              </div>
              <div className="font-medium">
                Vstúpte do svojho domu ešte pred výstavbou
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#1f2937]">
              Virtuálna realita dom, ktorý si viete „dotknúť“
            </h2>
            <p className="text-[#4b5563] text-sm md:text-base mb-4 leading-relaxed">
              Pomocou VR okuliarov sa prejdete po budúcom dome alebo prevádzke v
              skutočnej mierke. Vnímate priestor, svetlo, materiály aj nábytok
              akoby už bol hotový.
            </p>
            <ul className="text-[#475569] text-sm space-y-2">
              <li>• reálna mierka a proporcie miestností</li>
              <li>• možnosť meniť materiály, farby, osvetlenie</li>
              <li>• istota, že finálny výsledok bude zodpovedať vašim predstavám</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Csapat / network */}
      <section className="relative py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-[#6b7280] via-[#1d4ed8] to-[#60a5fa] text-transparent bg-clip-text">
              Silná sieť partnerov a remeselníkov
            </h2>
            <p className="text-[#4b5563] text-sm md:text-base mb-4 leading-relaxed">
              Nehľadáme majstrov počas projektu už ich máme. Spolupracujeme s
              firmami a remeselníkmi, s ktorými máme dlhodobé zmluvy a overenú
              kvalitu.
            </p>
            <p className="text-[#4b5563] text-sm md:text-base mb-4 leading-relaxed">
              Vy tak nečakáte mesiace na jednotlivé profesie a nemusíte riešiť
              koordináciu medzi nimi. Všetko drží v rukách jedna kancelária
              Proform Consulting.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs md:text-sm text-[#475569]">
              <ul className="space-y-1">
                <li>• projektanti a statici</li>
                <li>• murárske a betonárske partie</li>
                <li>• strechári</li>
                <li>• voda – kúrenie – plyn</li>
              </ul>
              <ul className="space-y-1">
                <li>• elektroinštalácie</li>
                <li>• obklady a podlahy</li>
                <li>• stolári, interiér</li>
                <li>• fasády a zateplenie</li>
              </ul>
            </div>
          </div>

          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden border border-[#d0d7e6] bg-white shadow-[0_18px_50px_rgba(148,163,184,0.5)]">
            <Image
              src="/services-team.jpeg"
              alt="Stavebný tím a koordinácia"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 text-xs md:text-sm text-white">
              <div className="uppercase tracking-[0.22em] text-[10px]">
                PARTNERSKÁ SIEŤ
              </div>
              <div className="font-medium">Overené firmy a remeselníci</div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt CTA */}
      <section className="relative py-18 md:py-20 bg-[#f5f7ff]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#d4ddf4] shadow-[0_18px_50px_rgba(148,163,184,0.45)]">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#1f2937]">
              Začnime s vaším projektom
            </h2>
            <p className="text-[#4b5563] text-sm md:text-base mb-6 max-w-2xl">
              Napíšte nám pár viet o vašom zámere rodinný dom, rekonštrukcia
              alebo komerčná stavba. Pripravíme pre vás jasný postup, odhad
              časového rámca a možnosti spolupráce.
            </p>

            <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-6">
              <div className="text-[#1f2937] text-sm md:text-base">
                <div className="mb-1">
                  Email:{" "}
                  <span className="font-semibold text-[#1d4ed8]">
                    proformconsulting@azet.sk
                  </span>
                </div>
                <div className="opacity-80 text-sm">
                  Telefonické hodiny: PO–PIA 9:00–17:00
                </div>
              </div>

              <button className="mt-2 md:mt-0 px-9 md:px-10 py-3.5 md:py-4 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white text-sm md:text-base font-semibold shadow-[0_16px_45px_rgba(37,99,235,0.75)] hover:scale-105 active:scale-100 transition">
                Idem na konzultáciu
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}