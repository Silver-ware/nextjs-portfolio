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

      <div className="flex flex-wrap items-start gap-[24px_36px] px-0 py-2.5 w-full">
        {projectsData.map((project) => <Cards project={project} key={project.id}/>)}
      </div>

      {/* Pagination */}
      <div className="flex items-start justify-between px-0 py-2.5 w-full">
        <button
          className="inline-flex items-center gap-1 px-3 py-2 bg-[#52525226] rounded-[5px]"
        >
          <ChevronFirst className="w-6 h-6 text-[#e2e2e2]" />
          <div className="relative w-fit font-medium text-[#e2e2e2] text-base tracking-[0] leading-[normal]">
            Go to the First List
          </div>
        </button>

        <div className="inline-flex items-center gap-2.5">
          <button
            className="inline-flex items-center gap-1 px-3 py-2 bg-[#52525226] rounded-[5px]"
          >
            <ChevronLeft className="w-6 h-6 text-[#e2e2e2]" />
            <div className="relative w-fit font-medium text-[#e2e2e2] text-base tracking-[0] leading-[normal]">
              Prev
            </div>
          </button>

          <button
            className="inline-flex items-center gap-1 px-3 py-2 bg-[#52525226] rounded-[5px]"
          >
            <div className="relative w-fit font-medium text-[#e2e2e2] text-base tracking-[0] leading-[normal]">
              Next
            </div>
            <ChevronRight className="w-6 h-6 text-[#e2e2e2]" />
          </button>
        </div>

        <div className="inline-flex items-center gap-4">
          <div className="inline-flex items-center justify-center gap-1">
            <input type="number" className="w-10 h-10 text-center p-2 bg-[#52525226] rounded-lg aspect-[1] relative font-medium text-[#e2e2e2] text-base tracking-[0] leading-[normal] outline-0"/>
            <div className="relative w-fit font-medium text-[#e2e2e2] text-base tracking-[0] leading-[normal]">
              of 1
            </div>
          </div>

          <button className="inline-flex items-center gap-1 px-3 py-2 bg-[#52525226] rounded-[5px]">
            <div className="relative w-fit font-medium text-[#e2e2e2] text-base tracking-[0] leading-[normal]">
              Go to the Last List
            </div>
            <ChevronLast className="w-6 h-6 text-[#e2e2e2]" />
          </button>
        </div>
      </div>
    </section>
  );
}
