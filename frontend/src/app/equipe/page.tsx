'use client'

import LightPulse from "@/components/LightBall/LightPulse/LightPulse";
import Card from "@/components/Card/Card";
import Text from "@/components/Text/Text";
import CardTeam from "@/components/CardTeam/CardTeam";

export default function Equipe() {

  const teamMembers = [
  {
    name: "Anderson Reis",
    role: "Product Manager",
    githubLink: "https://github.com/EuAndersonDev/",
    instagramLink: "https://www.instagram.com/oandersondev",
    linkedinLink: "https://www.linkedin.com/in/anderson-reis-5407311b3/",
    image: "/equipe/anderson reis.jpeg"
  },
  {
    name: "Felipe Daniel",
    role: "QA",
    githubLink: "https://github.com/",
    instagramLink: "https://instagram.com/",
    linkedinLink: "https://linkedin.com/",
    image: "/equipe/felipe daniel.jpeg"
  },
  {
    name: "Gabriel Lima",
    role: "Tech Lead Front-End",
    githubLink: "https://github.com/",
    instagramLink: "https://instagram.com/",
    linkedinLink: "https://linkedin.com/",
    image: "/equipe/gabriel lima.jpeg"
  },
  {
    name: "Gabriel Ortiz",
    role: "Diretor",
    githubLink: "https://github.com/",
    instagramLink: "https://instagram.com/",
    linkedinLink: "https://linkedin.com/",
    image: "/equipe/gabriel ortiz.jpeg"
  },
  {
    name: "Guilherme Custódio",
    role: "Tech Lead Back-End",
    githubLink: "https://github.com/GuilhermeCustodioNieto",
    instagramLink: "https://www.instagram.com/guih_nieto/",
    linkedinLink: "www.linkedin.com/in/guilherme-custodio-nieto",
    image: "/equipe/guilherme custodio.jpeg"
  },
  {
    name: "João Pedro",
    role: "Desenvolvedor Back-End",
    githubLink: "https://github.com/Joao2007Pedro",
    instagramLink: "https://www.instagram.com/_.joao7.__?igsh=NjZ5d2x3Y3JzZTRj",
    linkedinLink: "https://linkedin.com/",
    image: "/equipe/joao pedro.jpeg"
  },
  {
    name: "Lucas Caribé",
    role: "Desenvolvedor Front-End",
    githubLink: "https://github.com/",
    instagramLink: "https://instagram.com/",
    linkedinLink: "https://linkedin.com/",
    image: "/equipe/lucas caribe.jpeg"
  },
  {
    name: "Matheus Vinícius",
    role: "Desenvolvedor Back-End",
    githubLink: "https://github.com/matheusviniciusbrito",
    instagramLink: "https://www.instagram.com/mavinous",
    linkedinLink: "https://www.linkedin.com/in/matheusviniciusbrito/",
    image: "/equipe/matheus vinicius.jpeg"
  },
  {
    name: "Nathan Fioravanti",
    role: "Desenvolvedor Front-End",
    githubLink: "https://github.com/",
    instagramLink: "https://instagram.com/",
    linkedinLink: "https://linkedin.com/",
    image: "/equipe/nathan fioravanti.jpeg"
  },
  {
    name: "Thiago Moreira",
    role: "Desenvolvedor Fullstack",
    githubLink: "https://github.com/ethior0",
    instagramLink: "",
    linkedinLink: "",
    image: "/equipe/thiago moreira.jpeg"
  }
];



  return (
    <div style={{paddingTop: "2rem", marginBottom: "15rem"}}>
      <Card background="transparent" useBar={false} flex="col">
        <div className="" style={{ alignSelf: "flex-start", marginBottom: "2rem"}}>
          <Text size="2.5em" height="bold">Nossa equipe</Text>
          <Text size="1.25em" height="light" color="#A8AFC1" wordSpacing="2px">
            Por trás de cada projeto de sucesso, existe <br></br>uma equipe <span className="text-[#C77DFF] font-bold">dedicada</span>, <span className="text-[#C77DFF] font-bold">apaixonada</span> e <span className="text-[#C77DFF] font-bold">comprometida</span>.
          </Text>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-6 w-full px-4 mx-auto">

          {teamMembers.map((member, index) => (
            <CardTeam 
              key={index}
              name={member.name} 
              role={member.role} 
              githubLink={member.githubLink} 
              instagramLink={member.instagramLink} 
              linkedinLink={member.linkedinLink}
              image={member.image}
            />
          ))}

        </div>
      </Card>

      <section>
        <LightPulse x="28vw" y="60vh" width="45vw" height="45vw"/>
      </section>
    </div>
  );
}