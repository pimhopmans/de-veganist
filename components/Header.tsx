"use client";
import Link from "next/link";
import { scrollTo } from "@/lib/window/scroll";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { worksansFont } from "@/lib/fonts";

export default function Header() {
  return (
    <header className={`${worksansFont.variable} border-b border-b-stone-200`}>
      <div className="mx-auto max-w-4xl flex items-center justify-between p-4">
        <Link href="/" className="w-48">
          <Image src={logo} alt="De Veganist logo" />
        </Link>

        <nav className="space-x-4">
          <button
            className="hover:underline"
            onClick={() => scrollTo("recepten")}
          >
            Recepten
          </button>
        </nav>
      </div>
    </header>
  );
}
