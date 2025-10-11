"use client"
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import RotatingText from './RotatingText'
import SampleDashboard from "./sample";
import DarkVeil from "./DarkVeil";
import { HexagonBackground } from "./animate-ui/components/backgrounds/hexagon";
import gsap from "gsap";
import { cn } from '@/lib/utils';

export default function Firstpage() {

    const videoRef = useRef<HTMLVideoElement | null>(null);
    const router = useRouter();

    // useEffect(() => {
    //     if (videoRef.current) {
    //         videoRef.current.playbackRate = 2.5;
    //     }
    // }, []);

    useEffect(() => {
        gsap.from(".image", {
            x: -100,
            delay: 0,
            duration: 1,
            stagger: 0.2,
        })

        gsap.from(".heroText", {
            y: 60,
            opacity: 0,
            duration: 1,
            delay: 0,
            stagger: 0.3,
        })

    }, [])


    return (
        <div className="min-full w-full bg-white dark:bg-black relative flex flex-col pb-20 select-none">

            <div className="w-full h-full max-w-screen flex flex-col md:flex-col justify-center items-center pt-20 md:pt-30 md:px-[12%] px-2 border-0 border-white">

                <div className="w-full md:w-[90%] flex flex-col justify-center items-start md:items-center gap-2">



                    <div className="heroText relative border-2 border-[#2c4a9d] dark:border-neutral-600/40 rounded-3xl z-10 w-76 flex flex-row items-center justify-start inset-shadow-sm inset-shadow-white/10 backdrop-blur-lg overflow-hidden">
                        <div className="w-10 h-full absolute bg-white/10 rotate-x-10 -left-10"></div>
                        <div className="m-1 px-1 bg-black dark:bg-black/40 dark:backdrop-blur-2xl rounded-3xl text-neutral-200 text-sm">{`What's new?`}</div>
                        <div className="text-blue-900 dark:text-white text-sm">Introducing Knowledge mode</div>
                    </div>

                    <div className="heroText z-10 w-full text-[2.5rem]/10 md:text-[4rem]/14 text-black dark:text-white md:text-center font-semibold">
                        <span className="w-full border-0 border-white bg-gradient-to-r from-neutral-200 to-neutral-300 bg-clip-text text-transparent">
                            Intelligent Code Formatter That Mirrors Your Personal Style
                        </span>
                    </div>
                    <div className="heroText z-10 w-full md:w-[70%] text-[1.1rem]/6 text-neutral-400 md:text-center">Refrax AI intelligently reformats your code to match your unique coding style, preserving your logic and personal programming patterns.</div>
                </div>

                <div className="heroText w-full md:w-80 z-30 h-full flex flex-col md:flex-row justify-center items-center gap-2 mt-10 md:mt-[3%] mb-[7%]">

                    <div className="z-10 p-2 w-full dark:bg-white rounded-sm text-white dark:text-black text-[0.8rem] font-semibold border-2 border-white text-center cursor-pointer dark:hover:bg-black dark:hover:text-white transition delay-100 duration-200 select-none origin-bottom" onClick={() => { router.push("/signin") }}>Get Started</div>
                    <div className="z-10 p-2 w-full rounded-sm dark:border-white text-black dark:text-white border-2 border-black text-[0.8rem] text-center font-semibold select-none">
                        <a href="https://github.com/VipulDub-Cdr/refrax-ai" className="flex flex-row gap-2 items-center justify-center"> <GitHubLogoIcon className="h-4 w-4" /><div>Github</div></a>
                    </div>
                </div>

            </div>


            <div className="relative w-full h-full border-0 border-white overflow-hidden flex">
                <div id="demo" className='relative h-full w-full z-10 border-0 border-white flex justify-center items-center my-8 p-2 md:p-0'>
                    <video ref={videoRef} autoPlay loop muted playsInline className="h-[50vh] md:h-full md:w-[75%] w-full rounded-lg border-0 border-neutral-900 ring-8 md:ring-12 md:ring-[#182332]/50 ring-[#182332]/50 object-cover brightness-70 grayscale-50">
                        <source src="/demoVideo3.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="absolute w-full h-full brightness-60 hidden md:flex">
                    <Image width={1000} height={1000} src={`/dashboard1.png`} alt="dashboard" className="image absolute right-[60vw] h-[50vh] md:h-[82vh] md:w-[85%] w-full rounded-lg border-0 border-neutral-900 ring-8 md:ring-12 md:ring-zinc-700 ring-[#182332]/50 object-cover rotate-x-30 -rotate-y-30" />
                    <Image width={1000} height={1000} src={`/dashboard0.png`} alt="dashboard" className="image absolute right-[40vw] h-[50vh] md:h-[82vh] md:w-[85%] w-full rounded-lg border-0 border-neutral-900 ring-8 md:ring-12 md:ring-zinc-700 ring-[#182332]/50 object-cover rotate-x-30 -rotate-y-30" />
                    <Image width={1000} height={1000} src={`/dashboard1.png`} alt="dashboard" className="image absolute right-[20vw] h-[50vh] md:h-[82vh] md:w-[85%] w-full rounded-lg border-0 border-neutral-900 ring-8 md:ring-12 md:ring-zinc-700 ring-[#182332]/50 object-cover rotate-x-30 -rotate-y-30" />
                    <Image width={1000} height={1000} src={`/dashboard2.png`} alt="dashboard" className="image absolute left-[20vw] h-[50vh] md:h-[82vh] md:w-[85%] w-full rounded-lg border-0 border-neutral-900 ring-8 md:ring-12 md:ring-zinc-700 ring-[#182332]/50 object-cover rotate-x-30 -rotate-y-30" />
                    <Image width={1000} height={1000} src={`/dashboard3.png`} alt="dashboard" className="image absolute left-[40vw] h-[50vh] md:h-[82vh] md:w-[85%] w-full rounded-lg border-0 border-neutral-900 ring-8 md:ring-12 md:ring-zinc-700 ring-[#182332]/50 object-cover rotate-x-30 -rotate-y-30" />
                    <Image width={1000} height={1000} src={`/dashboard0.png`} alt="dashboard" className="image absolute left-[60vw] h-[50vh] md:h-[82vh] md:w-[85%] w-full rounded-lg border-0 border-neutral-900 ring-8 md:ring-12 md:ring-zinc-700 ring-[#182332]/50 object-cover rotate-x-30 -rotate-y-30" />
                </div>
            </div>



            {/* <div className="relative w-full h-full border-0 border-white flex justify-center items-center rounded-lg overflow-hidden">
                <SampleDashboard />
            </div> */}

        </div>
    )
}