import Marquee from "react-fast-marquee"
import Link from "next/link"
import { HoverBorderGradientDemo } from "./heroButton"

export default function Firstpage() {
    return <div className="pt-23 md:pt-40 w-full h-full flex flex-col justify-start items-center gap-5">


        <div className="m-2 w-[90%] lg:w-[60%] text-[2.2rem]/13 md:text-[3.2rem]/14 font-medium tracking-tighter lg:tracking-medium text-wrap text-center text-stone-950">
            Intelligent Code Formatter That Mirrors Your Personal Style
        </div>

        <div className="w-[80%] lg:w-[35%] text-neutral-800/90 text-xl font-medium tracking-tight text-center ">Refrax AI intelligently reformats your code to match your unique coding style, preserving your logic and personal programming patterns.</div>

        <Link href="/signin">
        {/* bg-gradient-to-r from-[#b9bfcf] to-[#8396DB] */}
            <HoverBorderGradientDemo/>
        </Link>
       
       

    </div>
}