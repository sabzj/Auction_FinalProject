import React from "react";
import { Link, Route } from "react-router-dom";

function LeftHandComponent() {
  return (
    <>
      <div className="leftHandContainer">
        <Link to={"/liveauctions"}>Live Actions</Link>
        <Link to={"/create"}>Send IM</Link>
        <Link to={"/create"}>Create Auction</Link>
      </div>

      <Route path="/all-auctions" component={LiveCardsContainer} />
    </>
  );
}

export default LeftHandComponent;
