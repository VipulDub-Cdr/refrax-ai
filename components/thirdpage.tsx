import Marquee from 'react-fast-marquee';

interface MyComponentProps {
    url: string;
    heading: string;
    description: string;
}

export default function Thirdpage() {

    return <div id="third-page" className="md:pt-8 h-full w-full flex flex-col justify-center items-center md:justify-start">

        <div className='w-full md:w-[60%] flex flex-col justify-start items-center my-4'>
            <div className='text-xl text-stone-900 font-medium'>Impact of Refrax AI</div>
            <div className=' text-3xl md:text-[2.6rem] text-center'> Effortlessly Formats Your Code to Match Your Unique Style with AI</div>
        </div>

        <div id="third-page" className='w-full bg-gradient-to-r from-neutral-400 to-stone-500 my-4'>
            <Marquee direction="left" className="w-full flex flex-row justify-between items-center p-2 gap-2 md:gap-4 md:p-6 my-2">
                <HeroCard url="" heading="120%" description='Increased code consistency across projects' />
                <HeroCard url="" heading="70%" description='Faster onboarding for new developers' />
                <HeroCard url="" heading="95%" description='Improved team collaboration and coding standard adherence' />
                <HeroCard url="" heading="60%" description='Reduction in style-related code review comments' />
            </Marquee>
            <Marquee direction="right" className="w-full flex flex-row justify-between items-center p-2 gap-2 md:gap-4 md:p-6 my-2">
                <HeroCard url="" heading="90%" description='Accuracy in replicating personal coding style' />
                <HeroCard url="" heading="85%" description='Boost in developer productivity and efficiency' />
                <HeroCard url="" heading="75%" description='Reduction in errors due to misaligned code formatting' />
                <HeroCard url="" heading="95%" description='Improved team collaboration and coding standard adherence' />
            </Marquee>
        </div>


    </div>


}

const HeroCard: React.FC<MyComponentProps> = ({heading, description }) => {
    return <div className='bg-white w-40 h-25 p-2 md:px-4 md:h-40 md:w-80 shadow-lg hover:bg-neutral-700 hover:text-white rounded-xl mx-4 md:mx-9 flex flex-col justify-center items-start transition-colors delay-50 duration-200'>
        <div className='text-2xl md:text-[2.5rem] font-bold'>{heading}</div>
        <div className='text-[0.8rem] md:text-[1.2rem] font-light'>{description}</div>
    </div>
}