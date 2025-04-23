

type LightBlurProps = {
  x: string;
  y: string;
  size: string;
}

function LightBlur( {x = "", y = "", size = ""} : LightBlurProps) {
  return (
    <div 
    className="absolute pointer-events-none bg-[#5A189A] rounded-full blur-[100px] z-[-30]"
    style={{ bottom: y, left: x, width: size, height: size}}
     >
    </div>
  );
}

export default LightBlur;