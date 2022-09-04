import React, { useState } from "react";
import "./header.style.css";
import Navigation from "../navigation/Navigation";
import MoreInfoHeader from "./MoreInfoHeader";
import { Link } from "react-scroll";

import Menu from "../navigation/menu/Menu";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

function Header(props) {
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();
  return (
    <>
      <header id="header">
        {isOpen && <MoreInfoHeader setIsOpen={setIsOpen} />}
        {showMenu && <Menu setShowMenu={setShowMenu} />}
        <Navigation setShowMenu={setShowMenu} />
        <div className="insideHeader">
          <span className="click-away--title">
            <h2>{t("P1pageName")} </h2>
            <h3>{t("P2pageName")}</h3>
          </span>
          <h2 className="click-away--Titleh2 sPo">{t("h2underName")} </h2>
          <p>{t("headerInfo")}</p>
          <div className="header--button">
            <button className="click-away--button" onClick={() => setIsOpen(true)}>
              {t("btnInfo")}
            </button>
            <Link to="price" activeClass="none" spy={true} smooth={true} offset={0} duration={500}>
              <button className="click-away--button black--button"> {t("btnPrice")}</button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
