import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { userModel } from "@/lib/db";
import { connect } from "mongoose";
const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async redirect() {
      return "/dashboard";
    },
    async signIn({user}){

      await connect(process.env.MONGODB_URL!) 

      const existingUser = await userModel.findOne({name: user.name, email: user.email})

      if(!existingUser){
        const muser = new userModel({
          name: user.name,
          email: user.email,
          isPremiumUser:false,
          pattern:""
        })
        await muser.save();
      }
      return true;

    }
  },
});

export { handler as GET, handler as POST };
