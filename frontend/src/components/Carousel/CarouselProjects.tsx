import { SwiperSlide } from "swiper/react";
import SliderItem from "./SliderItem/SliderItem";
import Text from "../Text/Text";

import Carousel from "./Carousel";

export default function CarouselProjects() {
  return (
    <Carousel isProjectBreakpoint={true}>
      <SwiperSlide>
        <SliderItem
          description="Uma aplicação web com objetivos educacionais para simplificar o aprendizado de matemática de forma divertida e prática. A aplicação oferece sistema de XP, ranking, trocas de imagem e progressão gradual nas lições."
          projectLink="http://pollymath.mypressonline.com/"
          repositoryLink="https://github.com/gabriellimao7500/PolyMath"
        >
          <Text size="1.5em" height="bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c4fff0] to-[#fcfdff]">
              PolyMath
            </span>
          </Text>
        </SliderItem>
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
        <SliderItem
          description="Uma aplicação web para simular um cassino online, com o objetivo de conscientizar sobre os malefícios das apostas online."
          projectLink="https://f12794cd-68ad-4f46-9e86-87589dcce8cd-00-3i96uiu3rzg7z.janeway.replit.dev/"
          repositoryLink="https://github.com/gabriellimao7500/Cassino.git"
        >
          <Text size="1.5em" height="bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2873] to-[#7b72ff]">
              Bet369
            </span>
          </Text>
        </SliderItem>
      </SwiperSlide>

      <SwiperSlide>
        <SliderItem
          description="Uma aplicação com um catálogo de 2 jogos: jogo da velha e snake game, de forma didatica e divertida."
          projectLink="https://c7b65aed-6a2b-43e0-85c0-e01af640df45-00-1lxbn50mrbqv0.picard.replit.dev/paginas/tic-tac.html"
          repositoryLink="https://c7b65aed-6a2b-43e0-85c0-e01af640df45-00-1lxbn50mrbqv0.picard.replit.dev/paginas/tic-tac.html"
        >
          <Text size="1.5em" height="bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a0a0a0] to-[#dedede]">
              Games
            </span>
          </Text>
        </SliderItem>
      </SwiperSlide>
    </Carousel>
  );
}