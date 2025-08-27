import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
// const model = genAI.getGenerativeModel({
//   model: "gemini-2.5-flash",
// });

// export async function POST(req: Request) {
//     const { prompt } = await req.json();
    
//     const result = await model.generateContent(prompt);  
    
//     const respondedWith = result.response.text().split("\n");  
    
//     return Response.json({ respondedWith });
// }



// 1. GoogleGenerativeAI
// 2. generateContent

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "")
const model = ai.getGenerativeModel({
    model:"gemini-2.5-flash"
})

export async function POST(req: NextRequest){
    const {prompt} = await req.json();

    const result = await model.generateContent({
        contents:[{
            role:'model',
            parts:[
                {text:`Hi how can i help you?`}
                // { inlineData: { mimeType: "image/png", data: base64Image } }
            ]
        },{
            role:'user',
            parts:[
                {text:`${prompt}`}
            ]
        }
    ]
    });

    const x = result.response.text();
    
    return NextResponse.json({x})
}