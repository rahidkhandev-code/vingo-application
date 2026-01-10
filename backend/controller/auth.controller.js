import UserModel from "../model/user.model.js";
import createObject from "../util/createResponeOboject.js";
import bcrypt from "bcrypt"
import { generateAccessToken} from "../util/token.js";


// user signUp controller;
 export async function signUp(req,res){
     try {
          // extract user detail from request   
          const {fullname , email , password , phone ,role} = req.body;
          //email validation ;
          if(!email.includes('@') || !email.include('.') || !email.includes("gmail" )){
            return res.status(400).json(createObject("invalid email", 400, false));
          };
          // check user in data base for creating new account
          let user= await UserModel.findOne({email});
          if(user){
               return res.status(400).json(createObject("user already exist.",400, false));
          };
          // validat  user password ;
          if(password.length<6){
                  return res
                    .status(400)
                    .json(createObject("password must be at least 6 character long", 400, false));
          };
          // validat  user phone number;
          if(phone.length > 10){
                  return res
                    .status(400)
                    .json(
                      createObject(
                        "invlid phone No",
                        400,
                        false
                      )
                    );
          };
       // validat user fullname length;
        if(fullname.length < 3){
          return res
            .status(400)
            .json(createObject("name must be atleast 3 character", 400, false));
        };
        // hashing user password
        const hashedPassword = await bcrypt.hash(password , 10);
        // storing user in database
         user = await UserModel.create({
           fullname,
           email,
           password: hashedPassword,
           phone,
           role,
         });
     // generat jwt token for auth 
     const token = generateAccessToken(user._id);
    // send cookie and back request ;
    res.cookie("userToken",token , {
        httpOnly:true,
        secure:false,
        maxAge:1000 * 60 * 60 * 24 * 10
    })
    .status(201)
    .json({
       ...createObject('user created successfully',201,true),
       user:user,
     });


     } catch (error) {
          // print Error 
          console.log(error.message);
     }
};//complete signUp function;






// user signin controller     ;
 export async function signIn(req,res){
  try {
    const {email ,password} = req.body;
   let user = await user.findOne({email});
     if(!user){
      return res.status(400).json(createObject("invalid user or password" , 400 , false));
     };
    const isvalidPassword = await bcrypt.compare(password,user.password);
    if(!isvalidPassword){
      return res.status(400).json(createObject("invalid user or password", 400, false));
    };
    const token =  generateAccessToken(user._id);
    res.cookie("userToken",token,{httpOnly:false,secure:false,maxAge:1000 * 60 * 60 * 24 * 10});
    return res.status(200).json({...createObject('user sign in successfully', 200, true) , user:user});
  } catch (error) {
     res.status(500).json(createObject("internal server error" + error));
  }
  
};




// user signout controller;
 export function signOut(req, res){
   res.clearCookie("userToken");
   res.status(200).json(createObject("user signout succesfully",200, true));
};

