import React from "react";
import { Link } from "react-router-dom";
import "../../css/aboutus.css";

const HeaderSection = () => {
  return (
    <>
      <header className="header">
        <div className="header_logoContainer">
          <img
            src="./images/Logo.svg"
            width="150"
            height="75"
            alt="PMEntire's logo"
          />
        </div>
        <div className="header_navContainer">
          <nav className="nav">
            <ul className="nav_list">
              <li className="nav_list__items whiteText">
                {/* <a href="index.html">About Us</a> */}
                <Link to="/aboutus">About us</Link>
              </li>
              <li className="nav_list__items whiteText">
                {/* <a href="contactus.html">Contact Us</a> */}
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
export default HeaderSection;
