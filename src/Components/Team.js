import React from "react";
import sandeep from "../Assests/sandeep.jpg";
import profile from "../Assests/profile.webp";
import sunil from "../Assests/sunil.jpg";
import hs from "../Assests/hs.jpg";

const Team = () => {
  return (
    <section>
      <div className="container-lg py-5">
        <div className="row justify-content-center">
          <div className="col-6 col-md-6">
            <div className="heading text-center">
              <p className="fw-bold text-muted mb-0">OUR TEAM</p>
              <h3 className="fw-bold">Meet The Team</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-8 col-md-2 py-4 mx-2 mb-2 rounded border">
            <div className="team text-center">
              <img
                height={100}
                width={100}
                src={sunil}
                alt="..."
                className="rounded-circle mb-3"
              />
              <h5 className="fw-bold mb-2">Sunil Kumar</h5>
              <p className="text-muted mb-0">Director, Tech & Sales</p>
            </div>
          </div>
          <div className="col-8 col-md-2 py-4 mx-2 mb-2 rounded border">
            <div className="team text-center">
              <img
                height={100}
                width={100}
                src={hs}
                alt="..."
                className="rounded-circle mb-3"
              />
              <h5 className="fw-bold mb-2">HS Raghav</h5>
              <p className="text-muted mb-0">HR, IT Manager</p>
            </div>
          </div>
          <div className="col-8 col-md-2 py-4 mx-2 mb-2 rounded border">
            <div className="team text-center">
              <img
                height={100}
                width={100}
                src={profile}
                alt="..."
                className="rounded-circle mb-3"
              />
              <h5 className="fw-bold mb-2">Rajat Mishra</h5>
              <p className="text-muted mb-0">Senior Developer</p>
            </div>
          </div>
          <div className="col-8 col-md-2 py-4 mx-2 mb-2 rounded border">
            <div className="team text-center">
              <img
                height={100}
                width={100}
                src={sandeep}
                alt="..."
                className="rounded-circle mb-3"
              />
              <h5 className="fw-bold mb-2">Sandeep Kumar</h5>
              <p className="text-muted mb-0">Lead Developer</p>
            </div>
          </div>
          <div className="col-8 col-md-2 py-4 mx-2 mb-2 rounded border">
            <div className="team text-center">
              <img
                height={100}
                width={100}
                src={profile}
                alt="..."
                className="rounded-circle mb-3"
              />
              <h5 className="fw-bold mb-2">Saurabh Kumar</h5>
              <p className="text-muted mb-0">Junior Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
