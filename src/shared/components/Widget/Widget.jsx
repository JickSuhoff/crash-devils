"use client";

import Image from "next/image";
import Button from "@/shared/components/Button";

export default function Widget({
  name,
  role,
  image,
  onButtonClick,
  className = "",
}) {
  return (
    <div
      className={`flex gap-3 p-2 rounded-xl bg-card border border-offwhite/10 w-[290px] ${className}`}
    >
      <div className="relative w-[95px] h-[120px] shrink-0 rounded-lg overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <div className="flex flex-col justify-between py-1">
        <div className="flex flex-col gap-1">
          <span className="font-[family-name:var(--font-geist)] text-[16px] font-medium text-[rgba(255,255,255,1)] leading-tight">
            {name}
          </span>
          <span className="font-[family-name:var(--font-geist-mono)] text-xs font-medium text-[rgba(168,168,168,1)] uppercase tracking-wide">
            {role}
          </span>
        </div>

        <Button size="sm" arrow onClick={onButtonClick}>
          Get in touch
        </Button>
      </div>
    </div>
  );
}
