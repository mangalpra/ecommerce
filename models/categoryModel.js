import mongoose from "mongoose";
const Schema = mongoose.Schema;
const categorySchema = new Schema({
    name: { type: String, 
        //required: true, unique: true,
    },
    slug: { type: String, lowerCase: true }
});

export default mongoose.model("Category", categorySchema);