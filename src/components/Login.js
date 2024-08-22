import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [issignInform, setIssignInform]=useState(true)

  const toggleSignInForm=()=>{
    setIssignInform(!issignInform)
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/259422c0-c399-4047-baf2-44bac5612ac1/435b6df3-53e6-4b88-b1be-0f3804e210a1/IN-en-20240819-POP_SIGNUP_TWO_WEEKS-perspective_WEB_f4be2d60-6f77-49e2-aaf7-6327ac5a3a95_large.jpg" 
        alt="logo"/>
        </div>
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
          <h1 className="font-bold text-3xl py-4">{issignInform? "Sign In" :"Sign Up"}</h1>
         {!issignInform && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700" />}
          <input type="text" placeholder="Email address" className="p-4 my-4 w-full bg-gray-700" />
         
          <input type="text" placeholder="Password" className="p-4 my-4 w-full bg-gray-700" />
          <button className="p-4 rounded-lg bg-red-700 w-full my-6">{issignInform? "Sign In" :"Sign Up"}</button>
          <p onClick={toggleSignInForm}>{issignInform? "New to Netflix ? Sign Up Now" :"Already registered? Sign in now"}</p>
        </form>
     
    </div>
  );
};

export default Login;
