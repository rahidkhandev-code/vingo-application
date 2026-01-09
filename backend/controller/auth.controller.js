import UserModel from "../model/user.model.js";
import createObject from "../util/createResponeOboject.js";
import bcrypt from "bcrypt"
import { generateAccessToken} from "../util/token.js";

 export async function signUp(req,res){
     try {
          // extract user detail from request   
          const {fullname , email , password , phone ,role} = req.body;
          // check user in data base for creating new account
          const user = await UserModel.findOne({email});
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
         user = new UserModel.create({
            fullname,
            email,
            password:hashedPassword,
            phone,
            role,
         });
     await user.save();
     // generat jwt token for auth 
     const token = generateAccessToken();
    // send cookie and back request ;
    res.cookie("userToken",token , {
        httpOnly:true,
        secure:false,
        maxAge:1000 * 60 * 60 * 24 * 10
    })
    .status(201)
    .jons({
       ...createObject('user created successfully',201,true),
       user:user,
     });


     } catch (error) {
          // print Error 
          console.log(error.message);
     }
}




