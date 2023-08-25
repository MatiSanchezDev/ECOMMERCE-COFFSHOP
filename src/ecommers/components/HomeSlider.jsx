import { Navigation, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const HomeSlider = () => {
  return (
    <div className="w-full h-auto ">
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="w-auto md:h-[300px] lg:lg:h-[500px] xl:h-[600px] relative flex object-contain items-center justify-center z-0"
      >
        <SwiperSlide>
          <span className="group absolute w-full h-full text-xl md:2xl bg-black/40 text-white flex flex-col justify-center items-center uppercase">
            <span className="text-3xl sm:text-5xl lg:text-6xl xl:text-8xl group-hover:text-orange-400 ease-in-out duration-300 ">
              ¡Welcome to Coff Shop!
            </span>
            <button className="absolute text-sm md:text-2xl py-1 px-5 md:py-3 md:px-9 rounded-lg font-bold bg-white text-black bottom-3 hover:bg-orange-200">
              SHOP
            </button>
          </span>
          <img
            className="w-auto h-auto object-center"
            src="/wallpaper/wall1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <span className="group absolute w-full h-full text-xl md:2xl bg-black/60 text-white flex flex-col justify-center items-center uppercase">
            <span className="text-3xl sm:text-5xl lg:text-6xl xl:text-8xl group-hover:text-orange-400 ease-in-out duration-300 underline">
              Selected Coffee Beans
            </span>
            <button className="absolute text-sm md:text-2xl py-1 px-5 md:py-3 md:px-9 rounded-lg font-bold bg-white text-black bottom-3 hover:bg-orange-200">
              SHOP
            </button>
          </span>
          <img className="object-cover" src="/wallpaper/wall3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <span className="group absolute w-full h-full text-xl md:2xl bg-black/40 text-white flex flex-col justify-center items-center">
            <span className="text-3xl sm:text-5xl lg:text-6xl xl:text-8xl group-hover:text-orange-400 ease-in-out duration-300 uppercase underline">
              Premium Brands
            </span>
            <button className="absolute text-sm md:text-2xl py-1 px-5 md:py-3 md:px-9 rounded-lg font-bold bg-white text-black bottom-3 hover:bg-orange-200">
              SHOP
            </button>
          </span>
          <img className="object-cover" src="/wallpaper/wall2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <span className="group absolute w-full h-full text-xl md:2xl bg-black/40 text-white flex flex-col justify-center items-center">
            <span className="text-3xl sm:text-5xl lg:text-6xl xl:text-8xl group-hover:text-orange-400 ease-in-out duration-300 uppercase underline">
              Arabian Coffee Beans
            </span>
            <button className="absolute text-sm md:text-2xl py-1 px-5 md:py-3 md:px-9 rounded-lg font-bold bg-white text-black bottom-3 hover:bg-orange-200">
              SHOP
            </button>
          </span>
          <img
            className="w-full h-auto object-cover"
            src="/wallpaper/wall4.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
