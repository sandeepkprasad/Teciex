import React from "react";
import { Link } from "react-router-dom";
import landImage from "../Assests/land-img.avif";

const Landing = () => {
  return (
    <section className="bg-primary-subtle mt-5">
      <div className="container-lg pb-5 d-none d-sm-block">
        <div
          className="row d-flex justify-content-between"
          style={{ paddingTop: "75px" }}
        >
          <div className="col-10 col-md-6">
            <div className="title mb-4">
              <h1 className="fw-bold">
                Teciex Solutions for your unique business needs
              </h1>
            </div>
            <div className="text mb-5">
              <p className="fw-bold text-muted">
                We are a team of highly motivated and skilled developers
                dedicated to delivering the best software. We don't just build
                websites, we build websites that SELLS. We provide complete
                solutions for SME & Startups.
              </p>
            </div>
            <Link className="btn btn-primary btn-sm" to="/about" role="button">
              Learn more
            </Link>
          </div>
          <div className="col-10 col-md-5">
            <div className="land-img">
              <img
                height={300}
                width="100%"
                src={landImage}
                alt="..."
                className="rounded"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-lg pb-5 d-block d-sm-none">
        <div
          className="row d-flex justify-content-center"
          style={{ paddingTop: "75px" }}
        >
          <div className="col-10 col-md-6">
            <div className="title mb-4">
              <h1 className="fw-bold">
                Teciex Solutions for your unique business needs
              </h1>
            </div>
            <div className="text mb-5">
              <p className="fw-bold text-muted">
                We are a team of highly motivated and skilled developers
                dedicated to delivering the best software. We don't just build
                websites, we build websites that SELLS. We provide complete
                solutions for SME & Startups.
              </p>
            </div>
            <Link className="btn btn-primary btn-sm" to="/about" role="button">
              Learn more
            </Link>
          </div>
          <div className="col-10 col-md-5 order-first mb-4">
            <div className="land-img">
              <img
                height={300}
                width="100%"
                src={landImage}
                alt="..."
                className="rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
