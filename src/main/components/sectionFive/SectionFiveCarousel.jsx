import React from "react";
import Carousel from "../../hooks/carousel/Carousel";
// import "./appCarousel.style.css";

import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";
import img5 from "./assets/6.jpg";

function SectionFiveCarousel(props) {
  const slides = [img1, img3, img3];

  return (
    <div className="container-carousal">
      <Carousel slides={slides} controls indicators autoPlay={false} />
    </div>
  );
}

export default SectionFiveCarousel;
