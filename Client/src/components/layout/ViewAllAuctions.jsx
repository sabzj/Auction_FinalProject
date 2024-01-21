// //

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import CardTimerAndDetails from "../layout/ViewEachCardDetails";

// const ViewAllAuctions = () => {
//   const [countdown, setCountdown] = useState(60);
//   const [auctions, setAuctions] = useState([]);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCountdown((prevCountdown) =>
//         prevCountdown > 0 ? prevCountdown - 1 : 0
//       );
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:2626/api/auctions");

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const result = await response.json();
//         setAuctions(result);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         // Assuming setError is defined somewhere in your component______________________ASK RANI
//         setError("Error fetching data. Please try again later.");
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="container mx-auto my-8">
//       <h1 className="text-4xl font-bold mb-6">All Auctions</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {auctions.map((auction) => (
//           <div key={auction.id} className="bg-white rounded p-4 shadow-md">
//             <img
//               src={auction.image}
//               alt={auction.title}
//               className="w-full h-40 object-cover rounded mb-4"
//             />
//             <h2 className="text-xl font-bold mb-2">{auction.title}</h2>
//             <p className="text-gray-600 mb-4">{auction.description}</p>
//             <div className="flex justify-between">
//               <span className="text-blue-500">{auction.createdby}</span>
//               <span className="text-gray-700">{auction.startprice}</span>
//             </div>
//             <div className="mt-4">
//               {/* Integrate CardTimerAndDetails for each auction */}
//               <CardTimerAndDetails
//                 image={auction.image}
//                 title={auction.title}
//                 text={auction.description}
//               />
//               <Link to={`/view/${auction.id}`} className="text-blue-500"></Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ViewAllAuctions;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardTimerAndDetails from "../layout/ViewEachCardDetails";
import ViewDetails from "../layout/ViewCardPage";

const ViewAllAuctions = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:2626/api/auctions");

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {auctions.map((auction) => (
          // <div key={auction.id} className="bg-white rounded p-4 shadow-md">
          //   <img
          //     src={auction.image}
          //     alt={auction.title}
          //     className="w-full h-40 object-cover rounded mb-4"
          //   />
          //   <h2 className="text-xl font-bold mb-2">{auction.title}</h2>
          //   <p className="text-gray-600 mb-4">{auction.description}</p>
          //   <div className="flex justify-between">
          //     <span className="text-blue-500">{auction.createdby}</span>
          //     <span className="text-gray-700">{auction.startprice}</span>
          //   </div>
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
