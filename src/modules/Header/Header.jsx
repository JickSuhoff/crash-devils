"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./components/MobileMenu";
import { NAV_LINKS } from "./constants";

const scrollTo = (href) => {
  const id = href.replace("#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="hidden min-[1199px]:flex items-start justify-between px-20 max-[1200px]:px-5 pt-8">
        <nav className="flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(href);
              }}
              className="font-[family-name:var(--font-geist-mono)] text-[rgba(248,239,239,1)] text-xs uppercase tracking-wide hover:opacity-75 transition-opacity cursor-pointer"
            >
              / {label}
            </a>
          ))}
        </nav>

        <Link href="/">
          <Image
            src="/assets/logoWithText.svg"
            alt="CrashDevils"
            width={171}
            height={30}
            priority
          />
        </Link>
      </header>

      {/* Mobile — visible below 1199px */}
      <header className="flex min-[1199px]:hidden items-center justify-between px-20 max-[1200px]:px-5 pt-8">
        <Link href="/">
          <Image
            src="/assets/Logo.svg"
            alt="CrashDevils"
            width={30}
            height={30}
            priority
          />
        </Link>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="relative cursor-pointer w-[61px] h-[25px] flex items-center justify-center"
          aria-label="Open menu"
        >
          <Image
            src="/assets/burger.svg"
            alt="Open menu"
            fill
            className="object-contain"
          />
        </button>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
