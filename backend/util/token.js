import jwt from "jsonwebtoken";


function generateToken(userId){
     const token = jwt.sign({userId},process.env.TOKENSTRING,{expiresIn:"10day"});
  return token;
}