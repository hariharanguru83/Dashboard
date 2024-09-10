import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import "./Header.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showHamburger, setShowHamburger] = useState();
  const toggleHamburger = () => {
    setShowHamburger(!showHamburger);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="container">
      <div className="header">
        <h1>Dashboard</h1>
        <div className="hamburger" onClick={toggleHamburger}>
          {!showHamburger ? (
            <GiHamburgerMenu className="hamburger-icon" />
          ) : (
            <IoMdClose className="hamburger-icon" />
          )}
        </div>
        <nav
          style={{
            display: !isMobile || (isMobile && showHamburger) ? "flex" : "none",
          }}
        >
          <ul>
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
