"use client";
import {
  FolderKanban,
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { projectsData } from "@/data/projects";
import ProjCards from "@/components/ProjectCard";
import { useMediaQuery } from "@/components/use-media-query";
import { useState, useMemo, useEffect } from "react";
import ProjectOverlay from "@/components/ProjectOverlay";

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState(currentPage.toString());
  const [overlayImages, setOverlayImages] = useState<string[] | null>(null);

  useEffect(() => {
    setInputValue(currentPage.toString());
  }, [currentPage]);

  // const isLg = useMediaQuery("(min-width: 1024px)"); Have default already
  const isMd = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isSm = useMediaQuery("(max-width: 767px)");

  let limit = 6;
  if (isMd) limit = 4;
  if (isSm) limit = 3;

  const totalPages = Math.ceil(projectsData.length / limit);

  if (currentPage > totalPages) setCurrentPage(totalPages);

  const limitedProjects = useMemo(() => {
    const start = (currentPage - 1) * limit;
    const end = start + limit;
    return projectsData.slice(start, end);
  }, [currentPage, limit]);

  const onBlurOrEnter = () => {
    let page = Number(inputValue);
    if (isNaN(page) || page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    setCurrentPage(page);
    setInputValue(page.toString());
  };

  return (
    <section
      id="projects"
      className="flex-col items-start px-0 py-2.5 flex gap-2.5 w-full scroll-mt-[100px]"
    >
      <div className="inline-flex items-center gap-2.5">
        <FolderKanban className="md:w-6 w-[18px] md:h-6 h-[18px] stroke-current text-[#16A34A]" />
        <h2 className="relative w-fit font-semibold text-foreground lg:text-[28px] md:text-2xl text-xl tracking-[0] leading-[normal]">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] justify-center gap-[24px_36px] px-0 py-2.5 w-full">
        {limitedProjects.map((project) => (
          <ProjCards
            project={project}
            key={project.id}
            onOpenOverlay={setOverlayImages}
          />
        ))}
      </div>

      {overlayImages && (
        <ProjectOverlay
          images={overlayImages}
          onClose={() => setOverlayImages(null)}
        />
      )}

      {/* Mobile Pagination */}
      <div className="flex w-full md:hidden items-center justify-end gap-1">
        <input
          type="number"
          max={totalPages}
          value={inputValue}
          disabled={totalPages === 1}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={() => onBlurOrEnter()}
          onKeyDown={(e) => {
            if (e.key === "Enter") onBlurOrEnter();
          }}
          className="w-8 h-8 text-center p-1 bg-[#52525226] rounded-sm aspect-[1] relative font-medium text-foreground text-xs tracking-[0] leading-[normal] outline-0 border border-transparent focus:border-green-700 select-none disabled:opacity-50 disabled:pointer-events-none"
        />
        <div className="relative w-fit font-medium text-green-700 text-xs tracking-[0] leading-[normal]">
          of {totalPages}
        </div>
      </div>

      <div className="flex items-center justify-between px-0 py-2.5 w-full">
        <button
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
          className="group cursor-pointer inline-flex items-center gap-1 md:px-3 px-2 py-2 bg-[#52525226] rounded-[5px] text-green-700 hover:text-white hover:bg-green-700 transition-all ease-in-out select-none disabled:opacity-50 disabled:pointer-events-none"
        >
          <ChevronFirst className="md:w-6 md:h-6 w-[18px] h-[18px]" />
          <div className="lg:inline hidden relative w-fit font-medium text-foreground group-hover:text-white text-base tracking-[0] leading-[normal]">
            Go to the First List
          </div>
        </button>

        <div className="inline-flex items-center gap-2.5">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="group cursor-pointer inline-flex items-center gap-[2px] px-3 py-2 bg-semi-transparent rounded-[5px] text-green-700 hover:text-white hover:bg-green-700 transition-all ease-in-out select-none disabled:opacity-50 disabled:pointer-events-none"
          >
            <ChevronLeft className="md:w-6 md:h-6 w-[18px] h-[18px]" />
            <div className="relative w-fit font-medium text-foreground group-hover:text-white md:text-base text-xs tracking-[0] leading-[normal]">
              Prev
            </div>
          </button>

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="cursor-pointer group inline-flex items-center gap-1 px-3 py-2 bg-semi-transparent rounded-[5px] text-green-700 hover:text-white hover:bg-green-700 transition-all ease-in-out select-none disabled:opacity-50 disabled:pointer-events-none"
          >
            <div className="relative w-fit font-medium text-foreground group-hover:text-white md:text-base text-xs tracking-[0] leading-[normal]">
              Next
            </div>
            <ChevronRight className="md:w-6 md:h-6 w-[18px] h-[18px]" />
          </button>
        </div>

        <div className="inline-flex items-center gap-4">
          <div className="md:inline-flex hidden items-center justify-center gap-1">
            <input
              type="number"
              max={totalPages}
              value={inputValue}
              disabled={totalPages === 1}
              onChange={(e) => setInputValue(e.target.value)}
              onBlur={() => onBlurOrEnter()}
              onKeyDown={(e) => {
                if (e.key === "Enter") onBlurOrEnter();
              }}
              className="w-10 h-10 text-center p-2 bg-[#52525226] rounded-lg aspect-[1] relative font-medium text-foreground border border-transparent focus:border-green-700 text-base tracking-[0] leading-[normal] outline-0 select-none disabled:opacity-50 disabled:pointer-events-none"
            />
            <div className="relative w-fit font-medium text-foreground text-base tracking-[0] leading-[normal]">
              of {totalPages}
            </div>
          </div>

          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="cursor-pointer group inline-flex items-center gap-1 md:px-3 px-2 py-2 bg-semi-transparent rounded-[5px] text-green-700 hover:text-white hover:bg-green-700 transition-all ease-in-out select-none disabled:opacity-50 disabled:pointer-events-none"
          >
            <div className="lg:inline hidden relative w-fit font-medium text-foreground group-hover:text-white text-base tracking-[0] leading-[normal]">
              Go to the Last List
            </div>
            <ChevronLast className="md:w-6 md:h-6 w-[18px] h-[18px]" />
          </button>
        </div>
      </div>
    </section>
  );
}
