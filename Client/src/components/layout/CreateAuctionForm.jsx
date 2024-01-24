import React, { useState, useContext, useEffect } from "react";

import { authContext } from "../../context/authContext/authContexProvider";
import { auctionContext } from "../../context/auctionContext/auctionContextProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateAuctionForm = () => {
  const { authState } = useContext(authContext);
  console.log(authState);
  //   const { updateauction } = useContext(auctionContext);
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("token");
  console.log(isAuth);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    creditCardNumber: "",
    cvv: "",
    description: "",
    startPrice: "",
    address: "",
  });

  const [mode, setMode] = useState("create");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled for "create" mode
    if (mode === "create" && !validateForm()) {
      alert("Please fill in all required fields");
      return;
    }

    // Check if the user is authenticated
    if (!isAuth) {
      navigate("/register");
      return;
    }

    try {
      if (mode === "create") {
        const response = await axios.post("/api/auctions", formData);
        console.log("Auction created successfully:", response.data);
        // Redirect the user to a success page or perform other actions
      } else if (mode === "edit") {
        const response = await axios.put(
          `/api/auctions/${auctionId}`,
          formData
        );
        await updateauction({
          startPrice: "8888",
        });

        console.log("Auction updated successfully:", response.data);
      }
    } catch (error) {
      // Handle errors
      console.error("Error creating/updating auction:", error.message);
    }
  };

  const validateForm = () => {
    if (
      formData.username.trim() === "" ||
      formData.email.trim() === "" ||
      formData.password.trim() === "" ||
      formData.creditCardNumber.trim() === "" ||
      formData.cvv.trim() === "" ||
      formData.description.trim() === "" ||
      formData.startPrice.trim() === "" ||
      formData.address.trim() === ""
    ) {
      alert("Please fill in all required fields");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return false;
    }

    return true;
  };

  // useEffect(() => {
  //   if (!isAuth) {
  //     // If not authenticated, set the mode to "create"
  //     setMode("create");
  //   } else {
  //     // If authenticated, set the mode to "edit"
  //     setMode("edit");
  //   }
  // }, [isAuth]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-300">
      <form
        className="bg-indigo-50 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            name="username"
            placeholder=""
            onChange={handleInputChange}
            value={formData.username}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            name="email"
            placeholder=""
            onChange={handleInputChange}
            value={formData.email}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            name="password"
            placeholder=""
            onChange={handleInputChange}
            value={formData.password}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="creditCardNumber"
          >
            creditCardNumber
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="creditCardNumber"
            type="text"
            name="creditCardNumber"
            placeholder=""
            onChange={handleInputChange}
            value={formData.creditCardNumber}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="cvv"
          >
            cvv
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cvv"
            type="text"
            name="cvv"
            placeholder=""
            onChange={handleInputChange}
            value={formData.cvv}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            type="text"
            name="description"
            placeholder=""
            onChange={handleInputChange}
            value={formData.description}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="startPrice"
          >
            startPrice
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="startPrice"
            type="text"
            name="startPrice"
            placeholder=""
            onChange={handleInputChange}
            value={formData.startPrice}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            name="address"
            placeholder=""
            onChange={handleInputChange}
            value={formData.address}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-yellow-500  bg-FCA311 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {mode === "create" ? "Create Auction" : "Edit Auction"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAuctionForm;
