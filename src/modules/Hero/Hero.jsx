"use client";

import { useState } from "react";
import Widget from "@/shared/components/Widget";
import Dialog from "@/shared/components/Dialog";

export default function Hero() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section
      id="home"
      className="w-full px-20 max-[1200px]:px-5 flex flex-col gap-70 max-[1200px]:gap-90"
    >
      <div className="flex justify-end">
        <p className="max-w-73 font-normal font-[family-name:var(--font-geist)] text-[rgba(255,255,255,1)] text-[16px] text-right leading-relaxed">
          Ukraine-born experts with 10+ years of experience. We build fast,
          scalable, and maintainable web products using React, Next.js, and
          Node.js
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <p className="max-w-[80%] mx-auto text-center font-[family-name:var(--font-geist)] text-[rgba(255,255,255,1)] font-normal text-[38px] leading-[1.2]">
          We build modern web, mobile, and AI-powered products that help
          businesses launch faster, scale confidently, and stay ahead of the
          competition.
        </p>
        <p className="max-w-[80%] mx-auto text-center font-[family-name:var(--font-geist)] text-[rgba(255,255,255,1)] font-normal text-[16px] leading-[1.2]">
          From MVPs to enterprise platforms, we combine engineering excellence
          with modern technologies to create reliable software built for
          long-term success.
        </p>
      </div>
      <div className="flex justify-between items-center max-[1200px]:flex-col max-[1200px]:items-start max-[1200px]:gap-5">
        <div>
          <div className="bg-[rgba(248,239,239,0.1)] border-l-2 border-[rgba(171,171,171,1)] mb-4 w-fit h-6 px-2 flex justify-center items-center">
            <p className="font-[family-name:var(--font-geist-mono)] font-normal text-[rgba(255,255,255,1)] text-xs uppercase tracking-widest">
              Breaking Digital Limits
            </p>
          </div>
          <h1 className="font-[family-name:var(--font-geist)] max-w-[400px] text-[rgba(255,255,255,1)] font-normal text-[56px] leading-[1.2]">
            Fast. Scalable. Maintainable.
          </h1>
        </div>

        <Widget
          name="Let's Talk"
          role="Manager"
          image="/assets/Avatar.png"
          className="max-[500px]:w-full"
          onButtonClick={() => setDialogOpen(true)}
        />
      </div>

      <Dialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title="Let's Build Something Powerful"
        emailLabel="Your Email"
        titleLabel="Subject"
        descriptionLabel="Message"
      />
    </section>
  );
}
