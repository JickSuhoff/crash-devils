import Image from "next/image";
export default function Feature() {
  return (
    <section className="relative w-full -mt-20 pt-20 pb-20 mix-blend-screen [background:radial-gradient(circle,rgba(255,77,0,1)_0%,rgba(255,77,0,0.55)_30%,rgba(1,0,4,1)_74%)]">
      <div className="relative w-full">
        {/* Desktop — 1200×940, shown above 1200px */}
        <div className="relative w-full overflow-hidden max-[1200px]:hidden [aspect-ratio:1200/940] [mask-image:radial-gradient(ellipse_82%_82%_at_50%_50%,black_28%,transparent_70%)] [-webkit-mask-image:radial-gradient(ellipse_82%_82%_at_50%_50%,black_28%,transparent_70%)]">
          <Image
            src="/assets/CTA desktop 2.svg"
            alt="Feature"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Mobile — 390×800, shown below 1200px */}
        <div className="relative w-full overflow-hidden hidden max-[1200px]:block [aspect-ratio:390/800] [mask-image:radial-gradient(ellipse_82%_82%_at_50%_50%,black_28%,transparent_70%)] [-webkit-mask-image:radial-gradient(ellipse_82%_82%_at_50%_50%,black_28%,transparent_70%)]">
          <Image
            src="/assets/CTA mob 2.svg"
            alt="Feature"
            fill
            className="object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-20 pb-14 flex justify-center max-[1200px]:inset-0 max-[1200px]:flex-col max-[1200px]:justify-end max-[1200px]:items-center max-[1200px]:px-5 max-[1200px]:pb-8">
          <div className="flex flex-col gap-2 w-[416px] max-[1200px]:w-full max-[1200px]:text-center">
            <h2 className="font-[family-name:var(--font-geist)] text-[56px] max-[1200px]:text-[24px] font-normal text-[rgba(255,255,255,1)] leading-[1.1]">
              Turning Ideas Into Digital Products
            </h2>
            <p className="font-[family-name:var(--font-geist)] font-normal text-[16px] text-[rgba(168,168,168,1)]">
              Every great product starts with an idea. We help businesses
              transform concepts into scalable digital solutions—from strategy
              and architecture to development, deployment, and long-term
              support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
