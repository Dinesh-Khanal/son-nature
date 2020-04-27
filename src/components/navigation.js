import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { galleryContext } from "../context";
import { Navbar, Nav, NavItem, CollapsibleNav } from "react-bootstrap";

const Navigation = () => {
  const { cind } = useContext(galleryContext);

  return (
    <div>
      <Navbar
        bg="light"
        expand="lg"
        className="navbar-dark bg-dark container mb-0 mt-0"
      >
        <Navbar.Brand href="#home">NATURE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">
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
        <span className="float-right">
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

      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top container">
        <Link className="navbar-brand" to="/">
          NATURE
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
        <span className="float-right ml-4">
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
      </nav> */}
    </div>
  );
};

export default Navigation;
