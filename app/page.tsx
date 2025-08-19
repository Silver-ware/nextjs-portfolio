import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import TechStack from "@/sections/TechStack";

export default function Landing() {
  return (
    <>
      <Hero/>
      <main className="flex flex-col items-start gap-6 pt-0 md:pb-60 pb-[220] lg:px-[110px] md:px-[60px] px-[28px] w-full">
        <TechStack/>
        <Projects/>
        <Experience/>
        <section id="playground" className="h-[400px] bg-amber-300 w-1/2 opacity-50 mx-auto rounded scroll-mt-[150px]">
        </section>
      </main>
      <Contact/>
    </>
  );
}
