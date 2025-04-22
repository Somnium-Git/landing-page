'use client'

import { Children, useEffect, useState } from "react";

type ButtonProps = {
    styleCommon?: object;
    styleHover?: object;
    classCommon: string;
    classHover: string;
    click?: () => void;
    children?: React.ReactNode;
};


function Button({
    styleCommon = {
        width: "100px",
        height: "30px",
        backgroundColor: "#FFFFFF",
        color: "#000000",
        borderRadius: "4px",
        border: "2px solid #398b8c"
    },
    styleHover = {
        width: "100px",
        height: "30px",
        backgroundColor: "#898b8c",
        color: "#000000",
        borderRadius: "4px",
        border: "2px solid #398b8c"
    },
    classCommon = "",
    classHover = "",
    click = () => console.log('mouseover'),
    children
}: ButtonProps) {

    
    const [styleCssCommon, setStyleCssCommon] = useState(styleCommon);
    const [styleCssHover, setStyleCssHover] = useState(styleHover);
    const [classCssCommon, setClassCssCommon] = useState(classCommon);
    const [classCssHover, setClassCssHover] = useState(classHover);
    
    function mesclarObjetos(obj1: object, obj2: object) {
        return { ...obj1, ...obj2 };
    }

    useEffect(() => {
        console.log("Componente foi renderizado!");
        setStyleCssHover(mesclarObjetos(styleCssCommon, styleCssHover))
      }, []);
    
    const [ StyleCss , setStyleCss] = useState<object>(styleCssCommon);
    const [ClassCss, setClassCss] = useState<string>(classCssCommon);
    
    
    
    

    const hover = ()=>{
        var a = JSON.stringify(styleCssCommon);
        var b = JSON.stringify(styleCssHover);
        var c = JSON.stringify(StyleCss)

        if(c == a){
            // hover
            setStyleCss(styleCssHover)
            setClassCss(classCssHover)

           
            
        }else if(c == b){
            // leave
            setStyleCss(styleCssCommon)
            setClassCss(classCssCommon)
        
        }else{
            // else
            setStyleCss(styleCssCommon)
            setClassCss(classCssCommon)
        }
        
    }


    return (
        <>
            <button 
                style={StyleCss}
                className={ClassCss}
                onMouseEnter={hover}
                onMouseLeave={hover}
                onClick={click}
            >
                {children}
            </button>
        </>
    )
}



export default Button;