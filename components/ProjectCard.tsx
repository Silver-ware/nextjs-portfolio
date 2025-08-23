import { Card, CardContent } from "@/components/ui/card";
import { ProjectInterface } from "@/data/projects";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import { useMediaQuery } from "./use-media-query";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Sparkles } from "lucide-react";

export default function ProjCards({
  project,
  onOpenOverlay,
  openMobileView,
}: {
  project: ProjectInterface;
  onOpenOverlay: React.Dispatch<React.SetStateAction<string[] | null>>;
  openMobileView: React.Dispatch<React.SetStateAction<ProjectInterface | null>>;
}) {
  const [open, setOpen] = useState(false);
  const isSm = useMediaQuery("(max-width: 767px)");

  return (
    <Popover
      open={open}
      onOpenChange={(o) => {
        if (!isSm) {
          setOpen(o);
        } else {
          openMobileView(project);
        }
      }}
    >
      <PopoverTrigger asChild>
        <Card
          className="group cursor-pointer flex flex-col w-[300px] h-fit items-start justify-center md:justify-self-start justify-self-center gap-3.5 px-4 py-5 bg-background dark:bg-semi-transparent rounded-lg border border-solid border-neutral-700
        hover:scale-[102%] hover:border-title transition-all duration-250 ease-in relative"
        >
          {/* Fetures Button */}
          {/* <div className="absolute px-2 py-2.5 -right-[1px] top-8 translate-x-[30%] group-hover:translate-x-full opacity-0 group-hover:opacity-100
          z-0 bg-semi-transparent border-y border-r border-neutral-700 rounded-e-sm transition-all duration-300 ease-in-out">
            <Sparkles className="w-4 h-4 text-title"/>
          </div> */}
          <CardContent className="p-0 w-full relative">
            {/* {(project.showcasable || project.collaborated) && (
              <div className="absolute flex -top-10 -right-8 h-fit w-fit text-title z-[10]">
                {project.collaborated && (
                  <span className="flex h-fit w-fit p-2 translate-x-[10px] relative z-[8] rounded-full border border-title bg-semi-transparent backdrop-blur-xl">
                    <UsersRound className="w-5 h-5" />
                  </span>
                )}
                {project.showcasable && (
                  <span className="flex h-fit w-fit p-2 rounded-full border border-title bg-semi-transparent backdrop-blur-xl">
                    <CircleStar className="w-5 h-5" />
                  </span>
                )}
              </div>
            )} */}
            <Swiper
              className="projects-swiper"
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
              {project.images.map((image, index) => (
                <SwiperSlide
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenOverlay(project.images);
                  }}
                >
                  <div className="self-stretch relative h-38 rounded overflow-hidden">
                    <Image src={image} alt={`${project.title}-image`} fill />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <span className="text-sm mt-2 group-hover:opacity-90 lg:opacity-0 opacity-90 text-secondary-foreground text-center block transition-opacity duration-300 ease-in-out">
              Click/Tap to View Features
            </span>

            <div className="flex flex-col items-start gap-1 w-full">
              <div className="inline-flex items-start gap-2.5">
                <h3 className="relative w-fit font-medium text-title md:text-xl text-[18px] tracking-[0] leading-[normal]">
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
      </PopoverTrigger>
      <PopoverContent
        sideOffset={10}
        align="start"
        side="right"
        className="bg-background/90 backdrop-blur-md text-foreground border-neutral-700"
      >
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
      </PopoverContent>
    </Popover>
  );
}
