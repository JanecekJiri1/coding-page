import React from "react";

import "./navigation.style.css";

// img and icons
import navImg from "../../../assets/logo.png";
import { HiMenuAlt2 } from "react-icons/hi";
import { BiCalendarCheck } from "react-icons/bi";

function Navigation(props) {
  return (
    <nav>
      <div className="nav--leftSize">
        <button className="nav--button">
          <HiMenuAlt2 className="nav--icons" />
        </button>
        <p className="nav--text">MENU</p>
        <h4>+420 123 234 345</h4>
      </div>
      <div className="nav--middleSize">
        <img src={navImg} alt="hart in the middle of navigation" />
      </div>
      <div className="nav--rightSize">
        <h4>napisNam@email.org</h4>
        <div className="calenarAndflag">
          <button className="nav--button">
            <BiCalendarCheck className="nav--icons" />
            <p className="nav--text">Kalendar</p>
          </button>
          <button className="nav--button">
            <p className="nav--language"> CZ </p>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;