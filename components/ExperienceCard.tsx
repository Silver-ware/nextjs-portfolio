import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExperienceInterface } from "@/data/experience";
import { Briefcase } from "lucide-react";
import { experienceData } from "@/data/experience";

export default function ExpCards({
  experience,
  index,
}: {
  experience: ExperienceInterface;
  index: number,
}) {
  return (
    <div className="inline-flex flex-col items-start gap-3 px-0 py-4">
      <div className="flex relative items-center gap-2.5 pl-6 pr-0 py-0 w-full">
        <div className="inline-flex items-center justify-center p-2 bg-[#a3a3a31a] rounded-full border border-solid border-green-700">
          <Briefcase className="md:w-5 md:h-5 h-4 w-4 text-[#e2e2e2]" />
        </div>
        {index < experienceData.length - 1 && (
          <Separator className="md:max-w-[290px] max-w-[234px] h-px bg-green-700" />
        )}
      </div>

      <div className="inline-flex flex-col items-start gap-2.5 pl-6 pr-2 py-0">
        <Card className="inline-flex flex-col items-start px-5 py-3 bg-[#52525226] rounded-[5px] border border-solid border-neutral-700">
          <CardContent className="p-0">
            <div className="flex flex-col items-start w-full">
              <h3 className="relative w-fit font-medium text-green-600 md:text-xl text-[18px] tracking-[0] leading-[normal]">
                {experience.position}
              </h3>
              <div className="relative w-fit font-normal text-[#e2e2e2] text-base tracking-[0] leading-[normal]">
                {experience.company}
              </div>
              <div className="relative w-fit font-light text-neutral-400 text-sm tracking-[0] leading-[normal]">
                {experience.period}
              </div>
            </div>

            <div className="flex md:w-[280px] w-[224px] items-center gap-2.5 px-0 py-2">
              <p className="relative flex-1 font-light text-wrap text-[#e2e2e2] md:text-sm text-xs tracking-[0] leading-[normal]">
                {experience.description}
              </p>
            </div>

            {/* <img
                className="absolute w-[145px] h-[54px] -top-2.5 left-[88px] aspect-[2.69]"
                alt="Company logo"
                src={experience.logo}
            /> */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
