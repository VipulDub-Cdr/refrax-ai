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
       
       <div className="w-[80%] lg:w-[37%] text-neutral-700/90 text-xl font-medium tracking-tight text-center">Built with</div>

        <div className="bg-[#F17144] text-white w-full h-10 italic font-light text-3xl border-2 border-stone-100 flex flex-row justify-center items-center mx-10 ">
            <Marquee direction="right" speed={60}>
                <div className="text-2xl px-17">Next.js</div>
                <div className="text-2xl px-17">TypeScript</div>
                <div className="text-2xl px-17">MongoDB</div>
                <div className="text-2xl px-17">Gemini</div>
                <div className="text-2xl px-17">OAuth 2.0</div>
                <div className="text-2xl px-17">Vercel</div>
                <div className="text-2xl px-17">image8</div>
            </Marquee>
        </div>
        <div className=" w-full h-3 font-light italic text-3xl flex flex-row justify-center items-center mx-10">
            <Marquee direction="left" speed={70} >
                <div className="text-2xl px-17">ReFrax AI build Code that looks and feels exactly like you wrote it!</div>
                <div className="text-2xl px-17">Keep your logic intact, your style consistent — ReFrax AI reshapes your code effortlessly!</div>
                {/* <div className="text-2xl px-17">S3 Bucket</div> */}
                {/* <div className="text-2xl px-17">AWS SDK</div> */}
            </Marquee>
        </div>
        <div className="bg-[#F17144] w-full h-10 text-white italic font-light text-3xl border-2 border-stone-100 flex flex-row justify-center items-center mx-10 ">
            <Marquee direction="right" speed={70}>
                <div className="text-2xl px-17">TypeScript</div>
                <div className="text-2xl px-17">Next.js</div>
                <div className="text-2xl px-17">Gemini</div>
                <div className="text-2xl px-17">MongoDB</div>
                <div className="text-2xl px-17">Vercel</div>
                <div className="text-2xl px-17">OAuth 2.0</div>
                <div className="text-2xl px-17">image8</div>
            </Marquee>
        </div>

    </div>
}