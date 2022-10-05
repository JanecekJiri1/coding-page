import React from "react";
import "./sectionEightFooter.style.css";
import FooterAddInformationComp from "./FooterAddInformationComp";
import { Link } from "react-scroll";

import logo from "../../../assets/logo.png";
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { useTranslation } from "react-i18next";

function SectionEightFooter(props) {
  const { t } = useTranslation();
  return (
    <div id="footer">
      <h2>
        <footer>
          <div className="footer--top">
            <div>
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
            <img src={logo} alt="main logo" />
            <div className="footer--top--button">
              <Link to="price" activeClass="none" spy={true} smooth={true} offset={0} duration={500}>
                <button className="click-away--button ">{t("S8 button price")}</button>
              </Link>
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
            <FooterAddInformationComp />
          </div>

          <div className="line">
            <div className="leftLine"></div>
            <p> {t("S8 next projects")}</p>
            <div className="rightLine"></div>
          </div>

          <div className="footer--nextProject">
            <h4>Portfolio</h4>
            <h4>Vinařství</h4>
            <h4>Food order</h4>
          </div>
          <div className="footerSign">
            <p>{t("S8 made")} 21.08.2022</p>
            <p>Jiří Janeřek</p>
          </div>
        </footer>
      </h2>
    </div>
  );
}

export default SectionEightFooter;
