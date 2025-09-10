import Text from "../Text/Text";
import Image from "next/image";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import Link from "next/link";

type CardTeamProps = {
  name?: string,
  role?: string,
  githubLink?: string,
  instagramLink?: string,
  linkedinLink?: string,
  image?: string,
};

export default function CardTeam({
  name = "", 
  role = "", 
  githubLink = "", 
  instagramLink = "", 
  linkedinLink = "",
  image = "",
}: CardTeamProps ) {
  return (
    <div className="w-[300px] h-[450px] flex flex-col justify-between gap-8 p-4 rounded-2xl border-t-2 border-[#240046] bg-gradient-to-b from-[#050013] to-[#0C0420] outline-4 outline-[#040013]">
      <Image
        src={image}
        alt={`Foto de ${name}`}
        width={300}
        height={250}
        className="w-full h-[250px] object-cover rounded-2xl"
      />

      <div className="flex items-center flex-col">
        <Text size="1.25em" height="bold">{name}</Text>
        <Text size="1.25em" height="bold" color="#475579">{role}</Text>
        <div className="flex items-center justify-center gap-4 mt-6">
          {
            githubLink ? 
            ( <Link href={`${githubLink}`} target="_blank" className="text-[#C77DFF] hover:text-white text-2xl transition-all duration-200"><FaGithub /></Link> )
            :
            ( <></> )
          }
          {
            instagramLink ?
            ( <Link href={`${instagramLink}`} target="_blank" className="text-[#C77DFF] hover:text-white text-3xl transition-all duration-200"><AiFillInstagram /></Link> )
            :
            ( <></> )
          }
          {
            linkedinLink ?
            ( <Link href={`${linkedinLink}`} target="_blank" className="text-[#C77DFF] hover:text-white text-2xl transition-all duration-200"><FaLinkedin /></Link> )
            :
            ( <></> )
          }
        </div>
      </div>
    </div>
  );
}