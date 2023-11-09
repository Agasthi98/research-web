import React, { useState, useEffect } from "react";
// import "./BackToTop.scss"; // Import your CSS file for styling
import { FaArrowAltCircleUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="back-to-top">
      {isVisible && (
        <div onClick={scrollToTop}>
          <FaArrowAltCircleUp
            style={{
              position: "fixed",
              bottom: "50px",
              right: "50px",
              height: "40px",
              width: "40px",
              cursor: "pointer",
              color: "#1e3050",
            }}
            size={40}
          />
        </div>
      )}
    </div>
  );
};

export default BackToTopButton;
