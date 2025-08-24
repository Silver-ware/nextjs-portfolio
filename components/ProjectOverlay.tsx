import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ProjectOverlay({
  images,
  onClose,
}: {
  images: string[];
  onClose: React.Dispatch<React.SetStateAction<string[] | null>>;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center md:backdrop-blur-xs mobile-blur-sm bg-background/25"
      onClick={() => onClose(null)}
    >
      <button
        onClick={() => onClose(null)}
        className="cursor-pointer hover:scale-110 absolute top-6 right-6 text-title text-2xl font-extrabold"
      >
        ✕
      </button>
      <div className="lg:w-[70vw] md:w-[80vw] w-[90vw] h-fit lg:rounded-2xl rounded-sm border-1 border-neutral-700" onClick={(e) => e.stopPropagation()}>
        <Swiper
          className="lg:w-[70vw] md:w-[80vw] w-[90vw] h-auto my-0 lg:rounded-2xl rounded-sm "
          modules={[Pagination, Autoplay, Navigation]}
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={1}
          loop
          pagination={{ clickable: true }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full aspect-3/2 max-h-[95vh]">
                <Image
                  src={image}
                  alt={`overlay-image-${index}`}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
