import React from "react";
import { Link } from "react-router-dom";
import ViewAllAuctions from "../components/layout/ViewAllAuctions";
import ViewPage from "../components/layout/ViewCardPage";

function ALLAuctionsInPageTwo() {
  return (
    <div>
      <ViewAllAuctions />
      <ViewPage />
    </div>
  );
}

export default ALLAuctionsInPageTwo;
