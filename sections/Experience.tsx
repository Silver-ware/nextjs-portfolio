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

export default function Experience() {
  const [awardsVisibility, setAwardsVisibility] = useState<boolean>(false);

  return (
    <section id="experience" className="flex-col items-start px-0 py-2.5 flex gap-2.5 w-full scroll-mt-[100px]">
      <div className="inline-flex items-center gap-2.5">
        <BriefcaseBusiness className="md:w-6 w-[18px] md:h-6 h-[18px] stroke-current text-[#16A34A]" />
        <h2 className="relative w-fit font-semibold text-[#e2e2e2] lg:text-[28px] md:text-2xl text-xl tracking-[0] leading-[normal]">
          Experience
        </h2>
      </div>

      <div className="inline-flex gap-2.5 md:flex-col flex-col-reverse items-start w-full">
        <div className="h-fit w-full rounded-xl overflow-hidden">
          <div className="flex items-start pl-1 pr-4 py-5 w-full bg-[#52525226] rounded-xl overflow-x-auto">
            {experienceData.map((experience, index) => (
              <ExpCards
                experience={experience}
                index={index}
                key={experience.id}
              />
            ))}
          </div>
        </div>

        {awardsVisibility && (
          <div className="h-fit flex w-full rounded-xl overflow-hidden">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true }}
            >
              {awardsAndCertificatesData.map((awards) => (
                <SwiperSlide key={awards.id}>
                  <div className="bg-[#52525226] h-full justify-self-stretch flex flex-col md:flex-row gap-2 lg:gap-10 md:gap-8 rounded-xl pt-5 pb-9 px-8 md:px-10 lg:px-12">
                    <div className="relative rounded w-full md:w-[40%] lg:w-1/2 overflow-hidden aspect-3/2">
                      <Image
                        className="object-cover"
                        src="/assets/images/certificate-placeholder.jpg"
                        alt="awards-placeholder"
                        fill
                      />
                    </div>
                    <div className="text-center flex flex-1 w-full items-center justify-center flex-col">
                      <span className="text-xs md:text-base lg:text-lg italic text-neutral-400 font-light">
                        {awards.date}
                      </span>
                      <p className="font-bold text-lg md:text-2xl lg:text-3xl text-green-700">
                        {awards.title}
                      </p>
                      <p className="text-base text-[#e2e2e2] md:text-xl lg:text-2xl">
                        {awards.competitionName}
                      </p>
                      <p className="md:block md:text-sm lg:text-base hidden text-center font-light pt-4 px-8 text-[#e2e2e2]">
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
            className="cursor-pointer relative w-fit font-light text-[#e2e2e2] text-sm tracking-[0] leading-[normal]"
          >
            Show relevant Awards & Certificates?
          </label>
        </div>
      </div>
    </section>
  );
}
