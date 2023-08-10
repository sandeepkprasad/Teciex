import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import logo from "../Assests/logo.jpg";

const Footer = () => {
  return (
    <section className="pt-5">
      <div className="container-fluid py-4 bg-primary-subtle rounded-top">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4 ps-5">
            <img className="rounded mb-3" width={150} src={logo} alt="..." />
            <p className="mb-0">
              No. 26, 2nd Cross,<br></br>Amba Bhawani Road, Sai Nagar-1,
              <br></br>
              Behind Hamson Super Market, Vidyaranyapura, Bengaluru, PIN -
              560097
            </p>
          </div>
          <div className="col-md-3">
            <div className="links ps-5">
              <h5 className="fw-bold">Links</h5>
              <p className="mb-2">
                <Link className="text-decoration-none text-dark" to="/">
                  Home
                </Link>
              </p>
              <p className="mb-2">
                <Link className="text-decoration-none text-dark" to="/about">
                  About Us
                </Link>
              </p>
              <p className="mb-2">
                <Link className="text-decoration-none text-dark" to="/services">
                  Our Services
                </Link>
              </p>
              <p className="mb-0">
                <Link className="text-decoration-none text-dark" to="/contacts">
                  Contacts
                </Link>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="socials ps-5">
              <h5 className="fw-bold">Our Socials</h5>
              <p className="mb-2">
                <FaFacebook className=" mb-1 me-2" />
                Facebook
              </p>
              <p className="mb-0">
                <AiFillTwitterCircle className="mb-1 me-2" />
                Twitter
              </p>
            </div>
          </div>
        </div>
        <div className="footer-text text-center mt-5">
          <p className="text-muted mb-0">
            Copyright © 2023 Teciex Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
