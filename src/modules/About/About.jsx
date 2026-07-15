import Ripples from "./components/Ripples";

export default function About() {
  return (
    <section id="about" className="w-full px-20 max-[1200px]:px-5">
      <div className="flex flex-col items-center text-center gap-3 max-w-270 m-auto max-[1200px]:px-20 max-[800px]:px-5">
        <div className="bg-[rgba(248,239,239,0.1)] border-l-2 border-[rgba(171,171,171,1)] mb-4 w-fit h-6 px-2 flex justify-center items-center">
          <p className="font-[family-name:var(--font-geist-mono)] font-normal text-[rgba(255,255,255,1)] text-xs uppercase tracking-widest">
            About us
          </p>
        </div>
        <h2 className="font-[family-name:var(--font-geist)] text-[48px] max-[1200px]:text-[24px] font-normal text-[rgba(255,255,255,1)] leading-[1.1]">
          We don&apos;t just write code - We solve business problems through
          thoughtful engineering.
        </h2>
        <p className="font-[family-name:var(--font-geist)] text-[16px] font-normal text-[rgba(168,168,168,1)]">
          Every successful product starts with understanding your business
          goals. We work closely with startups, scale-ups, and enterprises to
          design scalable architectures, develop reliable applications, and
          deliver digital products that people love to use.
        </p>
        <p className="font-[family-name:var(--font-geist)] text-[16px] font-normal text-[rgba(168,168,168,1)]">
          Our focus is simple: building software that performs today, scales
          tomorrow, and remains easy to maintain for years to come.
        </p>
      </div>
      <Ripples />
    </section>
  );
}
