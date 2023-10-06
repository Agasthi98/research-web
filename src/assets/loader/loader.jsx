import React from "react";
import "./loader.scss";

const Loader = () => {
  return (
    <div className="page-loader">
      <div className="loader">
        <span className="child"></span>
        <span className="child"></span>
        <span className="child"></span>
        <span className="child"></span>
      </div>
    </div>
  );
};

export default Loader;
