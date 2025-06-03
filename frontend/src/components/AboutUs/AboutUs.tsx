import Button from "../Button/Button";

export default function AboutSection() {
  return (
    <section
      className="bg-[#040013] flex flex-col md:flex-row items-center justify-center gap-12 px-8 py-16 relative overflow-hidden"
      style={{ width: "100dvw", height: "100dvh" }}
    >
      {/* Texto */}
      <div className="max-w-xl">
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
        <Button
          text="Saiba mais"
          click={() => {
            window.location.href = "/sobre"; //Vai madar pra algum lugar
          }}
        />
      </div>

      {/* Box com imagem */}
      <div className="w-72 h-96 rounded-lg bg-gradient-to-b from-[#C77DFF] to-[#5A189A] flex items-center justify-center shadow-lg"></div>
    </section>
  );
}
