"use client"
import { signIn } from "next-auth/react"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CircleUser } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Poppins } from "next/font/google";
import { useState } from "react";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"]
})

{/* <button onClick={() => {
                        signIn("google");
                    }}  */}

// onClick = {() => {
//     router.push("/guest")
// }}

// onClick={() => {
//                         signIn("github");
//                     }} 


{/* <button className="w-full px-1 flex flex-row justify-between items-center gap-4 mt-2 py-1 text-xl font-medium text-neutral-300 bg-neutral-900 rounded-full hover:cursor-pointer hover:bg-black/60 hover:text-white shadow-lg/20 transition-all delay-50 duration-300 ring-2 ring-neutral-800 inset-shadow-2xs inset-shadow-neutral-700 shadow-lg shadow-black" type="button">
                        <div className="flex justify-center items-center gap-0">
                            <img className="w-9 h-9 rounded-full" src="https://img.icons8.com/?size=100&id=baFbRhSQHebV&format=png&color=000000" alt="" />
                            <div>oogle</div>
                        </div>
                        <ArrowRight className="bg-neutral-600 stroke-black rounded-full h-8 w-8" />
                    </button>
                    <button className="w-full px-1 flex flex-row justify-between items-center gap-4 mt-2 py-1 text-xl font-medium text-neutral-300 bg-neutral-900 rounded-full hover:cursor-pointer hover:bg-black/60 hover:text-white shadow-lg/20 transition-all delay-50 duration-300 ring-2 ring-neutral-800 inset-shadow-2xs inset-shadow-neutral-700 shadow-lg shadow-black" type="button">
                        <div className="flex justify-center items-center gap-2">
                            <img className="w-9 h-9 rounded-full" src="https://img.icons8.com/?size=100&id=xXjlE05o3dcg&format=png&color=000000" alt="" />
                            <div>Guest</div>
                        </div>
                        <ArrowRight className="bg-neutral-600 stroke-black rounded-full h-8 w-8" />
                    </button>
                    <button className="w-full px-1 flex flex-row justify-between items-center gap-4 mt-2 py-1 text-xl font-medium text-neutral-300 bg-neutral-900 rounded-full hover:cursor-pointer hover:bg-black/60 hover:text-white shadow-lg/20 transition-all delay-50 duration-300 ring-2 ring-neutral-800 inset-shadow-2xs inset-shadow-neutral-700 shadow-lg shadow-black" type="button">
                        <div className="flex justify-center items-center gap-2">
                            <img className="w-9 h-9 rounded-full" src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000" alt="" />
                            <div>Github</div>
                        </div>
                        <ArrowRight className="bg-neutral-600 stroke-black rounded-full h-8 w-8" />
                    </button> */}

export default function SignInPage() {

    const router = useRouter();

    const [redirect, setRedirect] = useState(false);

    return (
        <div className={`h-[100vh] w-[100vw] max-h-screen max-w-screen flex flex-col md:flex-row justify-start items-center bg-black ${redirect ? "cursor-progress" : ""}`}>

            <div className="w-full md:w-1/2 h-full border-0 border-white p-2 flex justify-center items-center">

                <div className="w-full h-full rounded-xl px-2 md:px-[18%] flex justify-center items-center" style={{
                    background: "radial-gradient(125% 125% at 50% 90%, #0a0a0a 45%, #1e1b4b 100%)",
                }}>

                    <div className="w-full md:px-10 h-full border-0 border-red-300 flex flex-col justify-center items-center gap-2">

                        <div className="relative text-2xl font-semibold text-neutral-300 flex justify-center items-center gap-4">
                            <div>Refrax AI</div>
                        </div>
                        <div className="text-4xl font-semibold text-white pb-2">Get Started with Us</div>
                        <div className="text-lg/5 text-neutral-400 text-center px-4">To access Refrax AI, please log into your existing account or create a new one using one of the options below.</div>
                        <div className="w-full border-0 border-white">
                            
                            <div className="w-full h-40 flex flex-col justify-center items-center mt-2 border-0 border-red-300 gap-[8px] pt-2">

                                    <button onClick={()=>{setRedirect(true); signIn("google")}} className="w-full bg-white/10 backdrop-blur-xl rounded-sm h-full flex justify-center items-center gap-2 px-2 text-white hover:text-black hover:bg-white cursor-pointer transition-colors delay-100 duration-200">
                                            <img className="h-8 w-8" src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" />
                                            <div className="text-[1rem]">Sign in with Google</div>
                                    </button>
                                    <button onClick={()=>{setRedirect(true); signIn("github")}} className="w-full bg-white/10 backdrop-blur-xl rounded-sm h-full flex justify-center items-center gap-2 px-2 text-white hover:text-black hover:bg-white cursor-pointer transition-colors delay-100 duration-200">
                                            <img className="h-8 w-8" src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000" alt="" />
                                            <div className="text-[1rem]">Sign in with Github</div>
                                    </button>
                                    <button onClick={()=>{setRedirect(true);router.push("/guest")}} className="w-full bg-white/10 backdrop-blur-xl rounded-sm h-full flex justify-center items-center gap-2 px-2 text-white hover:text-black hover:bg-white cursor-pointer transition-colors delay-100 duration-200">
                                            <img className="h-8 w-8" src="https://img.icons8.com/?size=100&id=xXjlE05o3dcg&format=png&color=000000" alt="" />
                                            <div className="text-[1rem]">Sign in as a Guest</div>
                                    </button>
                                   
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="w-1/2 h-full border-0 border-yellow-400 hidden md:flex justify-center items-center px-20">
                
                    <div className={`text-white text-[2rem]/10 ${poppins.className}`}>{`“ Refrax AI formats code to match your unique style, preserving logic and personal patterns.
Our mission: make every line of code truly yours. ”`}</div>

            </div>

        </div>
    )
}