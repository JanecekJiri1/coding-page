import React from "react";
import "./sectionEightFooter.style.css";

import logo from "../../../assets/logo.png";
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

function SectionEightFooter(props) {
  return (
    <div id="footer">
      <h2>
        <footer>
          <div className="footer--top">
            <div className="social--icon">
              <FaFacebookF />
              <FaYoutube />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
            <img src={logo} alt="main logo" />
            <div className="footer--top--button">
              <button className="click-away--button">Zobrazit Cenu</button>
            </div>
          </div>

          <div className="line">
            <div className="leftLine"></div>
            <div className="middleStar">
              <AiOutlineStar />
            </div>
            <div className="rightLine"></div>
          </div>

          <div className="footer--contact">
            <h2 className="click-away--Titleh2">+420 703 503 660</h2>
            <h2 className="click-away--Titleh2">janec.jiri@email.cz</h2>
          </div>

          <div className="line">
            <div className="leftLine"></div>
            <div className="middleStar">
              <AiOutlineStar />
            </div>
            <div className="rightLine"></div>
          </div>

          <div className="footer--addInformation">
            <div className="footer--addInformation--column">
              <h5>Some Name</h5>
              <ul>
                <li>asdasd</li>
                <li>Text text</li>
                <li>Text text</li>
              </ul>
            </div>
            <div>
              <h5>Some Name</h5>
              <ul>
                <li>asdasd</li>
                <li>Text text</li>
                <li>Text text</li>
              </ul>
            </div>
            <div>
              <h5>Some Name</h5>
              <ul>
                <li>asdasd</li>
                <li>Text text</li>
                <li>Text text</li>
                <li>Text text</li>
              </ul>
            </div>
            <div>
              {" "}
              <h5>Some Name</h5>
              <ul>
                <li>asdasd</li>
                <li>Text text</li>
                <li>Text text</li>{" "}
              </ul>
            </div>
          </div>

          <div className="line">
            <div className="leftLine"></div>
            <p> Naše další projekty</p>
            <div className="rightLine"></div>
          </div>

          <div className="footer--nextProject">
            <h4>Portfolio</h4>
            <h4>Vinařství</h4>
            <h4>Food order</h4>
          </div>
          <div className="footerSign">
            <p>Vytvořeno 21.08.2022</p>
            <p>Jiří Janeřek</p>
          </div>
        </footer>
      </h2>
    </div>
  );
}

export default SectionEightFooter;
