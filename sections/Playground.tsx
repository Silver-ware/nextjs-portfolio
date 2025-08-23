import { BugPlay } from "lucide-react";
import Image from "next/image";

export default function Playground() {
  return (
    <section
      id="playground"
      className="flex flex-col items-start gap-2.5 pt-[60px] pb-10 lg:px-[120px] md:px-[80px] px-[40px] w-full scroll-mt-[50px]"
    >
      <div className="flex flex-col lg:min-h-[600px] md:min-h-[500px] h-fit items-center gap-4 md:pt-10 pt-4 pb-5 px-4 w-full md:bg-semi-transparent rounded-xl md:border border-solid border-neutral-700">
        <div className="p-0 w-full h-full self-stretch flex-1 flex flex-col items-center md:gap-4 gap-6 relative">
          <div className="inline-flex flex-col items-center md:gap-1.5">
            <div className="inline-flex items-center gap-2.5">
              <BugPlay className="md:w-6 w-[18px] md:h-6 h-[18px] stroke-current text-[#16A34A]" />
              <h2 className="relative w-fit font-semibold text-green-600 lg:text-[28px] md:text-2xl text-xl tracking-[0] leading-[normal]">
                Playground
              </h2>
            </div>
            <p className="relative md:block hidden font-semibold text-foreground px-6 text-center text-sm tracking-[0] leading-[normal]">
              Curious on how I used each Stack? You might discover something.
            </p>
          </div>

          {/* Iframe of the Vue Application Here */}
          <div className="flex-1 self-stretch px-16 w-full md:flex hidden flex-col justify-center items-center lg:gap-3 md:gap-4">
            <span className="relative lg:h-40 lg:w-40 md:w-36 md:h-36">
              <Image
                src="/assets/images/programmer.png"
                alt="programmer icon"
                sizes="(max-width: 768px) 144px, (max-width: 1024px) 144px, 160px"
                fill
              />
            </span>
            <span className="text-wrap max-w-[80%] text-center text-secondary-foreground lg:text-2xl md:text-xl font-medium">
              {"Playground Application haven't arrived yet."}
            </span>
          </div>

          {/* Mobile Not Supported */}
          <div className="relative md:hidden w-[220px] h-[200px] flex flex-col justify-center items-center px-3 pt-[18px] gap-2.5 rounded-xl bg-semi-transparent overflow-hidden">
            <span className="relative w-[60px] h-[60px]">
              <Image
                src="/assets/icons/not-supported.png"
                alt="not-supported-icon"
                sizes="60px"
                fill
              />
            </span>
            <span className="text-foreground px-2 text-center text-sm mb-4">
              {"The Vue Application isn't supported in Mobile yet."}
            </span>
            <span className="absolute w-full bottom-0 h-[119px] opacity-80">
              <Image
                src="/assets/colored-waves.png"
                alt="colored-wave"
                sizes="220px"
                fill
              />
            </span>
          </div>

          {/* Attribution of Programmer Sticker */}
          <div className="w-full h-fit text-center absolute bottom-0 text-foreground">
            <a
            className="text-xs opacity-50"
              href="https://www.flaticon.com/authors/medz"
            >
              Playground Sticker Created by MEDZ - Flaticon
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
