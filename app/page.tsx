"use client"
import SecondPage from "@/components/secondpage";
import FirstPage from "@/components/firstPage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Thirdpage from '@/components/thirdpage';
import FifthPage from '@/components/fifthpage';
import Footer from "@/components/footer";
import Premium from "@/components/premium"
import ThirdPage2 from "@/components/thirdpage2";
import FourthPage from "@/components/fourthpage";
export default function Home() {

  return (
    <div className="">
      {/* my-6 lg:my-9  md:px-50  px-3 */}
      <div className='fixed w-full top-0 right-0 z-1000'>
        <Navbar/>
      </div>

      {/* bg-[url('/bgimage.png')] */}
      <div id="first-page" className="h-full w-full" > 
        <FirstPage/>
      </div>

      <SecondPage/>
      
      {/* <div className="h-screen w-screen md:flex justify-center items-center hidden">
        <BentoGrid/>
      </div> */}

      <Thirdpage/> 

      <ThirdPage2/>

      <FourthPage/>

      <Premium/>

      <FifthPage/>

      <Footer/>

    </div>

  );
}


export function Navbar(){

  const router = useRouter();
  //   rounded-3xl shadow-[#cacfe2] shadow-md 
  return <div className="text-neutral-300 text-[1.1rem] w-full top-0 right-0 pl-3 md:px-4 py-2 flex flex-row justify-between md:justify-around items-center"> 
    
    <div className="flex flex-row justify-between items-center gap-3">
      {/* <div className="border-2 border-gray-300 rounded-2xl px-4 py-3"></div> */}
      <div className="">ReFrax AI</div>
    </div>

    <div className="hidden md:flex flex-row justify-center items-center gap-10">
      <Link href="#first-page">
        <button className="cursor-pointer hover:underline hover:underline-offset-2 select-none">Home</button>
      </Link>
        <Link href="#demo">
          <button className="relative px-2 cursor-pointer hover:underline hover:underline-offset-2 font-semibold">
            {/* <div className="absolute right-0 top-0 border-3 border-zinc-600 animate-ping rounded-full bg-sky-400 opacity-75"></div> */}
            <div className="animate-pulse select-none">Demo</div>
          </button>
        </Link>
        <Link href="#pricing">
          <button className="cursor-pointer hover:underline hover:underline-offset-2 select-none">Pricing</button>
        </Link>
        <Link href="#faqs">
          <button className="cursor-pointer hover:underline hover:underline-offset-2 select-none">FAQs</button>
        </Link>
    </div>

      <div className="px-2 md:pr-0 rounded-lg flex flex-row justify-center items-center hover:cursor-pointer select-none" onClick={()=>{router.push("/signin")}}>
            <div className="bg-white text-[1rem] rounded-sm px-3 py-1 hover:bg-zinc-300 hover:ring-1 hover:ring-white transition-all delay-100 duration-300 text-black">Sign in</div>
      </div>
      {/* <div className="text-yellow-400">Register</div> */}

  </div>
}

