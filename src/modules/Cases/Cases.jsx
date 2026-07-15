"use client";

import { useState } from "react";
import Tabs from "./components/Tabs";
import CaseCard from "./components/CaseCard";
import { TABS, CASES } from "./constants";

export default function Cases() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const filtered = CASES.filter((c) => c.category === activeTab);

  return (
    <section id="cases" className="w-full px-20 max-[1200px]:px-5">
      <div className="flex flex-col items-center text-center gap-3">
        <div className="bg-[rgba(248,239,239,0.1)] border-l-2 border-[rgba(171,171,171,1)] mb-4 w-fit h-6 px-2 flex justify-center items-center">
          <p className="font-[family-name:var(--font-geist-mono)] font-normal text-[rgba(255,255,255,1)] text-xs uppercase tracking-widest">
            Cases
          </p>
        </div>
        <h2 className="font-[family-name:var(--font-geist)] text-[48px] max-[1200px]:text-[24px] font-normal text-[rgba(255,255,255,1)] leading-[1.1] max-w-[600px] max-[1200px]:max-w-[450px]">
          Test about the work you&apos;ve did to your clients and stuff
        </h2>
        <p className="font-[family-name:var(--font-geist)] text-[16px] font-normal text-[rgba(168,168,168,1)] max-w-[722px] max-[1200px]:max-w-[450px]">
          Crash Devils is a Ukraine-born software development company with over
          10 years of experience, specializing in modern web applications and
          digital products for businesses worldwide.
        </p>
      </div>

      <div className="flex flex-col gap-6 mt-10">
        <Tabs active={activeTab} onChange={setActiveTab} />
        <div className="grid grid-cols-2 max-[810px]:flex max-[810px]:flex-row max-[810px]:overflow-x-auto max-[810px]:snap-x max-[810px]:snap-mandatory max-[810px]:pb-2 gap-4">
          {filtered.length > 0 ? (
            filtered.map((c) => (
              <CaseCard
                key={c.id}
                image={c.image}
                tags={c.tags}
                title={c.title}
              />
            ))
          ) : (
            <p className="font-[family-name:var(--font-geist)] text-[rgba(168,168,168,1)] text-[16px]">
              No cases yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
