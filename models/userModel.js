import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {type: String, required: true, trim: true,},
    email: {type: String, required: true, unique: true,},
    password: {type: String, required: true,},
    phone: {type: Number, required: true,},
    address: {type: {}, required: true,},
    question: { type: String, required: true,},
    role: {type: Number, default: 0,},
}, { timestamps: true });

export default mongoose.model("users", userSchema);