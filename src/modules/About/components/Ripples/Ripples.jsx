"use client";

const RINGS = [0, 1, 2, 3];

const FACTS = [
  { text: "Performance", top: "18%", left: "43%" },
  { text: "Innovation", top: "36%", left: "8%" },
  { text: "Scalability", top: "65%", left: "24%" },
  { text: "Partnership", top: "36%", left: "74%" },
  { text: "Quality", top: "60%", left: "74%" },
];

export default function Ripples() {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <style>{`
        @keyframes ripple-grow {
          0% {
            transform: scale(0);
            opacity: 0.9;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }

        @media (max-width: 700px) {
          [data-fact="Innovation"],
          [data-fact="Partnership"] {
            top: 30% !important;
          }

          [data-fact="Partnership"],
          [data-fact="Quality"] {
            left: 60% !important;
          }
        }
      `}</style>

      {RINGS.map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: "calc(10% - 75vw)",
            top: "calc(25% - 75vw)",
            width: "150vw",
            height: "150vw",
            borderRadius: "50%",
            border: "3px solid rgba(255, 255, 255, 0.9)",
            animation: "ripple-grow 6s ease-out infinite",
            animationDelay: `${i * 1.5}s`,
            animationFillMode: "backwards",
          }}
        />
      ))}

      {/* Centered heading */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center text-center gap-3 px-5 max-w-180 mx-auto">
        <h3 className="font-[family-name:var(--font-geist)] text-[36px] max-[1200px]:text-[22px] font-normal text-[rgba(255,255,255,1)] leading-[1.1]">
          What Drives Every Project
        </h3>
        <p className="font-[family-name:var(--font-geist)] text-[16px] max-[1200px]:text-[13px] font-normal text-[rgba(168,168,168,1)]">
          Every product we build is guided by five core principles:
          performance, scalability, quality, innovation, and long-term
          partnership. These values shape every architectural decision, every
          line of code, and every release.
        </p>
      </div>

      {/* Fact cards */}
      {FACTS.map(({ text, top, left }) => (
        <div
          key={text}
          data-fact={text}
          className="absolute z-20 flex items-center gap-2 px-3 py-2"
          style={{
            top,
            left,
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "12px",
            background: "rgba(26, 26, 29, 0.8)",
          }}
        >
          <div className="w-2 h-2 rounded-sm shrink-0 bg-[rgba(255,255,255,0.4)]" />
          <span
            className="font-[family-name:var(--font-geist)] max-[1200px]:text-[11px] font-normal text-[rgba(255,255,255,1)]"
            style={{ fontSize: "18px" }}
          >
            {text}
          </span>
        </div>
      ))}

      {/* Top fade */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none z-10"
        style={{
          height: "180px",
          background:
            "linear-gradient(to bottom, rgba(1,0,4,1) 0%, transparent 100%)",
        }}
      />

      {/* Left fade */}
      <div
        className="absolute inset-y-0 left-0 pointer-events-none z-10"
        style={{
          width: "180px",
          background:
            "linear-gradient(to right, rgba(1,0,4,1) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
