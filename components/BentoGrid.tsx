export function BentoGrid() {
    return (
        <div className="flex h-screen w-[70vw] items-center justify-center">
            <div className="flex h-[65%] w-full flex-row gap-5 py-2">

                <div className="flex w-[35%] flex-col items-center justify-center gap-4">
                    <div className="h-1/2 w-full rounded-xl border-4 border-neutral-300 ring-6 ring-neutral-400 flex flex-col justify-end p-2 bg-white">
                        <div className="text-neutral-600 font-semibold text-[1.2rem]">Your Code, Your Style</div>
                        <div className="text-neutral-500 text-[1.1rem]">Refrax AI doesn’t just reformat — it adapts to how you write.</div>
                    </div>
                    <div className="h-1/2 w-full rounded-xl border-4 border-neutral-300 ring-6 ring-neutral-400  flex flex-col justify-end items-start p-2 bg-white">
                        <div className="text-neutral-600 font-semibold text-[1.2rem]">AI That Understands Your Patterns</div>
                        <div className="text-neutral-500 text-[1.1rem]">Our engine learns from your past commits and projects, so formatting feels natural.</div>
                    </div>

                </div>


                <div className="relative w-[30%] rounded-xl border-4 border-neutral-300 ring-6 ring-neutral-400 p-2 flex flex-col justify-end items-start bg-white">
                        <img className="absolute top-2 left-2 h-10 w-10 border-2 rounded-lg bg-white" src="https://img.icons8.com/?size=100&id=eG3DOe0lmw80&format=png&color=000000" alt="" />
                        <div className="text-neutral-600 font-semibold text-[1.2rem]">Preserve Logic, Enhance Readability</div>
                        <div className="text-neutral-500 text-[1.1rem]">No logic changes. Just clean, consistent structure that makes your code easy to read, review, and maintain.</div>
                </div>

                <div className="flex w-[35%] flex-col items-center justify-center gap-4 ">
                    <div className="h-1/2 w-full rounded-xl border-4 border-neutral-300 ring-6 ring-neutral-400 flex flex-col justify-end items-start p-2 bg-white">
                        <div className="text-neutral-600 font-semibold text-[1.2rem]">Smarter Than Traditional Linters</div>
                        <div className="text-neutral-500 text-[1.1rem]">Refrax AI blends style awareness with semantic understanding for better results.</div>
                    </div>
                    <div className="h-1/2 w-full rounded-xl border-4 border-neutral-300 ring-6 ring-neutral-400 flex flex-col justify-end items-start p-2 bg-white">
                        <div className="text-neutral-600 font-semibold text-[1.2rem]">Refactor Without Losing Identity</div>
                        <div className="text-neutral-500 text-[1.1rem]">Whether it’s a large-scale refactor or a quick snippet cleanup, your personal touch remains intact.</div>
                    </div>
                </div>

            </div>

        </div>

    )
}