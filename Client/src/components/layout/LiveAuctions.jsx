import React, { useState, useEffect } from "react";

const fetchDataFromDatabase = async () => {
  try {
    const response = await fetch(
      "http://localhost:2626/api/auctions/liveauctions"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching data from the database");
  }
};

const RandomItemsDisplay = () => {
  const [randomAuctions, setRandomItems] = useState([]);

  useEffect(() => {
    const fetchRandomItems = async () => {
      try {
        const auctions = await fetchDataFromDatabase();
        setRandomItems(auctions);

        // Shuffle the array randomly
        const shuffledItems = auctions.sort(() => Math.random() - 0.5);

        // Select the first 10 items
        const selectedItems = shuffledItems.slice(0, 10);

        // Set the selected items to the state
        setRandomItems(selectedItems);
      } catch (error) {
        console.error("Error fetching and processing data:", error.message);
      }
    };

    const CountdownTimer = (props) => {
      const { initialMinute = 0, initialSeconds = 0 } = props;
      const [minutes, setMinutes] = useState(initialMinute);
      const [seconds, setSeconds] = useState(initialSeconds);

      useEffect(() => {
        let myInterval = setInterval(() => {
          if (seconds > 0) {
            setSeconds(seconds - 1);
          }
          if (seconds === 0) {
            if (minutes === 0) {
              clearInterval(myInterval);
            } else {
              setMinutes(minutes - 1);
              setSeconds(59);
            }
          }
        }, 1000);

        return () => {
          clearInterval(myInterval);
        };
      }, [minutes, seconds]);

      return (
        <div>
          {minutes === 0 && seconds === 0 ? null : (
            <h1 className="text-4xl font-bold">
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </h1>
          )}
        </div>
      );
    };

    fetchRandomItems();
    CountdownTimer();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {randomAuctions.map((item) => (
        <div key={item.id} className="p-4 border border-gray-300 rounded-md">
          <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RandomItemsDisplay;
