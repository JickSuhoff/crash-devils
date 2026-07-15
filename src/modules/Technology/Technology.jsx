import Card from "@/shared/components/Card";

export default function Technology() {
  return (
    <section id="technology" className="w-full px-20 max-[1200px]:px-5 mb-20">
      <div className="flex justify-between max-[1200px]:flex-col max-[1200px]:gap-4">
        <div className="w-[416px] flex flex-col gap-3 max-[1200px]:w-auto">
          <div className="bg-[rgba(248,239,239,0.1)] border-l-2 border-[rgba(171,171,171,1)] mb-4 w-fit h-6 px-2 flex justify-center items-center">
            <p className="font-[family-name:var(--font-geist-mono)] font-normal text-[rgba(255,255,255,1)] text-xs uppercase tracking-widest">
              Technologies We Work With
            </p>
          </div>
          <h1 className="font-[family-name:var(--font-geist)] text-[32px] font-normal text-[rgba(255,255,255,1)]">
            Modern Technology. Future-Proof Solutions.
          </h1>
          <p className="font-[family-name:var(--font-geist)] text-[16px] font-normal text-[rgba(168,168,168,1)]">
            We use proven technologies to build secure, scalable, and
            high-performance digital products tailored to your business needs.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-auto items-end max-[1200px]:items-start">
          <Card
            variant={1}
            number="/ 01"
            title="Frontend"
            // description="Text text text text"
            tags={[
              ["React", "Next.js", "TypeScript", "JavaScript", "Redux Toolkit"],
              ["Zustand", "React Query", "HTML5", "CSS3", "Tailwind CSS"],
              ["SCSS", "Material UI", "Vite", "Jest", "React Testing Library"],
            ]}
          />
          <Card
            variant={2}
            number="/ 02"
            title="Backend"
            // description="Text text text text"
            tags={[
              ["Python", "Node.js", "Express.js", "Django", "FastAPI"],
              ["NestJS", "PostgreSQL", "MongoDB", "Redis", "REST APIs"],
              ["GraphQL", "Docker", "Kubernetes", "AWS", "CI/CD"],
            ]}
          />
          <Card
            variant={3}
            number="/ 03"
            title="Mobile"
            // description="Text text text text"
            tags={[
              ["React Native", "Expo", "Swift", "SwiftUI", "Kotlin"],
              ["Jetpack Compose", "Ionic", "Firebase", "Push Notifications", "AsyncStorage"],
              ["SQLite", "REST APIs", "GraphQL", "Deep Linking", "Geolocation"],
            ]}
          />
          <p className="max-w-[632px] font-[family-name:var(--font-geist)] text-[32px] max-[1200px]:text-[20px] max-[1200px]:max-w-full font-normal text-[rgba(248,239,239,1)]">
            Our technology choices allow us to deliver high-performance
            applications with clean architecture, great user experience, and
            long-term maintainability
          </p>
        </div>
      </div>
    </section>
  );
}
