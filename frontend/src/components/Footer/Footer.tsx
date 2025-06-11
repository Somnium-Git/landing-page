"use client";

import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

import Text from "../Text/Text";
import Modal from "../Modal/Modal";
import { DialogTrigger } from "@/lib/utils/modal";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#040013] text-gray-300 px-6 md:px-[2dvw] pt-10 pb-6 mt-20 text-sm">
      {/* Topo do footer (logo, navegação e redes sociais) */}
      <div className="flex flex-col md:flex-row md:mb-24 justify-between items-center md:items-start mb-12">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <Link
            href={"/"}
            className="cursor-pointer flex justify-center font-bold md:justify-start"
          >
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
        <div className="text-center flex gap-6 flex-col mb-4 mt-4 md:mb-0 md:mt-0 sm:flex-row">
          <Modal
            trigger={
              <DialogTrigger asChild>
                <span className="hover:text-white transition-all duration-200 cursor-pointer">
                  <Text size="1rem">TERMOS E CONDIÇÕES</Text>
                </span>
              </DialogTrigger>
            }
            title="TERMOS E CONDIÇÕES"
            description="Descrição breve sobre a Somnium"
          >
            <p className="text-justify text-[#f2f2f2] text-sm text-muted-foreground">
              A Somnium é uma empresa de desenvolvimento de software que cria soluções personalizadas com tecnologias modernas e metodologias ágeis. Ao contratar seus serviços, o cliente concorda com os termos estabelecidos.
              A empresa se compromete a entregar sistemas de qualidade e manter comunicação constante, enquanto o cliente deve fornecer informações corretas, colaborar e cumprir prazos e pagamentos. O código e as entregas são protegidos por direitos autorais, com uso restrito conforme contrato.
              <br />
              <br />
              Ambas as partes devem manter a confidencialidade das informações. A Somnium não se responsabiliza por mau uso, falhas externas ou usos não autorizados. O contrato pode ser encerrado por qualquer parte com aviso prévio. Os termos podem ser atualizados. Dúvidas podem ser enviadas para <Link href="mailto:somniumorganizacional@gmail.com"><strong>somniumorganizacional@gmail.com</strong></Link>.
            </p>
          </Modal>

          <Modal
            trigger={
              <DialogTrigger asChild>
                <span className="hover:text-white transition-all duration-200 cursor-pointer">
                  <Text size="1rem">POLÍTICA DE PRIVACIDADE</Text>
                </span>
              </DialogTrigger>
            }
            title="POLÍTICA DE PRIVACIDADE"
            description="Descrição breve sobre a Somnium"
          >
            <p className="text-justify text-[#f2f2f2] text-sm text-muted-foreground">
              A Somnium respeita a privacidade dos usuários e protege seus dados pessoais. As informações coletadas são usadas apenas para comunicação, execução dos serviços contratados e melhoria dos atendimentos. 
              <br />
              <br />
              Os dados não serão compartilhados sem consentimento, salvo por exigência legal. A empresa adota medidas de segurança e também coleta dados de navegação de forma anônima para aprimorar seus serviços.
              <br />
              <br />
              O usuário pode solicitar a atualização, correção ou exclusão dos dados a qualquer momento pelo e-mail <Link href="mailto:somniumorganizacional@gmail.com"><strong>somniumorganizacional@gmail.com</strong></Link>. 
              O uso contínuo dos serviços indica concordância com a política, que pode ser atualizada. A política é regida pelas leis brasileiras.
            </p>
          </Modal>
        </div>
      </div>

      {/* Linha divisória roxa */}
      <hr className="border-t border-[#1A0A37] mb-6" />

      {/* Parte inferior com navegação legal e copyright */}
      <div className="flex md:flex-row flex-col justify-center items-center gap-1 text-center">
        <Text color="oklch(71.4% 0.203 305.504)" size="1rem">
          <span className="font-bold">Somnium ©2025</span>.{" "}
          <span style={{ color: "#fff" }}>Todos os direitos reservados.</span>
        </Text>
      </div>
    </footer>
  );
}
