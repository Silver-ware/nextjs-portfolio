import { Card, CardContent } from "@/components/ui/card";
import { ProjectInterface } from "@/data/projects";
import Image from "next/image";

export default function ProjCards({project}: {project: ProjectInterface}) {
  return (
    <Card
      className="flex flex-col w-[300px] items-center justify-center md:justify-self-start justify-self-center gap-3.5 px-4 py-5 bg-[#52525226] rounded-lg border border-solid border-neutral-700"
    >
      <CardContent className="p-0 w-full">
        <div className="self-stretch relative h-36 rounded overflow-hidden">
          <Image
            src={project.images[0]}
            alt={`${project.title}-image`}
            fill
          />
        </div>
        <div className="flex flex-col items-start gap-1 mt-3.5 w-full">
          <div className="inline-flex items-start gap-2.5">
            <h3 className="relative w-fit font-medium text-foreground md:text-xl text-[18px] tracking-[0] leading-[normal]">
              {project.title}
            </h3>
          </div>

          <div className="flex w-full items-start gap-2.5">
            <p className="relative flex-1 font-light text-secondary-foreground text-sm tracking-[0] leading-[normal]">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap items-start gap-[4px_4px] px-0 py-1 w-full">
            {project.technologies.map((tech, techIndex) => (
              <div
                key={techIndex}
                className="inline-flex items-center justify-center gap-2.5 px-3 py-1 bg-semi-transparent rounded-[5px]"
              >
                <div className="relative w-fit font-normal text-foreground md:text-sm text-xs tracking-[0] leading-[normal]">
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
