// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";
// function CategoryPage() {
//   const { state } = useLocation();
//   const { searchResults } = state || {};

//   const [categories, setCategories] = useState([]);
//   const [myCategoryButtons, setMyCategoryButtons] = useState([]);
//   const [selectedValue, setSelectedValue] = useState("select category");
//   const [nonChangedCategories, setNonChangedCategories] = useState([]);
//   const [filteredCategories, setFilteredCategories] = useState([]);
//   useEffect(() => {
//     // Fetch data based on the category and value
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:2626/api/auctions", {
//           // params: {
//           //   category,
//           //   value,
//           // },
//         });
//         setCategories(response.data);
//         setNonChangedCategories(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   console.log(categories);
//   console.log(nonChangedCategories);
//   console.log(filteredCategories);
//   const showing =
//     filteredCategories.length === 0 ? categories : filteredCategories;
//   const drawAll = () => {
//     return showing.map((category, i) => {
//       return (
//         <div
//           key={i}
//           style={{ width: "250px", height: "300px", marginTop: "20px" }}
//         >
//           <div>
//             <img
//               src={category.image}
//               alt={category.title}
//               style={{ width: "100%", height: "150px" }}
//             />
//           </div>
//           Title: {category.title} <br />
//           CreatedBy: {category.createdBy} <br />
//           Description: {category.description} <br />
//           Start Price: {category.startprice}$
//         </div>
//       );
//     });
//   };
//   useEffect(() => {
//     const myCategoryNames = () => {
//       const mmm = nonChangedCategories.map((item) => item.category);
//       setMyCategoryButtons([...new Set(mmm)]);
//     };
//     myCategoryNames();
//   }, [categories]);

//   const handleChange = async (e) => {
//     setSelectedValue(e.target.value);
//   };
//   useEffect(() => {
//     if (!selectedValue) return;
//     const filteredCategories = categories.filter(
//       (cat) => cat.category === selectedValue
//     );
//     console.log(filteredCategories);
//     setFilteredCategories(filteredCategories);
//   }, [selectedValue]);
//   console.log(selectedValue);
//   return (
//     <div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <select
//           style={{ border: "1px solid black" }}
//           value={selectedValue}
//           onChange={handleChange}
//           onClick={() => setSelectedValue("")}
//         >
//           {myCategoryButtons.map((input) => {
//             return <option value={input}>{input}</option>;
//           })}
//         </select>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           flexWrap: "wrap",
//           gap: "20px",
//           padding: "10px 40px",
//         }}
//       >
//         {drawAll()}
//       </div>
//       {/* <Link
//         to={`/view/${auctionId}`}
//         className="bg-green-800 text-white px-4 py-2 rounded"
//       >
//         View Details
//       </Link> */}
//     </div>
//   );
// }

// export default CategoryPage;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function CategoryPage() {
  const { state } = useLocation();
  const { searchResults } = state || {};
  const [categories, setCategories] = useState([]);
  const [myCategoryButtons, setMyCategoryButtons] = useState([]);
  const [selectedValue, setSelectedValue] = useState("select category");
  const [nonChangedCategories, setNonChangedCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://new-auction-api.onrender.com/api/auctions",
          {
            // params: {
            //   category,
            //   value,
            // },
          }
        );
        setCategories(response.data);
        setNonChangedCategories(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  console.log(categories);
  console.log(nonChangedCategories);
  console.log(filteredCategories);

  const showing =
    filteredCategories.length === 0 ? categories : filteredCategories;

  const drawAll = () => {
    return showing.map((category, i) => {
      return (
        <div
          key={i}
          style={{ width: "250px", height: "300px", marginTop: "20px" }}
        >
          <div>
            <img
              src={category.image}
              alt={category.title}
              style={{ width: "100%", height: "150px" }}
            />
          </div>
          Title: {category.title} <br />
          CreatedBy: {category.createdBy} <br />
          Description: {category.description} <br />
          Start Price: {category.startprice}$
        </div>
      );
    });
  };

  // const drawAll = () => {
  //   return showing.map((category, i) => {
  //     return (
  //       <div
  //         key={i}
  //         style={{ width: "250px", height: "300px", marginTop: "20px" }}
  //       >
  //         <div>
  //           <img
  //             src={category.image}
  //             alt={category.title}
  //             style={{ width: "100%", height: "150px" }}
  //           />
  //         </div>
  //         Title: {category.title} <br />
  //         CreatedBy: {category.createdBy} <br />
  //         Description: {category.description} <br />
  //         Start Price: {category.startprice}$
  //         <div>
  //           <Link
  //             to={`/view/${category.id}`}
  //             className="bg-green-800 text-white px-4 py-2 rounded"
  //           >
  //             View Details
  //           </Link>
  //           <button
  //             className="bg-red-800 text-white px-4 py-2 rounded"
  //             onClick={() => handleClose()}
  //           >
  //             Close
  //           </button>
  //         </div>
  //       </div>
  //     );
  //   });
  // };

  useEffect(() => {
    const myCategoryNames = () => {
      const mmm = nonChangedCategories.map((item) => item.category);
      setMyCategoryButtons([...new Set(mmm)]);
    };
    myCategoryNames();
  }, [categories]);

  const handleChange = async (e) => {
    setSelectedValue(e.target.value);
  };

  useEffect(() => {
    if (!selectedValue) return;
    const filteredCategories = categories.filter(
      (cat) => cat.category === selectedValue
    );
    console.log(filteredCategories);
    setFilteredCategories(filteredCategories);
  }, [selectedValue]);

  console.log(selectedValue);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Filter :
        <select
          style={{ border: "1px solid black" }}
          value={selectedValue}
          onChange={handleChange}
          onClick={() => setSelectedValue("")}
        >
          {myCategoryButtons.map((input, index) => (
            <option key={index} value={input}>
              {input}
            </option>
          ))}
        </select>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
          padding: "10px 40px",
        }}
      >
        {drawAll()}
      </div>
    </div>
  );
}

//   return (
//     <div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <select
//           style={{ border: "1px solid black" }}
//           value={selectedValue}
//           onChange={handleChange}
//           onClick={() => setSelectedValue("")}
//         >
//           {myCategoryButtons.map((input, index) => (
//             <option key={index} value={input}>
//               {input}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           flexWrap: "wrap",
//           gap: "20px",
//           padding: "10px 40px",
//         }}
//       >
//         {drawAll()}
//       </div>
//       <Link
//         to="/allauctions"
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         Go Back to All Auctions
//       </Link>
//     </div>
//   );
// }
export default CategoryPage;
