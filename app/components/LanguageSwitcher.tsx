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
        rounded-full 
        px-3 py-1.5
        bg-slate-800/80 
        text-white 
        border border-slate-600
        shadow-sm
        text-xs font-semibold
        hover:bg-slate-700 
        transition
        md:text-sm
      "
    >
      {isHu ? "SK" : "HU"}
    </Link>
  );
}