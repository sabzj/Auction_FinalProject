import { createContext, useContext, useEffect, useState } from "react";

// export const UserContextData = createContext();

export const useUser = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : {}
  );

  console.log(user);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const logOutUser = () => {
    localStorage.removeItem("user");
    setUser({});
  };
  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };
  const getUser = () => {
    return JSON.parse(localStorage.getItem("user")) || {};
  };
  return { user, setUser, getUser, logOutUser, updateUser };
  // <UserProvider.Provider
  //   value={}
  // >
  //   {children}
  // </UserProvider.Provider>
};
export default useUser;
// export const useUser = () => useContext(UserContextData);
