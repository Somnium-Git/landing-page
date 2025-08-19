import { SwiperProps } from "swiper/react";

import SliderContainer from "@/components/Carousel/SliderContainer/SliderContainer";

type CarouselProps = {
  children?: React.ReactNode;
  flexJustify?: string;
  isProjectBreakpoint?: boolean;
};

export default function Carousel({ children, flexJustify, isProjectBreakpoint }: CarouselProps) {
  const breakpointProject: SwiperProps = {
    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      430: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: -40,
      },
      500: {
        slidesPerView: 1,
        spaceBetween: -80,
      },
      540: {
        slidesPerView: 1,
        spaceBetween: -120,
      },
      570: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      830: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1095: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    },
  }

  const breakpointMember: SwiperProps = {
    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetween: 80,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      390: {
        spaceBetween: -40,
      },
      430: {
        spaceBetween: -80,
      },
      480: {
        spaceBetween: -120,
      },
      500: {
        spaceBetween: -160,
      },
      540: {
        spaceBetween: -180,
      },
      570: {
        spaceBetween: -200,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      735: {
        spaceBetween: -80,
      },
      830: {
        slidesPerView: 3,
        spaceBetween: 140
      },
      1095: {
        slidesPerView: 4,
        spaceBetween: 120,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 100,
      },
    },
  }

  const swiperBreakpoint = isProjectBreakpoint ? breakpointProject : breakpointMember;

  const settings: SwiperProps = {
    freeMode: true,
    initialSlide: 1,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      clickable: true,
    },
    ...swiperBreakpoint
  };

  return (
    <SliderContainer settings={settings} flexJustify={flexJustify}>
      {children}
    </SliderContainer>
  );
}
