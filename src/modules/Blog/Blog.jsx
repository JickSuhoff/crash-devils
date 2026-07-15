"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/shared/components/Button";
import Dialog from "@/shared/components/Dialog";

const POSTS = [
  {
    id: 1,
    image: "/assets/blog1.svg",
    date: "April 2025",
    tags: ["Node.js", "Web", "SaaS"],
    title: "App for Inspector",
  },
  {
    id: 2,
    image: "/assets/blog2.svg",
    date: "April 2025",
    tags: ["Node.js", "Web", "SaaS"],
    title: "App for Inspector",
  },
  {
    id: 3,
    image: "/assets/blog3.svg",
    date: "April 2025",
    tags: ["Node.js", "Web", "SaaS"],
    title: "App for Inspector",
  },
];

export default function Blog() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section id="blog" className="w-full px-20 max-[1200px]:px-5 mt-28">
      {/* Header row */}
      <div className="flex items-end justify-between mb-10 max-[1200px]:flex-col max-[1200px]:items-start">
        <div className="flex flex-col gap-3">
          <div className="bg-[rgba(248,239,239,0.1)] border-l-2 border-[rgba(171,171,171,1)] w-fit h-6 px-2 flex justify-center items-center">
            <p className="font-[family-name:var(--font-geist-mono)] font-normal text-[rgba(255,255,255,1)] text-xs uppercase tracking-widest">
              Blog
            </p>
          </div>
          <h2 className="font-[family-name:var(--font-geist)] text-[48px] max-[1200px]:text-[24px] font-normal text-[rgba(255,255,255,1)] leading-[1.1]">
            Fast. Scalable. Maintainable.
          </h2>
        </div>
        <Button
          variant="dark"
          arrow
          onClick={() => setDialogOpen(true)}
          className="w-[123px] h-[46px] p-0! max-[1200px]:mt-5"
        >
          See More
        </Button>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-3 max-[1200px]:flex max-[1200px]:flex-row max-[1200px]:overflow-x-auto max-[1200px]:snap-x max-[1200px]:snap-mandatory max-[1200px]:pb-2 gap-4">
        {POSTS.map(({ id, image, date, tags, title }) => (
          <div
            key={id}
            className="flex flex-col gap-3 cursor-pointer group max-[1200px]:shrink-0 max-[1200px]:w-[330px] max-[1200px]:snap-start"
          >
            <div className="relative w-full aspect-[4/3] max-[1200px]:h-[250px] max-[1200px]:aspect-auto rounded-xl overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <span className="font-[family-name:var(--font-geist-mono)] text-[12px] text-[rgba(168,168,168,1)] uppercase tracking-widest">
                  {date}
                </span>
                <div className="flex items-center gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-[family-name:var(--font-geist-mono)] text-[12px] text-[rgba(168,168,168,1)] uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="font-[family-name:var(--font-geist)] text-[24px] max-[1200px]:text-[20px] font-normal text-[rgba(255,255,255,1)]">
                {title}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Dialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title="We'll get in touch to schedule a presentation for you"
        emailLabel="Your Email"
        titleLabel="Subject"
        descriptionLabel="Message"
      />
    </section>
  );
}
