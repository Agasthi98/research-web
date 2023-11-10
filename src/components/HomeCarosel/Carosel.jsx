import React from "react";
import { Carousel } from "react-bootstrap";
import Home2 from "./image2.jpg";
import Home3 from "./image3.jpg";
import Home4 from "./image4.jpg";
import Home5 from "./image5.jpg";

const HomeCarousel = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          style={{ height: "50rem", objectFit: "cover" }}
          src={Home2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          style={{ height: "50rem", objectFit: "cover" }}
          src={Home3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          style={{ height: "50rem", objectFit: "cover" }}
          src={Home4}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          style={{ height: "50rem", objectFit: "cover" }}
          src={Home5}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
