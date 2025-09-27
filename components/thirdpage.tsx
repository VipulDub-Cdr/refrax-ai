import Marquee from 'react-fast-marquee';

interface MyComponentProps {
    url: string;
    heading: string;
    description: string;
}

export default function Thirdpage() {

    return <div id="third-page" className="bg-black h-screen md:max-h-[100vh] w-screen border-0 border-white flex flex-col justify-center items-center gap-2 md:pt-0 pt-[20%] select-none">
        <div className='text-[1.8rem]/10 md:text-[2.5rem]/12 text-white px-[4%] md:px-[20%] text-center font-light'>Effortlessly Formats Your Code to Match Your Unique Style with AI</div>
        <div className='p-2 md:px-[8%] w-full h-full flex flex-col md:flex-row  justify-center items-center mt-4 gap-4 md:gap-0'>
            <div className='w-full md:w-5/8 h-full border-2 border-neutral-900 mx-3 rounded-sm flex justify-center items-center' style={{
                backgroundImage: `
                    radial-gradient(circle at 50% 100%, rgba(58, 175, 169, 0.6) 0%, transparent 60%),
                    radial-gradient(circle at 50% 100%, rgba(255, 140, 0, 0.4) 0%, transparent 70%),
                    radial-gradient(circle at 50% 100%, rgba(238, 130, 238, 0.3) 0%, transparent 80%)
                    `,
            }}
            >
                <div className=' text-white/30 font-semibold text-[1.8rem]/10 md:text-[2rem] animate-pulse text-center'>Your Vibe coded program reflects that</div>
            </div>
            <div className='w-full md:w-3/7 h-full border-2 border-neutral-800 mx-3 rounded-sm flex flex-row justify-center items-center' style={{
                backgroundImage: `
                radial-gradient(circle at 50% 0%, rgba(70, 85, 110, 0.5) 0%, transparent 60%),
                radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.4) 0%, transparent 70%),
                radial-gradient(circle at 50% 0%, rgba(181, 184, 208, 0.3) 0%, transparent 80%)
                `,
            }}>
                <div className=' text-white/30 font-semibold text-[2rem]/10 md:text-[2rem] animate-pulse'>Reflects You</div>
            </div>
        </div>
        <div className='hidden px-[8.8%] w-full h-1/4 md:flex justify-center items-center my-4'>
            <div className='relative w-full h-full flex flex-row justify-between gap-0'>
                <div className='absolute h-full w-[20%] bg-gradient-to-r from-neutral-900/80 to-neutral-950/0 rounded-sm border-0 border-white  '></div>
                <div className='h-full w-full flex flex-col justify-center items-start text-white p-2  md:px-8 border-0 border-white'>
                    <div className='text-lg flex flex-row gap-2'>
                        <div>Personalized Code Formatting</div>
                    </div>
                    <div className='text-md text-neutral-600'>Adapts to unique coding habits for consistent style.</div>
                </div>
                <div className='h-full w-full flex flex-col justify-center items-start text-white p-2  md:px-8 border-0 border-white'>
                    <div className='text-lg flex flex-row gap-2'>
                        <div>Pattern-Oriented Functionality</div>
                    </div>
                    <div className='text-md text-neutral-600'>Prioritizes user conventions over generic quality check rules.</div>
                </div>
                <div className='h-full w-full flex flex-col justify-center items-start text-white p-2  md:px-8 border-0 border-white'>
                    <div className='text-lg flex flex-row gap-2'>
                        <div>Knowledge-Mode Efficiency</div>
                    </div>
                    <div className='text-md text-neutral-600'>Applies best practices enhancing performance and code maintainability.</div>
                </div>
                <div className='h-full w-full flex flex-col justify-center items-start text-white p-2  md:px-8 border-0 border-white'>
                    <div className='text-lg flex flex-row gap-2'>
                        <div>Responsive User Interface</div>
                    </div>
                    <div className='text-md text-neutral-600'>Delivers clean previews with seamless cross-device copy support.</div>
                </div>
            </div>
        </div>
        <div className='w-full h-1/6 flex justify-center items-center pb-[35%] md:pb-0'>
            {/* <button className='px-6 py-2 border-2 border-slate-800 bg-neutral-950 text-white rounded-sm'>Join Refrax AI</button> */}
        </div>
    </div>


}

const HeroCard: React.FC<MyComponentProps> = ({ heading, description }) => {
    return <div className='w-[80%] md:w-90 h-full p-4 md:px-4 md:h-28 rounded-xl mx-4 md:mx-9 flex flex-row text-[3rem] gap-4 justify-center items-start transition-colors delay-50 duration-200'>
        <div className='text-2xl md:text-[2.5rem] font-bold text-center'>{heading}</div>
        <div className='text-[0.8rem] md:text-[1.2rem]'>{description}</div>
    </div>
}