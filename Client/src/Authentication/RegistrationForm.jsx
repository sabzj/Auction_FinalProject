// import React, { useState } from "react";
// import "./RegistrationForm.css";
// import useAxios from "../Hooks/useAxios";

// const UsersUrl = "https://65802fc36ae0629a3f548fbb.mockapi.io/auction/user";

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     isAdmin: false,
//   });

//   const [usersArray, setUsersArray] = useState([]);

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
//       const response = await useAxios.get(UsersUrl);
//       setUsersArray(response.data);

//       const existingUser = usersArray.find(
//         (user) => user.email === formData.email
//       );

//       if (existingUser) {
//         window.location.href = "authentication.html";
//         return;
//       }

//       // Use Axios.post to send a POST request to the API
//       const postResponse = await useAxios.post(UsersUrl, formData);

//       if (postResponse.status === 201) {
//         // Check if the POST request was successful
//         // Save user to current session
//         formData.id = usersArray.length + 2;
//         formData.username = [];
//         formData.email = [];
//         sessionStorage.setItem("user", JSON.stringify(formData));
//         console.log(formData);
//         // Redirect to another page after a successful POST
//         setTimeout(() => {
//           window.location.href = "products.html";
//         }, 3000);
//       } else {
//         throw new Error("Failed to create user");
//       }
//     } catch (error) {
//       console.error("Error during fetch:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       Username:{" "}
//       <input
//         type="text"
//         id="username"
//         value={formData.username}
//         onChange={handleChange}
//       />
//       Email:{" "}
//       <input
//         type="text"
//         id="email"
//         value={formData.email}
//         onChange={handleChange}
//       />
//       Password:{" "}
//       <input
//         type="text"
//         id="password"
//         value={formData.password}
//         onChange={handleChange}
//       />
//       Confirm Password:{" "}
//       <input
//         type="text"
//         id="confirmPassword"
//         value={formData.confirmPassword}
//         onChange={handleChange}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default RegistrationForm;

import React, { useEffect, useState } from "react";
import "./RegistrationForm.css";
import axios from "axios"; // Import Axios library

const UsersUrl = "https://65802fc36ae0629a3f548fbb.mockapi.io/auction/user";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAdmin: false,
  });

  const [usersArray, setUsersArray] = useState([]);

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
    input.classList.add("error");
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
      // Fetch existing users
      const response = await axios.get(UsersUrl);
      console.log(response.data);
      setUsersArray(response.data);

      // Check if the user already exists
      const existingUser = usersArray.find(
        (user) => user.email === formData.email
      );

      if (existingUser) {
        window.location.href = "authentication.html";
        return;
      }

      // Use Axios.post to send a POST request to the API
      const postResponse = await axios.post(UsersUrl, formData);

      if (postResponse.status === 201) {
        // Save user to current session
        formData.id = usersArray.length + 2;
        formData.username = [];
        formData.email = [];
        sessionStorage.setItem("user", JSON.stringify(formData));
        console.log("User successfully created:", formData);

        // Redirect to another page after a successful POST
        setTimeout(() => {
          window.location.href = "AllAuctions.html";
        }, 3000);
      } else {
        throw new Error("Failed to create user");
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        Username:{" "}
        <input
          type="text"
          id="username"
          value={formData.username}
          onChange={handleChange}
        />
        Email:{" "}
        <input
          type="text"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        Password:{" "}
        <input
          type="text"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
        Confirm Password:{" "}
        <input
          type="text"
          id="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
