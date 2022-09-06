import React, { useState, useRef } from "react";
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useClickOutside } from "../../../hooks/useClickOutside";
import "./menu.style.css";

import { useTranslation } from "react-i18next";

function Menu(props) {
  const menuRef = useRef(null);
  const { t } = useTranslation();

  useClickOutside(menuRef, () => props.setShowMenu(false));

  const [menuItem, setMenuItem] = useState("");

  return (
    <div className="nav--menu">
      <div className="inside--menu" ref={menuRef}>
        <div className="menu--header">
          <div className="menu--header--icon" onClick={() => props.setShowMenu(false)}>
            <AiOutlineClose className="menu--header--icon--cros" />

            <p> MENU</p>
          </div>
        </div>
        <h3>{t("next projects")}</h3>
        <div className="menu--body">
          <div className="menu--body--left">
            <div>
              <div className="menu--portfolio">
                <h4 onClick={() => setMenuItem("portfolio")}>Portfolio</h4>
                <h4 onClick={() => setMenuItem("wineMenu")}>{t("wine")}</h4>
                <h4 onClick={() => setMenuItem("foodMenu")}>Food order</h4>
              </div>
            </div>
          </div>

          <div className="menu--body--right">
            {menuItem === "portfolio" && (
              <div className="menu--right--show">
                <a href="https://my-new-portfolio-rebuild.herokuapp.com/" target="_blank">
                  {t("main page")}
                </a>
                <a href="https://my-new-portfolio-rebuild.herokuapp.com/projects" target="_blank">
                  {t("projects")}
                </a>
                <a href="https://my-new-portfolio-rebuild.herokuapp.com/contact" target="_blank">
                  {t("contact")}
                </a>
              </div>
            )}

            {menuItem === "wineMenu" && (
              <div className="menu--right--show">
                <a href="https://wine-vajcner.herokuapp.com/" target="_blank">
                  {t("main page")}
                </a>
                <a href="https://wine-vajcner.herokuapp.com/Wine" target="_blank">
                  {t("Our wine")}
                </a>
                <a href="https://wine-vajcner.herokuapp.com/About" target="_blank">
                  {t("About us")}
                </a>
                <a href="https://wine-vajcner.herokuapp.com/Contact" target="_blank">
                  {t("contact")}
                </a>
              </div>
            )}

            {menuItem === "foodMenu" && (
              <div className="menu--right--show">
                <a href="https://food-order-portfolio.herokuapp.com/" target="_blank">
                  {t("main page")}
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="menu--footer">
          <div className="menu--footer--social--icons ">
            <a href="https://www.facebook.com/jiri.janecek.712" target="_blank">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/jirka.janecek1/" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/jirijanecek01/" target="_blank">
              <FaLinkedinIn />
            </a>
            <a href="https://www.youtube.com/channel/UC4RzynFtynvafmysAaYA9Gw" target="_blank">
              <FaYoutube />
            </a>
          </div>
          <div className="menu--footer--contact">
            <h3>+420 703 503 660</h3>
            <h3>janec.jiri@email.cz</h3>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Menu;
