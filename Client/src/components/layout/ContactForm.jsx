import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [navigate, setNavigate] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const [userMsg, setUserMsg] = useState("");
  const handleSendMeIM = async () => {
    try {
      // Define the email content (to, subject, message)
      const emailContent = {
        to: userEmail,
        subject: "test email",
        message: userMsg,
      };

      // Send the email by making a request to your server
      const response = await fetch("http://localhost:2626/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailContent),
      });

      if (response.ok) {
        // Email sent successfully
        window.location.hash = "#success";
      } else {
        // Error sending the email
        window.location.hash = "#error";
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const emailSentSuccessfully = () => ({
      message: "Email sent Successfully",
      success: true,
    });

    if (emailSentSuccessfully().success) {
      setNavigate("/");
      // Email sent successfully
    } else {
      // Error sending the email
      setNavigate("/error"); // How to add error page??
    }
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    console.log(value);
    setUserEmail(value);
  };
  const handleMsgChange = (e) => {
    const { value } = e.target;
    console.log(value);
    setUserMsg(value);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="max-w-360px mx-auto flex flex-col p-4"
      method="POST"
      action="/contact"
    >
      <div className="mb-4">
        <label htmlFor="name" className="label-content mb-1">
          Name:
        </label>
        <input type="text" name="name" required className="w-full border-4" />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="label-content mb-1">
          Email:
        </label>
        <input
          value={userEmail}
          onChange={handleEmailChange}
          type="email"
          name="email"
          required
          className="w-full border-4"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="label-content mb-1">
          Message:
        </label>
        <textarea
          name="message"
          rows="5"
          required
          value={userMsg}
          onChange={handleMsgChange}
          className="w-full border-4"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSendMeIM}
      >
        Send
      </button>

      <div>
        {/* Display success or error message based on the state */}
        {navigate === "/" && (
          <div className="bg-green-200 p-2 mt-2">
            <p>Your message has been sent!</p>
          </div>
        )}
        {navigate === "/error" && (
          <div className="bg-red-200 p-2 mt-2">
            <p>An error occurred while submitting the form.</p>
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
