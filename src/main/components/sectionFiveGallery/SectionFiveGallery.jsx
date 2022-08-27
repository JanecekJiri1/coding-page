import React from "react";
import "./sectionFiveGallery.style.css";
import Gallery from "./gallery/Gallery";

import SectionFiveCarousel from "./SectionFiveCarousel";

function SectionFour(props) {
  return (
    <>
      <div className="sectionFive" id="gallery">
        <h2 className="click-away--title ">K nezapomenuti</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          <br /> temporibus porro neque ipsum dicta odio adipisci quibusdam provident illo, <br /> consequuntur qui unde eius repudiandae laborum
          quos.
        </p>
        <div className="sectionFive--Carousel">
          <SectionFiveCarousel />
        </div>

        <button className="click-away--button">Více fotografii</button>
      </div>
    </>
  );
}

export default SectionFour;
