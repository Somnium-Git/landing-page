'use client'

import Button from "@/components/Button/Button"
import LightBlur from "@/components/LightBall/LightBlur/LightBlur"
import LightPulse from "@/components/LightBall/LightPulse/LightPulse"
import Text from "@/components/Text/Text"
import Card from "@/components/Card/Card"
import Carousel from "@/components/Carousel/Carousel"
import Contact from "@/components/Contact/Contact"
import AboutUs from "@/components/AboutUs/AboutUs"


import { useState } from "react"	

export default function Home() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div>
      {/* inicio */}
      <Card flex="row" height="85dvh" background="transparent" useBar={false}>
        <section className="flex flex-col h-[40vh] justify-around items-start">
          <div className="flex flex-col leading-12">
            <div><Text size="2.5em" height="bold">Seu sucesso </Text></div>
            <div className="flex flex-row gap-3">
              <Text size="2.5em" height="bold">é nosso</Text>
              <Text size="2.5em" height="bold" isGradient> sonho!</Text>
            </div>
          </div>

          <div className="w-[280px]">
            <Text size="1.25em" height="light" color="#A8AFC1" wordSpacing="2px">Use ferramentas inovadoras e dê uma chance para que seu sonho se torne realidade.</Text>
          </div>

          <Button text="Saiba mais" click={() => setIsActive(true)}>
          </Button>
        </section>
        <div></div>
        <div></div>
      </Card>

      {/* sobre */}
      <AboutUs></AboutUs>

      {/* projetos */}
      <Card flex="col" background="transparent" useBar={false}>
        <div className="flex flex-col items-center text-center">
          <div className="leading-9">
            <Text size="2.5em" height="bold" isGradient>Sonhe</Text>
          </div>
          <Text size="2.5em" height="bold">Acordado Conosco!</Text>
          <div className="mt-4">
            <Text size="1.25em" color="#A8AFC1">Comprometimento total com o seu sonho.</Text>
          </div>
        </div>
      </Card>

      {/* Linha divisória roxa */}
      <div className="w-full h-[2px] bg-[#1A0A37] mx-[2dvw] mb-16"></div>

      <Card height="full" background="transparent" useBar={false}>
        <div className="flex flex-col text-center gap-6">
          <Text size="2.5em" height="bold">Conheça nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AF7EDD] to-[#EFC3A6]">projetos!</span></Text>
          <Text size="1.25em" color="#A8AFC1">Aqui você encontra os projetos que colocam nossas<br></br> ideias em prática, <span className="text-[#C77DFF] font-bold">transformando desafios<br></br> em soluções criativas.</span></Text>
        </div>
      </Card>

      <Carousel></Carousel>

      <section>
        <LightBlur x="25vw" y="50vh" size="150px"></LightBlur>
        <LightBlur x="80vw" y="80vh" size="200px"></LightBlur>
        <LightBlur x="30vw" y="20vh" size="100px"></LightBlur>
        <LightBlur x="6vw" y="50vh" size="200px"></LightBlur>
        <LightBlur x="70vw" y="20vh" size="200px"></LightBlur>
        <LightBlur x="40vw" y="70vh" size="80px"></LightBlur>
        
        <LightPulse x="40vw" y="-40vh" width="70vw" height="70vw" isActive={isActive}/>
        <LightPulse x="-7vw" y="75vh" width="60vw" height="60vw" isActive={isActive}/>
        <LightPulse x="-15vw" y="-60vh" width="50vw" height="50vw" isActive={isActive}/>

        <LightPulse x="25vw" y="-125vh" width="50vw" height="50vw" isActive={isActive}/>
      </section>

      <Contact></Contact>
    </div>
  )
}