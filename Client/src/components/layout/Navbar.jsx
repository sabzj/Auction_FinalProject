import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { categoriesArray } from "../categoriesObject";
import axios from "axios";
import useLogin from "../../hooks/userLogin";

// import Sidebar from "../SideBar";

const NavbarComponent = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [categoriesDropdown, setCategoriesDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  // const [sidebarContent, setSidebarContent] = useState("");

  const { setSuccess, success } = useLogin(
    "https://new-auction-api.onrender.com/api/users/login "
  );

  useEffect(() => {
    // Fetch data based on the category and value
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
        setSearchResults(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(searchResults);

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    setCategoriesDropdown(!categoriesDropdown);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setCategoriesDropdown(false);
  };

  const handleSidebarButtonClick = (content) => {
    setSidebarContent(content);
  };

  return (
    <div>
      {/* <Sidebar onSidebarButtonClick={handleSidebarButtonClick} /> */}
      <nav className="bg-gray-800 p-4 relative z-[60]">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className={`text-white ${activeLink === "/" ? "font-bold" : ""}`}
                onClick={() => handleSidebarButtonClick("/")}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-white ${
                  activeLink === "/about" ? "font-bold" : ""
                }`}
                onClick={() => handleLinkClick("/about")}
              >
                About
              </Link>
              <Link
                to="/allAuctions"
                className={`text-white ${
                  activeLink === "/allAuctions" ? "font-bold" : ""
                }`}
                onClick={() => handleLinkClick("/allAuctions")}
              >
                All Actions
              </Link>
              <Link
                to="/services"
                className={`text-white ${
                  activeLink === "/services" ? "font-bold" : ""
                }`}
                onClick={() => handleLinkClick("/services")}
              >
                Services
              </Link>
              <div className="relative inline-block text-left">
                <Link
                  to="/category"
                  className={`text-white ${
                    activeLink === "/category" ? "font-bold" : ""
                  }`}
                  onClick={() => handleLinkClick("/category")}
                >
                  Categories
                </Link>
                {/* <button
                  className="text-white focus:outline-none"
                  onClick={() => setCategoriesDropdown(!categoriesDropdown)}
                > */}

                {/* {categoriesDropdown ? (
                    <span>&#9660;</span>
                  ) : (
                    <span>&#9654;</span>
                  )} */}
                {/* </button> */}
                {/* {categoriesDropdown && (
                  <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      {categoriesArray.map((category) => (
                        <div key={category.category}>
                          <button
                            className={`block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out ${
                              selectedCategory === category.category
                                ? "bg-gray-100"
                                : ""
                            }`}
                            onClick={() =>
                              handleCategoryClick(category.category)
                            }
                          >
                            {category.category}
                          </button>
                          {selectedCategory === category.category && (
                            <div className="pl-4">
                              {category.values.map((subCategory, i) => (
                                <Link
                                  key={i}
                                  // to={{
                                  //   pathname: `/category/${subCategory}`,
                                  //   state: { searchResults },
                                  // }}
                                  to={`/category/${subCategory}`}
                                  className={`block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out`}
                                  onClick={() => setCategoriesDropdown(false)}
                                >
                                  {subCategory}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )} */}
              </div>
            </div>

            {success ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/"
                  className="text-white"
                  onClick={() => setSuccess(false)}
                >
                  Logout
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-white">
                  LogIn
                </Link>
                <Link to="/register" className="text-white">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
