import React, { useRef, useState } from "react";
import "./navigation.style.css";

import { GrLanguage } from "react-icons/gr";

// img and icons
import navImg from "../../../assets/logo.png";
import { HiMenuAlt2 } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function Navigation(props) {
  const { t } = useTranslation();
  return (
    <nav>
      <div className="nav--leftSize">
        <span className="nav--leftSize--menuClick" onClick={() => props.setShowMenu(true)}>
          <HiMenuAlt2 className="nav--icons" />

          <p className="nav--text">MENU</p>
        </span>
        <h4>+420 703 503 660</h4>
      </div>
      <div className="nav--middleSize">
        <img src={navImg} alt="hart in the middle of navigation" />
      </div>
      <div className="nav--rightSize">
        <h4>janec.jiri@email.cz</h4>

        <div className="language">
          <div className="language--options">
            <GrLanguage className="nav--icons " />
            <span className="nav--language" name="language">
              <p onClick={() => i18next.changeLanguage("cs")} value="cs">
                {t("language cs")}
              </p>
              <p onClick={() => i18next.changeLanguage("en")} value="en">
                {t("language eng")}
              </p>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
