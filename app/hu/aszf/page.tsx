
const BRAND = "ProForm Consulting";

function Shell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
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
            A szöveg tájékoztató jellegű. Éles szerződéshez javasolt jogász bevonása.
          </p>
        </div>
      </section>
    </main>
  );
}

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

export default function AszfHu() {
  return (
    <Shell
      title="ÁSZF"
      subtitle={`Az alábbi feltételek a ${BRAND} szolgáltatásainak általános keretrendszerét adják.`}
    >
      <div className="grid gap-5">
        <Block n="1" t="A szolgáltatás jellege">
          A szolgáltatás projektkoordinációt, tanácsadást, előkészítést és kommunikációs támogatást tartalmazhat.
          A konkrét tartalom minden esetben írásos megállapodásban kerül rögzítésre.
        </Block>

        <Block n="2" t="Nem kivitelezői felelősség">
          A {BRAND} nem vállal fizikai kivitelezést. Kivitelezési hibákért, anyagminőségért, munkavégzésért
          a kivitelező(ke)t terheli felelősség.
        </Block>

        <Block n="3" t="Harmadik felek, hatóságok">
          Tervezők, kivitelezők, beszállítók és hatóságok döntései, késedelmei vagy mulasztásai a {BRAND}
          hatókörén kívül esnek.
        </Block>

        <Block n="4" t="Szerződés létrejötte">
          A szolgáltatás kizárólag írásos ajánlat és annak elfogadása (email / szerződés) alapján jön létre.
        </Block>

        <Block n="5" t="Díjazás és fizetés">
          A díjazás egyedi ajánlat alapján történik. Fizetési ütemezés és feltételek a megállapodásban szerepelnek.
        </Block>

        <Block n="6" t="Felelősségkorlátozás">
          A {BRAND} a szolgáltatást gondos szakmai eljárással nyújtja, azonban közvetett károkért és elmaradt haszonért
          felelősséget nem vállal, kivéve ha jogszabály kötelezően másként rendelkezik.
        </Block>

        <Block n="7" t="Irányadó jog">
          A jelen feltételekre a Szlovák Köztársaság joga irányadó. Vita esetén elsődlegesen békés egyeztetésre törekszünk.
        </Block>
      </div>

    </Shell>
  );
}