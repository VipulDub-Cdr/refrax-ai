"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // ✅ correct import
import { useEffect, useState } from "react";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { ChangeEvent } from "react";
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";


export default function Dashboard() {
    const { data: session, status } = useSession();
    const [pattern, setPattern] = useState<string>("");
    const [rightBar, setrightBar] = useState(false);
    const [patternOriented, setPatternOriented] = useState(true);
    const [knowledgeThingy, setKnowledgeThingy] = useState(false);
    const [uploadingSample, setUploadingSample] = useState(false);
    const [uploadingCode, setUploadingCode] = useState(false);
    const [ultiseedhiSampleFile, setultiseedhiSampleFile] = useState(false);
    const [ultiseedhiCode, setultiseedhiCode] = useState(false);
    const [code, setCode] = useState("");
    const [help, setHelp] = useState(false);
    // const [codearr, setCodearr] = useState<any>([]);

    const router = useRouter();

    useEffect(() => {
        async function fetchPattern() {
            const res = await fetch("/api/fetchPatternDB/", {
                method: "GET",
            })
            const { getpattern } = await res.json();
            // console.log(getpattern);
            setPattern(getpattern);
        }
        fetchPattern();
    }, [])


    async function handleCodeChange(e: ChangeEvent<HTMLInputElement>) {
        if (!e.target.files || e.target.files.length == 0) return;

        const file = e.target.files[0];
        setUploadingCode(true);
        setultiseedhiCode(false);

        const formData = new FormData();
        formData.append("file", file);
        formData.append("pattern", pattern);
        formData.append("patternOriented", patternOriented ? "true" : "false");
        formData.append("knowledgeThingy", knowledgeThingy ? "true" : "false");

        const res = await fetch("/api/getFormattedCode", {
            method: "POST",
            body: formData,
        });

        const { c } = await res.json();
        // console.log(c);
        if (c == "false") {
            setultiseedhiCode(true);
            setUploadingCode(false);
            return;
        }
        setUploadingCode(false);
        setrightBar(true);
        setCode(c);
    }


    async function handlefilechange(e: ChangeEvent<HTMLInputElement>) {
        if (!e.target.files || e.target.files.length == 0) return;

        const file = e.target.files[0];
        setUploadingSample(true);

        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch("/api/getpattern", {
            method: "POST",
            body: formData,
        });

        const { p } = await res.json();
        // console.log(p);
        if (p == "false") {
            setultiseedhiSampleFile(true);
            return;
        }
        setUploadingSample(false);
        setPattern(p);
    }

    useEffect(() => {
        async function PatternExistCheck() {
            if (status == "authenticated") {
                const response = await fetch("/api/pattern", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        name: session.user?.name,
                        email: session.user?.email,
                    })
                })
                const data = await response.json();
                if (data.userpattern == "") {
                    setPattern(data.userpattern);
                }
            }
        }
        PatternExistCheck();
    }, [status, pattern])

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/signin");
        }
    }, [status, router]);

    if (status === "loading") {
        return <div className="w-[100vw] h-[100vh] bg-[#0A0A0A] flex flex-col justify-center items-center gap-2">
            <Skeleton className="bg-neutral-700 w-[50%] h-[8%] md:w-[15%] md:h-[9%] rounded-lg" />
            {/* <Skeleton className="w-[85%] h-[5%] py-[4%] md:w-[30%] md:h-[6%] md:py-[1%] rounded-lg" /> */}
            <Skeleton className="bg-neutral-700 w-[85%] h-[5%] py-[4%] md:w-[30%] md:h-[6%] md:py-[1%] rounded-lg" />
            <Skeleton className="bg-neutral-700 w-[85%] h-[5%] py-[4%] md:w-[30%] md:h-[6%] md:py-[1%] rounded-lg" />
            <div className="w-full flex flex-row justify-center items-center gap-2 md:gap-3">
                <Skeleton className="bg-neutral-700 w-[28%] h-7 md:w-[8%] rounded-lg" />
                <Skeleton className="bg-neutral-700 w-[28%] h-7 md:w-[8%] rounded-lg" />
            </div>
        </div>

    }
    // else{
    //     console.log(session);
    // }

    return (


        <div className={`h-screen w-screen relative bg-black`}>


            <BackgroundRippleEffect/>

            {/* <div className="absolute top-0 left-0 w-full h-full z-0">
                </div> */}

            {/* absolute top-0 left-[26%] md:left-[6.5%]  */}

            { session ? <div className={`w-full h-full text-white flex flex-row justify-between items-center z-10 border-0 border-white`}>

                {
                    <div className={`opacity-0 ${help ? " opacity-100 " : " opacity-0 "} transition-opacity delay-100 duration-300 absolute left-[5%] pt-2 px-4 h-[45%] w-[90%] border-2 border-neutral-900 rounded-xl flex flex-col justify-around gap-2 bg-[#131313]/60 backdrop-blur-3xl md:bottom-0 md:left-0 z-20 md:w-[22%] md:m-2 top-30 md:top-10`}>
                        <div className="font-semibold text-xl">Getting Started</div>
                        <div className="font-medium text-[1.05rem]">Follow these steps: </div>
                        <div className="flex flex-col px-3 h-full w-full gap-2 md:py-3">
                            <div className="flex flex-row justify-start items-start gap-2">
                                <Image width={50} height={50} src="/tickbox.png" alt="tickbox" className="w-6 h-6" />
                                <div className="text-[1rem]">Upload the sample file.</div>
                            </div>
                            <div className="flex flex-row justify-start items-start gap-2">
                                <Image width={50} height={50} src="/tickbox.png" alt="tickbox" className="w-6 h-6" />
                                <div className="text-[1rem]">Upload the file to be formatted according to your writing style.</div>
                            </div>
                            <div className="flex flex-row justify-start items-start gap-2">
                                <Image width={50} height={50} src="/tickbox.png" alt="tickbox" className="w-6 h-6" />
                                <div className="text-[1rem]"><span className="text-blue-400">Pattern-Oriented:</span> Prioritize user’s style over code quality.</div>
                            </div>
                            <div className="flex flex-row justify-start items-start gap-2">
                                <Image width={50} height={50} src="/tickbox.png" alt="tickbox" className="w-6 h-6" />
                                <div className="text-[1rem]"><span className="text-blue-400">Knowledge Thingy: </span>Uses more Efficient coding practices</div>
                            </div>
                        </div>
                        {/* <div className="">Ensuring your file is properly formatted helps preserve your writing style and maintain accuracy.</div> */}

                    </div>

                }

                <div className="absolute top-0 left-0 flex flex-row justify-start z-10">
                    <button
                        type="button"
                        className="m-2 border-1 border-gray-700 rounded-lg px-4 py-1 text-[0.9rem] cursor-pointer hover:bg-neutral-800 transition-colors delay-50 duration-150hover:cursor-pointer"
                        onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
                    >
                        Log out
                    </button>

                    <button
                        type="button"
                        onClick={() => { setHelp(!help) }}
                        className="m-2 border-1 border-neutral-600 rounded-lg px-4 py-1 text-[0.9rem] cursor-pointer hover:bg-black/30 transition-colors delay-50 duration-150hover:cursor-pointer"
                    >
                        Help
                    </button>

                    {/* <button
                            type="button"
                            className="m-2 border-1 border-blue-800 bg-gradient-to-b from-[#297CFF] to-[#165FFC] rounded-lg px-4 py-1 text-[0.9rem] transition-colors delay-50 duration-150"
                        >
                            Upgrade
                        </button> */}


                </div>

                <div className="w-full h-[80%] flex flex-col mt-0 md:mt-[9%] justify-end items-center gap-6 z-10 border-0 border-red-500">

                    <TypingAnimation className={`${rightBar ? "md:px-[10%]" : "md:px-[30%]"} text-5xl text-white md:text-5xl text-center transition-all delay-100 duration-300`}>{`Your Personal Code Formatter`}</TypingAnimation>
                    <TypingAnimation className={` ${rightBar ? "md:w-[60%] md:flex" : "md:w-[30%] md:flex"} hidden text-lg font-light text-slate-200/80 text-center transition-all delay-100 duration-300`}>{`Welcome ${session.user?.name} start formatting your code by first providing a sample, then the code to be formatted.`}</TypingAnimation>

                    {/* <TypingAnimation className="w-[30%] text-lg font-light text-slate-200/80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque illum cumque natus modi? Vitae, odio! Est quae laborum facere totam alias voluptatum, consectetur hic iusto impedit qui quis, aliquam voluptatibus?</TypingAnimation> */}

                    {/* <div className="text-white text-[2.6rem] font-normal tracking-tight "></div> */}
                    {/* <div className="w-[61%] text-slate-300 text-[1.2rem] font-light tracking-tight text-wrap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam eos sed aspernatur laboriosam, iste architecto temporibus.</div> */}


                    {
                       pattern=="" && <div className="md:absolute md:top-0 md:my-4 text-red-400 border-1 border-red-400 px-3 rounded-lg ">Please give the sample code first</div>
                    }

                    {/* //below the description */}
                    {/* style={{
                        background: `radial-gradient(circle at top,rgba(255, 255, 255, 0.1) 0%,rgba(255, 255, 255, 0.08) 20%,rgba(0, 0, 0, 10) 60%)`,
                        }} */}
                    <div style={{
                        background: `radial-gradient(circle at top,rgba(255, 255, 255, 0.1) 0%,rgba(255, 255, 255, 0.08) 20%,rgba(0, 0, 0, 10) 60%)`,
                        }}   className="relative w-full md:w-[50vw] min-h-78 border-4 border-b-0 border-neutral-900 rounded-t-3xl bg-black">


                        <div className={`pt-6 w-full flex flex-row justify-center items-center`}>
                            <label
                                htmlFor="sample-file-upload"
                                className={`w-[85%] md:w-[60%] h-14 md:py-[1%] flex justify-center items-center text-center cursor-pointer font-semibold text-[0.8rem] border-2 ${pattern == "" || ultiseedhiSampleFile ? " text-red-400 border-red-400 hover:bg-red-500 hover:text-white" : "text-white border-neutral-900 hover:border-blue-600 bg-neutral-800/40 inset-shadow-xs inset-shadow-neutral-700"} rounded-lg shadow-sm transition-colors duration-200`}
                            >
                                {ultiseedhiSampleFile == true
                                    ? "File lacks any code" :
                                    uploadingSample == true
                                        ? "Analyzing the code ..."
                                        : pattern === ""
                                            ? "Select the sample file"
                                            : "Change the sample file"
                                }

                            </label>
                            <input id="sample-file-upload" type="file" className="hidden" disabled={uploadingSample} onChange={handlefilechange} />
                        </div>


                        <div className="my-3 w-full flex flex-row justify-center items-center">
                            <label
                                htmlFor={pattern === "" || uploadingCode ? undefined : "file-upload"}
                                className="w-[85%] h-13 md:w-[60%] flex justify-center items-center md:py-[1%] text-center cursor-pointer bg-neutral-900/40 inset-shadow-xs inset-shadow-neutral-700 backdrop-blur-xl text-white font-medium tracking-wide text-[0.8rem] border-2 border-neutral-900 rounded-lg shadow-sm hover:border-neutral-600 transition-colors duration-200"
                            >
                                {!ultiseedhiCode ?
                                    uploadingCode ? "Analyzing...." : `Select the file`
                                    : "Invalid File type"
                                }
                            </label>
                            <input id="file-upload" type="file" className="hidden" disabled={uploadingCode} onChange={handleCodeChange} />
                        </div>

                        <div className="flex flex-row justify-center items-center gap-1 md:gap-3 md:px-36 px-4" >
                            {/* <button className="inline-flex h-9 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">Pattern Oriented</button>
                            <button className="inline-flex h-9 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">Knowledge thingy</button> */}

                            {/* <div className="">
                                <label htmlFor="sample-file-upload" className="border-2 border-white w-2">Give the code</label>
                                <input className="w-2" type="text" name="" id="" />
                            </div> */}


                            <button className={`${patternOriented ? "border-1 border-blue-400" : " border-1 border-gray-700 "} w-1/2 h-40 rounded-lg px-2 md:px-4 text-[0.9rem] cursor-pointer hover:bg-neutral-900 transition-colors delay-50 duration-150 flex flex-col justify-center items-center gap-2 py-2`} onClick={() => setPatternOriented(!patternOriented)}>
                                <div>Pattern Oriented</div>
                                <div className="text-neutral-700">{`Focuses on replicating user’s unique preferences, sometimes ignoring conventional coding best practices.`}</div>
                            </button>

                            <button className={`${knowledgeThingy ? "border-1 border-blue-400" : " border-1 border-gray-700 "} w-1/2 h-40 rounded-lg px-2 md:px-4 text-[0.9rem] cursor-pointer hover:bg-neutral-900 transition-colors delay-50 duration-150 flex flex-col justify-center items-center gap-2 py-2`} onClick={() => setKnowledgeThingy(!knowledgeThingy)}>
                                <div>Knowledge thingy</div>
                                <div className="text-neutral-700">{`Implements smarter and resource-saving coding strategies to maximize efficiency and maintain high-quality performance.`}</div>
                            </button>
                        </div>

                    </div>


                </div>

                <button className={`z-10 mx-2 rounded-xl h-20 w-10 p-2 ring-0 ring-neutral-800 inset-shadow-sm inset-shadow-black absolute top-0 right-0 md:relative md:flex flex-row justify-center items-center text-2xl bg-neutral-900 ${rightBar ? " w-18 " : " w-10 "}`} onClick={() => { setrightBar(!rightBar) }}>
                    <Image width={500} height={500} className={`h-6 w-6 transition-all delay-50 duration-500 ${rightBar ? " rotate-180 " : ""}`} src="/backwardArrow.png" alt="" />
                </button>

                {/* rightbar for desktop*/}
                <div
                    className={`flex-col justify-start items-start relative hidden md:flex bg-black h-full transition-all delay-50 duration-500 overflow-y-auto ${rightBar ? "w-full px-4 py-2 z-1000 " : "w-0"
                        }`}
                >
                    {rightBar && (
                        <button
                            className="absolute top-0 right-0 m-2 text-white hover:cursor-pointer pr-6"
                            onClick={() => setrightBar(!rightBar)}
                        >
                            <Image width={500} height={500} className="h-10 w-10" src="/close.png" alt="" />
                        </button>
                    )}
                    <pre
                        className="text-white text-sm bg-[#000000] p-3 rounded-lg overflow-x-auto whitespace-pre-wrap"
                    >
                        <code><TypingAnimation>{`${code.slice(3, -3)}`}</TypingAnimation></code>
                    </pre>
                </div>


                {/* rightbar for mobile*/}
                <div className={`absolute right-0 overflow-hidden md:hidden bg-black h-[100vh] transition-all delay-50 duration-500 ${rightBar ? "w-full px-4 py-2 z-1000 " : "w-0"}`}>
                    <button className="absolute top-0 right-0 m-2 text-white hover:cursor-pointer" onClick={() => { setrightBar(!rightBar) }}>
                        <Image width={500} height={500} className="h-8 w-8" src="/close.png" alt="" />
                    </button>
                    <pre
                        className="text-white text-sm bg-[#000000] p-3 rounded-lg overflow-x-auto whitespace-pre-wrap"
                    >
                        <code className="bg-[#000000]">{code.slice(3, -3)}</code>
                    </pre>

                </div>

            </div> :

                <div className="bg-black text-white text-center">

                   Please Login First

            </div>}

        </div>

    );
}
