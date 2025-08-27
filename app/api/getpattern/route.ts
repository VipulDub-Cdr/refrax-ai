import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { userModel } from "@/lib/db";
import { connect } from "mongoose";
import { getServerSession } from "next-auth";

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = ai.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession();

    if (!session) {
      return NextResponse.json(
        { error: "You are not logged in" },
        { status: 401 }
      );
    }

    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const fileContent = buffer.toString("utf-8");

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `I will give you the content of the coding file. If the file doesn't contain any code then return only the word "false". Otherwise analyze the coding pattern, preferences, order, and style. Here is the content: ${fileContent}`,
            },
          ],
        },
      ],
    });

    const p = result.response.text();
    // console.log("AI result:", p);

    await connect(process.env.MONGODB_URL!);

    const userObj = await userModel.findOne({
      name: session.user?.name,
      email: session.user?.email,
    });

    if (!userObj) {
      return NextResponse.json(
        { error: "User not set in MongoDB" },
        { status: 404 }
      );
    }

    if(p!="false"){
        await userModel.updateOne(
            { email: session.user?.email },
            { $set: { pattern: p } }
        );
    }

    const userObj2 = await userModel.findOne({
      name: session.user?.name,
      email: session.user?.email,
    });

    console.log(userObj2);


    return NextResponse.json({ 
         p 
    });
  } catch (err) {
    console.error("Error in POST:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
