"use client";
import { useRouter } from "next/navigation"; // ✅ correct import
import { useEffect, useState } from "react";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { ChangeEvent } from "react";
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image";
import Orb from "@/components/Orb";
import gsap from "gsap";
import { signOut } from "next-auth/react";
import { Check } from "lucide-react";    

export default function Dashboard() {
    const [pattern, setPattern] = useState<string>("");
    const [rightBar, setrightBar] = useState(false);
    const [patternOriented, setPatternOriented] = useState(true);
    const [knowledgeThingy, setKnowledgeThingy] = useState(false);
    const [uploadingSample, setUploadingSample] = useState(false);
    const [uploadingCode, setUploadingCode] = useState(false);
    const [ultiseedhiSampleFile, setultiseedhiSampleFile] = useState(false);
    const [ultiseedhiCode, setultiseedhiCode] = useState(false);
    const [code, setCode] = useState("");
    const [help, setHelp] = useState(true);
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
            setUploadingSample(false);
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
                        // name: session.user?.name,
                        // email: session.user?.email,
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


        <div className={`h-[80%] w-[95%] md:ring-0 ring-4 ring-neutral-400 md:w-[80%] relative bg-black border-2 border-white/30 md:p-2 flex flex-row rounded-3xl overflow-hidden`}>


            <div className="absolute top-0 left-0 w-full h-full z-0 bg-black">

                {/* <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse 50% 100% at 10% 0%, rgba(226, 232, 240, 0.15), transparent 65%), #000000", }} /> */}

                {/* <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`, backgroundSize: "60px 60px", }} /> */}

                
            </div>


            {/* absolute top-0 left-[26%] md:left-[6.5%]  */}

            {/* <div className="w-[25%] mx-2 rounded-lg h-full bg-transparent border-0 border-white flex flex-col justify-start items-center gap-2">
                    <div className="w-full h-1/10 bg-neutral-800 rounded-xl"></div>
                    <div className="w-full h-9/10 bg-neutral-800 rounded-xl"></div>
                </div> */}


            <div className={`relative border-2 overflow-hidden border-neutral-900 rounded-xl bg-black w-full h-full text-white flex flex-row justify-between items-center z-10`}>

                <div className={`orb w-full h-full mt-160 md:mt-0 absolute border-0 border-white transition-all delay-100 duration-300`}>
                    <Orb
                        hoverIntensity={0.5}
                        rotateOnHover={true}
                        hue={0}
                        forceHoverState={uploadingSample || uploadingCode }
                    />
                </div>


                {
                    <div className={`opacity-0 ${help ? " hidden md:flex md:opacity-100 " : " hidden "} transition-opacity delay-100 duration-300 absolute left-[5%] pt-2 px-4 h-[50%] w-[90%] border-2 border-neutral-900 rounded-xl flex flex-col justify-around gap-2 bg-[#131313]/60 backdrop-blur-3xl md:bottom-0 md:left-0 z-20 md:w-[22%] md:m-2 top-30 md:top-10`}>
                        <div className="font-semibold text-xl">Getting Started</div>
                        <div className="font-medium text-[1.05rem]">Follow these steps: </div>
                        <div className="flex flex-col h-full w-full gap-2">
                            <div className="flex flex-row justify-start items-start gap-2">
                                <div className="text-[0.8rem]">1. Upload the sample file.</div>
                            </div>
                            <div className="flex flex-row justify-start items-start gap-2">
                                <div className="text-[0.8rem]">2. Upload the file to be formatted according to your writing style.</div>
                            </div>
                            <div className="flex flex-row justify-start items-start gap-2">
                                <div className="text-[0.8rem]">3. <span className="text-blue-400">Pattern-Oriented:</span> Prioritize user’s style over code quality.</div>
                            </div>
                            <div className="flex flex-row justify-start items-start gap-2">
                                <div className="text-[0.8rem]">4. <span className="text-blue-400">Knowledge Thingy: </span>Uses more Efficient coding practices</div>
                            </div>
                        </div>
                        {/* <div className="">Ensuring your file is properly formatted helps preserve your writing style and maintain accuracy.</div> */}

                    </div>

                }

                <div className="absolute w-full rounded-xl overflow-hidden top-0 left-0 flex flex-row justify-start z-10">
                    <button
                        type="button"
                        className="m-1 md:m-2 border-2 border-gray-700 rounded-lg px-4 py-1 text-[0.9rem] cursor-pointer hover:border-white transition-colors delay-50 duration-150hover:cursor-pointer"
                        onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
                    >
                        Log out
                    </button>

                    <button
                        type="button"
                        onClick={() => { setHelp(!help) }}
                        className="m-1 md:m-2 border-2 border-gray-700 rounded-lg px-4 py-1 text-[0.9rem] cursor-pointer hover:border-white transition-colors delay-50 duration-150hover:cursor-pointer"
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


                <div className="w-full h-[80%] bg-transparent flex flex-col mt-0 md:mt-[9%] justify-center items-center gap-0 z-10 border-0 border-red-500">

                    {/* <div className={`${rightBar ? "md:w-full md:flex" : "md:w-full md:flex"} border-0 border-teal-500 text-2xl md:text-[2.5rem] font-semibold text-center text-white transition-all delay-100 duration-300 flex justify-center items-center`}><div>{`ReFrax AI`}</div></div> */}
                    <div className={`${rightBar ? "md:w-full md:flex" : "md:w-full md:flex"} border-0 border-teal-500 pb-4 md:pb-0 text-2xl md:text-[2.5rem] mt-10 md:mt-0 font-semibold text-white text-center transition-all delay-100 duration-300 justify-center items-center`}>{`Your Personal Code Formatter`}</div>
                    <div className={` ${rightBar ? "md:w-[60%] md:flex" : "md:w-[40%] md:flex"} border-0 border-teal-500 md:pt-3 pb-6 md:pb-0 text-lg text-center font-light text-slate-200/80 transition-all delay-100 duration-300 justify-center items-center`}>{`Welcome Vipul Dubey, Start formatting your code by first providing a sample, then the code to be formatted.`}</div>




                    {
                        pattern == "" && <div className="md:absolute md:top-0 md:my-4 text-red-400 border-1 border-red-400 px-3 rounded-lg ">Please give the sample code first</div>
                    }

                    <div className="mt-4 px-2 md:p-4 relative w-full md:min-w-160 md:w-[50%] min-h-78 border-0 border-neutral-400 rounded-xl flex flex-col gap-2 justify-start items-center">


                        <label
                            htmlFor="sample-file-upload"
                            className={`w-full md:w-[80%] h-14 md:py-[1%] flex justify-center items-center text-center cursor-pointer font-semibold text-[0.8rem] border-0 ${pattern == "" || ultiseedhiSampleFile ? " text-red-400 bg-neutral-800/30 border-2 ring-0 ring-neutral-900 inset-shadow-xs inset-shadow-neutral-700 border-neutral-900 hover:border-neutral-800" : "text-white border-neutral-900 hover:border-blue-600 bg-neutral-800/40 inset-shadow-xs inset-shadow-neutral-700"} rounded-lg shadow-sm transition-colors duration-200`}
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


                        <label
                            htmlFor={pattern === "" || uploadingCode ? undefined : "file-upload"}
                            className="w-full h-13 md:w-[80%] flex justify-center px-2 items-center md:py-[1%] text-center cursor-pointer bg-neutral-800/30 inset-shadow-xs inset-shadow-neutral-700 backdrop-blur-xl text-white font-medium tracking-wide text-[0.8rem] border-2 border-neutral-900 rounded-lg shadow-sm hover:border-neutral-800 transition-colors duration-200"
                        >
                            {!ultiseedhiCode ?
                                uploadingCode ? "Analyzing...." : `Select the file`
                                : "Invalid File type"
                            }
                        </label>
                        {/* <div className="w-13 h-13 rounded-xl mx-2 border-2 border-neutral-800"></div> */}
                        <input id="file-upload" type="file" className="hidden" disabled={uploadingCode} onChange={handleCodeChange} />

                        <div className="flex flex-row w-full justify-center items-start gap-2 border-0 border-green-400" >
                            {/* <button className="inline-flex h-9 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">Pattern Oriented</button>
                            <button className="inline-flex h-9 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">Knowledge thingy</button> */}

                            {/* <div className="">
                                <label htmlFor="sample-file-upload" className="border-2 border-white w-2">Give the code</label>
                                <input className="w-2" type="text" name="" id="" />
                            </div> */}


                            <button className={`${patternOriented ? "border-1 border-blue-400" : " border-1 border-gray-700 "} w-1/2 md:w-1/4 h-10 rounded-lg px-2 md:px-4 text-[0.9rem] cursor-pointer hover:bg-neutral-900 transition-colors delay-50 duration-150 flex flex-col justify-center items-center gap-2 py-2`} onClick={() => setPatternOriented(!patternOriented)}>
                                <div>Pattern Oriented</div>
                                {/* <div className="text-neutral-700">{`Focuses on replicating user’s unique preferences, sometimes ignoring conventional coding best practices.`}</div> */}
                            </button>

                            <button className={`${knowledgeThingy ? "border-1 border-blue-400" : " border-1 border-gray-700 "} w-1/2 md:w-1/4 h-10 rounded-lg px-2 md:px-4 text-[0.9rem] cursor-pointer hover:bg-neutral-900 transition-colors delay-50 duration-150 flex flex-col justify-center items-center gap-2 py-2`} onClick={() => setKnowledgeThingy(!knowledgeThingy)}>
                                <div>Knowledge thingy</div>
                                {/* <div className="text-neutral-700">{`Implements smarter and resource-saving coding strategies to maximize efficiency and maintain high-quality performance.`}</div> */}
                            </button>
                        </div>

                    </div>


                </div>

                <button className={`z-10 mx-2 rounded-xl h-20 w-10 p-2 ring-0 ring-neutral-800 inset-shadow-sm inset-shadow-black absolute top-0 right-0 md:relative md:flex flex-row justify-center items-center text-2xl bg-neutral-900 ${rightBar ? " w-18 " : " w-10 "}`} onClick={() => { setrightBar(!rightBar) }}>
                    <Image width={500} height={500} className={`h-6 w-6 transition-all delay-50 duration-500 ${rightBar ? " rotate-180 " : ""}`} src="/backwardArrow.png" alt="" />
                </button>

                {/* rightbar for desktop*/}
                <div
                    className={`flex-col justify-start items-start relative hidden md:flex bg-black h-full transition-all delay-50 duration-500 overflow-y-auto ${rightBar ? "w-full z-1000 " : "w-0"
                        }`}
                >
                    {rightBar && (
                        <button
                            className="absolute top-0 right-0 m-2 text-white hover:cursor-pointer pr-2"
                            onClick={() => setrightBar(!rightBar)}
                        >
                            <Image width={500} height={500} className="h-8 w-8 rounded-full" src="/close.png" alt="" />
                        </button>
                    )}

                    <pre
                        className="text-white h-full w-full text-sm bg-black overflow-x-auto whitespace-pre-wrap px-4 py-2"
                    >
                        <TypingAnimation>{`${code.slice(3, -3)}`}</TypingAnimation>
                    </pre>
                </div>


                {/* rightbar for mobile*/}
                <div className={`absolute right-0 overflow-hidden md:hidden bg-black h-[100vh] transition-all duration-500 ${rightBar ? "w-full px-2 py-8 z-1000 " : "w-0 z-1000 "}`}>
                    <button className="absolute top-0 right-0 m-2 text-white hover:cursor-pointer" onClick={() => { setrightBar(!rightBar) }}>
                        <Image width={500} height={500} className="h-8 w-8" src="/close.png" alt="" />
                    </button>
                    <pre
                        className="text-white text-sm bg-[#000000] p-3 rounded-lg overflow-x-auto whitespace-pre-wrap"
                    >
                        <code className="bg-[#000000]">{code.slice(3, -3)}</code>
                    </pre>

                </div>

            </div>

        </div>

    );
}
