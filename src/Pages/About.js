import React, { useEffect } from "react";
import about from "../Assests/about.svg";
import aboutImg from "../Assests/about-img.png";
import Team from "../Components/Team";
import sunil from "../Assests/sunil.jpg";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <div className="container-lg py-5 d-none d-sm-block">
        <div className="about mb-5">
          <h3 className="fw-bold">About Us</h3>
        </div>
        <div className="container-lg mb-5">
          <div className="about-img text-center">
            <img width="75%" src={aboutImg} alt="..." />
          </div>
        </div>
        <div className="row d-flex justify-content-between border rounded py-3 mb-5">
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
        <div className="row d-flex justify-content-between border rounded py-3">
          <div className="col-6 col-md-6">
            <div className="about-text">
              <p className="text-muted fw-bold">MEET OUR DIRECTOR</p>
              <p>
                Mr Sunil Kumar is the Director at Teciex Solutions, a software
                platform that enables institutions and SME to understand and
                utilize digitalization in their Business. Thus, by turning
                idealisms into potentials, shaping dreams into reality, and
                exploring what was formerly off the beaten path, RCS has marked
                the ray of Sunshine by accomplishing these all. Dedication,
                commitment, quality, and performance-driven approach are some of
                our resilience fundamental characteristics. RCS does this
                through the combination of product design and development,
                system improvement, and cost controls in manufacturing and
                marketing operations.
              </p>
              <p>
                Our diverse talented team is our greatest asset. We have got our
                own beliefs, values, and codes of practice, that are highly
                nurtured inside the company and append a keen focus on
                technology, clients, and above all, the society. The ongoing
                optimization of our organization’s operational and manufacturing
                process creates maximum cost efficiency by using resources
                optimally. RCS has always been a flag-bearer in an effort to
                bring the technology ahead of time. So, we strived to be the
                best IT industry that delivers sustainable business, software
                excellence, and great revenue generation.
              </p>
              <p className="mb-0">
                On a final note, we firmly believe that the future holds promise
                for us. We are proud of having earned the patronage of many
                reputed companies and strive to add many more to our customer
                base. We pledge to see our growth in yours and have customer
                focus as our guiding light. So if you are an enterprise or a
                professional, as a consumer or a supplier, I welcome you as a
                co-traveler in our quest for excellence.
              </p>
            </div>
          </div>
          <div className="col-4 col-md-4 order-first">
            <div className="about-image my-5">
              <img
                height={250}
                width="100%"
                src={sunil}
                alt="..."
                className="rounded"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-lg py-5 d-block d-sm-none">
        <div className="about mb-5">
          <h3 className="fw-bold">About Us</h3>
        </div>
        <div className="container-lg mb-5">
          <div className="about-img text-center">
            <img width="75%" src={aboutImg} alt="..." />
          </div>
        </div>
        <div className="row d-flex justify-content-between border rounded py-3 mb-5">
          <div className="col-12 col-md-6 text-center">
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
          <div className="col-4 col-md-4 d-none">
            <div className="about-image my-5">
              <img height={250} width="100%" src={about} alt="..." />
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-between border rounded py-3">
          <div className="col-12 col-md-6">
            <div className="about-text">
              <p className="text-muted fw-bold">MEET OUR DIRECTOR</p>
              <p>
                Mr Sunil Kumar is the Director at Teciex Solutions, a software
                platform that enables institutions and SME to understand and
                utilize digitalization in their Business. Thus, by turning
                idealisms into potentials, shaping dreams into reality, and
                exploring what was formerly off the beaten path, RCS has marked
                the ray of Sunshine by accomplishing these all. Dedication,
                commitment, quality, and performance-driven approach are some of
                our resilience fundamental characteristics. RCS does this
                through the combination of product design and development,
                system improvement, and cost controls in manufacturing and
                marketing operations.
              </p>
              <p>
                Our diverse talented team is our greatest asset. We have got our
                own beliefs, values, and codes of practice, that are highly
                nurtured inside the company and append a keen focus on
                technology, clients, and above all, the society. The ongoing
                optimization of our organization’s operational and manufacturing
                process creates maximum cost efficiency by using resources
                optimally. RCS has always been a flag-bearer in an effort to
                bring the technology ahead of time. So, we strived to be the
                best IT industry that delivers sustainable business, software
                excellence, and great revenue generation.
              </p>
              <p className="mb-0">
                On a final note, we firmly believe that the future holds promise
                for us. We are proud of having earned the patronage of many
                reputed companies and strive to add many more to our customer
                base. We pledge to see our growth in yours and have customer
                focus as our guiding light. So if you are an enterprise or a
                professional, as a consumer or a supplier, I welcome you as a
                co-traveler in our quest for excellence.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 order-first">
            <div className="about-image my-5">
              <img
                height={250}
                width="100%"
                src={sunil}
                alt="..."
                className="rounded"
              />
            </div>
          </div>
        </div>
      </div>
      <Team />
    </section>
  );
};

export default About;
