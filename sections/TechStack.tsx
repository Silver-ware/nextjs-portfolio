import { techStackData } from "@/data/techstackbtn";
// import { Badge } from "@/components/ui/badge";
import { Layers2, RectangleEllipsis } from 'lucide-react';
import Image from "next/image";

export default function TechStack() {
  return (
    <section className="flex-col items-start px-0 py-2.5 flex gap-2.5 w-full">
      <div className="inline-flex items-center gap-2.5">
        <Layers2 className="w-6 h-6 stroke-current text-[#16A34A]" />
        <h2 className="relative w-fit font-semibold text-[#e2e2e2] text-[28px] tracking-[0] leading-[normal]">
          Tech Stack
        </h2>
      </div>

      <div className="flex flex-wrap items-start gap-[12px_12px] px-0 py-2.5 w-full">
        {techStackData.map((tech, index) => (
          <button
            key={index}
            className="cursor-pointer inline-flex items-center justify-center gap-1 px-3 py-2 bg-[#52525226] rounded-[5px] border border-solid border-neutral-700 hover:bg-green-700"
          >
            <span className="block relative w-7 h-7">
              <Image
                src={tech.icon}
                alt={tech.name}
                fill
              />
            </span>
            {/* <img
                className="relative w-[30px] h-[30px] aspect-[1] object-cover"
                alt={tech.name}
                src={tech.icon}
            /> */}
            <div className="relative w-fit font-medium text-[#e2e2e2] text-lg tracking-[0] leading-[normal]">
              {tech.name}
            </div>
          </button>
        ))}
        <div className="inline-flex items-start">
          <div className="cursor-pointer inline-flex items-center justify-center gap-1 px-3 py-2 bg-[#52525226] rounded-[5px] border border-solid border-neutral-700 hover:bg-green-700">
            <RectangleEllipsis className="w-7 h-7 text-[#e2e2e2]"/>
          </div>
        </div>
      </div>
    </section>
  );
}
