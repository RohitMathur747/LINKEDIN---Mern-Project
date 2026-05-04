import React, { useContext, useState } from "react";
import { ImCross } from "react-icons/im";
import { userDataContext } from "../context/UserContext";
import dp from "../assets/profile.jpg";
import { FaPlus } from "react-icons/fa6";
import { IoCameraOutline } from "react-icons/io5";

const EditProfile = () => {
  const { edit, setEdit, userData, setUserData } = useContext(userDataContext);
  const [firstName, setFirstName] = useState(userData.firstName || "");
  const [lastName, setLastName] = useState(userData.lastName || "");
  const [userName, setUserName] = useState(userData.userName || "");
  const [headline, setHeadline] = useState(userData.headline || "");
  const [location, setLocation] = useState(userData.location || "");
  const [gender, setGender] = useState(userData.gender || "");
  const [skills, setSkills] = useState(userData.skills || []);
  const [newSkills, setNewSkills] = useState("");

  function addSkills(e) {
    e.preventDefault();
    if (newSkills && !skills.includes(newSkills)) {
      setSkills(...skills, newSkills);
    }
    setNewSkills("");
  }

  return (
    <div className="w-full h-[100vh] fixed top-0 z-[100] flex justify-center">
      <div className="w-full h-full bg-black opacity-[0.5] absolute"></div>
      <div
        className="w-[90%] max-w-[500px] h-[600px] bg-white relative z-[200] 
      shadow-lg rounded-lg p-[10px] overflow-auto"
      >
        <div className="absolute top-[20px] right-[20px] ">
          <ImCross
            onClick={() => setEdit(false)}
            className="w-[25px] h-[25px]
         text-gray-700 font-semibold cursor-pointer"
          />
        </div>
        <div className="w-full h-[150px] bg-gray-500 rounded-lg mt-[60px]">
          <div className="w-[80px] h-[80px] rounded-full overflow-hidden absolute top-[170px] ml-[20px]">
            <img src={dp} alt="" className="w-full h-full" />
          </div>
          <IoCameraOutline className="absolute right-[20px] top-[90px] w-[45px] text-white cursor-pointer" />
          <div className="w-[20px] h-[20px] bg-[#17c1ff] absolute top-[220px] left-[90px] rounded-full flex justify-center items-center">
            <FaPlus className="text-white" />
          </div>
        </div>
        <div
          className="w-full flex flex-col items-center justify-center gap-[20px] 
        mt-[50px]"
        >
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="firstName"
            className="w-full h-[50px] outline-none border-gray-600 px-[5px] py-[px] text-[18px] border-2 rounded-lg"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="lastName"
            className="w-full h-[50px] outline-none border-gray-600 px-[10px] py-[px] text-[18px] border-2 rounded-lg"
          />
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="userName"
            className="w-full h-[50px] outline-none border-gray-600 px-[10px] py-[px] text-[18px] border-2 rounded-lg"
          />
          <input
            type="text"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            placeholder="headline"
            className="w-full h-[50px] outline-none border-gray-600 px-[10px] py-[px] text-[18px] border-2 rounded-lg"
          />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="location"
            className="w-full h-[50px] outline-none border-gray-600 px-[10px] py-[px] text-[18px] border-2 rounded-lg"
          />
          <input
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            placeholder="gender(male/female/other)"
            className="w-full h-[50px] outline-none border-gray-600 px-[10px] py-[px] text-[18px] border-2 rounded-lg"
          />
          <div className="w-full p-[10px] border-2 border-gray-600 flex flex-col gap-[10px]">
            <h1 className="text-[19px] font-semibold">Skills</h1>
            {skills && (
              <div>
                {skills.map((skill, index) => (
                  <div key={index}>{skills}</div>
                ))}
              </div>
            )}
            <div className="flex flex-col gap-[10px] items-start">
              <input
                type="text"
                placeholder="Add new Skills"
                value={newSkills}
                className="w-full h-[50px] outline-none border-gray-600 px-[10px] py-[px] text-[16px] border-2 rounded-lg"
                onChange={(e) => setNewSkills(e.target.value)}
              />
              <button
                onClick={addSkills}
                className="w-[100%] h-[40px] rounded-full border-2 border-[#2dc0ff] text-[#2dc0ff]"
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
