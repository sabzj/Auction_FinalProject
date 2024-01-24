import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/authContext/authContexProvider";

function useLogin(api) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();
  const login = async (email, password, navigate_to) => {
    try {
      console.log("first");
      setLoading(true);
      const res = await fetch(
        api,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        },
        { withCredentials: true }
      );
      const data = await res.json();
      console.log("second");
      dispatch({
        type: "LOGIN",
        payload: data.data,
      });
      console.log(data);
      navigate(navigate_to);
      localStorage.setItem("token", data.token);
      setSuccess(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  return { login, error, loading, success, setSuccess };
}

export default useLogin;
