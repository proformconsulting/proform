"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LanguageSwitcher() {
  const pathname = usePathname() || "/";

  const isHu = pathname === "/hu" || pathname.startsWith("/hu/");

  const skPath = isHu
    ? pathname === "/hu"
      ? "/"
      : pathname.replace("/hu", "")
    : pathname;

  const huPath =
    pathname === "/"
      ? "/hu"
      : isHu
      ? pathname
      : "/hu" + pathname;   // <-- Itt volt a hiba, most STRING

  const targetHref = isHu ? skPath : huPath;
  const label = isHu ? "SK" : "HU";

  return (
    <Link
      href={targetHref}
      aria-label={isHu ? "Váltás szlovák nyelvre" : "Váltás magyar nyelvre"}
      className="
        flex items-center justify-center
        rounded-full
        px-3.5 py-1.5
        bg-slate-900/70
        backdrop-blur-md
        border border-slate-600/60
        text-white
        text-[10px] md:text-xs font-semibold tracking-wide
        shadow-[0_0_12px_rgba(15,23,42,0.4)]
        hover:bg-slate-800/80
        hover:border-slate-500
        transition-all
      "
    >
      {label}
    </Link>
  );
}