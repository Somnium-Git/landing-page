
import PropTypes from 'prop-types';
import styles from "./Text.module.css"

type TextProps = {
    text: string;
    color: string;
    size: string;
    isGradient: boolean; 
  };

function Text({ text, color, size, isGradient }: TextProps) {

    return (
        <div style={{color: `${color}`, fontSize: `${size}`}} className={isGradient ? styles.text : ""}>
            {text}
        </div>
    )
    
}

Text.defaultProps = {
    Text: "",
    color: "#fff",
    size: "12px",
    isGradient: false,
}

export default Text;