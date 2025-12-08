"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function MainNav() {
  const pathname = usePathname() || "/";
  const isHu = pathname === "/hu" || pathname.startsWith("/hu/");

  const navItems = isHu
    ? [
        { href: "/hu", label: "Főoldal" },
        { href: "/hu/about", label: "Rólunk" },
        { href: "/hu/services", label: "Szolgáltatások" },
        { href: "/hu/projects", label: "Projektek" },
        { href: "/hu/calculator", label: "Kalkulátor" },
        { href: "/hu/contact", label: "Kapcsolat" },
      ]
    : [
        { href: "/", label: "Domov" },
        { href: "/about", label: "O nás" },
        { href: "/services", label: "Služby" },
        { href: "/projects", label: "Projekty" },
        { href: "/calculator", label: "Kalkulačka" },
        { href: "/contact", label: "Kontakt" },
      ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 pointer-events-none">
      <nav
        className="
          pointer-events-auto
          flex items-center gap-4
          rounded-full
          bg-slate-900/85
          text-white
          px-4 md:px-6 py-2
          shadow-[0_18px_45px_rgba(15,23,42,0.85)]
          backdrop-blur-xl
        "
      >
        {/* LOGÓ / BRAND */}
        <Link
          href={isHu ? "/hu" : "/"}
          className="flex items-center gap-2 pr-4 border-r border-slate-700"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-[11px] font-bold">
            P
          </span>
          <span className="text-xs md:text-sm font-semibold whitespace-nowrap">
            ProForm Consulting
          </span>
        </Link>

        {/* DESKTOP MENÜ */}
        <div className="hidden md:flex items-center gap-3 text-[11px] md:text-xs">
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  "px-3 py-1 rounded-full transition " +
                  (active
                    ? "bg-white text-slate-900 shadow-[0_0_0_1px_rgba(148,163,184,0.6)]"
                    : "text-slate-200/80 hover:bg-slate-800/80")
                }
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* MOBIL MENÜ – vízszintesen görgethető, NINCS hamburger */}
        <div className="flex md:hidden gap-2 overflow-x-auto max-w-[55vw]">
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  "px-3 py-1 rounded-full text-[11px] whitespace-nowrap transition " +
                  (active
                    ? "bg-white text-slate-900"
                    : "text-slate-200/80 bg-slate-800/70")
                }
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* NYELVVÁLTÓ */}
        <LanguageSwitcher />
      </nav>
    </header>
  );
}