"use client";

import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

import Text from "../Text/Text";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#040013] text-gray-300 px-6 md:px-[2dvw] pt-10 pb-6 mt-20 text-sm">
      {/* Topo do footer (logo, navegação e redes sociais) */}
      <div className="flex flex-col md:flex-row md:mb-24 justify-between items-center md:items-start mb-12">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <Link href={"/"} className="cursor-pointer flex justify-center font-bold md:justify-start">
            <Text color="#FFFFFF" size="1.5rem">
              Som
            </Text>
            <Text isGradient={true} size="1.5rem">
              nium
            </Text>
          </Link>

          <Text color="#99a1af" size="1rem">
            Seu sucesso é o nosso sonho!
          </Text>
        </div>

        <div className="flex items-center justify-center gap-4 mt-6 md:mt-0">
          <a
            href="#"
            className="text-[#C77DFF] hover:text-white text-2xl transition-all duration-200"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-[#C77DFF] hover:text-white text-3xl transition-all duration-200"
          >
            <AiFillInstagram />
          </a>
          <a
            href="#"
            className="text-[#C77DFF] hover:text-white text-2xl transition-all duration-200"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <nav className="font-bold flex gap-6 flex-wrap justify-center md:justify-start">
          <button
            className="cursor-pointer hover:text-white transition-all duration-200"
            onClick={() => {
              document
                .getElementById("home")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Text size="1rem">Home</Text>
          </button>
          <button
            className="cursor-pointer hover:text-white transition-all duration-200"
            onClick={() => {
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Text size="1rem">Sobre</Text>
          </button>
          <button
            className="cursor-pointer hover:text-white transition-all duration-200"
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Text size="1rem">Projetos</Text>
          </button>
          <button
            className="cursor-pointer hover:text-white transition-all duration-200"
            onClick={() => {
              document
                .getElementById("partners")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Text size="1rem">Parceiros</Text>
          </button>
          <button
            className="cursor-pointer hover:text-white transition-all duration-200"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Text size="1rem">Contato</Text>
          </button>
        </nav>
      </div>

      {/* Linha divisória roxa */}
      <hr className="border-t border-[#1A0A37] mb-6" />

      {/* Parte inferior com navegação legal e copyright */}
      <div className="flex md:flex-row flex-col justify-center items-center gap-1">
        <Text color="oklch(71.4% 0.203 305.504)" size="1rem">
          <span className="font-bold">Somnium ©2025</span>.{" "}
          <span style={{ color: "#fff" }}>Todos os direitos reservados.</span>
        </Text>
      </div>
    </footer>
  );
}
