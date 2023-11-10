import React, { useState } from "react";
import { links } from "../navItem";
import "./navbar.scss";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(links[0].text);

  const handleClick = (e, item) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;
    // console.log(activeId.id);
    setActiveItem(item);

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
                className={`link-tag ${
                  activeItem === link.text ? "active" : ""
                }`}
                onClick={(e) => handleClick(e, link.text)}
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
