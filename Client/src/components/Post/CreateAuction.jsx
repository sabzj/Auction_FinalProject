import React, { useState } from "react";
import "./createAuction.css";

const AddAuctionForm = ({ handleAddCard, user, updateUser }) => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [creditCardInput, setCreditCardInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [lotDetailsInput, setLotDetailsInput] = useState("");

  const handleSubmitCard = (e) => {
    // e.preventDefault();
    if (
      !(
        firstNameInput ||
        lastNameInput ||
        emailInput ||
        addressInput ||
        creditCardInput ||
        categoryInput ||
        lotDetailsInput
      )
    ) {
      alert("Must add all fields");
      return;
    }

    const newCard = {
      name: firstNameInput,
      lastName: lastNameInput,
      email: emailInput,
      address: addressInput,
      creditCard: creditCardInput,
      category: categoryInput,
      lot: lotDetailsInput,
    };

    const updatedUser = { ...user, cardList: [...user.cardList, newCard] };
    updateUser(updatedUser);

    clearInputs();
  };

  const clearInputs = () => {
    setFirstNameInput("");
    setLastNameInput("");
    setEmailInput("");
    setAddressInput("");
    setCreditCardInput("");
    setCategoryInput("");
    setLotDetailsInput("");
  };

  const handleAddName = (e) => {
    setFirstNameInput(e.target.value);
  };

  const handleAddLastName = (e) => {
    setLastNameInput(e.target.value);
  };

  const handleAddEmail = (e) => {
    setEmailInput(e.target.value);
  };

  const handleAddAddress = (e) => {
    setAddressInput(e.target.value);
  };

  const handleAddCreditCard = (e) => {
    setCreditCardInput(e.target.value);
  };

  const handleCategoryInput = (e) => {
    setCategoryInput(e.target.value);
  };

  const handleLotDetailsInput = (e) => {
    setLotDetailsInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmitCard} className="AddCardForm">
      <h3>Insert User details</h3>

      <div>
        <label htmlFor="add-name">Name:</label>
        <input
          type="text"
          id="add-name"
          name="add-name"
          value={firstNameInput}
          onChange={handleAddName}
        />
      </div>

      <div>
        <label htmlFor="add-lastname">Last name:</label>
        <input
          type="text"
          id="add-lastname"
          name="add-lastname"
          value={lastNameInput}
          onChange={handleAddLastName}
        />
      </div>

      <div>
        <label htmlFor="add-email">Email:</label>
        <input
          type="text"
          id="add-email"
          name="add-email"
          value={emailInput}
          onChange={handleAddEmail}
        />
      </div>

      <div>
        <label htmlFor="add-address">Address:</label>
        <input
          type="text"
          id="add-address"
          name="add-address"
          value={addressInput}
          onChange={handleAddAddress}
        />
      </div>

      <div>
        <label htmlFor="add-creditCard">Credit Card:</label>
        <input
          type="text"
          id="add-creditCard"
          name="add-creditCard"
          value={creditCardInput}
          onChange={handleAddCreditCard}
        />
      </div>

      <div>
        <label htmlFor="add-category">Category:</label>
        <input
          type="text"
          id="add-category"
          name="add-category"
          value={categoryInput}
          onChange={handleCategoryInput}
        />
      </div>

      <div>
        <label htmlFor="add-lot">Lot Details:</label>
        <input
          type="text"
          id="add-lot"
          name="add-lot"
          value={lotDetailsInput}
          onChange={handleLotDetailsInput}
        />
      </div>
      <button type="submit">Add Auction</button>
    </form>
  );
};

export default AddAuctionForm;
