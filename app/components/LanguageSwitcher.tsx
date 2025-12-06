"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname() || "/";

  // HU verzió felismerése
  const isHu = pathname === "/hu" || pathname.startsWith("/hu/");

  // Cél URL generálása
  let targetHref: string;

  if (isHu) {
    const withoutPrefix = pathname.slice(3);
    targetHref = withoutPrefix === "" ? "/" : withoutPrefix;
  } else {
    targetHref = pathname === "/" ? "/hu" : "/hu" + pathname;
  }

  return (
    <Link
      href={targetHref}
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
      aria-label={isHu ? 'Váltás szlovák nyelvre' : 'Váltás magyar nyelvre'}
    >
      {isHu ? "SK" : "HU"}
    </Link>
  );
}