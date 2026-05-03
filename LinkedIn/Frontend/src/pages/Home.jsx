import React, { useContext } from "react";
import Nav from "../components/Nav";
import dp from "../assets/profile.jpg";
import { FaPlus } from "react-icons/fa6";
import { IoCameraOutline } from "react-icons/io5";
import { userDataContext } from "../context/UserContext";

const Home = () => {
  const { userData, setUserData } = useContext(userDataContext);
  return (
    <div
      className="w-full min-h-[100px] bg-[#eceade] pt-[100px] 
    flex items-center justify-center gap-[20px] px-[20px] flex-col lg:flex-row"
    >
      <Nav />

      <div
        className=" w-full lg:w-[25%] min-h-[200px] bg-white shadow-lg 
      rounded-lg relative"
      >
        <div
          className="w-[100%] h-[100px] bg-gray-400 rounded overflow-hidden 
        flex items-center justify-center cursor-pointer"
        >
          <img src="" alt="" className="w-full" />
          <IoCameraOutline className="absolute right-[20px] top-[20px] w-[35px] text-gray-800 cursor-pointer" />
        </div>
        <div
          className="w-[70px] h-[70px rounded-full overflow-hidden 
        items-center justify-center absolute top-[65px] left-[35px] cursor-pointer"
        >
          <img src={dp} alt="" className="h-full" />
          <div className="w-[20px] h-[20px] bg-[#17c1ff] absolute top-[40px] left-[44px] rounded-full flex justify-center items-center">
            <FaPlus className="text-white" />
          </div>
        </div>
        <div className="mt-[40px] pl-[20px]">
          <div className="mt-[30px] pl-[20px] text-[19px] font-semibold text-gray-700">
            {`${userData.firstName}${userData.lastName}`}
          </div>
          <div className="text-[19px] text-gray-500">{`${userData.location}`}</div>
        </div>
      </div>

      <div className=" w-full lg:w-[50%] min-h-[200px] bg-white shadow-lg"></div>

      <div className="w-full lg:w-[25%] min-h-[200px] bg-white shadow-lg"></div>
    </div>
  );
};

export default Home;
