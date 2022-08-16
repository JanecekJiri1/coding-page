import React from "react";

function CarouselIndicators({ slides, currentIndex, switchIndex }) {
  return (
    <div className="carousel-indicators">
      {slides.map((_, index) => (
        <button className={`carousel-indicator-item--section5${currentIndex === index ? " active" : ""}`} onClick={() => switchIndex(index)}></button>
      ))}
    </div>
  );
}

export default CarouselIndicators;
