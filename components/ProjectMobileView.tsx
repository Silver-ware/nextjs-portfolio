import { ProjectInterface } from "@/data/projects";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";


export default function ProjectMobile({
  project,
  closeMobileView,
  closedImages,
  stillMobile,
}: {
  project: ProjectInterface;
  closeMobileView: React.Dispatch<
    React.SetStateAction<ProjectInterface | null>
  >;
  closedImages: React.Dispatch<React.SetStateAction<string[] | null>>;
  stillMobile: boolean;
}) {
  useEffect(() => {
    if(!stillMobile) closeMobileView(null);
  }, [closeMobileView, stillMobile])

  return (
    <div
      className="fixed inset-0 z-[40] flex flex-col items-center justify-center gap-2 backdrop-blur-xs bg-background/75 px-10 pt-4 pb-2"
      // onClick={() => closeMobileView(null)}
    >
      <button
        onClick={() => closeMobileView(null)}
        className="cursor-pointer hover:scale-110 absolute top-4 right-4 rounded-sm bg-title text-sm font-extrabold py-1 px-2 text-background"
      >
        ✕
      </button>
      <div className="relative w-[50vw] aspect-3/2 rounded-md overflow-hidden border border-neutral-700 cursor-pointer"
        onClick={() => closedImages(project.images)}>
        <Image
          src={project.images[0]}
          alt={`project-first-image`}
          fill
          className="object-cover"
        />
      </div>
      <span className="block text-center text-title text-2xl font-semibold">
        {project.title}
      </span>

      <div className="flex flex-wrap justify-center items-start gap-[4px_4px] px-0 py-1 w-full">
        {project.technologies.map((tech, techIndex) => (
          <div
            key={techIndex}
            className="inline-flex items-center justify-center gap-2.5 px-3 py-1 bg-semi-transparent rounded-[5px] border border-neutral-700"
          >
            <div className="relative w-fit font-normal text-foreground md:text-sm text-xs tracking-[0] leading-[normal]">
              {tech}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col px-3">
        {project.funFact && (
          <span className="block text-title leading-4 text-center pb-2 font-medium text-base">
            {project.funFact}
          </span>
        )}
        <div className="w-full pt-1 max-h-[200px] overflow-y-scroll custom-scrollbar">
          <span className="text-center font-normal flex items-center justify-center gap-1">
            <Sparkles className="w-4 h-4 text-title" />
            Features
          </span>
          <ol className="text-sm py-2 px-1 mx-3 list-decimal marker:text-green-600">
            {project.features?.map((data, index) => (
              <li key={index} className="font-light">
                {data}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
