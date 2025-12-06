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
] as const;

export default function MainNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";

  // útvonalváltáskor zárjuk a mobilmenüt
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-40">
      {/* Felső sáv – mobil + desktop */}
      <div className="mx-auto max-w-6xl px-4 pt-3 pb-2 md:pt-4">
        <div
          className="
            flex items-center justify-between gap-3
            rounded-full
            bg-slate-900/85
            border border-slate-700/70
            text-white
            px-4 py-2.5
            shadow-[0_18px_45px_rgba(15,23,42,0.75)]
            backdrop-blur-md
          "
        >
          {/* Bal oldal – logó / név */}
          <Link
            href="/hu"
            className="flex items-center gap-2 hover:opacity-90 transition"
          >
            <div
              className="
                h-8 w-8
                rounded-full
                bg-gradient-to-br from-blue-500 via-sky-500 to-slate-500
                flex items-center justify-center
                text-xs font-semibold
                shadow-[0_0_18px_rgba(59,130,246,0.7)]
              "
            >
              P
            </div>
            <span className="hidden sm:inline text-sm font-semibold tracking-wide">
              ProForm Consulting
            </span>
          </Link>

          {/* Desktop menü */}
          <nav className="hidden md:flex items-center gap-1.5 text-sm">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full transition whitespace-nowrap ${
                    active
                      ? "bg-white text-slate-900 shadow-md shadow-slate-900/25"
                      : "text-slate-100/80 hover:bg-slate-100/10 hover:text-white"
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
              className="
                inline-flex items-center justify-center
                rounded-full
                border border-slate-500/70
                bg-slate-800/90
                p-1.5
                hover:bg-slate-700/90
                transition
              "
              aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
              aria-expanded={open}
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
        className={`
          md:hidden
          overflow-hidden
          transition-[max-height,opacity]
          duration-300
          ease-out
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="mx-auto max-w-6xl px-4">
          <nav
            className="
              mt-1 mb-3
              rounded-2xl
              bg-slate-900/95
              text-white
              shadow-[0_18px_45px_rgba(15,23,42,0.85)]
              px-4 py-3
              flex flex-col gap-1
            "
          >
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    w-full rounded-xl px-3 py-2
                    text-sm font-medium tracking-wide
                    transition
                    ${
                      active
                        ? "bg-white text-slate-900"
                        : "text-slate-100/90 hover:bg-slate-100/10"
                    }
                  `}
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