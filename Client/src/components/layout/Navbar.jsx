import React, { useState } from "react";
import { Link } from "react-router-dom";
import { categoriesArray } from "../categoriesObject";

const NavbarComponent = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [categoriesDropdown, setCategoriesDropdown] = useState(false);
  const [categoriesSubs, setCategoriesSubs] = useState([]);

  const handleCategoryClick = (category) => {
    const selectedCategory = categoriesArray.find(
      (c) => c.category === category
    );

    if (selectedCategory) {
      setCategoriesSubs(selectedCategory.values);
    } else {
      console.error("Category not found");
      setCategoriesSubs([]);
    }
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const toggleCategoriesDropdown = () => {
    setCategoriesDropdown(!categoriesDropdown);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className={`text-white ${activeLink === "/" ? "font-bold" : ""}`}
              onClick={() => handleLinkClick("/")}
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
            <button className="text-white" onClick={toggleCategoriesDropdown}>
              Categories{" "}
              {categoriesDropdown ? (
                <span>&#11161;</span>
              ) : (
                <span>&#11163;</span>
              )}
            </button>
            {categoriesDropdown && (
              <div className="dropdownFather">
                {categoriesArray.map((category) => (
                  <div key={category.category} className="custom-dropdown">
                    <button
                      className="text-white"
                      onClick={() => handleCategoryClick(category.category)}
                    >
                      {category.category}
                    </button>
                    {categoriesSubs.map((subCategory, i) => (
                      <Link
                        key={i}
                        to={`/category/${subCategory}`}
                        className="custom-dropdown-item text-white"
                      >
                        {subCategory}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-white">
              LogIn
            </Link>
            <Link to="/register" className="text-white">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
