import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import aboutImg from "../Assests/about-img.png";
import career from "../Assests/portfolio/career.png";
import mkh from "../Assests/portfolio/mkh.png";
import iglife from "../Assests/portfolio/iglife.png";
import ve from "../Assests/portfolio/ve.png";
import lb from "../Assests/portfolio/lb.png";
import gi from "../Assests/portfolio/gi.png";
import ki from "../Assests/portfolio/ki.png";
import mndc from "../Assests/portfolio/mndc.png";
import gentop from "../Assests/portfolio/gentop.png";
import winner from "../Assests/portfolio/winner.png";
import nawal from "../Assests/portfolio/nawal.png";
import braj from "../Assests/portfolio/braj.png";

const projects = [
  {
    id: "career",
    link: "https://careeruttsav.com",
    img: career,
    title: "Career Uttsav",
  },
  {
    id: "shri",
    link: "https://mkhastrovastu1.com",
    img: mkh,
    title: "MKH Astrovastu 1",
  },
  {
    id: "iglife",
    link: "https://miglife.in",
    img: iglife,
    title: "MIGLIFE",
  },
  {
    id: "vishwakarma",
    link: "https://vishwakarmaenterprises.in",
    img: ve,
    title: "Vishwakarma Enterprises",
  },
  {
    id: "life",
    link: "https://lifebeginsindia.in",
    img: lb,
    title: "Life Begins",
  },
  {
    id: "gi",
    link: "https://globalinteriorsindia.com",
    img: gi,
    title: "Global Interiors",
  },
  {
    id: "ki",
    link: "http://kalakaarinteriors.com",
    img: ki,
    title: "Kalakaar Interiors",
  },
  {
    id: "mndc",
    link: "http://mndcbangalore.org",
    img: mndc,
    title: "MNDC Bangalore",
  },
  {
    id: "gentop",
    link: "https://gentop.in",
    img: gentop,
    title: "Gentop India Pvt Ltd",
  },
  {
    id: "winner",
    link: "https://winnerinterior.in",
    img: winner,
    title: "Winner Interior",
  },
  {
    id: "nawal",
    link: "https://nawalagro.com",
    img: nawal,
    title: "Nawal Agro",
  },
  {
    id: "braj",
    link: "https://brajgupta.com",
    img: braj,
    title: "Braj Gupta",
  },
];

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <div className="container-lg py-5">
        <div className="about mb-5">
          <h3 className="fw-bold">
            Portfolio - Some of the noteworthy projects we have built
          </h3>
        </div>
        <div className="container-lg mb-5">
          <div className="about-img text-center">
            <img width="75%" src={aboutImg} alt="..." />
          </div>
        </div>
        <div className="row d-flex justify-content-center pt-5">
          {projects.map((project) => {
            return (
              <div
                className="col-10 col-md-3 mx-4 mb-3 pb-3 pt-4 text-center shadow rounded-4"
                key={project.id}
              >
                <Link className="text-decoration-none" to={project.link}>
                  <div className="project">
                    <img
                      height={150}
                      width="100%"
                      src={project.img}
                      alt="..."
                      className="mb-3 rounded-3"
                    />
                    <h4 className="text-dark fw-bold">{project.title}</h4>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
