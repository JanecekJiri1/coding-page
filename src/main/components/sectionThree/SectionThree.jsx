import React from "react";
import "./sectionThree.style.css";

function SectionThree(props) {
  return (
    <div className="sectionThree">
      <h2 className="click-away--title sectionThree-title">Aktuální nabídka</h2>
      {/* <div className="sectionThree--concept"> */}
      <ul className="sectionThree--concept--top">
        <li>Základ</li>
        <li>Pokročilý</li>
        <li>Doplňky</li>
      </ul>
      <div className="sectionThree--concept--boxs">
        <div className="sectionThree--box">
          <h2>19§</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="sectionThree--box">
          <h2>26§</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="sectionThree--box">
          <h2>34§</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="sectionThree--box">
          <h2>26§/den</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <p className="sectionThree--concept--text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur minus vero recusandae.</p>
    </div>
    // </div>
  );
}

export default SectionThree;
