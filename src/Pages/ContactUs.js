import React, { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="text-center py-3">
          <h3 className="fs-3 fw-bold">Let Us In Touch With You</h3>
        </div>
        <div
          className="col-12 col-md-8 border border-primary-subtle p-5 rounded-5 bg-info shadow"
          style={{ width: "24rem" }}
        >
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-bold">
                Full Name
              </label>
              <input
                type="name"
                className="form-control rounded-5"
                id="name"
                aria-describedby="emailHelp"
              />
              <label htmlFor="number" className="form-label fw-bold mt-3">
                Mobile
              </label>
              <input
                type="number"
                className="form-control rounded-5"
                id="number"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">
                Email
              </label>
              <input
                type="email"
                className="form-control rounded-5"
                id="email"
              />
            </div>
            <div className="mb-3">
              <label fhtmlFor="message" className="form-label fw-bold">
                Message
              </label>
              <textarea
                className="form-control rounded-5"
                id="message"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-danger rounded-5">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
