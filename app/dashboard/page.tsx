"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // ✅ correct import
import { useEffect, useState } from "react";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { ChangeEvent } from "react";
import { Skeleton } from "@/components/ui/skeleton"
import {CardSpotlightDemo} from "@/components/cardspotlightDemo";
import Image from "next/image";

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


        <div className={`bg-[#0A0A0A] h-[100vh] w-[100vw]`}>


            {session ?
                //  absolute top-0 left-[26%] md:left-[6.5%] 

                <div className={`w-full h-full text-white flex flex-row justify-between items-center`}>

                    {
                        help &&
                        <div className="absolute bottom-0 left-0 m-2 border-2 h-40 w-40">Help</div>
                    }

                    <div className="absolute top-0 left-0 flex flex-row justify-start">
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
                            className="m-2 border-1 border-green-800 bg-gradient-to-b from-[#40b663] to-[#0a9877] rounded-lg px-4 py-1 text-[0.9rem] cursor-pointer hover:bg-neutral-800 transition-colors delay-50 duration-150hover:cursor-pointer"
                        >
                            Help
                        </button>

                        <button
                            type="button"
                            className="m-2 border-1 border-blue-800 bg-gradient-to-b from-[#297CFF] to-[#165FFC] rounded-lg px-4 py-1 text-[0.9rem] transition-colors delay-50 duration-150"
                        >
                            Upgrade
                        </button>


                    </div>

                    <div className="w-full h-[80%] flex flex-col justify-center items-center gap-2">

                        <TypingAnimation className="text-5xl">{`ReFrax AI`}</TypingAnimation>
                        <TypingAnimation className="text-lg font-light text-slate-200/80">{`Welcome ${session.user?.name}`}</TypingAnimation>

                        {/* <TypingAnimation className="w-[30%] text-lg font-light text-slate-200/80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque illum cumque natus modi? Vitae, odio! Est quae laborum facere totam alias voluptatum, consectetur hic iusto impedit qui quis, aliquam voluptatibus?</TypingAnimation> */}

                        {/* <div className="text-white text-[2.6rem] font-normal tracking-tight "></div> */}
                        {/* <div className="w-[61%] text-slate-300 text-[1.2rem] font-light tracking-tight text-wrap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam eos sed aspernatur laboriosam, iste architecto temporibus.</div> */}


                        {
                            pattern == "" && <div className="text-red-400 border-1 border-red-400 px-3 rounded-lg ">Please give the sample code first</div>
                        }


                        <div className={`mt-2 w-full flex flex-row justify-center items-center`}>
                            <label
                                htmlFor="sample-file-upload"
                                className={`w-[85%] h-full py-[4%] md:w-[30%] md:h-full md:py-[1%] text-center cursor-pointer font-semibold text-[0.8rem] border-1 ${pattern == "" || ultiseedhiSampleFile ? " text-red-400 border-red-400 hover:bg-red-500 hover:text-white" : "text-blue-500 border-blue-300 hover:bg-[#212325] "} rounded-lg shadow-sm transition-colors duration-200`}
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
                                className="w-[85%] h-full py-[4%] md:w-[30%] md:h-full md:py-[1%] text-center cursor-pointer bg-[#131415] text-slate-200/80 font-semibold text-[0.8rem] border border-neutral-700 rounded-lg shadow-sm hover:bg-[#2a2c2f] transition-colors duration-200"
                            >
                                {!ultiseedhiCode ?
                                    uploadingCode ? "Analyzing...." : `Select the file`
                                    : "Invalid File type"
                                }
                            </label>
                            <input id="file-upload" type="file" className="hidden" disabled={uploadingCode} onChange={handleCodeChange} />
                        </div>

                        <div className="flex flex-row justify-center items-center gap-1 md:gap-3">
                            {/* <button className="inline-flex h-9 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">Pattern Oriented</button>
                            <button className="inline-flex h-9 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">Knowledge thingy</button> */}

                            {/* <div className="">
                                <label htmlFor="sample-file-upload" className="border-2 border-white w-2">Give the code</label>
                                <input className="w-2" type="text" name="" id="" />
                            </div> */}


                            <button className={`${patternOriented ? "border-1 border-blue-400" : " border-1 border-gray-700 "} rounded-lg px-4 py-1 text-[0.9rem] cursor-pointer hover:bg-neutral-900 transition-colors delay-50 duration-150 flex flex-row justify-between items-center gap-2`} onClick={() => setPatternOriented(!patternOriented)}>
                                <div>Pattern Oriented</div>
                            </button>

                            <button className={`${knowledgeThingy ? "border-1 border-blue-400" : " border-1 border-gray-700 "} rounded-lg px-4 py-1 text-[0.9rem] cursor-pointer hover:bg-neutral-900 transition-colors delay-50 duration-150`} onClick={() => setKnowledgeThingy(!knowledgeThingy)}>Knowledge thingy</button>
                        </div>


                    </div>

                    <button className={`rounded-l-lg h-20 absolute top-0 right-0 md:relative md:flex flex-row justify-center items-center text-2xl bg-neutral-800 ${rightBar ? " w-18 " : " w-10 "}`} onClick={() => { setrightBar(!rightBar) }}>
                        <Image width={500} height={500} className={`h-8 w-8 transition-all delay-50 duration-500 ${rightBar ? " rotate-180 " : ""}`} src="/backwardArrow.png" alt="" />
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

                <div>

                    session is not there

                </div>}

        </div>

    );
}
