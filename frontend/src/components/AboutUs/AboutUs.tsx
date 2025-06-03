import Button from "../Button/Button";
import Text from "../Text/Text";

export default function AboutSection() {
  return (
    <section
      className="bg-[#040013] flex flex-col items-center justify-evenly gap-10 px-8 py-16 relative overflow-hidden md:gap-0 md:flex-row"
      style={{ width: "100dvw", minHeight: "100dvh" }}
    >
      {/* Texto */}
<<<<<<< HEAD
      <div className="max-w-xl ">
        <h4 className="text-[#C77DFF] text-lg font-semibold mb-2">Sobre nós</h4>
        <h2 className="text-white text-4xl font-bold mb-4 leading-tight">
          Conheça <br /> nossa empresa
        </h2>
        <p className="text-gray-300 text-base mb-6">
          A <strong>Somnium</strong> é uma empresa focada em inovação e no
          avanço tecnológico, com o objetivo de tornar a tecnologia mais
          acessível para empresas de pequeno e médio porte. Nossa missão é
          facilitar a inserção e a ascensão dessas empresas no mercado por meio
          de soluções tecnológicas eficazes e personalizadas.
        </p>
        <p className="text-gray-400 mb-6">
          Veja um pouco mais sobre a <strong>Somnium</strong> e seus
          desenvolvedores clicando no botão abaixo.
        </p>
=======
      <div className="max-w-[400px]">
        <div className="w-max mb-3">
          <Text size="1.5em" height="bold" isGradient>Sobre nós</Text>
        </div>

        <div className="leading-9 mb-10">
          <Text size="2.5em" height="bold">Conheça</Text>
          <Text size="2.5em" height="bold">Nossa empresa</Text>
        </div>
        
        <div className="space-y-4 text-justify mb-10"> 
          <Text size="1.25em" height="light" color="#A8AFC1" wordSpacing="2px">
            A <strong>Somnium</strong> é uma empresa focada em inovação e no
            avanço tecnológico, com o objetivo de tornar a tecnologia mais
            acessível para empresas de pequeno e médio porte. Nossa missão é
            facilitar a inserção e a ascensão dessas empresas no mercado por meio
            de soluções tecnológicas eficazes e personalizadas.
          </Text>

          <Text size="1.25em" height="light" color="#A8AFC1" wordSpacing="2px">
            Veja um pouco mais sobre a <strong>Somnium</strong> e seus
            desenvolvedores clicando no botão abaixo.
          </Text>
        </div>
  
>>>>>>> f4c75b69ab0015d179b78d9b37b40439bd100ac4
        <Button
          text="Veja mais"
          click={() => {
            window.location.href = "/sobre"; //Vai madar pra algum lugar
          }}
        />
      </div>

      {/* Box com imagem */}
      <div className="w-[380px] h-[520px] flex items-center justify-center rounded-lg bg-gradient-to-b from-[#C77DFF] to-[#5A189A] shadow-lg md:block"></div>
    </section>
  );
}
