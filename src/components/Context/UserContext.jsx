import React from "react";
import { useState, createContext, useContext } from "react";

const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <UserContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => {
  return useContext(UserContext);
};
