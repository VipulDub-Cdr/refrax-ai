"use client"
import { signIn } from "next-auth/react"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CircleUser } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function SignInPage() {

    const router = useRouter();

    return (
        <div className="h-[100vh] w-[100vw] flex justify-center items-center bg-radial-[at_50%_50%] from-neutral-800 to-neutral-800">
            {/* <div
  className="absolute inset-0 z-0 pointer-events-none"
  style={{
    backgroundImage: `
      repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px),
      repeating-linear-gradient(45deg, rgba(0,128,255,0.09) 0, rgba(0,128,255,0.09) 1px, transparent 1px, transparent 20px),
      repeating-linear-gradient(-45deg, rgba(255,0,128,0.10) 0, rgba(255,0,128,0.10) 1px, transparent 1px, transparent 30px),
      repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 80px),
      radial-gradient(circle at 60% 40%, rgba(0,128,255,0.05) 0, transparent 20%)
    `,
    backgroundSize: "80px 80px, 40px 40px, 60px 60px, 80px 80px, 100% 100%",
    backgroundPosition: "0 0, 0 0, 0 0, 40px 40px, center"
  }}
/> */}

            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "radial-gradient(ellipse 50% 100% at 10% 0%, rgba(226, 232, 240, 0.15), transparent 65%), #000000",
                }}
            />

            {/* <div
                className="absolute inset-0 z-0"
                style={{
                    background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
                }}
            /> */}

            <div className="my-5 w-[85%] h-100 md:h-[60%] md:w-[27%] px-2 flex flex-col justify-center items-center gap-3 backdrop-blur-sm bg-white/5 rounded-xl ">
                <div className="w-full border-0 border-white text-semibold text-neutral-200 mt-1 text-[2.2rem]/10 font-medium text-center px-6">Refrax AI</div>
                <div className=" text-neutral-400 text-[0.9rem]/4 px-6 text-center">To use Refrax AI you must log into an existing account or create one using one of the options below.</div>

                <div className="w-full px-4 flex flex-col justify-center items-center gap-3">
                    <button onClick={() => {
                        signIn("google");
                    }} className="w-full px-1 flex flex-row justify-between items-center gap-4 mt-2 py-1 text-xl font-medium text-neutral-300 bg-neutral-900 rounded-full hover:cursor-pointer hover:bg-black/60 hover:text-white shadow-lg/20 transition-all delay-50 duration-300 ring-2 ring-neutral-800 inset-shadow-2xs inset-shadow-neutral-700 shadow-lg shadow-black" type="button">
                        <div className="flex justify-center items-center gap-0">
                            <img className="w-9 h-9 rounded-full" src="https://img.icons8.com/?size=100&id=baFbRhSQHebV&format=png&color=000000" alt="" />
                            <div>oogle</div>
                        </div>
                        <ArrowRight className="bg-neutral-600 stroke-black rounded-full h-8 w-8"/>
                    </button>
                    <button onClick={() => {
                        router.push("/guest")
                    }} className="w-full px-1 flex flex-row justify-between items-center gap-4 mt-2 py-1 text-xl font-medium text-neutral-300 bg-neutral-900 rounded-full hover:cursor-pointer hover:bg-black/60 hover:text-white shadow-lg/20 transition-all delay-50 duration-300 ring-2 ring-neutral-800 inset-shadow-2xs inset-shadow-neutral-700 shadow-lg shadow-black" type="button">
                        <div className="flex justify-center items-center gap-2">
                            <img className="w-9 h-9 rounded-full" src="https://img.icons8.com/?size=100&id=xXjlE05o3dcg&format=png&color=000000" alt="" />
                            <div>Guest</div>
                        </div>
                        <ArrowRight className="bg-neutral-600 stroke-black rounded-full h-8 w-8"/>
                    </button>
                    <button onClick={() => {
                        signIn("github");
                    }} className="w-full px-1 flex flex-row justify-between items-center gap-4 mt-2 py-1 text-xl font-medium text-neutral-300 bg-neutral-900 rounded-full hover:cursor-pointer hover:bg-black/60 hover:text-white shadow-lg/20 transition-all delay-50 duration-300 ring-2 ring-neutral-800 inset-shadow-2xs inset-shadow-neutral-700 shadow-lg shadow-black" type="button">
                        <div className="flex justify-center items-center gap-2">
                            <img className="w-9 h-9 rounded-full" src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000" alt="" />
                            <div>Github</div>
                        </div>
                        <ArrowRight className="bg-neutral-600 stroke-black rounded-full h-8 w-8"/>
                    </button>

                   
                </div>

                <div className=" text-neutral-400 text-[0.9rem]/4 px-10">By signing in, you accept the <span className="underline">Terms of Service</span> and acknowledge our <span className="underline">Privacy Policy</span>.</div>

                {/* <button onClick={() => {
                    signIn("google");
                }} className="flex flex-row justify-center items-center gap-4 px-[25%] py-1 text-xl font-medium text-black bg-neutral-300 rounded-2xl hover:cursor-pointer hover:bg-gray-200 shadow-lg/20 transition-all delay-50 duration-300  hover:-translate-y-1" type="button">
                    <img className="h-10 w-10 " src="https://img.icons8.com/?size=100&id=JvOSspDsPpwP&format=png&color=000000" alt="" />
                    <div>Google</div>
                </button> */}
                {/* <button className="text-white mb-2 hover:cursor-pointer hover:text-neutral-300">Login as Guest (coming soon)</button> */}
            </div>
        </div>
    )
}