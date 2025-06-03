import { useState, useRef } from "react";

const cards = [
  {
    logo: "../../assets/Outlier.jpeg",
    title: "Empresa 1",
    description: "Descrição da Empresa 1",
  },
  {
    logo: "/empresas/logo2.png",
    title: "Empresa 2",
    description: "Descrição da Empresa 2",
  },
  {
    logo: "/empresas/logo3.png",
    title: "Empresa 3",
    description: "Descrição da Empresa 3",
  },
  {
    logo: "/empresas/logo4.png",
    title: "Empresa 4",
    description: "Descrição da Empresa 4",
  },
];

export default function Associates() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isGradient, setIsGradient] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (i: number) => {
    setHovered(i);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsGradient(i), 400);
  };

  const handleMouseLeave = () => {
    setHovered(null);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsGradient(null), 100);
  };

  return (
    <section
      className="bg-[#040013] flex flex-col items-center justify-center overflow-hidden px-8 py-16 relative my-16"
      style={{ width: "100dvw", height: "500px" }}
    >
      <h1 className="text-4xl font-bold text-white">
        Empresas{" "}
        <span className="bg-gradient-to-r from-[#C77DFF] to-[#774B99] bg-clip-text text-transparent">
          parceiras
        </span>
      </h1>

      <div className="flex justify-center gap-8 mt-12 w-full max-w-2xl">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`flex flex-col items-center transition-all duration-300 ease-in-out ${
              hovered === i ? "scale-110 shadow-2xl" : "scale-100"
            }`}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`rounded-xl border-2 flex items-center justify-center relative overflow-hidden transition-all duration-300
                ${
                  isGradient === i
                    ? "bg-gradient-to-b from-[#C77DFF] to-[#774B99] border-[#8B3DFF]"
                    : "bg-[#333333] border-[#555555]"
                }
              `}
              style={{ width: "250px", height: "340px" }}
            >
              <img
                src={card.logo}
                alt={card.title}
                className={`w-24 h-24 object-contain transition-opacity duration-300 absolute inset-0 m-auto ${
                  hovered === i ? "opacity-0" : "opacity-100"
                }`}
                draggable={false}
              />
              <div
                className={`flex flex-col items-center justify-center absolute inset-0 px-4 text-center transition-opacity duration-300 ${
                  hovered === i
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <span
                  className={`text-white font-bold text-lg mb-2 transition-colors duration-300 ${
                    isGradient === i
                      ? "bg-gradient-to-r from-[#C77DFF] to-[#774B99] bg-clip-text text-transparent"
                      : ""
                  }`}
                >
                  {card.title}
                </span>
                <span className="text-white text-sm">{card.description}</span>
              </div>
            </div>
            <span className="w-3 h-3 bg-[#A259FF] rounded-full mt-4 block transition-all duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
