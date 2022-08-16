import React from "react";
import "./sectionFive.style.css";
import { AiOutlineWoman } from "react-icons/ai";

import SectionFiveCarousel from "./SectionFiveCarousel";

function SectionFour(props) {
  return (
    <div className="SectionFour">
      <h2 className="click-away--title ">jsem páta</h2>
      <AiOutlineWoman className="global--icon" />
      <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
      <div className="sectionFour--Slider">
        <SectionFiveCarousel />
      </div>
    </div>
  );
}

export default SectionFour;
