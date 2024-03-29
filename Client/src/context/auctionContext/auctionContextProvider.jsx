import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const auctionContext = createContext();

function AuctionContextProvider({ children }) {
  // using the axios.get() method to get the auction data from the server.
  // and then emit the auction data to the socket.
  const getOneauction = async (category, socket) => {
    const url = `https://new-auction-api.onrender.com/auctions/${category}`;
    try {
      const response = await axios.get(url, {
        withCredentials: true,
      });
      socket.emit("bid", response.data.data.auction, category);
    } catch (error) {
      console.error(error);
    }
  };

  // using the axios.put() method to send the updated auction data to the server.
  const updateauction = async (auction, id) => {
    const url = `https://new-auction-api.onrender.com/api/auctions/${id}`;

    try {
      const response = await axios.put(url, auction, { withCredentials: true });
      return response.json();
      //   console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <auctionContext.Provider value={{ getOneauction, updateauction }}>
      {children}
    </auctionContext.Provider>
  );
}

export default AuctionContextProvider;
