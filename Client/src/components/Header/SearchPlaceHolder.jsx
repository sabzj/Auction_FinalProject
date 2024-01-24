// // import React, { useState } from "react";
// // import axios from "axios";
// // import Modal from "react-modal";

// // const SearchForAuction = () => {
// //   const [searchCategory, setSearchCategory] = useState({
// //     title: "",
// //     category: "",
// //     adress: "",
// //   });

// //   const [searchResults, setSearchResults] = useState([]);
// //   const [selectedResult, setSelectedResult] = useState(null);
// //   const [isModalOpen, setIsModalOpen] = useState(false);

// //   const handleChange = (e) => {
// //     const { id, value } = e.target;
// //     setSearchCategory((prevCategory) => ({
// //       ...prevCategory,
// //       [id]: value,
// //     }));
// //   };

// //   const handleSearch = async () => {
// //     try {
// //       if (
// //         searchCategory.title ||
// //         searchCategory.category ||
// //         searchCategory.adress
// //       ) {
// //         const response = await axios.get("http://localhost:2626/api/auctions", {
// //           params: searchCategory,
// //         });

// //         setSearchResults(response.data);
// //       } else {
// //         // Handle the case when none of the search criteria is provided
// //         console.log("Please enter at least one search criteria");
// //       }
// //     } catch (error) {
// //       console.error("Error during search:", error);
// //     }
// //   };

// //   const openDetailsModal = (result) => {
// //     setSelectedResult(result);
// //     setIsModalOpen(true);
// //   };

// //   const closeDetailsModal = () => {
// //     setSelectedResult(null);
// //     setIsModalOpen(false);
// //   };

// //   return (
// //     <div className="container mx-auto mt-8 p-4">
// //       <h2 className="text-2xl font-bold mb-4">Search title</h2>
// //       <div className="mb-4">
// //         <label
// //           htmlFor="title"
// //           className="block text-sm font-medium text-gray-600"
// //         >
// //           Title:
// //         </label>
// //         <input
// //           type="text"
// //           id="title"
// //           value={searchCategory.title}
// //           onChange={handleChange}
// //           placeholder="Enter title"
// //           className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
// //         />
// //       </div>
// //       <div className="mb-4">
// //         <label
// //           htmlFor="category"
// //           className="block text-sm font-medium text-gray-600"
// //         >
// //           Category:
// //         </label>
// //         <input
// //           type="text"
// //           id="category"
// //           value={searchCategory.category}
// //           onChange={handleChange}
// //           placeholder="Enter category"
// //           className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
// //         />
// //       </div>
// //       <div className="mb-4">
// //         <label
// //           htmlFor="adress"
// //           className="block text-sm font-medium text-gray-600"
// //         >
// //           Address:
// //         </label>
// //         <input
// //           type="text"
// //           id="adress"
// //           value={searchCategory.adress}
// //           onChange={handleChange}
// //           placeholder="Enter adress"
// //           className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
// //         />
// //       </div>
// //       <button
// //         onClick={handleSearch}
// //         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
// //       >
// //         Search
// //       </button>

// //       <div className="mt-8">
// //         <h3 className="text-xl font-bold mb-4">Search Results</h3>
// //         <ul>
// //           {searchResults.map((result) => (
// //             <li key={result.id} className="mb-4">
// //               <span className="mr-2">{result.title}</span>
// //               <span className="mr-2">{result.category}</span>
// //               <span className="mr-2">{result.adress}</span>
// //               <button
// //                 onClick={() => openDetailsModal(result)}
// //                 className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
// //               >
// //                 View Details
// //               </button>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>

// //       <Modal
// //         isOpen={isModalOpen}
// //         onRequestClose={closeDetailsModal}
// //         ariaHideApp={false}
// //         className="modal"
// //         overlayClassName="overlay"
// //       >
// //         <h2 className="text-2xl font-bold mb-4">Detailed Information</h2>
// //         {selectedResult && (
// //           <div>
// //             <p>title: {selectedResult.title}</p>
// //             <p>Category: {selectedResult.category}</p>
// //             <p>adress: {selectedResult.adress}</p>
// //           </div>
// //         )}
// //         <button
// //           onClick={closeDetailsModal}
// //           className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
// //         >
// //           Close
// //         </button>
// //       </Modal>
// //     </div>
// //   );
// // };

// // export default SearchForAuction;

// import React, { useState } from "react";
// import axios from "axios";
// import Modal from "react-modal";

// const SearchForAuction = () => {
//   const [searchCriteria, setSearchCriteria] = useState({
//     title: "",
//     category: "",
//     address: "",
//   });

//   const handleSearch = async () => {
//     try {
//       const hasSearchCriteria = Object.values(searchCriteria);

//       if (hasSearchCriteria) {
//         const response = await axios.get("http://localhost:2626/api/auctions", {
//           params: searchCriteria,
//         });

//         setSearchResults(response.data);
//       } else {
//         // Handle the case when none of the search criteria is provided
//         console.log("Please enter at least one search criteria");
//       }
//     } catch (error) {
//       console.error("Error during search:", error);
//     }
//   };

//   const [searchResults, setSearchResults] = useState([]);
//   const [selectedResult, setSelectedResult] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setSearchCriteria((prevCriteria) => ({
//       ...prevCriteria,
//       [id]: value,
//     }));
//   };

//   const openDetailsModal = (result) => {
//     setSelectedResult(result);
//     setIsModalOpen(true);
//   };

//   const closeDetailsModal = () => {
//     setSelectedResult(null);
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="container mx-auto mt-8 p-4">
//       <h2 className="text-2xl font-bold mb-4">Search Criteria</h2>
//       {Object.entries(searchCriteria).map(([key, value]) => (
//         <div key={key} className="mb-4">
//           <label
//             htmlFor={key}
//             className="block text-sm font-medium text-gray-600"
//           >
//             {key.charAt(0).toUpperCase() + key.slice(1)}:
//           </label>
//           <input
//             type="text"
//             id={key}
//             value={value}
//             onChange={handleChange}
//             placeholder={`Enter ${key}`}
//             className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//           />
//         </div>
//       ))}
//       <button
//         onClick={handleSearch}
//         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//       >
//         Search
//       </button>

//       <div className="mt-8">
//         <h3 className="text-xl font-bold mb-4">Search Results</h3>
//         <ul>
//           {searchResults.map((result) => (
//             <li key={result.id} className="mb-4">
//               {Object.entries(result).map(([key, value]) => (
//                 <span key={key} className="mr-2">
//                   {value}
//                 </span>
//               ))}
//               <button
//                 onClick={() => openDetailsModal(result)}
//                 className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
//               >
//                 View Details
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <Modal
//         isOpen={isModalOpen}
//         onRequestClose={closeDetailsModal}
//         ariaHideApp={false}
//         className="modal"
//         overlayClassName="overlay"
//       >
//         <h2 className="text-2xl font-bold mb-4">Detailed Information</h2>
//         {selectedResult && (
//           <div>
//             {Object.entries(selectedResult).map(([key, value]) => (
//               <p key={key}>
//                 {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
//               </p>
//             ))}
//           </div>
//         )}
//         <button
//           onClick={closeDetailsModal}
//           className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
//         >
//           Close
//         </button>
//       </Modal>
//     </div>
//   );
// };

// export default SearchForAuction;
