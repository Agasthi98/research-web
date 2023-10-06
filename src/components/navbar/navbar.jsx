import React from "react";
import "./navbar.scss";
import Home from "../home/home";
import Technologies from "../technologies/technologies";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <h1 className="logo">Research</h1>
        <div className="nav-row">
          <div className="nav-item">Home</div>
          <div className="nav-item">About</div>
          <div className="nav-item">TimeLine</div>
          <div className="nav-item">Documents</div>
          <div className="nav-item">Team</div>
          <div className="nav-item">Contact</div>
        </div>
      </nav>
      <Home />
      <Technologies />
    </>
  );
};

export default Navbar;