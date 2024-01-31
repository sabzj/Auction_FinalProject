import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardTimerAndDetails from "../layout/ViewEachCardDetails";
import ViewDetails from "../layout/ViewCardPage";

const ViewAllAuctions = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://new-auction-api.onrender.com/api/auctions"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setAuctions(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(auctions);
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  };

  return (
    <div className="container mx-auto my-8">
      {/* <h1 className="text-4xl font-bold mb-6">All Auctions</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 ml-5 lg:grid-cols-3 gap-[22]">
        {auctions.map((auction) => (
          <div key={auction._id} className="mt-4">
            {/* Integrate CardTimerAndDetails for each auction */}
            <CardTimerAndDetails
              image={auction.image}
              title={auction.title}
              text={auction.description}
              startprice={auction.startprice}
              createdby={auction.createdby}
              auctionId={auction._id}
            />
          </div>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllAuctions;
