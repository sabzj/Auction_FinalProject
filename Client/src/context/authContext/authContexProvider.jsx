import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useReducer } from "react";

import { authReducer } from "./authReducer";
export const authContext = createContext();

const initialState = {
  user: "",
  isAuthReady: false,
};

function AuthContextProvider({ children }) {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const authReady = async () => {
      try {
        const json = JSON.stringify({ email, password });
        // Make a GET request to the server to check if the user is authenticated
        const res = await axios.post(
          "https://new-auction-api.onrender.com/api/users/login",
          {
            body: {
              json,
            },
          },
          {
            withCredentials: true,
          }
        );
        console.log(res);
        // If the request was successful, set the authentication state to reflect the authenticated user
        if (res.status === 200) {
          dispatch({
            type: "SET_AUTH_READY",
            payload: res.data.data.user,
          });
          console.log("auth ready");
        }
      } catch (error) {
        dispatch({
          type: "SET_AUTH_READY",
          payload: null,
        });
      }
    };
    authReady();
  }, []);

  // logout function self explanatory
  const handleLogout = async () => {
    const response = await axios.delete(
      "https://new-auction-api.onrender.com/users/logout",
      {
        withCredentials: true,
      }
    );

    dispatch({ type: "LOGOUT" });
  };

  return (
    <authContext.Provider value={{ ...authState, dispatch, handleLogout }}>
      {children}
    </authContext.Provider>
  );
}

export default AuthContextProvider;
