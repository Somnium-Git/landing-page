import Button from "../Button/Button";
import Text from "../Text/Text";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      className="bg-[#040013] flex flex-col items-center justify-evenly gap-10 px-8 py-16 relative overflow-hidden lg:gap-0 lg:flex-row"
      style={{ width: "100dvw", minHeight: "100dvh" }}
    >
      {/* Texto */}
      <div className="max-w-[500px] lg:max-w-[400px]">
        <div className="w-max mb-3">
          <Text size="1.5em" height="bold" isGradient>
            Sobre nós
          </Text>
        </div>

        <div className="leading-9 mb-10">
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
      <div className="relative w-[500px] h-[450px] flex items-center justify-center rounded-lg bg-gradient-to-b from-[#C77DFF] to-[#5A189A] shadow-lg">
        <Image
          src="/VetorSobre.png"
          alt="Imagem da Somnium"
          width={500}
          height={500}
          className="object-contain relative z-10"
          draggable={false}
          priority
        />
      </div>
    </section>
  );
}
