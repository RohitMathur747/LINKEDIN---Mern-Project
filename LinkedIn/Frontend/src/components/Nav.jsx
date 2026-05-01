import React, { useState } from "react";
import logo2 from "../assets/logo2.png";
import { IoSearchSharp } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { HiUsers } from "react-icons/hi2";
import { IoNotifications } from "react-icons/io5";
import dp from "../assets/profile.jpg";

const Nav = () => {
  const [activeSearch, setActiveSearch] = useState(false);

  return (
    <div className="w-full h-[80px] bg-[white] fixed top-0 shadow-lg flex justify-between md:justify-around items-center px-[10px]">
      <div className="flex justify-center items-center gap-[10px]">
        <div>
          <img src={logo2} className="w-[50px]" alt="" />
        </div>
        {!activeSearch && (
          <div>
            <IoSearchSharp
              className="w-[25px]  h-[25px] text-gray-700 lg:hidden"
              onClick={() => setActiveSearch(true)}
            />
          </div>
        )}

        <form
          className={`w-[250px] lg:w-[350px] h-[40px] bg-[#f0efe7] lg:flex items-center gap-[10px] px-[10px] py-[5px] rounded-md ${!activeSearch ? "hidden" : "flex"}`}
        >
          <div>
            <IoSearchSharp className="w-[25px]  h-[25px] text-gray-700" />
          </div>
          <input
            type="text"
            className="w-[80%] h-full bg-transparent"
            placeholder="Search.."
          />
        </form>
      </div>

      <div className="flex justify-center items-center gap-[20px]">
        <div className="lg:flex flex-col items-center justify-center text-gray-600 hidden">
          <IoHome />
          <div
            onClick={() => {
              setActiveSearch(false);
            }}
          >
            Home
          </div>
        </div>
        <div className="lg:flex flex-col items-center justify-center text-gray-600 hidden">
          <HiUsers />
          <div>Network</div>
        </div>
        <div className="flex flex-col items-center justify-center text-gray-600">
          <IoNotifications className="w-[23px] h-[23px] text-gray-600" />
          <div className="hidden md:block">Notifications</div>
        </div>
        <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
          <img src={dp} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
