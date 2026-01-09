import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import authRouter from "./router/auth.route.js"
dotenv.configDotenv();
const app =express();
const port = process.env.PORT || 500;
app.use("/api/user/auth",authRouter);
app.listen(port,()=>{
     connectDb();
     console.log(`app running at port no ${port}`);
});


