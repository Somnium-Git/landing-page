'use client'

import styles from "./Header.module.css";
import { useRef, useState, useEffect } from "react";
import Text from "../Text/Text";
 
export default function Header() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const lineRef = useRef<HTMLDivElement>(null);

  const [currentScreen, setCurrentScreen] = useState("home");
  const [position, setPosition] = useState(0);
  const [linePosition, setLinePosition] = useState(0);
  const [width, setWidth] = useState(40)

  useEffect(() => {
    const updateLinePosition = () => {
      if (lineRef.current) {
        setLinePosition(Math.round(lineRef.current.getBoundingClientRect().x));
      } else {
        requestAnimationFrame(updateLinePosition);
      }
    };
    updateLinePosition();
  }, []);
  
  const changeScreen = async (screen: string) => {
    if(screen === "home") {
      if(homeRef.current) {
        setPosition(Math.round(homeRef.current.getBoundingClientRect().x)); 
        setWidth(Math.round(homeRef.current.clientWidth))
      }
    }else if(screen === "about") {
      if(aboutRef.current) {
        setPosition(Math.round(aboutRef.current.getBoundingClientRect().x));
        setWidth(Math.round(aboutRef.current.clientWidth))
      }
    }else if(screen === "projects") {
      if(projectsRef.current) {
        setPosition(Math.round(projectsRef.current.getBoundingClientRect().x));
        setWidth(Math.round(projectsRef.current.clientWidth))
      }
    }else if(screen === "partners") {
      if(partnersRef.current) {
        setPosition(Math.round(partnersRef.current.getBoundingClientRect().x));
        setWidth(Math.round(partnersRef.current.clientWidth))
      }
    }else if(screen === "contact") {
      if(contactRef.current) {
        setPosition(Math.round(contactRef.current.getBoundingClientRect().x));
        setWidth(Math.round(contactRef.current.clientWidth))
      }
    }

    setCurrentScreen(screen);
  }

  const changePosition = (screen: string) => {
    
    setPosition(position);
  }

  useEffect(() => {
    console.log("position", position + 'px')
    console.log("linePosition", linePosition + 'px')
    console.log("width", width)
  }, [position])

  return (
    <header 
    className="text-white font-KantumruyPro font-bold w-full h-[12dvh] flex justify-between items-center p-[2dvw]"
    >
      <div className="cursor-pointer flex"><Text text="Som" color="#FFFFFF" size="1.5rem"></Text><Text text="nium" isGradient={true} size="1.5rem"></Text></div>
      <section className="flex flex-col">
        <section className="flex gap-[3dvw] ">
          <div ref={homeRef} className={currentScreen === 'home' ? "cursor-pointer translate-y-[-5px] transition-all duration-200" 
            : "cursor-pointer translate-y-[0px] transition-all duration-200"
            } onClick={() => {changeScreen("home")}}>
            <Text text="Inicio" color={currentScreen === "home" ? "#FFFFFF" : "#A8AFC1"} size="1rem"></Text>
          </div>
          <div ref={aboutRef} className={currentScreen === 'about' ? 
            "cursor-pointer translate-y-[-5px] transition-all duration-200" : "cursor-pointer translate-y-[0px] transition-all duration-200"
            }  onClick={() => {changeScreen("about")}}>
            <Text text="Sobre" color={currentScreen === "about" ? "#FFFFFF" : "#A8AFC1"} size="1rem"></Text>
          </div>
          <div ref={projectsRef} className={currentScreen === 'projects' ? 
            "cursor-pointer translate-y-[-5px] transition-all duration-200" : "cursor-pointer translate-y-[0px] transition-all duration-200"
            } onClick={() => {changeScreen("projects")}}>
            <Text text="Projetos" color={currentScreen === "projects" ? "#FFFFFF" : "#A8AFC1"} size="1rem"></Text>
          </div>
          <div ref={partnersRef} className={currentScreen === 'partners' ? 
            "cursor-pointer translate-y-[-5px] transition-all duration-200" : "cursor-pointer translate-y-[0px] transition-all duration-200"
            } onClick={() => {changeScreen("partners")}}>
            <Text text="Parceiros" color={currentScreen === "partners" ? "#FFFFFF" : "#A8AFC1"} size="1rem"></Text>
          </div>
          <div ref={contactRef} className={currentScreen === 'contact' ? 
            "cursor-pointer translate-y-[-5px] transition-all duration-200" : "cursor-pointer translate-y-[0px] transition-all duration-200"
            } onClick={() => {changeScreen("contact")}}>
            <Text text="Contato" color={currentScreen === "contact" ? "#FFFFFF" : "#A8AFC1"} size="1rem"></Text>
          </div>
        </section>
        <div ref={lineRef} 
        style={{ transform: `${currentScreen != 'home' ? `translateX(${position - linePosition}px)` : ''}`, width: `${width}px` }} 
        className={"transition-all duration-200 ease-in-out bg-[#C77DFF] w-[40px] h-[2px]"}
        ></div>
      </section>
      <div
      className="
      w-[50px] h-[50px] rounded-full bg-[rgba(60,9,108,0.2)]
       flex justify-center items-center cursor-pointer font-medium text-xl border-1 border-[#737373]
        hover:bg-[rgba(60,9,108,1)] hover:border-[#C77DFF] transition-all duration-200"
      >
        ?
      </div>
    </header>
  )
}