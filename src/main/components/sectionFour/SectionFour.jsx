import React from "react";
import "./sectionFour.style.css";
import { AiOutlineWoman } from "react-icons/ai";
import SectionFourSlider from "./slider/SectionFourSlider";

function SectionFour(props) {
  return (
    <div className="SectionFour">
      <h2 className="click-away--title ">V čem všem si můžete rozumět</h2>
      <AiOutlineWoman className="global--icon" />
      <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
      <div className="sectionFour--Slider">{/* <SectionFourSlider />git a */}</div>
    </div>
  );
}

export default SectionFour;
