import React from "react";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";

function SectionFourSlider(props) {
  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
  return (
    <div>
      <body>
        <div classNameName="slideshow-container">
          <div classNameName="mySlides fade">
            <div classNameName="numbertext">1 / 3</div>
            <img src={img1} />
            <div classNameName="text">Caption Text</div>
          </div>

          <div className="mySlides fade">
            <div className="numbertext">2 / 3</div>
            <img src={img2} />
            <div className="text">Caption Two</div>
          </div>

          <div className="mySlides fade">
            <div className="numbertext">3 / 3</div>
            <img src={img3} />
            <div className="text">Caption Three</div>
          </div>

          <a className="prev" onclick={plusSlides + 1}>
            &#10094;
          </a>
          <a className="next" onclick={plusSlides}>
            &#10095;
          </a>
        </div>
        <br />

        <div>
          <span className="dot" onclick={currentSlide(1)}></span>
          <span className="dot" onclick={currentSlide(2)}></span>
          <span className="dot" onclick={currentSlide(3)}></span>
        </div>
      </body>
    </div>
  );
}

export default SectionFourSlider;
