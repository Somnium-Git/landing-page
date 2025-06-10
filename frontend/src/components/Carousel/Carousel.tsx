import { SwiperProps, SwiperSlide } from "swiper/react";

import SliderContainer from "@/components/Carousel/SliderContainer/SliderContainer";
import SliderItem from "./SliderItem/SliderItem";
import Text from "../Text/Text";

export default function Carousel() {
  const settings: SwiperProps = {
    freeMode: true,
    initialSlide: 2,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      clickable: true,
    },
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
        <SliderItem
          description="O Cupuaçu é uma aplicação web projetada para facilitar a compra e venda de produtos online. O sistema oferece uma interface simples e intuitiva para que os clientes possam navegar, selecionar e comprar produtos, enquanto os administradores têm a capacidade de gerenciar o catálogo de produtos."
          projectLink="https://github.com/EuAndersonDev/Cupuacu"
          repositoryLink="https://github.com/EuAndersonDev/Cupuacu"
        >
          <Text size="1.5em" height="bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a6efdd] to-[#5ab2ff]">
              Cupuaçu
            </span>
          </Text>
        </SliderItem>
      </SwiperSlide>

      <SwiperSlide>
        <SliderItem
          description="Um sistema web personalizável, com interface simples e acessível, que permita os pequenos e médios empreendedores criarem páginas exclusivas para divulgação de seus produtos e serviços."
          projectLink="https://github.com/Somnium-Git/Paggie"
          repositoryLink="https://github.com/Somnium-Git/Paggie"
        >
          <Text size="1.5em" height="bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AF7EDD] to-[#EFC3A6]">
              Paggie
            </span>
          </Text>
        </SliderItem>
      </SwiperSlide>

      <SwiperSlide>
        <SliderItem
          description="Um sistema web com o objetivo de simplificar e simular transações de criptomoedas de forma simples e intuitiva. O sistema oferece compra, venda, saque e depósito de criptomoedas ou moedas comuns dentro da aplicação de forma segura."
          projectLink="https://github.com/GuilhermeCustodioNieto/GL-Crypto"
          repositoryLink="https://github.com/GuilhermeCustodioNieto/GL-Crypto"
        >
          <Text size="1.5em" height="bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9659] to-[#efd8a6]">
              GL-Cripto
            </span>
          </Text>
        </SliderItem>
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
