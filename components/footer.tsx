import Link from "next/link"
import Image from "next/image"
import DarkVeil from "./DarkVeil"

export default function Footer() {
    return (<div className="relative h-20 w-[100vw] border-0 border-white text-neutral-200 mt-10 bg-black" >

        <div className="flex flex-row h-full p-2 md:px-[19%] z-20">

            <div className="w-full flex flex-col md:flex-row justify-start items-start gap-3 md:gap-10 m-4 border-0 border-amber-300">
                <Link href="#first-page">
                    <button className="cursor-pointer hover:underline hover:underline-offset-2 text-[1rem] font-semibold">Home</button>
                </Link>
                <Link href="#second-page">
                    <button className="cursor-pointer hover:underline hover:underline-offset-2 text-[1rem] font-semibold">Demo</button>
                </Link>
                <Link href="#third-page">
                    <button className="cursor-pointer hover:underline hover:underline-offset-2 text-[1rem] font-semibold">Impact</button>
                </Link>
                <Link href="#fourth-page">
                    <button className="cursor-pointer hover:underline hover:underline-offset-2 text-[1rem] font-semibold">FAQs</button>
                </Link>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-start items-start md:justify-end md:items-start m-4 gap-4 border-0 border-amber-400">
                <span className="hover:text-neutral-900 mt-1"><span className="font-bold">Contact: </span>vipuldubey041@gmail.com</span>
                {/* <img className="h-10 w-10 cursor-pointer" src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" alt="" /> */}
                <a href="http://www.linkedin.com/in/vipul-dubey-541629256" target="_blank" rel="noopener noreferrer">
                    <Image width={1000} height={1000} className="h-10 w-10 cursor-pointer" src="/linkedin.png" alt="" />
                </a>
            </div>
        </div>
    </div>)
}