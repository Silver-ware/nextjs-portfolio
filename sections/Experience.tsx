"use client";
import { BriefcaseBusiness } from "lucide-react";
import { experienceData } from "@/data/experience";
import { awardsAndCertificatesData } from "@/data/awards";
import ExpCards from "@/components/ExperienceCard";
import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AwardsOverlay from "@/components/AwardsOverlay";

export default function Experience() {
  const [awardsVisibility, setAwardsVisibility] = useState<boolean>(false);
  const [imageOverlay, setImageOverlay] = useState<string | null>(null);

  return (
    <section
      id="experience"
      className="flex-col items-start px-0 py-2.5 flex gap-2.5 w-full scroll-mt-[100px]"
    >
      <div className="inline-flex items-center gap-2.5">
        <BriefcaseBusiness className="md:w-6 w-[18px] md:h-6 h-[18px] stroke-current text-[#16A34A]" />
        <h2 className="relative w-fit font-semibold text-foreground lg:text-[28px] md:text-2xl text-xl tracking-[0] leading-[normal]">
          Experience
        </h2>
      </div>

      <div className="inline-flex gap-2.5 md:flex-col flex-col-reverse items-start w-full">
        <div className="h-fit w-full rounded-xl overflow-hidden relative">
          <div className="relative flex items-start pl-1 pr-6 py-5 w-full bg-semi-transparent rounded-xl overflow-x-auto custom-scrollbar">
            {experienceData.map((experience, index) => (
              <ExpCards
                experience={experience}
                index={index}
                key={experience.id}
              />
            ))}
          </div>
          <div
            className="absolute top-0 right-0 lg:w-[20%] md:w-[25%] w-[30%] h-full
              bg-gradient-to-l from-primary-gradient/50 to-transparent 
              pointer-events-none select-none"
          ></div>
        </div>

        {awardsVisibility && (
          <div className="h-fit flex w-full rounded-xl overflow-hidden">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true }}
            >
              {awardsAndCertificatesData.map((awards) => (
                <SwiperSlide key={awards.id}>
                  <div className="bg-semi-transparent h-full justify-self-stretch flex flex-col md:flex-row gap-2 lg:gap-10 md:gap-8 rounded-xl pt-5 pb-9 px-10 lg:px-12">
                    <div
                      className="relative cursor-pointer rounded w-full md:w-[40%] lg:w-1/2 overflow-hidden border border-neutral-700 bg-green-900/90 aspect-[3/2]
                        bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.12)_1px,transparent_1px)]
                        bg-[length:12px_12px] bg-repeat"
                        onClick={() => setImageOverlay(awards.image)}
                    >
                      <Image
                        className="object-contain"
                        src={awards.image}
                        alt="awards-placeholder"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 50vw"
                        fill
                      />
                    </div>
                    <div className="text-center flex flex-1 w-full items-center justify-center flex-col">
                      <span className="text-xs md:text-base lg:text-lg italic text-secondary-foreground font-light">
                        {awards.date}
                      </span>
                      <p className="font-bold text-lg md:text-2xl lg:text-3xl text-green-700">
                        {awards.title}
                      </p>
                      <p className="text-base text-foreground md:text-xl lg:text-2xl">
                        {awards.competitionName}
                      </p>
                      <p className="md:block md:text-sm lg:text-base hidden text-center font-light pt-4 px-8 text-foreground">
                        {awards.details}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        <div className="inline-flex items-center gap-2.5 px-2.5 py-0">
          <input
            id="awards-checkbox"
            type="checkbox"
            onChange={(e) => setAwardsVisibility(e.target.checked)}
            className="relative w-[15px] h-[15px] appearance-none bg-[#a3a3a31a] rounded-[5px] border border-dashed border-neutral-700 checked:bg-green-700 checked:border-solid checked:border-green-600 checked:after:content-['✔'] checked:after:absolute checked:after:top-0 checked:after:left-[3px] checked:after:text-white checked:after:text-[10px]"
          />
          <label
            htmlFor="awards-checkbox"
            className="cursor-pointer relative w-fit font-light text-foreground text-sm tracking-[0] leading-[normal]"
          >
            Show relevant Awards & Certificates?
          </label>
        </div>

        {/* Awards Image Overlay */}
        {imageOverlay && <AwardsOverlay  image={imageOverlay} onClose={setImageOverlay}/>}
      </div>
    </section>
  );
}
