import React from "react";
import plant from "../../assets/img/health.png";
import "./home.scss";
import HomeCarousel from "../HomeCarosel/Carosel";
import logo from "./logo2.png";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 1100,
      behavior: "smooth",
    });
  };
  return (
    <>
      <HomeCarousel />
      <div className="wrapper-text">
        <img src={logo} />
        <div className="text">
          PLANT HEALTH ASSESSMENT BASED ON PRECISION IOT LEAF PHYTOMETRY
          TECHNIQUES
        </div>
      </div>
      {/* <div className="home">
        <div className="left-box">
          <div className="text">
            PLANT HEALTH ASSESSMENT BASED ON PRECISION IOT LEAF PHYTOMETRY
            TECHNIQUES
          </div>

          <button class="learn-more" onClick={scrollToTop}>
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">Learn More</span>
          </button>
        </div> */}
      {/* <div className="right-box">
          <img className="image-home" src={plant} />
        </div> */}
      {/* </div> */}
    </>
  );
};

export default Home;
