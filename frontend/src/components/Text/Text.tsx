
import PropTypes from 'prop-types';
import styles from "./Text.module.css"

type TextProps = {
    children: string;
    color: string;
    size: string;
    isGradient: boolean; 
  };

function Text({ children, color, size, isGradient }: TextProps) {

    return (
        <div style={{color: `${color}`, fontSize: `${size}`}} className={isGradient ? "text-gradient txt" : "txt"}>
            {children}
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