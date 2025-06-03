"use client";
import { useState } from "react";
import Image from "next/image";

export default function PartnerSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#040013] py-20 px-4 flex flex-col items-center my-20">
      <h2 className="text-white text-4xl font-bold text-center mb-12">
        Empresas{" "}
        <span className="bg-gradient-to-r from-[#C77DFF] to-[#5A189A] bg-clip-text text-transparent">
          parceiras
        </span>
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
        {/* Card 1 - TechSpark */}
        <div
          onMouseEnter={() => setHovered(0)}
          onMouseLeave={() => setHovered(null)}
          className={`relative w-[20.5rem] h-[28.5rem] m-2 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 
            ${
              hovered === 0
                ? "bg-white scale-110 shadow-[0_0_40px_10px_rgba(255,255,255,0.5)]"
                : "bg-[#5A189A] scale-100 shadow-lg"
            }
          `}
        >
          <Image
            src="/Gama.png"
            alt="Background Image"
            width={300}
            height={300}
            className={`object-contain transition-opacity duration-300 absolute inset-0 m-auto 
              ${hovered === 0 ? "opacity-0" : "opacity-100"}
            `}
            draggable={false}
            priority
          />
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center text-center px-4 transition-opacity duration-300 
              ${hovered === 0 ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#C77DFF] to-[#5A189A] bg-clip-text text-transparent mb-2">
              TechSpark
            </h3>
            <p className="text-[#5A189A] text-sm font-medium">
              Soluções inovadoras em tecnologia educacional.
            </p>
          </div>
        </div>

        {/* Card 2 - CodeVerse */}
        <div
          onMouseEnter={() => setHovered(1)}
          onMouseLeave={() => setHovered(null)}
          className={`relative w-[20.5rem] h-[28.5rem] m-2 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 
            ${
              hovered === 1
                ? "bg-white scale-110 shadow-[0_0_40px_10px_rgba(255,255,255,0.5)]"
                : "bg-[#5A189A] scale-100 shadow-lg"
            }
          `}
        >
          <Image
            src="/Outlier.png"
            alt="CodeVerse"
            width={300}
            height={300}
            className={`object-contain transition-opacity duration-300 absolute inset-0 m-auto 
              ${hovered === 1 ? "opacity-0" : "opacity-100"}
            `}
            draggable={false}
            priority
          />
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center text-center px-4 transition-opacity duration-300 
              ${hovered === 1 ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#C77DFF] to-[#5A189A] bg-clip-text text-transparent mb-2">
              CodeVerse
            </h3>
            <p className="text-[#5A189A] text-sm font-medium">
              Transformando ideias em códigos eficientes.
            </p>
          </div>
        </div>

        {/* Card 3 - BrightData */}
        <div
          onMouseEnter={() => setHovered(2)}
          onMouseLeave={() => setHovered(null)}
          className={`relative w-[20.5rem] h-[28.5rem] m-2 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 
            ${
              hovered === 2
                ? "bg-white scale-110 shadow-[0_0_40px_10px_rgba(255,255,255,0.5)]"
                : "bg-[#5A189A] scale-100 shadow-lg"
            }
          `}
        >
          <Image
            src="/trinity.png"
            alt="BrightData"
            width={300}
            height={300}
            className={`object-contain transition-opacity duration-300 absolute inset-0 m-auto 
              ${hovered === 2 ? "opacity-0" : "opacity-100"}
            `}
            draggable={false}
            priority
          />
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center text-center px-4 transition-opacity duration-300 
              ${hovered === 2 ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#C77DFF] to-[#5A189A] bg-clip-text text-transparent mb-2">
              BrightData
            </h3>
            <p className="text-[#5A189A] text-sm font-medium">
              Inteligência de dados para decisões assertivas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
