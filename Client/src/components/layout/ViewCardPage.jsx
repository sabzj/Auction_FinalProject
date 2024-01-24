import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ViewPage = () => {
  const { id } = useParams();
  const [auction, setAuction] = useState({});
  const [count, setCount] = useState(100);
  const [currentBid, setCurrentBid] = useState(150);
  const [error, setError] = useState("");
  const myBid = useRef();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://new-auction-api.onrender.com/api/auctions/${id}`
      );
      const result = await response.json();
      setAuction(result);
    };
    fetchData();
  }, []);
  console.log(auction);
  const navigate = useNavigate();
  useEffect(() => {
    if (count == 0) return;
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    // fetch(`url/${currentBid.id}`,{
    //   method:'PUT',
    //   body: budge
    // })
    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [count]);
  const handleClose = () => {
    // You can add logic to close or remove the card
    navigate("/allauctions");
  };

  const submitBid = (e) => {
    e.preventDefault();
    if (myBid.current.value < currentBid) {
      setError("can't be less than the current bid");
    } else {
      setCurrentBid(myBid.current.value);
      myBid.current.value = "";
      setError("");
    }
  };
  return (
    <div
      style={{
        padding: "50px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        maxWidth: "80%",
        margin: "auto",
      }}
    >
      <div style={{ width: "15%" }}>
        {count > 0 ? (
          <>
            auction ends: {count}{" "}
            <form
              onSubmit={submitBid}
              style={
                {
                  // display: "flex",
                  // justifyContent: "center",
                  // alignItems: "center",
                }
              }
            >
              <input
                type="number"
                ref={myBid}
                placeholder={`minimum bid ${currentBid}`}
              />
              <button type="submit">bid</button>
            </form>
            {error && <>{error}</>}
          </>
        ) : (
          <>auction ended</>
        )}
      </div>
      <div
        style={{
          width: "15%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Bids</h1>
        heighst bid : {currentBid}$
      </div>
      <div
        style={{
          padding: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "70%",
        }}
      >
        <img
          src={auction.image}
          alt={auction.name}
          style={{ width: "300px", height: "300px", borderRadius: "10px" }}
        />
        <div
          style={{
            padding: "50px",
          }}
        >
          <h2>{auction.name}</h2>
          <h3>{auction.price}</h3>
          <div>{auction.country}</div>
          <div>{auction.details}</div>
          <div>{auction.category}</div>
          <button
            className="bg-yellow-700 text-white px-4 py-2 rounded"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
