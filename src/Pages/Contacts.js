import React, { useEffect } from "react";
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
        <div className="container-lg mb-5">
          <div className="contact-img text-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62177.91231202048!2d77.545953!3d13.091611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae239fca36d85f%3A0x2491e7d8df223852!2sRCS%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1691936009210!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: "0px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="shadow rounded-4"
            ></iframe>
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
