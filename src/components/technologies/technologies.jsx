import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import python from "../../assets/img/python.png";
import c from "../../assets/img/c.png";
import arduino from "../../assets/img/arduino.png";
import truck from "../../assets/img/truck.png";
import "@splidejs/react-splide/css";

import "./technologies.scss";

const Technologies = () => {
  return (
    <div className="slider">
      <Splide
        className="splide"
        options={{
          type: "loop",
          perPage: 4,
          focus: "center",
        }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <img src={python} alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src={c} alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src={arduino} alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src={truck} alt="Image 2" />
        </SplideSlide>

        <SplideSlide>
          <img src={python} alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src={c} alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src={arduino} alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src={truck} alt="Image 2" />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Technologies;
