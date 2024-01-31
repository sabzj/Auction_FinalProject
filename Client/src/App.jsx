import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/index.css";
import NavbarComponent from "./components/layout/Navbar";
import AllAuctions from "../src/Pages/AllAuctions";
import ViewDetails from "../src/components/layout/ViewCardPage";
import Header from "./components/Header/Header";
import Login from "./components/login/LogIn";
import RegistrationForm from "./components/Register/RegistrationForm";
import ContactForm from "./components/layout/ContactForm";
import AuctionContextProvider from "./context/auctionContext/auctionContextProvider";
import CreateAuctionForm from "./components/layout/CreateAuctionForm";
import AuthContextProvider from "./context/authContext/authContexProvider";
import CategoryPage from "./Pages/CategoryPage";
import RandomItemsDisplay from "./components/layout/LiveAuctions";
// import SideBar from "./components/SideBar";

const App = ({ children }) => {
  return (
    <BrowserRouter>
      <AuctionContextProvider />
      <AuthContextProvider>
        <NavbarComponent />
        {/* <SideBar /> */}

        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/allauctions" element={<AllAuctions />} />
          <Route path="/liveauctions" element={<RandomItemsDisplay />} />
          <Route path="/view/:id" element={<ViewDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/send-email" element={<ContactForm />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/createAuction" element={<CreateAuctionForm />} />
        </Routes>
        {children}
      </AuthContextProvider>
      <AuctionContextProvider />
    </BrowserRouter>
  );
};

export default App;
