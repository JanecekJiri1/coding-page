import React from "react";

function CarouselItem({ slide, stopSlide, startSlide }) {
  return (
    <div className="carousel--item" onMouseEnter={stopSlide} onMouseOut={startSlide}>
      {slide}
      <img className="img--section5" src={slide} alt="" />
    </div>
  );
}

export default CarouselItem;
