import React from "react";

const ContactUs = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="text-center py-3">
          <h3 className="fs-3 fw-bold">Let Us In Touch With You</h3>
        </div>
        <div
          className="col-md-8 border border-primary-subtle p-5 rounded bg-light"
          style={{ width: "24rem" }}
        >
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-bold">
                Full Name
              </label>
              <input
                type="name"
                className="form-control"
                id="name"
                name="name"
                value=""
                aria-describedby="emailHelp"
                placeholder="Enter Your Full Name"
              />
              <label htmlFor="number" className="form-label fw-bold mt-3">
                Mobile
              </label>
              <input
                type="number"
                className="form-control"
                id="number"
                name="number"
                value=""
                aria-describedby="emailHelp"
                placeholder="Enter Your Mobile Number"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value=""
                placeholder="Enter Your Email"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
