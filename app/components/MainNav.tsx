
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

const navItems = [
  { href: "/hu", label: "Főoldal" },
  { href: "/hu/services", label: "Szolgáltatások" },
  { href: "/hu/projects", label: "Projektek" },
  { href: "/hu/about", label: "Rólunk" },
  { href: "/hu/calculator", label: "Kalkulátor" },
  { href: "/hu/contact", label: "Kapcsolat" },
];

export default function MainNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // ha útvonal vált, csukjuk be a mobil menüt
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="w-full z-40">
      {/* Felső sáv – mobil + desktop */}
      <div className="mx-auto max-w-6xl px-4 pt-4 md:pt-6">
        <div className="flex items-center justify-between gap-3 rounded-full bg-slate-900/90 text-white px-4 py-2 shadow-lg shadow-slate-900/40">
          {/* Bal oldal – logó / név */}
          <Link href="/hu" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-gradient-to-br from-blue-500 to-slate-500 flex items-center justify-center text-xs font-semibold">
              P
            </div>
            <span className="hidden sm:inline text-sm font-semibold tracking-wide">
              ProForm Consulting
            </span>
          </Link>

          {/* Desktop menü */}
          <nav className="hidden md:flex items-center gap-2 text-sm">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full transition whitespace-nowrap ${
                    active
                      ? "bg-white text-slate-900 shadow-md"
                      : "text-slate-100/80 hover:bg-slate-100/10"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Nyelvváltó desktopon */}
            <div className="ml-3">
              <LanguageSwitcher />
            </div>
          </nav>

          {/* Mobil jobb oldal – nyelvváltó + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setOpen((p) => !p)}
              className="inline-flex items-center justify-center rounded-full border border-slate-500/70 bg-slate-800/80 p-1.5 hover:bg-slate-700/80 transition"
              aria-label="Menü megnyitása"
            >
              <span
                className={`block h-0.5 w-5 rounded-full bg-white transition-transform ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-white my-0.5 transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-white transition-transform ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobil lenyíló menü */}
      <div
        className={`md:hidden transition-[max-height,opacity] duration-300 ease-out overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4">
          <nav className="mt-2 mb-3 rounded-2xl bg-slate-900/95 text-white shadow-xl shadow-slate-900/40 px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`w-full rounded-xl px-3 py-2 text-sm font-medium tracking-wide transition ${
                    active
                      ? "bg-white text-slate-900"
                      : "text-slate-100/90 hover:bg-slate-100/10"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}