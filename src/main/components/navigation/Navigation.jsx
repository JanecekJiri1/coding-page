import React from "react";
import "./navigation.style.css";

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
        <div className="calenarAndflag">
          <span className="nav--language" name="language">
            <button onClick={() => i18next.changeLanguage("cs")} value="cs">
              {t("language cs")}
            </button>
            <button onClick={() => i18next.changeLanguage("en")} value="en">
              {t("language eng")}
            </button>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
