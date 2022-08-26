import React from "react";
import "./slideNavigation.style.css";
import { Link } from "react-scroll";

function SlideNavigation(props) {
  return (
    <>
      <div className="slideNavigation ">
        <Link to="header" spy={true} smooth={true} offset={0} duration={500}>
          Home
        </Link>
        <Link to="ourOffer" activeClass="none" spy={true} smooth={true} offset={0} duration={500}>
          Our offer
        </Link>
        <Link to="price" activeClass="none" spy={true} smooth={true} offset={0} duration={500}>
          Price
        </Link>
        <Link to="photo" spy={true} smooth={true} offset={35} duration={500}>
          Photo
        </Link>
        <Link to="gallery" activeClass="none" spy={true} smooth={true} offset={0} duration={500}>
          Gallery
        </Link>
        <Link to="form" activeClass="none" spy={true} smooth={true} offset={0} duration={500}>
          Form
        </Link>
        <Link to="instagram" activeClass="none" spy={true} smooth={true} offset={0} duration={500}>
          Instagram
        </Link>
        <Link to="footer" activeClass="none" spy={true} smooth={true} offset={0} duration={500}>
          Informations
        </Link>
      </div>
    </>
  );
}

export default SlideNavigation;
