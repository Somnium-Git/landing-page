'use client'

import { Children, useEffect, useState } from "react";

type ButtonProps = {
    styleCommon?: object;
    styleHover?: object;
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
    click = () => console.log('mouseover'),
    children
}: ButtonProps) {

    
    const [styleCssCommon, setStyleCssCommon] = useState(styleCommon);
    const [styleCssHover, setStyleCssHover] = useState(styleHover);
    
    function mesclarObjetos(obj1, obj2) {
        return { ...obj1, ...obj2 };
    }

    useEffect(() => {
        console.log("Componente foi renderizado!");
        setStyleCssHover(mesclarObjetos(styleCssCommon, styleCssHover))
        
        
        
      }, []);

    
    
    
    
    const [ StyleCss , setStyle] = useState<Object>(styleCssCommon);
    
    
    
    

    const changeStyle = ()=>{
        var a = JSON.stringify(styleCssCommon);
        var b = JSON.stringify(styleCssHover);
        var c = JSON.stringify(StyleCss)

        if(c == a){
            // hover
            setStyle(styleCssHover)
           
            
        }else if(c == b){
            // leave
            setStyle(styleCssCommon)
        
        }else{
            // else
            setStyle(styleCssCommon)
        
        }
        
    }


    return (
        <>
            <button 
                style={StyleCss}
                onMouseEnter={changeStyle}
                onMouseLeave={changeStyle}
                onClick={click}
            >
                {children}
            </button>
        </>
    )
}



export default Button;