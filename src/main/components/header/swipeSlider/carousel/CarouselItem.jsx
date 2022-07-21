import React from "react";

function CarouselItem({ slide }) {
  return (
    <div className="carousel--item">
      <p> {slide} </p>
    </div>
  );
}

export default CarouselItem;
