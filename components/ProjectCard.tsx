import { Card, CardContent } from "@/components/ui/card";
import { ProjectInterface } from "@/data/projects";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ProjCards({
  project,
  onOpenOverlay,
}: {
  project: ProjectInterface;
  onOpenOverlay: React.Dispatch<React.SetStateAction<string[] | null>>;
}) {
  return (
    <Card
      className="cursor-pointer flex flex-col w-[300px] h-fit items-start justify-center md:justify-self-start justify-self-center gap-3.5 px-4 py-5 bg-background dark:bg-semi-transparent rounded-lg border border-solid border-neutral-700
        hover:scale-[102%] hover:border-title transition-all duration-250 ease-in"
    >
      <CardContent className="p-0 w-full">
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
          onClick={() => onOpenOverlay(project.images)}
        >
          {project.images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="self-stretch relative h-38 rounded overflow-hidden">
                <Image src={image} alt={`${project.title}-image`} fill />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex flex-col items-start gap-1 mt-3.5 w-full">
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
  );
}
