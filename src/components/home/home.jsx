import React from "react";
import plant from "../../assets/img/health.png";
import "./home.scss";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 1100,
      behavior: "smooth",
    });
  };
  return (
    <div className="home">
      <div className="left-box">
        {/* <div className="image-logo">
          <img src={plant} alt="BigCo Inc. logo" />
        </div> */}
        <div className="text">
          PLANT HEALTH ASSESSMENT BASED ON PRECISION IOT LEAF PHYTOMETRY
          TECHNIQUES
        </div>
        {/* <div className="sub-text">
          We are team of talented designers making websites with React
        </div> */}
        <button class="learn-more" onClick={scrollToTop}>
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">Learn More</span>
        </button>
      </div>
      <div className="right-box">
        <img src={plant} />
      </div>
    </div>
  );
};

export default Home;
