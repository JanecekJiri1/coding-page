import React from "react";
import "./slideNavigation.style.css";

function SlideNavigation(props) {
  return (
    <>
      <div className="slideNavigation">
        <a href="#header">Nahoru</a>

        <a href="#section1">Section 1</a>
        <a href="#section2">Section 2</a>
        <a href="#section3">Section 3</a>
        <a href="#section4">Zkusit4</a>
        <a href="#section5">Zkusit5</a>
        <a href="#section6">Zkusit6</a>
      </div>
    </>
  );
}

export default SlideNavigation;
