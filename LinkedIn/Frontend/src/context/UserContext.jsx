import React, { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { authDataContext } from "./AuthContext";
import axios from "axios";

export const userDataContext = createContext();
const UserContext = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const { serverUrl } = useContext(authDataContext);
  const [edit, setEdit] = useState(false);

  const getCurrentUser = async () => {
    try {
      let result = await axios.get(serverUrl + "/api/user/currentuser", {
        withCredentials: true,
      });
      console.log(result);
      setUserData(result.data);
    } catch (error) {
      console.log(error);
      setUserData(null);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  let value = {
    serverUrl,
    userData,
    setUserData,
    edit,
    setEdit,
  };

  return (
    <div>
      <userDataContext.Provider value={value}>
        {children}
      </userDataContext.Provider>
    </div>
  );
};

export default UserContext;
