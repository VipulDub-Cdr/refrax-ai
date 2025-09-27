// "use client"
import React from 'react';
import { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import Marquee from 'react-fast-marquee';
import { ChartBarMultiple } from './charts/barchart';
import { CheckCheck, SquareLibrary, Asterisk} from 'lucide-react'

interface MyComponentProps {
    url: string;
    heading: string;
    description: string;
}


export default function SecondPage() {
    const [front, setFront] = useState(false);

    useEffect(() => {

        const interval = setInterval(() => {
            setFront(!front);
        }, 3000)
        //what did i do here?
        return () => clearInterval(interval);

    }, [front])

    return (
        <div id="second-page" className='border-2 border-white relative w-full h-full bg-[#000000] flex flex-col justify-center items-center md:py-[20%] gap-2'>
            <div className='w-full md:w-[80%] h-full px-[2%] text-[2.5rem] text-white flex justify-start items-start'>
                <div className='text-white'>Code Formatted in Your Unique Style</div>
            </div>
            <div className='w-full md:w-[80%] h-full px-[2%] text-zinc-400 flex justify-start items-start'>
                <div className='w-full md:w-[60%] text-[1rem]/5 text'>Refrax AI intelligently adapts to your coding style, allowing you to prioritize either closely following your personal patterns or adhering to best coding practices.</div>
            </div>
            <div className='z-10 absolute top-0 left-0 h-full md:w-60 bg-gradient-to-r from-black to-black/0'></div>
            <Marquee pauseOnClick={true} play={true} direction="left" className='relative w-full h-full my-6 flex flex-row'>
                <div className='h-60 w-60 rounded-lg mx-6'>
                    <div className='h-40 w-full border-2 border-neutral-900 rounded-lg bg-gradient-to-br from-black/60 to-neutral-800'>
                        <ChartBarMultiple />
                    </div>
                    <div className='p-1 text-[1rem] font-semibold text-white'>Accuracy</div>
                    <div className='px-1 text-[0.8rem] font-semibold text-zinc-400'>Accuracy level over the past 5 months</div>
                </div>
                <div className='h-60 w-60 rounded-lg mx-6'>
                    <div className='h-40 w-full border-2 border-neutral-900 p-4 rounded-lg bg-gradient-to-br from-black/60 to-neutral-800 flex flex-col justify-center items-center gap-2'>
                        <button className='w-[90%] px-2 py-1 text-white border-1 border-neutral-700 rounded-md transition-all delay-100 duration-300 hover:border-blue-500 flex flex-row justify-center items-center gap-2'><SquareLibrary className='h-4 w-4'/><div>Knowledge Thingy</div></button>
                        <button className='w-[90%] px-2 py-1 text-white border-1 border-neutral-700 rounded-md transition-all delay-100 duration-300 hover:border-blue-500 flex flex-row justify-start items-center gap-2'><Asterisk className='h-4 w-4 ml-[5px] rounded-full border'/><div>Pattern Oriented</div></button>
                    </div>
                    <div className='p-1 text-[1rem] font-semibold text-white'>Multiple Modes</div>
                    <div className='px-1 text-[0.8rem] font-semibold text-zinc-400'>Choose the mode according to how you want to generate the code</div>
                </div>
                <div className='h-60 w-60 rounded-lg mx-6'>
                    <div className='h-40 w-full border-2 border-neutral-900 p-4 rounded-lg bg-gradient-to-br from-black/60 to-neutral-800 flex flex-col justify-start items-start gap-2'>
                        <div className="p-[3px] w-full h-1/2 rounded-lg bg-gradient-to-r from-blue-900 to-blue-400/60 animate-pulse">
                            <div className="w-full h-full rounded-lg bg-black text-white flex flex-row p-2 gap-4 justify-center items-center">
                                {/* <CheckCheck className='stroke-green-600'/> */}
                                <div className='rounded-t-full w-6 h-6 border-t-2 border-blue-100 animate-spin pl-6'></div>
                                <div className='w-full text-[0.8rem] text-white font-normal'>Analyzing the Sample Code</div>
                            </div>
                        </div>
                        <div className='w-full h-1/4 bg-purple-950/20 rounded-lg text-[0.8rem] py-2 text-white text-center'>AI action: <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-400'>Analyze the sample code</span></div>
                    </div>
                    <div className='p-1 text-[1rem] font-semibold text-white'>AI-Enhanced Suggestions</div>
                    <div className='px-1 text-[0.8rem] font-semibold text-zinc-400'>Recommendations based on your coding pattern and modes.</div>
                </div>
                <div className='h-60 w-60 rounded-lg mx-6'>
                    <div className='h-40 w-full border-2 border-neutral-900 p-4 rounded-lg bg-gradient-to-br from-black/60 to-neutral-800 flex flex-col justify-center items-center gap-2'>
                        <div className="w-full h-full">
                            <div className="relative h-full w-full rounded-lg bg-gradient-to-b from-neutral-900 to-neutral-950 flex justify-end items-end inset-shadow-2xs inset-shadow-neutral-800">
                                <div className={`transition-all delay-100 duration-300 ${front ? "absolute right-0 bottom-0 h-[85%] w-[80%] border-t-2 border-l-2 border-neutral-800 rounded-tl-lg bg-neutral-950 text-white" : "h-[80%] w-[84%] border-1 border-neutral-800 rounded-tl-lg bg-neutral-950 text-white"} `}>
                                    <pre className="relative overflow-hidden w-full h-full p-4 text-[0.8rem]">
                                        <code>
                                            {`#include<bits/stdc++.h>
using namespace std;>
void setZeroes(vector<vector<int>>& matrix) {
    int rows = matrix.size();
    int cols = matrix[0].size();
    vector<bool> rowzero(rows,false);
    vector<bool> colzero(cols,false);
    for(int i=0;i<rows;i++){
        for(int j=0;j<cols;j++){
            if(matrix[i][j]==0){
                rowzero[i] = true;
                colzero[j] = true;
            }
        }
    }
int main() {
    vector<vector<int>> matrix = {
        {1, 1, 1},

`}
                                        </code>
                                    </pre>
                                </div>
                                <div className={`transition-all delay-100 duration-300 ${!front ? "absolute right-0 bottom-0 h-[85%] w-[80%] border-t-2 border-l-2 border-neutral-800 rounded-tl-lg bg-neutral-950 text-red-400" : "h-[80%] w-[84%] border-1 border-neutral-800 rounded-tl-lg bg-neutral-950 text-neutral-400"} `}>
                                    <pre className="overflow-hidden w-full h-full p-4 text-[0.8rem]">
                                        <code>
                                            {`#include<iostream>
#include<vector>
using namespace std;
void setZeroes(vector<vector<int>>& matrix) {
    int rows = matrix.size();
    int cols = matrix[0].size();
    vector<bool> rowzero(rows,false);
    vector<bool> colzero(cols,false);
    for(int i=0;i<rows;i++){
        for(int j=0;j<cols;j++){
            if(matrix[i][j]==0){
                rowzero[i] = true;
                colzero[j] = true;
            }
        }
    }
int main() {
    vector<vector<int>> matrix = {
        {1, 1, 1},
`}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='p-1 text-[1rem] font-semibold text-white'>Code Comparison</div>
                    <div className='px-1 text-[0.8rem] font-semibold text-zinc-400'>Easily compare the generated code with your actual pattern.</div>
                </div>
                <div className='h-60 w-60 rounded-lg mx-6'>
                    <div className='relative h-40 w-full border-2 border-neutral-900 p-2 rounded-lg bg-gradient-to-br from-black/60 to-neutral-800 overflow-hidden px-12 pt-6'>
                            <div className='absolute left-[42%] top-[19%] w-[14%] h-[8%] rounded-full bg-neutral-800'></div>
                            <Image width={1000} height={1000} src="/mobileView.jpg" alt="mobileview" className='ring-6 ring-neutral-800 rounded-t-3xl object-cover' />
                    </div>
                    <div className='p-1 text-[1rem] font-semibold text-white'>Responsive Design</div>
                    <div className='px-1 text-[0.8rem] font-semibold text-zinc-400'>Easily work on the code over the devices.</div>
                </div>
                {/* <Card /> */}
            </Marquee>
            <div className='z-10 absolute top-0 right-0 h-full md:w-60 bg-gradient-to-r from-black/0 to-black'></div>
        </div>
    )

}

function Card() {
    return (
        <div className='h-60 w-60 rounded-lg mx-6'>
            <div className='h-40 w-full border-2 border-neutral-700 p-2 rounded-lg bg-gradient-to-br from-black/60 to-neutral-800'></div>
            <div className='p-1 text-[1rem] font-semibold text-white'>Lorem, ipsum dolor.</div>
            <div className='px-1 text-[0.8rem] font-semibold text-zinc-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
    )
}

const BigCardImageRight: React.FC<MyComponentProps> = ({ url, heading, description }) => {

    const router = useRouter();

    return (

        <div className='w-full h-full lg:h-[65vh] rounded-2xl flex flex-col lg:flex-row-reverse justify-start items-start gap-3  bg-[#F4F4F4]'>

            <div className='w-full h-full border-5 border-neutral-100 rounded-3xl'>
                <Image width={1000} height={1000} src={url} alt={url} className="w-full h-full object-cover rounded-2xl bg-amber-50 border-2 md:border-l-0 border-neutral-200" />
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
            <div className='w-full md:w-[55%] h-full rounded-2xl bg-gradient-to-r from-stone-400 to-stone-500 inset-shadow-sm/60 inset-shadow-zinc-600 flex flex-col justify-end items-center'>
                <div className='overflow-hidden relative mt-10 md:mt-0 h-[20vh] w-[55vw] md:h-[55vh] md:w-[25vw] bg-neutral-700 rounded-t-4xl border-10 border-neutral-800 border-b-0 flex flex-col items-center justfy-start'>
                    <div className='absolute top-0 left-[40%] md:left-3 z-900 my-3 md:my-3 w-[20%] md:w-[7%] md:h-[6%] bg-neutral-800 rounded-full py-2'>
                    </div>
                    <Image width={1000} height={1000} src={url} alt={url} className="" />

                </div>
            </div>
            <div className='lg:mx-15 lg:w-[45%] lg:h-full flex flex-col justify-start items-start gap-2 lg:gap-3 my-1 lg:my-0 md:justify-center md:items-start px-1 lg:px-0'>
                <div className="text-[1.6rem]/7 md:text-[2rem]/7 tracking-tight line opacity-95 text-wrap font-sans">{heading}</div>

                <div className="text-gray-800 md:w-[60%]">{description}</div>

                <button className="rounded-lg px-4 py-1 text-white font-medium bg-black my-1 hover:cursor-pointer hover:bg-white hover:text-black hover:border-1 hover:border-black" onClick={() => { router.push("/signin") }}>
                    Try for free
                </button>

            </div>
        </div>



    )
}

const BigCardImageRight1: React.FC<MyComponentProps> = ({ url, heading, description }) => {

    const router = useRouter();

    return (

        <div className='w-full h-full lg:h-[65vh] rounded-2xl flex flex-col lg:flex-row-reverse justify-start items-start gap-3  bg-[#F4F4F4]'>

            <div className='flex flex-row justify-center items-center h-full w-full md:w-[55%] p-4 md:p-20 bg-radial-[at_50%_50%] from-neutral-500 to-neutral-600 rounded-3xl inset-shadow-sm inset-shadow-neutral-700'>

                <div className='w-full h-full border-10 border-neutral-700 rounded-3xl shadow-xl/40 shadow-neutral-800 overflow-hidden transition-all delay-100 duration-400 hover:scale-110'>
                    <Image width={1000} height={1000} src={url} alt={url} className="w-full h-full" />
                </div>

            </div>


            <div className='lg:mx-15 lg:w-[40%] lg:h-full flex flex-col justify-start items-start gap-2 lg:gap-3 my-1 lg:my-0 md:justify-center md:items-start px-1 lg:px-0'>
                <div className="text-[1.6rem]/7 md:text-[2rem]/7 tracking-tight line opacity-95 text-wrap font-sans">{heading}</div>

                <div className="text-gray-800 md:w-[60%]">{description}</div>

                <button className="rounded-lg md:rounded-lg px-4 py-1 text-white font-medium bg-black my-1 hover:cursor-pointer hover:bg-white hover:text-black hover:border-1 hover:border-black" onClick={() => { router.push("/signin") }}>
                    Try for free
                </button>

            </div>
        </div>



    )
}