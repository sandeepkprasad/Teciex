import React from "react";
import slide1 from "../Assests/slide1.png";
import slide2 from "../Assests/slide2.jpg";
import slide3 from "../Assests/slide3.jpg";

const Slider = () => {
  return (
    <section className="pt-5">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide container-fluid"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner rounded">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src={slide1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={slide2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={slide3} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
