import React from "react";
import SectionThreeBoxs from "./SectionThreeBoxs";
import "./sectionThree.style.css";

function SectionThree(props) {
  return (
    <div className="sectionThree" id="section3">
      <h2 className="click-away--title sectionThree-title">Aktuální nabídka</h2>
      {/* <div className="sectionThree--concept"> */}
      <SectionThreeBoxs />

      <p className="sectionThree--concept--text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur minus vero recusandae.</p>
    </div>
    // </div>
  );
}

export default SectionThree;
