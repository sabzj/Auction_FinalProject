import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img4 from "../assets/imgs/live auction car.jpg";
import img5 from "../assets/imgs/live auction fancy diamond.jpg";
import img6 from "../assets/imgs/live auction machine.jpg";
import img7 from "../assets/imgs/live auction mobile house.jpg";
import "./allauctions.css";
const LiveCountdownCard = ({ title, to, imageUrl }) => {
  const [countdown, setCountdown] = useState(60);
  const [auctions, setAuctions] = useState([]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) =>
        prevCountdown > 0 ? prevCountdown - 1 : 0
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://6582f1ce02f747c8367aaca4.mockapi.io/viewData"
      );
      const result = await response.json();
      setAuctions(result);
    };
    fetchData();
  }, []);

  const showData = () => {
    return auctions.map((auction) => {
      return (
        <div key={auction.id} className="auctionCard">
          <img
            src={auction.image}
            alt={auction.name}
            style={{
              width: "100%",
              height: "150px",
              borderRadius: "10px",
            }}
          />
          <h3>{auction.name}</h3>
          <h3>{auction.price}</h3>
          <div>{auction.country}</div>
          <div>{auction.details}</div>
          <div>{auction.category}</div>
          <Link to={`/view/${auction.id}`}>
            {" "}
            <button>View</button>
          </Link>
        </div>
      );
    });
  };
  return <div className="countdown-card">{showData()}</div>;
};

export default LiveCountdownCard;
