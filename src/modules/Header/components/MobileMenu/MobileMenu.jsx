"use client";

import Image from "next/image";
import { MOBILE_NAV_LINKS } from "../../constants";

export default function MobileMenu({ isOpen, onClose }) {
  const handleClick = (e, href) => {
    e.preventDefault();
    onClose();
    if (!href) return;
    const id = href.replace("#", "");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-40 bg-[rgba(1,0,4,1)] px-6 pb-12 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between pt-8">
        <Image src="/assets/Logo.svg" alt="CrashDevils" width={30} height={30} />
        <button
          onClick={onClose}
          className="relative cursor-pointer w-[61px] h-[25px] flex items-center justify-center"
          aria-label="Close menu"
        >
          <Image src="/assets/close.svg" alt="Close menu" fill className="object-contain" />
        </button>
      </div>
      <nav className="flex flex-col gap-6 pt-10">
        {MOBILE_NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href ?? "#"}
            onClick={(e) => handleClick(e, href)}
            className="font-[family-name:var(--font-geist-mono)] text-[rgba(248,239,239,1)] text-2xl uppercase tracking-wide hover:opacity-75 transition-opacity cursor-pointer"
          >
            / {label}
          </a>
        ))}
      </nav>
    </div>
  );
}
