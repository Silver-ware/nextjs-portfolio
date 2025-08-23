// import { Button } from "./ui/button";
import Image from "next/image";
import SkillSetDrawer from "@/components/SkillSetDrawer";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex md:flex-row flex-col-reverse items-center justify-center gap-2.5 pt-[40px] pb-0 lg:px-[110px] md:px-[60px] px-6 w-full h-fit scroll-mt-[100px] "
    >
      <div className="flex flex-col flex-1 h-fit md:items-start items-center justify-center">
        <div className="inline-flex items-center">
          <p className="relative w-fit font-normal text-foreground tracking-[0] md:leading-[36px] text-wrap">
            <span className="font-normal md:inline block lg:text-4xl md:text-3xl text-base text-center text-foreground tracking-[0] leading-[30px]">
              {"Hi, I'm "}
            </span>
            <span className="font-extrabold lg:text-4xl md:text-3xl text-2xl">
              Garry Caber
            </span>
            <span className="font-normal text-foreground tracking-[0] leading-[30px] hidden lg:inline lg:text-4xl">
              {" & work like an "}
            </span>
            <span className="font-extrabold hidden lg:inline lg:text-4xl">
              ant
            </span>
            <span className="font-normal md:inline hidden text-foreground tracking-[0] leading-[30px]">
              .
            </span>
          </p>
        </div>

        <div className="inline-flex md:py-2 items-center gap-2.5">
          <h2 className="relative w-fit font-extrabold text-foreground lg:text-5xl md:text-[42px] text-[28px] tracking-[0] md:leading-[40px] leading-normal">
            Full Stack Developer
          </h2>
        </div>

        <div className="flex items-center gap-2.5 w-full">
          <p className="md:px-0 px-3 relative w-full text-wrap md:text-left text-center flex-1 font-light italic text-foreground lg:text-xl md:text-lg text-[14px] tracking-[0] leading-[normal]">
            Turning ideas into clean, efficient code—specializing in full-stack
            web development.
          </p>
        </div>

        <div className="inline-flex items-start gap-2.5 px-0 py-2.5">
          <SkillSetDrawer/>

          <a href="#contact" className="inline-flex items-center justify-center px-3 py-2.5 hover:bg-semi-transparent  transition-all ease-in-out duration-500 rounded-[5px] border border-solid border-primary-outline">
            <span
              
              className="relative w-fit font-normal text-foreground lg:text-base text-[14px] tracking-[0] leading-[normal]"
            >
              Contact Me
            </span>
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-2.5 md:pl-10 pr-0 md:py-10 py-3">
        <div className="relative lg:w-[330px] lg:h-[330px] md:w-60 md:h-60 w-56 h-56 rounded-full shadow-[0px_4px_95px_-15px] shadow-primary-gradient border border-neutral-700 overflow-hidden">
          <Image
            className="object-cover"
            src="/assets/images/profile.jpg"
            alt="profile"
            sizes="(max-width: 330px) 100vw"
            fill
            priority
          />
          {/* <img className="w-full h-full object-cover" alt="Profile" src="" /> */}
        </div>
      </div>
    </section>
  );
}
