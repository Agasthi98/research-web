import React from "react";
import { links } from "../navItem";
import "./navbar.scss";

const Navbar = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;
    console.log(location);

    //decrease navbar height
    window.scrollTo({
      left: 0,
      top: location - 72.3,
    });
  };
  return (
    <>
      <nav className="navbar">
        <h1 className="logo">Research | 2023</h1>
        <div className="nav-row">
          {links.map((link) => {
            return (
              <a
                className="link-tag"
                onClick={handleClick}
                href={link.url}
                key={link.id}
              >
                {link.text}
              </a>
            );
          })}
        </div>
      </nav>
      {/* <Home /> */}
    </>
  );
};

export default Navbar;
