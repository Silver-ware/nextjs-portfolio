"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Briefcase, BriefcaseBusiness } from "lucide-react";

const experienceData = [
    {
        id: 1,
        position: "Next.JS Developer",
        company: "Symphonics Co. LTD",
        period: "Febuary, 2025 - March 2025",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.....",
        logo: "",
    },
    {
        id: 2,
        position: "Next.JS Developer",
        company: "Symphonics Co. LTD",
        period: "Febuary, 2025 - March 2025",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.....",
        logo: "",
    },
];



export default function Experience() {
  return (
    <section className="flex-col items-start px-0 py-2.5 flex gap-2.5 w-full">
      <div className="inline-flex items-center gap-2.5">
        <BriefcaseBusiness className="w-6 h-6 text-[#16A34A]" />
        <h2 className="relative w-fit font-semibold text-[#e2e2e2] text-[28px] tracking-[0] leading-[normal]">
          Experience
        </h2>
      </div>

      <div className="flex items-center pl-1 pr-4 py-5 w-full bg-[#52525226] rounded-xl">
        {experienceData.map((experience, index) => (
          <div
            key={experience.id}
            className="inline-flex flex-col items-start gap-3 px-0 py-4"
          >
            <div className="flex relative items-center gap-2.5 pl-6 pr-0 py-0 w-full">
              <div className="inline-flex items-center justify-center p-2 bg-[#a3a3a31a] rounded-full border border-solid border-green-700">
                <Briefcase className="w-5 h-5 text-[#e2e2e2]" />
              </div>
              {index < experienceData.length - 1 && (
                <Separator className="max-w-[290px] h-px bg-green-700" />
              )}
            </div>

            <div className="inline-flex flex-col items-start gap-2.5 pl-6 pr-2 py-0">
              <Card className="inline-flex flex-col items-start px-5 py-3 bg-[#52525226] rounded-[5px] border border-solid border-neutral-700">
                <CardContent className="p-0">
                  <div className="flex flex-col items-start w-full">
                    <h3 className="relative w-fit font-medium text-green-600 text-xl tracking-[0] leading-[normal]">
                      {experience.position}
                    </h3>
                    <div className="relative w-fit font-normal text-[#e2e2e2] text-base tracking-[0] leading-[normal]">
                      {experience.company}
                    </div>
                    <div className="relative w-fit font-light text-neutral-400 text-sm tracking-[0] leading-[normal]">
                      {experience.period}
                    </div>
                  </div>

                  <div className="flex w-[280px] items-center gap-2.5 px-0 py-2">
                    <p className="relative flex-1 font-light text-[#e2e2e2] text-sm tracking-[0] leading-[normal]">
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
        ))}
      </div>

      <div className="inline-flex items-center gap-2.5 px-2.5 py-0">
        <div className="relative w-[15px] h-[15px] bg-[#a3a3a31a] rounded-[5px] border border-dashed border-neutral-700" />
        <div className="relative w-fit font-light text-[#e2e2e2] text-sm tracking-[0] leading-[normal]">
          Show relevant Awards & Certificates?
        </div>
      </div>
    </section>
  );
}
