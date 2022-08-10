import React, { useState } from "react";
import "./header.style.css";
import Navigation from "../navigation/Navigation";

import Menu from "../navigation/menu/Menu";

function Header(props) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header id="header">
      {showMenu && <Menu setShowMenu={setShowMenu} />}
      <Navigation setShowMenu={setShowMenu} />
      <div className="insideHeader">
        <h1 className="click-away--title">
          Love is <br /> one click away
        </h1>
        <h2 className="click-away--Titleh2 sPo">Or something like that </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, iure! Tempore ut ad, repudiandae doloribus accusamus perspiciatis omnis
          debitis repellat?
        </p>
        <div className="header--button">
          <button className="click-away--button">Více informací</button>
          <button className="click-away--button black--button">Ceník</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
