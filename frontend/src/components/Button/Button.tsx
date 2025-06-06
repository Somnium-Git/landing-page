"use client";

import React, { useRef, useState } from "react";
import Text from "../Text/Text";

type ButtonProps = {
  styleCommon?: React.CSSProperties;
  styleHover?: React.CSSProperties;
  classCommon?: string;
  classHover?: string;
  click?: () => void;
  text?: string;
  // image?: string;
  // typeButton?: string;
  children?: React.ReactNode;
};

const defaultStyleCommon: React.CSSProperties = {
  width: "280px",
  height: "50px",
  backgroundColor: "#333333",
  color: "#FFFFFF",
  fontWeight: "bold",
  letterSpacing: "1px",
  borderRadius: "25px",
  cursor: "pointer",
};

const defaultStyleHover: React.CSSProperties = {
  ...defaultStyleCommon,
  backgroundColor: "#111111",
};

const defaultClassCommon = "button-common";
const defaultClassHover = `${defaultClassCommon} button-hover`;

function Button({
  styleCommon = defaultStyleCommon,
  styleHover = defaultStyleHover,
  classCommon = defaultClassCommon,
  classHover = defaultClassHover,
  click = () => console.log("mouse clicked!"),
  text = "",
  // image = "",
  // typeButton = "button",
  children,
}: ButtonProps) {
  const [styleCss, setStyleCss] = useState(styleCommon);
  const [classCss, setClassCss] = useState(classCommon);
  const [isGradient, setIsGradient] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleHover = () => {
    setStyleCss(styleHover);
    setClassCss(classHover);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setIsGradient(true);
    }, 400);
  };

  const handleUnhover = () => {
    setStyleCss(styleCommon);
    setClassCss(classCommon);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsGradient(false);
    }, 100);
  };

  return (
    <>
      <button
        style={styleCss}
        className={classCss}
        onMouseEnter={handleHover}
        onMouseLeave={handleUnhover}
        onClick={click}
        type="submit"
      >
        <Text size="1.2em" isGradient={isGradient}>
          {text}
        </Text>
        {children}
      </button>
    </>
  );
}

export default Button;
