
type CardProps = {
  width?: string;
  height?: string;
  flex?: string; /* = row | col */
  background?: string; /* = #000000 | rgba(0, 0, 0, 0) | hsl(0 0 0) */
  useBar?: boolean; /* = true | false (barra na lateral) */ 
  children?: React.ReactNode;
};

function Card({
  width = "100dvw",
  height = "90dvh",
  flex = "row",
  background = "#C3BED8",
  useBar = true,
  children
}: CardProps) {
  const flexClass = flex === "col" ? "flex-col" : "flex-row";

  return (
    <div
      className={`flex row justify-between items-center p-[2dvw]`}
      style={{ width, height: height, backgroundColor: background }}
    >
      {
        useBar ? 
        ( <div className="w-[60px] h-full bg-linear-to-tr from-[#3F1460] to-[#190630] rounded-[12px] shadow-[0_4px_10px_rgba(0,0,0,0.50)]"></div> )  
        : 
        ( <></> )
      }
      <div className={`w-full h-full flex ${flexClass} justify-around items-center`}>
        {children}
      </div>
    </div>
  );
}

export default Card;