import Hero from "@/sections/Hero";
import TechStack from "@/sections/TechStack";

export default function Landing() {
  return (
    <>
      <Hero/>
      <main className="flex flex-col items-start gap-6 pt-0 pb-60 px-[110px] w-full">
        <TechStack/>
      </main>
    </>
  );
}
