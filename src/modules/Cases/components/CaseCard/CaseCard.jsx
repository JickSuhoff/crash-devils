import Image from "next/image";

export default function CaseCard({ image, tags = [], title, className = "" }) {
  return (
    <div className={`flex flex-col gap-3 max-[810px]:min-w-[80vw] max-[810px]:snap-start ${className}`}>
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-[family-name:var(--font-geist-mono)] text-[12px] font-normal text-[rgba(168,168,168,1)] uppercase tracking-widest"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="font-[family-name:var(--font-geist)] text-[32px] max-[1200px]:text-[20px] font-normal text-[rgba(255,255,255,1)]">
          {title}
        </p>
      </div>
    </div>
  );
}
