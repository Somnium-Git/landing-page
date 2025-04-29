// components/Footer.tsx
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#09050f] text-gray-300 px-6 md:px-16 pt-10 pb-6 mt-20 text-sm"> 
      {/* Topo do footer (logo, navegação e redes sociais) */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-10">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-white text-2xl font-bold">
            Som<span className="text-purple-500">nium</span>
          </h2>
          <p className="text-gray-400 mt-1">Seu sucesso é o nosso sonho!</p>
        </div>



        <div className="flex gap-4 mt-6 md:mt-0">
          <a href="#" className="text-purple-400 hover:text-white text-lg"><FaFacebookF /></a>
          <a href="#" className="text-purple-400 hover:text-white text-lg"><FaInstagram /></a>
          <a href="#" className="text-purple-400 hover:text-white text-lg"><FaXTwitter /></a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <nav className="flex gap-6 flex-wrap justify-center md:justify-start">
          <Link href="/" className="hover:text-white font-semibold">Home</Link>
          <Link href="/sobre" className="hover:text-white">Sobre</Link>
          <Link href="/projetos" className="hover:text-white">Projetos</Link>
          <Link href="/parceiros" className="hover:text-white">Parceiros</Link>
          <Link href="/contato" className="hover:text-white">Contato</Link>
        </nav>
        <div className="flex gap-6 mb-4 md:mb-0">
          <Link href="/termos" className="hover:text-white">TERMOS E CONDIÇÕES</Link>
          <Link href="/privacidade" className="hover:text-white">POLÍTICA DE PRIVACIDADE</Link>
        </div>
      </div>

      {/* Linha divisória roxa */}
      <hr className="border-t border-purple-900 mb-4" />

      {/* Parte inferior com navegação legal e copyright */}
      <div className="flex flex-col md:flex-row justify-center items-center text-gray-400 text-xs">
        <p className="text-center text-xs">
          <span className="text-purple-500 font-semibold">Somnium</span> ©2025 - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
