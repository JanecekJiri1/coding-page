import React from "react";
import Carousel from "../../hooks/carousel/Carousel";
import "./sectionFiveCarousel.style.css";

import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";
import img5 from "./assets/6.jpg";

const one = (
  <div className="sectionFive--carousel--img--container">
    <img src={img1} alt="" />
  </div>
);
const two = (
  <div className="sectionFive--carousel--img--container">
    <img src={img2} alt="" />
  </div>
);
const three = (
  <div className="sectionFive--carousel--img--container">
    <img src={img4} alt="" />
  </div>
);
const four = (
  <div className="sectionFive--carousel--img--container">
    <img src={img5} alt="" />
  </div>
);

function SectionFiveCarousel(props) {
  const slides = [one, two, three, four];

  return (
    <div className="container-carousal">
      <Carousel slides={slides} controls indicators autoPlay={false} />
    </div>
  );
}

export default SectionFiveCarousel;
