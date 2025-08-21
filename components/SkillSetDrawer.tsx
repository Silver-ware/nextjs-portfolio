"use client";
import { Computer } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ArrowDownAz, ArrowUpZa, BrainCog, FlaskConical } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ExpertiseTable from "./ExpertiseTable";
import { expertiseData } from "@/data/expertise";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

const skillSetMainInfo = [
  {
    icons: "/assets/icons/agile.png",
    title: "Agile Development with Scrum",
    details:
      "Hands-on experience working in Agile teams using Scrum practices such as sprints, stand-ups, and iterative delivery.",
  },
  {
    icons: "/assets/icons/internship.png",
    title: "Real-World System Development",
    details:
      "Gained practical exposure during an internship by contributing to real business applications and workflows.",
  },
  {
    icons: "/assets/icons/fundamentals.png",
    title: "Strong Programming Fundamentals",
    details:
      "Built a solid foundation in C++ and Java before transitioning to web development, strengthening problem-solving and adaptability.",
  },
];

export default function SkillSetDrawer() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const direction = isMobile ? "bottom" : "left";

  const [sortFilter, setSortFilters] = useState<{
    sortBy: string;
    direction: "asc" | "desc";
  }>({
    sortBy: "",
    direction: "asc",
  });

  const sortedExpertiseData = useMemo(() => {
    if (sortFilter.sortBy === "") return expertiseData;

    const sorted = [...expertiseData].sort((a, b) => {
      const direction = sortFilter.direction === "asc" ? 1 : -1;
      if (sortFilter.sortBy === "name") {
        return a.name.localeCompare(b.name) * direction;
      } else if (sortFilter.sortBy === "understanding") {
        return (a.understanding - b.understanding) * direction;
      }
      return 0;
    });
    return sorted;
  }, [sortFilter]);

  return (
    <Drawer direction={direction}>
      <DrawerTrigger asChild>
        <button className="cursor-pointer gap-1 inline-flex items-center justify-center px-3 py-2.5 bg-green-700 hover:bg-[#085D28] transition-all ease-in-out duration-500 rounded-[5px] border border-green-700 border-solid">
          <Computer className="lg:w-5 lg:h-5 w-4 h-4 text-white" />
          <span className="relative w-fit h-fit font-normal text-white lg:text-base text-[14px] tracking-[0] leading-[normal]">
            View Skill Set
          </span>
        </button>
      </DrawerTrigger>
      <DrawerContent className="bg-[#52525226] flex flex-col items-center px-6 pt-3 pb-6 gap-3 backdrop-blur-md border-none text-[#e2e2e2]">
        <DrawerHeader className="hidden">
          <DrawerTitle className="hidden"></DrawerTitle>
          <DrawerDescription className="hidden"></DrawerDescription>
        </DrawerHeader>
        <div className="h-fit flex w-full px-2 pt-3 overflow-hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
          >
            {skillSetMainInfo.map((info) => (
              <SwiperSlide key={info.title}>
                <div className="bg-[#52525226] max-w-[384px] mx-auto flex flex-col justify-center items-center text-center text-[#e2e2e2] w-full pt-2 pb-8 px-6 h-full flex-1 self-stretch rounded-md">
                  <span className="relative w-9 h-9">
                    <Image src={info.icons} alt={info.title} fill />
                  </span>
                  <span className="block font-semibold text-green-500 text-xl">
                    {info.title}
                  </span>
                  <span className="text-wrap text-sm">{info.details}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex-1 flex flex-col w-full lg:max-w-[490px] max-w-[420px] bg-[#52525226] border border-solid border-neutral-700 rounded overflow-hidden">
          <div className="flex w-full h-fit justify-between px-4 py-3 bg-[#52525226]">
            <span className="text-[#e2e2e2] flex gap-1 items-center font-medium">
              <FlaskConical className="w-6 h-6" />
              Expertise Table
            </span>
            <div className="w-fit h-fit flex gap-2.5">
              <button
                className={`cursor-pointer ${
                  sortFilter.sortBy === "name" && "text-green-500"
                }`}
                onClick={() =>
                  setSortFilters((prev) => {
                    if (prev.sortBy !== "name") {
                      return { sortBy: "name", direction: "asc" };
                    } else if (prev.direction === "asc") {
                      return { sortBy: "name", direction: "desc" };
                    } else {
                      return { sortBy: "", direction: "asc" };
                    }
                  })
                }
              >
                {(sortFilter.sortBy !== "name" ||
                  sortFilter.direction === "asc") && (
                  <ArrowDownAz className="w-5 h-5" />
                )}

                {sortFilter.sortBy === "name" &&
                  sortFilter.direction === "desc" && (
                    <ArrowUpZa className="w-5 h-5" />
                  )}
              </button>
              <button
                className="cursor-pointer"
                onClick={() =>
                  setSortFilters((prev) => {
                    if (prev.sortBy !== "understanding") {
                      return { sortBy: "understanding", direction: "asc" };
                    } else if (prev.direction === "asc") {
                      return { sortBy: "understanding", direction: "desc" };
                    } else {
                      return { sortBy: "", direction: "asc" };
                    }
                  })
                }
              >
                <BrainCog
                  className={`w-5 h-5 ${
                    sortFilter.sortBy === "understanding" &&
                    "text-green-500 opacity-100"
                  }`}
                />
              </button>
            </div>
          </div>
          <ExpertiseTable sortedData={sortedExpertiseData} />
        </div>
        <DrawerFooter className="hidden">
          <DrawerClose>
            <div className="text-[#e2e2e2]">Close</div>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
