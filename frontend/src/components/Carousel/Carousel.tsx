import { SwiperProps, SwiperSlide } from "swiper/react";

import Slider from "@/components/Carousel/SliderContainer/SliderContainer"
import SliderItem from "./SliderItem/SliderItem";
import Text from "../Text/Text";

export default function Carrossel() {
  const settings: SwiperProps = {
    freeMode: true,
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 10,
      }
    }
  };

  return (
    <Slider settings={settings}>
      <SwiperSlide>
        <SliderItem>
          <Text size="1.5em" height="bold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AF7EDD] to-[#EFC3A6]">Paggie</span></Text>
        </SliderItem>
      </SwiperSlide>

      <SwiperSlide>
        <SliderItem>
          <Text size="1.5em" height="bold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AF7EDD] to-[#EFC3A6]">Paggie</span></Text>
        </SliderItem>
      </SwiperSlide>

      <SwiperSlide>
        <SliderItem>
          <Text size="1.5em" height="bold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AF7EDD] to-[#EFC3A6]">Paggie</span></Text>
        </SliderItem>
      </SwiperSlide>

      <SwiperSlide>
        <SliderItem>
          <Text size="1.5em" height="bold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AF7EDD] to-[#EFC3A6]">Paggie</span></Text>
        </SliderItem>
      </SwiperSlide>

      <SwiperSlide>
        <SliderItem>
          <Text size="1.5em" height="bold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AF7EDD] to-[#EFC3A6]">Paggie</span></Text>
        </SliderItem>
      </SwiperSlide>
      
      <SwiperSlide>
        <SliderItem>
          <Text size="1.5em" height="bold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AF7EDD] to-[#EFC3A6]">Paggie</span></Text>
        </SliderItem>
      </SwiperSlide>

      <SwiperSlide>
        <SliderItem>
          <Text size="1.5em" height="bold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AF7EDD] to-[#EFC3A6]">Paggie</span></Text>
        </SliderItem>
      </SwiperSlide>
    </Slider>
  );
}