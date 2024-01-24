// import React, { useState, useEffect } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import categoriesObjects from "./categoriesObject";

// const navigate = useNavigate();
// const Param = useParams();

// const CategorySearch = ({ categories, onSearch, onShowAllCategories }) => {
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [selectedValue, setSelectedValue] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     // Fetch data based on the category and value
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:2626/api/auctions", {
//           params: {
//             category,
//             value,
//           },
//         });
//         setSearchResults(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [category, value]);
//   console.log(searchResults);
//   const handleSearch = (category, value) => {
//     if (category && value) {
//       navigate.push(`/search/${category}/${value}`);
//     } else {
//       console.log("Please select a category and value for search");
//     }
//   };

//   const handleShowAllCategories = () => {
//     setSelectedCategory("");
//     setSelectedValue("");
//     onShowAllCategories();
//   };

//   return (
//     <div>
//       <h2>Category Search</h2>
//       <select
//         value={selectedCategory}
//         onChange={(e) => setSelectedCategory(e.target.value)}
//       >
//         <option value="">Select Category</option>
//         {categories.map((category) => (
//           <option key={category.category} value={category.category}>
//             {category.category}
//           </option>
//         ))}
//       </select>
//       {selectedCategory && (
//         <select
//           value={selectedValue}
//           onChange={(e) => setSelectedValue(e.target.value)}
//         >
//           <option value="">Select Value</option>
//           {categories
//             .find((cat) => cat.category === selectedCategory)
//             ?.values.map((value) => (
//               <option key={value} value={value}>
//                 <Link to={`/category/${value}`}> {value}</Link>
//               </option>
//             ))}
//         </select>
//       )}
//       <button onClick={handleSearch}>Search</button>
//       <button onClick={handleShowAllCategories}>All categories</button>
//     </div>
//   );
// };

// export default CategorySearch;
