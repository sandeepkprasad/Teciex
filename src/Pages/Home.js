import React, { useEffect } from "react";
import Landing from "../Components/Landing";
import Service from "../Components/Service";
import Objective from "../Components/Objective";
import Testimonial from "../Components/Testimonial";
import Slider from "../Components/Slider";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Slider />
      <Landing />
      <Service />
      <Objective />
      <Testimonial />
    </>
  );
};

export default Home;
