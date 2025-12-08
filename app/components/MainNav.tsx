"use client";

import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  const isHu = pathname === "/hu" || pathname.startsWith("/hu/");
  const currentItems = NAV_ITEMS.map((item) => {
    const href = isHu ? item.hrefHu : item.hrefSk;
    const label = isHu ? item.labelHu : item.labelSk;
    return { ...item, href, label };
  });

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-b from-slate-950/95 via-slate-950/90 to-slate-950/85 backdrop-blur-xl border-b border-slate-800/70">
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
        {/* LOGÓ / NÉV */}
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#1f4fa5] via-[#60a5fa] to-[#1f4fa5] shadow-[0_0_25px_rgba(37,99,235,0.8)] flex items-center justify-center text-[15px] font-semibold text-white">
            P
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-[11px] font-semibold tracking-[0.18em] text-slate-300 uppercase">
              ProForm
            </span>
            <span className="text-[11px] text-slate-400">Consulting</span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-2">
          <ul className="flex items-center gap-1.5 rounded-full bg-slate-900/90 px-2 py-1 border border-slate-700/70 shadow-[0_16px_40px_rgba(15,23,42,0.85)] text-sm">
            {currentItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href + "/"));

              return (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className={
                      "px-3.5 py-1.5 rounded-full font-medium transition-all " +
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

          {/* Nyelvváltó jobbra */}
          <div className="ml-3">
            <LanguageSwitcher />
          </div>
        </nav>

        {/* MOBIL: nyelvváltó + MENÜ gomb */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 bg-slate-900/90 border border-slate-700/80 text-[11px] font-semibold text-slate-100 shadow-[0_10px_30px_rgba(15,23,42,0.85)] hover:bg-slate-800/90 transition-all"
            aria-expanded={isOpen}
            aria-label="Navigáció megnyitása"
          >
            <span>{isHu ? "Menü" : "Menu"}</span>
            <span className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}>
              ▾
            </span>
          </button>
        </div>
      </div>

      {/* MOBIL LENYÍLÓ MENÜ */}
      {isOpen && (
        <nav className="md:hidden border-t border-slate-800/70 bg-slate-950/95">
          <ul className="max-w-6xl mx-auto px-4 py-3 space-y-1">
            {currentItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href + "/"));

              return (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    className={
                      "block w-full rounded-xl px-3.5 py-2 text-sm font-medium transition-all " +
                      (isActive
                        ? "bg-gradient-to-r from-[#2563eb] via-[#1d4ed8] to-[#3b82f6] text-white shadow-[0_10px_28px_rgba(37,99,235,0.8)]"
                        : "text-slate-200/90 bg-slate-900/80 hover:bg-slate-800/90")
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}