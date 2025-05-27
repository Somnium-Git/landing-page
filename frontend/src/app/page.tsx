'use client'

import Button from "@/components/Button/Button"
import LightBlur from "@/components/LightBall/LightBlur/LightBlur"
import LightPulse from "@/components/LightBall/LightPulse/LightPulse"
import Text from "@/components/Text/Text"
import Card from "@/components/Card/Card"

import { useState } from "react"	

export default function Home() {
  const [isActive, setIsActive] = useState(false)
  return (
    <div>
      {/* inicio */}
      <Card flex="row" height="85dvh" background="transparent" useBar={false}>
        <section className="flex flex-col w-[20vw] h-[40vh] justify-around items-start">
          <div className="flex flex-col">
            <div><Text size="2.5em" height="light">Seu sucesso </Text></div>
            <div className="flex flex-row gap-3">
              <Text size="2.5em" height="light">é nosso</Text>
              <Text size="2.5em" height="bold" isGradient> sonho!</Text>
            </div>
          </div>
          <div className="w-[20vw] mt-[-10%]">
            <Text size="1.5em" height="light" color="#A8AFC1" wordSpacing="2px">Use ferramentas inovadoras e dê uma chance para que seu sonho se torne realidade</Text>
          </div>
          <Button text="Saiba mais" click={() => setIsActive(true)}>
          </Button> 
        </section>
        <div></div>
        <div></div>
      </Card>

      {/* sobre */}
      <Card background="#040013" useBar={false}>
      </Card>

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
      </section>
    </div>
  )
}