import Link from "next/link"
import { HoverBorderGradientDemo } from "./heroButton"

export default function Firstpage() {
    return <div className="pt-23 md:pt-35 w-full h-full flex flex-col justify-start items-center gap-5">


        <div className="m-2 w-[90%] lg:w-[60%] text-[2.2rem]/13 md:text-[2.6rem]/11  font-medium tracking-tighter lg:tracking-medium text-wrap text-center text-stone-950">
            Intelligent Code Formatter That Mirrors Your Personal Style
        </div>

        <div className="w-[80%] lg:w-[35%] md:text-[1.1rem] text-neutral-800/90 text-xl font-medium tracking-tight text-center ">Refrax AI intelligently reformats your code to match your unique coding style, preserving your logic and personal programming patterns.</div>

        <Link href="/signin">
        {/* bg-gradient-to-r from-[#b9bfcf] to-[#8396DB] */}
            <HoverBorderGradientDemo/>
        </Link>
       
       

    </div>
}