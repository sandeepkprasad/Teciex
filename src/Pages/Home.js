import React from "react";
import Landing from "../Components/Landing";
import Service from "../Components/Service";
import Objective from "../Components/Objective";
import Testimonial from "../Components/Testimonial";
import Slider from "../Components/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Landing />
      <Service />
      <Objective />
      <Testimonial />
    </div>
  );
};

export default Home;
