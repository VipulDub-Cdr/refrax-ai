import { NextRequest, NextResponse } from "next/server";
import { userModel } from "@/lib/db";
import mongoose from "mongoose";

let isConnected = false;

export async function POST(req: NextRequest) {

await mongoose.connect(process.env.MONGODB_URL!);

  const body = await req.json();
  const { name, email } = body;

  if (!name || !email) {
    return NextResponse.json({ error: "Missing name or email" }, { status: 400 });
  }

  const user = await userModel.findOne({ name, email });

  return NextResponse.json({
    userpattern: user?.pattern || null,
  });
}
