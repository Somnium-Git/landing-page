'use client'

import { Children, useState } from "react";

type ButtonProps = {
    styleCommon?: object;
    styleHover?: object;
    click?: () => void;
    children?: React.ReactNode;
};

//              estilo comum, estilo com hover, função 
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
    

    const styleCssCommon = styleCommon;
    const styleCssHover = styleHover;
    
 
    
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