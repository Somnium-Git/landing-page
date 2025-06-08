import Image from "next/image";
import Button from "../Button/Button";
import Text from "../Text/Text";

export default function AboutUs() {
  return (
    <section
      className="bg-[#040013] flex flex-col items-center justify-evenly gap-10 px-[2dvw] py-32 relative overflow-hidden lg:gap-14 lg:flex-row"
      style={{ width: "100dvw", minHeight: "100dvh" }}
    >
      {/* Texto */}
      <div className="max-w-[600px] flex flex-col justify-center items-center lg:max-w-[400px] lg:block">
        <div className="text-center w-max mb-3">
          <Text size="1.5em" height="bold" isGradient>
            Sobre nós
          </Text>
        </div>

        <div className="text-center leading-9 mb-10 lg:text-left">
          <Text size="2.5em" height="bold">
            Conheça
          </Text>
          <Text size="2.5em" height="bold">
            Nossa empresa
          </Text>
        </div>

        <div className="space-y-4 text-justify mb-10">
          <Text size="1.25em" height="light" color="#A8AFC1" wordSpacing="2px">
            A <strong>Somnium</strong> é uma empresa focada em inovação e no
            avanço tecnológico, com o objetivo de tornar a tecnologia mais
            acessível para empresas de pequeno e médio porte. Nossa missão é
            facilitar a inserção e a ascensão dessas empresas no mercado por
            meio de soluções tecnológicas eficazes e personalizadas.
          </Text>

          <Text size="1.25em" height="light" color="#A8AFC1" wordSpacing="2px">
            Veja um pouco mais sobre a <strong>Somnium</strong> e seus
            desenvolvedores clicando no botão abaixo.
          </Text>
        </div>

        <Button
          text="Veja mais"
          click={() => {
            window.location.href = "/equipe"; //Vai madar pra algum lugar
          }}
        />
      </div>

      {/* Box com imagem */}
      <div className="relative max-w-[600px] max-h-[600px] flex items-center justify-center rounded-lg">
        <Image
          src="/VetorSobre2.png"
          alt="Imagem da Seção Sobre"
          width={600}
          height={600}
          className="object-contain relative z-10"
          draggable={false}
          priority
        />
      </div>
    </section>
  );
}
