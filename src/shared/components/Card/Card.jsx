import Image from "next/image";

const variants = {
  1: { image: "/assets/tech1.svg" },
  2: { image: "/assets/tech2.svg" },
  3: { image: "/assets/tech3.svg" },
};

export default function Card({ variant = 1, number, title, description, tags = [], children, className = "" }) {
  const { image } = variants[variant];

  return (
    <div className="max-w-170 h-[294px] w-[632px] max-[1200px]:w-full max-[1200px]:h-auto flex justify-between max-[1200px]:flex-col gap-4 px-4 py-3 border border-[rgba(248,239,239,0.1)] rounded-xl bg-[rgba(26,26,29,1)]">
      <div className="flex flex-col gap-3">
        <p className="font-[family-name:var(--font-geist-mono)] text-[12px] font-normal text-[rgba(168,168,168,1)]">
          {number}
        </p>
        <p className="font-[family-name:var(--font-geist)] text-[32px] font-normal text-[rgba(248,239,239,1)]">
          {title}
        </p>
        <p className="font-[family-name:var(--font-geist)] text-[16px] font-normal text-[rgba(168,168,168,1)]">
          {description}
        </p>
        {tags.map((row, i) => (
          <div
            key={i}
            className="flex flex-wrap justify-between gap-x-3 gap-y-1 max-[1200px]:justify-start uppercase"
          >
            {row.map((tag) => (
              <span
                key={tag}
                className="whitespace-nowrap font-[family-name:var(--font-geist-mono)] text-[12px] font-normal text-[rgba(168,168,168,1)]"
              >
                {tag}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="relative w-[236px] max-[1200px]:w-full max-[1200px]:h-[180px] self-stretch shrink-0 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={`Technology card variant ${variant}`}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
