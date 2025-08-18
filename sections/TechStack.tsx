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
        <Layers className="w-6 h-6 stroke-current text-[#16A34A]" />
        <h2 className="relative w-fit font-semibold text-[#e2e2e2] text-[28px] tracking-[0] leading-[normal]">
          Tech Stack
        </h2>
      </div>

      <div className="flex flex-wrap gap-4 px-0 py-2.5 w-full">
        {groupedTechStack.map(
          (group) =>
            stackShowableList.includes(group.name) && (
              <div
                key={group.name}
                className="flex w-fit border-r pr-4 border-neutral-700 items-start gap-[12px_12px]"
              >
                {group.items.map((tech, index) => (
                  <button
                    key={index}
                    className={`${
                      selectedStack.includes(tech.name)
                        ? "border-green-700 shadow-sm shadow-green-400"
                        : "border-neutral-700"
                    } cursor-pointer inline-flex items-center justify-center gap-2 px-3 py-2 bg-[#52525226] rounded-[5px] border border-solid  hover:bg-green-700`}
                    onClick={() =>
                      setSelectedStack((prev) =>
                        prev.includes(tech.name)
                          ? prev.filter((item) => item !== tech.name)
                          : [...prev, tech.name]
                      )
                    }
                  >
                    {tech.icon && (
                      <span className="block relative w-7 h-7">
                        <Image
                          className={`${tech.name !== "Next.JS" && "drop-shadow-[2px_2px_0_black]"}`}
                          src={tech.icon}
                          alt={tech.name}
                          fill
                        />
                      </span>
                    )}
                    <div className="relative w-fit font-medium text-[#e2e2e2] text-lg tracking-[0] leading-[normal]">
                      {tech.name}
                    </div>
                  </button>
                ))}
              </div>
            )
        )}

        {/* Show all button */}
        <div className="inline-flex items-center">
          <div
            className="cursor-pointer inline-flex items-center justify-center gap-1 px-3 py-2 bg-[#52525226] rounded-[5px] border border-solid border-neutral-700 hover:bg-green-700"
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
              <OctagonMinus className="w-6 h-6 text-[#e2e2e2]" />
            ) : (
              <RectangleEllipsis className="w-7 h-7 text-[#e2e2e2]" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
