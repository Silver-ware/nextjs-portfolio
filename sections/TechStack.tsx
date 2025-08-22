"use client";
import { techStackData, groupStack } from "@/data/techstackbtn";
// import { Badge } from "@/components/ui/badge";
import { Layers, RectangleEllipsis, OctagonMinus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const groups: groupStack[] = [
  "primary",
  "secondary",
  "tertiary",
  "tools",
  "others",
];

export default function TechStack() {
  const [stackShowableList, setShowableList] = useState<string[]>(["primary"]);
  const [selectedStack, setSelectedStack] = useState<string[]>([]);

  const groupedTechStack = groups.map((group) => ({
    name: group,
    items: techStackData.filter((data) => data.group === group),
  }));

  return (
    <section className="flex-col items-start px-0 py-2.5 flex gap-2.5 w-full">
      <div className="inline-flex items-center gap-2.5">
        <Layers className="md:w-6 w-[18px] md:h-6 h-[18px] stroke-current text-[#16A34A]" />
        <h2 className="relative w-fit font-semibold text-foreground lg:text-[28px] md:text-2xl text-xl tracking-[0] leading-[normal]">
          Tech Stack
        </h2>
      </div>

      <div className="flex flex-wrap md:justify-start justify-center gap-4 px-0 py-2.5 w-full">
        {groupedTechStack.map(
          (group) =>
            stackShowableList.includes(group.name) && (
              <div
                key={group.name}
                className="flex w-fit flex-wrap lg:flex-nowrap md:justify-start justify-center border-r pr-4 border-neutral-700 items-start gap-[12px_12px]"
              >
                {group.items.map((tech, index) => (
                  <button
                    key={index}
                    className={`${
                      selectedStack.includes(tech.name)
                        ? "border-green-700 shadow-sm shadow-green-400"
                        : "border-neutral-700"
                    } group cursor-pointer inline-flex items-center justify-center gap-2 px-3 lg:py-2 py-1 bg-semi-transparent rounded-[5px] border border-solid  hover:bg-green-700`}
                    onClick={() =>
                      setSelectedStack((prev) =>
                        prev.includes(tech.name)
                          ? prev.filter((item) => item !== tech.name)
                          : [...prev, tech.name]
                      )
                    }
                  >
                    {tech.icon && (
                      <span className="block relative md:w-7 w-[18px] md:h-7 h-[18px]">
                        <Image
                          className={`${tech.name !== "NextJS" && "drop-shadow-[2px_2px_0_black]"}`}
                          src={tech.icon}
                          alt={tech.name}
                          fill
                        />
                      </span>
                    )}
                    <div className="group-hover:text-[#e2e2e2] relative w-fit font-medium text-foreground md:text-lg text-base tracking-[0] leading-[normal]">
                      {tech.name}
                    </div>
                  </button>
                ))}
              </div>
            )
        )}

        {/* Show all button */}
        <div className="inline-flex w-fit justify-center items-center">
          <div
            className="cursor-pointer inline-flex items-center justify-center gap-1 px-3 md:py-2 py-1 bg-semi-transparent rounded-[5px] border border-solid border-neutral-700 hover:bg-green-700"
            onClick={() =>
              setShowableList((prev) => {
                const extraGroups = [
                  "secondary",
                  "tertiary",
                  "others",
                  "tools",
                ];
                const hasAllExtras = extraGroups.every((g) => prev.includes(g));

                return hasAllExtras ? ["primary"] : [...prev, ...extraGroups];
              })
            }
          >
            {" "}
            {stackShowableList.length === 5 ? (
              <OctagonMinus className="md:w-6 w-4 md:h-6 h-4 text-foreground" />
            ) : (
              <RectangleEllipsis className="md:w-7 w-5 md:h-7 h-5 text-foreground" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
