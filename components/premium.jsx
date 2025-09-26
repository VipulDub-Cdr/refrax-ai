export default function Premium() {
    return <div id="pricing" className="relative w-screen md:max-h-[50vw] h-screen flex flex-col justify-start items-center p-4 gap-2 md:mb-0 pb-4 pt-[25%] md:pt-0 text-white bg-black">
        {/* <div className="absolute top-[2%] hidden md:flex md:left-[10%] h-80 w-80 z-[-20] rounded-full bg-purple-200 -rotate-x-20 rotate-y-30"></div>
        <div className="absolute top-[80%] left-0 md:left-[20%] h-34 w-34 z-[-20] rounded-full bg-blue-200 rotate-x-20 rotate-y-30"></div>
        <div className="hidden md:flex absolute top-[2%] left-[64%] h-120 w-120 z-[-20] rounded-full bg-blue-200 rotate-x-20 rotate-y-30"></div> */}
        <div className="text-3xl text-center md:text-[2.5rem] pt-[8%] md:pt-[5%] font-normal">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400 font-sans">right plan</span> can change your work life</div>
        <div className="text-lg/6 text-neutral-400 text-center md:px-[30%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatum repellat?</div>
        <div className="w-full h-full flex flex-col justify-center items-center md:flex-row md:px-[15%]">
            <div className="flex flex-col m-4 justify-start items-center h-[25%] md:h-[80%] w-[85%] border-2 border-neutral-600 rounded-xl shadow-xl hover:border-neutral-400 transition-colors delay-100 duration-200">
                <div className="w-full h-full md:h-[30%] overflow-hidden flex flex-col justify-start items-start p-4 rounded-t-lg">
                    <div className="text-lg text-neutral-500 font-semibold">Basic</div>
                    <div className="text-sm text-neutral-500">Get limited access to all features of Refrax AI for 14 days.</div>
                </div>
                <div className="hidden w-full h-full md:flex flex-col justify-start items-start p-4">
                    <div className="text-[2rem] font-semibold text-start pb-2 text-white">$0<span className="text-[1rem] text-neutral-500">/month</span></div>
                    <div className="w-full pb-4 flex flex-row justify-center items-center">
                        <button className="w-full h-12 rounded-xl border-2 text-neutral-700">Get 14 days free trial</button>
                    </div>
                    <div className="flex flex-row gap-2">
                        <img className=" h-6 w-6" src="https://img.icons8.com/?size=100&id=pzHMd4OWQnT1&format=png&color=000000" alt="" />
                        <div className="text-[1rem] text-neutral-400">Limited sample uploads</div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <img className=" h-6 w-6" src="https://img.icons8.com/?size=100&id=pzHMd4OWQnT1&format=png&color=000000" alt="" />
                        <div className="text-[1rem] text-neutral-400">10 Code analysis per day</div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <img className=" h-6 w-6" src="https://img.icons8.com/?size=100&id=pzHMd4OWQnT1&format=png&color=000000" alt="" />
                        <div className="text-[1rem] text-neutral-400">Knowledge Mode</div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <img className=" h-6 w-6" src="https://img.icons8.com/?size=100&id=pzHMd4OWQnT1&format=png&color=000000" alt="" />
                        <div className="text-[1rem] text-neutral-400">Pattern Oriented Mode</div>
                    </div>
                </div>
            </div>
            <div className="flex md:scale-110 flex-col m-4 justify-start items-center h-[25%] md:h-[80%] w-[85%] border-2 border-white/60 rounded-xl hover:border-blue-300 shadow-xl transition-colors delay-100 duration-200" >
                <div className="w-full h-full md:h-[30%] overflow-hidden flex flex-col justify-start items-start p-4 rounded-t-lg">
                    <div className="text-lg text-blue-500 font-semibold">Premium</div>
                    <div className="text-sm text-neutral-500">Get extended access to all features of Refrax AI with the premium+ plan.</div>
                </div>
                <div className="w-full h-full hidden md:flex flex-col justify-start items-start p-4">
                    <div className="text-[2rem] font-semibold text-start pb-2 text-white">$49<span className="text-[1rem] text-neutral-500">/month</span></div>
                    <div className="w-full pb-4 flex flex-row justify-center items-center">
                        <button className="w-full h-12 rounded-xl border-2 text-white hover:bg-blue-500 cursor-pointer transition delay-50 duration-200 hover:ring-2 ring-blue-600 hover:text-white">Get 14 days free trial</button>
                    </div>
                    <div className="flex flex-row gap-2">
                        <img className=" h-6 w-6" src="https://img.icons8.com/?size=100&id=pzHMd4OWQnT1&format=png&color=000000" alt="" />
                        <div className="text-[1rem] text-neutral-400">Expanded sample uploads</div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <img className=" h-6 w-6" src="https://img.icons8.com/?size=100&id=pzHMd4OWQnT1&format=png&color=000000" alt="" />
                        <div className="text-[1rem] text-neutral-400">Expanded Code analysis</div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <img className=" h-6 w-6" src="https://img.icons8.com/?size=100&id=pzHMd4OWQnT1&format=png&color=000000" alt="" />
                        <div className="text-[1rem] text-neutral-400">Pattern Oriented Mode</div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <img className=" h-6 w-6" src="https://img.icons8.com/?size=100&id=pzHMd4OWQnT1&format=png&color=000000" alt="" />
                        <div className="text-[1rem] text-neutral-400">Knowledge mode</div>
                    </div>
                    
                </div>
            </div>
            <div className="flex flex-col m-4 justify-start items-center h-[25%] md:h-[80%] w-[85%] border-2 border-neutral-600 rounded-xl hover:border-yellow-400/60 shadow-xl transition-colors delay-100 duration-200">
                <div className="w-full  h-full md:h-[25%] overflow-hidden flex flex-col justify-start items-start p-4 rounded-t-lg">
                    <div className="text-lg text-yellow-500 font-semibold">Premium Plus</div>
                    <div className="text-sm text-neutral-500">Get unlimited access to all features of Refrax AI with the premium+ plan.</div>
                </div>
                <div className="hidden md:flex w-full h-full flex-col justify-start items-start p-4">
                    <div className="text-[2rem] font-semibold text-start pb-2 text-white">$99<span className="text-[1rem] text-neutral-500">/month</span></div>
                    <div className="w-full pb-4 flex flex-row justify-center items-center">
                        <button className="w-full h-12 rounded-xl border-2  text-neutral-4  00 hover:bg-yellow-500 cursor-pointer transition delay-50 duration-200 hover:ring-2 hover:ring-yellow-600">Unlimited Access</button>
                    </div>
                    <div className="flex flex-row gap-2">
                        <img className=" h-6 w-6" src="https://img.icons8.com/?size=100&id=pzHMd4OWQnT1&format=png&color=000000" alt="" />
                        <div className="text-[1rem] text-neutral-400">Unlimited Sample uploads</div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <img className=" h-6 w-6" src="https://img.icons8.com/?size=100&id=pzHMd4OWQnT1&format=png&color=000000" alt="" />
                        <div className="text-[1rem] text-neutral-400">Unlimited Code analysis.</div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <img className=" h-6 w-6" src="https://img.icons8.com/?size=100&id=pzHMd4OWQnT1&format=png&color=000000" alt="" />
                        <div className="text-[1rem] text-neutral-400">Pattern Oriented Mode</div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <img className=" h-6 w-6" src="https://img.icons8.com/?size=100&id=pzHMd4OWQnT1&format=png&color=000000" alt="" />
                        <div className="text-[1rem] text-neutral-400">Knowledge mode</div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <img className=" h-6 w-6" src="https://img.icons8.com/?size=100&id=pzHMd4OWQnT1&format=png&color=000000" alt="" />
                        <div className="text-[1rem] text-neutral-400">Multiple sample uploads.</div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
}