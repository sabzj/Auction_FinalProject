import React from "react";
import { Container, containerClasses } from "@mui/material";
import AllAuctionsPage from "./AuctionsOnSecondPage";
import Header from "../header/Header";
import SplitScreen from "../splitScreen/SplitScreen";
import LeftHandComponent from "../components/LeftHandComponent";
import RightHandComponent from "../components/RightHandComponent";

function SecondPageContents() {
  return (
    <div className="auction-container">
      {/* <Header /> */}
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent />
        <RightHandComponent />
      </SplitScreen>
      {/* <AllAuctionsPage /> */}
    </div>
  );
}

export default SecondPageContents;
