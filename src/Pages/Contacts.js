import React, { useEffect } from "react";
import contactsImg from "../Assests/contacts-img.webp";
import { FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <div className="container-lg py-5">
        <div className="about mb-5">
          <h3 className="fw-bold">Our Contacts</h3>
        </div>
        <div className="container-lg bg-primary-subtle border rounded mb-5">
          <div className="contact-img text-center py-5">
            <img height={100} width={100} src={contactsImg} alt="..." />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8 col-md-5 border rounded p-3 mx-2 mb-2">
            <p className="text-muted mb-1">
              <FaMapMarkerAlt className="me-2" />
              Address
            </p>
            <p className="mb-0">
              No. 26, 2nd Cross, Amba Bhawani Road, Sai Nagar-1, Behind Hamson
              Super Market, Vidyaranyapura, Bengaluru, PIN - 560097
            </p>
          </div>
          <div className="col-8 col-md-5 border rounded p-3 mx-2 mb-2">
            <div className="mobile">
              <p className="text-muted mb-1">
                <FaMobileAlt className="me-2" />
                Mobile
              </p>
              <p>+91 99162 55206</p>
            </div>
            <div className="email">
              <p className="text-muted mb-1">
                <MdOutlineAlternateEmail className="me-2" />
                Email
              </p>
              <p className="mb-0">info@teciexsolutions.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
