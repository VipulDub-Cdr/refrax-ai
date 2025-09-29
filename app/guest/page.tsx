"use client";
import { useState, useEffect, ChangeEvent } from "react";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CodeBlock } from "@/components/ui/code-block";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Dashboard() {
  const [pattern, setPattern] = useState<string>("");
  const [rightBar, setRightBar] = useState(false);
  const [patternOriented, setPatternOriented] = useState(true);
  const [knowledgeThingy, setKnowledgeThingy] = useState(false);
  const [uploadingSample, setUploadingSample] = useState(false);
  const [uploadingCode, setUploadingCode] = useState(false);
  const [sampleUploaded, setSampleUploaded] = useState(false);
  const [codeUploaded, setCodeUploaded] = useState(false);
  const [code, setCode] = useState("");
  const [ultiseedhiSampleFile, setUltiseedhiSampleFile] = useState(false);
  const [ultiseedhiCode, setUltiseedhiCode] = useState(false);
  const [help, setHelp] = useState(false);

  const router = useRouter();

  async function handleCodeChange(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files || e.target.files.length === 0 || codeUploaded) return;

    const file = e.target.files[0];
    setUploadingCode(true);
    setUltiseedhiCode(false);

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
    if (c == "false") {
      setUltiseedhiCode(true);
      setUploadingCode(false);
      return;
    }

    setCode(c);
    setCodeUploaded(true);
    setUploadingCode(false);
    setRightBar(true);
  }

  async function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files || e.target.files.length === 0 || sampleUploaded) return;

    const file = e.target.files[0];
    setUploadingSample(true);

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/getpattern", {
      method: "POST",
      body: formData,
    });

    const { p } = await res.json();
    if (p == "false") {
      setUltiseedhiSampleFile(true);
      return;
    }

    setPattern(p);
    setSampleUploaded(true);
    setUploadingSample(false);
  }

  return (

    <div>Sample Guest page</div>
    // <div className={`h-screen w-screen relative bg-black`}>
    //   <div className="absolute top-0 left-0 w-full h-full z-0">
    //     <div
    //       className="absolute inset-0 z-0"
    //       style={{
    //         background:
    //           "radial-gradient(ellipse 50% 100% at 10% 0%, rgba(226, 232, 240, 0.15), transparent 65%), #000000",
    //       }}
    //     />
    //     <div
    //       className="absolute inset-0 opacity-30"
    //       style={{
    //         backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    //                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
    //         backgroundSize: "60px 60px",
    //       }}
    //     />
    //   </div>

    //   <div className="w-full h-full text-white flex flex-row justify-between items-center z-10">
    //     {help && (
    //       <div className="absolute left-[5%] pt-2 px-4 h-[45%] w-[90%] border-2 border-neutral-900 rounded-xl flex flex-col justify-around gap-2 bg-[#131313]/60 backdrop-blur-3xl md:bottom-0 md:left-0 z-20 md:w-[22%] md:m-2 top-30 md:top-10">
    //         <div className="font-semibold text-xl">Getting Started</div>
    //         <div className="font-medium text-[1.05rem]">Follow these steps: </div>
    //         <div className="flex flex-col px-3 h-full w-full gap-2 md:py-3">
    //           <div className="flex flex-row gap-2">
    //             <Image src="/tickbox.png" width={24} height={24} alt="tickbox" />
    //             <div>Upload the sample file.</div>
    //           </div>
    //           <div className="flex flex-row gap-2">
    //             <Image className="h-1/2" src="/tickbox.png" width={24} height={24} alt="tickbox" />
    //             <div>Upload the file to be formatted according to your style.</div>
    //           </div>
    //           <div className="flex flex-row gap-2">
    //             <Image className="h-1/2" src="/tickbox.png" width={24} height={24} alt="tickbox" />
    //             <div>
    //               <span className="text-blue-400">Pattern-Oriented:</span> Prioritize
    //               style over code quality.
    //             </div>
    //           </div>
    //           <div className="flex flex-row gap-2">
    //             <Image className="h-1/2" src="/tickbox.png" width={24} height={24} alt="tickbox" />
    //             <div>
    //               <span className="text-blue-400">Knowledge Thingy:</span> Uses more
    //               efficient practices.
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     )}

    //     <div className="absolute top-0 left-0 flex flex-row z-10">
    //       <button
    //         type="button"
    //         onClick={() => setHelp(!help)}
    //         className="m-2 border-1 border-neutral-600 rounded-lg px-4 py-1 text-[0.9rem] cursor-pointer hover:bg-black/30 transition-colors"
    //       >
    //         Help
    //       </button>
    //       <button
    //         type="button"
    //         onClick={()=>router.push("/signin")}
    //         className="m-2 border-1 border-neutral-600 rounded-lg px-4 py-1 text-[0.9rem] cursor-pointer hover:bg-black/30 transition-colors"
    //       >
    //         Sign up
    //       </button>
    //       <button
    //         type="button"
    //         className="m-2 border-1 border-neutral-600 rounded-lg px-4 py-1 text-[0.9rem] transition-colors text-red-400"
    //       >
    //        {sampleUploaded && codeUploaded ? "0 upload left" : "Guest users are limited to a single upload"}
    //       </button>
    //     </div>

    //     <div className="w-full h-[80%] flex flex-col mt-0 md:mt-[9%] justify-end items-center gap-6 z-10">
    //       <TypingAnimation className="text-4xl text-white md:text-5xl text-center w-100 md:w-120">
    //         {`Your Personal Code Formatter`}
    //       </TypingAnimation>
    //       <TypingAnimation className="hidden md:flex md:w-[40%] text-lg font-light text-slate-200/80 text-center">
    //         Welcome Guest — start formatting your code by first providing a sample,
    //         then the code to be formatted. (Only once)
    //       </TypingAnimation>

    //       {pattern == "" && (
    //         <div className="md:absolute md:top-0 md:my-3 text-red-400 border-1 border-red-400 px-3 rounded-lg">
    //           Please upload the sample code first
    //         </div>
    //       )}

    //       <div
    //         style={{
    //           background: `radial-gradient(circle at top,rgba(255,255,255,0.1) 0%,rgba(255,255,255,0.08) 20%,rgba(0,0,0,10) 60%)`,
    //         }}
    //         className="relative w-full md:w-[50vw] min-h-78 border-4 border-b-0 border-neutral-900 rounded-t-3xl bg-black"
    //       >
    //         <div className="pt-6 w-full flex flex-row justify-center items-center border-0 border-white">
    //           <label
    //             htmlFor="sample-file-upload"
    //             className={`w-[85%] md:w-[60%] h-14 flex justify-center items-center text-center font-semibold text-[0.8rem] border-2 bg-neutral-900 inset-shadow-sm inset-shadow-neutral-800 rounded-lg shadow-sm transition-colors duration-200 cursor-pointer ${
    //               ultiseedhiSampleFile
    //                 ? "text-red-400 border-red-400"
    //                 : uploadingSample
    //                 ? "text-white border-blue-400"
    //                 : sampleUploaded
    //                 ? "bg-neutral-900 text-white border-blue-600"
    //                 : "text-white border-neutral-900 hover:border-blue-600 bg-neutral-800/40"
    //             }`}
    //           >
    //             {ultiseedhiSampleFile
    //               ? "File lacks any code"
    //               : uploadingSample
    //               ? "Analyzing sample ..."
    //               : sampleUploaded
    //               ? "Sample already uploaded"
    //               : "Select the sample file"}
    //           </label>
    //           <input
    //             id="sample-file-upload"
    //             type="file"
    //             className="hidden"
    //             disabled={uploadingSample || sampleUploaded}
    //             onChange={handleFileChange}
    //           />
    //         </div>



    //         <div className="my-3 w-full flex flex-row justify-center items-center border-0 border-red-500 ">
    //           <label
    //             htmlFor="file-upload"
    //             className="w-[85%] md:w-[60%] flex justify-center items-center h-13 text-center font-medium tracking-wide text-[0.8rem] border-2 border-neutral-900 rounded-lg shadow-sm text-white bg-neutral-900 inset-shadow-sm inset-shadow-neutral-800 hover:cursor-pointer"
    //           >
    //             {ultiseedhiCode
    //               ? "Invalid File type"
    //               : uploadingCode
    //               ? "Analyzing code..."
    //               : codeUploaded
    //               ? "Code already uploaded"
    //               : "Select the file"}
    //           </label>
    //           <input
    //             id="file-upload"
    //             type="file"
    //             className="hidden"
    //             disabled={uploadingCode || codeUploaded || pattern === ""}
    //             onChange={handleCodeChange}
    //           />
    //         </div>

    //         <div className="w-full border-0 border-white flex flex-row justify-center items-center gap-4">
    //             <div className="w-[40%] md:w-[29%] border-2 border-neutral-800 h-36 p-2 rounded-xl flex flex-col justify-center items-center text-lg text-neutral-400 hover:cursor-not-allowed">
    //                 <div>Pattern Oriented</div>
    //                 <div className="text-sm">(Not available in guest mode)</div>
    //             </div>
    //             <div className="w-[40%] md:w-[29%] border-2 border-neutral-800 h-36 p-2 rounded-xl flex flex-col justify-center items-center text-lg text-neutral-400 hover:cursor-not-allowed">
    //                 <div>Knowledge mode</div>
    //                 <div className="text-sm">(Not available in guest mode)</div>
    //             </div>
                
    //         </div>
    //       </div>
    //     </div>

    //     <div
    //       className={`absolute md:relative z-100 right-0 bg-black h-[100vh] transition-all duration-500 ${
    //         rightBar ? "w-full md:w-[70%] px-4 py-2" : "w-0"
    //       }`}
    //     >
    //       {rightBar && (
    //         <>
    //           <button
    //             className="absolute top-2 right-0 m-2 text-white z-10"
    //             onClick={() => setRightBar(false)}
    //           >
    //             <Image
    //               src="/close.png"
    //               width={32}
    //               height={32}
    //               alt="close"
    //               className="h-8 w-8"
    //             />
    //           </button>
    //           <pre className="text-white text-sm bg-[#000000] p-0 rounded-lg overflow-x-auto whitespace-pre-wrap">
    //             <code><TypingAnimation>{`${code.slice(3, -3)}`}</TypingAnimation></code>
    //           </pre>
    //         </>
    //       )}
    //     </div>

    //     {/* right-center toggle button */}
    //     <button
    //       onClick={() => setRightBar(!rightBar)}
    //       className="fixed right-0 top-[17%] md:top-1/2 -translate-y-1/2 border-2 mx-1 border-neutral-950 bg-neutral-900  text-white px-2 py-6 rounded-md shadow-md z-30"
    //     >
    //       {rightBar ? <ArrowRight/> : <ArrowLeft/>}
    //     </button>
    //   </div>
    // </div>
  );
}
