import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import logo from "../Assests/logo.jpg";

const Footer = () => {
  return (
    <section className="pt-5">
      <div className="container-fluid py-4 bg-primary-subtle rounded-top d-none d-sm-block">
        <div className="row d-flex justify-content-between">
          <div className="col-md-3 ps-5">
            <img className="rounded mb-3" width={150} src={logo} alt="..." />
            <p>
              Mahesh Bhath<br></br>
              232 Eastforest Trail Kitchener ON N2N3E9 2265074329 Canada
            </p>
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
          <div className="col-md-3">
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
          <div className="col-md-3">
            <div className="map-location">
              <h5 className="fw-bold mb-3">Find Us</h5>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62177.91231202048!2d77.545953!3d13.091611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae239fca36d85f%3A0x2491e7d8df223852!2sRCS%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1691902875819!5m2!1sen!2sin"
                width="280"
                height="200"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="rounded-4 shadow"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="footer-text text-center mt-5">
          <p className="text-muted mb-0">
            Copyright © 2023 Teciex Solutions. All Rights Reserved.
          </p>
        </div>
      </div>

      <div className="container-fluid py-4 bg-primary-subtle rounded-top d-block d-sm-none">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4 text-center mb-4">
            <img className="rounded mb-3" width={150} src={logo} alt="..." />
            <p>
              Mahesh Bhath<br></br>
              232 Eastforest Trail Kitchener ON N2N3E9 2265074329 Canada
            </p>
            <p className="mb-0">
              No. 26, 2nd Cross,<br></br>Amba Bhawani Road, Sai Nagar-1,
              <br></br>
              Behind Hamson Super Market, Vidyaranyapura, Bengaluru, PIN -
              560097
            </p>
          </div>
          <div className="col-md-3">
            <div className="links text-center mb-4">
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
            <div className="socials text-center mb-4">
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
          <div className="col-md-3">
            <div className="map-location text-center">
              <h5 className="fw-bold mb-3">Find Us</h5>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62177.91231202048!2d77.545953!3d13.091611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae239fca36d85f%3A0x2491e7d8df223852!2sRCS%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1691902875819!5m2!1sen!2sin"
                width="280"
                height="200"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="rounded-4 shadow"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="footer-text text-center mt-5">
          <p className="text-muted mb-0">
            Copyright © 2023 Teciex Solutions.<br></br>All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
