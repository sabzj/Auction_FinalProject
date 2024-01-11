import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./navbarComponent.css";
import { categoriesArray } from "../../utils/categoriesObject";
// import LogInMainPage from "../login/LogInMainPage";

const NavbarComponent = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [categoriesDropdown, setCategoriesDropdown] = useState(false);
  const [categoriesSubs, setCategoriesSubs] = useState([]);

  function handleCategoryClick(category) {
    const selectedCategory = categoriesArray.find(
      (c) => c.category === category
    );

    if (selectedCategory) {
      setCategoriesSubs(selectedCategory.values);
    } else {
      console.error("Category not found");
      setCategoriesSubs([]);
    }
  }
  // console.log(categoriesSubs);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const toggleCategoriesDropdown = () => {
    setCategoriesDropdown(!categoriesDropdown);
  };

  function handleCategories() {
    setCategoriesDropdown((prev) => !prev);
  }
  return (
    <Navbar expand="lg" className="navbar-container">
      <div className="basic-navbar-nav">
        {/* <LogInMainPage /> */}
        {/* <IconButtons /> */}
        <div id="basic-navbar-nav">
          <Nav className="nav-item">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/allAuctions">
              All Actions
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link
              as={Link}
              onClick={handleCategories}
              style={{ color: "white" }}
            >
              Categories{" "}
              {categoriesDropdown ? (
                <span>&#11161;</span>
              ) : (
                <span>&#11163;</span>
              )}
            </Nav.Link>
          </Nav>
        </div>
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
        <Nav.Link as={Link} to="/login" className="nav-item">
          LogIn
        </Nav.Link>
        <Nav.Link as={Link} to="/Register" className="nav-item">
          Register
        </Nav.Link>
      </div>
      {/* <Form className="d-flex">
          <Form.Control
            type="search"
            id="item"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form> */}

      {/* Modal */}
    </Navbar>
  );
};

export default NavbarComponent;
