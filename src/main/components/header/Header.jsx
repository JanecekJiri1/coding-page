import React, { useState } from "react";
import "./header.style.css";
import Navigation from "../navigation/Navigation";
import MoreInfoHeader from "./MoreInfoHeader";
import { Link } from "react-scroll";

import Menu from "../navigation/menu/Menu";

function Header(props) {
  const [showMenu, setShowMenu] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header id="header">
        {isOpen && <MoreInfoHeader setIsOpen={setIsOpen} />}
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
            <button className="click-away--button" onClick={() => setIsOpen(true)}>
              Více informací
            </button>
            <Link to="price" activeClass="none" spy={true} smooth={true} offset={0} duration={500}>
              <button className="click-away--button black--button">Ceník</button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
