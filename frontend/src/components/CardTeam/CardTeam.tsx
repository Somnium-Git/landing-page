import Text from "../Text/Text";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import Link from "next/link";

type CardTeamProps = {
  name?: string,
  role?: string,
  githubLink?: string,
  instagramLink?: string,
  linkedinLink?: string,
};

export default function CardTeam({
  name = "", 
  role = "", 
  githubLink = "", 
  instagramLink = "", 
  linkedinLink = ""
}: CardTeamProps ) {
  return (
    <div className="w-[300px] h-[420px] flex flex-col justify-between gap-8 p-4 rounded-2xl bg-gradient-to-b from-[#050013] to-[#0C0420]">
      <div className="w-full h-[250px] rounded-2xl bg-[#0C0420]">
      </div>

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