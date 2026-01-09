import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import authRouter from "./router/auth.route.js"
import testRouter from  "./router/test.route.js"
dotenv.configDotenv();
const app =express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const port = process.env.PORT || 500;
app.use("/auth/api/",authRouter);
app.use("/api",testRouter);


app.listen(port,()=>{
     connectDb();
     console.log(`app running at port no ${port}`);
});


