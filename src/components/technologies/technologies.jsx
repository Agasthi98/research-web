import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import python from "../../assets/img/python.png";
import c from "../../assets/img/c.png";
import arduino from "../../assets/img/arduino.png";
import truck from "../../assets/img/truck.png";
import ml from "../../assets/img/ml.png";
import flutter from "../../assets/img/flutter.png";
import firebase from "../../assets/img/firebase.png";
import "@splidejs/react-splide/css";

import "./technologies.scss";

const Technologies = () => {
  return (
    <>
      <div className="body-tech">
        <div className="title">Technologies</div>
        <div className="slider">
          <Splide
            className="splide"
            options={{
              type: "loop",
              perPage: 5,
              focus: "center",
            }}
            aria-label="My Favorite Images"
          >
            <SplideSlide>
              <img src={python} alt="Image 1" />
              <div className="text-icon">Python</div>
            </SplideSlide>

            <SplideSlide>
              <img src={arduino} alt="Image 2" />
              <div className="text-icon">Arduino</div>
            </SplideSlide>

            <SplideSlide>
              <img src={flutter} alt="Image 1" />
              <div className="text-icon">Flutter</div>
            </SplideSlide>
            <SplideSlide>
              <img src={firebase} alt="Image 2" />
              <div className="text-icon">FireBase</div>
            </SplideSlide>

            <SplideSlide>
              <img src={ml} alt="Image 2" />
              <div className="text-icon">ML</div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </>
  );
};

export default Technologies;
