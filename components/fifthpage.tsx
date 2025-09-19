import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function FifthPage() {
    return (
        <div id="faqs" className="w-screen h-full bg-black md:pt-30" style={{
            background: "#000000",
            backgroundImage: `
            linear-gradient(to right, rgba(75, 85, 99, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(75, 85, 99, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            }}>

            <div className="text-[2rem]/10 text-white text-center md:text-[3rem] px-2 md:ml-7 flex flex-row justify-center items-center font-semibold">Frequently Asked Questions</div>
            <div className="text-[1.2rem] text-neutral-400 px-2 md:ml-7 flex flex-row justify-center items-center text-center md:pt-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do</div>

            <Accordion
                type="single"
                collapsible
                className="w-screen flex flex-col justify-center items-center mt-4 text-neutral-400"
                defaultValue="item-1"
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger>What is Refrax AI?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            Refrax AI is an advanced code formatting tool designed to understand and replicate your unique coding style. Unlike traditional formatters that enforce rigid rules, Refrax AI tailors the output to your personal patterns, spacing, indentation, naming conventions, and overall coding style. It ensures your code not only remains logically correct but also consistently aligns with the way you naturally write code.
                        </p>

                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>How does Refrax AI work?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            Refrax AI operates by analyzing two main inputs: a coding report, which describes how you typically write code, and the actual code content you want formatted. It intelligently compares patterns, spacing, and style preferences from the report, then generates code that mirrors your style closely. It uses advanced multi-model processing to consider multiple formatting possibilities, ensuring the output is as faithful to your style as possible without altering functionality or logic.
                        </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>Can Refrax AI follow best coding practices?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            Yes. Refrax AI provides flexibility in prioritization. You can choose to have it focus strictly on replicating your style, or balance style adherence with widely accepted coding best practices. This means you can maintain your personal style while still producing clean, readable, and maintainable code. The AI ensures that logic remains intact and only introduces modifications that improve clarity or adhere to coding conventions when requested.
                        </p>
                    </AccordionContent>
                </AccordionItem>


                <AccordionItem value="item-4">
                    <AccordionTrigger>What types of code can Refrax AI format?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            Refrax AI supports multiple programming languages and file types, provided the content matches the type defined in your coding report. It can process code files like JavaScript, TypeScript, Python, HTML, CSS, and more, depending on the configuration. If the uploaded code does not contain valid code, contains extraneous or unsupported elements, or doesn’t match the expected type, Refrax AI will return a single-word result: “false,” signaling invalid input. This ensures precision and avoids unintended modifications.
                        </p>
                    </AccordionContent>
                </AccordionItem>


                <AccordionItem value="item-5">
                    <AccordionTrigger>Is Refrax AI easy to use?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            Absolutely. Refrax AI is built with a clean, minimalist, and responsive user interface, designed for developers of all skill levels. The process is straightforward: upload your coding report and code file, let the AI analyze and process the data, then preview or download the reformatted code. The UI is fully responsive, working seamlessly across desktops, tablets, and mobile devices, ensuring a smooth experience without overwhelming options or unnecessary complexity.
                        </p>
                    </AccordionContent>
                </AccordionItem>


                <AccordionItem value="item-5">
                    <AccordionTrigger>Will Refrax AI change my code logic?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            No. Refrax AI is designed to preserve the underlying logic and functional behavior of your code. Its focus is on formatting, style consistency, and readability, not altering algorithms or execution. Even when applying best practices or style adjustments, the AI ensures that the code’s original logic, intention, and functional correctness remain intact, giving developers confidence that the output is safe to integrate into existing projects.
                        </p>
                    </AccordionContent>
                </AccordionItem>


                <AccordionItem value="item-6">
                    <AccordionTrigger>Can I use Refrax AI for team coding standards?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            Yes. Refrax AI is ideal for teams looking to maintain consistent coding standards. By providing a shared coding report, team members can have their code automatically formatted according to the agreed-upon style guidelines, while still accommodating individual coding habits when necessary. This ensures uniformity across a project without stifling personal style, making code easier to read, review, and maintain across multiple developers.
                        </p>
                    </AccordionContent>
                </AccordionItem>

            </Accordion>

        </div>
    )
}