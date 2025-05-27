
import PropTypes from 'prop-types';
import styles from "./Text.module.css"

type TextProps = {
    children?: React.ReactNode;
    color?: string;
    size?: string;
    isGradient?: boolean; 
    height?: string;
    wordSpacing?: string;
};

function Text({ children, color, size, isGradient, height = "light", wordSpacing }: TextProps) {

    return (
        <div style={{color: color, fontSize: size, fontWeight: height, wordSpacing: wordSpacing}} className={isGradient ? "text-gradient txt" : "txt"}>
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