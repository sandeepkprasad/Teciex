import React from "react";
import { Link } from "react-router-dom";
import landImage from "../Assests/land-img.png";

const Landing = () => {
  return (
    <section>
      <div className="container-lg py-5">
        <div className="row d-flex justify-content-between" style={{paddingTop: "75px"}}>
          <div className="col-10 col-md-5">
            <div className="title mb-4">
              <h1 className="fw-bold">
                We boost<br></br>growth for your business
              </h1>
            </div>
            <div className="text mb-5">
              <p className="fw-bold text-muted">
                We are a team of highly motivated and skilled developers
                dedicated to delivering the best software.
              </p>
            </div>
            <Link className="btn btn-primary btn-sm" to="/about" role="button">
              Learn more
            </Link>
          </div>
          <div className="col-10 col-md-5">
            <div className="land-img">
              <img height={300} width="100%" src={landImage} alt="..." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
