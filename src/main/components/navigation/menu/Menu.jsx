import React, { useRef } from "react";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useClickOutside } from "../../../hooks/useClickOutside";
import "./menu.style.css";
import navImg from "../../../../assets/logo.png";

function Menu(props) {
  const menuRef = useRef(null);

  useClickOutside(menuRef, () => props.setShowMenu(false));

  return (
    <div className="nav--menu">
      <div className="inside--menu" ref={menuRef}>
        <div className="menu--header">
          <div className="menu--header--icon" onClick={() => props.setShowMenu(false)}>
            <AiOutlineClose className="menu--header--icon--cros" />

            <p> menu</p>
          </div>
          <div className="menu--header--logo">
            <h2>
              Love is <br /> click away
            </h2>
            <img src={navImg} alt="" />
          </div>
        </div>
        <h3>Další projekty</h3>
        <div className="menu--body">
          <div className="menu--body--left">
            <a href="/">Activity</a>
            <a href="/">Activity</a>
            <a href="/">Activity</a>
          </div>
          <div className="menu--body--right">
            <a href="/">Activ</a>
            <a href="/">Activ</a>
            <a href="/">Actiy</a>
            <a href="/">Activ</a>
            <a href="/">Activ</a>
            <a href="/">Activ</a>
          </div>
        </div>
        <div className="menu--footer">
          {/* <div className="menu--footer--social--icons"> */}
          {/* <a href="/">
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
          </div> */}

          <div className="menu--footer--contact">
            <h3>telefon</h3>
            <h3>email</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
