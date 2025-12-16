"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const BRAND = "ProForm Consulting";
const LEGAL = "TRANSBETON PLUS, spol. s r.o.";

export default function Footer() {
  const pathname = usePathname() || "/";
  const isHu = pathname === "/hu" || pathname.startsWith("/hu/");

  // NINCS /sk – nálad az SK a root ("/")
  const links = isHu
    ? [
        { label: "Impresszum", href: "/hu/impresszum" },
        { label: "ÁSZF", href: "/hu/aszf" },
        { label: "Adatkezelés", href: "/hu/adatkezeles" },
        { label: "Cookie", href: "/hu/cookie" },
        { label: "Jogi nyilatkozat", href: "/hu/jogi-nyilatkozat" },
      ]
    : [
        { label: "Impressum", href: "/impressum" },
        { label: "VOP", href: "/vop" },
        { label: "Ochrana údajov", href: "/ochrana-udajov" },
        { label: "Cookies", href: "/cookies" },
        { label: "Právne oznámenie", href: "/pravne-oznamenie" },
      ];

  return (
    <footer className="border-t border-[#e2e8f0] bg-[#f5f7fb] text-slate-700">
      <div className="relative">
        {/* finom aura */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.25] bg-[radial-gradient(circle_at_bottom,#e0e7ff_0,#f5f7fb_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* BAL – brand */}
            <div>
              <h3 className="text-lg font-semibold text-[#1e3a8a]">
                {BRAND}
              </h3>

              <p className="mt-2 text-sm text-[#475569] max-w-md leading-relaxed">
                Építési projektkoordináció, tanácsadás és előkészítés modern,
                átlátható szemlélettel.
              </p>
            </div>

            {/* JOBB – jogi linkek */}
            <div className="md:text-right">
              <p className="text-xs uppercase tracking-[0.18em] text-[#94a3b8] mb-4">
                {isHu ? "Jogi információk" : "Právne informácie"}
              </p>

              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-[#475569] hover:text-[#1d4ed8] transition"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-[#e2e8f0] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-xs text-[#94a3b8]">
              © {new Date().getFullYear()} {BRAND}
            </p>

            <p className="text-[11px] text-[#cbd5e1]">
              Jogi háttér: {LEGAL}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}