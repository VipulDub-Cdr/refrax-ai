// "use client"
import React from 'react';
import { useEffect, useRef } from "react";
import Image from 'next/image';
import { useRouter } from "next/navigation";

interface MyComponentProps {
    url: string;
    heading: string;
    description: string;
}


export default function SecondPage() {

    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2.25;
        }
    }, []);


    return <div id="second-page" className="py-2 h-full w-full flex flex-col justify-center items-center md:justify-start">

        <div className='flex flex-col justify-center items-center h-[50vh] w-[100vw] md:h-full md:w-[75vw] p-6 md:p-10 rounded-3xl'>

                <div className='w-full h-full border-10 md:border-12 border-neutral-800 rounded-3xl bg-black md:mt-2 shadow-xl/20 shadow-neutral-800'>
                    <video ref={videoRef} autoPlay loop muted playsInline className="h-full w-full rounded-3xl shadow-lg object-cover">
                        <source src="/demoVideo1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                    {/* mobile view */}
                {/* <div className='visible md:hidden w-full h-screen border-10 md:border-12 border-neutral-800 rounded-3xl bg-black md:mt-2'>
                    <video ref={videoRef} autoPlay loop muted playsInline className="h-full w-full rounded-3xl shadow-lg object-cover">
                        <source src="/demoVideo1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div> */}
        </div>

        <div className="w-full mt-10 md:mt-20">
            <div className='my-2 p-1 flex flex-col justify-center items-center text-[2rem]/6 md:text-[2.6rem]/7 font-normal gap-5 lg:my-6'>
                Code Formatted in Your
                <div className='text-blacks p-3 rounded-2xl'>Unique Style</div>
            </div>

            <div className='my-2 md:pl-10 lg:pl-0 w-full flex flex-row justify-center items-center lg:ml-0'>
                <div className='text-xl tracking-wide text-slate-800 text-wrap text-center'>ReFrax AI makes your code clean, consistent, and unmistakably yours.</div>
            </div>
        </div>



        <div className='mx-7 my-4 lg:mx-5 lg:my-6'><BigCardVideoRight url="" heading="Personalized Code Formatting" description='Refrax AI intelligently adapts to your coding style, allowing you to prioritize either closely following your personal patterns or adhering to best coding practices.' /></div>

        <div className='mx-7 my-4 lg:mx-5 lg:my-6'><BigCardImageLeft url="/mobileView.jpg" heading="Simplistic Responsive Interface" description='Experience a clean, intuitive, and fully responsive user interface designed for developers. Refrax AI makes it effortless to upload files, view transformations, and interact with results across devices.' /></div>

        <div className='mx-7 my-4 lg:mx-5 lg:my-6'><BigCardImageRight url="/multiModel.png" heading="Smart Code Analysis (Coming Soon)" description='Powered by advanced multi-model analysis, Refrax AI processes your code and report to produce cost-effective, high-quality formatting solutions.' /></div>

    </div>
}

const BigCardImageRight: React.FC<MyComponentProps> = ({ url, heading, description }) => {

    const router = useRouter();

    return (

        <div className='w-full h-full lg:h-[65vh] rounded-2xl flex flex-col lg:flex-row-reverse justify-start items-start gap-3  bg-[#F4F4F4]'>
            <Image width={1000} height={1000} src={url} alt={url} className="w-full h-full object-cover rounded-2xl bg-amber-50 border-2 md:border-l-0 border-neutral-200" />

            <div className='lg:mx-15 lg:w-full lg:h-full flex flex-col justify-start items-start gap-2 lg:gap-3 my-1 lg:my-0 md:justify-center md:items-start px-1 lg:px-0'>
                <div className="text-[1.6rem]/7 md:text-[2rem]/7 tracking-tight line opacity-95 text-wrap font-sans">{heading}</div>

                <div className="text-gray-800 md:w-[60%]">{description}</div>

                <button className="rounded-lg md:rounded-lg px-4 py-1 text-white font-medium bg-black my-1 hover:cursor-pointer hover:bg-white hover:text-black hover:border-1 hover:border-black" onClick={() => { router.push("/signin") }}>
                    Try for free
                </button>

            </div>
        </div>



    )

}
const BigCardVideoRight: React.FC<MyComponentProps> = ({ heading, description }) => {

    const router = useRouter();

    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2.25;
        }
    }, []);


    return (

        <div className='w-full h-full lg:h-[65vh] rounded-2xl flex flex-col lg:flex-row-reverse justify-start items-start gap-3 bg-[#F4F4F4]'>

            <div className='flex flex-row justify-center items-center h-full w-full p-4 md:p-20 bg-gradient-to-r from-neutral-500 to-neutral-600 rounded-3xl'>

                <div className='w-full h-full border-8 border-neutral-700 rounded-3xl shadow-xl/40 shadow-neutral-800'>
                    <video ref={videoRef} autoPlay loop muted playsInline className="h-full w-full rounded-2xl shadow-lg object-cover">
                        <source src="/demoVideo1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

            </div>

            <div className='lg:mx-15 lg:w-full lg:h-full flex flex-col justify-start items-start gap-2 lg:gap-3 my-1 lg:my-0 md:justify-center md:items-start px-1 lg:px-0'>
                <div className="text-[1.6rem]/7 md:text-[2rem]/7 tracking-tight line opacity-95 text-wrap font-sans">{heading}</div>

                <div className="text-gray-800 md:w-[60%]">{description}</div>

                <button className="rounded-lg md:rounded-lg px-4 py-1 text-white font-medium bg-black my-1 hover:cursor-pointer hover:bg-white hover:text-black hover:border-1 hover:border-black" onClick={() => { router.push("/signin") }}>
                    Try for free
                </button>

            </div>
        </div>



    )
}
const BigCardImageLeft: React.FC<MyComponentProps> = ({ url, heading, description }) => {

    const router = useRouter();

    return (

        <div className='w-full h-full lg:h-[65vh] rounded-2xl flex flex-col lg:flex-row justify-start items-start gap-3  bg-[#F4F4F4]'>
            {/* <Image width={1000} height={1000} src={url} alt={url} className="w-full h-full object-cover rounded-2xl bg-amber-50 shadow-md" /> */}
            <div className='w-full h-full rounded-2xl bg-gradient-to-r from-stone-400 to-stone-500 inset-shadow-sm/60 inset-shadow-zinc-600 flex flex-col justify-end items-center'>
                <div className='overflow-hidden relative mt-10 md:mt-0 h-[20vh] w-[55vw] md:h-[55vh] md:w-[25vw] bg-neutral-700 rounded-t-4xl border-10 border-neutral-800 border-b-0 flex flex-col items-center justfy-start'>
                    <div className='absolute top-0 left-[40%] md:left-25 z-900 my-3 md:my-2 w-[20%] md:w-[40%] md:h-[7%] bg-neutral-800 rounded-full py-2'>
                    </div>
                    <Image width={1000} height={1000} src={url} alt={url} className="" />

                </div>
            </div>
            <div className='lg:mx-15 lg:w-full lg:h-full flex flex-col justify-start items-start gap-2 lg:gap-3 my-1 lg:my-0 md:justify-center md:items-start px-1 lg:px-0'>
                <div className="text-[1.6rem]/7 md:text-[2rem]/7 tracking-tight line opacity-95 text-wrap font-sans">{heading}</div>

                <div className="text-gray-800 md:w-[60%]">{description}</div>

                <button className="rounded-lg px-4 py-1 text-white font-medium bg-black my-1 hover:cursor-pointer hover:bg-white hover:text-black hover:border-1 hover:border-black" onClick={() => { router.push("/signin") }}>
                    Try for free
                </button>

            </div>
        </div>



    )
}