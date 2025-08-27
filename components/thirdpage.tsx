import Marquee from 'react-fast-marquee';
import { useEffect, useRef } from "react";

interface MyComponentProps {
    url: string;
    heading: string;
    description: string;
}

export default function Thirdpage() {

    return <div id="third-page" className="md:pt-8 h-full w-full flex flex-col justify-center items-center md:justify-start">

        <div className='w-full md:w-[60%] flex flex-col justify-start items-center my-4'>
            <div className='text-xl text-[#F17144] font-medium'>My winboard</div>
            <div className=' text-3xl md:text-[2.6rem] text-center'>Timely Simplifies time tracking and productivity with AI</div>
        </div>

        <div id="third-page" className='w-full bg-gray-200 my-4'>
            <Marquee direction="left" className="w-full flex flex-row justify-between items-center p-2 gap-2 md:gap-4 md:p-6 my-2">
                <HeroCard url="" heading="125+" description='lorem ipsum dolor sit amet consectetur adipisicing' />
                <HeroCard url="" heading="98%" description='lorem ipsum dolor sit amet consectetur adipisicing' />
                <HeroCard url="" heading="40%" description='lorem ipsum dolor sit amet consectetur adipisicing' />
                <HeroCard url="" heading="65%" description='lorem ipsum dolor sit amet consectetur adipisicing' />
            </Marquee>
            <Marquee direction="right" className="w-full flex flex-row justify-between items-center p-2 gap-2 md:gap-4 md:p-6 my-2">
                <HeroCard url="" heading="125+" description='lorem ipsum dolor sit amet consectetur adipisicing' />
                <HeroCard url="" heading="98%" description='lorem ipsum dolor sit amet consectetur adipisicing' />
                <HeroCard url="" heading="40%" description='lorem ipsum dolor sit amet consectetur adipisicing' />
                <HeroCard url="" heading="65%" description='lorem ipsum dolor sit amet consectetur adipisicing' />
            </Marquee>
        </div>


    </div>


}

const HeroCard: React.FC<MyComponentProps> = ({ url, heading, description }) => {
    return <div className='bg-white w-40 h-25 p-2 md:px-4 md:h-40 md:w-80 border-2 shadow-lg border-neutral-300 hover:bg-[#F17144] hover:text-white rounded-xl mx-4 md:mx-9 flex flex-col justify-center items-start transition-colors delay-50 duration-200'>
        <div className='text-2xl md:text-[2.5rem] font-bold'>{heading}</div>
        <div className='text-[0.8rem] md:text-[1.2rem] font-light'>{description}</div>
    </div>
}