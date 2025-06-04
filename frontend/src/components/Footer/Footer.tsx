"use client";

import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

import Text from "../Text/Text";
import Modal from "../Modal/Modal";
import { DialogTrigger } from "@/lib/utils/modal";

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
        <div className="text-center flex gap-6 mb-4 md:mb-0">
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
            <p className="text-sm text-muted-foreground">
              A Somnium é uma empresa de desenvolvimento de software dedicada à
              criação de soluções inovadoras e personalizadas, utilizando
              tecnologias modernas e metodologias ágeis. Ao contratar nossos
              serviços, você concorda com os presentes termos.
              <br />
              <br />
              Nosso compromisso é fornecer sistemas de alta qualidade, sempre
              mantendo um canal de comunicação aberto com o cliente durante todo
              o processo. Em contrapartida, o cliente se compromete a fornecer
              informações precisas, colaborar com a equipe e cumprir os prazos e
              pagamentos acordados.
              <br />
              <br />
              Todo o código e demais entregas produzidas são protegidos por
              direitos autorais. O cliente recebe uma licença de uso conforme
              definido em contrato, sendo proibida a reprodução ou
              redistribuição sem autorização da Somnium. Informações
              confidenciais trocadas durante o projeto devem ser mantidas em
              sigilo por ambas as partes.
              <br />
              <br />
              A Somnium não se responsabiliza por prejuízos causados por mau uso
              do software, falhas externas (como problemas de internet ou
              servidores de terceiros), ou qualquer uso não autorizado da
              solução entregue.
              <br />
              <br />
              O contrato pode ser encerrado a qualquer momento por qualquer das
              partes mediante aviso prévio, e os serviços prestados até a data
              deverão ser pagos proporcionalmente.
              <br />
              <br />
              Estes termos podem ser atualizados a qualquer momento. Ao
              continuar utilizando nossos serviços, você concorda com eventuais
              alterações.
              <br />
              <br />
              Em caso de dúvidas, entre em contato pelo e-mail{" "}
              <strong>somniumorganizacional@gmail.com</strong>.
            </p>
          </Modal>
          <Modal
            trigger={
              <DialogTrigger asChild>
                <span className="hover:text-white transition-all duration-200 cursor-pointer">
                  <Text size="1rem">TERMOS E CONDIÇÕES</Text>
                </span>
              </DialogTrigger>
            }
            title="POLÍTICA DE PRIVACIDADE"
            description="Descrição breve sobre a Somnium"
          >
            <p className="text-sm text-muted-foreground">
              A Somnium respeita sua privacidade e está comprometida com a
              proteção dos seus dados pessoais coletados durante o uso de nossos
              serviços e plataformas.
              <br />
              <br />
              As informações fornecidas por você, como nome, e-mail, telefone e
              demais dados de contato, são utilizadas exclusivamente para fins
              de comunicação, execução dos serviços contratados, e melhoria
              contínua de nossos produtos e atendimentos.
              <br />
              <br />
              Garantimos que seus dados não serão compartilhados, vendidos ou
              divulgados a terceiros sem seu consentimento, exceto em casos
              previstos por lei ou por ordem judicial. Aplicamos medidas
              técnicas e administrativas adequadas para proteger essas
              informações contra acessos não autorizados, perda ou uso indevido.
              <br />
              <br />
              Também coletamos automaticamente alguns dados de navegação, como
              endereço IP, tipo de navegador e tempo de acesso, com o objetivo
              de entender o comportamento do usuário e aprimorar nossos
              serviços. Esses dados são tratados de forma agregada e anônima.
              <br />
              <br />
              Você pode, a qualquer momento, solicitar a atualização, correção
              ou exclusão dos seus dados pessoais armazenados por nós, entrando
              em contato pelo e-mail{" "}
              <strong>somniumorganizacional@gmail.com</strong>.
              <br />
              <br />
              O uso contínuo dos nossos serviços representa sua concordância com
              esta Política de Privacidade. A Somnium reserva-se o direito de
              atualizá-la periodicamente, sendo de responsabilidade do usuário
              consultá-la com frequência.
              <br />
              <br />
              Esta política é regida pelas leis brasileiras.
            </p>
          </Modal>
        </div>
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
