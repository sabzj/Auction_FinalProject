import React, { useState } from "react";
import Modal from "react-modal";
import "./Header.css";
// import NavbarComponent from "../components/NavbarComponent";
// import SearchForAuction from "../searchbar/SearchForAuction";

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <p>
          This is a new car in good condition that recently maintained
          maintenance
        </p>
      </Modal>

      <header className="main-header">
        <div className="branding">
          <h1>My Website</h1>
        </div>
        {/* <NavbarComponent /> */}
        <div className="header-content">
          <p>Welcome to our website!</p>
          <div className="search-bar">{/* <SearchForAuction /> */}</div>
          <button onClick={openModal}>View Page</button>
        </div>
      </header>
    </>
  );
};

export default Header;
