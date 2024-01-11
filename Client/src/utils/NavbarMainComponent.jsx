import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// import "./navbarComponent.css";
import { categoriesArray } from "../utils/categoriesObject";
// import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";

const NavbarComponent = () => {
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
    // Add any additional logic related to link clicks
  };

  const toggleCategoriesDropdown = () => {
    setCategoriesDropdown((prev) => !prev);
  };

  const handleCategories = () => {
    toggleCategoriesDropdown(); // Combine toggle logic for better consistency
  };

  return (
    <Navbar expand="lg" className="navbar-container">
      <div className="basic-navbar-nav">
        <Nav className="nav-item">
          <Nav.Link as={Link} to="/" onClick={() => handleLinkClick("/")}>
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/about"
            onClick={() => handleLinkClick("/about")}
          >
            About
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/allAuctions"
            onClick={() => handleLinkClick("/allAuctions")}
          >
            All Actions
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/services"
            onClick={() => handleLinkClick("/services")}
          >
            Services
          </Nav.Link>
          <Nav.Link
            as={Link}
            onClick={handleCategories}
            style={{ color: "white" }}
          >
            Categories{" "}
            {categoriesDropdown ? <span>&#11161;</span> : <span>&#11163;</span>}
          </Nav.Link>
        </Nav>
        {categoriesDropdown && (
          <div className="dropdownFather">
            {categoriesArray.map((category) => (
              <NavDropdown
                key={category.category}
                title={category.category}
                id="basic-nav-dropdown"
                className="custom-dropdown"
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick(category.category);
                }}
              >
                {category.values.map((subCategory, i) => (
                  <NavDropdown.Item
                    key={i}
                    as={Link}
                    to={`/category/${subCategory}`}
                    className="custom-dropdown-item"
                  >
                    {subCategory}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            ))}
          </div>
        )}
      </div>

      <div className="logInRegister">
        <Nav.Link
          as={Link}
          to="/login"
          className="nav-item"
          onClick={() => handleLinkClick("/login")}
        >
          LogIn
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/register"
          className="nav-item"
          onClick={() => handleLinkClick("/register")}
        >
          Register
        </Nav.Link>
      </div>
      {/* Add your search form or other components here */}
    </Navbar>
  );
};

export default NavbarComponent;
