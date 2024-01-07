import React from "react";
import { Link, Route } from "react-router-dom";
import "./leftHandContainer.css";
import LiveCardsContainer from "../page2/LiveCardsContainer";

function LeftHandComponent() {
  return (
    <>
      <div className="leftHandContainer">
        <Link to={"/all-auctions"}>All Auctions</Link>
        <Link to={"/create"}>Create Auction</Link>
        <Link to={"/create"}>Create Auction</Link>
        <Link to={"/create"}>Create Auction</Link>
      </div>

      <Route path="/all-auctions" component={LiveCardsContainer} />
    </>
  );
}

export default LeftHandComponent;
