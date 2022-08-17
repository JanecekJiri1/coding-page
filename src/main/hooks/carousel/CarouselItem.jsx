import React from "react";

function CarouselItem({ slide, stopSlide, startSlide }) {
  return (
    <div className="carousel--item" onMouseEnter={stopSlide} onMouseOut={startSlide}>
      {slide}
    </div>
  );
}

export default CarouselItem;
