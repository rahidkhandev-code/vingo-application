import express from "express";
import dotenv from "dotenv";
dotenv.configDotenv();
const app =express();
const port = process.env.PORT || 500;
app.listen(port,()=>{
     console.log(`app running at port no ${port}`);
});


