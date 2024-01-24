// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function SearchBar() {
//   const [searchTerm, setSearchTerm] = useState({
//     title: "",
//     category: "",
//     address: "",
//   });
//   const [isValid, setisValid] = useState([]);
//   const [myItemsButtons, setMyItemsButtons] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:2626/api/auctions");
//         setSearchTerm(response.data);
//       } catch (error) {
//         console.log("Error fetching data", error);
//       }
//     };

//     fetchData();
//   }, []);
//   const checkData = () => {
//     if ((searchTerm.target, value)) {
//       setisValid(true);
//     } else {
//       console.log("Search item not available", searchTerm.target);
//     }
//     checkData(searchTerm);
//     console.log(isValid);

//     useEffect(() => {
//       const myItemsNames = () => {
//         const name = nonChangedCategories.map((item) => item.category);
//         setMyItemsButtons([...new Set(name)]);
//       };
//       myItemsNames();
//     }, [categories]);

//     const handleChange = async (e) => {
//       setSelectedValue(e.target.value);
//     };
//     useEffect(() => {
//       if (!selectedValue) return;
//       const filteredItems = items.filter((cat) => cat.item === selectedValue);
//       console.log(filteredItems);
//       setFilteredItems(setFilteredItems);
//     }, [selectedValue]);
//     console.log(selectedValue);

//     return (
//       //  JSX components or UI elements go here
//       <div>
//         <div class="flex items-center justify-center min-h-screen from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br">
//           <form action="" class="relative mx-auto flex">
//             <input
//               type="search"
//               class="text-xs peer cursor-pointer relative z-10 h-8 w-10 rounded-lg border bg-transparent  pr-6 outline-none focus:rounded-r-none focus:w-full focus:cursor-text focus:border-taupeGray focus:px-3"
//               placeholder={(value = { selectedValue })}
//               onChange={handleChange}
//               onClick={() => setSelectedValue("")}
//             />
//             <button class="absolute top-0 right-0 bottom-0 my-auto h-8 w-10 px-3 bg-slate-300 rounded-lg peer-focus:relative peer-focus:rounded-l-none">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 x="0px"
//                 y="0px"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 50 50"
//               >
//                 <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
//               </svg>
//             </button>
//           </form>
//         </div>
//         {searchTerm.map((item) => (
//           <div key={item.id}>{item.title}</div>
//         ))}
//       </div>
//     );
//   };
// }
// export default SearchBar;

// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";

// function SearchBar() {
//   const [searchTerm, setSearchTerm] = useState(""); // Changed state type to string
//   const [isValid, setIsValid] = useState(false); // Changed state type to boolean
//   const [myItemsButtons, setMyItemsButtons] = useState([]);
//   const [items, setItems] = useState([]); // Added state for items
//   const [filteredItems, setFilteredItems] = useState([]); // Added state for filtered items
//   const [selectedValue, setSelectedValue] = useState(""); // Added state for selected value
//   const valueRef = useRef(null);
//   const [input, setInput] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:2626/api/auctions");
//         setItems(response.data); // Set items state with API response data
//       } catch (error) {
//         console.log("Error fetching data", error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const myItemsNames = () => {
//       const name = items.map((item) => item.title); // Use items state to get titles
//       setMyItemsButtons([...new Set(name)]);
//     };
//     myItemsNames();
//   }, [items]);

//   const handleChange = (e) => {
//     setSearchTerm(e.target.value);
//   };
//   setInput(valueRef.current.value);
//   useEffect(() => {
//     // if (!selectedValue) return;

//     const filteredItems = items.filter((item) => item.title === input); // Filter items based on selected value
//     setFilteredItems(filteredItems);
//     console.log(valueRef.current.value);
//   }, []);

//   return (
//     <div>
//       <div className="flex items-center justify-center min-h-screen from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br">
//         <form action="" className="relative mx-auto flex">
//           <input
//             type="search"
//             className="text-xs peer cursor-pointer relative z-10 h-8 w-10 rounded-lg border bg-transparent  pr-6 outline-none focus:rounded-r-none focus:w-full focus:cursor-text focus:border-taupeGray focus:px-3"
//             placeholder="Search item"
//             // value={searchTerm}
//             ref={valueRef}
//             // onChange={handleChange}
//           />
//           <button className="absolute top-0 right-0 bottom-0 my-auto h-8 w-10 px-3 bg-slate-300 rounded-lg peer-focus:relative peer-focus:rounded-l-none">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 50 50"
//             >
//               <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
//             </svg>
//           </button>
//         </form>
//       </div>
//       {filteredItems.map((item) => (
//         <div key={item.id}>{item.title}</div>
//       ))}
//     </div>
//   );
// }

// export default SearchBar;
