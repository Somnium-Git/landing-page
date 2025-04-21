'use client'

import { Children, useEffect, useState } from "react";

type ButtonProps = {
    styleCommon?: object;
    styleHover?: object;
    classCommon: String;
    classHover: String;
    click?: () => void;
    children?: React.ReactNode;
};


function Button({
    styleCommon = {
        width: "100px",
        height: "30px",
        backgroundColor: "#FFFFFF",
        color: "#000000"
    },
    styleHover = {
        width: "100px",
        height: "30px",
        backgroundColor: "#898b8c",
        color: "#000000"
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
    
    function mesclarObjetos(obj1, obj2) {
        return { ...obj1, ...obj2 };
    }

    useEffect(() => {
        console.log("Componente foi renderizado!");
        setStyleCssHover(mesclarObjetos(styleCssCommon, styleCssHover))
        
        
        
      }, []);

    
    
    
    
    const [ StyleCss , setStyleCss] = useState<Object>(styleCssCommon);
    const [ClassCss, setClassCss] = useState<String>(classCssCommon);
    
    
    
    

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