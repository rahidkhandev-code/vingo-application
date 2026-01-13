
import { useState } from "react";
import { color } from "../util/colors.js";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";



function SignIn() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
   try {
  
   } catch (error) {
    
   }
  };

  return (
    <div
      className=" min-h-[100vh] border-2 max-w-full flex justify-center items-center"
      style={{ backgroundColor: color.white }}
    >
      <div
        className=" max-w-100 min-w-75 my-2 px-5 py-5 rounded-xl shadow-2xs"
        style={{
          backgroundColor: color.full_white,
        }}
      >
        {/* header section */}
        <header className="header">
          <h1
            className="mb-2 pl-1 text-xl font-bold "
            style={{ color: color.orange }}
          >
            Vingo
          </h1>
        </header>

        {/* title & discription description */}
        <p className="pl-1 capitalize mb-2 text-gray-500 text-sm">
          signin to your account to continue enjoying delicious food delivery.
        </p>

        {/* form section */}
        <div className="form w-full pl-1">
          {/* fullname input  */}
          

          {/* email input  */}
          <div className="w-full flex flex-col mb-2">
            <label htmlFor="email" className="block w-full mb-1 text-gray-600">
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="py-2 px-3 outline-0 border border-slate-300 rounded-sm"
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>

         

          {/* password input  */}
          <div className="w-full flex flex-col mb-4">
            <label
              htmlFor="password"
              className="block w-full mb-1 text-gray-600"
            >
              Password
            </label>
            <div className="relative w-full">
              <input
                type={isShowPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="py-2 px-3 w-full outline-0 border border-slate-300 rounded-sm"
                placeholder="Enter your password"
                name="password"
                required
              />
              <button
                className="absolute right-5 top-[50%] translate-y-[-50%] text-gray-500 cursor-pointer "
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? <FaRegEyeSlash /> : <IoEyeOutline />}
              </button>
            </div>
          </div>


          {/* signup button  */}
          <div className="w-full flex mb-2  flex-wrap gap-2">
            <button
              onClick={handleSignIn}
              className="w-full py-2 px-2 text-md rounded-md font-semibold border-orange-600 cursor-pointer hover:opacity-60  transition-colors duration-200"
              style={{
                border: `1px solid ${color.orange}`,
                backgroundColor: color.orange,
                color: color.full_white,
              }}
            >
              Sign In
            </button>
          </div>

          {/* google signup-button  */}
          <div className="w-full flex mb-5  flex-wrap gap-2">
            <button
              className=" flex justify-center items-center gap-2 w-full py-2 px-2 text-md rounded-md font-semibold border-white cursor-pointer hover:opacity-60  transition-colors duration-200"
              style={{
                border: `1px solid ${color.orange}`,
                backgroundColor: color.full_white,
                color: color.black,
              }}
            >
              <span className="text-2xl">
                <FcGoogle />
              </span>{" "}
              <span> Sign In With Google</span>
            </button>
          </div>

          {/* signin link */}
          <div className="w-full flex mb-2 flex-wrap gap-2 flex items-center justify-center">
            <p className="text-gray-600">Don't have an account ?</p>
            <Link to="/signup">
              <span className="text-orange-600 font-semibold">Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

