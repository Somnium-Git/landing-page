import { HiArrowSmallRight, HiArrowSmallLeft } from "react-icons/hi2";

export default function Slider({children}: any) {
    return (
        <section className="w-full text-center">
            {children}
            <div className="flex justify-between items-center">
                <div className="cursor-pointer text-4xl text-[#774B99] hover:text-[#C77DFF] transition-all duration-200">
                    <HiArrowSmallLeft />
                </div>
                <div className="cursor-pointer text-4xl text-[#774B99] hover:text-[#C77DFF] transition-all duration-200">
                    <HiArrowSmallRight />
                </div>
            </div>

            <div className="flex flex-row">
                
            </div>
        </section>
    );
}