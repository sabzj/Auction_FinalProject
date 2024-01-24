import React, { useState, useEffect } from "react";
import ViewDetails from "../layout/ViewCardPage";
import { Link, useNavigate } from "react-router-dom";

function CardTimerAndDetails({
  image,
  title,
  currentBid,
  description,
  createdby,
  startprice,
  auctionId,
}) {
  const [timer, setTimer] = useState(48 * 60 * 60);

  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    const timeout = setTimeout(
      () => {
        clearInterval(interval);
      },
      48 * 60 * 60 * 1000
    );

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
    navigate;
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  };

  const handleViewDetails = (ViewDetails) => {
    alert(`View Details for: ${ViewDetails}`);
  };

  return (
    <div className="flex flex-wrap max-w-md mx-auto w-[80%] my-4 bg-white rounded-md overflow-hidden shadow-md">
      <img className="w-full h-40 object-cover " src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-2">Current Bid: ${currentBid}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex ">
          <span className="text-blue-500">{createdby}</span>
          <span className="text-gray-700">{startprice}</span>
        </div>
        <div className="flex justify-between items-center  mb-2">
          <small className="text-muted">Countdown: {formatTime(timer)}</small>
          <div className="space-y-2">
            <Link
              to={`/view/${auctionId}`}
              className="bg-green-800 text-white px-4 py-2 mt-2 rounded"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTimerAndDetails;
