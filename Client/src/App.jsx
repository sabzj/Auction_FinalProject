import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NavbarComponent from "./components/NavbarComponent";
import NavbarComponent from "./components/";
import Sell from "./components/Sell";
import About from "./components/About";
import Buy from "./components/Buy";
import AllAuctions from "./components/AllAuctions";
import Services from "./components/Services";
import Login from "./components/Login";
import Home from "./components/Home";
import Agriculture from "./components/Agriculture";
import AddAuctionForm from "./establishYourAuction/CreateAuction";

// import GroupRecommendAuctions from "./AllAuctions/MainPageRecomenAuctions";
import LogInMainPage from "./login/LogInMainPage";
import RegistrationForm from "./authentication/RegistrationForm";
import Header from "./header/Header";
import ViewPage from "./page2/ViewPage";
import LiveCountdownCard from "./page2/LiveCountdownCard";
import axios from "axios";
import { useState, useEffect } from "react";

const App = ({ children }) => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://6582f1ce02f747c8367aaca4.mockapi.io/viewData"
        );
        setCardData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <NavbarComponent />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/allAuctions" element={<AllAuctions />} />
        <Route path="/create" element={<AddAuctionForm />} />
        <Route path="/login" element={<LogInMainPage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/category/Agriculture" element={<Agriculture />} />
        <Route path="/all-auctions" element={<LiveCountdownCard />} />
        {/* <Route
          path="/recomended-auctions"
          element={<GroupRecommendAuctions />}
        /> */}
        {/* <Route path="/" element={<LiveCardsContainer />} /> */}
        <Route path="/view/:id" element={<ViewPage />} />
        <Route path="/live-countdown" exact element={<LiveCountdownCard />}>
          {/* <LiveCountdownCard />
          {cardData.map((card) => (
            <LiveCountdownCard key={card.id} {...card} />
          ))} */}
        </Route>
      </Routes>
      {children}
    </BrowserRouter>
  );
};

export default App;
