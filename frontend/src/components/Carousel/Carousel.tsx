import { SwiperProps, SwiperSlide } from "swiper/react";

import SliderContainer from "@/components/Carousel/SliderContainer/SliderContainer"
import SliderItem from "./SliderItem/SliderItem";
import Text from "../Text/Text";

export default function Carousel() {
  const settings: SwiperProps = {
    freeMode: true,
    initialSlide: 2,
    slidesPerView: 1,
    spaceBetween: -40,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      830: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1095: {
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
    <SliderContainer settings={settings}>
      <SwiperSlide>
        <SliderItem></SliderItem>
      </SwiperSlide>

      <SwiperSlide>
        <SliderItem></SliderItem>
      </SwiperSlide>

      <SwiperSlide>
        <SliderItem></SliderItem>
      </SwiperSlide>

      <SwiperSlide>
        <SliderItem 
        description="Um sistema para a criação de páginas web personalizáveis." 
        projectLink="https://github.com/Somnium-Git" 
        repositoryLink="https://github.com/Somnium-Git">
          <Text size="1.5em" height="bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AF7EDD] to-[#EFC3A6]">Paggie</span>
          </Text>
        </SliderItem>
      </SwiperSlide>

      <SwiperSlide>
        <SliderItem></SliderItem>
      </SwiperSlide>
      
      <SwiperSlide>
        <SliderItem></SliderItem>
      </SwiperSlide>

      <SwiperSlide>
        <SliderItem></SliderItem>
      </SwiperSlide>
    </SliderContainer>
  );
}