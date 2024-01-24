// export default RegistrationForm;
import { FaEye } from "react-icons/fa";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UsersUrl = "https://new-auction-api.onrender.com/api/users/register";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    creditcardNumber: "",
    expirationDate: "",
    cvv: "",
    isAdmin: false,
  });
  const navigate = useNavigate();
  const [viewPass, setViewPass] = useState(false);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const showError = (input, message) => {
    const errorDiv = document.getElementById(input.id + "Error");
    errorDiv.textContent = message;
    input.classList.add("border", "border-red-500");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;

    if (formData.username.length < 3) {
      showError(e.target.username, "Username must be at least 3 characters");
      isValid = false;
    }

    if (isValid) {
      console.log("Form Data:", formData);
      await sendUserData();
    }
  };

  // const sendUserData = async () => {
  //   try {
  // const response = await axios.get(UsersUrl);
  // const usersArray = response.data;

  // const existingUser = usersArray.find(
  //   (user) => user.email === formData.email
  // );

  // if (existingUser) {
  //   console.log("User already exists");
  //   return;
  // }

  const sendUserData = async () => {
    try {
      const postResponse = await axios.post(UsersUrl, formData, {
        withCredentials: true,
      });

      if (postResponse.status === 201) {
        sessionStorage.setItem("user", JSON.stringify(formData));

        // Redirect to another page after a successful POST
        setTimeout(() => {
          navigate("/allauctions");
        }, 3000);
      } else {
        throw new Error("Failed to create user");
      }
      // } catch (error) {
      //   console.error("Error during registration:", error);
      // }
    } catch (error) {
      console.error("Error during registration:", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Server responded with:", error.response.data);
        console.error("Status code:", error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received from the server");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleFormSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
          <div id="usernameError" className="text-red-500 text-xs"></div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="text"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
          <div id="emailError" className="text-red-500 text-xs"></div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
          <div id="passwordError" className="text-red-500 text-xs"></div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
          <div id="confirmPasswordError" className="text-red-500 text-xs"></div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="creditcardNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Credit Card Number:
          </label>
          <div className="flex ">
            <button
              className="px-2"
              onClick={() => {
                setViewPass((prev) => !prev);
              }}
            >
              <FaEye />
            </button>
            <input
              type={viewPass ? "text" : "password"}
              id="creditcardNumber"
              value={formData.creditcardNumber}
              maxLength={"16"}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-fit"
            />
          </div>
          <div
            id="creditcardNumberError"
            className="text-red-500 text-xs"
          ></div>
        </div>
        <label
          htmlFor="cvv"
          className="block text-sm font-medium text-gray-700"
        >
          cvv:
        </label>
        <div className="flex ">
          <button
            className="px-2"
            onClick={() => {
              setViewPass((prev) => !prev);
            }}
          >
            <FaEye />
          </button>
          <input
            type={viewPass ? "text" : "password"}
            id="cvv"
            value={formData.cvv}
            maxLength={"3"}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-1/6"
          />
        </div>
        <div id="cvvNumberError" className="text-red-500 text-xs"></div>
        <div className="mb-4">
          <label
            htmlFor="expirationDate"
            className="block text-sm font-medium text-gray-700"
          >
            Expiration Date:
          </label>
          <input
            type="text"
            id="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-2/6"
          />
          <div id="expirationDateError" className="text-red-500 text-xs"></div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
