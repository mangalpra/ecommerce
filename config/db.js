import mongoose from "mongoose";
mongoose.set("strictQuery", true);

const conn = async() => {
    await mongoose.connect(process.env.MONGODB)
    .then(() => {
        console.log("Connected to MongoDB".bgMagenta.white);
    })
    .catch((e) => console.log(e));
};

export default conn;
