import React from "react";
import about from "../Assests/about.svg";
import aboutImg from "../Assests/about-img.png";
import Team from "../Components/Team";

const About = () => {
  return (
    <section>
      <div className="container-lg py-5">
        <div className="about mb-5">
          <h3 className="fw-bold">About Us</h3>
        </div>
        <div className="container-lg mb-5">
          <div className="about-img text-center">
            <img width="75%" src={aboutImg} alt="..." />
          </div>
        </div>
        <div className="row d-flex justify-content-between border rounded py-3">
          <div className="col-6 col-md-6">
            <div className="about-text">
              <p className="text-muted fw-bold">WHO WE ARE</p>
              <p>
                We are a professionally managed company with a good track record
                of extremely satisfied customers and have successfully
                established a strong customer base across the globe.
              </p>
              <p>
                Teciex Solutions, where your ideas shape into reality, we are
                one of the best emerging IT service company providing the broad
                range of services and solutions in Website Design, Web
                Development, Logo & Branding, UI Design, PHP Development,
                WordPress Development , SEO & Digital Marketing.
              </p>
              <p className="mb-0">
                Our digital Marketing is focused on the latest and the most
                effective strategies and systems that are put our client's
                website in the top rankings of various search engine results.
                Our Online Marketing strategies use innovative and tested
                methods that engage people and bring them to your webpage.
              </p>
            </div>
          </div>
          <div className="col-4 col-md-4">
            <div className="about-image my-5">
              <img height={250} width="100%" src={about} alt="..." />
            </div>
          </div>
        </div>
      </div>
      <Team />
    </section>
  );
};

export default About;
