import React, { useState } from "react";
import CarouselItem from "./CarouselItem";
import CarouselControls from "./CarouselControls";
import "./carusol.style.css";

function Carousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(1);

  const prev = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setCurrentSlide(index);
  };
  const next = () => {
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };

  return (
    <div className="carousel">
      <div className="carousel--inner" style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <CarouselItem slide={slide} key={index} />
        ))}
      </div>
      <CarouselControls prev={prev} next={next} />
    </div>
  );
}

export default Carousel;
