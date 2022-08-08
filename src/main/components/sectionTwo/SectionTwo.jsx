import React from "react";
import "./sectionTwo.style.css";
import videoBG from "../../../assets/videoBG.mp4";

function SectionTwo(props) {
  return (
    <div className="sectionTwo" id="section2">
      <video src={videoBG} autoplay="true" muted loop />
      <div className="sectionTwo--text">
        <h2>Objevuj!!</h2>
        <h3>A nikdy nelituj!</h3>
      </div>
    </div>
  );
}

export default SectionTwo;
