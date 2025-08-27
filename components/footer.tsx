import Link from "next/link"

export default function Footer() {
    return (<div className="h-[30vh] w-[100vw] bg-[#F17144} text-black bg-[#F17144] rounded-t-3xl md:mt-15">

        <div className="flex flex-row h-full p-2">

            <div className="w-full flex flex-col md:flex-row justify-start items-start gap-3 md:gap-10 m-4">
                <Link href="#first-page">
                    <button className="cursor-pointer hover:underline hover:underline-offset-2 text-xl text-white font-semibold">Home</button>
                </Link>
                <Link href="#second-page">
                    <button className="cursor-pointer hover:underline hover:underline-offset-2 text-xl text-white font-semibold">Demo</button>
                </Link>
                <Link href="#third-page">
                    <button className="cursor-pointer hover:underline hover:underline-offset-2 text-xl text-white font-semibold">Impact</button>
                </Link>
                <Link href="#fourth-page">
                    <button className="cursor-pointer hover:underline hover:underline-offset-2 text-xl text-white font-semibold">FAQs</button>
                </Link>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-start items-start md:justify-end md:items-start m-4 gap-4">
                <a className="flex flex-row justify-center items-center gap-2 text-sm md:text-lg text-white" href="http://" target="_blank" rel="noopener noreferrer">
                    <span className="hover:text-neutral-300 mt-1"><span className="font-bold">Contact: </span>vipuldubey041@gmail.com</span>
                    {/* <img className="h-10 w-10 cursor-pointer" src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" alt="" /> */}
                </a>
                <a href="http://www.linkedin.com/in/vipul-dubey-541629256" target="_blank" rel="noopener noreferrer">
                    <img className="h-10 w-10 cursor-pointer" src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="" />
                </a>
            </div>

        </div>

    </div>)
}