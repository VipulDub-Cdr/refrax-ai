// "use client"
import React from 'react';
import Link from "next/link";
import Marquee from 'react-fast-marquee';
import { useEffect, useRef } from "react";

interface MyComponentProps {
    url: string;
    heading: string;
    description: string;
}


export default function SecondPage() {


    return <div id="second-page" className="py-2 h-full w-full flex flex-col justify-center items-center md:justify-start">


        <div className="w-full">
            <div className='my-2 p-1 flex flex-col justify-center items-center text-[2rem]/6 md:text-[2.6rem]/7 font-normal gap-5 lg:my-6'>
                Code Formatted in Your
                <div className='text-blacks p-3 rounded-2xl bg-[#f0efef]'>Unique Style</div>
            </div>

            <div className='my-2 md:pl-10 lg:pl-0 w-full flex flex-row justify-center items-center lg:ml-0'>
                <div className='text-xl tracking-wide text-slate-800 text-wrap text-center'>ReFrax AI makes your code clean, consistent, and unmistakably yours.</div>
            </div>
        </div>



        <div className='mx-7 my-4 lg:mx-5 lg:my-6'><BigCardVideoRight url="" heading="Personalized Code Formatting" description='Refrax AI intelligently adapts to your coding style, allowing you to prioritize either closely following your personal patterns or adhering to best coding practices.' /></div>

        <div className='mx-7 my-4 lg:mx-5 lg:my-6'><BigCardImageLeft url="./responsiveHeroImage.png" heading="Simplistic Responsive Interface" description='Experience a clean, intuitive, and fully responsive user interface designed for developers. Refrax AI makes it effortless to upload files, view transformations, and interact with results across devices.' /></div>

        <div className='mx-7 my-4 lg:mx-5 lg:my-6'><BigCardImageRight url="./multimodelHeroImage.png" heading="Smart Code Analysis (Coming Soon)" description='Powered by advanced multi-model analysis, Refrax AI processes your code and report to produce cost-effective, high-quality formatting solutions.' /></div>

    </div>
}

const BigCardImageRight: React.FC<MyComponentProps> = ({ url, heading, description }) => {
    
    return (

        <div className='w-full h-full lg:h-[65vh] rounded-2xl flex flex-col lg:flex-row-reverse justify-start items-start gap-3  bg-[#F4F4F4]'>
            <img src={url} alt={url} className="w-full h-full object-cover rounded-2xl bg-amber-50 shadow-md -rotate-[0.0008rad]" />

            <div className='lg:mx-15 lg:w-full lg:h-full flex flex-col justify-start items-start gap-2 lg:gap-3 my-1 lg:my-0 md:justify-center md:items-start px-1 lg:px-0'>
                <div className="text-[1.6rem]/7 tracking-tight line opacity-95 text-wrap font-sans">{heading}</div>

                <div className="text-gray-800 md:w-[60%]">{description}</div>

                <Link href="/signin">
                    <button className="rounded-lg md:rounded-full px-4 py-1 text-white font-medium bg-black my-1 hover:cursor-pointer hover:bg-white hover:text-black hover:border-1 hover:border-black" onClick={() => { window.open("") }}>
                        Try for free
                    </button>
                </Link>
            </div>
        </div>



    )

}
const BigCardVideoRight: React.FC<MyComponentProps> = ({ url, heading, description }) => {

    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2.25;
        }
    }, []);


    return (

        <div className='w-full h-full lg:h-[65vh] rounded-2xl flex flex-col lg:flex-row-reverse justify-start items-start gap-3  bg-[#F4F4F4]'>

            <video ref={videoRef} autoPlay loop muted playsInline className="h-full md:w-[52%] rounded-lg shadow-lg object-cover">
                <source src="/demoVideo1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className='lg:mx-15 lg:w-full lg:h-full flex flex-col justify-start items-start gap-2 lg:gap-3 my-1 lg:my-0 md:justify-center md:items-start px-1 lg:px-0'>
                <div className="text-[1.6rem]/7 tracking-tight line opacity-95 text-wrap font-sans">{heading}</div>

                <div className="text-gray-800 md:w-[60%]">{description}</div>

                <Link href="/register">
                    <button className="rounded-lg md:rounded-full px-4 py-1 text-white font-medium bg-black my-1 hover:cursor-pointer hover:bg-white hover:text-black hover:border-1 hover:border-black" onClick={() => { window.open("") }}>
                        Try for free
                    </button>
                </Link>
            </div>
        </div>



    )
}
const BigCardImageLeft: React.FC<MyComponentProps> = ({ url, heading, description }) => {
    return (

        <div className='w-full h-full lg:h-[65vh] rounded-2xl flex flex-col lg:flex-row justify-start items-start gap-3  bg-[#F4F4F4]'>
            <img src={url} alt={url} className="w-full h-full object-cover rounded-2xl bg-amber-50 shadow-md" />

            <div className='lg:mx-15 lg:w-full lg:h-full flex flex-col justify-start items-start gap-2 lg:gap-3 my-1 lg:my-0 md:justify-center md:items-start px-1 lg:px-0'>
                <div className="text-[1.6rem]/7 tracking-tight line opacity-95 text-wrap font-sans">{heading}</div>

                <div className="text-gray-800 md:w-[60%]">{description}</div>

                <Link href="/register">
                    <button className="rounded-lg md:rounded-full px-4 py-1 text-white font-medium bg-black my-1 hover:cursor-pointer hover:bg-white hover:text-black hover:border-1 hover:border-black" onClick={() => { window.open("") }}>
                        Try for free
                    </button>
                </Link>
            </div>
        </div>



    )
}