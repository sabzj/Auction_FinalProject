import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { authContext } from "../../context/authContext/authContexProvider";
import { auctionContext } from "../../context/auctionContext/auctionContextProvider";
import axios from "axios";

const CreateAuctionForm = () => {
  const { isAuthenticated } = useContext(authContext);
  const { updateauction } = useContext(auctionContext);
  const history = useHistory();

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
    if (!isAuthenticated) {
      history.push("/register");
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
          auctionId: response.data._id,
          username: response.data.username,
          email: response.data.email,
          password: PASSWORD,
          creditCardNumber: response.data.creditCardNumber,
          cvv: response.data.cvv,
          description: response.data.description,
          startPrice: response.data.startPrice,
          address: response.data.address,
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

  useEffect(() => {
    if (!isAuthenticated) {
      // If not authenticated, set the mode to "create"
      setMode("create");
    } else {
      // If authenticated, set the mode to "edit"
      setMode("edit");
    }
  }, [isAuthenticated]);

  return (
    <form onSubmit={handleSubmit}>
      {/* Your form fields */}
      <button type="submit" onClick={handleInputChange}>
        {mode === "create" ? "Create Auction" : "Edit Auction"}
      </button>
    </form>
  );
};

export default CreateAuctionForm;
