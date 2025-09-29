import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import RotatingText from './RotatingText'
// import DarkVeil from "./DarkVeil";

export default function Firstpage() {

    const videoRef = useRef<HTMLVideoElement | null>(null);
    const router = useRouter();

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2.5;
        }
    }, []);



    return (
        <div className="min-full w-full bg-white relative flex flex-col pb-20">
            {/* Black Basic Grid Background */}
            <div
                className="absolute inset-0 z-0 hidden dark:flex"
                style={{
                    background: "radial-gradient(ellipse 80% 50% at 30% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
                }}
            />
            {/* <div className="absolute top-0 left-0 w-full h-full z-2">
                <DarkVeil warpAmount={2.4} />
            </div> */}

            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `
                    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                }}
            />

            {/* <div
                className="absolute inset-0 z-0 dark:hidden"
                style={{
                backgroundImage: `
                radial-gradient(circle at 20% 80%, rgba(120,119,198,0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255,255,255,0.5) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(120,119,198,0.1) 0%, transparent 50%)`,
                }}
                /> */}

            <div className="w-full h-full max-w-screen flex flex-col md:flex-row justify-start items-start pt-20 md:pt-30 md:px-[12%] px-2">

                <div className="w-full md:w-[80%] flex flex-col justify-start items-start gap-2">

                    <div className="border-2 border-[#2c4a9d] dark:border-neutral-800/40 rounded-3xl z-10 w-76 flex flex-row items-center justify-start inset-shadow-sm inset-shadow-white/10 backdrop-blur-lg ">
                        <div className="m-1 px-1 bg-black dark:bg-black/40 dark:backdrop-blur-2xl rounded-3xl text-neutral-200 text-sm">{`What's new?`}</div>
                        <div className="text-blue-900 dark:text-white text-sm">Introducing Knowledge mode</div>
                    </div>

                    <div className="z-10 w-full md:w-[80%] text-[3rem]/12 text-black dark:text-white">
                        <span className="border-0 border-white">Intelligent Code Formatter That Mirrors Your </span>
                        <span className="inline-flex">
                            <RotatingText
                                texts={['Personal Style', 'Unique Style']}
                                mainClassName="border-0 border-white bg-white/0 text-white rounded-xl px-0"
                                staggerFrom={"last"}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={3200}
                            />
                        </span>
                    </div>
                    <div className="z-10 w-full md:w-[70%] text-[1.1rem]/6 text-neutral-400  mb-10">Refrax AI intelligently reformats your code to match your unique coding style, preserving your logic and personal programming patterns.</div>
                </div>

                <div className="w-full md:w-50 h-full flex flex-col md:flex-row justify-center items-center gap-2 my-[6%]">
                    <div className="z-10 p-2 w-full dark:bg-white rounded-sm bg-black text-white dark:text-black text-[0.8rem] font-semibold border-2 border-white text-center cursor-pointer hover:bg-black hover:text-white transition delay-100 duration-200 select-none" onClick={() => { router.push("/signin") }}>Get Started</div>
                    <div className="z-10 p-2 w-full rounded-sm dark:border-white text-black dark:text-white border-2 border-black text-[0.8rem] text-center font-semibold select-none">
                        <a href="https://github.com/VipulDub-Cdr/refrax-ai" className="flex flex-row gap-2 items-center justify-center"> <GitHubLogoIcon className="h-4 w-4" /><div>Github</div></a>
                    </div>
                </div>

            </div>

            <div id="demo" className='relative h-full w-full z-10 flex justify-center items-center mt-10 p-6 md:p-0'>
                <video ref={videoRef} autoPlay loop muted playsInline className="h-[50vh] md:h-full md:w-[75%] w-full rounded-lg border-0 border-neutral-900 ring-8 md:ring-12 md:ring-[#182332]/30 ring-[#182332]/50 object-cover brightness-70 grayscale-50">
                    <source src="/demoVideo3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* <Image width={1000} height={1000} src={`/dashboard.png`} alt="dashboard" className="h-[50vh] md:h-[80vh] md:w-[75%] w-full rounded-lg border-2 border-neutral-900 ring-8 md:ring-12 md:ring-[#182332]/30 ring-[#182332]/50 object-cover"/> */}
            </div>

        </div>
    )
}