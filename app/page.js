import Header from "@/modules/Header";
import Hero from "@/modules/Hero";
import About from "@/modules/About";
import Technology from "@/modules/Technology";
import Feature from "@/modules/Feature";
//import Cases from "@/modules/Cases";
//import Blog from "@/modules/Blog";
import Footer from "@/modules/Footer";

export default function Home() {
  return (
    <main className="flex flex-col gap-9">
      <div className="flex flex-col gap-9 min-[1200px]:bg-[radial-gradient(circle_at_50%_27%,#e6936b_0%_-1%,#bc4a13_16%_15%,#010004_40%_69%)] max-[1200px]:bg-[radial-gradient(circle_at_50%_27%,#bc4a13_0%_1%,#010004_35%_66%)]">
        <Header />
        <Hero />
        <About />
      </div>
      <Technology />
      <Feature />
      {/* <Cases /> */}

      <div className="flex flex-col gap-9 min-[1200px]:bg-[radial-gradient(circle_at_50%_54%,#e5b69d_2%_3%,#010004_53%_65%)] max-[1200px]:bg-[radial-gradient(circle_at_50%_43%,#e5b69d_2%_3%,#010004_53%_65%)] max-[800px]:bg-[radial-gradient(circle_at_50%_43%,#e5b69d_1%_-1%,#010004_33%_59%)]">
        {/* <Blog /> */}
        <Footer />
      </div>
    </main>
  );
}
