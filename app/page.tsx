"use client"
import Image from "next/image";
import SecondPage from "@/components/secondpage";
import FirstPage from "@/components/firstPage";
import Link from "next/link";
import { useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Thirdpage from '@/components/thirdpage';
import Fourthpage from '@/components/fourthpage';
import Footer from "@/components/footer";

export default function Home() {

  return (
    <>
      {/* my-6 lg:my-9  md:px-50  px-3 */}
      <div className='fixed w-full top-0 right-0 z-1000 py-2 md:py-2 px-2'>
        <Navbar/>
      </div>

      {/* bg-[url('/bgimage.png')] */}
      <div id="first-page" className="h-[100vh] w-full bg-cover bg-right-bottom md:bg-center">
        <FirstPage/>
      </div>

      <SecondPage/>

      <Thirdpage/>

      <Fourthpage/>

      <Footer/>

    </>

  );
}


export function Navbar(){

  const router = useRouter();
  //   rounded-3xl shadow-[#cacfe2] shadow-md 
  return <div className="w-full top-0 right-0 pl-3 md:px-4 py-2 flex flex-row justify-between items-center text-[1.2rem] bg-white/90 "> 
    
    <div className="flex flex-row justify-between items-center gap-3">
      {/* <div className="border-2 border-gray-300 rounded-2xl px-4 py-3"></div> */}
      <div className="font-semibold">ReFrax AI</div>
    </div>

    <div className="hidden md:flex flex-row justify-center items-center gap-10 text-lg">
      <Link href="#first-page">
        <button className="cursor-pointer hover:underline hover:underline-offset-2">Home</button>
      </Link>
        <Link href="#second-page">
          <button className="cursor-pointer hover:underline hover:underline-offset-2 text-[#F17144] font-semibold">Demo</button>
        </Link>
        <Link href="#third-page">
          <button className="cursor-pointer hover:underline hover:underline-offset-2">Impact</button>
        </Link>
        <Link href="#fourth-page">
          <button className="cursor-pointer hover:underline hover:underline-offset-2">FAQs</button>
        </Link>
    </div>

      <div className="bg-black px-3 py-1 rounded-3xl text-white flex flex-row justify-center items-center hover:cursor-pointer" onClick={()=>{router.push("/signin")}}>
        Sign in
      </div>
      {/* <div className="text-yellow-400">Register</div> */}

  </div>
}