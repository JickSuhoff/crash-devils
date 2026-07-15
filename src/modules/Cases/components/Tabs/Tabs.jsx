"use client";

import { TABS } from "../../constants";

export default function Tabs({ active, onChange }) {
  return (
    <div className="flex gap-6 w-full border-b border-[rgba(255,255,255,0.15)]">
      {TABS.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`relative font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-widest pb-2 transition-colors cursor-pointer ${
            active === tab
              ? "text-[rgba(255,255,255,1)]"
              : "text-[rgba(168,168,168,1)] hover:text-[rgba(255,255,255,0.6)]"
          }`}
        >
          {tab}
          {active === tab && (
            <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[rgba(255,255,255,1)]" />
          )}
        </button>
      ))}
    </div>
  );
}
