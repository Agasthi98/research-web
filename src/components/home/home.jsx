import React from "react";
import companyLogo from "../../assets/img/hero-img.png";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="left-box">
        <div className="text">
          PLANT HEALTH ASSESSMENT BASED ON PRECISION IOT LEAF PHYTOMETRY
          TECHNIQUES
        </div>
        {/* <div className="sub-text">
          We are team of talented designers making websites with React
        </div> */}
        <button class="learn-more">
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">Learn More</span>
        </button>
      </div>
      <div className="right-box">
        <img src={companyLogo} />
      </div>
    </div>
  );
};

export default Home;
