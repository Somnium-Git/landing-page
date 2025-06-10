import { FaGithub } from "react-icons/fa";

import Text from "@/components/Text/Text";
import Link from "next/link";

type SliderItemProps = {
  children?: React.ReactNode;
  description?: string;
  projectLink?: string;
  repositoryLink?: string;
  ehPaggie?: boolean;
};

export default function SliderItem({ 
  children, 
  description = "", 
  projectLink = "", 
  repositoryLink = "",
}: SliderItemProps) {
  return (
    <div className="w-[380px] h-[520px] flex flex-col justify-between p-8 rounded-2xl bg-gradient-to-b from-[#050013] to-[#0C0420]">
      <div className="text-justify space-y-2">
        {children}
        <Text color="#A8AFC1">
          {
            description ?
            ( description )
            :
            ( "" )
          }
        </Text>
      </div>

      {/* talvez colocar "flex-wrap-reverse" nessa div depois */}
      <div className="flex flex-wrap-reverse items-center justify-center gap-5 md:flex-nowrap md:justify-between">
        {
          projectLink ?
          ( <Link href={`${projectLink}`} target="_blank" className="w-full font-bold text-center px-5 py-2.5 rounded-3xl bg-[#C77DFF] hover:bg-white hover:text-[#C77DFF] transition-all duration-200">Visite o site!</Link> )
          :
          ( <></> )
        }
        {
          repositoryLink ?
          ( <Link href={`${repositoryLink}`} target="_blank" className="text-4xl text-[#C77DFF] hover:text-white transition-all duration-200"><FaGithub /></Link> )
          :
          ( <></> )
        }
      </div>
    </div>
  );
}