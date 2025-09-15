import Marquee from 'react-fast-marquee';

interface MyComponentProps {
    url: string;
    heading: string;
    description: string;
}

export default function Thirdpage() {

    return <div id="third-page" className="md:pt-8 md:h-screen w-full flex flex-col justify-center items-center md:justify-start bg-gradient-to-b from-white to-[#f4f3f3]">

        <div className='w-full md:w-[60%] flex flex-col justify-start items-center my-4'>
            <div className='text-xl text-white font-medium bg-neutral-800 italic px-2'>Impact of Refrax AI</div>
            <div className=' text-3xl md:text-[2.6rem] text-center'> Effortlessly Formats Your Code to Match Your Unique Style with AI</div>
        </div>

        <div id="third-page" className='w-full h-full my-4'>
            {/* bg-[#E9E9E9] bg-radial-[at_50%_50%] from-emerald-200 to-emerald-300 text-emerald-800  inset-shadow-2xs inset-shadow-emerald-400 */}
            <Marquee direction="left" pauseOnHover={true} className="w-full flex flex-row justify-between items-center p-2 gap-2 md:gap-4 my-2 md:mt-[3%] italic border-t-2 border-b-2 border-black 2">
                <HeroCard url="" heading="120%" description='Increased code consistency across projects' />
                <HeroCard url="" heading="70%" description='Faster onboarding for new developers' />
                <HeroCard url="" heading="95%" description='Improved team collaboration and coding standard adherence' />
                <HeroCard url="" heading="60%" description='Reduction in style-related code review comments' />
            </Marquee>
            {/* bg-radial-[at_50%_50%] from-[#f1c4e9] to-[#d495ca] text-pink-900 inset-shadow-2xs inset-shadow-pink-300 */}
            <Marquee direction="right" pauseOnHover={true} className="w-full flex flex-row justify-between items-center md:gap-4 bg-neutral-800 text-white">
                <HeroCard url="" heading="90%" description='Accuracy in replicating personal coding style' />
                <HeroCard url="" heading="85%" description='Boost in developer productivity and efficiency' />
                <HeroCard url="" heading="75%" description='Reduction in errors due to misaligned code formatting' />
                <HeroCard url="" heading="95%" description='Improved team collaboration and coding standard adherence' />
            </Marquee>
            {/* bg-radial-[at_50%_50%] from-[#747aeb] to-[#575ee5] text-white inset-shadow-2xs inset-shadow-purple-700 */}
            <Marquee direction="left" pauseOnHover={true} className="w-full flex flex-row justify-between items-center p-2 gap-2 md:gap-4 my-2 md:mb-[3%] bg-white text-neutral-800 border-t-2 border-b-2 border-black 2 italic">
                <HeroCard url="" heading="120%" description='Increased code consistency across projects' />
                <HeroCard url="" heading="70%" description='Faster onboarding for new developers' />
                <HeroCard url="" heading="95%" description='Improved team collaboration and coding standard adherence' />
                <HeroCard url="" heading="60%" description='Reduction in style-related code review comments' />
            </Marquee>
        </div>


    </div>


}

const HeroCard: React.FC<MyComponentProps> = ({heading, description }) => {
    return <div className='w-[80%] md:w-90 h-full p-4 md:px-4 md:h-28 rounded-xl mx-4 md:mx-9 flex flex-row text-[3rem] gap-4 justify-center items-start transition-colors delay-50 duration-200'>
        <div className='text-2xl md:text-[2.5rem] font-bold text-center'>{heading}</div>
        <div className='text-[0.8rem] md:text-[1.2rem]'>{description}</div>
    </div>
}