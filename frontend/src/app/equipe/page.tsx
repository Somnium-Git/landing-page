"use client";

import LightPulse from "@/components/LightBall/LightPulse/LightPulse";
import Text from "@/components/Text/Text";
import CardTeam from "@/components/CardTeam/CardTeam";
import LightBlur from "@/components/LightBall/LightBlur/LightBlur";

export default function Equipe() {
  const teamMembers = [
    {
      name: "Anderson Reis",
      role: "Product Manager",
      githubLink: "https://github.com/EuAndersonDev/",
      instagramLink: "https://www.instagram.com/oandersondev",
      linkedinLink: "https://www.linkedin.com/in/anderson-reis-5407311b3/",
      image: "/equipe/anderson reis.jpeg",
    },
    {
      name: "Felipe Daniel",
      role: "QA",
      githubLink: "https://github.com/FelpsBZ",
      instagramLink: "https://www.instagram.com/felps_bz",
      linkedinLink: "",
      image: "/equipe/felipe daniel.jpeg",
    },
    {
      name: "Gabriel Lima",
      role: "Tech Lead Front-End",
      githubLink: "https://github.com/gabriellimao7500",
      instagramLink: "https://www.instagram.com/gabriel_limao7500/",
      linkedinLink: "",
      image: "/equipe/gabriel lima.jpeg",
    },
    {
      name: "Gabriel Ortiz",
      role: "Diretor",
      githubLink: "https://github.com/GMarsura",
      instagramLink: "https://www.instagram.com/gabriel_marsura/",
      linkedinLink: "https://www.linkedin.com/in/gabriel-marsura-4bb6732a9/",
      image: "/equipe/gabriel ortiz.jpeg",
    },
    {
      name: "Guilherme Custódio",
      role: "Tech Lead Back-End",
      githubLink: "https://github.com/GuilhermeCustodioNieto",
      instagramLink: "https://www.instagram.com/guih_nieto/",
      linkedinLink: "https://www.linkedin.com/in/guilherme-custodio-nieto",
      image: "/equipe/guilherme custodio.jpeg",
    },
    {
      name: "João Pedro",
      role: "Dev Back-End",
      githubLink: "https://github.com/Joao2007Pedro",
      instagramLink: "https://www.instagram.com/_.joao7.__?igsh=NjZ5d2x3Y3JzZTRj",
      linkedinLink: "",
      image: "/equipe/joao pedro.jpeg",
    },
    {
      name: "Lucas Caribé",
      role: "Dev Front-End",
      githubLink: "https://github.com/LucasCaribeAraujo",
      instagramLink: "https://www.instagram.com/lucas.caribe_",
      linkedinLink: "",
      image: "/equipe/lucas caribe.jpeg",
    },
    {
      name: "Matheus Vinícius",
      role: "Dev Back-End",
      githubLink: "https://github.com/matheusviniciusbrito",
      instagramLink: "https://www.instagram.com/mavinous",
      linkedinLink: "https://www.linkedin.com/in/matheusviniciusbrito/",
      image: "/equipe/matheus vinicius.jpeg",
    },
    {
      name: "Nathan Fioravanti",
      role: "Dev Front-End",
      githubLink: "https://github.com/Nathan-Fioravanti",
      instagramLink: "https://www.instagram.com/nathanfer1",
      linkedinLink: "",
      image: "/equipe/nathan fioravanti.jpeg",
    },
    {
      name: "Thiago Moreira",
      role: "Dev Fullstack",
      githubLink: "https://github.com/ethior0",
      instagramLink: "",
      linkedinLink: "",
      image: "/equipe/thiago moreira.jpeg",
    },
  ];

  return (
    //container
    <div className="mt-[calc(4dvw+58px)]">
      <section className="relative -z-30">
        <LightBlur x="26.5vw" y="-10vh" size="150px"></LightBlur>
        <LightBlur x="58vw" y="-18vh" size="125px"></LightBlur>
        <LightBlur x="60vw" y="-50vh" size="125px"></LightBlur>
        <LightBlur x="13vw" y="-80vh" size="125px"></LightBlur>
        <LightBlur x="22vw" y="-100vh" size="125px"></LightBlur>

        <LightPulse x="26.5vw" y="-20vh" width="900px" height="900px" />
      </section>

      <div className="flex flex-col items-center justify-center w-full h-full gap-8 p-[2dvw]">
        {/* Titulo e texto*/} 
        <div style={{ marginBottom: "4rem" }} className="text-center">
          <Text size="2.5em" height="bold">
            Nossa equipe
          </Text>
          <Text size="1.25em" height="light" color="#A8AFC1" wordSpacing="2px">
            Por trás de cada projeto de sucesso, existe <br className="hidden sm:block"></br>uma equipe{" "}
            <span className="text-[#C77DFF] font-bold">dedicada</span>,{" "}
            <span className="text-[#C77DFF] font-bold">apaixonada</span> e{" "}
            <span className="text-[#C77DFF] font-bold">comprometida</span>.
          </Text>
        </div>
        {/* Cards da equipe */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 w-full mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="cursor-pointer rounded-xl shadow-md p-1 flex justify-center items-center transition-all duration-300 hover:scale-105"
              style={{ minHeight: 220 }}
            >
              <CardTeam
                name={member.name}
                role={` ${member.role} `}
                githubLink={member.githubLink}
                instagramLink={member.instagramLink}
                linkedinLink={member.linkedinLink}
                image={member.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
