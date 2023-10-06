import React from "react";
import "./landing.scss";
import Nav from "../navbar/navbar";
import Home from "../home/home";
import Technologies from "../technologies/technologies";

const Landing = () => {
  return (
    <>
      <Nav />
      <Home />
      <Technologies />
    </>
  );
};

export default Landing;
