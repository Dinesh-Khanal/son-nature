import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { galleryContext } from "../context";

const Navigation = () => {
  const { cind } = useContext(galleryContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          NATURE
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Home
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
      </nav>
    </div>
  );
};

export default Navigation;
