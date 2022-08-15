import React from "react";

function CarouselItem({ slide, stopSlide, startSlide }) {
  return (
    <div className="carousel--item" onMouseEnter={stopSlide} onMouseOut={startSlide}>
      {/* <img src={slide} alt="" /> */}
      {slide}
    </div>
  );
}

export default CarouselItem;
