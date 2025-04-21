'use client'

import { useState } from "react";
import PropTypes from 'prop-types';
import Text from "../Text/Text"

type ButtonProps = {
    textConfig: {
        text: string;
        color: string;
        size: string;
        isGradient: boolean; 
      };
    styleCommon: object;
    styleHover: object;
    click: () => void;
  };
  

//              estilo comum, estilo com hover,função 
function Button({textConfig, styleCommon, styleHover, click} : ButtonProps) {
    

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
                <Text text={textConfig.text} color={textConfig.color} size={textConfig.size} isGradient={textConfig.isGradient}/>
            </button>
        </>
    )
}

Button.defaultProps = {
    textConfig: {
        text: "",
        color: "#FFFFFF",
        size: "1rem",
        isGradient: false
      },
    styleCommon: {
        width : "50px",
        height: "100px",
        backgroundColor: "#FFFFFF",
        color: "#000000"
    },
    styleHover: {
        width : "50px",
        height: "100px",
        backgroundColor: "#898b8c",
        color: "#000000"
    },
    click: () => console.log('mouseover')
}


export default Button;