import { Card, CardContent } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
import { ExperienceInterface } from "@/data/experience";
import { Briefcase, Eye } from "lucide-react";
import { experienceData } from "@/data/experience";
import { useMediaQuery } from "./use-media-query";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function ExpCards({
  experience,
  index,
}: {
  experience: ExperienceInterface;
  index: number;
}) {
  const isSm = useMediaQuery("(max-width: 767px)");

  return (
    <div
      className={`inline-flex  flex-col items-start gap-3 px-0 py-4 w-fit ${
        !experience.relevant && "lg:opacity-50 opacity-90"
      } hover:opacity-100 transition-opacity duration-200 ease-in-out cursor-pointer`}
    >
      <div className="flex relative items-center gap-2.5 pl-6 pr-0 py-0 w-full">
        <div className="inline-flex items-center justify-center p-2 bg-background rounded-full border border-solid border-green-700">
          <Briefcase className="md:w-5 md:h-5 h-4 w-4 text-foreground" />
        </div>
        {index < experienceData.length - 1 && (
          <div className="w-full h-px bg-green-700" />
        )}
      </div>

      <div className="group inline-flex flex-col items-start gap-2.5 pl-6 pr-2 py-0 w-fit h-fit relative hover:scale-[101%] transition-all duration-150 ease-in-out">
        <Card className="inline-flex w-fit flex-col items-start px-5 py-3 bg-background rounded-[5px] border border-solid border-neutral-700">
          <Popover>
            <PopoverTrigger asChild>
              <CardContent className="p-0 w-fit max-w-[312px] min-w-[264px]">
                <div className="flex flex-col items-start w-fit">
                  <h3 className="relative w-fit font-medium text-title md:text-xl text-[18px] tracking-[0] leading-[normal]">
                    {experience.position}
                  </h3>
                  <div className="relative w-fit font-normal text-foreground text-base tracking-[0] leading-[normal]">
                    {experience.company}
                  </div>
                  <div className="relative w-fit font-light text-secondary-foreground text-sm tracking-[0] leading-[normal]">
                    {experience.period}
                  </div>
                </div>

                <div className="flex w-full items-center gap-2.5 px-0 py-2">
                  <span className="relative w-full flex-1 font-light text-wrap text-foreground text-sm tracking-[0] leading-[normal]">
                    {experience.description}
                  </span>
                </div>

                {experience.contributions && (
                  <>
                    <span className="block lg:hidden my-2 md:text-sm text-xs text-center opacity-50">
                      Tap to View Contributions
                    </span>
                    <div className="lg:flex hidden group-hover:-translate-y-[100%] z-[-1] group-hover:opacity-100 h-fit opacity-0 transition-all duration-300 ease-in-out absolute items-center gap-1 top-0 -translate-y-[80%] bg-semi-transparent px-3 py-1 sm:backdrop-blur-xs mobile-blur-xs rounded-t-sm right-3 text-foreground border-x border-t border-neutral-700 w-fit select-none">
                      <Eye className="w-5 h-5" />
                      <span>View Contributions</span>
                    </div>
                  </>
                )}
              </CardContent>
            </PopoverTrigger>
            {experience.contributions && (
              <PopoverContent
                sideOffset={isSm ? 15 : 30}
                align="center"
                side={isSm ? "bottom" : "right"}
                className="bg-semi-transparent sm:backdrop-blur-md mobile-blur-md text-foreground border-neutral-700"
              >
                <span className="block leading-4 text-center font-medium text-base">
                  {experience.contributions.heading}
                </span>
                <ul className="text-sm py-2 px-1 mx-3 list-disc marker:text-green-600">
                  {experience.contributions.list.map((data, index) => (
                    <li key={index}>{data}</li>
                  ))}
                </ul>
              </PopoverContent>
            )}
          </Popover>
        </Card>
      </div>
    </div>
  );
}
