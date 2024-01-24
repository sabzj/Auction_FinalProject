import React from "react";
import { Link } from "react-router-dom";
import ViewAllAuctions from "../components/layout/ViewAllAuctions";
import ViewPage from "../components/layout/ViewCardPage";
import SideBar from "../components/SideBar";

function ALLAuctionsInPageTwo() {
  return (
    <div>
      {/* <ViewPage /> */}
      <SideBar />
      <ViewAllAuctions />
    </div>
  );
}

export default ALLAuctionsInPageTwo;
