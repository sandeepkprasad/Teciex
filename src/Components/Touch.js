import React from "react";
import letterImg from "../Assests/letter.svg";

const Touch = () => {
  return (
    <section>
      <div className="container-lg py-5">
        <div className="row justify-content-center">
          <div className="col-6 col-md-6">
            <div className="heading text-center">
              <p className="fw-bold text-muted mb-0">SUBSCRIBE</p>
              <h3 className="fw-bold">Subscribe Our Newsletter</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-4 col-md-4">
            <div className="news-img">
              <img height={175} width={350} src={letterImg} alt="..." />
            </div>
          </div>
          <div className="col-6 col-md-6 mt-3">
            <div className="items">
              <p className="fw-bold mb-4">Get in touch and let us build something amazing together!</p>
              <input
                type="email"
                className="form-control mb-4 rounded-5 shadow"
                id="email"
                placeholder="Your Email here..."
              ></input>
              <button type="button" className="btn btn-outline-primary btn-sm">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Touch;
