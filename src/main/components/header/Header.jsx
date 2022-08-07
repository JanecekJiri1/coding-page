import React, { useState, useRef } from "react";
import "./header.style.css";
import Navigation from "../navigation/Navigation";
import CarousalApp from "./swipeSlider/CarousalApp";
import HeaderFooter from "./swipeSlider/HeaderFooter";
import Menu from "../navigation/menu/Menu";
import { useClickOutside } from "../../hooks/useClickOutside";

function Header(props) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      {showMenu && <Menu setShowMenu={setShowMenu} />}

      <Navigation setShowMenu={setShowMenu} />
      <div className="insideHeader">
        <h1 className="click-away--title">
          Love is <br /> one click away
        </h1>
        <h2 className="click-away--Titleh2">Or something like that </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, iure! Tempore ut ad, repudiandae doloribus accusamus perspiciatis omnis
          debitis repellat?
        </p>
        <div className="header--button">
          <button className="click-away--button">Více informací</button>
          <button className="click-away--button black--button">Ceník</button>
        </div>
        <HeaderFooter />
        <CarousalApp />
      </div>
    </header>
  );
}

export default Header;
