import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { galleryContext } from "../context";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  const { cind } = useContext(galleryContext);

  return (
    <div>
      <Navbar
        bg="light"
        expand="lg"
        className="navbar-dark bg-dark container mb-0 mt-0"
      >
        <Navbar.Brand>
          <Link to="/" className="nav-link text-decoration-none">
            <h3
              style={{ fontFamily: "cambria", color: "#DEEF59" }}
              className="my-0"
            >
              NATURE
            </h3>
          </Link>
        </Navbar.Brand>
        <span className="ml-auto d-block d-sm-none ">
          <Link to="/cart" className="nav-link">
            <i
              className="fas fa-shopping-cart fa-lg text-warning"
              style={{ fontSize: "20px" }}
            ></i>
            <span
              className={
                cind.length === 0
                  ? "text-dark"
                  : "badge badge-danger text-light ml-1"
              }
            >
              {cind.length}
            </span>
          </Link>
        </span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="#link">
              {" "}
              <Link to="/about" className="nav-link">
                About
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <span className="ml-auto d-none d-sm-block d-md-block d-lg-block">
          <Link to="/cart" className="nav-link">
            <i
              className="fas fa-shopping-cart fa-lg text-warning"
              style={{ fontSize: "20px" }}
            ></i>
            <span
              className={
                cind.length === 0
                  ? "text-dark"
                  : "badge badge-danger text-light ml-1"
              }
            >
              {cind.length}
            </span>
          </Link>
        </span>
      </Navbar>
    </div>
  );
};

export default Navigation;
