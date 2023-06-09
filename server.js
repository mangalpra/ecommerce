import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import db from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import bodyParser from "body-parser";
//import path from "path";

//configure env
dotenv.config();

// database connection
db();

//rest object
const app = express();

//middlewares
app.use(bodyParser.json({limit: "200mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "200mb", extended: true}));
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
//app.use(express.static(path.join(__dirname, "./client/build")));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//rest api
/*app.use("*", function(req, res){
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});*/

//PORT
const PORT = process.env.PORT || 8000;

//run listen
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`.bgCyan.white);
});