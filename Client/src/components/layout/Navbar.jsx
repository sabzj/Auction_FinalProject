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
