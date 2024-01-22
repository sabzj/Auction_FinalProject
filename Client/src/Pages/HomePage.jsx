import React, { useState } from "react";
import Header from "../components/layout/Header";
import ContactForm from "../components/layout/ContactForm";

const HomePage = () => {
  return (
    <div>
      <Header />
      <button
        onClick={handleSendMeIM}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Send Me IM
      </button>

      <ContactForm />
    </div>
  );
};

export default HomePage;
