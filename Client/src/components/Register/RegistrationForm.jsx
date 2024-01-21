// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const UsersUrl = "http://localhost:2626/users/register";

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     creditcardNumber: "",
//     isAdmin: false,
//   });

//   const handleChange = (e) => {
//     const { id, value, type, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const showError = (input, message) => {
//     const errorDiv = document.getElementById(input.id + "Error");
//     errorDiv.textContent = message;
//     input.classList.add("error");
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     let isValid = true;

//     if (formData.username.length < 3) {
//       showError(e.target.username, "Username must be at least 3 characters");
//       isValid = false;
//     }

//     if (isValid) {
//       await sendUserData();
//     }
//   };

//   const sendUserData = async () => {
//     try {
//       const response = await axios.get(UsersUrl);
//       setUsersArray(response.data);

//       const existingUser = usersArray.find(
//         (user) => user.email === formData.email
//       );

//       if (existingUser) {
//         console.log("User already exists");
//         return;
//       }

//       const postResponse = await axios.post(UsersUrl, formData);

//       if (postResponse.status === 201) {
//         sessionStorage.setItem("user", JSON.stringify(formData));

//         // Redirect to another page after a successful POST
//         setTimeout(() => {
//           window.location.href = "AllAuctions.html";
//         }, 3000);
//       } else {
//         throw new Error("Failed to create user");
//       }
//     } catch (error) {
//       console.error("Error during registration:", error);
//     }
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleFormSubmit}>
//         Username:{" "}
//         <input
//           type="text"
//           id="username"
//           value={formData.username}
//           onChange={handleChange}
//         />
//         Email:{" "}
//         <input
//           type="text"
//           id="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         Password:{" "}
//         <input
//           type="text"
//           id="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         Confirm Password:{" "}
//         <input
//           type="text"
//           id="confirmPassword"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//         />
//         creditcardNumber:{" "}
//         <input
//           type="text"
//           id="creditcardNumber"
//           value={formData.creditcardNumber}
//           onChange={handleChange}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default RegistrationForm;
import { FaEye } from "react-icons/fa";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UsersUrl = "http://localhost:2626/api/users/register";

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
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const [viewPass, setViewPass] = useState(false);

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
      await sendUserData();
    }
  };

  const sendUserData = async () => {
    try {
      // const response = await axios.get(UsersUrl);
      // const usersArray = response.data;

      // const existingUser = usersArray.find(
      //   (user) => user.email === formData.email
      // );

      // if (existingUser) {
      //   console.log("User already exists");
      //   return;
      // }

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
    } catch (error) {
      console.error("Error during registration:", error);
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
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div
            id="creditcardNumberError"
            className="text-red-500 text-xs"
          ></div>
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
