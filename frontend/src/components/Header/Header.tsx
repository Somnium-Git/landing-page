"use client";

// import styles from "./Header.module.css";
import { useRouter, usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { DialogTrigger } from "@radix-ui/react-dialog";
import Text from "../Text/Text";
import Modal from "../Modal/Modal";
// import Link from "next/link";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const lineRef = useRef<HTMLDivElement>(null);

  const [currentScreen, setCurrentScreen] = useState("home");
  const [position, setPosition] = useState(0);
  const [linePosition, setLinePosition] = useState(0);
  const [width, setWidth] = useState(40);

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
    if (pathname !== "/") {
      router.push(`/#${screen}`);
      return;
    }

    const section = document.getElementById(screen);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } 

    // Atualize a linha e o destaque normalmente:
    if (screen === "home") {
      if (homeRef.current) {
        setPosition(Math.round(homeRef.current.getBoundingClientRect().x));
        setWidth(Math.round(homeRef.current.clientWidth));
      }
    } else if (screen === "about") {
      if (aboutRef.current) {
        setPosition(Math.round(aboutRef.current.getBoundingClientRect().x));
        setWidth(Math.round(aboutRef.current.clientWidth));
      }
    } else if (screen === "projects") {
      if (projectsRef.current) {
        setPosition(Math.round(projectsRef.current.getBoundingClientRect().x));
        setWidth(Math.round(projectsRef.current.clientWidth));
      }
    } else if (screen === "partners") {
      if (partnersRef.current) {
        setPosition(Math.round(partnersRef.current.getBoundingClientRect().x));
        setWidth(Math.round(partnersRef.current.clientWidth));
      }
    } else if (screen === "contact") {
      if (contactRef.current) {
        setPosition(Math.round(contactRef.current.getBoundingClientRect().x));
        setWidth(Math.round(contactRef.current.clientWidth));
      }
    }

    setCurrentScreen(screen);
  };

  // const changePosition = (screen: string) => {
  //   setPosition(position);
  // }

  return (
    <header className="z-50 fixed text-white w-full h-[12dvh] flex justify-between items-center p-[2dvw]">
      <div
        ref={homeRef}
        className="font-bold cursor-pointer flex"
        onClick={() => {
          changeScreen("home");
        }}
      >
        <Text color="#FFFFFF" size="1.5rem">
          Som
        </Text>
        <Text isGradient={true} size="1.5rem">
          nium
        </Text>
      </div>

      <section className="hidden flex-col font-bold md:flex md:rounded-4xl md:px-8 md:py-4 md:shadow-lg md:backdrop-blur-xl">
        <section className="flex gap-[3dvw]">
          <div
            ref={homeRef}
            className={
              currentScreen === "home"
                ? "cursor-pointer translate-y-[-5px] transition-all duration-200"
                : "cursor-pointer translate-y-[0px] transition-all duration-200"
            }
            onClick={() => {
              changeScreen("home");
            }}
          >
            <Text
              color={currentScreen === "home" ? "#FFFFFF" : "#A8AFC1"}
              size="1rem"
            >
              Início
            </Text>
          </div>
          <div
            ref={aboutRef}
            className={
              currentScreen === "about"
                ? "cursor-pointer translate-y-[-5px] transition-all duration-200"
                : "cursor-pointer translate-y-[0px] transition-all duration-200"
            }
            onClick={() => {
              changeScreen("about");
            }}
          >
            <Text
              color={currentScreen === "about" ? "#FFFFFF" : "#A8AFC1"}
              size="1rem"
            >
              Sobre
            </Text>
          </div>
          <div
            ref={projectsRef}
            className={
              currentScreen === "projects"
                ? "cursor-pointer translate-y-[-5px] transition-all duration-200"
                : "cursor-pointer translate-y-[0px] transition-all duration-200"
            }
            onClick={() => {
              changeScreen("projects");
            }}
          >
            <Text
              color={currentScreen === "projects" ? "#FFFFFF" : "#A8AFC1"}
              size="1rem"
            >
              Projetos
            </Text>
          </div>
          <div
            ref={partnersRef}
            className={
              currentScreen === "partners"
                ? "cursor-pointer translate-y-[-5px] transition-all duration-200"
                : "cursor-pointer translate-y-[0px] transition-all duration-200"
            }
            onClick={() => {
              changeScreen("partners");
            }}
          >
            <Text
              color={currentScreen === "partners" ? "#FFFFFF" : "#A8AFC1"}
              size="1rem"
            >
              Parceiros
            </Text>
          </div>
          <div
            ref={contactRef}
            className={
              currentScreen === "contact"
                ? "cursor-pointer translate-y-[-5px] transition-all duration-200"
                : "cursor-pointer translate-y-[0px] transition-all duration-200"
            }
            onClick={() => {
              changeScreen("contact");
            }}
          >
            <Text
              color={currentScreen === "contact" ? "#FFFFFF" : "#A8AFC1"}
              size="1rem"
            >
              Contato
            </Text>
          </div>
        </section>
        <div
          ref={lineRef}
          style={{
            transform: `${
              currentScreen != "home"
                ? `translateX(${position - linePosition}px)`
                : ""
            }`,
            width: `${width}px`,
          }}
          className={
            "transition-all duration-200 ease-in-out bg-[#C77DFF] w-[40px] h-[2px]"
          }
        ></div>
      </section>

      <Modal
        trigger={
          <DialogTrigger asChild>
            <div
              className="
                w-[50px] h-[50px] rounded-full bg-[rgba(60,9,108,0.2)]
                flex justify-center items-center cursor-pointer font-medium text-xl border-1 border-[#737373]
                hover:bg-[rgba(60,9,108,1)] hover:border-[#C77DFF] transition-all duration-200"
            >
              ?
            </div>
          </DialogTrigger>
        }
        title="Sobre a Somnium"
        description="Descrição breve sobre a Somnium"
      >
        <p className="text-justify text-[#f6f6f6] text-sm text-muted-foreground">
          A Somnium é uma empresa desenvolvedora de software que se dedica a
          criar soluções inovadoras e personalizadas para atender às
          necessidades dos nossos clientes. Nossa equipe é composta por
          profissionais apaixonados por tecnologia e comprometidos em entregar
          produtos de alta qualidade. Trabalhamos com as mais recentes
          tecnologias e metodologias ágeis para garantir eficiência e agilidade
          em nossos projetos. Na Somnium, acreditamos que a colaboração e a
          comunicação são fundamentais para o sucesso, por isso mantemos um
          diálogo aberto com nossos clientes durante todo o processo de
          desenvolvimento.
        </p>
      </Modal>
    </header>
  );
}
