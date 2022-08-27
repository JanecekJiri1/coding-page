import React from "react";
import "./sectionFourPhoto.style.css";
import { AiOutlineWoman } from "react-icons/ai";

import SectionFourCarousel from "./SectionFourCarousel";

function SectionFour(props) {
  return (
    <div className="SectionFour" id="photo">
      <h2 className="click-away--title ">V čem všem si můžete rozumět</h2>
      <AiOutlineWoman className="global--icon" />
      <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
      <div className="sectionFour--Carousel">
        <SectionFourCarousel />
      </div>
    </div>
  );
}

export default SectionFour;
