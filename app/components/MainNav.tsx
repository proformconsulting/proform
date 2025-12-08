"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

const NAV_ITEMS = [
  {
    key: "home",
    labelSk: "Úvod",
    labelHu: "Főoldal",
    hrefSk: "/",
    hrefHu: "/hu",
  },
  {
    key: "about",
    labelSk: "O nás",
    labelHu: "Rólunk",
    hrefSk: "/about",
    hrefHu: "/hu/about",
  },
  {
    key: "services",
    labelSk: "Služby",
    labelHu: "Szolgáltatások",
    hrefSk: "/services",
    hrefHu: "/hu/services",
  },
  {
    key: "projects",
    labelSk: "Projekty",
    labelHu: "Projektek",
    hrefSk: "/projects",
    hrefHu: "/hu/projects",
  },
  {
    key: "calculator",
    labelSk: "Kalkulačka",
    labelHu: "Kalkulátor",
    hrefSk: "/calculator",
    hrefHu: "/hu/calculator",
  },
  {
    key: "contact",
    labelSk: "Kontakt",
    labelHu: "Kapcsolat",
    hrefSk: "/contact",
    hrefHu: "/hu/contact",
  },
];

export default function MainNav() {
  const pathname = usePathname() || "/";

  const isHu = pathname === "/hu" || pathname.startsWith("/hu/");
  const currentItems = NAV_ITEMS.map((item) => {
    const href = isHu ? item.hrefHu : item.hrefSk;
    const label = isHu ? item.labelHu : item.labelSk;
    return { ...item, href, label };
  });

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/60 bg-gradient-to-b from-slate-950/95 via-slate-950/90 to-slate-950/80 backdrop-blur-xl">
      {/* Felső sor: logó + nyelvváltó */}
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
        {/* Minimal logó / név */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#1f4fa5] via-[#60a5fa] to-[#1f4fa5] shadow-[0_0_25px_rgba(37,99,235,0.7)] flex items-center justify-center text-[14px] font-semibold text-white">
            P
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-xs font-semibold tracking-[0.18em] text-slate-300 uppercase">
              ProForm
            </span>
            <span className="text-[11px] text-slate-400">
              Consulting
            </span>
          </div>
        </div>

        {/* Nyelvváltó gomb – a már meglévő LanguageSwitcher */}
        <LanguageSwitcher />
      </div>

      {/* Második sor: navigációs „tabletta” – mobilon is, hamburger nélkül */}
      <div className="max-w-6xl mx-auto px-3 pb-3">
        <nav
          aria-label="Fő navigáció"
          className="w-full overflow-x-auto"
        >
          <ul className="flex items-center gap-2 rounded-full bg-slate-900/90 px-2 py-1 border border-slate-700/70 shadow-[0_16px_40px_rgba(15,23,42,0.85)]">
            {currentItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href + "/"));

              return (
                <li key={item.key} className="flex-shrink-0">
                  <Link
                    href={item.href}
                    className={
                      "px-3.5 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all " +
                      (isActive
                        ? "bg-gradient-to-r from-[#2563eb] via-[#1d4ed8] to-[#3b82f6] text-white shadow-[0_10px_30px_rgba(37,99,235,0.8)]"
                        : "text-slate-300/85 hover:text-white hover:bg-slate-800/80")
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}