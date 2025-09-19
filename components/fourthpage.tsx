import Marquee from "react-fast-marquee"
import { User, UserRound, MoveRight, MoveUpRight, ChartNoAxesCombined } from "lucide-react";
import { useRouter } from "next/navigation";

type CardProps = {
    title: string;
    description: string;
};

export default function FourthPage() {
    const router  = useRouter();
    return (
        <>
            <div className=" h-full w-screen bg-black flex flex-col md:flex-row pt-[45%] md:pt-0">
                <div className="w-full md:w-1/3 h-[60%] flex flex-col justify-center items-start p-[5%]">
                    <div className="text-[2rem]/12 text-white">Why Refrax AI Truly Matters Today.</div>
                    <div className="py-[8%] text-[1rem] text-neutral-400">The impact of Refrax AI lies in its ability to adapt to individual coding styles, ensuring consistency, personalization, and efficiency in every project.</div>
                    <div className="font-semibold text-white flex flex-row justify-center gap-2 cursor-pointer" onClick={()=>{router.push("/signin")}}>
                        <div className="pb-2">Get Started too</div>
                        <MoveUpRight className="stroke-blue-500 rounded-full rotate-45 hover:rotate-0 transition delay-100 duration-200" />
                    </div>
                    <div className="w-full h-[2px] bg-gradient-to-r from-blue-800 via-red-400 to-purple-500"></div>
                </div>
                <div className="w-full md:w-2/3 h-[60%] relative">
                    <div className="hidden md:flex absolute top-0 left-0 h-full w-[30%] bg-gradient-to-r from-black to-black/0 z-10"></div>
                    <Marquee direction="left" play={true} className="w-full h-[40%] mt-[8%] mb-[4%] md:mb-0">
                        <div className="flex flex-row">
                            <Card title="95%" description="Improved team collaboration and coding standard adherence" />
                            <Card title="70%" description="Faster onboarding for new developers" />
                            <Card title="120%" description="Increased code consistency on projects" />
                            <Card title="90%" description="Accuracy in replicating the personal coding style" />
                            <Card title="60%" description="Reduction in style-related code review comments" />
                        </div>
                    </Marquee>
                    <Marquee direction="right" play={true} className="w-full h-[34%] md:h-[30%] mt-[1%]">
                        <div className="flex flex-row">
                            <Card title="95%" description="Improved team collaboration and coding standard adherence" />
                            <Card title="70%" description="Faster onboarding for new developers" />
                            <Card title="120%" description="Increased code consistency on projects" />
                            <Card title="90%" description="Accuracy in replicating the personal coding style" />
                            <Card title="60%" description="Reduction in style-related code review comments" />
                        </div>
                    </Marquee>
                    {/* <Marquee direction="left" className="h-1/2 w-full flex flex-row justify-center items-center gap-4">
            </Marquee> */}
                </div>
            </div>
            <div className="hidden md:flex h-full bg-black flex-col justify-center items-center gap-2 pb-[10%]">
                <div className="text-[1.4rem] tracking-wider text-neutral-400">Built with</div>
                <div className="flex flex-row justify-center items-center gap-4">
                    <img className="h-20 w-full" src="https://media2.dev.to/dynamic/image/width=1280,height=720,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fvqwoji22l56hjgsl6woy.jpeg" alt="" />
                    <img className="h-25 w-full" src="https://camo.githubusercontent.com/c03ad06f344539cb8595630505bcbc2cd7835f7ef829163e8a0cb6eba9f9c524/68747470733a2f2f6431746c7a696664386a646f79342e636c6f756466726f6e742e6e65742f77702d636f6e74656e742f75706c6f6164732f323032322f30322f7461696c77696e646373732d65796563617463682d393630783530342e706e67" alt="" />
                    <img className="h-26 w-full" src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/IO24_WhatsInAName_SocialShare_S96SOzG.width-1300.png" alt="" />
                    <img className="h-8 w-full" src="https://companieslogo.com/img/orig/MDB_BIG.D-96d632a9.png?t=1720244492" alt="" />
                </div>
            </div>
        </>
    )
}

const Card = ({ title, description }: CardProps) => {
    return (
        <div className="w-70 inset-shadow-2xs inset-shadow-white/40 h-30 rounded-lg text-white p-4 mx-2 border-2 border-neutral-700 flex flex-col justify-center items-start gap-2">
            <div className="flex flex-row justify-start items-start gap-2 font-semibold"><ChartNoAxesCombined className="size-8 rounded-full stroke-white" />{title}</div>
            <div className="text-neutral-400">{description}</div>
        </div>
    )
};