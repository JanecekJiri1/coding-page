import React, { useState, useRef } from "react";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useClickOutside } from "../../../hooks/useClickOutside";
import "./menu.style.css";

function Menu(props) {
  const menuRef = useRef(null);

  useClickOutside(menuRef, () => props.setShowMenu(false));

  const [portfolio, setPortfolio] = useState(false);
  const [wine, setWine] = useState(false);
  const [foodOrder, setfoodOrder] = useState(false);
  const portfolioHandler = () => {
    setPortfolio(true);
    setWine(false);
    setfoodOrder(false);
  };
  const wineHandler = () => {
    setPortfolio(false);
    setWine(true);
    setfoodOrder(false);
  };
  const foodOrderHandler = () => {
    setPortfolio(false);
    setWine(false);
    setfoodOrder(true);
  };

  return (
    <div className="nav--menu">
      <div className="inside--menu" ref={menuRef}>
        <div className="menu--header">
          <div className="menu--header--icon" onClick={() => props.setShowMenu(false)}>
            <AiOutlineClose className="menu--header--icon--cros" />

            <p> menu</p>
          </div>
        </div>
        <h3>Další projekty</h3>
        <div className="menu--body">
          <div className="menu--body--left">
            <div>
              <div className="menu--portfolio">
                <h4 onClick={portfolioHandler}>Portfolio</h4>
                <h4 onClick={wineHandler}>Vinařství</h4>
                <h4 onClick={foodOrderHandler}>Food order</h4>
              </div>
            </div>
          </div>

          <div className="menu--body--right">
            {portfolio && (
              <div className="menu--portfolio">
                <a href="/">
                  <p>Main page</p>
                </a>
                <a href="/">About</a>
                <a href="/">Projects</a>
                <a href="/">contact</a>
              </div>
            )}
            {wine && (
              <div className="menu--wine">
                <a href="/">
                  <p>Main page</p>
                </a>
                <a href="/">
                  <p>Out wine</p>
                </a>
                <a href="/">
                  <p>About us</p>
                </a>
                <a href="/">
                  <p> contact</p>
                </a>
              </div>
            )}

            {foodOrder && (
              <div className="menu--food">
                <a href="/">
                  <p>Main page</p>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="menu--footer">
        <div className="menu--footer--social--icons social--icon">
          <a href="/">
            <FaFacebook />
          </a>
          <a href="/">
            <FaInstagram />
          </a>
          <a href="/">
            <FaLinkedin />
          </a>
          <a href="/">
            <FaYoutube />
          </a>
        </div>

        <div className="menu--footer--contact">
          <h3>+420 703 503 660</h3>
          <h3>janec.jiri@email.cz</h3>
        </div>
      </div>
    </div>
  );
}

export default Menu;
