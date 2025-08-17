"use client"
import { Card, CardContent } from "@/components/ui/card";
import {
  FolderKanban,
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Project No. 1",
    description:
      "A task management web app built using React, Django, and Tailwind CSS, designed to help users organize....",
    image: "",
    technologies: ["Django", "TailwindCSS", "React", "TypeScript", "Git"],
  },
  {
    id: 2,
    title: "Project No. 2",
    description:
      "A task management web app built using React, Django, and Tailwind CSS, designed to help users organize....",
    image: "",
    technologies: ["Django", "TailwindCSS", "React", "TypeScript", "Git"],
  },
  {
    id: 3,
    title: "Project No. 3",
    description:
      "A task management web app built using React, Django, and Tailwind CSS, designed to help users organize....",
    image: "",
    technologies: ["Django", "TailwindCSS", "React", "TypeScript", "Git"],
  },
  {
    id: 4,
    title: "Project No. 4",
    description:
      "A task management web app built using React, Django, and Tailwind CSS, designed to help users organize....",
    image: "",
    technologies: ["Django", "TailwindCSS", "React", "TypeScript", "Git"],
  },
  {
    id: 5,
    title: "Project No. 5",
    description:
      "A task management web app built using React, Django, and Tailwind CSS, designed to help users organize....",
    image: "",
    technologies: ["Django", "TailwindCSS", "React", "TypeScript", "Git"],
  },
];

export default function Projects() {
  return (
    <section className="flex-col items-start px-0 py-2.5 flex gap-2.5 w-full">
      <div className="inline-flex items-center gap-2.5">
        <FolderKanban className="w-6 h-6 text-[#16A34A]" />
        <h2 className="relative w-fit font-semibold text-[#e2e2e2] text-[28px] tracking-[0] leading-[normal]">
          Projects
        </h2>
      </div>

      <div className="flex flex-wrap items-start gap-[24px_36px] px-0 py-2.5 w-full">
        {projectsData.map((project) => (
          <Card
            key={project.id}
            className="flex flex-col w-[300px] items-center justify-center gap-3.5 px-4 py-5 bg-[#52525226] rounded-lg border border-solid border-neutral-700"
          >
            <CardContent className="p-0 w-full">
              {/* <img
                  className="relative self-stretch w-full aspect-[1.84] object-cover rounded"
                  alt={project.title}
                  src={project.image}
              /> */}

              <div className="flex flex-col items-start gap-1 mt-3.5 w-full">
                <div className="inline-flex items-start gap-2.5">
                  <h3 className="relative w-fit font-medium text-[#e2e2e2] text-xl tracking-[0] leading-[normal]">
                    {project.title}
                  </h3>
                </div>

                <div className="flex w-full items-start gap-2.5">
                  <p className="relative flex-1 font-light text-neutral-400 text-sm tracking-[0] leading-[normal]">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-start gap-[4px_4px] px-0 py-1 w-full">
                  {project.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="inline-flex items-center justify-center gap-2.5 px-3 py-1 bg-[#a3a3a31a] rounded-[5px]"
                    >
                      <div className="relative w-fit font-normal text-[#e2e2e2] text-sm tracking-[0] leading-[normal]">
                        {tech}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
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
            <div className="flex w-10 h-10 items-center justify-center gap-2.5 p-2 bg-[#52525226] rounded-lg aspect-[1]">
              <div className="relative w-fit font-medium text-[#e2e2e2] text-base tracking-[0] leading-[normal]">
                1
              </div>
            </div>
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
