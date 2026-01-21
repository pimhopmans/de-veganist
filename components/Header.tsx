"use client";
import Link from "next/link";
import { scrollTo } from "@/lib/window/scroll";

export default function Header() {
  return (
    <header className="border-b border-b-stone-200">
      <div className="mx-auto max-w-4xl flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold text-green-600">
          De Veganist
        </Link>

        <nav className="space-x-4">
          <button onClick={() => scrollTo("recepten")}>Recepten</button>
        </nav>
      </div>
    </header>
  );
}
