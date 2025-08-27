import {Schema, model, models} from "mongoose";

// const dbURL = process.env.MONGODB_URL

const userSchema = new Schema({
    name: {type: String, required: true },
    email: {type: String, required: true},
    isPremiumUser: {type: Boolean, required: true},
    pattern: {type: String, required:false},
})

export const userModel = models.userinfo || model("userinfo", userSchema);

