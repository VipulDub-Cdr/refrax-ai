"use client"
import { signIn } from "next-auth/react"
import Image from "next/image";

export default function SignInPage() {
    return (
        <div className="h-[100vh] w-[100vw] flex justify-center items-center bg-[#0A0A0A]">
            <div className="my-5 w-[85%] h-[35%] md:h-[35%] md:w-[25%] flex flex-col justify-center items-center gap-5 border-2 border-neutral-700 rounded-xl bg-neutral-900">
                <div className="text-lg text-semibold text-white my-1">Login / Register</div>

                <button onClick={() => {
                    signIn("github");
                }} className="flex flex-row justify-center items-center gap-4 px-[25%] py-1 text-xl font-medium text-black bg-neutral-300 rounded-2xl hover:cursor-pointer hover:bg-gray-200 shadow-lg/20 transition-all delay-50 duration-300  hover:-translate-y-1" type="button">
                    <Image width={1000} height={1000} className="h-10 w-10 " src="/githubImage.png" alt="" />
                    <div>Github</div>
                </button>

                {/* <button onClick={() => {
                    signIn("google");
                }} className="flex flex-row justify-center items-center gap-4 px-[25%] py-1 text-xl font-medium text-black bg-neutral-300 rounded-2xl hover:cursor-pointer hover:bg-gray-200 shadow-lg/20 transition-all delay-50 duration-300  hover:-translate-y-1" type="button">
                    <img className="h-10 w-10 " src="https://img.icons8.com/?size=100&id=JvOSspDsPpwP&format=png&color=000000" alt="" />
                    <div>Google</div>
                </button> */}
                <button className="text-white mb-2 hover:cursor-pointer hover:text-neutral-300">Login as Guest (coming soon)</button>
            </div>
        </div>
    )
}