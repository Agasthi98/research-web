import React from "react";
import "./landing.scss";
import Nav from "../navbar/navbar";
import Home from "../home/home";
import TimeLine from "../timeLine/timeLine";
import Technologies from "../technologies/technologies";

const Landing = () => {
  return (
    <>
      <Nav />
      <Home />
      <TimeLine />
      <Technologies />
    </>
  );
};

export default Landing;
