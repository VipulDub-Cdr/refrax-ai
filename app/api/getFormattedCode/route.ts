import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getServerSession } from "next-auth";

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = ai.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export async function POST(req: NextRequest){

    const session = getServerSession();

    if (!session) {
      return NextResponse.json(
        { error: "You are not logged in" },
        { status: 401 }
      );
    }
    
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const pattern = formData.get("pattern")?.toString() || "";
    const patternOriented = formData.get("patternOriented") === "true";
    const knowledgeThingy = formData.get("knowledgeThingy") === "true"; 


    if (!file) {
          return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }
    
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const codeContent = buffer.toString("utf-8");



    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `I will give you a report (which describes how the user writes code) and a codeContent. Follow these steps after considering both the report and the code: Here is the report : ${pattern} and here is the codeContent: ${codeContent}
                1. If codeContent does not contain any code or contains any unwanted elements or the codeContent doesn't match with the type of coding file which is defined in report, return only a single word: false.
                2.If codeContent contains code, generate code that closely resembles the user’s coding style as described in the report, without altering the underlying logic or intuition of the code. ${patternOriented ? "Do not focus on efficiency or best practices; instead, prioritize generating code that closely matches the user’s writing style." : "Focus on generating code that is both very close to the user’s writing style and also follows best coding practices."} ${knowledgeThingy ? "" : "Use only the resources that are familiar to the user. You may introduce new elements only if necessary to maintain correct logic or to prevent the code from deviating from the originality of the intuition."}`,
            },
          ],
        },
      ],
    });
    
    const c = result.response.text();

    return NextResponse.json({
        c
    })
}