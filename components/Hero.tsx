// import { Button } from "./ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex items-center justify-center gap-2.5 pt-[40px] pb-5 px-[120px] w-full">
      <div className="flex flex-col basis-[765px] flex-1 h-[385px] items-start justify-center">
        <div className="inline-flex items-center">
          <h1 className="relative w-fit font-normal text-[#e2e2e2] text-4xl tracking-[0] leading-[30px] whitespace-nowrap">
            <span className="[font-family:'Poppins-Regular',Helvetica] font-normal text-[#e2e2e2] text-4xl tracking-[0] leading-[30px]">
              {"Hi, I'm "}
            </span>
            <span className="font-extrabold">Garry Caber</span>
            <span className="font-normal text-[#e2e2e2] text-4xl tracking-[0] leading-[30px]">
              {" "}
              & work like an{" "}
            </span>
            <span className="font-extrabold">ant</span>
            <span className="font-normal text-[#e2e2e2] text-4xl tracking-[0] leading-[30px]">
              .
            </span>
          </h1>
        </div>

        <div className="inline-flex items-center gap-2.5">
          <h2 className="relative w-fit mt-[-1.00px] font-extrabold text-[#e2e2e2] text-5xl tracking-[0] leading-[normal]">
            Full Stack Developer
          </h2>
        </div>

        <div className="flex items-center gap-2.5 w-full">
          <p className="relative w-fit flex-1 mt-[-1.00px] font-light italic text-[#e2e2e2] text-xl tracking-[0] leading-[normal]">
            Turning ideas into clean, efficient code—specializing in full-stack
            web development.
          </p>
        </div>

        <div className="inline-flex items-start gap-2.5 px-0 py-2.5">
          <button className="inline-flex items-center justify-center px-3 py-2.5 bg-green-700 rounded-[5px] border border-green-700 border-solid">
            <span className="relative w-fit h-fit font-normal text-white text-base tracking-[0] leading-[normal]">
              View Projects
            </span>
          </button>

          <button className="inline-flex items-center justify-center px-3 py-2.5 rounded-[5px] border border-solid border-neutral-700">
            <span className="relative w-fit font-normal text-[#e2e2e2] text-base tracking-[0] leading-[normal]">
              Contact Me
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-2.5 pl-10 pr-0 py-10 flex-1 self-stretch grow">
        <div className="relative w-[330px] h-[330px] rounded-full shadow-[0px_4px_95px_-15px_rgba(111,231,111,0.25)] border border-neutral-700 overflow-hidden">
          <Image
            className="object-cover"
            src="/assets/images/profile.jpg"
            alt="profile"
            sizes="(max-width: 330px) 100vw"
            fill
          />
          {/* <img className="w-full h-full object-cover" alt="Profile" src="" /> */}
        </div>
      </div>
    </section>
  );
}
