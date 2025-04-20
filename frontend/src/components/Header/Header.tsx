'use client'

import styles from "./Header.module.css";
import { useRef, useState, useEffect } from "react";
 
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
    className="text-white font-KantumruyPro text-2xl font-bold w-full h-[12dvh] flex justify-between items-center p-[2dvw]"
    >
      <div className="cursor-pointer">Som<span className="text-[#C77DFF]">nium</span></div>
      <section className="flex flex-col text-base ">
        <section className="flex gap-[3dvw] text-base">
          <div ref={homeRef} className={currentScreen === 'home' ? styles.on : styles.off} onClick={() => {changeScreen("home")}}>Inicio</div>
          <div ref={aboutRef} className={currentScreen === 'about' ? styles.on : styles.off}  onClick={() => {changeScreen("about")}}>Sobre</div>
          <div ref={projectsRef} className={currentScreen === 'projects' ? styles.on : styles.off} onClick={() => {changeScreen("projects")}}>Projetos</div>
          <div ref={partnersRef} className={currentScreen === 'partners' ? styles.on : styles.off} onClick={() => {changeScreen("partners")}}>Parceiros</div>
          <div ref={contactRef} className={currentScreen === 'contact' ? styles.on : styles.off} onClick={() => {changeScreen("contact")}}>Contato</div>
        </section>
        <div ref={lineRef} style={{ transform: `${currentScreen != 'home' ? `translateX(${position - linePosition}px)` : ''}`, width: `${width}px` }} className={`${styles.line} bg-[#C77DFF] w-[40px] h-[2px]`}></div>
      </section>
      <div
      className="w-[50px] h-[50px] rounded-full bg-[rgba(60,9,108,0.2)] flex justify-center items-center cursor-pointer font-medium text-xl border-1 border-[#737373]"
      >
        ?
      </div>
    </header>
  )
}