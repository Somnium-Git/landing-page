'use client'

import LightPulse from "@/components/LightBall/LightPulse/LightPulse";
import Card from "@/components/Card/Card";
import Text from "@/components/Text/Text";
import CardTeam from "@/components/CardTeam/CardTeam";

export default function Equipe() {
  return (
    <div>
      <Card background="transparent" useBar={false}>
        <div className="">
          <Text size="2.5em" height="bold">Nossa equipe</Text>
          <Text size="1.25em" height="light" color="#A8AFC1" wordSpacing="2px">
            Por trás de cada projeto de sucesso, existe <br></br>uma equipe <span className="text-[#C77DFF] font-bold">dedicada</span>, <span className="text-[#C77DFF] font-bold">apaixonada</span> e <span className="text-[#C77DFF] font-bold">comprometida</span>.
          </Text>
        </div>

        <CardTeam 
          name="Thiagolas" 
          role="Algo" 
          githubLink="https://github.com/ethior0" 
          instagramLink="https://react-icons.github.io/react-icons/search/#q=github" 
          linkedinLink="https://github.com/Somnium-Git/landing-page/tree/test"
        >
        </CardTeam>

        <CardTeam 
          name="Thiagolas2"
          role="Algo2"
          githubLink="https://github.com/Somnium-Git/landing-page/tree/test"
        >
        </CardTeam>     
      </Card>

      <section>
        <LightPulse x="28vw" y="60vh" width="45vw" height="45vw"/>
      </section>
    </div>
  );
}