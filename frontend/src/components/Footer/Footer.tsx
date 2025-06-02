// components/Footer.tsx
import { FaFacebook, FaXTwitter } from 'react-icons/fa6';
import { AiFillInstagram } from "react-icons/ai";

import Text from '../Text/Text';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#09050f] text-gray-300 px-6 md:px-[2dvw] pt-10 pb-6 mt-20 text-sm"> 
      {/* Topo do footer (logo, navegação e redes sociais) */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-10">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <div className="cursor-pointer flex justify-center font-medium md:justify-start"><Text color="#FFFFFF" size="1.5rem">Som</Text><Text isGradient={true} size="1.5rem">nium</Text></div>
          <Text color="#99a1af" size="1rem">Seu sucesso é o nosso sonho!</Text>
        </div>

        <div className="flex items-center justify-center gap-4 mt-6 md:mt-0">
          <a href="#" className="text-[#C77DFF] hover:text-white text-2xl transition-all duration-200"><FaFacebook /></a>
          <a href="#" className="text-[#C77DFF] hover:text-white text-3xl transition-all duration-200"><AiFillInstagram /></a>
          <a href="#" className="text-[#C77DFF] hover:text-white text-2xl transition-all duration-200"><FaXTwitter /></a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <nav className="flex gap-6 flex-wrap justify-center md:justify-start">
          <Link href="/" className="hover:text-white transition-all duration-200">
            <Text size="1rem">Home</Text>
          </Link>
          <Link href="/sobre" className="hover:text-white transition-all duration-200">
            <Text size="1rem">Sobre</Text>
          </Link>
          <Link href="/projetos" className="hover:text-white transition-all duration-200">
            <Text size="1rem">Projetos</Text>
          </Link>
          <Link href="/parceiros" className="hover:text-white transition-all duration-200">
            <Text size="1rem">Parceiros</Text>
          </Link>
          <Link href="/contato" className="hover:text-white transition-all duration-200">
            <Text size="1rem">Contato</Text>
          </Link>
        </nav>
        <div className="flex gap-6 mb-4 md:mb-0">
          <Link href="/termos" className="hover:text-white transition-all duration-200">
            <Text size="1rem">TERMOS E CONDIÇÕES</Text>
          </Link>
          <Link href="/privacidade" className="hover:text-white transition-all duration-200">
            <Text size="1rem">POLÍTICA DE PRIVACIDADE</Text>            
          </Link>
        </div>
      </div>

      {/* Linha divisória roxa */}
      <hr className="border-t border-[#1A0A37] mb-4" />

      {/* Parte inferior com navegação legal e copyright */}
      <div className="flex md:flex-row flex-cow justify-center items-center gap-1">
        <Text color='oklch(71.4% 0.203 305.504)' size='1rem'>Somnium ©2025.</Text>
        <Text>Todos os direitos reservados.</Text>
      </div>
    </footer>
  );
}
