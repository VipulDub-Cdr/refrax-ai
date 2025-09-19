import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
export default function Firstpage() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const router = useRouter();

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2.25;
        }
    }, []);



    return (
        <div className="min-full w-full bg-white relative flex flex-col pb-20">
            {/* Black Basic Grid Background */}
            <div
            className="absolute inset-0 z-0"
            style={{
            background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
            }}
            />

            <div className="h-[30%] mt-14 px-2 md:px-0 md:mt-0  flex flex-col md:flex-row  justify-start items-start pt-[8%] md:mx-44 gap-2">
                <div className="flex flex-col gap-2">
                    <div className="border-2 border-neutral-800 rounded-3xl z-10 w-[85%] md:w-[34%] flex flex-row items-center justify-start inset-shadow-sm inset-shadow-white/10 backdrop-blur-lg">
                        <div className="m-1 px-1 bg-neutral-800 rounded-3xl text-neutral-200 text-sm">{`What's new?`}</div>
                        <div className="text-white text-sm">Introducing knowledge thingy</div>
                    </div>
                    <div className="z-10 w-full md:w-[80%] text-[3rem]/12 text-white">Intelligent Code Formatter That Mirrors Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-900">Personal Style</span></div>
                    <div className="z-10 w-full md:w-[70%] text-[1.1rem]/6 text-neutral-500  mb-10">Refrax AI intelligently reformats your code to match your unique coding style, preserving your logic and personal programming patterns.</div>
                </div>
                <div className="w-full md:w-[30%] h-full flex flex-col md:flex-row justify-center items-center gap-2 my-[6%]">
                    <div className="z-10 p-2 w-full bg-white rounded-sm text-black text-[0.8rem] font-semibold border-2 border-white text-center cursor-pointer hover:bg-black hover:text-white transition delay-100 duration-200 select-none" onClick={()=>{router.push("/signin")}}>Get Started</div>
                    <div className="z-10 p-2 w-full rounded-sm border-white text-white border-2 border-blacks text-[0.8rem] text-center font-semibold select-none">
                        <a href="https://github.com/VipulDub-Cdr/refrax-ai" className="flex flex-row gap-2 items-center justify-center"> <GitHubLogoIcon className="h-4 w-4"/><div>Github</div></a>
                    </div>
                </div>

            </div>
            <div id="demo" className='h-full w-full z-10 flex justify-center items-center mt-10 p-6 md:p-0'>
                <video ref={videoRef} autoPlay loop muted playsInline className="h-[50vh] md:h-full md:w-[75%] w-full rounded-lg border-2 border-neutral-900 ring-8 md:ring-12 md:ring-[#182332]/30 ring-[#182332]/50 object-cover">
                    <source src="/demoVideo1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

        </div>
    )
}