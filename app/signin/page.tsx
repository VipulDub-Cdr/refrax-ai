"use client"
import { signIn } from "next-auth/react"
import Image from "next/image";

export default function SignInPage() {
    return (
        <div className="h-[100vh] w-[100vw] flex justify-center items-center bg-radial-[at_50%_50%] from-neutral-800 to-neutral-800">
            <div className="my-5 w-[85%] h-[35%] md:h-[50%] md:w-[25%] flex flex-col justify-center items-center gap-5 backdrop-blur-sm bg-black/20 rounded-xl">
                <div className="text-semibold text-white my-1 text-[2.2rem]/10 font-semibold text-center">Welcome to the Refrax AI</div>

                <button onClick={() => {
                    signIn("github");
                }} className="flex flex-row justify-center items-center gap-4 px-[25%] py-1 text-xl font-medium text-white bg-neutral-900 rounded-2xl hover:cursor-pointer hover:bg-zinc-800 hover:text-white shadow-lg/20 transition-all delay-50 duration-300 ring-2 ring-neutral-800" type="button">
                    <Image width={1000} height={1000} className="h-10 w-10 rounded-full bg-neutral-800" src="/githubImage.png" alt="" />
                    <div>Github</div>
                </button>

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