import { NextResponse } from "next/server";
import {connect} from "mongoose"
import { userModel } from "@/lib/db";
import { getServerSession } from "next-auth";

export async function GET(){

        const session = await getServerSession();
        if(!session){
            return NextResponse.json(
                    {error: "You are not logged in"},
                    {status: 401}
            )
        }
        await connect(process.env.MONGODB_URL!);

        const userObj = await userModel.findOne({name: session.user?.name, email: session.user?.email});

        if(!userObj){
            return NextResponse.json({error:"User not found"},{status:404})
        }

        const pattern = userObj.pattern;

        return NextResponse.json({
            "getpattern": pattern
        })

}   
