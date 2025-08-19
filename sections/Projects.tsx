"use client"
import {
  FolderKanban,
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { projectsData } from "@/data/projects";
import Cards from "@/components/Card";


export default function Projects() {
  return (
    <section className="flex-col items-start px-0 py-2.5 flex gap-2.5 w-full">
      <div className="inline-flex items-center gap-2.5">
        <FolderKanban className="md:w-6 w-[18px] md:h-6 h-[18px] stroke-current text-[#16A34A]" />
           <h2 className="relative w-fit font-semibold text-[#e2e2e2] lg:text-[28px] md:text-2xl text-xl tracking-[0] leading-[normal]">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] justify-center gap-[24px_36px] px-0 py-2.5 w-full">
        {projectsData.map((project) => <Cards project={project} key={project.id}/>)}
      </div>

      {/* Pagination */}
      <div className="flex w-full md:hidden items-center justify-end gap-1">
            <input type="number" className="w-8 h-8 text-center p-1 bg-[#52525226] rounded-sm aspect-[1] relative font-medium text-[#e2e2e2] text-xs tracking-[0] leading-[normal] outline-0"/>
            <div className="relative w-fit font-medium text-green-700 text-xs tracking-[0] leading-[normal]">
              of 1
            </div>
          </div>

      <div className="flex items-center justify-between px-0 py-2.5 w-full">
        <button
          className="inline-flex items-center gap-1 md:px-3 px-2 py-2 bg-[#52525226] rounded-[5px]"
        >
          <ChevronFirst className="md:w-6 md:h-6 w-[18px] h-[18px] text-green-700" />
          <div className="lg:inline hidden relative w-fit font-medium text-[#e2e2e2] text-base tracking-[0] leading-[normal]">
            Go to the First List
          </div>
        </button>

        <div className="inline-flex items-center gap-2.5">
          <button
            className="inline-flex items-center gap-1 px-3 py-2 bg-[#52525226] rounded-[5px]"
          >
            <ChevronLeft className="md:w-6 md:h-6 w-[18px] h-[18px] text-green-700" />
            <div className="relative w-fit font-medium text-[#e2e2e2] md:text-base text-xs tracking-[0] leading-[normal]">
              Prev
            </div>
          </button>

          <button
            className="inline-flex items-center gap-1 px-3 py-2 bg-[#52525226] rounded-[5px]"
          >
            <div className="relative w-fit font-medium text-[#e2e2e2] md:text-base text-xs tracking-[0] leading-[normal]">
              Next
            </div>
            <ChevronRight className="md:w-6 md:h-6 w-[18px] h-[18px] text-green-700" />
          </button>
        </div>

        <div className="inline-flex items-center gap-4">
          <div className="md:inline-flex hidden items-center justify-center gap-1">
            <input type="number" className="w-10 h-10 text-center p-2 bg-[#52525226] rounded-lg aspect-[1] relative font-medium text-[#e2e2e2] text-base tracking-[0] leading-[normal] outline-0"/>
            <div className="relative w-fit font-medium text-[#e2e2e2] text-base tracking-[0] leading-[normal]">
              of 1
            </div>
          </div>

          <button className="inline-flex items-center gap-1 md:px-3 px-2 py-2 bg-[#52525226] rounded-[5px]">
            <div className="lg:inline hidden relative w-fit font-medium text-[#e2e2e2] text-base tracking-[0] leading-[normal]">
              Go to the Last List
            </div>
            <ChevronLast className="md:w-6 md:h-6 w-[18px] h-[18px] text-green-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
