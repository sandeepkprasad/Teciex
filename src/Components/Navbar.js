import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Assests/logo.jpg";

const Navbar = () => {
  let location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top shadow-sm">
      <div className="container-lg">
        <Link className="navbar-brand fw-bold text-primary fs-3" to="/">
          <img width={150} src={logo} alt="..." />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link fw-bold mx-2 ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link fw-bold mx-2 ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link fw-bold mx-2 ${
                  location.pathname === "/services" ? "active" : ""
                }`}
                to="/services"
              >
                Our Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link fw-bold mx-2 ${
                  location.pathname === "/contacts" ? "active" : ""
                }`}
                to="/contacts"
              >
                Contacts
              </Link>
            </li>
          </ul>
          <div className="ms-2 ms-md-4">
            <Link className="btn btn-outline-primary shadow-sm" to="/contactus" role="button">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
