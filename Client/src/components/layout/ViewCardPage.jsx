import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

const ViewPage = () => {
  const { id } = useParams();
  const [auction, setAuction] = useState({});
  const [count, setCount] = useState(100);
  const [currentBid, setCurrentBid] = useState(150);
  const [error, setError] = useState("");
  const myBid = useRef();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:2626/api/auctions/${id}`);
      const result = await response.json();
      setAuction(result);
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (count == 0) return;
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [count]);

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
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
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
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
