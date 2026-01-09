import jwt from "jsonwebtoken";

 export default function generateToken(userId){
     const token = jwt.sign({userId},process.env.TOKENSTRING,{expiresIn:"10day"});
  return token;
}

