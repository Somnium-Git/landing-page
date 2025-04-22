'use client'

import Button from "@/components/Button/Button"
import LightBall from "@/components/LightBall/LightBall"
import Text from "@/components/Text/Text"

import { useState } from "react"	

export default function Home() {
  const [isActive, setIsActive] = useState(false)
  return (
    <div>
      <Button text="Saiba mais" click={() => setIsActive(true)}>
      </Button>
      <LightBall x="40vw" y="-40vh" width="70vw" height="70vw" isActive={isActive}/>
      <LightBall x="-7vw" y="75vh" width="60vw" height="60vw" isActive={isActive}/>
      <LightBall x="-15vw" y="-60vh" width="50vw" height="50vw" isActive={isActive}/>
    </div>
  )
}