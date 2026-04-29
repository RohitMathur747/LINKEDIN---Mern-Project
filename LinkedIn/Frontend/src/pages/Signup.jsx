import React, { useContext, useState } from "react";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";

const Signup = () => {
  const [show, setShow] = useState(false);
  let navigate = useNavigate();
  let { serverUrl } = useContext(authDataContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let result = await axios.post(
        serverUrl + "/api/auth/signup",
        {
          firstName,
          lastName,
          userName,
          email,
          password,
        },
        { withCredentials: true },
      );
      console.log(result);
      setErr("");
      setLoading(false);
      setFirstName("");
      setLastName("");
      setEmail("");
      setUserName("");
      setPassword("");
    } catch (error) {
      setErr(error.response.data.message);
      setLoading(false);
      //console.log(error);
    }
  };

  return (
    <div className="w-full h-screen bg-[white] flex flex-col items-center justify-start gap-[10px]">
      <div className="p-[30px] lg:p-[35px] w-full h-[80px] flex items-center">
        <img className="w-12 h-12" src={logo} alt="" />
      </div>
      <form
        onSubmit={handleSignUp}
        className="w-[90%] max-w-[400px] h-[600px] md:shadow-xl flex flex-col justify-center gap-[10px] p-[15px]"
      >
        <h1 className="text-gray-800 text-[30px] font-semibold md-[30px]">
          Signup
        </h1>
        <input
          type="text"
          className="w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md"
          placeholder="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          required
        />
        <input
          type="text"
          className="w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md"
          placeholder="lastName"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          required
        />
        <input
          className="w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md"
          type="text"
          placeholder="userName"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          required
        />
        <input
          className="w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md"
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <div className="relative w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] rounded-md">
          <input
            className="w-full h-full border-none border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md"
            type={show ? "text" : "password"}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <span
            onClick={() => setShow((prev) => !prev)}
            className="cursor-pointer font-semibold absolute right-[20px] top-[10px] text-[#24b2ff]"
          >
            {show ? "hidden" : "show"}
          </span>
        </div>

        {err && <p className="text-center text-red-500">*{err}</p>}

        <button
          disabled={loading}
          className="w-[100%] h-[50px] rounded-full bg-[#0284ca] mt-[30px] mb-[10px] text-white"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>

        <p
          onClick={() => navigate("/login")}
          className="text-center cursor-pointer"
        >
          Already have an account ?
          <span className="text-[#24b2ff]"> Sign In</span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
