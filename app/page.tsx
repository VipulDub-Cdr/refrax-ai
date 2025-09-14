"use client"
import SecondPage from "@/components/secondpage";
import FirstPage from "@/components/firstPage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Thirdpage from '@/components/thirdpage';
import Fourthpage from '@/components/fourthpage';
import Footer from "@/components/footer";
import { BentoGrid } from "@/components/BentoGrid";

export default function Home() {

  return (
    <div className="">
      {/* my-6 lg:my-9  md:px-50  px-3 */}
      <div className='fixed w-full top-0 right-0 z-1000'>
        <Navbar/>
      </div>

      {/* bg-[url('/bgimage.png')] */}
      <div id="first-page" className="h-full w-full bg-cover bg-right-bottom md:bg-center bg-gradient-to-b from-zinc-300 to-white" > 
        <FirstPage/>
      </div>

      <SecondPage/>
      
      {/* <div className="h-screen w-screen md:flex justify-center items-center hidden">
        <BentoGrid/>
      </div> */}

      <Thirdpage/>
      

      <Fourthpage/>

      <Footer/>

    </div>

  );
}


export function Navbar(){

  const router = useRouter();
  //   rounded-3xl shadow-[#cacfe2] shadow-md 
  return <div className="w-full top-0 right-0 pl-3 md:px-4 py-2 flex flex-row justify-between items-center text-[1.2rem] bg-white/40 backdrop-blur-xl "> 
    
    <div className="flex flex-row justify-between items-center gap-3">
      {/* <div className="border-2 border-gray-300 rounded-2xl px-4 py-3"></div> */}
      <div className="font-semibold">ReFrax AI</div>
    </div>

    <div className="hidden md:flex flex-row justify-center items-center gap-10 text-lg">
      <Link href="#first-page">
        <button className="cursor-pointer hover:underline hover:underline-offset-2">Home</button>
      </Link>
        <Link href="#second-page">
          <button className="relative px-2 cursor-pointer hover:underline hover:underline-offset-2 text-black font-semibold">
            {/* <div className="absolute right-0 top-0 border-3 border-zinc-600 animate-ping rounded-full bg-sky-400 opacity-75"></div> */}
            <div className="animate-pulse">Demo</div>
          </button>
        </Link>
        <Link href="#third-page">
          <button className="cursor-pointer hover:underline hover:underline-offset-2">Impact</button>
        </Link>
        <Link href="#fourth-page">
          <button className="cursor-pointer hover:underline hover:underline-offset-2">FAQs</button>
        </Link>
    </div>

      <div className="px-2 md:pr-0 rounded-lg text-white flex flex-row justify-center items-center hover:cursor-pointer" onClick={()=>{router.push("/signin")}}>
            <div className="bg-black/80 rounded-xl px-3 py-1 hover:bg-zinc-800 transition-all delay-100 duration-300">Sign in</div>
      </div>
      {/* <div className="text-yellow-400">Register</div> */}

  </div>
}

