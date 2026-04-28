import React from "react";
import logo from "../assets/logo.svg";

const Signup = () => {
  return (
    <div className="w-full h-screen bg-[white] flex flex-col items-center justify-start gap-[10px]">
      <div className="p-[30px] lg:p-[35px] w-full h-[80px] flex items-center">
        <img src={logo} alt="" />
      </div>
      <form className="w-[90%] max-w-[400px] h-[600px] md:shadow-xl flex flex-col justify-center gap-[10px] p-[15px]">
        <h1 className="text-gray-800 text-[30px] font-semibold md-[30px]">
          Signup
        </h1>
        <input
          type="text"
          className="w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md"
          placeholder="firstName"
          required
        />
        <input
          type="text"
          className="w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md"
          placeholder="lastName"
          required
        />
        <input
          className="w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md"
          type="text"
          placeholder="userName"
          required
        />
        <input
          className="w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md"
          type="text"
          placeholder="email"
          required
        />
        <input
          className="w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md"
          type="text"
          placeholder="password"
          required
        />
        <button className="w-[100%] h-[50px] rounded-full bg-[#1dc9fd]">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
