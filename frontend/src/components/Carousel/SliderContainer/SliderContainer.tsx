import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import { Swiper, SwiperClass, SwiperProps } from "swiper/react";
import { Navigation, A11y, FreeMode } from "swiper/modules";

import { useCallback, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "./SliderContainer.css";

type SliderContainerProps = {
  settings?: SwiperProps;
  children?: React.ReactNode;
};

export default function SliderContainer({ settings, children }: SliderContainerProps) {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <div>
      {/* Controle do Swiper */}
      <div className="px-[2dvw] flex justify-between items-center my-4">
        <button onClick={handlePrevious} className="cursor-pointer text-4xl text-[#774B99] hover:text-[#C77DFF] transition-all duration-200">
          <HiArrowSmallLeft />
        </button>
        <button onClick={handleNext} className="cursor-pointer text-4xl text-[#774B99] hover:text-[#C77DFF] transition-all duration-200">
          <HiArrowSmallRight />
        </button>
      </div>

      <Swiper onSwiper={setSwiperRef} modules={[FreeMode, Navigation, A11y]} {...settings}>
        {children}
      </Swiper>
    </div>
  );
}
