import mongoose from "mongoose";
function connectDb(){
     mongoose.connect(process.env.MONGOURI).then((dat)=>{
          console.log("mongo db connected successfully");
     }).catch(()=>{
          console.log("mongo db connection failed!");
     })
};
export default connectDb;
